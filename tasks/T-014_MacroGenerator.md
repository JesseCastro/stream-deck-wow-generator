## 🎫 Task: Implement WoW Macro File Generator

**Priority:** Low
**Tags:** `output`, `macros`
**Assignee:** [Unassigned]

### 📖 User Story
> **As a** User
> **I want** a text file I can copy-paste into WoW
> **So that** my keybinds are set up instantly

---

### ✅ Acceptance Criteria
The task is considered "Done" when the following conditions are met:

* [ ] `MacroGenerator` class exists
* [ ] Takes the `KeybindManager` export
* [ ] Formats lines as `/bind [KEY] [COMMAND]` or `/run SetBinding(...)`?
* [ ] Output file `keybinds.txt` is created in dist folder

---

### ⚙️ Technical Specifications

* **Component/File:** `src/lib/macro-generator.js`
* **Input:** Keybind Map
* **Output:** String content of file

---

### 🧪 Testing Recommendations

#### 1. Syntax Verification
* **Format:** Assert line matches regex `/^\/bind \S+ \S+/`.
* **Escaping:** Verify spaces in command names are handled (e.g. `CLICK ActionButton1:LeftButton`).

---

### 📝 Suggested Commit Message

```text
feat(output): implement wow macro file generator

- Added logic to formatting binding commands
- Generated keybinds.txt output

Relates to T-014
```
