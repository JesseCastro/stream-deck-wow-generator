const GeneratePanicRow = require('../panic-row');
const GenerateUniversalBar = require('../universal-bar');

/**
 * Generates the Utilities Sub-Page actions.
 * @param {string} classId
 * @param {string} specId
 * @param {string} raceId
 * @param {KeybindManager} keybindManager
 * @param {IconManager} iconManager
 * @returns {Array<Object>} Array of 32 Action objects
 */
function GenerateUtilitiesPage(classId, specId, raceId, keybindManager, iconManager) {
  // Row 1 (0-7): System Utilities
  const row1 = [
    { type: 'back', name: 'Back' },
    { name: 'Reload UI', type: 'hotkey', settings: { icon: 'Reload UI' } },
    { name: 'Great Vault', type: 'hotkey', settings: { icon: 'Great Vault' } },
    { name: 'Toggle Details', type: 'hotkey', settings: { icon: 'Toggle Details' } },
    { name: 'Toggle Music', type: 'hotkey', settings: { icon: 'Toggle Music' } },
    { name: 'Screenshot', type: 'hotkey', settings: { icon: 'Screenshot' } },
    { name: 'Character Panel', type: 'hotkey', settings: { icon: 'Character Panel' } },
    { name: 'Collections', type: 'hotkey', settings: { icon: 'Collections' } }
  ];

  // Row 2 (8-15): Gameplay Utilities
  const row2 = [
    { name: 'Target Nearest Enemy', type: 'hotkey', settings: { icon: 'Target Nearest Enemy' } },
    { name: 'Stuck', type: 'hotkey', settings: { icon: 'Stuck' } },
    { name: 'Spellbook', type: 'hotkey', settings: { icon: 'Spellbook' } },
    { name: 'Dungeon Journal', type: 'hotkey', settings: { icon: 'Dungeon Journal' } },
    { name: 'LFG', type: 'hotkey', settings: { icon: 'LFG' } },
    { name: 'Friends', type: 'hotkey', settings: { icon: 'Friends' } },
    { name: 'Utilities', type: 'empty' }, // Placeholder or empty
    { name: 'Utilities', type: 'empty' }
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
    if (!item || item.type === 'empty' || item.type === 'back' || item.type === 'folder') return item;

    // 1. Ensure Keybind
    if (item.type === 'hotkey' && (!item.settings || !item.settings.hotkey)) {
      let key = keybindManager.getKey(item.name);
      if (!key) {
        // Try to use a default if available, or assign new
        key = keybindManager.assignKey(item.name);
      }
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

module.exports = GenerateUtilitiesPage;
