/**
 * @fileoverview Write profiles to disk as .streamDeckProfile
 */

const { createWriteStream, readFileSync, existsSync } = require('fs');
const JsZip = require('jszip');

const { profileFolderId } = require('./ids');
const { topLevelManifest } = require('./profile');

/**
 * Write profiles to disk as a .streamDeckProfile zip file
 * @param {Object} profiles
 * @param {Object} profiles.mainProfile
 * @param {Object[]} profiles.additionalProfiles
 * @param {Object} [options]
 * @param {Object.<string, Object.<string, string>>} [options.images]
 * @returns {Promise<string>} Path to created file
 */
async function writeToDisk({ mainProfile, additionalProfiles }, options = {}) {
    const { images = {} } = options;
    const zip = new JsZip();
    const rootDir = zip.folder(`${mainProfile.uuid}.sdProfile`);

    if (!rootDir) throw new Error('Failed to create root directory');

    rootDir.file('manifest.json', JSON.stringify(topLevelManifest(mainProfile)));
    const profilesDir = rootDir.folder('Profiles');

    if (!profilesDir) throw new Error('Failed to create profiles directory');

    for (const currentProfile of [mainProfile, ...additionalProfiles]) {
        const profileDir = profilesDir.folder(profileFolderId(currentProfile.uuid));
        if (!profileDir) throw new Error(`Failed to create profile directory for ${currentProfile.name}`);

        profileDir.file('manifest.json', JSON.stringify(currentProfile.manifest));

        // Add images for this profile
        const profileImages = images[currentProfile.name];
        if (profileImages) {
            const imagesDir = profileDir.folder('Images');
            if (!imagesDir) throw new Error('Failed to create images directory');

            for (const [imageName, imagePath] of Object.entries(profileImages)) {
                if (existsSync(imagePath)) {
                    imagesDir.file(imageName, readFileSync(imagePath));
                } else {
                    console.warn(`Image not found: ${imagePath}`);
                }
            }
        }
    }

    const filename = `${mainProfile.name}.streamDeckProfile`;

    // Write auxiliary files if provided
    if (options.files) {
        const fs = require('fs');
        for (const [fname, content] of Object.entries(options.files)) {
            fs.writeFileSync(fname, content);
            console.log(`${fname} created`);
        }
    }

    return new Promise((resolve, reject) => {
        zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
            .pipe(createWriteStream(filename))
            .on('finish', () => {
                console.log(`${filename} created`);
                resolve(filename);
            })
            .on('error', reject);
    });
}

module.exports = {
    writeToDisk,
};
