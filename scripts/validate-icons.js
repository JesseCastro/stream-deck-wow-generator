const IconManager = require('../src/lib/icon-manager');
const IconAliases = require('../src/data/icon-aliases');
const path = require('path');
const fs = require('fs');

// Generators
const GenerateClassPage = require('../src/generators/class-page');
const GenerateGroupPage = require('../src/generators/sub-pages/group');
const GeneratePvPPage = require('../src/generators/sub-pages/pvp');
const GenerateConsumablesPage = require('../src/generators/sub-pages/consumables');
const GenerateProfessionsPage = require('../src/generators/sub-pages/professions');
const GenerateMountsPage = require('../src/generators/sub-pages/mounts');
const GenerateMainPage = require('../src/generators/main-page');
const GeneratePanicRow = require('../src/generators/panic-row');
const GenerateUniversalBar = require('../src/generators/universal-bar');

// Mock KeybindManager
const mockKeybindManager = {
    getKey: () => 'A',
    assignKey: () => 'B',
    registerKey: () => { }
};

// Setup IconManager
const baseIconsDir = path.join(__dirname, '../Assets/Icons/WoW_Combined');
function getSubDirectories(dir) {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir)
        .map(file => path.join(dir, file))
        .filter(path => fs.statSync(path).isDirectory());
}
const subDirs = getSubDirectories(baseIconsDir);
const searchDirs = [baseIconsDir, ...subDirs];
const iconManager = new IconManager(searchDirs, IconAliases, 5);

console.log('🔍 Starting Comprehensive Icon Validation (Corrected)...');

let missingCount = 0;
let checkedCount = 0;

function validateActions(context, actions) {
    if (!actions) return;
    actions.forEach(item => {
        if (!item || item.type === 'empty') return;

        checkedCount++;

        // 1. Back Button
        if (item.type === 'back' || item.name === 'Back') {
            const resolved = iconManager.resolveIcon('Back');
            if (!resolved || !fs.existsSync(resolved)) {
                console.error(`❌ MISSING: [${context}] Back Button Icon (Back)`);
                missingCount++;
            }
            return;
        }

        // 2. Folder/Hotkey
        // Generator puts the absolute path in settings.icon (if found) or name (if not)
        let iconName = item.name;
        if (item.settings && item.settings.icon) {
            iconName = item.settings.icon;
        }

        if (!iconName) return;

        let resolved = null;
        if (path.isAbsolute(iconName)) {
            // Already resolved by Generator
            if (fs.existsSync(iconName)) {
                resolved = iconName;
            }
        } else {
            // Not resolved, try resolving name
            resolved = iconManager.resolveIcon(iconName);
        }

        if (!resolved) {
            console.error(`❌ MISSING ICON: [${context}] "${item.name}" (Val: ${iconName})`);
            missingCount++;
        }
    });
}

// Simulate Generation
const classId = 'Paladin';
const specId = 'Protection';
const raceId = 'Tauren';

try {
    validateActions('Universal', GenerateUniversalBar(mockKeybindManager, iconManager));
    validateActions('MainPage', GenerateMainPage(mockKeybindManager, iconManager));
    validateActions('PanicRow', GeneratePanicRow(classId, specId, raceId, mockKeybindManager, iconManager));
    validateActions('Group', GenerateGroupPage(classId, specId, raceId, mockKeybindManager, iconManager));
    validateActions('PvP', GeneratePvPPage(classId, specId, raceId, mockKeybindManager, iconManager));
    validateActions('Consumes', GenerateConsumablesPage(classId, specId, raceId, mockKeybindManager, iconManager));
    validateActions('Profs', GenerateProfessionsPage(classId, specId, raceId, mockKeybindManager, iconManager));
    validateActions('Mounts', GenerateMountsPage(classId, specId, raceId, mockKeybindManager, iconManager));
    validateActions('Class', GenerateClassPage(classId, specId, raceId, mockKeybindManager, iconManager));

} catch (e) {
    console.error('Validation crashed:', e);
    process.exit(1);
}

console.log('---');
console.log(`✅ Checked ${checkedCount} actions.`);

if (missingCount === 0) {
    console.log('🎉 100% Icon Coverage Verified!');
    process.exit(0);
} else {
    console.error(`⚠️  ${missingCount} ICONS MISSING OR INVALID.`);
    process.exit(1);
}
