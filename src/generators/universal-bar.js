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
        { name: 'Interact', defaultKey: 'F' }, // Using 'F' as common interact, or from defaults
        { name: 'Raid Markers', type: 'folder' },
        { name: 'Reload UI', defaultKey: 'Ctrl+Shift+R' }, // Custom macro often
        { name: 'Screenshot', defaultKey: 'PrintScreen' },
        { name: 'Health Potion', defaultKey: '' },
        { name: 'Hearthstone', defaultKey: 'F12' }
    ];

    return items.map(item => {
        const iconPath = iconManager.resolveIcon(item.name) || '';

        if (item.type === 'folder') {
            // Return folder structure
            return {
                name: item.name,
                type: 'folder',
                settings: {
                    icon: iconPath
                    // UUIDs and stuff handled by profile.js usually
                }
            };
        } else {
            // Get or Assign key
            // Note: assignKey might register it if not found, preserving the 'defaultKey' preference if we pass it
            // implementation of assignKey: (action) -> returns key. 
            // If we want to suggest a default if missing, KeybindManager might need an update or we pre-register?
            // For now, let's just ask for the key. If it returns null/new, so be it.
            // Be smarter: If keybindManager.getKey returns null, we can try to register with default?

            let key = keybindManager.getKey(item.name);
            if (!key && item.defaultKey) {
                key = item.defaultKey;
                // Ensure manager tracks this preference
                if (typeof keybindManager.registerKey === 'function') {
                    keybindManager.registerKey(item.name, key, true);
                }
            }

            // If still no key (and no default), try to assign one?
            // For now, if no key, we might leave it empty or let the user assign it later.
            // But strict TDD says do what's tested.

            // For testing simplicity in this unit, we return the object.

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
