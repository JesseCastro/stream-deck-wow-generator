const fs = require('fs');
const path = require('path');

class IconManager {
    constructor(searchDirs, aliases = {}, maxDepth = 3) {
        // Flatten searchDirs and recurse
        this.searchDirs = [];
        this.aliases = aliases;
        this.cache = new Map();
        this.fileIndex = new Map(); // FileName (lowercase) -> FullPath

        const scanDir = (dir, depth = 0) => {
            if (!fs.existsSync(dir)) return;
            this.searchDirs.push(dir);

            let entries;
            try {
                entries = fs.readdirSync(dir, { withFileTypes: true });
            } catch (e) { return; }

            for (const entry of entries) {
                const fullPath = path.join(dir, entry.name);
                if (entry.isDirectory()) {
                    if (depth < maxDepth) {
                        scanDir(fullPath, depth + 1);
                    }
                } else if (entry.isFile() && entry.name.endsWith('.png')) {
                    // Index file - normalize to lowercase for case-insensitive matching
                    const nameLower = entry.name.toLowerCase().replace(/\.png$/, '');
                    const simpleName = entry.name.replace(/\.png$/, '');

                    // Store with lowercase key (prefer shallower/first found)
                    if (!this.fileIndex.has(nameLower)) {
                        this.fileIndex.set(nameLower, fullPath);
                    }
                    // Also store original casing as fallback
                    if (!this.fileIndex.has(simpleName.toLowerCase())) {
                        this.fileIndex.set(simpleName.toLowerCase(), fullPath);
                    }
                }
            }
        };

        (searchDirs || []).forEach(d => scanDir(d, 0));
    }

    /**
     * Resolve an icon name to an absolute path
     * @param {string} name - Base name of the icon (e.g. 'Spell_Holy_Light')
     * @returns {string|null} Absolute path or null if not found
     */
    resolveIcon(iconName) {
        if (!iconName) return null;

        // Check aliases first
        const alias = this.aliases[iconName];
        const searchName = alias || iconName;

        if (this.cache.has(searchName)) return this.cache.get(searchName);

        // Direct Index Lookup O(1)
        const lowerName = searchName.toLowerCase().replace(/\.png$/, '');

        // Try exact match in index
        const indexed = this.fileIndex.get(searchName) || this.fileIndex.get(lowerName);

        if (indexed) {
            this.cache.set(iconName, indexed);
            return indexed;
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
