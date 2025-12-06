const fs = require('fs');
const path = require('path');

class IconManager {
    constructor(searchDirs, aliases = {}) {
        // Flatten searchDirs and recurse
        this.searchDirs = [];
        this.aliases = aliases;
        this.cache = new Map();

        const addDirs = (dir) => {
            if (!fs.existsSync(dir)) return;
            this.searchDirs.push(dir);
            const entries = fs.readdirSync(dir, { withFileTypes: true });
            for (const entry of entries) {
                if (entry.isDirectory()) {
                    addDirs(path.join(dir, entry.name));
                }
            }
        };

        (searchDirs || []).forEach(d => addDirs(d));
    }

    /**
     * Resolve an icon name to an absolute path
     * @param {string} name - Base name of the icon (e.g. 'Spell_Holy_Light')
     * @returns {string|null} Absolute path or null if not found
     */
    resolveIcon(name) {
        if (!name) return null;

        // Check aliases first
        const alias = this.aliases[name];
        const searchName = alias || name;

        if (this.cache.has(searchName)) return this.cache.get(searchName);

        // If alias was used, check if the alias itself is a known path? 
        // No, aliases map Name -> OtherName (e.g. 'Cross' -> 'INV_Misc_Skull').
        // Then we search for 'INV_Misc_Skull'.

        for (const dir of this.searchDirs) {
            if (!fs.existsSync(dir)) continue;

            const candidates = [searchName];
            if (!searchName.endsWith('.png')) candidates.push(`${searchName}.png`);

            // 1. Exact & Extension match
            for (const candidate of candidates) {
                const fullPath = path.join(dir, candidate);
                if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
                    this.cache.set(name, fullPath); // Cache original name -> path
                    return fullPath;
                }
            }

            // 2. Fuzzy match
            const contents = this.getDirectoryFiles(dir);
            const cleanSearch = searchName.replace(/\s/g, '').toLowerCase().replace(/\.png$/, '');

            for (const file of contents) {
                const cleanFile = file.replace(/\s/g, '').toLowerCase().replace(/\.png$/, '');
                if (cleanFile === cleanSearch) {
                    const fuzzyPath = path.join(dir, file);
                    if (fs.statSync(fuzzyPath).isFile()) {
                        this.cache.set(name, fuzzyPath);
                        return fuzzyPath;
                    }
                }
            }
        }

        return null; // Not found
    }

    getDirectoryFiles(dir) {
        try {
            return fs.readdirSync(dir);
        } catch (e) {
            return [];
        }
    }
}

module.exports = IconManager;
