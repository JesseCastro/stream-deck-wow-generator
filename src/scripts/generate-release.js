const fs = require('fs');
const path = require('path');
const JsZip = require('jszip');
const { execSync } = require('child_process');

const Classes = require('../data/classes');
const Races = require('../data/races');
const iconAliases = require('../data/icon-aliases');
const generateWoW = require('../generators/wow');
const { profileFolderId } = require('../lib/ids');
const { topLevelManifest } = require('../lib/profile');

const BUILD_DIR = path.join(__dirname, '../../Build/Release');
const ASSETS_DIR = path.join(BUILD_DIR, '_assets');
const SOURCE_ICONS_DIR = path.join(__dirname, '../../Assets/Icons/WoW_Combined');

// Helper to find icon path from alias
function findIconPath(aliasName) {
  const filename = iconAliases[aliasName];
  if (!filename) return null;

  // We need to find where this file is. The alias map doesn't have full paths.
  // We can use the IconManager logic or just do a brute force find if needed,
  // BUT since we are in the script, we can just use the `find` command or walk the dir.
  // However, for speed, we might want to just assume we can find it if we know the filename.
  // The IconManager loads all dirs.
  // Let's rely on the fact we can find it in `SOURCE_ICONS_DIR` recursively.
  // For this script, let's just use `find` command for simplicity as we do it only once per icon needed.
  try {
    const cmd = `find "${SOURCE_ICONS_DIR}" -name "${filename}.png" | head -n 1`;
    const result = execSync(cmd).toString().trim();
    return result;
  } catch (e) {
    return null;
  }
}

// Helper to copy icon
function copyIconToAssets(srcPath, destName) {
  if (!srcPath || !fs.existsSync(srcPath)) return 'question_mark.png'; // Placeholder if missing
  const destPath = path.join(ASSETS_DIR, destName);
  fs.copyFileSync(srcPath, destPath);
  return destName;
}

/**
 * Custom writer to save profile
 */
async function writeProfile(result, outputDir, filenameBase) {
  const { mainProfile, additionalProfiles, images = {}, files = {} } = result;

  const zip = new JsZip();
  const rootDir = zip.folder(`${mainProfile.uuid}.sdProfile`);

  rootDir.file('manifest.json', JSON.stringify(topLevelManifest(mainProfile, additionalProfiles)));
  const profilesDir = rootDir.folder('Profiles');

  for (const currentProfile of [mainProfile, ...additionalProfiles]) {
    const profileDir = profilesDir.folder(profileFolderId(currentProfile.uuid));
    currentProfile.manifest.Name = filenameBase.replace(/_/g, ' ');
    profileDir.file('manifest.json', JSON.stringify(currentProfile.manifest));

    const profileImages = images[currentProfile.name];
    if (profileImages) {
      const imagesDir = profileDir.folder('Images');
      for (const [imageName, imagePath] of Object.entries(profileImages)) {
        if (fs.existsSync(imagePath)) {
          imagesDir.file(imageName, fs.readFileSync(imagePath));
        }
      }
    }
  }

  const profilePath = path.join(outputDir, `${filenameBase}.streamDeckProfile`);
  await new Promise((resolve, reject) => {
    zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
      .pipe(fs.createWriteStream(profilePath))
      .on('finish', resolve)
      .on('error', reject);
  });

  for (const [fname, content] of Object.entries(files)) {
    const auxPath = path.join(outputDir, `${filenameBase}_${fname}`);
    fs.writeFileSync(auxPath, content);
  }
}

function generateMarkdownGrid(items, relativeLinkPrefix = '') {
  // items: { name, icon, link }
  // We want a grid. Markdown doesn't support grids natively well without HTML tables or just inline images.
  // HTML Tables work best in GitHub markdown for grids.
  let md = '<table>\n';
  const cols = 4;
  for (let i = 0; i < items.length; i += cols) {
    md += '<tr>\n';
    for (let j = 0; j < cols; j++) {
      if (i + j < items.length) {
        const item = items[i + j];
        // Icon link: relative paths
        const iconPath = item.icon.startsWith('http') ? item.icon : `_assets/${item.icon}`;
        // If we are deep in folders, we need to adjust path to _assets.
        // relativeLinkPrefix handles this. e.g. '../../_assets/'
        const adjustedIconPath = (item.icon.startsWith('http') ? item.icon : `${relativeLinkPrefix}_assets/${item.icon}`);

        md += `<td align="center">
  <a href="${item.link}">
    <img src="${adjustedIconPath}" width="64" height="64" alt="${item.name}"><br>
    ${item.name}
  </a>
</td>\n`;
      } else {
        md += '<td></td>\n'; // Empty cell
      }
    }
    md += '</tr>\n';
  }
  md += '</table>\n';
  return md;
}


