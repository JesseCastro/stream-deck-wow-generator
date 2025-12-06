/**
 * Manual mapping of Ability Names to Legacy Icon filenames.
 * Based on inspection of Assets/Icons
 */
const IconAliases = {
    // Paladin
    'Divine Shield': 'Bubble.png',
    'Avenging Wrath': 'Wings.png',
    'Lay on Hands': 'LoH.png',
    'Blessing of Protection': 'BoP.png',
    'Hammer of Justice': 'Stun.png',
    'Rebuke': 'Kick.png',
    'War Stomp': 'Stomp.png',
    'Concecration': 'Consecration.png', // Check spelling if needed
    'Crusader Strike': 'CS.png',
    'Templar\'s Verdict': 'TV.png',
    'Holy Shock': 'Shock.png',
    'Flash of Light': 'Flash.png',
    'Word of Glory': 'WoG.png',

    // Druid
    'Barkskin': 'Bark.png',
    'Bear Form': 'Bear.png', // inferred
    'Cat Form': 'Cat.png', // inferred
    'Travel Form': 'Travel.png',
    'Moonkin Form': 'Moon.png',
    'Ironbark': 'Bark.png', // Reuse?
    'Dash': 'Dash.png',
    'Prowl': 'Stealth.png',

    // Mage
    'Ice Block': 'Block.png',
    'Blink': 'Blink.png',
    'Counterspell': 'Counter.png',
    'Polymorph': 'Poly.png',
    'Combustion': 'Comb.png',
    'Spellsteal': 'Steal.png',
    'Invisibility': 'Invis.png',

    // Priest
    'Power Word: Shield': 'Shield.png',
    'Shadow Word: Pain': 'SWP.png',
    'Penance': 'Penance.png',
    'Fade': 'Fade.png',
    'Psychic Scream': 'Fear.png',
    'Dispersion': 'Dispersion.png',

    // Warrior
    'Charge': 'Charge.png',
    'Pummel': 'Kick.png', // Reuse generic kick icon?
    'Execute': 'Exec.png',
    'Shield Block': 'Block.png',

    // General
    'Hearthstone': 'Hearth.png',
    'Mount': 'Mount.png',
    'Interact': 'Interact.png',
    'Screenshot': 'Screenshot.png',
    'World Map': 'WorldMkr.png', // Maybe? Or 'Map.png'
    'Professions': 'Profs.png'
};

module.exports = IconAliases;
