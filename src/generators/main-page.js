/**
 * Generates the Main Page (Rows 1 & 2).
 * @param {KeybindManager} keybindManager 
 * @param {IconManager} iconManager 
 * @returns {Array<Object>} Array of 16 Action objects
 */
function GenerateMainPage(keybindManager, iconManager) {
    const row1 = [
        { name: 'Class', type: 'folder' },
        { name: 'Group/Raid', type: 'folder' },
        { name: 'PvP', type: 'folder' },
        { name: 'Professions', type: 'folder' },
        { name: 'Mounts', type: 'folder' },
        { name: 'Consumables', type: 'folder' },
        { name: 'Nameplates', type: 'hotkey', defaultKey: 'V' }
    ];

    const row2 = [
        { name: 'Friendly Plates', type: 'hotkey', defaultKey: 'Shift+V' },
        { name: 'Zoom In', type: 'hotkey' }, // default?
        { name: 'Zoom Out', type: 'hotkey' },
        { name: 'Toggle UI', type: 'hotkey', defaultKey: 'Alt+Z' },
        { name: 'Invite Target', type: 'hotkey' },
        { name: 'Leave Group', type: 'hotkey' },
        { name: 'Pet Attack', type: 'hotkey', defaultKey: 'Shift+T' },
        { name: 'Spare', type: 'empty' }
    ];

    const allItems = [...row1, ...row2];

    return allItems.map(item => {
        const iconPath = iconManager.resolveIcon(item.name) || '';

        if (item.type === 'folder') {
            return {
                name: item.name,
                type: 'folder',
                settings: { icon: iconPath }
            };
        } else if (item.type === 'empty') {
            return {
                name: item.name,
                type: 'empty',
                settings: { icon: '' }
            };
        } else {
            let key = keybindManager.getKey(item.name);
            if (!key && item.defaultKey) {
                key = item.defaultKey;
                if (typeof keybindManager.registerKey === 'function') {
                    keybindManager.registerKey(item.name, key, true);
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

module.exports = GenerateMainPage;
