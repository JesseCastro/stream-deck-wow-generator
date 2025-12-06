## 🎫 Task: Define Class/Spec/Race Data Structure

**Priority:** High
**Tags:** `foundation`, `data`
**Assignee:** [Unassigned]

### 📖 User Story
> **As a** Developer
> **I want** a structured config file defining all Classes, Specs, and Races
> **So that** the generator can validate inputs and iterate through all combinations programmatically

---

### ✅ Acceptance Criteria
The task is considered "Done" when the following conditions are met:

* [ ] `src/data/classes.js` exports a constant defining all 13 classes and their specs
* [ ] `src/data/races.js` exports a constant defining all 25+ races and their racials
* [ ] Data structure includes "Panic Row" defaults for each spec (as defined in `CLASS_LAYOUTS.md`)
* [ ] Jest tests verify that every class has at least 2 specs and every race has a racial ability
* [ ] **Strict Schema Validation** is implemented in tests

---

### ⚙️ Technical Specifications

* **Component/File:** `src/data/classes.js`, `src/data/races.js`
* **Input:** None (static data)
* **Output:** JavaScript Objects

**Constraints:**
* Must stick to `CLASS_LAYOUTS.md` definitions strictly
* Panic row abilities must be keyed by slot index (1-8)

---

### 🧪 Testing Recommendations
The test suite must prevent regression by validating the entire data integrity:

#### 1. Schema Validation (Automated for ALL entries)
* **Classes:** Every entry must have `name`, `color`, `icon`, and `specs`.
* **Specs:** Every spec must have `name` and `panicRow`.
* **PanicRow:** Must have exactly keys `1, 2, 3, 4, 5, 6, 7, 8`.
* **PanicRow Content:** Values must be non-empty strings or objects describing the ability.

#### 2. Data Integrity Checks
* **Count Check:** Assert `Object.keys(Classes).length` === 13.
* **Race Check:** Assert `Object.keys(Races).length` >= 24.
* **Racial Ability:** Assert EVERY race has a `racial` property that is not null.
* **Interrupt Slot:** Assert `Slot 7` in EVERY panic row contains a known interrupt (or explicit "[No Interrupt]").
* **Panic Slot:** Assert `Slot 8` in EVERY panic row is either a racial placeholder or combat potion.

#### 3. Specific Spot Checks (Regression Traps)
* **Druid:** Start ensuring `Guardian`, `Feral`, `Balance`, `Restoration` all exist.
* **Evoker:** Ensure `Augmentation` is present.
* **Demon Hunter:** Ensure only 2 specs exist (`Havoc`, `Vengeance`).
* **Tauren:** Ensure racial is `'War Stomp'`.

#### 4. Cross-Reference Constraints
* Ensure no Class ID duplicates.
* Ensure no Race ID duplicates.

---

### 📝 Suggested Commit Message

```text
feat(data): define class and race data structures

- Added src/data/classes.js with spec definitions
- Added src/data/races.js with racial abilities
- Added tests/data.test.js with strict schema validation

Relates to T-001
```
