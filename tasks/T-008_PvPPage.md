## 🎫 Task: Implement PvP Sub-Page Generator

**Priority:** Medium
**Tags:** `generator`, `sub-page`
**Assignee:** [Unassigned]

### 📖 User Story
> **As a** PvPer
> **I want** a page for Arena targeting and BG utilities
> **So that** I can target enemies quickly

---

### ✅ Acceptance Criteria
The task is considered "Done" when the following conditions are met:

* [ ] `PvPPageGenerator` function exists
* [ ] Includes "Target Arena 1", "Target Arena 2", "Target Arena 3"
* [ ] Includes "Focus Arena 1" etc.
* [ ] Includes Battleground-specific calls (Incoming, Help)
* [ ] Layout inherits Panic/Universal rows

---

### ⚙️ Technical Specifications

* **Component/File:** `src/generators/sub-pages/pvp.js`
* **Input:** Context
* **Output:** Array of 32 Actions

---

### 🧪 Testing Recommendations

#### 1. Arena Macros
* **Targeting:** Verify macro text `/target arena1`, `/target arena2`, etc.
* **Focusing:** Verify `/focus arena1` etc.

#### 2. Layout
* **Button Placement:** Ensure arena targets are grouped logically (e.g., Column 1 for Targets, Column 2 for Focus).
* **Inheritance:** Verify Rows 3 & 4 match standards.

---

### 📝 Suggested Commit Message

```text
feat(generator): implement pvp sub-page

- Added generator for PvP targeting
- Implemented arena 1-3 macros

Relates to T-008
```
