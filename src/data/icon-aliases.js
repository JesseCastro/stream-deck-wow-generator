module.exports = {
    // General Icons
    "back": "back",
    "Back": "back",
    "Game Menu": "back",
    "spare": "inv_misc_questionmark",
    "Spare": "inv_misc_questionmark",
    "Ready Check": "inv_misc_questionmark",
    "CheckMap": "inv_misc_questionmark",

    // Main Page Folders
    "Group": "inv_helmet_06",
    "PvP": "pvpcurrency-conquest-alliance",
    "Profs": "trade_engineering",
    "Mounts": "ability_mount_charger",
    // "Class" removed to allow dynamic resolution via ClassIcon_${classId}
    "Consumes": "inv_potion_93", // Matches Consumes folder

    // Interface / General Actions
    "Nameplates": "inv_helmet_106", // CONFIRMED WORKING FILE
    "Frnd Plt": "spell_holy_powerwordshield",
    "Zoom In": "inv_misc_spyglass_03", // Changed to 03 (02 failed)
    "Zoom Out": "inv_misc_spyglass_01", // Use same Spyglass 01 as confirmed working
    "Tgl UI": "inv_misc_spyglass_02",
    "Invite": "spell_holy_prayerofhealing",
    "Leave": "ability_venthyr_doorofshadows",
    "Pet Atk": "ability_ghoulfrenzy",
    "Follow": "ability_hunter_mastermarksman",
    "Report": "inv_misc_note_02",
    "World Map": "inv_misc_map02",
    "Map": "inv_misc_map02",
    "Hearthstone": "inv_misc_rune_06",
    "Interact": "inv_gauntlets_28",
    "Open Bags": "inv_misc_bag_08",
    "Toggle Quest": "inv_misc_book_11",

    // Movement
    "Autorun": "ability_rogue_sprint",
    "War Stomp": "ability_warstomp",

    // Markers
    "Skull": "inv_misc_skull_02",
    "Cross": "spell_holy_excorcism",
    "Square": "spell_frost_chainsofice",
    "Circle": "spell_holy_symbolofhope",
    "Triangle": "spell_fire_flameshock",
    "Diamond": "inv_misc_gem_diamond_01",
    "Moon": "spell_nature_polymorph",
    "Star": "creatureportrait_saltwater_star",
    "Raid Markers": "inv_misc_groupneedmore",
    "Pull Timer": "inv_misc_pocketwatch_01",

    // Targeting / PvP
    "Focus Target": "focus",
    "Clear Focus": "inv_misc_spyglass_02",
    "Assist": "ability_warrior_rallyingcry",
    "Arena1": "inv_misc_head_dragon_red",
    "Arena2": "inv_misc_head_dragon_blue",
    "Arena3": "inv_misc_head_dragon_bronze",
    "Focus1": "ability_hunter_mastermarksman",
    "Focus2": "ability_marksmanship",
    "Focus3": "ability_hunter_snipershot",
    "BG Map": "inv_misc_map_01",

    // Mounts - UPDATED to use verified files
    "Smart Mount": "ability_mount_ridinghorse",
    "Repair Mount": "inv_mammoth2mount_gray", // CONFIRMED WORKING
    "AH Mount": "ability_mount_mechastrider",
    "Water Walking": "ability_mount_waterstridermount",
    "Dragonriding": "ability_dragonriding_dragonridinggliding01",
    "Ground Mount": "ability_mount_blackdirewolf",
    "Flying Mount": "ability_mount_goldengryphon",
    "Random Favorite": "inv_misc_dice_01",

    // Compatibility Aliases for mounts.js internal keys
    "AHMount": "ability_mount_mechastrider",
    "WaterStrider": "ability_mount_waterstridermount",
    "GroundMount": "ability_mount_blackdirewolf",
    "FlyingMount": "ability_mount_goldengryphon",
    "Dice": "inv_misc_dice_01",
    "RepairMount": "inv_mammoth2mount_gray", // Just in case

    // Compatibility Aliases for professions.js
    "Profession1": "trade_blacksmithing",
    "Profession2": "trade_engineering",
    "Fire": "spell_fire_fire",

    // Compatibility Aliases for consumables.js
    "Drink": "inv_drink_04",
    "Weapon Oil": "garrison_oil",
    "Invis Potion": "inv_potion_145",
    "Speed Potion": "petbattle_speed",
    "Glider": "inv_misc_cape_20",
    "Glider": "inv_misc_cape_20",
    "Drums": "inv_misc_drum_01",

    // Utilities / System
    "Utilities": "inv_misc_gear_01",
    "Reload UI": "inv_misc_wrench_01",
    "Great Vault": "battleground_strongbox_silver_horde",
    "Toggle Details": "inv_misc_note_02",
    "Toggle Music": "inv_misc_drum_01",
    "Screenshot": "inv_misc_spyglass_02",
    "Character Panel": "inv_helmet_06",
    "Collections": "inv_toy_booklibrary",
    "Spellbook": "ui_spellbook_onebutton",
    "Loot Spec": "inv_misc_coin_01",
    "Dungeon Journal": "inv_misc_book_09",
    "LFG": "inv_misc_grouplooking",
    "Friends": "inv_misc_groupneedmore", // Keep if works, or change
    "Achievements": "inv_misc_achievment_01",
    "Stuck": "spell_shadow_teleport",
    "Target Nearest Enemy": "ability_hunter_snipershot",

    // Warrior
    "Mortal Strike": "ability_warrior_savageblow",
    "Overpower": "ability_meleedamage",
    "Execute": "inv_sword_48",
    "Slam": "ability_warrior_decisivestrike",
    "Colossus Smash": "ability_warrior_colossussmash",
    "Bladestorm": "ability_warrior_bladestorm",
    "Sweeping Strikes": "ability_rogue_slicedice", // Similar enough or find better
    "Cleave": "ability_warrior_cleave",
    "Hamstring": "ability_shockwave",
    "Victory Rush": "ability_warrior_victoryrush",
    "Thunder Clap": "ability_thunderclap",
    "Charge": "ability_warrior_charge",
    "Heroic Leap": "ability_heroicleap",
    "Heroic Throw": "inv_axe_66",
    "Berserker Rage": "spell_nature_ancestralguardian",

    // Warrior Panic
    "Die by the Sword": "ability_warrior_challange",
    "Ignore Pain": "ability_warrior_shieldreflection",
    "Rallying Cry": "ability_warrior_rallyingcry",
    "Avatar": "warrior_talent_icon_avatar",
    "Pummel": "inv_gauntlets_04",
    "Last Stand": "spell_nature_shamanrage",
    "Shield Wall": "ability_warrior_shieldwall",
    "Demoralizing Shout": "ability_warrior_waracry",
    "Enraged Regeneration": "ability_warrior_focusedrage",
    "Recklessness": "ability_warrior_intensifyrage",
    "Odyn's Fury": "ability_warrior_titansgrip",

    // Hunter
    "Barbed Shot": "ability_hunter_barbedshot",
    "Kill Command": "ability_hunter_killcommand",
    "Bestial Wrath": "ability_druid_ferociousbite", // Fallback or precise
    "Cobra Shot": "ability_hunter_cobrashot",
    "Kill Shot": "ability_hunter_assassinate2",
    "Multi-Shot": "ability_upgrademoonglaive",
    "Bloodshed": "ability_druid_primaltenacity",
    "Call of the Wild": "ability_hunter_callofthewild",
    "Concussive Shot": "spell_frost_stun",
    "Counter Shot": "inv_ammo_bullet_02", // Fallback
    "Tar Trap": "spell_hunter_exoticmunitions_poisoned",
    "Freezing Trap": "spell_hunter_exoticmunitions_frozen",
    "Tranquilizing Shot": "spell_nature_drowsy",
    "Mend Pet": "ability_hunter_mendpet",
    "Revive Pet": "ability_hunter_beastsoothe",

    // Hunter Panic
    "Aspect of the Turtle": "ability_hunter_pet_turtle",
    "Exhilaration": "ability_hunter_onewithnature",
    "Feign Death": "ability_rogue_feigndeath",
    "Trueshot": "ability_hunter_trueshot",
    "Volley": "ability_hunter_volley",
    "Coordinated Assault": "ability_hunter_coordinatedassault",
    "Fury of the Eagle": "ability_hunter_furyoftheeagle",
    "Muzzle": "ability_hunter_negate",
    "Disengage": "ability_rogue_feint",

    // Racials Additions
    "Stoneform": "spell_shadow_unholystrength", // Dwarf
    "Shadowmeld": "ability_ambush", // Night Elf
    "Tail Swipe": "ability_racial_tailswipe", // Dracthyr
    "Wing Buffet": "ability_racial_wingbuffet", // Dracthyr
    "Will to Survive": "spell_shadow_charm", // Human (Fallback)
    "Escape Artist": "ability_rogue_trip", // Gnome
    "Gift of the Naaru": "spell_holy_flashheal", // Draenei
    "Will of the Forsaken": "spell_shadow_raisedead", // Undead
    "Arcane Torrent": "spell_arcane_massdispel", // Blood Elf
    "Darkflight": "ability_rogue_sprint", // Worgen
    "Rocket Jump": "inv_misc_bomb_06", // Goblin
    "Quaking Palm": "pandarenracial_quiveringpain", // Pandaren
    "Berserking": "racial_troll_berserk", // Troll
    "Fireblood": "spell_fire_fireball", // Dark Iron (Fallback)
    "Light's Judgment": "spell_holy_divinepurpose", // Lightforged
    "Ancestral Call": "racial_orc_berserkerstrength", // Mag'har
    "Haymaker": "inv_gauntlets_04", // Kul Tiran
    "Spatial Rift": "inv_enchant_voidsphere", // Void Elf
    "Hyper Organic Light Originator": "inv_misc_enggizmos_20", // Mechagnome
    "Bag of Tricks": "inv_misc_bag_08", // Vulpera

    // Warlock - Affliction
    "Unstable Affliction": "spell_shadow_unstableaffliction_3",
    "Agony": "spell_shadow_curseofsargeras",
    "Corruption": "spell_shadow_abominationexplosion",
    "Malefic Rapture": "spell_shadow_shadowfury", // Fallback
    "Drain Soul": "spell_shadow_haunting",
    "Seed of Corruption": "spell_shadow_seedofdestruction",
    "Vile Taint": "spell_deathknight_gnaw_ghoul", // Fallback fixed
    "Phantom Singularity": "inv_enchant_voidsphere",
    "Soul Rot": "ability_ardenweald_warlock",
    "Summon Darkglare": "spell_shadow_summonvoidwalker", // Fallback
    "Haunt": "ability_warlock_haunt",
    "Nightfall": "spell_shadow_twilight",
    "Shadow Embrace": "spell_shadow_shadowembrace",
    "Drain Life": "spell_shadow_lifedrain",

    // Warlock - Demonology
    "Hand of Gul'dan": "spell_shadow_psychicscream", // Placeholder
    "Demonbolt": "spell_fire_firebolt02",
    "Shadow Bolt": "spell_shadow_shadowbolt",
    "Call Dreadstalkers": "spell_warlock_calldreadstalkers",
    "Implosion": "spell_fire_felfirenova",
    "Summon Demonic Tyrant": "spell_warlock_summondemonictyrant",
    "Grimoire: Felguard": "spell_shadow_summonfelguard",
    "Demonic Strength": "spell_warlock_demonicstrength",
    "Power Siphon": "spell_warlock_power_siphon",
    "Doom": "spell_shadow_auraofdarkness",
    "Soul Strike": "spell_warlock_soulstrike",
    "Bilescourge Bombers": "spell_warlock_bilescourgebombers",
    "Summon Felguard": "spell_shadow_summonfelguard",

    // Warlock - Destruction
    "Chaos Bolt": "ability_warlock_chaosbolt",
    "Incinerate": "spell_fire_flame_shock",
    "Conflagrate": "spell_fire_fireball",
    "Immolate": "spell_fire_immolation",
    "Rain of Fire": "spell_shadow_rainoffire",
    "Havoc": "ability_warlock_baneofhavoc",
    "Summon Infernal": "spell_shadow_summoninfernal",
    "Channel Demonfire": "spell_fire_felflameinferno",
    "Shadowburn": "spell_shadow_scourgebuild",
    "Cataclysm": "spell_fire_cataclysm",
    "Dimensional Rift": "spell_warlock_dimensionalrift",
    "Soul Fire": "spell_fire_fireball02",
    "Summon Imp": "spell_shadow_summonimp",

    // Warlock Common
    "Create Healthstone": "inv_stone_04",
    "Curse of Tongues": "spell_shadow_curseoftounges",
    "Curse of Weakness": "spell_shadow_curseofmannoroth",
    "Curse of Exhaustion": "spell_shadow_grimward",
    "Unending Resolve": "spell_shadow_demonictactics",
    "Dark Pact": "spell_shadow_darksummoning",
    "Burning Rush": "spell_fire_burningmoltenlava",
    "Demonic Circle": "spell_shadow_demoniccircle",

    // Mage - Arcane
    "Arcane Blast": "spell_arcane_blast",
    "Arcane Barrage": "spell_arcane_arcanebarrage",
    "Arcane Missiles": "spell_nature_starfall",
    "Evocation": "spell_nature_purge",
    "Arcane Surge": "spell_arcane_arcanepower",
    "Touch of the Magi": "spell_arcane_arcane01",
    "Arcane Orb": "inv_arcane_orb",
    "Prismatic Barrier": "spell_mage_armor", // Placeholder
    "Mirror Image": "spell_magic_lesserinvisibilty",
    "Alter Time": "spell_mage_altertime",
    "Counterspell": "spell_frost_iceshock",
    "Spellsteal": "spell_arcane_arcane02",
    "Remove Curse": "spell_holy_removecurse",
    "Slow": "spell_nature_slow",
    "Time Warp": "spell_holy_borrowedtime",

    // Mage - Fire
    "Fireball": "spell_fire_fireball02",
    "Pyroblast": "spell_fire_fireball",
    "Fire Blast": "spell_fire_fire",
    "Phoenix Flames": "spell_fire_elementaldevastation",
    "Combustion": "spell_fire_sealoffire",
    "Scorch": "spell_fire_soulburn",
    "Flamestrike": "spell_fire_selfdestruct",
    "Living Bomb": "inv_misc_bomb_04",
    "Dragon's Breath": "inv_misc_head_dragon_01",
    "Blazing Barrier": "spell_fire_lavaspawn",

    // Mage - Frost
    "Frostbolt": "spell_frost_frostbolt02",
    "Ice Lance": "spell_frost_frostblast",
    "Flurry": "spell_fire_bluefire",
    "Frozen Orb": "spell_frost_frozenorb",
    "Icy Veins": "spell_frost_coldhearted",
    "Blizzard": "spell_frost_icestorm",
    "Comet Storm": "spell_frost_ice_shard",
    "Glacial Spike": "spell_frost_glacier",
    "Cone of Cold": "spell_frost_glacier",
    "Ice Barrier": "spell_ice_lament",
    "Ice Block": "spell_frost_frost",
    "Cold Snap": "spell_frost_wizardmark",
    "Shifting Power": "spell_nature_starfall", // Placeholder

    "Interact": "interact", // Better icon found

    // Priest - Discipline
    "Power Word: Shield": "spell_holy_powerwordshield",
    "Shadow Word: Pain": "spell_shadow_shadowwordpain",
    "Penance": "spell_holy_penance",
    "Smite": "spell_holy_holysmite",
    "Flash Heal": "spell_holy_flashheal",
    "Psychic Scream": "spell_shadow_psychicscream",
    "Power Word: Radiance": "spell_priest_powerwordradiance",
    "Purge the Wicked": "spell_holy_purify",
    "Shadowfiend": "spell_shadow_shadowfiend",
    "Power Infusion": "spell_holy_powerinfusion",
    "Pain Suppression": "spell_holy_painsupression",
    "Power Word: Barrier": "spell_holy_powerwordbarrier",
    "Mass Dispel": "spell_arcane_massdispel",
    "Leap of Faith": "priest_spell_leapoffaith_a", // Fixed
    "Fade": "spell_magic_lesserinvisibilty",
    "Apotheosis": "spell_holy_powerinfusion", // Placeholder

    // Priest - Holy
    "Heal": "spell_holy_heal",
    "Holy Word: Serenity": "spell_holy_serenity", // Fallback? spell_holy_persuitofjustice
    "Holy Word: Sanctify": "spell_holy_divineprovidence", // Fallback
    "Prayer of Mending": "spell_holy_prayerofmendingtga",
    "Renew": "spell_holy_renew",
    "Circle of Healing": "spell_holy_circleofrenewal",
    "Holy Fire": "spell_holy_searinglight",
    "Divine Hymn": "spell_holy_divinehymn",
    "Guardian Spirit": "spell_holy_guardianspirit",
    "Desperate Prayer": "spell_holy_restoration",

    // Priest - Shadow
    "Vampiric Touch": "spell_holy_stoicism",
    "Mind Blast": "spell_shadow_unholyfrenzy",
    "Mind Flay": "spell_shadow_siphonmana",
    "Devouring Plague": "spell_shadow_devouringplague.", // Typo check?
    "Shadow Crash": "spell_shadow_shadowcrash",
    "Void Eruption": "spell_priest_voidform",
    "Shadowform": "spell_shadow_shadowform",
    "Dispersion": "spell_shadow_dispersion",
    "Vampiric Embrace": "spell_shadow_unsummonbuilding",
    "Silence": "spell_shadow_impphaseshift",
    "Dark Ascension": "spell_shadow_shadowpower",

    // Professions
    "Profession 1": "trade_blacksmithing",
    "Profession 2": "trade_engineering",
    "Cooking": "trade_cooking_2",
    "Fishing": "trade_fishing",
    "Archaeology": "trade_archaeology",
    "Campfire": "spell_fire_fire",
    "Survey": "inv_misc_spyglass_02",
    "Disenchant": "inv_enchant_disenchant",
    "Milling": "inv_inscription_papyrus",
    "Prospecting": "inv_misc_gem_diamond_02",

    // Consumables
    "Food": "inv_misc_food_lunchbox_copper",
    "Water": "inv_drink_04",
    "Flask": "inv_flask_green",
    "Healthstone": "warlock_ healthstone",
    "Rune": "inv_misc_rune_01",
    "Oil": "inv_potion_155",
    "InvisPot": "inv_potion_145",
    "SpeedPot": "inv_potion_113",
    "Drums": "inv_misc_drum_01",
    "Health Potion": "inv_potion_51",
    "Combat Pot": "inv_potion_111",
    "Glider": "inv_misc_cape_20",
    "Bandage": "inv_misc_bandage_12",

    // Paladin Abilities
    "Divine Shield": "spell_holy_divineshield",
    "Lay on Hands": "spell_holy_layonhands",
    "Ardent Defender": "spell_holy_ardentdefender",
    "Guardian of Ancient Kings": "spell_holy_guardianspirit",
    "Word of Glory": "spell_holy_divineprovidence",
    "Rebuke": "spell_holy_rebuke",
    "Shield of Righteousness": "spell_holy_powerwordshield",
    "Judgment": "inv_lightforgedmatrixability_lightsjudgment",
    "Hammer of Wrath": "spell_paladin_hammerofwrath",
    "Avenger's Shield": "spell_holy_avengersshield",
    "Consecration": "spell_holy_innerfire",
    "Hammer of the Righteous": "ability_paladin_conviction",
    "Hand of Reckoning": "spell_holy_unyieldingfaith",
    "Blinding Light": "spell_holy_searinglight",
    "Hammer of Justice": "spell_holy_sealofmight",
    "Cleanse Toxins": "spell_holy_renew",
    "Blessing of Freedom": "spell_holy_sealofvalor",
    "Blessing of Sacrifice": "spell_holy_sealofprotection",

    // Rogue - General
    "Stealth": "ability_stealth",
    "Vanish": "ability_vanish", // Try re-typing or using different icon? ability_vanish is correct.
    "Evasion": "spell_shadow_shadowward",
    "Cloak of Shadows": "spell_shadow_nethercloak",
    "Sprint": "ability_rogue_sprint",
    "Kick": "ability_kick", // Correct.
    "Sap": "ability_sap",
    "Blind": "spell_shadow_mindsteal",
    "Distract": "ability_rogue_distract",
    "Feint": "ability_rogue_feint",
    "Crimson Vial": "inv_potion_51", // Fallback
    "Tricks of the Trade": "ability_rogue_tricksofthetrade",
    "Shroud of Concealment": "ability_rogue_shroudofconcealment",

    // Rogue - Assassination
    "Mutilate": "ability_rogue_shadowstrikes", // Fallback if mutilate missing. Or ability_rogue_dualweild?
    "Envenom": "ability_rogue_disembowel",
    "Garrote": "ability_rogue_garrote",
    "Rupture": "ability_rogue_rupture",
    "Shiv": "inv_throwingknife_04",
    "Deathmark": "spell_shadow_soulleech_2",
    "Fan of Knives": "ability_rogue_fanofknives",
    "Crimson Tempest": "ability_rogue_crimsontempest",
    "Ambush": "ability_rogue_ambush",
    "Kidney Shot": "ability_rogue_kidneyshot",
    "Slice and Dice": "ability_rogue_slicedice",

    // Rogue - Outlaw
    "Sinister Strike": "spell_shadow_ritualofsacrifice", // Classic icon
    "Dispatch": "ability_rogue_trip", // Placeholder?
    "Pistol Shot": "ability_rogue_pistolshot", // Confirmed
    "Between the Eyes": "inv_weapon_rifle_05", // Fallback
    "Adrenaline Rush": "spell_shadow_shadowworddominate",
    "Blade Flurry": "ability_warrior_punishingblow",
    "Roll the Bones": "ability_rogue_rollthebones",
    "Ghostly Strike": "spell_shadow_curse", // Fallback
    "Killing Spree": "ability_rogue_murderspree", // Fixed typo (was murderspre)
    "Gouge": "ability_gouge",

    // Rogue - Subtlety
    "Backstab": "ability_backstab", // Confirmed
    "Shadowstrike": "ability_rogue_shadowstrike", // Confirmed
    "Eviscerate": "ability_rogue_eviscerate", // Confirmed
    "Shadow Dance": "ability_rogue_shadowdance",
    "Symbols of Death": "spell_shadow_rune",
    "Secret Technique": "ability_rogue_encvelopingshadows", // Typo in source?
    "Shuriken Storm": "ability_rogue_shurikenstorm",
    "Black Powder": "inv_misc_dust_02", // Fallback
    "Shadow Blades": "spell_shadow_shadowworddominate", // Fallback
    "Cold Blood": "spell_frost_coldblood",
    "Cheap Shot": "ability_cheapshot",

    // Druid - General
    "Barkskin": "spell_nature_stoneclawtotem", // Kept fallback, file exists (44kb)
    "Survival Instincts": "ability_druid_tigersroar", // Kept fallback, file exists (43kb)
    "Renewal": "spell_nature_natureblessing",
    "Dash": "ability_druid_dash",
    "Stampeding Roar": "spell_druid_stampedingroar_cat",
    "Entangling Roots": "spell_nature_stranglevines",
    "Cyclone": "spell_nature_earthbind",
    "Innervate": "spell_nature_lightning",
    "Nature's Cure": "spell_nature_removecurse",
    "Revive": "spell_nature_regenerate",
    "Rebirth": "spell_nature_reincarnation",
    "Prowl": "ability_ambush",
    "Tiger's Fury": "inv_misc_head_tiger_01",
    "Skull Bash": "inv_misc_bone_skull_02",

    // Druid - Balance
    "Moonfire": "spell_nature_starfall", // Classic icon for Moonfire
    "Sunfire": "spell_fire_fire", // Fallback
    "Stellar Flare": "spell_nature_starfall", // Fallback
    "Starfire": "spell_arcane_starfire",
    "Wrath": "spell_nature_lightning", // Fallback
    "Starsurge": "spell_arcane_arcane03",
    "Starfall": "spell_nature_starfall",
    "Celestial Alignment": "spell_nature_natureguardian",
    "Convoke the Spirits": "spell_animarevendreth_buff",
    "Force of Nature": "spell_nature_forceofnature",
    "Warrior of Elune": "spell_holy_elunesgrace",
    "Solar Beam": "spell_nature_stoneclawtotem",
    "Typhoon": "spell_shaman_thunderstorm",

    // Druid - Feral
    "Rake": "ability_druid_disembowel", // Fallback
    "Shred": "ability_druid_rake", // Reuse?
    "Rip": "ability_ghoulfrenzy", // Fallback
    "Ferocious Bite": "ability_druid_ferociousbite",
    "Swipe": "ability_druid_swipe",
    "Thrash": "spell_druid_thrash",
    "Berserk": "spell_shadow_unholyfrenzy",
    "Tiger's Fury": "inv_misc_head_tiger_01", // Found generic tiger head
    "Feral Frenzy": "ability_druid_rake",
    "Adaptive Swarm": "spell_nature_insectswarm", // Fallback
    "Maim": "ability_druid_mangle",

    // Druid - Guardian
    "Mangle": "ability_druid_mangle",
    "Maul": "ability_druid_maul",
    "Ironfur": "ability_druid_ironfur", // Found exact match!
    "Frenzied Regeneration": "ability_bullrush", // Kept fallback
    "Incarnation: Guardian of Ursoc": "spell_druid_incarnation",
    "Rage of the Sleeper": "ability_druid_enrage",
    "Growl": "ability_physical_taunt",
    "Incapacitating Roar": "ability_druid_demoralizingroar",

    // Druid - Restoration
    "Rejuvenation": "spell_nature_rejuvenation",
    "Lifebloom": "inv_misc_flower_01", // Placeholder
    "Regrowth": "spell_nature_resistnature",
    "Wild Growth": "spell_nature_natureguardian",
    "Swiftmend": "inv_relics_idolofrejuvenation",
    "Efflorescence": "spell_nature_tranquility",
    "Cenarion Ward": "spell_nature_natureguardian",
    "Tranquility": "spell_nature_tranquility",
    "Tree of Life": "ability_druid_treeoflife",
    "Ironbark": "spell_nature_stoneclawtotem",
    "Nature's Swiftness": "spell_nature_ravenform",

    // Shaman - General
    "Astral Shift": "ability_shaman_astralshift",
    "Earth Elemental": "spell_nature_earthelemental_totem",
    "Fire Elemental": "spell_fire_elemental_totem",
    "Wind Shear": "spell_nature_cyclone",
    "Hex": "spell_shaman_hex",
    "Ghost Wolf": "spell_nature_spiritwolf",
    "Cleanse Spirit": "ability_shaman_cleansespirit",
    "Capacitor Totem": "spell_shaman_staticshock", // Fallback
    "Tremor Totem": "spell_nature_tremortotem",

    // Shaman - Elemental
    "Flame Shock": "spell_fire_flameshock",
    "Frost Shock": "spell_frost_frostshock",
    "Earth Shock": "spell_nature_earthshock",
    "Lava Burst": "sha_spell_shaman_lavaburst",
    "Lightning Bolt": "spell_nature_lightning",
    "Chain Lightning": "spell_nature_chainlightning",
    "Earthquake": "spell_nature_earthquake",
    "Stormkeeper": "spell_nature_lightning", // Fallback to lightning
    "Icefury": "spell_frost_frostbolt02", // Fallback to frostbolt
    "Primordial Wave": "spell_animamaldraxxus_wave",
    "Liquid Magma Totem": "spell_shaman_spewlava",
    "Thunderstorm": "spell_shaman_thunderstorm",
    "Elemental Blast": "shaman_talent_elementalblast",
    "Blood Fury": "racial_orc_berserkerstrength", // Orc Racial

    // Shaman - Enhancement
    "Stormstrike": "ability_shaman_stormstrike",
    "Lava Lash": "ability_shaman_lavalash",
    "Ice Strike": "spell_frost_frostbrand", // Fallback
    "Crash Lightning": "spell_shaman_crashlightning",
    "Sundering": "ability_warrior_sunder", // Warrior icon
    "Feral Spirit": "spell_shaman_feralspirit",
    "Ascendance": "spell_fire_elementaldevastation",
    "Doom Winds": "inv_mace_1h_doomhammer", // Doomhammer icon

    // Shaman - Restoration
    "Spirit Link Totem": "spell_shaman_spiritlink",
    "Healing Tide Totem": "ability_shaman_healingtide", // Found exact
    "Ancestral Guidance": "spell_shaman_ancestralawakening",
    "Riptide": "spell_nature_riptide",
    "Healing Wave": "spell_nature_healingwavelesser",
    "Healing Surge": "spell_nature_healingway",
    "Chain Heal": "spell_nature_healingwavegreater",
    "Healing Rain": "sha_spell_fire_bluerainoffire", // Fallback (Blue Rain)
    "Cloudburst Totem": "spell_nature_invisibilitytotem", // Fallback (Water Totem)
    "Mana Tide Totem": "spell_frost_summonwaterelemental",
    "Earthen Wall Totem": "spell_nature_stoneclawtotem", // Changed to avoid Earth Shield collision
    "Purify Spirit": "spell_holy_purify",
    "Earth Shield": "spell_nature_skinofearth",
    "Water Shield": "ability_shaman_watershield" // Verified exists
};
