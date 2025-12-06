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
                    2: 'Bear Form',
                    3: 'Frenzied Regen',
                    4: 'Celestial Alignment',
                    5: 'Incarnation',
                    6: 'Solar Beam',
                    7: '[Racial]',
                    8: 'Combat Pot'
                }
            },
            Feral: {
                name: 'Feral',
                panicRow: {
                    1: 'Survival Instincts',
                    2: 'Barkskin',
                    3: 'Bear Form',
                    4: 'Berserk',
                    5: "Tiger's Fury",
                    6: 'Skull Bash',
                    7: '[Racial]',
                    8: 'Combat Pot'
                }
            },
            Guardian: {
                name: 'Guardian',
                panicRow: {
                    1: 'Survival Instincts',
                    2: 'Barkskin',
                    3: 'Frenzied Regen',
                    4: 'Incarnation',
                    5: 'Rage of the Sleeper',
                    6: 'Skull Bash',
                    7: '[Racial]',
                    8: 'Combat Pot'
                }
            },
            Restoration: {
                name: 'Restoration',
                panicRow: {
                    1: 'Barkskin',
                    2: 'Bear Form',
                    3: 'Ironbark',
                    4: 'Tranquility',
                    5: "Nature's Swiftness",
                    6: 'Solar Beam',
                    7: '[Racial]',
                    8: 'Combat Pot'
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
