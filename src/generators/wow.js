/**
 * @fileoverview WoW Stream Deck Profile Generator
 * Generates a multi-page profile for World of Warcraft
 */

const fs = require('fs');
const path = require('path');
const { profile, folder } = require('../lib/profile');
const { hotkey, action, back } = require('../lib/actions');
const { profileId } = require('../lib/ids');

// Paths relative to project root
const ASSETS_DIR = path.join(__dirname, '..', '..', 'Assets');
const ICONS_DIR = path.join(ASSETS_DIR, 'Icons', 'WoW_Combined');

// Managers
const KeybindManager = require('../lib/keybind-manager');
const IconManager = require('../lib/icon-manager');

// Generators
const GenerateClassPage = require('./class-page');
const GenerateGroupPage = require('./sub-pages/group');
const GeneratePvPPage = require('./sub-pages/pvp');
const GenerateConsumablesPage = require('./sub-pages/consumables');
const GenerateProfessionsPage = require('./sub-pages/professions');
const GenerateMountsPage = require('./sub-pages/mounts');
const GenerateMainPage = require('./main-page');
const GeneratePanicRow = require('./panic-row');
const GenerateUniversalBar = require('./universal-bar');

// Output Generators
const GenerateMacroFile = require('../lib/macro-generator');
const GenerateDocs = require('./docs');

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
 * Generate WoW profile
 */
