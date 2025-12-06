## 🎫 Task: Implement Professions Sub-Page Generator

**Priority:** Medium
**Tags:** `generator`, `sub-page`
**Assignee:** [Unassigned]

### 📖 User Story
> **As a** Crafter
> **I want** quick access to my profession windows
> **So that** I don't have to search the spellbook

---

### ✅ Acceptance Criteria
The task is considered "Done" when the following conditions are met:

* [ ] `ProfessionsPageGenerator` function exists
* [ ] Dynamically generates buttons based on user input (future) or defaults to standard set (Cooking, Fishing, Archaeology, + 2 Primary slots)
* [ ] Keybinds: Uses `KeybindManager` to assign keys for "Open Profession 1" etc.

---

### ⚙️ Technical Specifications

* **Component/File:** `src/generators/sub-pages/professions.js`
* **Input:** Context
* **Output:** Array of 32 Actions

---

### 🧪 Testing Recommendations

#### 1. Keybind Integration
* **Assignments:** Verify that it requests keys for "Profession 1", "Cooking", etc.
* **Macros:** Verify output sends correct keystroke or `/cast` command (e.g. `/cast Cooking`).

---

### 📝 Suggested Commit Message

```text
feat(generator): implement professions sub-page

- Added generator for profession UI links
- Integrated with KeybindManager

Relates to T-010
```
