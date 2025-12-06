## 🎫 Task: Fix Icons & Master Layout

**Priority:** Critical
**Tags:** `bugfix`, `layout`, `assets`

### 📖 User Story
> **As a** User
> **I want** the Main Page to show all 4 rows (Folders, Utilities, Panic, Universal)
> **And** I want my local icons to be used
> **So that** the profile looks correct and complete

### 🔍 Issues Identified
1.  **Icons Missing:** Generator looking in `Assets/Icons/WoW_Combined`, but user icons are in `~/Documents/Images/Icons/Mechagnome`.
2.  **Layout Incomplete:** Main Page only has Rows 1 & 2. Missing Panic Row (3) and Universal Bar (4).
3.  **"Unknowns":** Unwanted buttons appearing.
4.  **Home Button:** Top-left (0,0) should be blank on Main Page.

### ⚙️ Implementation Plan
1.  **Assets:** Copy `~/Documents/Images/Icons/Mechagnome` -> `Assets/Icons/Local`. Update Generator to look there.
2.  **Main Page:**
    *   Update `src/generators/wow.js` to compose `PanicRow` and `UniversalBar` into the Main Page.
    *   Set (0,0) to `empty`.
3.  **Unknowns:** Ensure `empty` slots result in `null` actions in `profile.js` / grid logic.

### ✅ Acceptance Criteria
* [ ] No "Image not found" errors during generation (for standard icons)
* [ ] Main Page has 32 actions (4 rows)
* [ ] Row 3 = Panic Row
* [ ] Row 4 = Universal Bar
* [ ] (0,0) is Blank
* [ ] No "Unknown" visible labels
