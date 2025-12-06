const Classes = require('../data/classes');
const GeneratePanicRow = require('./panic-row');
const GenerateUniversalBar = require('./universal-bar');

/**
 * Generates the Class Page (Rows 1-4) Actions.
 * @param {string} classId
 * @param {string} specId
 * @param {string} raceId
 * @param {KeybindManager} keybindManager
 * @param {IconManager} iconManager
 * @returns {Array<Object>} Array of 32 Action objects
 */
function GenerateClassPage(classId, specId, raceId, keybindManager, iconManager) {
    const classData = Classes[classId];
    if (!classData) throw new Error(`Invalid Class: ${classId}`);

    const specData = classData.specs[specId];
    if (!specData) throw new Error(`Invalid Spec: ${specId} for Class: ${classId}`);

    // Rows 1-2 (0-15)
    // 0: Back
    // 1-15: Rotation items
    const rows12 = [];

    // Slot 0
    rows12.push({ type: 'back', name: 'Back' });

    const rotationData = specData.rotation || {};

    // Slots 1 to 15
    for (let i = 1; i <= 15; i++) {
        const abilityName = rotationData[i] || '[Empty]';

        if (abilityName === '[Empty]') {
            rows12.push({ type: 'empty' });
        } else {
            // It's a rotation ability
            // Resolve Key
            let key = keybindManager.getKey(abilityName);
            if (!key) {
                // Should we assign a new key for rotation abilities?
                // Probably yes, they are critical.
                key = keybindManager.assignKey(abilityName);
            }

            // Resolve Icon
            const iconPath = iconManager.resolveIcon(abilityName) || '';

            rows12.push({
                name: abilityName,
                type: 'hotkey',
                settings: {
                    hotkey: key,
                    icon: iconPath
                }
            });
        }
    }

    // Row 3 (16-23) - Panic Row
    const panicRow = GeneratePanicRow(classId, specId, raceId, keybindManager, iconManager);

    // Row 4 (24-31) - Universal Bar
    const universalBar = GenerateUniversalBar(keybindManager, iconManager);

    const allActions = [
        ...rows12,
        ...panicRow,
        ...universalBar
    ];

    return allActions;
}

module.exports = GenerateClassPage;
