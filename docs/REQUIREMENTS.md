# StreamDeck WoW Profile Generator - Requirements

## 1. Hardware
- **Device:** Stream Deck XL (4 rows × 8 columns = 32 buttons)
- **Position:** Left of keyboard (user is right-handed)

---

## 2. Profile Generation

### 2.1 Scope
- Generate `.streamDeckProfile` files for World of Warcraft
- **Full matrix:** All valid Race × Class × Spec combinations (~300-400 profiles)
- **Starting point:** Tauren Paladin (Protection)

### 2.2 Output Files (per profile)
1. `.streamDeckProfile` - importable Stream Deck profile
2. `keybinds.txt` - WoW macro file with `/bind` commands
3. `README.txt` - installation instructions

---

## 3. Keybind Management
1. Use WoW default keybinds when available
2. Assign unused keys for new actions
3. Track ALL keybinds in a master CSV
4. Mark custom keybinds for WoW export

---

## 4. Layout Structure

### 4.1 Reserved Rows (Always Visible on All Pages)
| Row | Purpose | Slots |
|-----|---------|-------|
| **Row 4** | Universal | Mount, Hearth, Map, Interact, Markers↗, Reload UI, Screenshot, Health Pot |
| **Row 3** | Class Panic | Defensives, Racial, Interrupt, Combat Pot (varies by class/spec) |

### 4.2 Content Area (Rows 1-2)
- 16 buttons for page-specific content
- **Position (0,0):** Back button on all sub-pages

### 4.3 Main Page (Rows 1-2)

**Row 1 (Navigation Folders):**
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|
| Class↗ | Group/Raid↗ | PvP↗ | Social↗ | Professions↗ | Mounts↗ | Consumables↗ | Nameplates |

**Row 2 (Quick Actions):**
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|
| Friendly Plates | Zoom In | Zoom Out | Toggle UI | Invite Target | Leave Group | Pet Attack | (spare) |

### 4.4 Sub-Pages
| Page | Purpose |
|------|---------|
| **Class** | Spec-specific abilities and rotation |
| **Group/Raid** | Target markers, ready check, pull timer, assist, focus |
| **PvP** | Arena targets (1/2/3), BG utilities |
| **Social** | Guild, friends, chat channels, emotes |
| **Professions** | Open profession UIs (2 primary + secondaries) |
| **Mounts** | Specific mount selection for collection |
| **Consumables** | Food, flask, augment rune, utility items |

---

## 5. Universal Bar (Row 4)
| Slot | Action | Keybind |
|------|--------|---------|
| 1 | Mount (smart macro) | M |
| 2 | World Map | Shift+M |
| 3 | Interact | ` |
| 4 | Raid Markers → | Folder |
| 5 | Reload UI | Ctrl+Shift+R |
| 6 | Screenshot | Ctrl+P |
| 7 | Health Potion | TBD |
| 8 | Hearthstone | F12 |

---

## 6. Class Panic Row (Row 3) - Protection Paladin Example
| Slot | Action |
|------|--------|
| 1 | Divine Shield |
| 2 | Lay on Hands |
| 3 | Ardent Defender |
| 4 | Guardian of Ancient Kings |
| 5 | Word of Glory |
| 6 | Blessing of Protection |
| 7 | Rebuke (interrupt) |
| 8 | War Stomp (racial) / Combat Potion |

---

## 7. Mount Smart Macro (v1)
```lua
/cast [flyable,nocombat] Flying Mount
/cast [noflyable,nocombat] Ground Mount
/cast [combat] Divine Steed
```

---

## 8. Icons
- **Source:** `~/Documents/Images/Icons/Mechagnome/`
- **Requirement:** Every button MUST have an icon
- **Fallback:** Search icon folder for best match

---

## 9. Navigation
- **Depth:** 2 levels only (Main → Sub-page)
- **Back button:** Top-left (0,0) on all sub-pages

---

## 10. Non-Functional Requirements

### 10.1 Tech Stack
- **Runtime:** Node.js (NO Python)
- **Testing:** Jest (TDD)
- **Linting:** ESLint
- **Security:** pre-commit hooks (detect-secrets, gitleaks)

### 10.2 Security
- No secrets in codebase
- Git-driven development
- Pre-commit scanning enabled

### 10.3 Storage
- ~300 GB available
- ~112 MB for all profiles (acceptable)
- Generate on-demand or batch

---

## 11. Future Enhancements (Parking Lot)

### 11.1 Stateful Stream Deck Plugin
- Track preferences (mount type, etc.)
- "Setup" page for dynamic race/class/spec selection
- Persistent state across sessions

### 11.2 WoW Addon Integration
- Cooldown tracking via companion addon
- Dynamic button states based on ability availability
- Combat awareness

### 11.3 Layout Options
- Mirror layout for left-handed users
- Compact mode for smaller Stream Decks

### 11.4 Additional Export Formats
- MySlot-compatible export strings
- WeakAuras integration
