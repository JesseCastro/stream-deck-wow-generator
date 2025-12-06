/**
 * @fileoverview Action builders for Stream Deck profiles
 */

const { actionId } = require('./ids');

/**
 * @typedef {Object} Action
 * @property {string} ActionID
 * @property {boolean} LinkedTitle
 * @property {string} Name
 * @property {Object|null} Settings
 * @property {number} State
 * @property {Object[]} States
 * @property {string} UUID
 */

/**
 * Create a hotkey action
 * @param {Object} config
 * @param {string} config.title
 * @param {string} [config.image]
 * @param {Object} config.hotkey
 * @returns {Action}
 */
function hotkey({ title, hotkey, image }) {
    return action({
        name: 'Hotkey',
        title,
        uuid: 'com.elgato.streamdeck.system.hotkey',
        numStates: 1,
        state: 0,
        settings: {
            'Hotkeys': [
                hotkey,
                {
                    'KeyCmd': false,
                    'KeyCtrl': false,
                    'KeyModifiers': 0,
                    'KeyOption': false,
                    'KeyShift': false,
                    'NativeCode': 146,
                    'QTKeyCode': 33554431,
                    'VKeyCode': -1
                }
            ],
        },
        image,
    });
}

/**
 * Create a back button action
 * @param {string} [image]
 * @returns {Action}
 */
function back(image) {
    return action({
        name: 'Open Folder',
        title: '',
        uuid: 'com.elgato.streamdeck.profile.backtoparent',
        numStates: 1,
        state: 0,
        settings: null,
        image,
    });
}

/**
 * Generic action builder
 * @param {Object} config
 * @returns {Action}
 */
function action({ name, title, uuid, numStates, state, settings, image }) {
    return {
        'ActionID': actionId(),
        'LinkedTitle': !Array.isArray(title),
        'Name': name,
        'Settings': settings,
        'State': state,
        'States': Array.from({ length: numStates }, (_, n) => {
            const stateObj = {
                'Title': Array.isArray(title) ? title[n] : title,
            };
            if (image) {
                stateObj['Image'] = `Images/${image}`;
            }
            return stateObj;
        }),
        'UUID': uuid,
    };
}

module.exports = {
    hotkey,
    back,
    action,
};
