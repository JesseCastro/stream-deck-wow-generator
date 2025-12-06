## 🎫 Task: Implement Mounts Sub-Page Generator

**Priority:** Medium
**Tags:** `generator`, `sub-page`
**Assignee:** [Unassigned]

### 📖 User Story
> **As a** Collector
> **I want** to pick specific mounts (Dragonriding vs Ground vs Flying)
> **So that** I can show off or traverse specific terrain

---

### ✅ Acceptance Criteria
The task is considered "Done" when the following conditions are met:

* [ ] `MountsPageGenerator` function exists
* [ ] Includes "Random Favorite", "Grand Expedition Yak" (vendor), "Water Strider" (water walking), etc.
* [ ] Slot 1 on THIS page might just be "Ground Mount" specifically?
* [ ] Implements the "Smart Mount Macro" where applicable

---

### ⚙️ Technical Specifications

* **Component/File:** `src/generators/sub-pages/mounts.js`
* **Input:** Context
* **Output:** Array of 32 Actions

---

### 🧪 Testing Recommendations

#### 1. Macro Logic
* **Smart Macro:** Verify the exact Lua script is present in the action settings for the main mount button.
* **Vendor Mount:** Verify `/cast Grand Expedition Yak`.

#### 2. Icon existence
* Assert `Yak.png`, `Dragon.png` etc. exist.

---

### 📝 Suggested Commit Message

```text
feat(generator): implement mounts sub-page

- Added generator for mount selection
- Implemented smart mount macros

Relates to T-011
```
