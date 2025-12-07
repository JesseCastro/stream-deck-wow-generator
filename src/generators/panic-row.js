const Classes = require('../data/classes');
const Races = require('../data/races');

/**
 * Generates the Class Panic Row (Row 3).
 * @param {string} classId - Class Key (e.g. 'Paladin')
 * @param {string} specId - Spec Key (e.g. 'Protection')
 * @param {string} raceId - Race Key (e.g. 'Tauren')
 * @param {KeybindManager} keybindManager 
 * @param {IconManager} iconManager 
 * @returns {Array<Object>} Array of 8 Action objects
 */
function GeneratePanicRow(classId, specId, raceId, keybindManager, iconManager) {
  const classData = Classes[classId];
  if (!classData) throw new Error(`Invalid Class: ${classId}`);

  const specData = classData.specs[specId];
  if (!specData) throw new Error(`Invalid Spec: ${specId} for Class: ${classId}`);

  const raceData = Races[raceId];
  if (!raceData) throw new Error(`Invalid Race: ${raceId}`);

  const panicRowData = specData.panicRow; // Object { 1: name, ... }
  const actions = [];

  // Indices 1 to 8
  for (let i = 1; i <= 8; i++) {
    let abilityName = panicRowData[i];

    // Replacements
    if (abilityName === '[Racial]') {
      abilityName = raceData.racial;
    }

    // Handling placeholders
    if (abilityName === '[Empty]') {
      abilityName = 'Interact'; // Fallback to Interact
    }
    // [No Interrupt] remains as is, checking for valid key later or treating as noop?
    // Current test expects name to be No Interrupt.
    if (abilityName === '[No Interrupt]') {
      // Do not map to interact.
      // We can let it flow through. It will get assigned a key, which creates a dummy button.
    }

    // Fix: Force Interact to use 'F' or pre-registered key if possible
    if (abilityName === 'Interact') {
      // Let Keybind manager handle it, but Universal Bar registers 'F'.
      // We can assume F? Or let it resolve.
      // If we assignKey() here, it might be 'V'.
      // We should try to use 'F' if not set.
      if (!keybindManager.getKey('Interact')) {
        keybindManager.registerKey('Interact', 'F', true);
      }
    }

    // Logic for standard ability
    let key = keybindManager.getKey(abilityName);
    if (!key) {
      // Assign a new key if not found
      // For Panic Row, we probably want to assign them if they are missing
      // 'Combat Pot' might be a special case requiring a standard key, but assignKey works generic
      key = keybindManager.assignKey(abilityName);
    }

    const iconPath = iconManager.resolveIcon(abilityName) || '';

    actions.push({
      name: abilityName,
      type: 'hotkey',
      settings: {
        hotkey: key,
        icon: iconPath
      }
    });
  }

  return actions;
}

module.exports = GeneratePanicRow;
