/**
 * @fileoverview WoW Stream Deck Profile Generator
 * Generates a multi-page profile for World of Warcraft
 */

const fs = require('fs');
const path = require('path');
const { profile, folder } = require('../lib/profile');
const { hotkey, back } = require('../lib/actions');

// Paths relative to project root
const ASSETS_DIR = path.join(__dirname, '..', '..', 'Assets');
const ICONS_DIR = path.join(ASSETS_DIR, 'Icons', 'WoW_Combined');

// Key Map - macOS native codes and Qt key codes
const KEY_MAP = {
    'A': { n: 0, q: 65 }, 'B': { n: 11, q: 66 }, 'C': { n: 8, q: 67 }, 'D': { n: 2, q: 68 }, 'E': { n: 14, q: 69 },
    'F': { n: 3, q: 70 }, 'G': { n: 5, q: 71 }, 'H': { n: 4, q: 72 }, 'I': { n: 34, q: 73 }, 'J': { n: 38, q: 74 },
    'K': { n: 40, q: 75 }, 'L': { n: 37, q: 76 }, 'M': { n: 46, q: 77 }, 'N': { n: 45, q: 78 }, 'O': { n: 31, q: 79 },
    'P': { n: 35, q: 80 }, 'Q': { n: 12, q: 81 }, 'R': { n: 15, q: 82 }, 'S': { n: 1, q: 83 }, 'T': { n: 17, q: 84 },
    'U': { n: 32, q: 85 }, 'V': { n: 9, q: 86 }, 'W': { n: 13, q: 87 }, 'X': { n: 7, q: 88 }, 'Y': { n: 16, q: 89 },
    'Z': { n: 6, q: 90 },
    '0': { n: 29, q: 48 }, '1': { n: 18, q: 49 }, '2': { n: 19, q: 50 }, '3': { n: 20, q: 51 }, '4': { n: 21, q: 52 },
    '5': { n: 23, q: 53 }, '6': { n: 22, q: 54 }, '7': { n: 26, q: 55 }, '8': { n: 28, q: 56 }, '9': { n: 25, q: 57 },
    'F1': { n: 122, q: 16777264 }, 'F2': { n: 120, q: 16777265 }, 'F3': { n: 99, q: 16777266 },
    'F4': { n: 118, q: 16777267 }, 'F5': { n: 96, q: 16777268 }, 'F6': { n: 97, q: 16777269 },
    'F7': { n: 98, q: 16777270 }, 'F8': { n: 100, q: 16777271 }, 'F9': { n: 101, q: 16777272 },
    'F10': { n: 109, q: 16777273 }, 'F11': { n: 103, q: 16777274 }, 'F12': { n: 111, q: 16777275 },
    '-': { n: 27, q: 45 }, '=': { n: 24, q: 61 }, '[': { n: 33, q: 91 }, ']': { n: 30, q: 93 },
    ';': { n: 41, q: 59 }, '\'': { n: 39, q: 39 }, '\\': { n: 42, q: 92 }, ',': { n: 43, q: 44 },
    '.': { n: 47, q: 46 }, '/': { n: 44, q: 47 }, '`': { n: 50, q: 96 },
    'TAB': { n: 48, q: 16777217 }, 'SPACE': { n: 49, q: 32 }, 'ESC': { n: 53, q: 16777216 },
    'ENTER': { n: 36, q: 16777220 }, 'BACKSPACE': { n: 51, q: 16777219 }
};

/**
 * Parse modifier string into hotkey settings
 * @param {string} modStr
 * @returns {Object}
 */
function parseModifiers(modStr) {
    const settings = { KeyCmd: false, KeyCtrl: false, KeyOption: false, KeyShift: false, KeyModifiers: 0 };
    if (!modStr) return settings;
    const mods = modStr.toLowerCase();

    if (mods.includes('shift')) { settings.KeyShift = true; settings.KeyModifiers |= 0x02000000; }
    if (mods.includes('ctrl')) { settings.KeyCtrl = true; settings.KeyModifiers |= 0x04000000; }
    if (mods.includes('alt') || mods.includes('opt')) { settings.KeyOption = true; settings.KeyModifiers |= 0x08000000; }
    if (mods.includes('cmd')) { settings.KeyCmd = true; settings.KeyModifiers |= 0x10000000; }

    return settings;
}

/**
 * Resolve an icon file path
 * @param {string} iconName
 * @returns {string|null}
 */
function resolveImage(iconName) {
    if (!iconName) return null;

    let p = path.join(ICONS_DIR, iconName);
    if (fs.existsSync(p)) return p;

    if (!iconName.endsWith('.png')) {
        p = path.join(ICONS_DIR, `${iconName}.png`);
        if (fs.existsSync(p)) return p;
    }

    // Try without spaces
    const noSpace = iconName.replace(/\s/g, '');
    p = path.join(ICONS_DIR, `${noSpace}.png`);
    if (fs.existsSync(p)) return p;

    return null;
}

/**
 * Parse a CSV file
 * @param {string} filePath
 * @returns {Object[]}
 */
