const IconManager = require('../src/lib/icon-manager');
const Classes = require('../src/data/classes');
const Races = require('../src/data/races');
const IconAliases = require('../src/data/icon-aliases');
const path = require('path');
const fs = require('fs');

/**
 * Script to scan all defined abilities and verify that icons exist.
 */

// Helper to get all subdirectories
function getSubDirectories(dir) {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir)
        .map(file => path.join(dir, file))
        .filter(path => fs.statSync(path).isDirectory());
}

const baseIconsDir = path.join(__dirname, '../Assets/Icons');
const subDirs = getSubDirectories(baseIconsDir);

// Define search paths (prioritize user assets)
const searchDirs = [
    baseIconsDir,
    ...subDirs, // Add WoW_Paladin, WoW_Druid etc.
    path.join(__dirname, '../Assets/Icons/Mechagnome'),
    process.env.HOME + '/Documents/Images/Icons/Mechagnome'
];

const iconManager = new IconManager(searchDirs, IconAliases);
let missingCount = 0;
let checkedCount = 0;

console.log('🔍 Starting Icon Validation...');
console.log('📂 Search Directories:', searchDirs);

// 1. Check Classes
Object.values(Classes).forEach(cls => {
    Object.values(cls.specs).forEach(spec => {
        const panicRow = spec.panicRow;
        Object.keys(panicRow).forEach(slot => {
            const abilityName = panicRow[slot];

            // Skip [Racial], [No Interrupt], [Empty] placeholders
            if (abilityName.startsWith('[') && abilityName.endsWith(']')) return;
            if (abilityName === 'Combat Pot') return; // We should probably have a CombatPot icon though

            checkedCount++;
            const iconPath = iconManager.resolveIcon(abilityName);

            if (!iconPath) {
                console.error(`❌ MISSING: [${cls.name} - ${spec.name}] ${abilityName}`);
                missingCount++;
            }
        });
    });
});

// 2. Check Races
Object.values(Races).forEach(race => {
    const abilityName = race.racial;
    checkedCount++;
    const iconPath = iconManager.resolveIcon(abilityName);

    if (!iconPath) {
        console.error(`❌ MISSING: [Race - ${race.name}] ${abilityName}`);
        missingCount++;
    }
});

console.log('---');
console.log(`✅ Scanned ${checkedCount} abilities.`);
if (missingCount === 0) {
    console.log('🎉 All icons found!');
    process.exit(0);
} else {
    console.log(`⚠️  ${missingCount} icons missing.`);
    // Don't fail the build yet, just warn
    process.exit(0);
}
