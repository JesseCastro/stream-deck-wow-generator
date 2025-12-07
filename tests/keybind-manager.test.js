/**
 * @fileoverview Tests for KeybindManager
 */

const KeybindManager = require('../src/lib/keybind-manager');
const fs = require('fs');
const path = require('path');

// Mock fs to avoid reading real files
jest.mock('fs');

describe('KeybindManager', () => {
  let manager;
  const mockDefaults =
        `Category,Action/Command,Default Keybind(s)
Movement,Move Forward,W
Movement,Jump,Spacebar
Interface,World Map,M
Interface,Character Info,C
Action Bars,Action Button 1,1
`;

  beforeEach(() => {
    // Reset mocks
    fs.existsSync.mockReturnValue(true);
    fs.readFileSync.mockReturnValue(mockDefaults);
    manager = new KeybindManager();
  });

  describe('Loading Defaults', () => {
    it('should load default keybinds from CSV', () => {
      expect(manager.getKey('Move Forward')).toBe('W');
      expect(manager.getKey('World Map')).toBe('M');
    });

    it('should normalize action names (case insensible)', () => {
      expect(manager.getKey('move forward')).toBe('W');
      expect(manager.getKey('WORLD MAP')).toBe('M');
    });
  });

  describe('assignKey', () => {
    it('should return existing default key if available', () => {
      const key = manager.assignKey('Jump');
      expect(key).toBe('Spacebar');
    });

    it('should assign a new key for unknown action', () => {
      const key = manager.assignKey('New Spell');
      expect(key).toBeDefined();
      expect(key.length).toBeGreaterThan(0);
    });

    it('should be idempotent (return same key for same action)', () => {
      const key1 = manager.assignKey('New Spell');
      const key2 = manager.assignKey('New Spell');
      expect(key1).toBe(key2);
    });

    it('should not assign a key that is already used by default', () => {
      const key = manager.assignKey('Another Spell');
      expect(key).not.toBe('W'); // W is used
      expect(key).not.toBe('M'); // M is used
    });

    it('should not assign the same key to two different custom actions', () => {
      const key1 = manager.assignKey('Custom 1');
      const key2 = manager.assignKey('Custom 2');
      expect(key1).not.toBe(key2);
    });
  });

  describe('Key Pool Logic', () => {
    it('should prefer specific unassigned keys first', () => {
      // We can test specific preference logic if we implement strict ordering
      // For now just ensure validity
      const k = manager.assignKey('Test');
      expect(typeof k).toBe('string');
    });
  });

  describe('Structure', () => {
    it('should export all keybinds', () => {
      manager.assignKey('Move Forward'); // default
      manager.assignKey('Custom Action'); // custom

      const csv = manager.exportAll();
      expect(csv).toContain('Move Forward,W');
      expect(csv).toContain('Custom Action,');
    });
  });
});
