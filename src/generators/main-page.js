/**
 * Generates the Main Page (Rows 1 & 2).
 * @param {string} classId
 * @param {string} specId
 * @param {string} raceId
 * @param {KeybindManager} keybindManager 
 * @param {IconManager} iconManager 
 * @returns {Array<Object>} Array of 16 Action objects
 */
function GenerateMainPage(classId, specId, raceId, keybindManager, iconManager) {
    const row1 = [
        { name: 'Game Menu', type: 'hotkey', defaultKey: 'ESC', settings: { icon: 'Back' } },
        { name: 'Class', type: 'folder', settings: { icon: `ClassIcon_${classId}` } },
        { name: 'Group', type: 'folder', settings: { icon: 'Group' } },
        { name: 'PvP', type: 'folder', settings: { icon: 'PvP' } },
        { name: 'Profs', type: 'folder', settings: { icon: 'Profs' } },
        { name: 'Mounts', type: 'folder', settings: { icon: 'Mounts' } },
        { name: 'Consumes', type: 'folder', settings: { icon: 'Consumes' } },
        { name: 'Utilities', type: 'folder', settings: { icon: 'Utilities' } }
    ];

    const row2 = [
        { name: 'Nameplates', type: 'hotkey', defaultKey: 'V', settings: { icon: 'Nameplates' } },
        { name: 'Frnd Plt', type: 'hotkey', defaultKey: 'Shift+V', settings: { icon: 'Frnd Plt' } },
        { name: 'Zoom In', type: 'hotkey', settings: { icon: 'Zoom In' } },
        { name: 'Zoom Out', type: 'hotkey', settings: { icon: 'Zoom Out' } },
        { name: 'Tgl UI', type: 'hotkey', defaultKey: 'Alt+Z', settings: { icon: 'Tgl UI' } },
        { name: 'Invite', type: 'hotkey', settings: { icon: 'Invite' } },
        { name: 'Leave', type: 'hotkey', settings: { icon: 'Leave' } },
        { name: 'Pet Atk', type: 'hotkey', defaultKey: 'Shift+T', settings: { icon: 'Pet Atk' } }
    ];

    const allItems = [...row1, ...row2];

    return allItems.map(item => {
        // Resolve icon if settings.icon is a string (alias or name)
        let iconPath = '';
        if (item.settings && item.settings.icon) {
            iconPath = iconManager.resolveIcon(item.settings.icon) || '';
        }

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
            if (!key) {
                if (item.defaultKey) {
                    key = item.defaultKey;
                    if (typeof keybindManager.registerKey === 'function') {
                        keybindManager.registerKey(item.name, key, true);
                    }
                } else {
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

module.exports = GenerateMainPage;
