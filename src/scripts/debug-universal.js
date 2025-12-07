const IconManager = require('./src/lib/icon-manager');
const IconAliases = require('./src/data/icon-aliases');
const KeybindManager = require('./src/lib/keybind-manager');
const GenerateUniversalBar = require('./src/generators/universal-bar');
const path = require('path');
const fs = require('fs');

// Setup
const baseIconsDir = path.join(__dirname, 'Assets/Icons/WoW_Combined');
function getSubDirectories(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .map(file => path.join(dir, file))
    .filter(path => fs.statSync(path).isDirectory());
}
const subDirs = getSubDirectories(baseIconsDir);
const searchDirs = [baseIconsDir, ...subDirs];
const iconManager = new IconManager(searchDirs, IconAliases, 5);
const keybindManager = new KeybindManager();

console.log('--- Debugging Universal Bar ---');

try {
  const items = GenerateUniversalBar(keybindManager, iconManager);

  console.log(`Generated ${items.length} items (Expected: 8)`);

  items.forEach((item, index) => {
    if (!item) {
      console.error(`[${index}] NULL ITEM (Gap found!)`);
      return;
    }

    const name = item.name;
    const key = item.settings?.hotkey;
    const iconPath = item.settings?.icon;

    let iconStatus = 'MISSING ❌';
    if (iconPath && fs.existsSync(iconPath)) {
      iconStatus = 'OK ✅';
    } else if (iconPath) {
      iconStatus = `NOT FOUND ON DISK (${iconPath}) ❌`;
    }

    let keyStatus = key ? `Key: ${key} ✅` : 'NO KEY ❌';

    console.log(`[${index}] ${name.padEnd(15)} | ${iconStatus} | ${keyStatus}`);

    // Detailed Icon Lookup Debug if missing
    if (iconStatus.includes('MISSING')) {
      const alias = IconAliases[name];
      console.log(`    -> Alias: ${alias || 'None'}`);
      const resolved = iconManager.resolveIcon(name);
      console.log(`    -> Resolved: ${resolved || 'null'}`);
    }
  });

} catch (e) {
  console.error('Crash during generation:', e);
}
