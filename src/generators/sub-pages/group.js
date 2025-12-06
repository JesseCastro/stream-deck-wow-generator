const GeneratePanicRow = require('../panic-row');
const GenerateUniversalBar = require('../universal-bar');

/**
 * Generates the Group/Raid Sub-Page actions.
 * @param {string} classId
 * @param {string} specId
 * @param {string} raceId
 * @param {KeybindManager} keybindManager
 * @param {IconManager} iconManager
 * @returns {Array<Object>} Array of 32 Action objects
 */
function GenerateGroupPage(classId, specId, raceId, keybindManager, iconManager) {
    // Row 1 (0-7)
    const row1 = [
        { type: 'back', name: 'Back' }, // 0
        { name: 'Skull', type: 'macro', settings: { macro: '/tm 8', icon: 'Skull' } },
        { name: 'Cross', type: 'macro', settings: { macro: '/tm 7', icon: 'Cross' } },
        { name: 'Square', type: 'macro', settings: { macro: '/tm 6', icon: 'Square' } },
        { name: 'Moon', type: 'macro', settings: { macro: '/tm 5', icon: 'Moon' } },
        { name: 'Triangle', type: 'macro', settings: { macro: '/tm 4', icon: 'Triangle' } },
        { name: 'Diamond', type: 'macro', settings: { macro: '/tm 3', icon: 'Diamond' } },
        { name: 'Circle', type: 'macro', settings: { macro: '/tm 2', icon: 'Circle' } }
    ];

    // Row 2 (8-15)
    // 8: Star, 9: Ready, 10: Pull, 11: Focus, 12: Clear, 13: Assist, 14: Empty, 15: Empty
    const row2 = [
        { name: 'Star', type: 'macro', settings: { macro: '/tm 1', icon: 'Star' } },
        { name: 'Ready Check', type: 'macro', settings: { macro: '/readycheck', icon: 'CheckMap' } }, // CheckMap or similar
        { name: 'Pull Timer', type: 'macro', settings: { macro: '/pull 10', icon: 'Clock' } },
        { name: 'Focus Target', type: 'macro', settings: { macro: '/focus', icon: 'Focus' } },
        { name: 'Clear Focus', type: 'macro', settings: { macro: '/clearfocus', icon: 'ClearFocus' } },
        { name: 'Assist', type: 'macro', settings: { macro: '/assist', icon: 'Assist' } },
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

    // Resolve icons for local rows (row1, row2)
    // Since we hardcoded some names/icons, verify if we should use IconManager or fallback
    // For specific markers, we might want to ensure they exist.
    // The requirement says "Includes 8 Raid Markers... verify correct icon paths".
    // So we should try to resolve them.

    return allActions.map(item => {
        // If it was already processed (panic/universal), skip logic?
        // Actually, those funcs returned fully formed objects (Simple style).
        // But for our rows 1-2, we need to populate.

        // Check if item has icon path? PanicRow items do.
        // row1 and row2 items have 'settings: { icon: string }' but it's just a name for now.
        // We should resolve it.

        if (item.settings && item.settings.icon && !item.settings.icon.includes('/')) {
            const resolved = iconManager.resolveIcon(item.settings.icon);
            if (resolved) item.settings.icon = resolved;
            // If not found, keep name or empty?
        }

        // Also if item is 'macro', we might not need keybind manager since it's a macro action?
        // But we might want a keybind for it if the user wants?
        // Usually Sub-page actions are just "Click" (Stream Deck Text/Macro). 
        // We don't need a WoW Bind for "/tm 8". The Stream Deck types it.

        return item;
    });
}

module.exports = GenerateGroupPage;
