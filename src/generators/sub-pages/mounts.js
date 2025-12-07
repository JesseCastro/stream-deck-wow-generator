const GeneratePanicRow = require('../panic-row');
const GenerateUniversalBar = require('../universal-bar');

/**
 * Generates the Mounts Sub-Page actions.
 * @param {string} classId
 * @param {string} specId
 * @param {string} raceId
 * @param {KeybindManager} keybindManager
 * @param {IconManager} iconManager
 * @returns {Array<Object>} Array of 32 Action objects
 */
function GenerateMountsPage(classId, specId, raceId, keybindManager, iconManager) {
    // Row 1 (0-7)
    // 0: Back, 1: Smart Mount (Generic), 2: Repair (Yak), 3: AH (Brutosaur), 4: Water Walking, 5: Dragonriding, 6: Ground, 7: Flying
    const row1 = [
        { type: 'back', name: 'Back' },
        { name: 'Smart Mount', type: 'hotkey', settings: { icon: 'Smart Mount' } },
        { name: 'Repair Mount', type: 'hotkey', settings: { icon: 'Repair Mount' } },
        { name: 'AH Mount', type: 'hotkey', settings: { icon: 'AHMount' } },
        { name: 'Water Walking', type: 'hotkey', settings: { icon: 'WaterStrider' } },
        { name: 'Dragonriding', type: 'hotkey', settings: { icon: 'Dragonriding' } },
        { name: 'Ground Mount', type: 'hotkey', settings: { icon: 'GroundMount' } },
        { name: 'Flying Mount', type: 'hotkey', settings: { icon: 'FlyingMount' } }
    ];

    // Row 2 (8-15)
    // 8: Random Favorite, 9-15 Empty
    const row2 = [
        { name: 'Random Favorite', type: 'hotkey', settings: { icon: 'Dice' } },
        { type: 'empty' },
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

    console.log('MountsPage: Starting processing loop');
    return allActions.map((item) => {
        if (!item || item.type === 'empty' || item.type === 'back') return item;

        // 1. Ensure Keybind
        if (item.type === 'hotkey' && (!item.settings || !item.settings.hotkey)) {
            let key = keybindManager.getKey(item.name);
            if (!key) key = keybindManager.assignKey(item.name);
            if (!item.settings) item.settings = {};
            item.settings.hotkey = key;
        }

        // 2. Icon Resolution
        if (item.settings && item.settings.icon && !item.settings.icon.includes('/')) {
            const resolved = iconManager.resolveIcon(item.settings.icon);
            if (resolved) item.settings.icon = resolved;
        }
        return item;
    });
}

module.exports = GenerateMountsPage;
