# Stream Deck WoW Profile Generator

A sophisticated tool to generate comprehensive Elgato Stream Deck XL profiles for World of Warcraft players, supporting all races, classes, and specializations.

---

## 🚀 Overview

This project generates `.streamDeckProfile` files that provide a complete interface for playing WoW with a Stream Deck. It handles:
- **Navigation:** Main menu with sub-pages (Class, Social, Professions, etc.)
- **Class Logic:** Panic buttons (defensives, interrupts) and rotational abilities tailored to your spec
- **Macro Generation:** Outputs a macro file to automatically set up WoW keybinds
- **Universals:** Standardized bar for Mounts, Map, Hearthstone, and Raid Markers

---

## 🛠 Tech Stack

- **Runtime:** Node.js
- **Testing:** Jest (TDD Approach)
- **Linting:** ESLint
- **Security:** pre-commit hooks (detect-secrets, gitleaks)

---

## 📖 Key Documentation

- **[Requirements](./REQUIREMENTS.md):** Detailed project requirements and scope.
- **[Class Layouts](./CLASS_LAYOUTS.md):** Specific button mappings for every class/spec/race combo.
- **[Task List](./TODO.md):** Prioritized list of atomic tasks for implementation.

---

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- Elgato Stream Deck Software
- World of Warcraft (Retail)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Initialize security hooks:
   ```bash
   pre-commit install
   ```

### Usage
Generate a profile for your character:
```bash
# Example: Tauren Paladin (Protection)
npm run generate -- --class "Paladin" --spec "Protection" --race "Tauren"
```

---

## 🧪 Testing

We use TDD. Run the test suite:
```bash
npm test
```

---

## 📂 Project Structure

```
streamdeck-generator/
├── src/
│   ├── generators/      # Profile logic per class
│   ├── lib/             # Core utilities (zip, manifest, actions)
│   └── templates/       # Task templates and code skeletons
├── tests/               # Jest test suites
├── Assets/              # Icons and CSV data
└── docs/                # Additional documentation
```

---

## ⭐️ Credits & Acknowledgements

*   **Icons:** [AcidWeb/Clean-Icons-Mechagnome-Edition](https://github.com/AcidWeb/Clean-Icons-Mechagnome-Edition)
    *   See [docs/ICONS.md](docs/ICONS.md) for processing instructions.
*   **Original Data:** MySlot exports and wowhead data.
