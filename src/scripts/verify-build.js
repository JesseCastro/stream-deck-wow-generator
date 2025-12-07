const fs = require('fs');
const path = require('path');

const { execSync } = require('child_process');

// Define paths
const ZIP_PATH = path.join(__dirname, '../../Build/WoW.streamDeckProfile');
const BUILD_DIR = '/tmp/verify_build';

function verifyBuild() {
    console.log('Verifying Build Icon Coverage...');

    // Clean and unzip
    if (fs.existsSync(BUILD_DIR)) {
        fs.rmSync(BUILD_DIR, { recursive: true, force: true });
    }
    fs.mkdirSync(BUILD_DIR);

    if (!fs.existsSync(ZIP_PATH)) {
        console.error(`Build file not found: ${ZIP_PATH}`);
        process.exit(1);
    }

    try {
        console.log('Unzipping profile...');
        execSync(`unzip -q "${ZIP_PATH}" -d "${BUILD_DIR}"`);
    } catch (e) {
        console.error('Failed to unzip profile:', e.message);
        process.exit(1);
    }

    // Find all manifest.json files
    const manifests = findManifests(BUILD_DIR);
    console.log(`Found ${manifests.length} profiles.`);

    let totalActions = 0;
    let missingIcons = 0;
    let errors = [];
    const usedImagesMap = {}; // image -> Set(titles)

    manifests.forEach(manifestPath => {
        const profilePath = path.dirname(manifestPath);
        const content = fs.readFileSync(manifestPath, 'utf8');
        const manifest = JSON.parse(content);
        const profilename = manifest.Name || 'Unknown Profile';

        // Check Controllers
        if (manifest.Controllers) {
            manifest.Controllers.forEach(controller => {
                if (controller.Actions) {
                    Object.entries(controller.Actions).forEach(([coord, action]) => {
                        totalActions++;
                        const state = action.States && action.States[0];
                        if (!state) return; // Weird

                        const title = state.Title || 'Untitled';
                        const image = state.Image;
                        const imageName = image ? path.basename(image, path.extname(image)) : null;

                        if (!image || image === '' || image === 'Images/') {
                            missingIcons++;
                            errors.push(`[${profilename}] Slot ${coord} "${title}": Missing Image`);
                        } else {
                            // Check if image file actually exists
                            const imagePath = path.join(profilePath, image);
                            if (!fs.existsSync(imagePath)) {
                                missingIcons++;
                                errors.push(`[${profilename}] Slot ${coord} "${title}": Image file missing (${image})`);
                            } else {
                                const stats = fs.statSync(imagePath);
                                if (stats.size === 0) {
                                    missingIcons++;
                                    errors.push(`[${profilename}] Slot ${coord} "${title}": Image file is empty (0 bytes) (${image})`);
                                }

                                // Check for collisions (systemic issue fix)
                                if (imageName && imageName !== 'back' && title && title.length > 0 && !['Hearthstone', 'Combat Pot', 'Health Potion', 'Auto Run', 'Interact', 'Back'].includes(title)) {
                                    if (!usedImagesMap[imageName]) {
                                        usedImagesMap[imageName] = new Set();
                                    }
                                    usedImagesMap[imageName].add(title);
                                }
                            }
                        }
                    });
                }
            });
        }
    });

    // Report Collisions
    console.log('\nChecking for Suspect Collisions...');
    let collisionCount = 0;
    for (const [image, titles] of Object.entries(usedImagesMap)) {
        if (titles.size > 1) {
            console.warn(`\u001b[33m[Warning] Icon "${image}" is used by multiple distinct abilities: ${Array.from(titles).join(', ')}\u001b[0m`);
            collisionCount++;
        }
    }
    if (collisionCount === 0) {
        console.log('No suspect collisions found.');
    } else {
        console.log(`Found ${collisionCount} potential icon collisions.`);
    }

    console.log(`Checked ${totalActions} actions.`);
    if (missingIcons > 0) {
        console.error(`\u001b[31mFAILED: ${missingIcons} missing icons found!\u001b[0m`);
        errors.forEach(e => console.error(e));
        process.exit(1);
    } else {
        console.log(`\u001b[32mPASSED: 100% Icon Coverage Verified.\u001b[0m`);
    }
}

function findManifests(dir, list = []) {
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

verifyBuild();
