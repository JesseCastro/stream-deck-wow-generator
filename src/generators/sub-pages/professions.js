const GeneratePanicRow = require('../panic-row');
const GenerateUniversalBar = require('../universal-bar');

/**
 * Generates the Professions Sub-Page actions.
 * @param {string} classId
 * @param {string} specId
 * @param {string} raceId
 * @param {KeybindManager} keybindManager
 * @param {IconManager} iconManager
 * @returns {Array<Object>} Array of 32 Action objects
 */
function GenerateProfessionsPage(classId, specId, raceId, keybindManager, iconManager) {
    // Row 1 (0-7)
    // 0: Back, 1: Prof1, 2: Prof2, 3: Cooking, 4: Fishing, 5: Arch, 6: Empty, 7: Empty
    const row1 = [
        { type: 'back', name: 'Back' },
        { name: 'Profession 1', type: 'macro', settings: { macro: '/cast [btn:1] Profession 1', icon: 'Profession1' } }, // Placeholder
        { name: 'Profession 2', type: 'macro', settings: { macro: '/cast [btn:1] Profession 2', icon: 'Profession2' } },
        { name: 'Cooking', type: 'macro', settings: { macro: '/cast Cooking', icon: 'Cooking' } },
        { name: 'Fishing', type: 'macro', settings: { macro: '/cast Fishing', icon: 'Fishing' } },
        { name: 'Archaeology', type: 'macro', settings: { macro: '/cast Archaeology', icon: 'Archaeology' } },
        { type: 'empty' },
        { type: 'empty' }
    ];

    // Row 2 (8-15)
    // 8: Campfire, 9: Fishing Pole?, 10: Survey, 11: Disenchant, 12: Milling, 13: Prospecting, 14, 15
    const row2 = [
        { name: 'Campfire', type: 'macro', settings: { macro: '/cast Basic Campfire', icon: 'Fire' } },
        { name: 'Survey', type: 'macro', settings: { macro: '/cast Survey', icon: 'Survey' } },
        { name: 'Disenchant', type: 'macro', settings: { macro: '/cast Disenchant', icon: 'Disenchant' } },
        { name: 'Milling', type: 'macro', settings: { macro: '/cast Milling', icon: 'Milling' } },
        { name: 'Prospecting', type: 'macro', settings: { macro: '/cast Prospecting', icon: 'Prospecting' } },
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

module.exports = GenerateProfessionsPage;
