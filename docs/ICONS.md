# Icon Processing Documentation

This project uses specific icons for World of Warcraft commands. The icons are sourced from the community and processed for optimal display on Elgato Stream Deck (144x144 resolution).

## Source
**AcidWeb / Clean-Icons-Mechagnome-Edition**
(Credits to AcidWeb for the original extraction)

## Processing Steps

The raw icons from the source need to be processed before use in the generator.

### 1. Resize to 144x144
Stream Deck keys render best at native resolution. We resize all icons to 144x144 pixels.
We have provided a helper script in `scripts/resize_icons.sh` that uses the macOS built-in `sips` command (no dependencies required).

**Usage:**
```bash
./scripts/resize_icons.sh /path/to/Icons
```

### 2. Organization (Optional but Recommended)
The raw icon pack lists thousands of icons flat or in generic categories. We use a categorization script to sort them into subfolders based on their prefixes (e.g., `Ability_`, `Inv_`) to speed up lookup performance and filesystem navigation.

**Helper Script:**
A Python script `organize_icons.py` (found in the legacy `IconConverter` folder) splits filenames by underscores and creates a directory hierarchy logic.

Example Logic:
*   `Ability_Warrior_Charge.png` -> `Ability/Warrior/Charge.png`
*   `Inv_Sword_01.png` -> `Inv/Sword/01.png`

## Using Custom Icons
To use your own icons:
1.  Place them in `Assets/Icons/WoW_Combined` (or configure the path).
2.  Ensure they are PNG format.
3.  Run the resize script if they are huge.
4.  The `IconManager` will find them by filename (fuzzy matching supported).
