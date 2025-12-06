const fs = require('fs');
const path = require('path');

class KeybindManager {
    constructor() {
        this.defaultsPath = path.join(__dirname, '../../Assets/default_keybinds.csv');
        this.keyMap = new Map(); // Action -> Key
        this.reverseKeyMap = new Set(); // Key (normalized) -> Action

        // Pool of available keys for auto-assignment
        // Prioritize Function keys and Numpad as per requirements
        this.availableKeys = [
            'F6', 'F7', 'F8', 'F9', 'F10', 'F11',
            'NumPad1', 'NumPad2', 'NumPad3', 'NumPad4', 'NumPad5', 'NumPad6', 'NumPad7', 'NumPad8', 'NumPad9',
            'Shift+F1', 'Shift+F2', 'Shift+F3', 'Shift+F4', 'Shift+F5',
            'Ctrl+F1', 'Ctrl+F2', 'Ctrl+F3', 'Ctrl+F4', 'Ctrl+F5',
            'Alt+F1', 'Alt+F2', 'Alt+F3', 'Alt+F4', 'Alt+F5',
            'U', 'I', 'O', 'P', 'H', 'J', 'K', 'L', 'N', 'M' // Fallbacks
        ];

        this.loadDefaults();
    }

    loadDefaults() {
        if (!fs.existsSync(this.defaultsPath)) {
            console.warn(`Default keybinds not found at ${this.defaultsPath}`);
            return;
        }

        const content = fs.readFileSync(this.defaultsPath, 'utf-8');
        const lines = content.split('\n');

        // Skip header (Category,Action/Command,Default Keybind(s))
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;

            const parts = line.split(',');
            // CSV parsing might be tricky with commas in fields, but default file seems simple
            // Format: Category, Action, Key
            if (parts.length >= 3) {
                const action = parts[1].trim(); // Case sensitive for storage?
                const key = parts[2].trim();

                if (action && key) {
                    this.registerKey(action, key, true);
                }
            }
        }
    }

    registerKey(action, key, isDefault = false) {
        const normalizedAction = action.toLowerCase();
        const normalizedKey = key.toLowerCase();

        // If default, force overwrite? Or just set if missing?
        // Requirements: "Leverage WHENEVER possible"
        this.keyMap.set(normalizedAction, { originalName: action, key: key, isDefault });
        this.reverseKeyMap.add(normalizedKey);
    }

    getKey(actionName) {
        const entry = this.keyMap.get(actionName.toLowerCase());
        return entry ? entry.key : null;
    }

    assignKey(actionName) {
        const existing = this.getKey(actionName);
        if (existing) return existing;

        // Find next available key
        for (const candidate of this.availableKeys) {
            if (!this.reverseKeyMap.has(candidate.toLowerCase())) {
                this.registerKey(actionName, candidate, false);
                return candidate;
            }
        }

        throw new Error(`No available keys left to assign for action: ${actionName}`);
    }

    getAllBindings() {
        const bindings = [];
        for (const [_, entry] of this.keyMap) {
            bindings.push({ id: entry.originalName, key: entry.key });
        }
        return bindings;
    }

    exportAll() {
        let output = 'Action,Key,Source\n';
        for (const [_, entry] of this.keyMap) {
            output += `${entry.originalName},${entry.key},${entry.isDefault ? 'Default' : 'Custom'}\n`;
        }
        return output;
    }
}

module.exports = KeybindManager;
