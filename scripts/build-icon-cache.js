#!/usr/bin/env node
/**
 * Build Icon Cache - Scan all icons once and save to JSON
 * Run this when icons change, load cache during generation
 */

const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '..', 'Assets', 'Icons', 'WoW_Combined');
const CACHE_FILE = path.join(__dirname, '..', 'Assets', 'icon-cache.json');

function scanDirectory(dir, cache, basePath = '') {
    if (!fs.existsSync(dir)) return;

    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            scanDirectory(fullPath, cache, path.join(basePath, entry.name));
        } else if (entry.name.endsWith('.png')) {
            // Store without extension as key, full path as value
            const nameNoExt = entry.name.replace(/\.png$/i, '');
            const normalizedName = nameNoExt.toLowerCase().replace(/\s/g, '');

            // Store multiple lookup keys
            cache.byName[nameNoExt] = fullPath;
            cache.byNormalized[normalizedName] = fullPath;
        }
    }
}

function buildCache() {
    console.log('Scanning icons in:', ICONS_DIR);

    const cache = {
        byName: {},       // Exact name -> path
        byNormalized: {}, // Lowercase no-space -> path
        generatedAt: new Date().toISOString()
    };

    const start = Date.now();
    scanDirectory(ICONS_DIR, cache);

    const iconCount = Object.keys(cache.byName).length;
    console.log(`Found ${iconCount} icons in ${Date.now() - start}ms`);

    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
    console.log('Cache saved to:', CACHE_FILE);

    return cache;
}

// Run if called directly
if (require.main === module) {
    buildCache();
}

module.exports = { buildCache, CACHE_FILE };
