## 🎫 Task: Implement Universal Bar Generator (Row 4)

**Priority:** High
**Tags:** `generator`, `layout`
**Assignee:** [Unassigned]

### 📖 User Story
> **As a** Player
> **I want** a consistent bottom row on every page
> **So that** I can always Mount, Hearth, or check the Map without navigating

---

### ✅ Acceptance Criteria
The task is considered "Done" when the following conditions are met:

* [ ] `UniversalBarGenerator` function exists
* [ ] Generates the exact 8 buttons defined in `REQUIREMENTS.md` (Section 5)
* [ ] Slot 1 uses the Smart Mount Macro
* [ ] Slot 4 (Interact) uses keybind '`'
* [ ] Slot 8 (Hearthstone) uses keybind 'F12'
* [ ] Returns an array of 8 Action objects

---

### ⚙️ Technical Specifications

* **Component/File:** `src/generators/universal-bar.js`
* **Input:** None
* **Output:** Array of Stream Deck Actions

**Constraints:**
* Must use `IconManager` to resolve icons
* Must use `KeybindManager` to get keys (even if hardcoded preferences exist, they should go through the manager)

---

### 🧪 Testing Recommendations
Please cover the following scenarios:

1. **Verify Count:** Output array length == 8
2. **Verify Mount:** Slot 1 is "Mount" with correct macro text
3. **Verify Hearth:** Slot 8 is "Hearthstone" with correct icon

---

### 📝 Suggested Commit Message

```text
feat(generator): implement universal bar generator

- Created universal bar generator
- Implemented smart mount macro logic
- strictly followed Row 4 requirements

Relates to T-004
```
