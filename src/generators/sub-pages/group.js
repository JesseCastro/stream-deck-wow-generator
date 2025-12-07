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
    { name: 'Skull', type: 'hotkey' },
    { name: 'Cross', type: 'hotkey' },
    { name: 'Square', type: 'hotkey' },
    { name: 'Moon', type: 'hotkey' },
    { name: 'Triangle', type: 'hotkey' },
    { name: 'Diamond', type: 'hotkey' },
    { name: 'Circle', type: 'hotkey' }
  ];

  // Row 2 (8-15)
  // 8: Star, 9: Ready, 10: Pull, 11: Focus, 12: Clear, 13: Assist, 14: Empty, 15: Empty
  const row2 = [
    { name: 'Star', type: 'hotkey' },
    { name: 'Ready Check', type: 'hotkey' },
    { name: 'Pull Timer', type: 'hotkey' },
    { name: 'Focus Target', type: 'hotkey' },
    { name: 'Clear Focus', type: 'hotkey' },
    { name: 'Assist', type: 'hotkey' },
    { type: 'empty' },
    { type: 'empty' }
  ];

  // Row 3 (16-23) - Panic Row
  console.log('GroupPage: Calling PanicRow...');
  const panicRow = GeneratePanicRow(classId, specId, raceId, keybindManager, iconManager);
  console.log('GroupPage: PanicRow done');

  // Row 4 (24-31) - Universal Bar
  console.log('GroupPage: Calling UniversalBar...');
  const universalBar = GenerateUniversalBar(keybindManager, iconManager);
  console.log('GroupPage: UniversalBar done');

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

  console.log('GroupPage: Starting icon resolution and key assignment loop for', allActions.length, 'items');
  const result = allActions.map((item, idx) => {
    // Skip if empty or back button
    if (!item || item.type === 'empty' || item.type === 'back') {
      return item;
    }

    // 1. Ensure Keybind exists
    // If it's a hotkey type but has no specific key assigned in settings, we need to get/assign one.
    if (item.type === 'hotkey' && (!item.settings || !item.settings.hotkey)) {
      let key = keybindManager.getKey(item.name);
      if (!key) {
        key = keybindManager.assignKey(item.name);
      }
      if (!item.settings) item.settings = {};
      item.settings.hotkey = key;
    }

    // 2. Icon Resolution
    // Skip if no settings or already resolved (contains /)
    if (!item.settings || !item.settings.icon) {
      return item;
    }

    // Skip if already an absolute path
    if (item.settings.icon.includes('/')) {
      return item;
    }

    const resolved = iconManager.resolveIcon(item.settings.icon);
    if (resolved) item.settings.icon = resolved;

    return item;
  });
  console.log('GroupPage: Processing complete');
  return result;
}

module.exports = GenerateGroupPage;
