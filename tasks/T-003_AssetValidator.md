## 🎫 Task: Implement Asset Validator

**Priority:** High
**Tags:** `foundation`, `assets`
**Assignee:** [Unassigned]

### 📖 User Story
> **As a** Developer
> **I want** to ensure every requested icon actually exists
> **So that** the generator doesn't have blank buttons

---

### ✅ Acceptance Criteria
The task is considered "Done" when the following conditions are met:

* [ ] `IconManager` class exists
* [ ] Method `resolveIcon(name)` checks exact match → png match → fuzzy match
* [ ] Throws error or warning if icon is completely missing
* [ ] Helper script `scripts/validate-icons.js` scans all defined buttons in data structures and reports missing icons

---

### ⚙️ Technical Specifications

* **Component/File:** `src/lib/icon-manager.js`
* **Input:** Icon name (e.g., "Divine Shield")
* **Output:** Absolute path to icon

**Constraints:**
* Must look in `Assets/Icons/Mechagnome` (and subfolders if organized)
* Must support "best guess" fuzzy matching (removing spaces, casing)

---

### 🧪 Testing Recommendations

#### 1. Resolution Logic (Mocked FS)
* **Exact Match:** `Icon.png` exists -> Returns path.
* **Extensionless:** `Icon` requested, `Icon.png` exists -> Returns path.
* **Fuzzy Parsing:** `Divine Shield` requested, `DivineShield.png` exists -> Returns path.
* **Case Handling:** `flash of light` requested, `FlashOfLight.png` exists -> Returns path.

#### 2. Edge Cases
* **Special Characters:** Test inputs with apostrophes (`Tiger's Fury`), colons, marks.
* **Deep Paths:** Test icons located in subdirectories if supported.
* **Missing Icon:** assert function returns `null` or throws specific `IconNotFoundError`.

#### 3. Performance
* **Caching:** Verify that repeated calls for the same icon hit a cache (optional but recommended for speed).

---

### 📝 Suggested Commit Message

```text
feat(lib): implement icon manager and validator

- Added IconManager for robust image resolution
- Added fuzzy matching logic
- Added validation script

Relates to T-003
```
