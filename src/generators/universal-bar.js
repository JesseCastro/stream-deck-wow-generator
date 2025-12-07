const { action, folder } = require('../lib/profile'); // Assuming these helpers exist from Step 1 check
const ActionBuilder = require('../lib/actions'); // Or wherever action object builders are

/**
 * Generates the Universal Bar (Row 4) actions.
 * @param {KeybindManager} keybindManager 
 * @param {IconManager} iconManager 
 * @returns {Array<Object>} Array of 8 Action objects
 */
function GenerateUniversalBar(keybindManager, iconManager) {
    const items = [
        { name: 'Mount', defaultKey: 'M' },
        { name: 'World Map', defaultKey: 'Shift+M' },
        { name: 'Interact', defaultKey: 'F' },
        { name: 'Open Bags', defaultKey: 'B' },
        { name: 'Autorun', defaultKey: 'NUM_LOCK' },
        { name: 'Toggle Quest', defaultKey: 'L' },
        { name: 'Health Potion', defaultKey: '' },
        { name: 'Hearthstone', defaultKey: 'F12' }
    ];

    return items.map(item => {
        const iconPath = iconManager.resolveIcon(item.name) || '';

        if (item.type === 'folder') {
            return {
                name: item.name,
                type: 'folder',
                settings: { icon: iconPath }
            };
        } else {
            let key = keybindManager.getKey(item.name);
            if (!key) {
                if (item.defaultKey) {
                    key = item.defaultKey;
                    if (typeof keybindManager.registerKey === 'function') {
                        keybindManager.registerKey(item.name, key, true);
                    }
                } else {
                    // Assign new key if missing or defaultKey is empty string
                    key = keybindManager.assignKey(item.name);
                }
            }

            return {
                name: item.name,
                type: 'hotkey',
                settings: {
                    hotkey: key,
                    icon: iconPath
                }
            };
        }
    });
}

module.exports = GenerateUniversalBar;