/**
 * Main Generation Function (Exported for Testing)
 * @param {string} [customBuildDir] - Optional override
 * @param {string} [customAssetsDir] - Optional override
 * @param {Object} [customClasses] - Optional override
 * @param {Object} [customRaces] - Optional override
 */
async function generateRelease(customBuildDir, customAssetsDir, customClasses, customRaces) {
  const buildDir = customBuildDir || BUILD_DIR;
  const assetsDir = customAssetsDir || ASSETS_DIR;
  const classesData = customClasses || Classes;
  const racesData = customRaces || Races;

  console.log('Starting Mass Generation with Navigation...');

  if (fs.existsSync(buildDir)) {
    fs.rmSync(buildDir, { recursive: true, force: true });
  }
  fs.mkdirSync(buildDir, { recursive: true });
  // If customized, ensure parent dirs? standard mkdir recursive handles it.
  if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

  // Cache for master list
  const masterList = []; // { class, spec, race, link }
  const hierarchy = {}; // class -> spec -> races

  // 1. Gather Icons
  console.log('Gathering Icons...');
  const classIcons = {};
  for (const cls of Object.keys(classesData)) {
    // Find existing classicon_[cls].png
    let lookups = [
      `classicon_${cls.toLowerCase()}`,
      `classicon_${cls}`,
      // Special cases
      (cls === 'DemonHunter') ? 'classicon_demonhunter' : null,
      (cls === 'DeathKnight') ? 'classicon_deathknight' : null
    ].filter(Boolean);

    // Find first match
    let foundPath = null;
    for (const l of lookups) {
      foundPath = findIconPath(l);
      if (!foundPath) {
        try {
          const cmd = `find "${SOURCE_ICONS_DIR}" -name "${l}.png" | head -n 1`;
          const res = execSync(cmd).toString().trim();
          if (res) foundPath = res;
        } catch (e) { /* Icon lookup failure is acceptable */ }
      }
      if (foundPath) break;
    }

    if (foundPath) {
      // Updated to use passed assetsDir
      classIcons[cls] = copyIconToAssetsInternal(foundPath, `class_${cls}.png`, assetsDir);
    } else {
      const placeh = 'question.png';
      // Copy placeholder if possible? just assume string reference
      classIcons[cls] = placeh;
      // console.warn(`Missing icon for class ${cls}`);
    }
  }

  const raceIcons = {};
  for (const [rName, rData] of Object.entries(racesData)) {
    const racialAlias = rData.racial;
    const aliasValue = iconAliases[racialAlias];
    let foundPath = null;
    if (aliasValue) {
      try {
        const cmd = `find "${SOURCE_ICONS_DIR}" -name "${aliasValue}.png" | head -n 1`;
        const res = execSync(cmd).toString().trim();
        if (res) foundPath = res;
      } catch (e) { /* Icon lookup failure is acceptable */ }
    }

    if (!foundPath) {
      try {
        const cmd = `find "${SOURCE_ICONS_DIR}" -name "*${rName.toLowerCase()}*" | head -n 1`;
        const res = execSync(cmd).toString().trim();
        if (res) foundPath = res;
      } catch (e) { /* Icon lookup failure is acceptable */ }
    }

    if (foundPath) {
      raceIcons[rName] = copyIconToAssetsInternal(foundPath, `race_${rName}.png`, assetsDir);
    } else {
      raceIcons[rName] = 'question.png';
    }
  }

  // 2. Generation Loop
  const totalClasses = Object.keys(classesData).length;
  let classCount = 0;

  for (const [className, classData] of Object.entries(classesData)) {
    classCount++;
    // console.log(`[${classCount}/${totalClasses}] Processing Class: ${className}`);

    hierarchy[className] = {};
    const classDir = path.join(buildDir, className);
    fs.mkdirSync(classDir, { recursive: true });

    for (const [specName, specData] of Object.entries(classData.specs)) {
      // console.log(`  > Spec: ${specName}`);
      hierarchy[className][specName] = [];

      const specDir = path.join(classDir, specName);
      fs.mkdirSync(specDir, { recursive: true });

      for (const [raceName, raceData] of Object.entries(racesData)) {

        // Deep folder
        const raceDir = path.join(specDir, raceName);
        fs.mkdirSync(raceDir, { recursive: true });

        const args = ['--class', className, '--spec', specName, '--race', raceName];

        // If testing, we need keybind/icon managers injected into generateWoW?
        // generateWoW instantiates them internally.
        // We should assume generateWoW works if tests passed.

        try {
          const result = generateWoW(args);

          result.mainProfile.name = 'WoW';
          const filenameBase = `${raceName}_${specName}_${className}`;

          await writeProfile(result, raceDir, filenameBase);

          masterList.push({
            class: className,
            spec: specName,
            race: raceName,
            link: `${className}/${specName}/${raceName}/${filenameBase}.streamDeckProfile`
          });

          hierarchy[className][specName].push(raceName);

        } catch (err) {
          console.error(`FAILED: ${className} ${specName} ${raceName} - ${err.message}`);
        }
      }

      // Generate Spec README (Choose Race)
      const raceItems = hierarchy[className][specName].map(r => ({
        name: r,
        icon: raceIcons[r],
        link: `${r}/README.md`
      }));

      let specReadme = `# Choose your Race (${specName} ${className})\n\n`;
      specReadme += `[< Back to ${className}](../README.md)\n\n`;
      specReadme += generateMarkdownGrid(raceItems, '../../');
      fs.writeFileSync(path.join(specDir, 'README.md'), specReadme);

      // Generate Race README (Download)
      for (const r of hierarchy[className][specName]) {
        const rDir = path.join(specDir, r);
        const filenameBase = `${r}_${specName}_${className}`;
        let raceReadme = `# ${r} ${specName} ${className}\n\n`;
        raceReadme += `[< Back to ${specName}](../README.md)\n\n`;
        raceReadme += '## Downloads\n';
        raceReadme += `- [**Stream Deck Profile**](${filenameBase}.streamDeckProfile)\n`;
        raceReadme += `- [Keybinds](${filenameBase}_keybinds.txt)\n`;
        raceReadme += `- [Lua Script](${filenameBase}_install_keybinds.lua)\n\n`;
        raceReadme += '## Instructions\n';
        raceReadme += '1. Download and open the .streamDeckProfile.\n';
        raceReadme += '2. Copy the content of the Lua script.\n';
        raceReadme += '3. Paste into a macro in WoW and run it to set keybinds.\n';
        fs.writeFileSync(path.join(rDir, 'README.md'), raceReadme);
      }
    }

    // Generate Class README (Choose Spec)
    const specItems = Object.keys(hierarchy[className]).map(s => {
      let specIconName = classIcons[className];
      // Simplified lookup for brevity/reuse
      return {
        name: s,
        icon: specIconName, // fallback for now to avoid duplic logic
        link: `${s}/README.md`
      };
    });

    let classReadme = `# Choose your Spec (${className})\n\n`;
    classReadme += '[< Back to Class Selection](../README.md)\n\n';
    classReadme += generateMarkdownGrid(specItems, '../');
    fs.writeFileSync(path.join(classDir, 'README.md'), classReadme);
  }

  // 3. Generate TLD README
  console.log('Generating TLD README...');
  const classItems = Object.keys(classesData).map(c => ({
    name: c,
    icon: classIcons[c],
    link: `${c}/README.md`
  }));

  let tldReadme = '# World of Warcraft Stream Deck Profiles\n\n';
  tldReadme += '## Choose your Class\n';
  tldReadme += generateMarkdownGrid(classItems, '');

  tldReadme += '\n## Master List\n';
  tldReadme += '| Class | Spec | Race | Profile Link |\n';
  tldReadme += '|-------|------|------|--------------|\n';
  masterList.forEach(item => {
    tldReadme += `| ${item.class} | ${item.spec} | ${item.race} | [Link](${item.link}) |\n`;
  });

  fs.writeFileSync(path.join(buildDir, 'README.md'), tldReadme);

  console.log('Mass Generation & Navigation Complete!');
}

// Internal helper to support custom assets dir
function copyIconToAssetsInternal(srcPath, destName, assetsDir) {
  if (!srcPath || !fs.existsSync(srcPath)) return 'question_mark.png';
  const destPath = path.join(assetsDir, destName);
  fs.copyFileSync(srcPath, destPath);
  return destName;
}


if (require.main === module) {
  generateRelease().catch(console.error);
}

module.exports = { generateRelease };

