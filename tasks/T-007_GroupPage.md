## 🎫 Task: Implement Group/Raid Sub-Page Generator

**Priority:** Medium
**Tags:** `generator`, `sub-page`
**Assignee:** [Unassigned]

### 📖 User Story
> **As a** Raider
> **I want** a dedicated page for markers, ready checks, and targeting
> **So that** I can lead or assist my group efficiently

---

### ✅ Acceptance Criteria
The task is considered "Done" when the following conditions are met:

* [ ] `GroupPageGenerator` function exists
* [ ] Button (0,0) is "Back to Main"
* [ ] Includes 8 Raid Markers (Skull vs Star vs Square etc.)
* [ ] Includes "Ready Check" and "Pull Timer" actions
* [ ] Includes "Focus Target" and "Clear Focus"
* [ ] Layout matches `Row 3` (Panic) and `Row 4` (Universal) inheritance

---

### ⚙️ Technical Specifications

* **Component/File:** `src/generators/sub-pages/group.js`
* **Input:** Universal attributes (class/spec/race for existing rows)
* **Output:** Array of 32 Stream Deck Actions

---

### 🧪 Testing Recommendations

#### 1. Content Verification
* **Markers:** Assert presence of all 8 markers with correct icon paths (e.g., `icons/markers/skull.png`).
* **Macros:** Verify `Ready Check` uses `/readycheck` and `Pull Timer` uses the standard DBM/BigWigs pull command (e.g. `/pull 10`) or `/countdown 10`.

#### 2. Structure
* **Inheritance:** Validate Panic Row and Universal Bar are present at correct indices.
* **Back Button:** Verify correct navigation UUID.

---

### 📝 Suggested Commit Message

```text
feat(generator): implement group and raid sub-page

- Added generator for Group/Raid utilities
- Implemented marker and raid leader macros

Relates to T-007
```
