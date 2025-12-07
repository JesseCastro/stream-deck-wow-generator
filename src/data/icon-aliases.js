module.exports = {
  // General Icons
  'back': 'back',
  'Back': 'back',
  'Game Menu': 'back',
  'spare': 'inv_misc_questionmark',
  'Spare': 'inv_misc_questionmark',
  'Ready Check': 'inv_misc_questionmark',
  'CheckMap': 'inv_misc_questionmark',

  // Main Page Folders
  'PvP': 'pvpcurrency-conquest-alliance',
  'Profs': 'trade_engineering',
  'Mounts': 'ability_mount_charger',
  // "Class" removed to allow dynamic resolution via ClassIcon_${classId}
  'Consumes': 'inv_potion_93', // Matches Consumes folder

  // Interface / General Actions
  'Group': 'inv_misc_grouplooking', // Distinct from Character Panel
  'Nameplates': 'inv_helmet_145a', // Distinct Helm for Enemy Plates
  'Frnd Plt': 'inv_helmet_118', // Distinct Helm for Friend Plates
  'Social': 'inv_misc_groupneedmore',
  'Zoom In': 'inv_misc_spyglass_03', // Changed to 03 (02 failed)
  'Zoom Out': 'inv_misc_spyglass_01', // Use same Spyglass 01 as confirmed working
  'Tgl UI': 'inv_misc_spyglass_02',
  'Invite': 'spell_holy_prayerofhealing',
  'Leave': 'ability_venthyr_doorofshadows',
  'Pet Atk': 'ability_ghoulfrenzy',
  'Follow': 'ability_hunter_mastermarksman',
  'Report AFK': 'inv_misc_note_02',
  'Report': 'inv_misc_note_02',
  'World Map': 'inv_misc_map02',
  'Map': 'inv_misc_map02',
  'Hearthstone': 'inv_misc_rune_06',
  'Open Bags': 'inv_misc_bag_08',
  'Toggle Quest': 'inv_misc_book_11',

  // Movement
  'Autorun': 'ability_rogue_sprint',
  'War Stomp': 'ability_warstomp',

  // Markers
  'Skull': 'inv_misc_skull_02',
  'Cross': 'spell_holy_excorcism',
  'Square': 'spell_frost_chainsofice',
  'Circle': 'spell_holy_symbolofhope',
  'Triangle': 'spell_fire_flameshock',
  'Diamond': 'inv_misc_gem_diamond_01',
  'Moon': 'spell_nature_polymorph',
  'Star': 'creatureportrait_saltwater_star',
  'Raid Markers': 'inv_misc_groupneedmore',
  'Pull Timer': 'inv_misc_pocketwatch_01',

  // Targeting / PvP
  'Focus Target': 'focus',
  'Clear Focus': 'inv_misc_spyglass_02',
  'Assist': 'ability_warrior_rallyingcry',
  'Arena1': 'inv_misc_head_dragon_red',
  'Arena2': 'inv_misc_head_dragon_blue',
  'Arena3': 'inv_misc_head_dragon_bronze',
  'Focus1': 'ability_hunter_mastermarksman',
  'Focus2': 'ability_marksmanship',
  'Focus3': 'ability_hunter_snipershot',
  'BG Map': 'inv_misc_map_01',

  // Mounts - UPDATED to use verified files
  'Smart Mount': 'ability_mount_ridinghorse',
  'Repair Mount': 'inv_mammoth2mount_gray', // CONFIRMED WORKING
  'AH Mount': 'ability_mount_mechastrider',
  'Water Walking': 'ability_mount_waterstridermount',
  'Dragonriding': 'ability_dragonriding_dragonridinggliding01',
  'Ground Mount': 'ability_mount_blackdirewolf',
  'Flying Mount': 'ability_mount_goldengryphon',
  'Random Favorite': 'inv_misc_dice_01',

  // Compatibility Aliases for mounts.js internal keys
  'AHMount': 'ability_mount_mechastrider',
  'WaterStrider': 'ability_mount_waterstridermount',
  'GroundMount': 'ability_mount_blackdirewolf',
  'FlyingMount': 'ability_mount_goldengryphon',
  'Dice': 'inv_misc_dice_01',
  'RepairMount': 'inv_mammoth2mount_gray', // Just in case

  // Compatibility Aliases for professions.js
  'Profession1': 'trade_blacksmithing',
  'Profession2': 'trade_engineering',
  'Fire': 'spell_fire_fire',

  // Compatibility Aliases for consumables.js
  'Drink': 'inv_drink_04',
  'Weapon Oil': 'garrison_oil',
  'Invis Potion': 'inv_potion_145',
  'Speed Potion': 'petbattle_speed',
  'Glider': 'inv_misc_cape_20',
  'Drums': 'inv_misc_drum_01',

  // Utilities / System
  'Utilities': 'inv_misc_gear_01',
  'Reload UI': 'inv_misc_wrench_01',
  'Great Vault': 'battleground_strongbox_silver_horde',
  'Toggle Details': 'inv_misc_note_02',
  'Toggle Music': 'inv_misc_drum_01',
  'Screenshot': 'inv_misc_spyglass_02',
  'Character Panel': 'inv_helmet_06',
  'Collections': 'inv_toy_booklibrary',
  'Spellbook': 'ui_spellbook_onebutton',
  'Loot Spec': 'inv_misc_coin_01',
  'Dungeon Journal': 'inv_misc_book_09',
  'LFG': 'inv_misc_grouplooking',
  'Friends': 'inv_misc_groupneedmore', // Keep if works, or change
  'Achievements': 'inv_misc_achievment_01',
  'Stuck': 'spell_shadow_teleport',
  'Target Nearest Enemy': 'ability_hunter_snipershot',

  // Warrior
  'Mortal Strike': 'ability_warrior_savageblow',
  'Overpower': 'ability_meleedamage',
  'Execute': 'inv_sword_48',
  'Slam': 'ability_warrior_decisivestrike',
  'Colossus Smash': 'ability_warrior_colossussmash',
  'Bladestorm': 'ability_warrior_bladestorm',
  'Sweeping Strikes': 'ability_rogue_slicedice', // Similar enough or find better
  'Cleave': 'ability_warrior_cleave',
  'Hamstring': 'ability_shockwave',
  'Victory Rush': 'ability_warrior_victoryrush',
  'Thunder Clap': 'ability_thunderclap',
  'Charge': 'ability_warrior_charge',
  'Heroic Leap': 'ability_heroicleap',
  'Heroic Throw': 'inv_axe_66',
  'Berserker Rage': 'spell_nature_ancestralguardian',

  // Warrior Panic
  'Die by the Sword': 'ability_warrior_challange',
  'Ignore Pain': 'ability_warrior_shieldreflection',
  'Rallying Cry': 'ability_warrior_rallyingcry',
  'Avatar': 'warrior_talent_icon_avatar',
  'Pummel': 'inv_gauntlets_04',
  'Last Stand': 'spell_nature_shamanrage',
  'Shield Wall': 'ability_warrior_shieldwall',
  'Demoralizing Shout': 'ability_warrior_waracry',
  'Enraged Regeneration': 'ability_warrior_focusedrage',
  'Recklessness': 'ability_warrior_intensifyrage',
  'Odyn\'s Fury': 'ability_warrior_titansgrip',

  // Hunter
  'Barbed Shot': 'ability_hunter_barbedshot',
  'Kill Command': 'ability_hunter_killcommand',
  'Bestial Wrath': 'ability_druid_ferociousbite', // Fallback or precise
  'Cobra Shot': 'ability_hunter_cobrashot',
  'Kill Shot': 'ability_hunter_assassinate2',
  'Multi-Shot': 'ability_upgrademoonglaive',
  'Bloodshed': 'ability_druid_primaltenacity',
  'Call of the Wild': 'ability_hunter_callofthewild',
  'Concussive Shot': 'spell_frost_stun',
  'Counter Shot': 'inv_ammo_bullet_02', // Fallback
  'Tar Trap': 'spell_hunter_exoticmunitions_poisoned',
  'Freezing Trap': 'spell_hunter_exoticmunitions_frozen',
  'Tranquilizing Shot': 'spell_nature_drowsy',
  'Mend Pet': 'ability_hunter_mendpet',
  'Revive Pet': 'ability_hunter_beastsoothe',

  // Hunter Panic
  'Aspect of the Turtle': 'ability_hunter_pet_turtle',
  'Exhilaration': 'ability_hunter_onewithnature',
  'Feign Death': 'ability_rogue_feigndeath',
  'Trueshot': 'ability_hunter_trueshot',
  'Volley': 'ability_hunter_volley',
  'Coordinated Assault': 'ability_hunter_coordinatedassault',
  'Fury of the Eagle': 'ability_hunter_furyoftheeagle',
  'Muzzle': 'ability_hunter_negate',
  'Disengage': 'ability_rogue_feint',

  // Racials Additions
  'Stoneform': 'spell_shadow_unholystrength', // Dwarf
  'Shadowmeld': 'ability_ambush', // Night Elf
  'Tail Swipe': 'ability_racial_tailswipe', // Dracthyr
  'Wing Buffet': 'ability_racial_wingbuffet', // Dracthyr
  'Will to Survive': 'spell_shadow_charm', // Human (Fallback)
  'Escape Artist': 'ability_rogue_trip', // Gnome
  'Gift of the Naaru': 'spell_holy_flashheal', // Draenei
  'Arcane Torrent': 'spell_arcane_massdispel', // Blood Elf
  'Darkflight': 'ability_rogue_sprint', // Worgen
  'Rocket Jump': 'inv_misc_bomb_06', // Goblin
  'Quaking Palm': 'pandarenracial_quiveringpain', // Pandaren
  'Berserking': 'racial_troll_berserk', // Troll
  'Fireblood': 'spell_fire_fireball', // Dark Iron (Fallback)
  'Light\'s Judgment': 'spell_holy_divinepurpose', // Lightforged
  'Ancestral Call': 'racial_orc_berserkerstrength', // Mag'har
  'Haymaker': 'inv_gauntlets_04', // Kul Tiran
  'Spatial Rift': 'inv_enchant_voidsphere', // Void Elf
  'Hyper Organic Light Originator': 'inv_misc_enggizmos_20', // Mechagnome
  'Bag of Tricks': 'inv_misc_bag_08', // Vulpera

  // Warlock - Affliction
  'Unstable Affliction': 'spell_shadow_unstableaffliction_3',
  'Agony': 'spell_shadow_curseofsargeras',
  'Corruption': 'spell_shadow_abominationexplosion',
  'Malefic Rapture': 'spell_shadow_shadowfury', // Fallback
  'Drain Soul': 'spell_shadow_haunting',
  'Seed of Corruption': 'spell_shadow_seedofdestruction',
  'Vile Taint': 'spell_deathknight_gnaw_ghoul', // Fallback fixed
  'Phantom Singularity': 'inv_enchant_voidsphere',
  'Soul Rot': 'ability_ardenweald_warlock',
  'Summon Darkglare': 'spell_shadow_summonvoidwalker', // Fallback
  'Haunt': 'ability_warlock_haunt',
  'Nightfall': 'spell_shadow_twilight',
  'Shadow Embrace': 'spell_shadow_shadowembrace',
  'Drain Life': 'spell_shadow_lifedrain',

  // Warlock - Demonology
  'Hand of Gul\'dan': 'spell_shadow_psychicscream', // Placeholder
  'Demonbolt': 'spell_fire_firebolt02',
  'Shadow Bolt': 'spell_shadow_shadowbolt',
  'Call Dreadstalkers': 'spell_warlock_calldreadstalkers',
  'Implosion': 'spell_fire_felfirenova',
  'Summon Demonic Tyrant': 'spell_warlock_summondemonictyrant',
  'Grimoire: Felguard': 'spell_shadow_summonfelguard',
  'Demonic Strength': 'spell_warlock_demonicstrength',
  'Power Siphon': 'spell_warlock_power_siphon',
  'Doom': 'spell_shadow_auraofdarkness',
  'Soul Strike': 'spell_warlock_soulstrike',
  'Bilescourge Bombers': 'spell_warlock_bilescourgebombers',
  'Summon Felguard': 'spell_shadow_summonfelguard',

  // Warlock - Destruction
  'Chaos Bolt': 'ability_warlock_chaosbolt',
  'Incinerate': 'spell_fire_flame_shock',
  'Conflagrate': 'spell_fire_fireball',
  'Immolate': 'spell_fire_immolation',
  'Rain of Fire': 'spell_shadow_rainoffire',
  'Havoc': 'ability_warlock_baneofhavoc',
  'Summon Infernal': 'spell_shadow_summoninfernal',
  'Channel Demonfire': 'spell_fire_felflameinferno',
  'Shadowburn': 'spell_shadow_scourgebuild',
  'Cataclysm': 'spell_fire_cataclysm',
  'Dimensional Rift': 'spell_warlock_dimensionalrift',
  'Soul Fire': 'spell_fire_fireball02',
  'Summon Imp': 'spell_shadow_summonimp',

  // Warlock Common
  'Create Healthstone': 'inv_stone_04',
  'Curse of Tongues': 'spell_shadow_curseoftounges',
  'Curse of Weakness': 'spell_shadow_curseofmannoroth',
  'Curse of Exhaustion': 'spell_shadow_grimward',
  'Unending Resolve': 'spell_shadow_demonictactics',
  'Dark Pact': 'spell_shadow_darksummoning',
  'Burning Rush': 'spell_fire_burningmoltenlava',
  'Demonic Circle': 'spell_shadow_demoniccircle',

  // Mage - Arcane
  'Arcane Blast': 'spell_arcane_blast',
  'Arcane Barrage': 'spell_arcane_arcanebarrage',
  'Arcane Missiles': 'spell_nature_starfall',
  'Evocation': 'spell_nature_purge',
  'Arcane Surge': 'spell_arcane_arcanepower',
  'Touch of the Magi': 'spell_arcane_arcane01',
  'Arcane Orb': 'inv_arcane_orb',
  'Prismatic Barrier': 'spell_mage_armor', // Placeholder
  'Mirror Image': 'spell_magic_lesserinvisibilty',
  'Alter Time': 'spell_mage_altertime',
  'Counterspell': 'spell_frost_iceshock',
  'Spellsteal': 'spell_arcane_arcane02',
  'Remove Curse': 'spell_holy_removecurse',
  'Slow': 'spell_nature_slow',
  'Time Warp': 'spell_holy_borrowedtime',

  // Mage - Fire
  'Fireball': 'spell_fire_fireball02',
  'Pyroblast': 'spell_fire_fireball',
  'Fire Blast': 'spell_fire_fire',
  'Phoenix Flames': 'spell_fire_elementaldevastation',
  'Combustion': 'spell_fire_sealoffire',
  'Scorch': 'spell_fire_soulburn',
  'Flamestrike': 'spell_fire_selfdestruct',
  'Living Bomb': 'inv_misc_bomb_04',
  'Dragon\'s Breath': 'inv_misc_head_dragon_01',
  'Blazing Barrier': 'spell_fire_lavaspawn',

  // Mage - Frost
  'Frostbolt': 'spell_frost_frostbolt02',
  'Ice Lance': 'spell_frost_frostblast',
  'Flurry': 'spell_fire_bluefire',
  'Frozen Orb': 'spell_frost_frozenorb',
  'Icy Veins': 'spell_frost_coldhearted',
  'Blizzard': 'spell_frost_icestorm',
  'Comet Storm': 'spell_frost_ice_shard',
  'Glacial Spike': 'spell_frost_glacier',
  'Cone of Cold': 'spell_frost_glacier',
  'Ice Barrier': 'spell_ice_lament',
  'Ice Block': 'spell_frost_frost',
  'Cold Snap': 'spell_frost_wizardmark',
  'Shifting Power': 'spell_nature_starfall', // Placeholder

  'Interact': 'interact', // Better icon found

  // Priest - Discipline
  'Power Word: Shield': 'spell_holy_powerwordshield',
  'Shadow Word: Pain': 'spell_shadow_shadowwordpain',
  'Penance': 'spell_holy_penance',
  'Smite': 'spell_holy_holysmite',
  'Flash Heal': 'spell_holy_flashheal',
  'Psychic Scream': 'spell_shadow_psychicscream',
  'Power Word: Radiance': 'spell_priest_powerwordradiance',
  'Purge the Wicked': 'spell_holy_purify',
  'Shadowfiend': 'spell_shadow_shadowfiend',
  'Power Infusion': 'spell_holy_powerinfusion',
  'Pain Suppression': 'spell_holy_painsupression',
  'Power Word: Barrier': 'spell_holy_powerwordbarrier',
  'Mass Dispel': 'spell_arcane_massdispel',
  'Leap of Faith': 'priest_spell_leapoffaith_a', // Fixed
  'Fade': 'spell_magic_lesserinvisibilty',
  'Apotheosis': 'spell_holy_powerinfusion', // Placeholder

  // Priest - Holy
  'Heal': 'spell_holy_heal',
  'Holy Word: Serenity': 'spell_holy_serenity', // Fallback? spell_holy_persuitofjustice
  'Holy Word: Sanctify': 'spell_holy_divineprovidence', // Fallback
  'Prayer of Mending': 'spell_holy_prayerofmendingtga',
  'Renew': 'spell_holy_renew',
  'Circle of Healing': 'spell_holy_circleofrenewal',
  'Holy Fire': 'spell_holy_searinglight',
  'Divine Hymn': 'spell_holy_divinehymn',
  'Guardian Spirit': 'spell_holy_guardianspirit',
  'Desperate Prayer': 'spell_holy_restoration',

  // Priest - Shadow
  'Vampiric Touch': 'spell_holy_stoicism',
  'Mind Blast': 'spell_shadow_unholyfrenzy',
  'Mind Flay': 'spell_shadow_siphonmana',
  'Devouring Plague': 'spell_shadow_devouringplague.', // Typo check?
  'Shadow Crash': 'spell_shadow_shadowcrash',
  'Void Eruption': 'spell_priest_voidform',
  'Shadowform': 'spell_shadow_shadowform',
  'Dispersion': 'spell_shadow_dispersion',
  'Vampiric Embrace': 'spell_shadow_unsummonbuilding',
  'Silence': 'spell_shadow_impphaseshift',
  'Dark Ascension': 'spell_shadow_shadowpower',

  // Professions
  'Profession 1': 'trade_blacksmithing',
  'Profession 2': 'trade_engineering',
  'Cooking': 'trade_cooking_2',
  'Fishing': 'trade_fishing',
  'Archaeology': 'trade_archaeology',
  'Campfire': 'spell_fire_fire',
  'Survey': 'inv_misc_spyglass_02',
  'Disenchant': 'inv_enchant_disenchant',
  'Milling': 'inv_inscription_papyrus',
  'Prospecting': 'inv_misc_gem_diamond_02',

  // Consumables
  'Food': 'inv_misc_food_lunchbox_copper',
  'Water': 'inv_drink_04',
  'Flask': 'inv_flask_green',
  'Healthstone': 'warlock_ healthstone',
  'Rune': 'inv_misc_rune_01',
  'Oil': 'inv_potion_155',
  'InvisPot': 'inv_potion_145',
  'SpeedPot': 'inv_potion_113',
  'Health Potion': 'inv_potion_51',
  'Combat Pot': 'inv_potion_111',
  'Bandage': 'inv_misc_bandage_12',

  // Paladin Abilities
  'Divine Shield': 'spell_holy_divineshield',
  'Lay on Hands': 'spell_holy_layonhands',
  'Ardent Defender': 'spell_holy_ardentdefender',
  'Guardian of Ancient Kings': 'spell_holy_guardianspirit',
  'Word of Glory': 'spell_holy_divineprovidence',
  'Rebuke': 'spell_holy_rebuke',
  'Avenger\'s Shield': 'spell_holy_avengersshield',
  'Consecration': 'spell_holy_innerfire',
  'Hammer of the Righteous': 'ability_paladin_conviction',
  'Hand of Reckoning': 'spell_holy_unyieldingfaith',
  'Blinding Light': 'spell_holy_searinglight',
  'Hammer of Justice': 'spell_holy_sealofmight',
  'Cleanse Toxins': 'spell_holy_renew',
  'Blessing of Freedom': 'spell_holy_sealofvalor',
  'Blessing of Sacrifice': 'spell_holy_sealofprotection',

  // Rogue - General
  'Stealth': 'ability_stealth',
  'Vanish': 'ability_vanish', // Try re-typing or using different icon? ability_vanish is correct.
  'Evasion': 'spell_shadow_shadowward',
  'Cloak of Shadows': 'spell_shadow_nethercloak',
  'Sprint': 'ability_rogue_sprint',
  'Kick': 'ability_kick', // Correct.
  'Sap': 'ability_sap',
  'Blind': 'spell_shadow_mindsteal',
  'Distract': 'ability_rogue_distract',
  'Feint': 'ability_rogue_feint',
  'Crimson Vial': 'inv_potion_51', // Fallback
  'Tricks of the Trade': 'ability_rogue_tricksofthetrade',
  'Shroud of Concealment': 'ability_rogue_shroudofconcealment',

  // Rogue - Assassination
  'Mutilate': 'ability_rogue_shadowstrikes', // Fallback if mutilate missing. Or ability_rogue_dualweild?
  'Envenom': 'ability_rogue_disembowel',
  'Garrote': 'ability_rogue_garrote',
  'Rupture': 'ability_rogue_rupture',
  'Shiv': 'inv_throwingknife_04',
  'Deathmark': 'spell_shadow_soulleech_2',
  'Fan of Knives': 'ability_rogue_fanofknives',
  'Crimson Tempest': 'ability_rogue_crimsontempest',
  'Ambush': 'ability_rogue_ambush',
  'Kidney Shot': 'ability_rogue_kidneyshot',
  'Slice and Dice': 'ability_rogue_slicedice',

  // Rogue - Outlaw
  'Sinister Strike': 'spell_shadow_ritualofsacrifice', // Classic icon
  'Dispatch': 'ability_rogue_trip', // Placeholder?
  'Pistol Shot': 'ability_rogue_pistolshot', // Confirmed
  'Between the Eyes': 'inv_weapon_rifle_05', // Fallback
  'Adrenaline Rush': 'spell_shadow_shadowworddominate',
  'Blade Flurry': 'ability_warrior_punishingblow',
  'Roll the Bones': 'ability_rogue_rollthebones',
  'Ghostly Strike': 'spell_shadow_curse', // Fallback
  'Killing Spree': 'ability_rogue_murderspree', // Fixed typo (was murderspre)
  'Gouge': 'ability_gouge',

  // Rogue - Subtlety
  'Backstab': 'ability_backstab', // Confirmed
  'Shadowstrike': 'ability_rogue_shadowstrike', // Confirmed
  'Eviscerate': 'ability_rogue_eviscerate', // Confirmed
  'Shadow Dance': 'ability_rogue_shadowdance',
  'Symbols of Death': 'spell_shadow_rune',
  'Secret Technique': 'ability_rogue_encvelopingshadows', // Typo in source?
  'Shuriken Storm': 'ability_rogue_shurikenstorm',
  'Black Powder': 'inv_misc_dust_02', // Fallback
  'Shadow Blades': 'spell_shadow_shadowworddominate', // Fallback
  'Cold Blood': 'spell_frost_coldblood',
  'Cheap Shot': 'ability_cheapshot',

  // Druid - General
  'Barkskin': 'spell_nature_stoneclawtotem', // Kept fallback, file exists (44kb)
  'Survival Instincts': 'ability_druid_tigersroar', // Kept fallback, file exists (43kb)
  'Renewal': 'spell_nature_natureblessing',
  'Dash': 'ability_druid_dash',
  'Stampeding Roar': 'spell_druid_stampedingroar_cat',
  'Entangling Roots': 'spell_nature_stranglevines',
  'Cyclone': 'spell_nature_earthbind',
  'Innervate': 'spell_nature_lightning',
  'Nature\'s Cure': 'spell_nature_removecurse',
  'Revive': 'spell_nature_regenerate',
  'Rebirth': 'spell_nature_reincarnation',
  'Prowl': 'ability_ambush',
  'Skull Bash': 'inv_misc_bone_skull_02',

  // Druid - Balance
  'Moonfire': 'spell_nature_starfall', // Classic icon for Moonfire
  'Sunfire': 'spell_fire_fire', // Fallback
  'Stellar Flare': 'spell_nature_starfall', // Fallback
  'Starfire': 'spell_arcane_starfire',
  'Wrath': 'spell_nature_lightning', // Fallback
  'Starsurge': 'spell_arcane_arcane03',
  'Starfall': 'spell_nature_starfall',
  'Celestial Alignment': 'spell_nature_natureguardian',
  'Convoke the Spirits': 'spell_animarevendreth_buff',
  'Force of Nature': 'spell_nature_forceofnature',
  'Warrior of Elune': 'spell_holy_elunesgrace',
  'Solar Beam': 'spell_nature_stoneclawtotem',
  'Typhoon': 'spell_shaman_thunderstorm',

  // Druid - Feral
  'Rake': 'ability_druid_disembowel', // Fallback
  'Shred': 'ability_druid_rake', // Reuse?
  'Rip': 'ability_ghoulfrenzy', // Fallback
  'Ferocious Bite': 'ability_druid_ferociousbite',
  'Swipe': 'ability_druid_swipe',
  'Thrash': 'spell_druid_thrash',
  'Berserk': 'spell_shadow_unholyfrenzy',
  'Tiger\'s Fury': 'inv_misc_head_tiger_01', // Found generic tiger head
  'Feral Frenzy': 'ability_druid_rake',
  'Adaptive Swarm': 'spell_nature_insectswarm', // Fallback
  'Maim': 'ability_druid_mangle',

  // Druid - Guardian
  'Mangle': 'ability_druid_mangle',
  'Maul': 'ability_druid_maul',
  'Ironfur': 'ability_druid_ironfur', // Found exact match!
  'Frenzied Regeneration': 'ability_bullrush', // Kept fallback
  'Incarnation: Guardian of Ursoc': 'spell_druid_incarnation',
  'Rage of the Sleeper': 'ability_druid_enrage',
  'Growl': 'ability_physical_taunt',
  'Incapacitating Roar': 'ability_druid_demoralizingroar',

  // Druid - Restoration
  'Rejuvenation': 'spell_nature_rejuvenation',
  'Lifebloom': 'inv_misc_flower_01', // Placeholder
  'Regrowth': 'spell_nature_resistnature',
  'Wild Growth': 'spell_nature_natureguardian',
  'Swiftmend': 'inv_relics_idolofrejuvenation',
  'Efflorescence': 'spell_nature_tranquility',
  'Cenarion Ward': 'spell_nature_natureguardian',
  'Tranquility': 'spell_nature_tranquility',
  'Tree of Life': 'ability_druid_treeoflife',
  'Ironbark': 'spell_nature_stoneclawtotem',
  'Nature\'s Swiftness': 'spell_nature_ravenform',

  // Shaman - General
  'Astral Shift': 'ability_shaman_astralshift',
  'Earth Elemental': 'spell_nature_earthelemental_totem',
  'Fire Elemental': 'spell_fire_elemental_totem',
  'Wind Shear': 'spell_nature_cyclone',
  'Hex': 'spell_shaman_hex',
  'Ghost Wolf': 'spell_nature_spiritwolf',
  'Cleanse Spirit': 'ability_shaman_cleansespirit',
  'Capacitor Totem': 'spell_shaman_staticshock', // Fallback
  'Tremor Totem': 'spell_nature_tremortotem',

  // Shaman - Elemental
  'Flame Shock': 'spell_fire_flameshock',
  'Frost Shock': 'spell_frost_frostshock',
  'Earth Shock': 'spell_nature_earthshock',
  'Lava Burst': 'sha_spell_shaman_lavaburst',
  'Lightning Bolt': 'spell_nature_lightning',
  'Chain Lightning': 'spell_nature_chainlightning',
  'Earthquake': 'spell_nature_earthquake',
  'Stormkeeper': 'spell_nature_lightning', // Fallback to lightning
  'Icefury': 'spell_frost_frostbolt02', // Fallback to frostbolt
  'Primordial Wave': 'spell_animamaldraxxus_wave',
  'Liquid Magma Totem': 'spell_shaman_spewlava',
  'Thunderstorm': 'spell_shaman_thunderstorm',
  'Elemental Blast': 'shaman_talent_elementalblast',
  'Blood Fury': 'racial_orc_berserkerstrength', // Orc Racial

  // Shaman - Enhancement
  'Stormstrike': 'ability_shaman_stormstrike',
  'Lava Lash': 'ability_shaman_lavalash',
  'Ice Strike': 'spell_frost_frostbrand', // Fallback
  'Crash Lightning': 'spell_shaman_crashlightning',
  'Sundering': 'ability_warrior_sunder', // Warrior icon
  'Feral Spirit': 'spell_shaman_feralspirit',
  'Ascendance': 'spell_fire_elementaldevastation',
  'Doom Winds': 'inv_mace_1h_doomhammer', // Doomhammer icon

  // Shaman - Restoration
  'Spirit Link Totem': 'spell_shaman_spiritlink',
  'Healing Tide Totem': 'ability_shaman_healingtide', // Found exact
  'Ancestral Guidance': 'spell_shaman_ancestralawakening',
  'Riptide': 'spell_nature_riptide',
  'Healing Wave': 'spell_nature_healingwavelesser',
  'Healing Surge': 'spell_nature_healingway',
  'Chain Heal': 'spell_nature_healingwavegreater',
  'Healing Rain': 'sha_spell_fire_bluerainoffire', // Fallback (Blue Rain)
  'Cloudburst Totem': 'spell_nature_invisibilitytotem', // Fallback (Water Totem)
  'Mana Tide Totem': 'spell_frost_summonwaterelemental',
  'Earthen Wall Totem': 'spell_nature_stoneclawtotem', // Changed to avoid Earth Shield collision
  'Purify Spirit': 'spell_holy_purify',
  'Earth Shield': 'spell_nature_skinofearth',
  'Water Shield': 'ability_shaman_watershield', // Verified exists

  // Monk - Brewmaster
  'Keg Smash': 'inv_misc_food_draenor_rawrylakegg_brown', // Keg icon
  'Breath of Fire': 'ability_monk_breathoffire',
  'Blackout Kick': 'ability_monk_blackoutkick',
  'Tiger Palm': 'ability_monk_tigerpalm',
  'Rising Sun Kick': 'ability_monk_risingsunkick',
  'Rushing Jade Wind': 'ability_monk_rushingjadewind', // Guessing, if fails will fallback
  'Spinning Crane Kick': 'ability_monk_cranekick',
  'Touch of Death': 'ability_monk_touchofdeath',
  'Exploding Keg': 'ability_monk_explodingjadeblossom', // Best fit
  'Weapons of Order': 'inv_ability_monk_weaponsoforder',
  'Bonedust Brew': 'inv_misc_bone_01', // Fallback (Bone)
  'Summon Black Ox Statue': 'monk_stance_drunkenox', // Reuse Ox stance
  'Provoke': 'ability_monk_provoke',
  'Detox': 'spell_nature_removedisease', // Disease remove
  'Fortifying Brew': 'ability_monk_fortifyingale',
  'Zen Meditation': 'ability_monk_zenmeditation',
  'Celestial Brew': 'ability_monk_ironskinbrew', // Fallback
  'Invoke Niuzao': 'monk_stance_drunkenox', // Ox
  'Purifying Brew': 'ability_monk_chibrew', // Fallback
  'Spear Hand Strike': 'ability_monk_spearhand',

  // Monk - Mistweaver
  'Renewing Mist': 'ability_monk_renewingmists',
  'Enveloping Mist': 'spell_monk_envelopingmist',
  'Vivify': 'ability_monk_vivify',
  'Soothing Mist': 'ability_monk_soothingmists', // Guessing
  'Essence Font': 'ability_monk_essencefont', // Verified
  'Faeline Stomp': 'spell_nature_earthquake', // Fallback (Stomp?) or finding better later
  'Invoke Yu\'lon': 'monk_stance_wiseserpent', // Serpent
  'Mana Tea': 'monk_ability_cherrymanatea', // Verified
  'Resuscitate': 'spell_holy_resurrection', // Fallback
  'Diffuse Magic': 'spell_monk_diffusemagic',
  'Life Cocoon': 'ability_monk_chicocoon',
  'Revival': 'spell_monk_revival',
  'Thunder Focus Tea': 'ability_monk_thunderfocustea', // Verified

  // Monk - Windwalker
  'Fists of Fury': 'monk_ability_fistoffury',
  'Whirling Dragon Punch': 'ability_monk_hurricanestrike', // Guessing
  'Flying Serpent Kick': 'ability_monk_flyingdragonkick', // Guessing
  'Energizing Elixir': 'inv_alchemy_elixir_02', // Fallback
  'Fist of the White Tiger': 'inv_fistofthewhitetiger', // Verified
  'Serenity': 'ability_monk_serenity', // Guessing
  'Strike of the Windlord': 'inv_sword_1h_artifactskywall_d_05', // Skywall artifact
  'Disable': 'ability_rogue_trip',
  'Touch of Karma': 'ability_monk_touchofkarma',
  'Storm, Earth, Fire': 'spell_shaman_stormearthfire', // Verified
  'Invoke Xuen': 'monk_stance_whitetiger',

  // Paladin Fixes
  'Judgment': 'spell_holy_righteousfury', // Unique icon
  'Hammer of Wrath': 'spell_paladin_hammerofwrath', // Unique icon
  'Shield of Righteousness': 'spell_holy_sealofrighteousness', // Verified existing icon
  'Templar\'s Verdict': 'spell_paladin_templarsverdict',
  'Divine Storm': 'spell_holy_divinestorm',
  'Wake of Ashes': 'inv_sword_2h_artifactashbringer_d_01', // Ashbringer icon for Wake of Ashes
  'Hand of Hindrance': 'spell_holy_sealofwisdom', // Fallback if missing
  'Blade of Justice': 'ability_paladin_bladeofjustice',

  // Death Knight
  'Marrowrend': 'ability_deathknight_marrowrend',
  'Death Strike': 'spell_deathknight_deathstrike',
  'Blood Boil': 'spell_deathknight_bloodboil',
  'Death and Decay': 'spell_shadow_deathanddecay',
  'Vampiric Blood': 'spell_shadow_lifedrain', // Fixed typo
  'Dancing Rune Weapon': 'inv_sword_1h_artifactskywall_d_02', // Fallback
  'Remorseless Winter': 'ability_deathknight_remorselesswinters',
  'Pillar of Frost': 'ability_deathknight_pillaroffrost',
  'Breath of Sindragosa': 'spell_deathknight_breathofsindragosa',
  'Scourge Strike': 'spell_deathknight_scourgestrike',
  'Death Coil': 'spell_shadow_deathcoil',
  'Apocalypse': 'inv_ability_rideroftheapocalypsedeathknight_apocalypsenow',
  'Anti-Magic Shell': 'spell_shadow_antimagicshell',
  'Icebound Fortitude': 'spell_deathknight_iceboundfortitude',
  'Death Grip': 'ability_deathknight_aoedeathgrip',
  'Chains of Ice': 'spell_frost_chainsofice',
  'Raise Dead': 'spell_shadow_raisedead',
  'Mind Freeze': 'spell_deathknight_mindfreeze',

  // Verified / Substituted
  'Festering Strike': 'spell_deathknight_festering_strike',
  'Outbreak': 'spell_shadow_plaguecloud',
  'Frost Strike': 'spell_frost_frost', // Fallback
  'Obliterate': 'ability_warrior_sunder', // Fallback (Sunder matches the brutality)
  'Heart Strike': 'inv_sword_1h_artifactfelomelorn_d_03dual', // Fallback
  'Epidemic': 'spell_shadow_devouringplague',
  'Dark Transformation': 'spell_shadow_unholyfrenzy', // Fixed collision with Pet Atk
  'Lichborne': 'inv_misc_herb_lichbloom_stalk', // Funny but distinct, better than empty
  'Empower Rune Weapon': 'inv_sword_1h_artifactskywall_d_02', // Same as Dancing Rune Weapon
  'Death\'s Caress': 'ability_deathknight_deathscaress',
  'Soul Reaper': 'ability_deathknight_soulreaper',
  'Defile': 'spell_deathknight_defile',
  'Abomination Limb': 'spell_shadow_abominationexplosion',
  'Gorefiend\'s Grasp': 'ability_deathwing_grasping_tendrils',
  'Tombstone': '70_inscription_vantus_rune_tomb',
  'Bonestorm': 'ability_whirlwind', // Fallback
  'Dark Command': 'spell_nature_reincarnation', // Fallback (Taunt-like?)
  'Howling Blast': 'ability_warlock_howlofterror', // Fallback
  'Frostwyrm\'s Fury': 'inv_pet_frostwyrm',
  'Horn of Winter': 'inv_misc_trinket6oih_horn1',
  'Glacial Advance': 'ability_mage_glacialspike',
  'Army of the Dead': 'inv_pet_ghoul',
  'Unholy Assault': 'ability_warrior_unrelentingassault',
  'Consumption': 'spell_shadow_lifedrain02', // Variant icon to avoid collision with Vampiric Blood
  'Blinding Sleet': 'spell_frost_arcticwinds', // Fallback
  'Summon Gargoyle': 'ability_deathknight_summongargoyle',
  'Asphyxiate': 'spell_deathknight_strangulate',

  'Will of the Forsaken': 'spell_shadow_possession', // Distinct from Raise Dead

  // Demon Hunter
  'Blur': 'ability_demonhunter_blur',
  'Netherwalk': 'ability_demonhunter_netherbond', // Fallback
  'Darkness': 'ability_demonhunter_darkness',
  'Metamorphosis': 'ability_demonhunter_metamorphasisdps', // Using DPS version
  'Chaos Nova': 'ability_demonhunter_chaosnova',
  'Disrupt': 'warrior_disruptingshout', // Fallback interrupt
  'Demon\'s Bite': 'ability_demonhunter_hatefulstrike', // Fallback (Bite-like)
  'Chaos Strike': 'ability_demonhunter_chaosstrike',
  'Blade Dance': 'ability_demonhunter_bladedance',
  'Eye Beam': 'ability_demonhunter_eyebeam',
  'Immolation Aura': 'ability_demonhunter_immolation',
  'Fel Rush': 'ability_demonhunter_felrush',
  'Vengeful Retreat': 'ability_demonhunter_vengefulretreat',
  'Throw Glaive': 'ability_demonhunter_throwglaive',
  'The Hunt': 'ability_demonhunter_brandofthehunt',
  'Elysian Decree': 'inv_ability_demonhunter_elysiandecree',
  'Sigil of Flame': 'ability_demonhunter_sigilofinquisition',
  'Sigil of Misery': 'ability_demonhunter_sigilofmisery',
  'Spectral Sight': 'ability_demonhunter_spectralsight',
  'Consume Magic': 'ability_demonhunter_consumemagic',
  'Demon Spikes': 'ability_demonhunter_demonspikes',
  'Fiery Brand': 'ability_demonhunter_fierybrand',
  'Soul Cleave': 'ability_demonhunter_soulcleave',
  'Fel Devastation': 'ability_demonhunter_feldevastation',
  'Shear': 'ability_rogue_shurikenstorm', // Fallback
  'Fracture': 'ability_creature_cursed_02', // Fallback
  'Spirit Bomb': 'spell_shadow_mindbomb', // Fallback
  'Infernal Strike': 'ability_demonhunter_infernalstrike1',
  'Sigil of Silence': 'ability_demonhunter_sigilofsilence',
  'Sigil of Chains': 'ability_demonhunter_sigilofchains',
  'Sinful Brand': 'ability_demonhunter_brandofthehunt', // Reusing Hunt brand

  // Evoker
  'Living Flame': 'ability_evoker_livingflame',
  'Disintegrate': 'ability_evoker_disintegrate',
  'Pyre': 'ability_evoker_pyre',
  'Fire Breath': 'ability_evoker_firebreath',
  'Eternity Surge': 'spell_arcane_arcane04', // Fallback (Arcane look)
  'Shattering Star': 'spell_fire_bluefireball', // Fallback
  'Deep Breath': 'ability_evoker_deepbreath', // Fallback or verify
  'Dragonrage': 'ability_evoker_dragonrage', // Fallback
  'Tip the Scales': 'ability_evoker_tipthescales',
  'Azure Strike': 'ability_evoker_azurestrike',
  'Obsidian Scales': 'inv_misc_scales_dragongreen02', // Fallback
  'Renewing Blaze': 'ability_monk_renewingmists', // Fallback
  'Hover': 'ability_evoker_hover',
  'Verdant Embrace': 'ability_evoker_emeraldblossom', // Reusing blossom if specific missing
  'Landslide': 'spell_nature_earthshock', // Fallback
  'Sleep Walk': 'spell_shadow_mindsteal', // Fallback
  'Unravel': 'spell_shadow_mindflay', // Fallback
  'Echo': 'spell_arcane_arcane03', // Fallback
  'Spiritbloom': 'ability_evoker_spiritbloom',
  'Dream Breath': 'ability_evoker_dreambreath',
  'Emerald Blossom': 'ability_evoker_emeraldblossom',
  'Reversion': 'ability_evoker_reversion',
  'Temporal Anomaly': 'spell_arcane_arcane01', // Fallback
  'Rewind': 'ability_evoker_rewind',
  'Time Dilation': 'ability_evoker_timedilation',
  'Emerald Communion': 'ability_evoker_dreamflight', // Fallback to dreamflight if specific missing, or reuse blossom
  'Dream Flight': 'ability_evoker_dreamflight',
  'Stasis': 'ability_evoker_stasis',
  'Cauterizing Flame': 'spell_fire_flamebolt', // Fallback
  'Quell': 'ability_evoker_quell',
  'Zephyr': 'spell_nature_windfury', // Fallback
  'Eruption': 'spell_fire_fireball02', // Fallback
  'Prescience': 'ability_evoker_prescience',
  'Ebon Might': 'ability_evoker_ebonmight',
  'Breath of Eons': 'ability_evoker_dreambreath', // Using Dream Breath as base
  'Blistering Scales': 'inv_misc_scales_dragongreen01', // Fallback
  'Upheaval': 'spell_nature_earthquake', // Fallback 
  'Time Skip': 'ability_evoker_timeskip',
  'Spatial Paradox': 'spell_arcane_blink', // Fallback
  'Time Spiral': 'ability_evoker_timespiral',
  'Rescue': 'ability_monk_roll' // Fallback
};
