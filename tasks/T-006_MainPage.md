## 🎫 Task: Implement Main Page Layout Generator

**Priority:** High
**Tags:** `generator`, `layout`
**Assignee:** [Unassigned]

### 📖 User Story
> **As a** Player
> **I want** a main menu with navigation folders and quick utilities
> **So that** I can access all my sub-pages and frequent toggles

---

### ✅ Acceptance Criteria
The task is considered "Done" when the following conditions are met:

* [ ] `MainPageGenerator` function exists
* [ ] Generates 16 buttons for Rows 1 & 2
* [ ] Row 1 contains all 7 navigation folders (Class, Group, PvP, etc.)
* [ ] Row 2 contains quick utilities (Nameplates, Zoom, Invite, etc.)
* [ ] Integrates Row 3 (Panic) and Row 4 (Universal) to form the full 32-button page

---

### ⚙️ Technical Specifications

* **Component/File:** `src/generators/main-page.js`
* **Input:** `{ class, spec, race }` (passed down to panic row)
* **Output:** Stream Deck Profile Object (Main Page)

**Constraints:**
* Navigation buttons must be "Folder" actions linking to placeholder (or empty) sub-profiles for now
* Must assemble the full 32-button grid

---

### 🧪 Testing Recommendations

#### 1. Coordinate Validation
* **Grid Mapping:** Verify that the 1D array of actions correctly maps to the 4x8 grid.
    * Index 0-7 = Row 1 (Navigation)
    * Index 8-15 = Row 2 (Quick Actions)
    * Index 16-23 = Row 3 (Panic)
    * Index 24-31 = Row 4 (Universal)
* **Bounds:** Assert total action count is exactly 32.

#### 2. Navigation Integrity
* **Linkage:** Assert that "Class" button (Row 1, Col 1) has a valid `UUID` for a folder and maps to a sub-profile ID.
* **Button Types:** Row 1 must be strictly `Folder` type actions. Row 2 must be `Hotkey` type actions.

#### 3. Integration Testing
* **Mock Injection:** Mock `PanicRowGenerator` and `UniversalBarGenerator`. Assert `MainPageGenerator` correctly calls them and places their output in indices 16-31.

---

### 📝 Suggested Commit Message

```text
feat(generator): implement main page generator and assembly

- Created main page layout (Rows 1-2)
- Implemented page assembly logic (merging Rows 1-4)
- Added navigation folder placeholders

Relates to T-006
```
