const Classes = {
    DeathKnight: {
        name: 'Death Knight',
        color: '#C41F3B',
        specs: {
            Blood: {
                name: 'Blood',
                panicRow: {
                    1: 'Anti-Magic Shell',
                    2: 'Icebound Fortitude',
                    3: 'Vampiric Blood',
                    4: 'Dancing Rune Weapon',
                    5: 'Death Strike',
                    6: 'Mind Freeze',
                    7: '[Racial]',
                    8: 'Combat Pot'
                }
            },
            Frost: {
                name: 'Frost',
                panicRow: {
                    1: 'Anti-Magic Shell',
                    2: 'Icebound Fortitude',
                    3: 'Death Strike',
                    4: 'Pillar of Frost',
                    5: 'Empower Rune Weapon',
                    6: 'Mind Freeze',
                    7: '[Racial]',
                    8: 'Combat Pot'
                }
            },
            Unholy: {
                name: 'Unholy',
                panicRow: {
                    1: 'Anti-Magic Shell',
                    2: 'Icebound Fortitude',
                    3: 'Death Strike',
                    4: 'Dark Transformation',
                    5: 'Summon Gargoyle',
                    6: 'Mind Freeze',
                    7: '[Racial]',
                    8: 'Combat Pot'
                }
            }
        }
    },
    DemonHunter: {
        name: 'Demon Hunter',
        color: '#A330C9',
        specs: {
            Havoc: {
                name: 'Havoc',
                panicRow: {
                    1: 'Blur',
                    2: 'Netherwalk',
                    3: 'Darkness',
                    4: 'Metamorphosis',
                    5: 'Chaos Nova',
                    6: 'Disrupt',
                    7: '[Racial]',
                    8: 'Combat Pot'
                }
            },
            Vengeance: {
                name: 'Vengeance',
                panicRow: {
                    1: 'Demon Spikes',
                    2: 'Fiery Brand',
                    3: 'Metamorphosis',
                    4: 'Soul Cleave',
                    5: 'Fel Devastation',
                    6: 'Disrupt',
                    7: '[Racial]',
                    8: 'Combat Pot'
                }
            }
        }
    },
    Druid: {
        name: 'Druid',
        color: '#FF7D0A',
        specs: {
            Balance: {
                name: 'Balance',
                panicRow: {
                    1: 'Barkskin',
                    2: 'Survival Instincts',
                    3: 'Renewal',
                    4: 'Dash',
                    5: 'Stampeding Roar',
                    6: 'Solar Beam',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Moonfire',
                    2: 'Sunfire',
                    3: 'Stellar Flare',
                    4: 'Starfire',
                    5: 'Wrath',
                    6: 'Starsurge',
                    7: 'Starfall',
                    8: 'Celestial Alignment',
                    9: 'Convoke the Spirits',
                    10: 'Force of Nature',
                    11: 'Warrior of Elune',
                    12: 'Typhoon', // Removed Solar Beam
                    13: 'Cyclone',
                    14: 'Entangling Roots'
                }
            },
            Feral: {
                name: 'Feral',
                panicRow: {
                    1: 'Barkskin',
                    2: 'Survival Instincts',
                    3: 'Renewal',
                    4: 'Dash',
                    5: 'Stampeding Roar',
                    6: 'Skull Bash',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Rake',
                    2: 'Shred',
                    3: 'Rip',
                    4: 'Ferocious Bite',
                    5: 'Swipe',
                    6: 'Thrash',
                    7: 'Berserk',
                    8: 'Tiger\'s Fury',
                    9: 'Feral Frenzy',
                    10: 'Adaptive Swarm',
                    11: 'Convoke the Spirits',
                    12: 'Maim', // Removed Skull Bash
                    13: 'Prowl',
                    14: 'Regrowth'
                }
            },
            Guardian: {
                name: 'Guardian',
                panicRow: {
                    1: 'Barkskin',
                    2: 'Survival Instincts',
                    3: 'Frenzied Regeneration',
                    4: 'Ironfur',
                    5: 'Stampeding Roar',
                    6: 'Skull Bash',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Moonfire',
                    2: 'Thrash',
                    3: 'Mangle',
                    4: 'Swipe',
                    5: 'Maul',
                    6: 'Incarnation: Guardian of Ursoc', // Removed Ironfur/Frenzied Regen
                    7: 'Rage of the Sleeper',
                    8: 'Growl', // Removed Barkskin/Survival/Skull Bash
                    9: 'Incapacitating Roar',
                    10: 'Renewal'
                }
            },
            Restoration: {
                name: 'Restoration',
                panicRow: {
                    1: 'Barkskin',
                    2: 'Ironbark',
                    3: 'Tranquility',
                    4: 'Dash',
                    5: 'Stampeding Roar',
                    6: 'Nature\'s Cure',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Rejuvenation',
                    2: 'Lifebloom',
                    3: 'Regrowth',
                    4: 'Wild Growth',
                    5: 'Swiftmend',
                    6: 'Efflorescence',
                    7: 'Cenarion Ward',
                    8: 'Adaptive Swarm',
                    9: 'Convoke the Spirits',
                    10: 'Tree of Life', // Removed Tranquility
                    11: 'Innervate',
                    12: 'Nature\'s Swiftness', // Removed Ironbark
                    13: 'Cyclone'
                }
            }
        }
    },
    Evoker: {
        name: 'Evoker',
        color: '#33937F',
        specs: {
            Devastation: {
                name: 'Devastation',
                panicRow: {
                    1: 'Obsidian Scales',
                    2: 'Renewing Blaze',
                    3: 'Hover',
                    4: 'Dragonrage',
                    5: 'Deep Breath',
                    6: 'Quell',
                    7: '[Racial]',
                    8: 'Combat Pot'
                }
            },
            Preservation: {
                name: 'Preservation',
                panicRow: {
                    1: 'Obsidian Scales',
                    2: 'Renewing Blaze',
                    3: 'Zephyr',
                    4: 'Rewind',
                    5: 'Stasis',
                    6: 'Quell',
                    7: '[Racial]',
                    8: 'Combat Pot'
                }
            },
            Augmentation: {
                name: 'Augmentation',
                panicRow: {
                    1: 'Obsidian Scales',
                    2: 'Renewing Blaze',
                    3: 'Hover',
                    4: 'Ebon Might',
                    5: 'Breath of Eons',
                    6: 'Quell',
                    7: '[Racial]',
                    8: 'Combat Pot'
                }
            }
        }
    },
    Hunter: {
        name: 'Hunter',
        color: '#ABD473',
        specs: {
            BeastMastery: {
                name: 'Beast Mastery',
                panicRow: {
                    1: 'Aspect of the Turtle',
                    2: 'Exhilaration',
                    3: 'Feign Death',
                    4: 'Bestial Wrath',
                    5: 'Call of the Wild',
                    6: 'Counter Shot',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Barbed Shot',
                    2: 'Kill Command',
                    3: 'Bestial Wrath',
                    4: 'Cobra Shot',
                    5: 'Kill Shot',
                    6: 'Multi-Shot',
                    7: 'Bloodshed',
                    8: 'Call of the Wild',
                    9: 'Concussive Shot',
                    10: 'Counter Shot',
                    11: 'Tar Trap',
                    12: 'Freezing Trap',
                    13: 'Tranquilizing Shot',
                    14: 'Mend Pet',
                    15: 'Revive Pet'
                }
            },
            Marksmanship: {
                name: 'Marksmanship',
                panicRow: {
                    1: 'Aspect of the Turtle',
                    2: 'Exhilaration',
                    3: 'Feign Death',
                    4: 'Trueshot',
                    5: 'Volley',
                    6: 'Counter Shot',
                    7: '[Racial]',
                    8: 'Combat Pot'
                }
            },
            Survival: {
                name: 'Survival',
                panicRow: {
                    1: 'Aspect of the Turtle',
                    2: 'Exhilaration',
                    3: 'Feign Death',
                    4: 'Coordinated Assault',
                    5: 'Fury of the Eagle',
                    6: 'Muzzle',
                    7: '[Racial]',
                    8: 'Combat Pot'
                }
            }
        }
    },
    Mage: {
        name: 'Mage',
        color: '#69CCF0',
        specs: {
            Arcane: {
                name: 'Arcane',
                panicRow: {
                    1: 'Ice Block',
                    2: 'Mirror Image',
                    3: 'Alter Time',
                    4: 'Arcane Surge',
                    5: 'Evocation',
                    6: 'Counterspell',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Arcane Blast',
                    2: 'Arcane Barrage',
                    3: 'Arcane Missiles',
                    4: 'Evocation',
                    5: 'Arcane Surge',
                    6: 'Touch of the Magi',
                    7: 'Arcane Orb',
                    8: 'Prismatic Barrier',
                    9: 'Mirror Image',
                    10: 'Alter Time',
                    11: 'Counterspell',
                    12: 'Spellsteal',
                    13: 'Remove Curse',
                    14: 'Slow',
                    15: 'Time Warp'
                }
            },
            Fire: {
                name: 'Fire',
                panicRow: {
                    1: 'Ice Block',
                    2: 'Mirror Image',
                    3: 'Alter Time',
                    4: 'Combustion',
                    5: 'Shifting Power',
                    6: 'Counterspell',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Fireball',
                    2: 'Pyroblast',
                    3: 'Fire Blast',
                    4: 'Phoenix Flames',
                    5: 'Combustion',
                    6: 'Scorch',
                    7: 'Flamestrike',
                    8: 'Living Bomb',
                    9: 'Dragon\'s Breath',
                    10: 'Blazing Barrier',
                    11: 'Mirror Image',
                    12: 'Alter Time',
                    13: 'Counterspell',
                    14: 'Spellsteal',
                    15: 'Time Warp'
                }
            },
            Frost: {
                name: 'Frost',
                panicRow: {
                    1: 'Ice Block',
                    2: 'Mirror Image',
                    3: 'Alter Time',
                    4: 'Icy Veins',
                    5: 'Cold Snap',
                    6: 'Counterspell',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Frostbolt',
                    2: 'Ice Lance',
                    3: 'Flurry',
                    4: 'Frozen Orb',
                    5: 'Icy Veins',
                    6: 'Blizzard',
                    7: 'Comet Storm',
                    8: 'Glacial Spike',
                    9: 'Cone of Cold',
                    10: 'Ice Barrier',
                    11: 'Mirror Image',
                    12: 'Alter Time',
                    13: 'Counterspell',
                    14: 'Spellsteal',
                    15: 'Time Warp'
                }
            }
        }
    },
    Monk: {
        name: 'Monk',
        color: '#00FF96',
        specs: {
            Brewmaster: {
                name: 'Brewmaster',
                panicRow: {
                    1: 'Fortifying Brew',
                    2: 'Zen Meditation',
                    3: 'Celestial Brew',
                    4: 'Invoke Niuzao',
                    5: 'Purifying Brew',
                    6: 'Spear Hand Strike',
                    7: '[Racial]',
                    8: 'Combat Pot'
                }
            },
            Mistweaver: {
                name: 'Mistweaver',
                panicRow: {
                    1: 'Fortifying Brew',
                    2: 'Diffuse Magic',
                    3: 'Life Cocoon',
                    4: 'Revival',
                    5: 'Thunder Focus Tea',
                    6: 'Spear Hand Strike',
                    7: '[Racial]',
                    8: 'Combat Pot'
                }
            },
            Windwalker: {
                name: 'Windwalker',
                panicRow: {
                    1: 'Fortifying Brew',
                    2: 'Diffuse Magic',
                    3: 'Touch of Karma',
                    4: 'Storm, Earth, Fire',
                    5: 'Invoke Xuen',
                    6: 'Spear Hand Strike',
                    7: '[Racial]',
                    8: 'Combat Pot'
                }
            }
        }
    },
    Paladin: {
        name: 'Paladin',
        color: '#F58CBA',
        specs: {
            Holy: {
                name: 'Holy',
                panicRow: {
                    1: 'Divine Shield',
                    2: 'Lay on Hands',
                    3: 'Divine Protection',
                    4: 'Avenging Wrath',
                    5: 'Aura Mastery',
                    6: 'Rebuke',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Holy Shock',
                    2: 'Word of Glory',
                    3: 'Flash of Light',
                    4: 'Holy Light',
                    5: 'Light of Dawn',
                    6: 'Bestow Faith',
                    7: 'Beacon of Light',
                    8: 'Crusader Strike',
                    9: 'Judgment',
                    10: 'Holy Prism',
                    11: 'Cleanse',
                    12: 'Blessing of Freedom',
                    13: 'Blessing of Sacrifice',
                    14: 'Rule of Law',
                    15: '[Empty]'
                }
            },
            Protection: {
                name: 'Protection',
                panicRow: {
                    1: 'Divine Shield',
                    2: 'Lay on Hands',
                    3: 'Ardent Defender',
                    4: 'Guardian of Ancient Kings',
                    5: 'Word of Glory',
                    6: 'Rebuke',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Shield of Righteousness',
                    2: 'Judgment',
                    3: 'Hammer of Wrath',
                    4: "Avenger's Shield",
                    5: 'Consecration',
                    6: 'Hammer of the Righteous',
                    7: 'Hand of Reckoning',
                    8: 'Blinding Light',
                    9: 'Hammer of Justice',
                    10: 'Cleanse Toxins',
                    11: 'Blessing of Freedom',
                    12: 'Blessing of Sacrifice',
                    13: '[Empty]',
                    14: '[Empty]',
                    15: '[Empty]'
                }
            },
            Retribution: {
                name: 'Retribution',
                panicRow: {
                    1: 'Divine Shield',
                    2: 'Lay on Hands',
                    3: 'Shield of Vengeance',
                    4: 'Avenging Wrath',
                    5: 'Final Reckoning',
                    6: 'Rebuke',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: "Templar's Verdict",
                    2: 'Blade of Justice',
                    3: 'Judgment',
                    4: 'Hammer of Wrath',
                    5: 'Crusader Strike',
                    6: 'Divine Storm',
                    7: 'Wake of Ashes',
                    8: 'Hand of Hindrance',
                    9: 'Blinding Light',
                    10: 'Hammer of Justice',
                    11: 'Cleanse Toxins',
                    12: 'Blessing of Freedom',
                    13: 'Blessing of Sacrifice',
                    14: 'Shield of Righteousness',
                    15: '[Empty]'
                }
            }
        }
    },
    Priest: {
        name: 'Priest',
        color: '#FFFFFF',
        specs: {
            Discipline: {
                name: 'Discipline',
                panicRow: {
                    1: 'Desperate Prayer',
                    2: 'Fade',
                    3: 'Pain Suppression',
                    4: 'Power Word: Barrier',
                    5: 'Rapture',
                    6: '[No Interrupt]',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Power Word: Shield',
                    2: 'Shadow Word: Pain',
                    3: 'Penance',
                    4: 'Smite',
                    5: 'Flash Heal',
                    6: 'Psychic Scream',
                    7: 'Power Word: Radiance',
                    8: 'Purge the Wicked',
                    9: 'Shadowfiend',
                    10: 'Power Infusion',
                    11: 'Pain Suppression',
                    12: 'Power Word: Barrier',
                    13: 'Mass Dispel',
                    14: 'Leap of Faith',
                    15: 'Fade'
                }
            },
            Holy: {
                name: 'Holy',
                panicRow: {
                    1: 'Desperate Prayer',
                    2: 'Fade',
                    3: 'Guardian Spirit',
                    4: 'Divine Hymn',
                    5: 'Apotheosis',
                    6: '[No Interrupt]',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Heal',
                    2: 'Flash Heal',
                    3: 'Holy Word: Serenity',
                    4: 'Holy Word: Sanctify',
                    5: 'Prayer of Mending',
                    6: 'Renew',
                    7: 'Circle of Healing',
                    8: 'Holy Fire',
                    9: 'Smite',
                    10: 'Divine Hymn',
                    11: 'Guardian Spirit',
                    12: 'Mass Dispel',
                    13: 'Leap of Faith',
                    14: 'Fade',
                    15: 'Desperate Prayer'
                }
            },
            Shadow: {
                name: 'Shadow',
                panicRow: {
                    1: 'Desperate Prayer',
                    2: 'Fade',
                    3: 'Dispersion',
                    4: 'Void Eruption',
                    5: 'Dark Ascension',
                    6: 'Silence',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Shadow Word: Pain',
                    2: 'Vampiric Touch',
                    3: 'Mind Blast',
                    4: 'Mind Flay',
                    5: 'Devouring Plague',
                    6: 'Shadow Crash',
                    7: 'Void Eruption',
                    8: 'Shadowform',
                    9: 'Dispersion',
                    10: 'Vampiric Embrace',
                    11: 'Silence',
                    12: 'Psychic Scream',
                    13: 'Power Infusion',
                    14: 'Mass Dispel',
                    15: 'Fade'
                }
            }
        }
    },
    Rogue: {
        name: 'Rogue',
        color: '#FFF569',
        specs: {
            Assassination: {
                name: 'Assassination',
                panicRow: {
                    1: 'Cloak of Shadows',
                    2: 'Evasion',
                    3: 'Vanish',
                    4: 'Deathmark',
                    5: 'Shiv',
                    6: 'Kick',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Mutilate',
                    2: 'Envenom',
                    3: 'Garrote',
                    4: 'Rupture',
                    5: 'Shiv',
                    6: 'Deathmark',
                    7: 'Fan of Knives',
                    8: 'Crimson Tempest',
                    9: 'Ambush',
                    10: 'Stealth',
                    11: 'Vanish',
                    12: 'Kick',
                    13: 'Kidney Shot',
                    14: 'Slice and Dice',
                    15: 'Sprint'
                }
            },
            Outlaw: {
                name: 'Outlaw',
                panicRow: {
                    1: 'Cloak of Shadows',
                    2: 'Evasion',
                    3: 'Vanish',
                    4: 'Adrenaline Rush',
                    5: 'Blade Flurry',
                    6: 'Kick',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Sinister Strike',
                    2: 'Dispatch',
                    3: 'Pistol Shot',
                    4: 'Between the Eyes',
                    5: 'Adrenaline Rush',
                    6: 'Blade Flurry',
                    7: 'Roll the Bones',
                    8: 'Ambush',
                    9: 'Ghostly Strike',
                    10: 'Killing Spree',
                    11: 'Stealth',
                    12: 'Vanish',
                    13: 'Kick',
                    14: 'Gouge',
                    15: 'Sprint'
                }
            },
            Subtlety: {
                name: 'Subtlety',
                panicRow: {
                    1: 'Cloak of Shadows',
                    2: 'Evasion',
                    3: 'Vanish',
                    4: 'Shadow Dance',
                    5: 'Secret Technique',
                    6: 'Kick',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Backstab',
                    2: 'Shadowstrike',
                    3: 'Eviscerate',
                    4: 'Shadow Dance',
                    5: 'Symbols of Death',
                    6: 'Secret Technique',
                    7: 'Shuriken Storm',
                    8: 'Black Powder',
                    9: 'Shadow Blades',
                    10: 'Cold Blood',
                    11: 'Stealth',
                    12: 'Vanish',
                    13: 'Kick',
                    14: 'Cheap Shot',
                    15: 'Sprint'
                }
            }
        }
    },
    Shaman: {
        name: 'Shaman',
        color: '#0070DE',
        specs: {
            Elemental: {
                name: 'Elemental',
                panicRow: {
                    1: 'Astral Shift',
                    2: 'Earth Elemental',
                    3: "Nature's Swiftness",
                    4: 'Stormkeeper',
                    5: 'Fire Elemental',
                    6: 'Wind Shear',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Flame Shock',
                    2: 'Lava Burst',
                    3: 'Elemental Blast',
                    4: 'Earth Shock',
                    5: 'Lightning Bolt',
                    6: 'Chain Lightning',
                    7: 'Earthquake',
                    8: 'Icefury',
                    9: 'Primordial Wave',
                    10: 'Liquid Magma Totem',
                    11: 'Capacitor Totem',
                    12: 'Thunderstorm',
                    13: 'Cleanse Spirit',
                    14: 'Ghost Wolf',
                    15: 'Hex'
                }
            },
            Enhancement: {
                name: 'Enhancement',
                panicRow: {
                    1: 'Astral Shift',
                    2: 'Earth Elemental',
                    3: 'Feral Spirit',
                    4: 'Ascendance',
                    5: 'Doom Winds',
                    6: 'Wind Shear',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Stormstrike',
                    2: 'Lava Lash',
                    3: 'Ice Strike',
                    4: 'Crash Lightning',
                    5: 'Sundering',
                    6: 'Primordial Wave',
                    7: 'Elemental Blast',
                    8: 'Lightning Bolt',
                    9: 'Chain Lightning',
                    10: 'Flame Shock',
                    11: 'Frost Shock',
                    12: 'Capacitor Totem',
                    13: 'Ghost Wolf',
                    14: 'Cleanse Spirit',
                    15: 'Hex'
                }
            },
            Restoration: {
                name: 'Restoration',
                panicRow: {
                    1: 'Astral Shift',
                    2: 'Earth Elemental',
                    3: 'Spirit Link Totem',
                    4: 'Healing Tide Totem',
                    5: 'Ancestral Guidance',
                    6: 'Wind Shear',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Riptide',
                    2: 'Healing Wave',
                    3: 'Healing Surge',
                    4: 'Chain Heal',
                    5: 'Healing Rain',
                    6: 'Cloudburst Totem',
                    7: 'Primordial Wave',
                    8: 'Mana Tide Totem',
                    9: 'Earthen Wall Totem',
                    10: 'Purify Spirit',
                    11: 'Ghost Wolf',
                    12: 'Capacitor Totem',
                    13: 'Earth Shield',
                    14: 'Water Shield',
                    15: 'Hex'
                }
            }
        }
    },
    Warlock: {
        name: 'Warlock',
        color: '#8787ED',
        specs: {
            Affliction: {
                name: 'Affliction',
                panicRow: {
                    1: 'Unending Resolve',
                    2: 'Dark Pact',
                    3: 'Drain Life',
                    4: 'Summon Darkglare',
                    5: 'Soul Rot',
                    6: '[No Interrupt]',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Unstable Affliction',
                    2: 'Agony',
                    3: 'Corruption',
                    4: 'Malefic Rapture',
                    5: 'Drain Soul',
                    6: 'Seed of Corruption',
                    7: 'Vile Taint',
                    8: 'Phantom Singularity',
                    9: 'Soul Rot',
                    10: 'Summon Darkglare',
                    11: 'Haunt',
                    12: 'Nightfall',
                    13: 'Shadow Embrace',
                    14: 'Curse of Tongues',
                    15: 'Create Healthstone'
                }
            },
            Demonology: {
                name: 'Demonology',
                panicRow: {
                    1: 'Unending Resolve',
                    2: 'Dark Pact',
                    3: 'Demonic Strength',
                    4: 'Summon Demonic Tyrant',
                    5: 'Nether Portal',
                    6: '[No Interrupt]',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: "Hand of Gul'dan",
                    2: 'Demonbolt',
                    3: 'Shadow Bolt',
                    4: 'Call Dreadstalkers',
                    5: 'Implosion',
                    6: 'Summon Demonic Tyrant',
                    7: 'Grimoire: Felguard',
                    8: 'Demonic Strength',
                    9: 'Power Siphon',
                    10: 'Doom',
                    11: 'Soul Strike',
                    12: 'Bilescourge Bombers',
                    13: 'Curse of Weakness',
                    14: 'Create Healthstone',
                    15: 'Summon Felguard'
                }
            },
            Destruction: {
                name: 'Destruction',
                panicRow: {
                    1: 'Unending Resolve',
                    2: 'Dark Pact',
                    3: 'Infernal',
                    4: 'Summon Infernal',
                    5: 'Channel Demonfire',
                    6: '[No Interrupt]',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Chaos Bolt',
                    2: 'Incinerate',
                    3: 'Conflagrate',
                    4: 'Immolate',
                    5: 'Rain of Fire',
                    6: 'Havoc',
                    7: 'Summon Infernal',
                    8: 'Channel Demonfire',
                    9: 'Shadowburn',
                    10: 'Cataclysm',
                    11: 'Dimensional Rift',
                    12: 'Soul Fire',
                    13: 'Curse of Exhaustion',
                    14: 'Create Healthstone',
                    15: 'Summon Imp'
                }
            }
        }
    },
    Warrior: {
        name: 'Warrior',
        color: '#C79C6E',
        specs: {
            Arms: {
                name: 'Arms',
                panicRow: {
                    1: 'Die by the Sword',
                    2: 'Ignore Pain',
                    3: 'Rallying Cry',
                    4: 'Colossus Smash',
                    5: 'Avatar',
                    6: 'Pummel',
                    7: '[Racial]',
                    8: 'Combat Pot'
                },
                rotation: {
                    1: 'Mortal Strike',
                    2: 'Overpower',
                    3: 'Execute',
                    4: 'Slam',
                    5: 'Colossus Smash',
                    6: 'Bladestorm',
                    7: 'Sweeping Strikes',
                    8: 'Cleave',
                    9: 'Hamstring',
                    10: 'Victory Rush',
                    11: 'Thunder Clap',
                    12: 'Charge',
                    13: 'Heroic Leap',
                    14: 'Heroic Throw',
                    15: 'Berserker Rage'
                }
            },
            Fury: {
                name: 'Fury',
                panicRow: {
                    1: 'Enraged Regeneration',
                    2: 'Ignore Pain',
                    3: 'Rallying Cry',
                    4: 'Recklessness',
                    5: "Odyn's Fury",
                    6: 'Pummel',
                    7: '[Racial]',
                    8: 'Combat Pot'
                }
            },
            Protection: {
                name: 'Protection',
                panicRow: {
                    1: 'Shield Wall',
                    2: 'Last Stand',
                    3: 'Ignore Pain',
                    4: 'Avatar',
                    5: 'Demoralizing Shout',
                    6: 'Pummel',
                    7: '[Racial]',
                    8: 'Combat Pot'
                }
            }
        }
    }
};

module.exports = Classes;
