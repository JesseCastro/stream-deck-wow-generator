## 🎫 Task: Implement Installation Docs Generator

**Priority:** Low
**Tags:** `output`, `docs`
**Assignee:** [Unassigned]

### 📖 User Story
> **As a** User
> **I want** clear instructions generated with my profile
> **So that** I know how to import it and set up keybinds

---

### ✅ Acceptance Criteria
The task is considered "Done" when the following conditions are met:

* [ ] `DocsGenerator` function exists
* [ ] Creates `README.txt` in the output folder
* [ ] Content includes:
    - How to double-click `.streamDeckProfile`
    - How to run the `keybinds.txt` commands (copy/paste to chat)
    - Specific info for the class/spec generated

---

### ⚙️ Technical Specifications

* **Component/File:** `src/generators/docs.js`
* **Input:** Profile metadata
* **Output:** String content

---

### 🧪 Testing Recommendations

#### 1. Content Check
* **Placeholder Replacement:** Assert class name (e.g. "Paladin") is present in text.
* **Instructions:** Assert "keybinds.txt" is mentioned.

---

### 📝 Suggested Commit Message

```text
feat(output): implement installation docs generator

- Added README.txt generation
- Included dynamic class specific instructions

Relates to T-015
```
