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
    // Provide default empty hotkey if none passed (prevents null in Hotkeys array which crashes Stream Deck)
    const safeHotkey = hotkey || {
        'KeyCmd': false,
        'KeyCtrl': false,
        'KeyModifiers': 0,
        'KeyOption': false,
        'KeyShift': false,
        'NativeCode': 0,
        'QTKeyCode': 0,
        'VKeyCode': 0
    };

    return action({
        name: 'Hotkey',
        title,
        uuid: 'com.elgato.streamdeck.system.hotkey',
        numStates: 1,
        state: 0,
        settings: {
            'Hotkeys': [
                safeHotkey,
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

/**
 * Create a text/macro action (types text and optionally presses Enter)
 * @param {Object} config
 * @param {string} config.title - Display title
 * @param {string} config.message - Text to type
 * @param {string} [config.image] - Optional icon
 * @returns {Action}
 */
function text({ title, message, image }) {
    return action({
        name: title || 'Text',
        title: title || '',
        uuid: 'com.elgato.streamdeck.system.text',
        numStates: 1,
        state: 0,
        settings: {
            'Text': message,
            'SendEnter': true
        },
        image,
    });
}

module.exports = {
    hotkey,
    back,
    text,
    action,
};
