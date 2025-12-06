## 🎫 Task: Implement Class Panic Row Generator (Row 3)

**Priority:** High
**Tags:** `generator`, `layout`, `class-logic`
**Assignee:** [Unassigned]

### 📖 User Story
> **As a** Player
> **I want** my class-specific defensive and utility buttons on Row 3
> **So that** I have instant access to "oh crap" buttons without navigating

---

### ✅ Acceptance Criteria
The task is considered "Done" when the following conditions are met:

* [ ] `PanicRowGenerator` function exists
* [ ] Accepts `Class`, `Spec`, and `Race` as inputs
* [ ] Generates 8 buttons based on `CLASS_LAYOUTS.md`
* [ ] Correctly inserts the `Race`-specific ability into the racial slot
* [ ] Correctly inserts the interrupt ability into Slot 7
* [ ] Correctly inserts "Combat Potion" into Slot 8 (as a fallback or default)

---

### ⚙️ Technical Specifications

* **Component/File:** `src/generators/panic-row.js`
* **Input:** `{ class: "Paladin", spec: "Protection", race: "Tauren" }`
* **Output:** Array of 8 Stream Deck Actions

**Constraints:**
* Must look up abilities in `src/data/classes.js`
* Must look up racials in `src/data/races.js`

---

### 🧪 Testing Recommendations
This is a high-logic component. Test Combinations are critical.

#### 1. Combinatorial Testing
* **Race Injection:** Iterate through ALL 25 races with a fixed class (e.g., Warrior). Assert Slot 8 changes correctly for each race (War Stomp -> Stoneform -> etc).
* **Spec Logic:** Iterate through distinct specs (Paladin Holy vs Prot). Assert Slot 1-6 change accordingly.

#### 2. Slot Validation
* **Interrupts:** Test a generic class (Mage) -> Assert Slot 7 is `Counterspell`.
* **Priest Exception:** Test Priest (Holy) -> Assert Slot 7 handles the "[No Interrupt]" case gracefully (empty or filler).

#### 3. Error Handling
* **Invalid Spec:** Input `{class: "Paladin", spec: "NonExistent"}` -> Assert throws helpful error.
* **Invalid Race:** Input `{race: "Murloc"}` -> Assert throws error definitions.

#### 4. Structure
* Assert output is ALWAYS an array of exactly 8 items.
* Assert every item is a valid Stream Deck Action object (has UUID, etc).

---

### 📝 Suggested Commit Message

```text
feat(generator): implement class panic row generator

- Created generator for Row 3 (Panic Buttons)
- Implemented lookup logic for class/spec/race combinations
- Verified against CLASS_LAYOUTS.md

Relates to T-005
```
