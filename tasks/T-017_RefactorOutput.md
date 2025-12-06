## 🎫 Task: Refactor Output to Build Directory

**Priority:** Medium
**Tags:** `cli`, `cleanup`

### 📖 User Story
> **As a** Developer
> **I want** generated files to go into a `Build` folder
> **So that** the project root remains clean and organized

### ✅ Acceptance Criteria
* [ ] Output folder `Build/` is created if missing
* [ ] `.streamDeckProfile`, `keybinds.txt`, `README.txt` are written to `Build/`
* [ ] CLI logs indicate the location of the files
* [ ] Root directory is cleaned of old artifacts

### ⚙️ Technical Specifications
* **File:** `src/lib/writeToDisk.js` or `src/index.js`
* **Path:** `path.join(process.cwd(), 'Build')`
