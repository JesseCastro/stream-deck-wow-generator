const IconManager = require('./src/lib/icon-manager');
const IconAliases = require('./src/data/icon-aliases');
const path = require('path');
const fs = require('fs');

const baseIconsDir = path.join(__dirname, 'Assets/Icons/WoW_Combined');
function getSubDirectories(dir) {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir)
        .map(file => path.join(dir, file))
        .filter(path => fs.statSync(path).isDirectory());
}
const subDirs = getSubDirectories(baseIconsDir);
const searchDirs = [baseIconsDir, ...subDirs];

console.log(`Base Dir: ${baseIconsDir}`);
console.log(`Search Dirs Count: ${searchDirs.length}`);

const iconManager = new IconManager(searchDirs, IconAliases, 5);

const testName = 'Skull';
const resolved = iconManager.resolveIcon(testName);

console.log(`Resolving '${testName}'...`);
console.log(`Result: ${resolved}`);

if (!resolved) {
    console.log('Trying manual check...');
    const alias = IconAliases[testName];
    console.log(`Alias: ${alias}`);
    // Manually verify file
    const expectedPath = path.join(baseIconsDir, 'INV/Misc/Skull/INV_Misc_Skull_02.png');
    console.log(`Expected Path Exists? ${fs.existsSync(expectedPath)}`);
}
