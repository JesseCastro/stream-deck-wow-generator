## 🎫 Task: Implement Consumables Sub-Page Generator

**Priority:** Medium
**Tags:** `generator`, `sub-page`
**Assignee:** [Unassigned]

### 📖 User Story
> **As a** Player
> **I want** a page to use food, flasks, and runes
> **So that** I can buff myself before combat

---

### ✅ Acceptance Criteria
The task is considered "Done" when the following conditions are met:

* [ ] `ConsumablesPageGenerator` function exists
* [ ] Includes buttons for: Food, Flask/Phial, Weapon Oil/Stone, Augment Rune
* [ ] Includes "Utility" items if defined (e.g., Auto-Hammer, Repair Bot)
* [ ] Icons are generic enough to apply to current expansion items

---

### ⚙️ Technical Specifications

* **Component/File:** `src/generators/sub-pages/consumables.js`
* **Input:** Context
* **Output:** Array of 32 Actions

---

### 🧪 Testing Recommendations

#### 1. Action Check
* **Items:** Verify the macro uses `/use` command (e.g., `/use Phial of Tepid Versatility` or generalized item name).
* **Icons:** Asset validator must confirm generic icons like `Food.png`, `Flask.png`.

---

### 📝 Suggested Commit Message

```text
feat(generator): implement consumables sub-page

- Added generator for consumables
- Added standard buff item macros

Relates to T-009
```
