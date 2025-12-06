## 🎫 Task: Implement Racial Ability Logic

**Priority:** Low
**Tags:** `generator`, `race-logic`
**Assignee:** [Unassigned]

### 📖 User Story
> **As a** Tauren
> **I want** War Stomp on my panic bar
> **So that** I can stun enemies

---

### ✅ Acceptance Criteria
The task is considered "Done" when the following conditions are met:

* [ ] `RacialManager` or helper function exists
* [ ] Correctly resolves specific racial for all 25+ races
* [ ] Handles Passive racials (returns null or passive icon?) -> Requirements say Panic Row has Racial. If passive, maybe put "Rocket Jump" type utility instead?
* [ ] Logic: If racial is Passive (e.g. Human Spirit), is there an active one (Will to Survive)? Yes. Every race has at least one active.

---

### ⚙️ Technical Specifications

* **Component/File:** `src/generators/panic-row.js` (refactor to use external lookup?) or `src/lib/racials.js`
* **Input:** `Race Name`
* **Output:** Racial Ability Action Object

---

### 🧪 Testing Recommendations

#### 1. Exhaustive Check
* **Map:** Iterate all races. Assert returned ability is not null.
* **Match:** Assert `Tauren` -> `War Stomp`. `Orc` -> `Blood Fury`.

---

### 📝 Suggested Commit Message

```text
feat(logic): implement racial ability lookup

- Added racial ability resolver
- Mapped all 25 races to active abilities

Relates to T-013
```
