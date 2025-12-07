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

    manifests.forEach(manifestPath => {
        const content = fs.readFileSync(manifestPath, 'utf8');
        const data = JSON.parse(content);
        const profilename = data.Name || 'Unknown';

        // Check Controllers
        if (data.Controllers) {
            data.Controllers.forEach(controller => {
                if (controller.Actions) {
                    Object.entries(controller.Actions).forEach(([coord, action]) => {
                        totalActions++;
                        const state = action.States && action.States[0];
                        if (!state) return; // Weird

                        const title = state.Title || 'Untitled';
                        const image = state.Image;

                        if (!image || image === '' || image === 'Images/') {
                            missingIcons++;
                            errors.push(`[${profilename}] Slot ${coord} "${title}": Missing Image`);
                        } else {
                            // Check if image file actually exists
                            const imagePath = path.join(path.dirname(manifestPath), image);
                            if (!fs.existsSync(imagePath)) {
                                missingIcons++;
                                errors.push(`[${profilename}] Slot ${coord} "${title}": Image file missing (${image})`);
                            } else {
                                const stats = fs.statSync(imagePath);
                                if (stats.size === 0) {
                                    missingIcons++;
                                    errors.push(`[${profilename}] Slot ${coord} "${title}": Image file is empty (0 bytes) (${image})`);
                                }
                            }
                        }
                    });
                }
            });
        }
    });

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
