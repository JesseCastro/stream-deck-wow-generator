## 🎫 Task: Implement Class Page Generator (Spec Logic)

**Priority:** Medium
**Tags:** `generator`, `class-logic`
**Assignee:** [Unassigned]

### 📖 User Story
> **As a** Paladin
> **I want** a page with my spec's rotational abilities
> **So that** I can fight effectively

---

### ✅ Acceptance Criteria
The task is considered "Done" when the following conditions are met:

* [ ] `ClassPageGenerator` function exists
* [ ] Implements logic for **Paladin** (Protection, Retribution, Holy)
* [ ] Protection: Shield of Righteousness, Judgment, Hammer of Wrath, Avenger's Shield, Consecration, etc.
* [ ] Other classes can be empty shells or placeholders for now

---

### ⚙️ Technical Specifications

* **Component/File:** `src/generators/class-page.js`
* **Input:** `{ class: "Paladin", spec: "Protection" }`
* **Output:** Array of 32 Actions

---

### 🧪 Testing Recommendations

#### 1. Spec Verification
* **Prot:** Assert presence of "Avenger's Shield".
* **Ret:** Assert presence of "Templar's Verdict".
* **Holy:** Assert presence of "Holy Shock".

#### 2. Placeholder Check
* **Warrior:** Assert returns valid (but empty) profile structure, no crash.

---

### 📝 Suggested Commit Message

```text
feat(generator): implement paladin class logic

- Added class page generator
- Implemented Prot/Ret/Holy ability mappings

Relates to T-012
```
