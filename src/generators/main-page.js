/**
 * Generates the Main Page (Rows 1 & 2).
 * @param {KeybindManager} keybindManager 
 * @param {IconManager} iconManager 
 * @returns {Array<Object>} Array of 16 Action objects
 */
function GenerateMainPage(keybindManager, iconManager) {
    const row1 = [
        { name: 'Spacer', type: 'empty' },
        { name: 'Group', type: 'folder' },
        { name: 'PvP', type: 'folder' },
        { name: 'Profs', type: 'folder' }, // Professions
        { name: 'Mounts', type: 'folder' },
        { name: 'Consumes', type: 'folder' }, // Consumables
        { name: 'Nameplates', type: 'hotkey', defaultKey: 'V' }
    ];

    const row2 = [
        { name: 'Frnd Plt', type: 'hotkey', defaultKey: 'Shift+V' }, // Friendly Plates
        { name: 'Zoom In', type: 'hotkey' },
        { name: 'Zoom Out', type: 'hotkey' },
        { name: 'Tgl UI', type: 'hotkey', defaultKey: 'Alt+Z' }, // Toggle UI
        { name: 'Invite', type: 'hotkey' }, // Invite Target
        { name: 'Leave', type: 'hotkey' }, // Leave Group
        { name: 'Pet Atk', type: 'hotkey', defaultKey: 'Shift+T' }, // Pet Attack
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
