/**
 * @fileoverview WoW Stream Deck Profile Generator
 * Generates a multi-page profile for World of Warcraft
 */

const fs = require('fs');
const path = require('path');
const { profile, folder } = require('../lib/profile');
const { hotkey, action, back } = require('../lib/actions');

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

// Output Generators
const GenerateMacroFile = require('../lib/macro-generator');
const GenerateDocs = require('./docs');
const GenerateMatrix = require('./matrix');

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
 * Helper to convert internal Action object to specific StreamDeck JSON structure
 */
function convertToAction(item, usedImages, profileName) {
    if (item.type === 'empty') return null;

    if (item.type === 'back') {
        // Special case: Back button
        // We need to resolve the image for it too
        // For now, assume generic Back arrow
        let imgPath = null;
        // We'll handle image registration outside or pass a helper
        return back(); // Back action uses special UUID
    }

    // Resolve Image path to a relative name for the zip
    let imageParams = {};
    if (item.settings && item.settings.icon) {
        // Register image
        // Assuming item.settings.icon is an absolute path from IconManager
        const absPath = item.settings.icon;
        const basename = path.basename(absPath);

        if (!usedImages[profileName]) usedImages[profileName] = {};
        usedImages[profileName][basename] = absPath;
        imageParams.image = basename;
    }

    // Resolve Hotkey
    let hotkeyParams = {};
    if (item.type === 'hotkey' && item.settings && item.settings.hotkey) {
        const keyParts = item.settings.hotkey.split('+').map(s => s.trim().toUpperCase());
        const mainKey = keyParts[keyParts.length - 1]; // e.g. "T"

        // Modifiers
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
        // Stream Deck "Text" action usually used for macros "/cast ..."
        // We use the Text action: com.elgato.streamdeck.profile.text
        // But the 'hotkey' helper generates a hotkey action.
        // We need a proper 'text' action helper or reuse generic action.
        return {
            'ActionID': 'com.elgato.streamdeck.profile.text',
            'Name': item.name,
            'Settings': {
                'Command': `${item.settings.macro}\n`, // Enter after macro
            },
            // Image linking logic...
            'State': 0,
            'States': [{ 'Image': imageParams.image ? `Images/${imageParams.image}` : undefined, 'Title': item.name }]
        };
    }

    // Default Hotkey Action
    return hotkey({
        title: item.name,
        image: imageParams.image,
        hotkey: hotkeyParams.hotkey
    });
}


/**
 * Convert a flat array of 32 actions into a 4x8 grid structure (Actions[row][col])
 */
function gridify(flatActions, usedImages, profileName) {
    const rows = [];
    // Stream Deck XL is 4 rows, 8 cols (0-7)
    for (let r = 0; r < 4; r++) {
        rows[r] = [];
        for (let c = 0; c < 8; c++) {
            const index = r * 8 + c;
            const item = flatActions[index];
            if (item) {
                const actionObj = convertToAction(item, usedImages, profileName);
                if (actionObj) rows[r][c] = actionObj;
            }
        }
    }
    return rows;
}

/**
 * Generate WoW profile
 * @param {string[]} argv - Command line arguments
 * @returns {Object}
 */