function generate(argv) {
    // 1. Parse Args
    let classId = 'Paladin';
    let specId = 'Protection';
    let raceId = 'Tauren';

    for (let i = 0; i < argv.length; i++) {
        if (argv[i] === '--class' && argv[i + 1]) classId = argv[i + 1];
        if (argv[i] === '--spec' && argv[i + 1]) specId = argv[i + 1];
        if (argv[i] === '--race' && argv[i + 1]) raceId = argv[i + 1];
    }

    console.log(`Generating Profile for: ${raceId} ${specId} ${classId}`);

    // 2. Setup Managers
    const keybindManager = new KeybindManager();
    const searchDirs = [ICONS_DIR];
    ['Ability', 'Achievement', 'INV', 'Misc', 'Spell', 'Trade', 'UI'].forEach(d => {
        searchDirs.push(path.join(ICONS_DIR, d));
    });

    const iconAliases = require('../data/icon-aliases');
    const iconManager = new IconManager(searchDirs, iconAliases);
    const usedImages = {}; // Map<ProfileName, Map<ImageName, AbsPath>>

    // 3. Pre-generate UUIDs for all profiles
    const uuids = {
        'WoW': profileId(),
        'Group': profileId(),
        'PvP': profileId(),
        'Consumables': profileId(),
        'Professions': profileId(),
        'Mounts': profileId(),
        'Class': profileId()
    };

    const folderMap = {
        'Group': 'Group',
        'PvP': 'PvP',
        'Consumes': 'Consumables',
        'Profs': 'Professions',
        'Mounts': 'Mounts',
        'Raid Markers': 'Group',
        'Class': 'Class'
    };

    // 4. Unified Converter
    function convertToAction(item, profileName) {
        if (!item || item.type === 'empty') return null;

        if (item.type === 'back') {
            // Resolve Back button icon
            const backIconPath = iconManager.resolveIcon('Back');
            let backImage = undefined;
            if (backIconPath) {
                const basename = path.basename(backIconPath);
                if (!usedImages[profileName]) usedImages[profileName] = {};
                usedImages[profileName][basename] = backIconPath;
                backImage = basename;
            }
            return back(backImage);
        }

        // Handle Folders
        if (item.type === 'folder') {
            const targetName = item.targetProfile || folderMap[item.name];
            if (targetName && uuids[targetName]) {
                // Return a folder action
                const targetUUID = uuids[targetName];

                // Resolve Icon
                let iconName = item.name;
                let resolved = null;
                // Try alias or direct resolution
                if (item.settings && item.settings.icon) {
                    resolved = iconManager.resolveIcon(item.settings.icon);
                }
                if (!resolved) {
                    resolved = iconManager.resolveIcon(item.name);
                }

                let imageVal = undefined;
                if (resolved) {
                    const basename = path.basename(resolved);
                    if (!usedImages[profileName]) usedImages[profileName] = {};
                    usedImages[profileName][basename] = resolved;
                    imageVal = basename;
                }

                return folder({ name: targetName, uuid: targetUUID }, imageVal);
            } else {
                console.warn(`Missing target for folder: ${item.name} in ${profileName}`);
                return null;
            }
        }

        // Handle Hotkeys / Macros
        let imageParams = {};
        let resolvedInfo = null;

        // Icon resolution
        const explicitIcon = item.settings && item.settings.icon;
        resolvedInfo = iconManager.resolveIcon(explicitIcon || item.name);

        if (resolvedInfo) {
            const basename = path.basename(resolvedInfo);
            if (!usedImages[profileName]) usedImages[profileName] = {};
            usedImages[profileName][basename] = resolvedInfo;
            imageParams.image = basename;
        }

        // Hotkey Params
        let hotkeyParams = {};
        if (item.type === 'hotkey' && item.settings && item.settings.hotkey) {
            const keyParts = item.settings.hotkey.split('+').map(s => s.trim().toUpperCase());
            const mainKey = keyParts[keyParts.length - 1];

            let modifiers = 0;
            let settings = { KeyCmd: false, KeyCtrl: false, KeyOption: false, KeyShift: false };

            if (keyParts.includes('SHIFT')) { settings.KeyShift = true; modifiers |= 0x02000000; }
            if (keyParts.includes('CTRL')) { settings.KeyCtrl = true; modifiers |= 0x04000000; }
            if (keyParts.includes('ALT') || keyParts.includes('OPT')) { settings.KeyOption = true; modifiers |= 0x08000000; }
            if (keyParts.includes('CMD')) { settings.KeyCmd = true; modifiers |= 0x10000000; }

            settings.KeyModifiers = modifiers;

            const keyData = KEY_MAP[mainKey];
            if (keyData) {
                settings.NativeCode = keyData.n;
                settings.QTKeyCode = keyData.q;
                settings.VKeyCode = keyData.n;
                hotkeyParams = { hotkey: settings };
            }
        } else if (item.type === 'macro') {
            return {
                'ActionID': '00000000-0000-0000-0000-000000000000',
                'LinkedTitle': true,
                'Name': item.name,
                'Settings': {
                    'Text': item.settings.macro,
                    'SendEnter': true
                },
                'State': 0,
                'States': [{ 'Image': imageParams.image ? `Images/${imageParams.image}` : undefined, 'Title': item.name }],
                'UUID': 'com.elgato.streamdeck.system.text'
            };
        }

        return hotkey({
            title: item.name,
            image: imageParams.image,
            hotkey: hotkeyParams.hotkey
        });
    }

    // Gridify Helper
    function gridify(flatActions, profileName) {
        const rows = [];
        for (let r = 0; r < 4; r++) {
            rows[r] = [];
            for (let c = 0; c < 8; c++) {
                const index = r * 8 + c;
                const item = flatActions[index];
                if (item) {
                    const actionObj = convertToAction(item, profileName);
                    if (actionObj) rows[r][c] = actionObj;
                }
            }
        }
        return rows;
    }

    // 5. Generate Layouts
    const groupActions = GenerateGroupPage(classId, specId, raceId, keybindManager, iconManager);
    const pvpActions = GeneratePvPPage(classId, specId, raceId, keybindManager, iconManager);
    const consumablesActions = GenerateConsumablesPage(classId, specId, raceId, keybindManager, iconManager);
    const professionsActions = GenerateProfessionsPage(classId, specId, raceId, keybindManager, iconManager);
    const mountsActions = GenerateMountsPage(classId, specId, raceId, keybindManager, iconManager);
    const classActions = GenerateClassPage(classId, specId, raceId, keybindManager, iconManager);

    const subProfiles = [];

    // Helper to build profile
    function buildProfile(name, flatActions) {
        const grid = gridify(flatActions, name);
        subProfiles.push(profile({ name: name, actions: grid, uuid: uuids[name] })); // Pass pre-generated UUID
    }

    // Prevent Recursion in Group Profile (Group -> Universal -> Raid Markers -> Group)
    const safeGroupActions = groupActions.map(item => {
        if (item && item.name === 'Raid Markers') {
            console.log('Recursion Prevention: Removing Raid Markers folder from Group Profile');
            return { type: 'empty' }; // Replace with empty
        }
        return item;
    });

    buildProfile('Group', safeGroupActions);
    buildProfile('PvP', pvpActions);
    buildProfile('Consumables', consumablesActions);
    buildProfile('Professions', professionsActions);
    buildProfile('Mounts', mountsActions);
    buildProfile('Class', classActions);

    // 6. Generate Main Profile (WoW)
    const mainPageTop = GenerateMainPage(keybindManager, iconManager);
    const panicActions = GeneratePanicRow(classId, specId, raceId, keybindManager, iconManager);
    const universalActions = GenerateUniversalBar(keybindManager, iconManager);

    // Combine Main Page (Rows 1 & 2) + Panic + Universal
    const mainPageActions = [...mainPageTop, ...panicActions, ...universalActions];

    const mainGrid = gridify(mainPageActions, 'WoW');
    const mainProfile = profile({ name: 'WoW', actions: mainGrid, uuid: uuids['WoW'] });

    // 7. Output Artifacts
    const keybindsText = GenerateMacroFile(keybindManager);
    const readmeText = GenerateDocs(classId, specId, raceId);

    return {
        mainProfile,
        additionalProfiles: subProfiles,
        images: usedImages,
        files: {
            'keybinds.txt': keybindsText,
            'README.txt': readmeText
        }
    };
}

module.exports = generate;