function parseCSV(filePath) {
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const data = [];
    const header = lines[0].split(',').map(h => h.trim());

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line || line.startsWith('#')) continue;
        const parts = line.split(',');
        const row = {};
        header.forEach((h, idx) => { row[h] = parts[idx]?.trim(); });
        data.push(row);
    }
    return data;
}

/**
 * Generate WoW profile
 * @param {Object} _argv - Command line arguments (unused for now)
 * @returns {Object}
 */
function generate(_argv) {
    const images = {};

    function registerImage(profileName, imageName, sourceIcon) {
        if (!sourceIcon) return undefined;
        if (!images[profileName]) images[profileName] = {};
        const absPath = resolveImage(sourceIcon);
        if (absPath) {
            images[profileName][imageName] = absPath;
            return imageName;
        }
        return undefined;
    }

    // Parse CSV files
    const paladinRows = parseCSV(path.join(ASSETS_DIR, 'abilities_paladin.csv'));
    const craftingRows = parseCSV(path.join(ASSETS_DIR, 'abilities_crafting.csv'));

    const additionalProfiles = [];

    // Helper: Create a layout from CSV rows
    function createProfileFromRows(name, rows, keyCol, imgCol, titleCol, modCol) {
        const actions = [];
        const backImg = registerImage(name, 'Back.png', 'Back.png') ||
            registerImage(name, 'Back.png', 'Portal_AlteracValleyAlliance.png');
        actions[0] = [back(backImg)];

        let rowNum = 0, colNum = 1;

        rows.forEach(r => {
            const keyStr = r[keyCol];
            if (!keyStr) return;

            const parts = keyStr.split('+').map(s => s.trim());
            const kName = parts[parts.length - 1];
            const mStr = parts.length > 1 ? parts.slice(0, -1).join(' ') : (modCol ? r[modCol] : '');

            let mapKey = kName.toUpperCase();
            if (mapKey === 'SPACEBAR') mapKey = 'SPACE';
            if (mapKey === 'NUM LOCK') return;

            const keyData = KEY_MAP[mapKey];
            if (!keyData) return;

            const mods = parseModifiers(mStr);
            const iconSource = r[imgCol] || r[titleCol];
            const imgName = registerImage(name, `${r[titleCol].replace(/\s/g, '')}.png`, iconSource);

            if (!actions[rowNum]) actions[rowNum] = [];

            actions[rowNum][colNum] = hotkey({
                title: r[titleCol],
                image: imgName,
                hotkey: { ...mods, NativeCode: keyData.n, QTKeyCode: keyData.q, VKeyCode: keyData.n }
            });

            colNum++;
            if (colNum > 7) { colNum = 0; rowNum++; }
        });

        const p = profile({ name: name, actions: actions });
        additionalProfiles.push(p);
        return p;
    }

    // Create sub-profiles
    const paladinProfile = createProfileFromRows('Paladin', paladinRows, 'Key', 'Icon', 'Ability', 'Modifiers');
    const craftingProfile = createProfileFromRows('Crafting', craftingRows, 'Key', 'Icon', 'Ability', 'Modifiers');

    // --- Master Page ---
    const masterActions = [];

    function addFolder(r, c, prof, iconName, source) {
        if (!prof) return;
        const img = registerImage('WoW', iconName, source);
        if (!masterActions[r]) masterActions[r] = [];
        masterActions[r][c] = folder(prof, img);
    }

    function addMasterAction(r, c, title, keyStr, iconSource) {
        if (!keyStr) return;
        const parts = keyStr.split('+').map(s => s.trim());
        const kName = parts[parts.length - 1];
        const mStr = parts.length > 1 ? parts.slice(0, -1).join(' ') : '';

        let mapKey = kName.toUpperCase();
        if (mapKey === 'SPACEBAR') mapKey = 'SPACE';
        const kData = KEY_MAP[mapKey] || KEY_MAP['ESC'];
        const mods = parseModifiers(mStr);

        let source = iconSource;
        if (title === 'World Map') source = 'Map.png';

        const img = registerImage('WoW', `${title.replace(/\s/g, '')}.png`, source);

        if (!masterActions[r]) masterActions[r] = [];
        masterActions[r][c] = hotkey({
            title: title,
            image: img,
            hotkey: { ...mods, NativeCode: kData.n, QTKeyCode: kData.q, VKeyCode: kData.n }
        });
    }

    // Row 0: Navigation Folders
    addFolder(0, 0, paladinProfile, 'Pal.png', 'Paladin.png');
    addFolder(0, 1, craftingProfile, 'Craft.png', 'Profs.png');

    // Row 1: Critical Custom Actions
    addMasterAction(1, 0, 'Mount', 'M', 'Mount.png');
    addMasterAction(1, 1, 'Hearth', 'F12', 'Hearth.png');
    addMasterAction(1, 2, 'World Map', 'M', 'WorldMap.png');
    addMasterAction(1, 3, 'Reload', 'Ctrl+Shift+R', 'Reload.png');

    const mainProfile = profile({ name: 'WoW', actions: masterActions });

    return {
        mainProfile: mainProfile,
        additionalProfiles: additionalProfiles,
        images: images
    };
}

module.exports = generate;
