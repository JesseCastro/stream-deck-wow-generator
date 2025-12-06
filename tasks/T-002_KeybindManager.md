## 🎫 Task: Implement Keybind Manager

**Priority:** High
**Tags:** `foundation`, `keybinds`
**Assignee:** [Unassigned]

### 📖 User Story
> **As a** User
> **I want** the system to track every keybind used
> **So that** I don't have conflicts and can export a CSV of all bindings

---

### ✅ Acceptance Criteria
The task is considered "Done" when the following conditions are met:

* [ ] `KeybindManager` class exists
* [ ] Loads default keybinds from `Assets/default_keybinds.csv`
* [ ] Method `assignKey(actionName)` returns an assigned keybind
* [ ] Reuses existing keybind if action name matches
* [ ] Assigns a NEW unused keybind if action is new
* [ ] Method `exportAll()` generates the master CSV content

---

### ⚙️ Technical Specifications

* **Component/File:** `src/lib/keybind-manager.js`
* **Input:** `Assets/default_keybinds.csv`
* **Output:** Assigned key (e.g., "Shift+T")

**Constraints:**
* Must not overwrite critical hardcoded binds (Movement, Interact, etc.)
* Must prioritize F1-F12 and Numpad for generated binds

---

### 🧪 Testing Recommendations

#### 1. Core Logic
* **Idempotency:** Call `assignKey('Spell A')` twice. Assert both return the SAME key.
* **New Assignment:** Call `assignKey('New Spell')`. Assert it returns a valid key NOT in the default list.
* **Conflict Resolution:** Force a collision state (mock full list). Request new key. Assert it finds the next available slot or throws helpful error.

#### 2. Persistence & Normalization
* **Case Insensitivity:** `assignKey('spell a')` and `assignKey('Spell A')` must return same key.
* **Modifier Normalization:** Ensure `SHIFT+T`, `Shift+t`, `shift+T` are treated as identical to prevent duplicates.
* **Export format:** Generate CSV. Assert headers are `Action,Key`. Assert row count matches assignments.

#### 3. Critical Protections
* **Reserved Keys:** Attempt to assign restricted keys (e.g., 'W' for move forward). Assert it is BLOCKED or returns the proper action if name matches default.
* **Modifier combinations:** Test `Crtl`, `Shift`, `Alt` combinations.

---

### 📝 Suggested Commit Message

```text
feat(lib): implement keybind manager with CSV tracking

- Created KeybindManager class
- Added logic to load defaults and assign new keys
- Added export functionality

Relates to T-002
```
