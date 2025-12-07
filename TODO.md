# Prioritized Task List

This list breaks down the implementation of `streamdeck-generator` into atomic, TDD-driven tasks.

## Phase 1: Core Foundation & Data Structures (Priority: High)
1. **[T-001]** [x] Define Class/Spec/Race Data Structure
2. **[T-002]** [x] Implement Keybind Manager (CSV Tracking)
3. **[T-003]** [x] Implement Asset Validator (Ensures Icons Exist)

## Phase 2: Page Generators (Priority: High)
4. **[T-004]** [x] Implement Universal Bar Generator (Row 4)
5. **[T-005]** [x] Implement Class Panic Row Generator (Row 3)
6. **[T-006]** [x] Implement Main Page Generator (Rows 1-2)

## Phase 3: Sub-Page Generators (Priority: Medium)
7. **[T-007]** [x] Implement Group/Raid Sub-Page
8. **[T-008]** [x] Implement PvP Sub-Page
9. **[T-009]** [x] Implement Consumables Sub-Page
10. **[T-010]** [x] Implement Professions Sub-Page
11. **[T-011]** [x] Implement Mounts Sub-Page (with Smart Macros)

## Phase 4: Class Logic (Priority: Medium)
12. **[T-012]** [x] Implement Paladin Specs (Prot, Ret, Holy)
13. **[T-013]** [x] Implement Racial Ability Lookup

## Phase 5: Output & CLI (Priority: Low)
14. **[T-014]** [x] Implement WoW Macro File Generator
15. **[T-015]** [x] Implement Docs Generator (Credits & Profile Nav Matrix)
16. **[T-016]** [x] Final CLI Polish & End-to-End Test
19. **[T-019]** [x] Fix Icons & Master Layout (Resolving Crash & TDD)
20. **[T-020]** [x] Fix "Unknown" Buttons (Invalid Action ID)
21. **[T-021]** [x] Fix Layout Shift (Padding Row 1)
22. **[T-022]** [x] Fix Navigation & Folder Links (Revert Manifest to Tree Structure)put to `Build/` directory
18. **[T-018]** [x] Document Icon Processing & Restore Scripts

## Phase 6: Critical Fixes (Priority: URGENT)
23. **[T-023]** [x] Regenerate Paladin Protection Profile (Restore Working State)
24. **[T-024]** [x] Implement ACTUAL Lua Keybind Installation Script
25. **[T-025]** [x] Add Paladin Panic Row Icon Overrides  
26. **[T-026]** [x] Add Dynamic Class Folder Icon (Not Hardcoded Paladin)
27. **[T-027]** [ ] Add Panic Row Icon Overrides for ALL Classes
28. **[T-028]** [ ] Populate Rotation Data for All Classes in classes.js
29. **[T-029]** [ ] Add Ability Icon Overrides for Common Cross-Class Abilities
30. **[T-030]** [x] Verify Icon Coverage with Manifest Inspection (TDD)

---

> Note: Detailed task specifications will be generated iteratively as work proceeds.
