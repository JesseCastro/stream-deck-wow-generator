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
    { name: 'Food', type: 'hotkey' },
    { name: 'Drink', type: 'hotkey' },
    { name: 'Flask', type: 'hotkey' },
    { name: 'Rune', type: 'hotkey' },
    { name: 'Weapon Oil', type: 'hotkey' },
    { name: 'Healthstone', type: 'hotkey' },
    { type: 'empty' }
  ];

  // Row 2 (8-15)
  // 8: Invis, 9: Speed, 10: Glider, 11: Drums, Rest: Empty
  // Row 2 (8-15)
  // 8: Invis, 9: Speed, 10: Glider, 11: Drums, Rest: Empty
  const row2 = [
    { name: 'Invis Potion', type: 'hotkey' },
    { name: 'Speed Potion', type: 'hotkey' },
    { name: 'Glider', type: 'hotkey' },
    { name: 'Drums', type: 'hotkey' },
    { name: 'Bandage', type: 'hotkey' }, // Fill or placeholder
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

  console.log('ConsumablesPage: Starting processing loop');
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

module.exports = GenerateConsumablesPage;
// End of file
