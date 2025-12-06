const GeneratePanicRow = require('../panic-row');
const GenerateUniversalBar = require('../universal-bar');

/**
 * Generates the PvP Sub-Page actions.
 * @param {string} classId
 * @param {string} specId
 * @param {string} raceId
 * @param {KeybindManager} keybindManager
 * @param {IconManager} iconManager
 * @returns {Array<Object>} Array of 32 Action objects
 */
function GeneratePvPPage(classId, specId, raceId, keybindManager, iconManager) {
    // Row 1 (0-7)
    const row1 = [
        { type: 'back', name: 'Back' }, // 0
        { name: 'Target Arena 1', type: 'macro', settings: { macro: '/target arena1', icon: 'Arena1' } },
        { name: 'Target Arena 2', type: 'macro', settings: { macro: '/target arena2', icon: 'Arena2' } },
        { name: 'Target Arena 3', type: 'macro', settings: { macro: '/target arena3', icon: 'Arena3' } },
        { name: 'Focus Arena 1', type: 'macro', settings: { macro: '/focus arena1', icon: 'Focus1' } },
        { name: 'Focus Arena 2', type: 'macro', settings: { macro: '/focus arena2', icon: 'Focus2' } },
        { name: 'Focus Arena 3', type: 'macro', settings: { macro: '/focus arena3', icon: 'Focus3' } },
        { type: 'empty' }
    ];

    // Row 2 (8-15)
    const row2 = [
        { name: 'BG Map', type: 'hotkey', defaultKey: 'Shift+M', settings: { icon: 'Map' } },
        { name: 'Report AFK', type: 'macro', settings: { macro: '/chatlog', icon: 'Report' } }, // Placeholder macro
        { type: 'empty' },
        { type: 'empty' },
        { type: 'empty' },
        { type: 'empty' },
        { type: 'empty' },
        { type: 'empty' }
    ];

    // Row 3 (16-23) - Panic Row
    const panicRow = GeneratePanicRow(classId, specId, raceId, keybindManager, iconManager);

    // Row 4 (24-31) - Universal Bar
    const universalBar = GenerateUniversalBar(keybindManager, iconManager);

    const allActions = [
        ...row1,
        ...row2,
        ...panicRow,
        ...universalBar
    ];

    return allActions.map(item => {
        if (item.settings && item.settings.icon && !item.settings.icon.includes('/')) {
            const resolved = iconManager.resolveIcon(item.settings.icon);
            if (resolved) item.settings.icon = resolved;
        }

        // Ensure hotkeys in row1/row2 are registered if they are 'hotkey' type
        if (item.type === 'hotkey') {
            let key = keybindManager.getKey(item.name);
            if (!key && item.defaultKey) {
                key = item.defaultKey;
                if (typeof keybindManager.registerKey === 'function') {
                    keybindManager.registerKey(item.name, key, true);
                }
                if (!item.settings) item.settings = {};
                item.settings.hotkey = key;
            }
        }

        return item;
    });
}

module.exports = GeneratePvPPage;
