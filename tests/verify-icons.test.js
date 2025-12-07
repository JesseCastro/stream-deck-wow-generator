const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '../Build');
const ALLOWED_COLLISIONS = [
    'Hearthstone',
    'Combat Pot',
    'Health Potion',
    'Auto Run',
    'Interact',
    'Back',
    // Utilities that reuse generic icons
    'Clear Focus', 'Tgl UI', 'Screenshot', 'Survey', 'Zoom Out',
    'Toggle Music', 'Drums',
    'Report AFK', 'Toggle Details',
    'Target Nearest Enemy', 'Focus Arena 3',
    'Group', 'Character Panel', 'Nameplates', 'Frnd Plt', 'LFG',
    'Professions', 'Profession 2',
    'Collections', 'Mounts', 'Mount', 'Smart Mount', 'Ground Mount', 'Repair Mount', 'AH Mount',
    'World Map', 'BG Map'
];

describe('Stream Deck Icon Verification', () => {
    let manifestPaths = [];

    let tempDir = path.join(__dirname, '../temp_test_build');

    beforeAll(() => {
        // Clean/Create temp dir
        if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true });
        fs.mkdirSync(tempDir);

        // Unzip Build/WoW.streamDeckProfile to tempDir
        const zipPath = path.join(BUILD_DIR, 'WoW.streamDeckProfile');

        // Use system unzip for simplicity on Mac/Linux
        const { execSync } = require('child_process');
        try {
            // Check if it's a directory (uncompressed) or file (zip)
            if (fs.statSync(zipPath).isDirectory()) {
                // If it's a directory, just copy it
                execSync(`cp -R "${zipPath}/" "${tempDir}/"`);
            } else {
                // If zip, unzip
                execSync(`unzip -q "${zipPath}" -d "${tempDir}"`);
            }
        } catch (e) {
            console.warn("Could not unzip/copy profile:", e.message);
        }

        // Recursively find all manifest.json files in tempDir
        function findManifests(dir, list = []) {
            if (!fs.existsSync(dir)) return list;
            const files = fs.readdirSync(dir);
            files.forEach(file => {
                const fullPath = path.join(dir, file);
                const stat = fs.statSync(fullPath);
                if (stat.isDirectory()) {
                    findManifests(fullPath, list);
                } else if (file === 'manifest.json') {
                    list.push(fullPath);
                }
            });
            return list;
        }
        manifestPaths = findManifests(tempDir);
        console.log(`Found ${manifestPaths.length} manifests in ${tempDir}`);
    });

    afterAll(() => {
        // Cleanup
        if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true });
    });

    test('All profiles should have a manifest.json', () => {
        expect(manifestPaths.length).toBeGreaterThan(0);
    });

    test('All icons referenced in manifest should exist and be valid', () => {
        manifestPaths.forEach(manifestPath => {
            const profilePath = path.dirname(manifestPath);
            const content = fs.readFileSync(manifestPath, 'utf8');
            const manifest = JSON.parse(content);
            const profilename = manifest.Name || 'Unknown';

            if (manifest.Controllers) {
                manifest.Controllers.forEach(controller => {
                    if (controller.Actions) {
                        Object.entries(controller.Actions).forEach(([coord, action]) => {
                            const state = action.States && action.States[0];
                            if (!state) return;

                            const title = state.Title || 'Untitled';
                            const image = state.Image;

                            if (image && image !== 'Images/') {
                                const imagePath = path.join(profilePath, image);
                                const exists = fs.existsSync(imagePath);

                                if (!exists) {
                                    console.error(`[MISSING] ${profilename}: ${title} -> ${image}`);
                                }
                                expect(exists).toBe(true);

                                if (exists) {
                                    const stats = fs.statSync(imagePath);
                                    if (stats.size === 0) {
                                        console.error(`[EMPTY] ${profilename}: ${title} -> ${image}`);
                                    }
                                    expect(stats.size).toBeGreaterThan(0);
                                }
                            }
                        });
                    }
                });
            }
        });
    });

    test('No unapproved icon collisions (distinct abilities sharing same icon)', () => {
        const usedImagesMap = {}; // imageName -> Set(titles)

        manifestPaths.forEach(manifestPath => {
            const content = fs.readFileSync(manifestPath, 'utf8');
            const manifest = JSON.parse(content);

            if (manifest.Controllers) {
                manifest.Controllers.forEach(controller => {
                    if (controller.Actions) {
                        Object.entries(controller.Actions).forEach(([, action]) => {
                            const state = action.States && action.States[0];
                            if (!state) return;

                            const title = state.Title;
                            const image = state.Image;

                            if (image && title && title !== 'Untitled') {
                                const imageName = path.basename(image);
                                if (imageName === 'back.png') return; // Ignore back button

                                if (!usedImagesMap[imageName]) {
                                    usedImagesMap[imageName] = new Set();
                                }
                                usedImagesMap[imageName].add(title);
                            }
                        });
                    }
                });
            }
        });

        // Filter and check collisions
        const collisions = [];
        for (const [image, titles] of Object.entries(usedImagesMap)) {
            if (titles.size > 1) {
                const titleArray = Array.from(titles);
                const isApproved = titleArray.every(t => ALLOWED_COLLISIONS.includes(t));

                if (!isApproved) {
                    collisions.push({ image, titles: titleArray });
                    console.error(`[COLLISION] Icon ${image} used by: ${titleArray.join(', ')}`);
                }
            }
        }

        expect(collisions.length).toBe(0);
    });
});
