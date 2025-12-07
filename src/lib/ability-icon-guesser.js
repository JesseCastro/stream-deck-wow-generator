/**
 * Complete static icon mapping for class abilities
 * NO dynamic guessing - just look it up
 */

const COMPLETE_ICONS = require('../data/complete-ability-icons.js');

/**
 * Get icon for an ability - static lookup only
 * @param {string} abilityName - Ability name from classes.js
 * @param {string} classId - Class identifier (unused, kept for compatibility)
 * @param {IconManager} iconManager - Icon manager instance
 * @returns {string|null} Resolved icon path or null
 */
function guessAbilityIcon(abilityName, classId, iconManager) {
    if (!abilityName || abilityName === '[Empty]' || abilityName === '[Racial]') {
        return null;
    }

    // Static lookup
    const iconFile = COMPLETE_ICONS[abilityName];
    if (iconFile) {
        return iconManager.resolveIcon(iconFile);
    }

    // Fallback: Try resolving the ability name directly via IconManager (which uses icon-aliases.js)
    const resolved = iconManager.resolveIcon(abilityName);
    if (resolved) {
        return resolved;
    }

    console.warn(`[Icon Missing] No mapping for: ${abilityName}`);
    return null;
}

module.exports = {
    guessAbilityIcon,
    ABILITY_ICON_OVERRIDES: COMPLETE_ICONS
};
