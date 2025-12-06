/**
 * @fileoverview ID generators for Stream Deck profiles and actions
 */

const crypto = require('crypto');

/**
 * Generate a static action ID (they don't need to be unique)
 * @returns {string}
 */
function actionId() {
    return '00000000-0000-0000-0000-000000000000';
}

/**
 * Generate a unique profile UUID
 * @returns {string}
 */
function profileId() {
    return uuidV4();
}

/**
 * Convert a profile UUID to a folder ID (base32-ish encoding)
 * @param {string} profileId
 * @returns {string}
 */
function profileFolderId(profileId) {
    return ((profileId.replace(/-/g, '') + '000')
        .match(/.{5}/g) || [])
        .map(s => parseInt(s, 16).toString(32).padStart(4, '0'))
        .join('')
        .substring(0, 26)
        .toUpperCase()
        .replace(/V/g, 'W')
        .replace(/U/g, 'V')
        + 'Z';
}

/**
 * Generate a UUID v4
 * @returns {string}
 */
function uuidV4() {
    return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c =>
        (+c ^ crypto.randomFillSync(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
}

module.exports = {
    actionId,
    profileId,
    profileFolderId,
    uuidV4,
};
