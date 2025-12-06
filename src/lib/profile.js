/**
 * @fileoverview Profile builders for Stream Deck
 */

const { action } = require('./actions');
const { profileId } = require('./ids');

/**
 * @typedef {Object} Profile
 * @property {string} name
 * @property {string} uuid
 * @property {Object} manifest
 */

/**
 * Create a folder action that links to another profile
 * @param {Profile} targetProfile
 * @param {string} [image]
 * @returns {Object}
 */
function folder(targetProfile, image) {
    return action({
        name: 'Create Folder',
        title: targetProfile.name,
        uuid: 'com.elgato.streamdeck.profile.openchild',
        numStates: 1,
        state: 0,
        settings: {
            'ProfileUUID': targetProfile.uuid,
        },
        image,
    });
}

/**
 * Create a profile from a 2D array of actions
 * @param {Object} config
 * @param {string} config.name
 * @param {(Object|null|undefined)[][]} config.actions
 * @returns {Profile}
 */
function profile({ name, actions, uuid }) {
    const byCoordinate = {};
    actions.forEach((row, rowNum) => {
        row.forEach((actionItem, colNum) => {
            if (!actionItem) return;
            byCoordinate[`${colNum},${rowNum}`] = actionItem;
        });
    });
    return {
        name,
        uuid: uuid || profileId(),
        manifest: {
            'Controllers': [
                {
                    'Actions': byCoordinate,
                    'Type': 'Keypad',
                },
            ],
        },
    };
}

/**
 * Generate the root manifest for a profile
 * @param {Profile} mainProfile
 * @returns {Object}
 */
function topLevelManifest(mainProfile, additionalProfiles = []) {
    return {
        'Name': mainProfile.name,
        'Pages': {
            'Current': mainProfile.uuid,
            'Pages': [mainProfile.uuid],
        },
        'Version': '2.0',
    };
}

module.exports = {
    folder,
    profile,
    topLevelManifest,
};
