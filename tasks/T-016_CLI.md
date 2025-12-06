## 🎫 Task: Implement Final CLI & E2E Validation

**Priority:** Low
**Tags:** `cli`, `core`
**Assignee:** [Unassigned]

### 📖 User Story
> **As a** User
> **I want** to run a simple command to generate my profile
> **So that** I don't have to write code

---

### ✅ Acceptance Criteria
The task is considered "Done" when the following conditions are met:

* [ ] `index.js` accepts `--class`, `--spec`, `--race`
* [ ] Validates inputs against Data structures
* [ ] Orchestrates the entire flow (Data -> Generators -> Zip -> Docs)
* [ ] Zips everything into `[CharacterName].zip` OR just outputs files to a folder
* [ ] Handling: Profile file + Keybinds + Readme

---

### ⚙️ Technical Specifications

* **Component/File:** `src/index.js`
* **Input:** ARGV
* **Output:** Files on disk

---

### 🧪 Testing Recommendations

#### 1. Invalid Input Handing
* **Bad Args:** `--class "Mario"` -> Error.

#### 2. Full Flow (Mocked)
* **Orchestration:** Assert `MainPageGenerator`, `KeybindManager.export`, `Zip.write` are all called in order.

---

### 📝 Suggested Commit Message

```text
feat(cli): finalize cli arguments and orchestration

- Added yargs/commander logic
- Integrated all generators
- Added input validation

Relates to T-016
```
