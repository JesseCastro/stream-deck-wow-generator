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
        {
            name: 'Smart Mount',
            type: 'macro',
            settings: {
                macro: `/cast [flyable,nocombat] Flying Mount\n/cast [noflyable,nocombat] Ground Mount\n/cast [combat] Divine Steed`,
                icon: 'Mount' // Generic mount icon
            }
        },
        { name: 'Repair Mount', type: 'macro', settings: { macro: '/cast Grand Expedition Yak', icon: 'RepairMount' } },
        { name: 'AH Mount', type: 'macro', settings: { macro: '/cast Mighty Caravan Brutosaur', icon: 'AHMount' } },
        { name: 'Water Walking', type: 'macro', settings: { macro: '/cast Azure Water Strider', icon: 'WaterStrider' } },
        { name: 'Dragonriding', type: 'macro', settings: { macro: '/cast Highland Drake', icon: 'Dragonriding' } },
        { name: 'Ground Mount', type: 'macro', settings: { macro: '/cast Ground Mount', icon: 'GroundMount' } },
        { name: 'Flying Mount', type: 'macro', settings: { macro: '/cast Flying Mount', icon: 'FlyingMount' } }
    ];

    // Row 2 (8-15)
    // 8: Random Favorite, 9-15 Empty
    const row2 = [
        { name: 'Random Favorite', type: 'macro', settings: { macro: '/cast Random Favorite Mount', icon: 'Dice' } },
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

    return allActions.map(item => {
        if (item.settings && item.settings.icon && !item.settings.icon.includes('/')) {
            const resolved = iconManager.resolveIcon(item.settings.icon);
            if (resolved) item.settings.icon = resolved;
        }

        if (item.type === 'hotkey') {
            // Logic for hotkeys (if any)
            // Mount page is mostly click-macros, but if we have "Summon Random" on F11, we could map it.
            // For now, assuming macros.
            let key = keybindManager.getKey(item.name);
            if (key || item.defaultKey) {
                if (!key && item.defaultKey) {
                    key = item.defaultKey;
                    if (typeof keybindManager.registerKey === 'function') {
                        keybindManager.registerKey(item.name, key, true);
                    }
                }
                if (!item.settings) item.settings = {};
                item.settings.hotkey = key;
            }
        }

        return item;
    });
}

module.exports = GenerateMountsPage;
