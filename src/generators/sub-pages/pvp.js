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
    { name: 'Target Arena 1', type: 'hotkey', settings: { icon: 'Arena1', macro: '/target arena1' } },
    { name: 'Target Arena 2', type: 'hotkey', settings: { icon: 'Arena2', macro: '/target arena2' } },
    { name: 'Target Arena 3', type: 'hotkey', settings: { icon: 'Arena3', macro: '/target arena3' } },
    { name: 'Focus Arena 1', type: 'hotkey', settings: { icon: 'Focus1', macro: '/focus arena1' } },
    { name: 'Focus Arena 2', type: 'hotkey', settings: { icon: 'Focus2', macro: '/focus arena2' } },
    { name: 'Focus Arena 3', type: 'hotkey', settings: { icon: 'Focus3', macro: '/focus arena3' } },
    { type: 'empty' }
  ];

  // Row 2 (8-15)
  const row2 = [
    { name: 'BG Map', type: 'hotkey', defaultKey: 'Shift+M', settings: { icon: 'BG Map' } },
    { name: 'Report AFK', type: 'hotkey', settings: { icon: 'Report' } },
    { name: 'Focus Target', type: 'hotkey', settings: { icon: 'Focus Target' } }, // Fill
    { name: 'Clear Focus', type: 'hotkey', settings: { icon: 'Clear Focus' } }, // Fill
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

  console.log('PvPPage: Starting processing loop');
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

module.exports = GeneratePvPPage;