function generate(argv) {
    // Parse args
    let classId = 'Paladin';
    let specId = 'Protection';
    let raceId = 'Tauren';

    // Simple arg parsing
    for (let i = 0; i < argv.length; i++) {
        if (argv[i] === '--class' && argv[i + 1]) classId = argv[i + 1];
        if (argv[i] === '--spec' && argv[i + 1]) specId = argv[i + 1];
        if (argv[i] === '--race' && argv[i + 1]) raceId = argv[i + 1];
    }

    console.log(`Generating Profile for: ${raceId} ${specId} ${classId}`);

    const keybindManager = new KeybindManager();
    const iconManager = new IconManager([ICONS_DIR]);
    const usedImages = {}; // Map<ProfileName, Map<ImageName, AbsPath>>

    // 1. Generate Sub-Pages first
    const groupActions = GenerateGroupPage(classId, specId, raceId, keybindManager, iconManager);
    const pvpActions = GeneratePvPPage(classId, specId, raceId, keybindManager, iconManager);
    const consumablesActions = GenerateConsumablesPage(classId, specId, raceId, keybindManager, iconManager);
    const professionsActions = GenerateProfessionsPage(classId, specId, raceId, keybindManager, iconManager);
    const mountsActions = GenerateMountsPage(classId, specId, raceId, keybindManager, iconManager);

    const subProfiles = [];

    function addSubProfile(name, flatActions) {
        const grid = gridify(flatActions, usedImages, name);
        subProfiles.push(profile({ name: name, actions: grid }));
    }

    addSubProfile('Group', groupActions);
    addSubProfile('PvP', pvpActions);
    addSubProfile('Consumables', consumablesActions);
    addSubProfile('Professions', professionsActions);
    addSubProfile('Mounts', mountsActions);

    // 2. Class Page (Main Page)
    // The Main Page contains Buttons that LINK to sub-pages.

    // Wait, GenerateClassPage generates the layout for the MAIN page (Rotation, Panic, Universal).
    // BUT we need Folder buttons (Row 1) to link to Sub-Pages.
    // The GenerateClassPage function in 'class-page.js' only defined Rotation in Rows 1-2.
    // Let's look at `main-page.js` (T-006). That was the MAIN entry point logic.
    // `src/generators/main-page.js` was supposed to generate Row 1 (Folders) and Row 2.
    // `src/generators/class-page.js` (T-012) added "Rotation" logic.
    // We need to merge them.

    // Actually, `main-page.js` (T-006) defined the folders: Class, Group, PvP, Social, Profs, Mounts, Consumables.
    // Class Folder -> Detailed Class Page (Rotation)?
    // OR is the Main Page the "Class Page"?
    // "Task T-006 Main Page Generator: Implement generator for Rows 1 and 2... identifies folder types".
    // "Task T-012 Class Page Generator: Spec Logic".

    // Let's assume:
    // Page 1 (Main): Contains Folders (to Group, PvP, etc.) AND maybe some core actions.
    // Clicking "Class" folder goes to the Rotation page? 
    // OR is the Main Page 1 the Rotation Page?

    // Requirements said: "Master Page... Row 1: Menu (Folders)... Row 2: Utility... Row 3: Panic... Row 4: Universal".
    // My `class-page.js` generated a FULL 32 button array (Rotation on 1-2).
    // This conflicts with "Master Page has Folders on Row 1".
    // Ah, `GenerateClassPage` uses `classData.specs[specId].rotation`.

    // Let's construct the Master Page explicitly here using `main-page.js` logic for FOLDERS,
    // and linking them to the sub-profiles we just created.

    // We need `GenerateMainPage` logic? I recall T-006 created `src/generators/main-page.js`.
    // Let's use `main-page.js` as the base for the "Main" profile, 
    // BUT we need to inject the Sub-Profiles into the folder slots.

    const GenerateMainPage = require('./main-page');
    // GenerateMainPage returns 32 actions? No, T-006 said "Rows 1 and 2".
    // Let's check `main-page.js` content if needed. Assuming it returns logic for the main page.

    const mainPageActions = GenerateMainPage(keybindManager, iconManager);

    // We need to PATCH the 'folder' actions in `mainPageActions` to actually LINK to the profiles we created.
    // mainPageActions has items like { type: 'folder', name: 'Group' ... }

    const mainGrid = gridify(mainPageActions, usedImages, 'WoW');

    // Update Folder Actions in Main Grid to point to Sub-Profiles
    // Group -> Index?
    // We iterate the grid and find folders.

    const folderMap = {
        'Group/Raid': 'Group',
        'PvP': 'PvP',
        'Consumables': 'Consumables',
        'Professions': 'Professions',
        'Mounts': 'Mounts'
        // 'Class' -> ? Maybe 'Class' is a sub-page for pure rotation?
    };

    // If 'Class' is a folder, we need a Class Profile.
    // The `GenerateClassPage` we built generates a "Rotation" page.
    // Let's create that profile too.
    const classActions = GenerateClassPage(classId, specId, raceId, keybindManager, iconManager);
    addSubProfile('Class', classActions);
    folderMap['Class'] = 'Class'; // Link Class folder to Class profile

    // Linkage loop
    mainGrid.forEach(row => {
        row.forEach((action, colIdx) => {
            if (action && action.Name) { // It's a StreamDeck Action Object
                // We can't easily check 'type' here because it's converted.
                // We check the Title? Or we should have done this linkage BEFORE gridify.
            }
        });
    });

    // Better approach:
    // 1. Get flat actions from GenerateMainPage
    // 2. Modify them to attach the `profileName` property expected by `folder()` helper?
    // The `folder()` helper takes (childProfileName, image).

    // Let's re-map `mainPageActions` before gridify.
    const mainPageLinked = mainPageActions.map(item => {
        if (item.type === 'folder' && folderMap[item.name]) {
            // We need to return a specific structure that `gridify` (via convertToAction) handles as a Folder.
            // `convertToAction` doesn't handle folders above!
            item.targetProfile = folderMap[item.name];
        }
        return item;
    });

    // Update convertToAction to handle folders
    function convertToActionWithFolders(item, usedImages, profileName) {
        if (item.type === 'folder') {
            // We need to enable `folder` helper usage.
            // folder(childProfileName, image)

            // Register icon
            let imgParams = {};
            if (item.settings && item.settings.icon) {
                const absPath = item.settings.icon;
                const basename = path.basename(absPath);
                if (!usedImages[profileName]) usedImages[profileName] = {};
                usedImages[profileName][basename] = absPath;
                imgParams.image = basename;
            }

            // We need the Child Profile Object to pass to `folder`, OR just the name?
            // The `folder` helper in `src/lib/profile.js` expects a Profile OBJECT usually, to link UUIDs.
            // BUT `folder` helper signature is: `function folder(childProfile, image)`.
            // It uses `childProfile.UUID` and `childProfile.Name`.

            // Find the sub-profile object
            const childProfile = subProfiles.find(p => p.name === item.targetProfile);
            if (childProfile) {
                return folder(childProfile, imgParams.image);
            } else {
                console.warn(`Missing sub-profile for folder: ${item.name}`);
                return null;
            }
        }
        return convertToAction(item, usedImages, profileName);
    }

    // Gridify Main with Folders
    function gridifyMain(flatActions, usedImages, profileName) {
        const rows = [];
        for (let r = 0; r < 4; r++) {
            rows[r] = [];
            for (let c = 0; c < 8; c++) {
                const index = r * 8 + c;
                const item = flatActions[index];
                if (item) {
                    const actionObj = convertToActionWithFolders(item, usedImages, profileName);
                    if (actionObj) rows[r][c] = actionObj;
                }
            }
        }
        return rows;
    }

    const mainActionsFinal = gridifyMain(mainPageLinked, usedImages, 'WoW');
    const mainProfile = profile({ name: 'WoW', actions: mainActionsFinal });

    // 3. Generate Extra Artifacts
    const keybindsText = GenerateMacroFile(keybindManager);
    const readmeText = GenerateDocs(classId, specId, raceId);

    // Matrix is static per run probably, or we could generate a matrix of THIS run?
    // User requested a generic Matrix for the repo.
    // We can generate `PROFILE.md` containing just this profile's info?
    // Let's leave Matrix for valid "Repo" generation mode.

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
