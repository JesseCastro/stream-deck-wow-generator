const fs = require('fs');
const path = require('path');

class IconManager {
    constructor(searchDirs, aliasMapping = {}) {
        this.searchDirs = searchDirs || [];
        this.aliasMapping = aliasMapping;
        // Basic cache to avoid repeated disk lookups
        this.cache = new Map();
    }

    resolveIcon(name) {
        if (!name) return null;

        // Check alias first
        let searchName = name;
        if (this.aliasMapping[name]) {
            searchName = this.aliasMapping[name];
        }

        if (this.cache.has(searchName)) return this.cache.get(searchName);

        for (const dir of this.searchDirs) {
            if (!fs.existsSync(dir)) continue;

            const candidates = [searchName];
            if (!searchName.endsWith('.png')) candidates.push(`${searchName}.png`);

            // 1. Exact & Extension match
            for (const candidate of candidates) {
                const fullPath = path.join(dir, candidate);
                if (fs.existsSync(fullPath)) {
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
                    this.cache.set(name, fuzzyPath);
                    return fuzzyPath;
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
