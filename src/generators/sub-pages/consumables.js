const GeneratePanicRow = require('../panic-row');
const GenerateUniversalBar = require('../universal-bar');

/**
 * Generates the Consumables Sub-Page actions.
 * @param {string} classId
 * @param {string} specId
 * @param {string} raceId
 * @param {KeybindManager} keybindManager
 * @param {IconManager} iconManager
 * @returns {Array<Object>} Array of 32 Action objects
 */
function GenerateConsumablesPage(classId, specId, raceId, keybindManager, iconManager) {
    // Row 1 (0-7)
    // 0: Back, 1: Eat, 2: Drink, 3: Flask, 4: Rune, 5: Oil/Stone, 6: Healthstone/Pot, 7: Empty
    const row1 = [
        { type: 'back', name: 'Back' },
        { name: 'Food', type: 'macro', settings: { macro: '/use [nomod] Food Item', icon: 'Food' } },
        { name: 'Drink', type: 'macro', settings: { macro: '/use [nomod] Drink Item', icon: 'Water' } },
        { name: 'Flask', type: 'hotkey', settings: { icon: 'Flask' } }, // Bind to key
        { name: 'Rune', type: 'hotkey', settings: { icon: 'Rune' } },
        { name: 'Weapon Oil', type: 'hotkey', isOptional: true, settings: { icon: 'Oil' } },
        { name: 'Healthstone', type: 'macro', settings: { macro: '/use Healthstone', icon: 'Healthstone' } },
        { type: 'empty' }
    ];

    // Row 2 (8-15)
    // 8: Invis, 9: Speed, 10: Glider, 11: Drums, Rest: Empty
    const row2 = [
        { name: 'Invis Potion', type: 'hotkey', settings: { icon: 'InvisPot' } },
        { name: 'Speed Potion', type: 'hotkey', settings: { icon: 'SpeedPot' } },
        { name: 'Glider', type: 'macro', settings: { macro: '/use Goblin Glider Kit', icon: 'Glider' } },
        { name: 'Drums', type: 'macro', settings: { macro: '/use Drums', icon: 'Drums' } },
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

        if (item.type === 'hotkey') {
            let key = keybindManager.getKey(item.name);
            if (!key && item.defaultKey) {
                key = item.defaultKey;
                if (typeof keybindManager.registerKey === 'function') {
                    keybindManager.registerKey(item.name, key, true);
                }
                if (!item.settings) item.settings = {};
                item.settings.hotkey = key;
            } else if (!key) {
                // Try to assign new key for consumable hotkeys
                key = keybindManager.assignKey(item.name);
                if (!item.settings) item.settings = {};
                item.settings.hotkey = key;
            } else {
                if (!item.settings) item.settings = {};
                item.settings.hotkey = key;
            }
        }

        return item;
    });
}

module.exports = GenerateConsumablesPage;
