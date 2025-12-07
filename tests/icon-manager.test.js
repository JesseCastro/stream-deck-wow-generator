/**
 * @fileoverview Tests for IconManager
 */

const IconManager = require('../src/lib/icon-manager');
const fs = require('fs');
const path = require('path');

// Mock fs to simulate file existence
jest.mock('fs');

describe('IconManager', () => {
  let manager;
  const mockIconsDir = '/Users/mock/icons';

  beforeEach(() => {
    // Reset mocks
    fs.existsSync.mockReturnValue(false);
    fs.statSync.mockReturnValue({ isDirectory: () => false });
    fs.readdirSync.mockReturnValue([]);

    // Constructor might check for dir existence, so let's mock that to true for the base dir
    fs.existsSync.mockImplementation((p) => {
      if (p === mockIconsDir) return true;
      return false;
    });

    manager = new IconManager([mockIconsDir]);
  });

  describe('resolveIcon', () => {
    it('should return null if icon is not found', () => {
      // Setup empty dir
      fs.readdirSync.mockReturnValue([]);
      manager = new IconManager([mockIconsDir]);
      expect(manager.resolveIcon('NonExistent')).toBeNull();
    });

    it('should find exact match', () => {
      const expectedPath = path.join(mockIconsDir, 'Spell.png');
      // Setup file existence for scan
      fs.readdirSync.mockReturnValue([{ name: 'Spell.png', isFile: () => true, isDirectory: () => false }]);

      manager = new IconManager([mockIconsDir]);
      expect(manager.resolveIcon('Spell.png')).toBe(expectedPath);
    });

    it('should find match with .png extension added', () => {
      const expectedPath = path.join(mockIconsDir, 'Spell.png');
      fs.readdirSync.mockReturnValue([{ name: 'Spell.png', isFile: () => true, isDirectory: () => false }]);

      manager = new IconManager([mockIconsDir]);
      expect(manager.resolveIcon('Spell')).toBe(expectedPath);
    });

    it('should find fuzzy match (spaces removed)', () => {
      const expectedPath = path.join(mockIconsDir, 'DivineShield.png');
      fs.readdirSync.mockReturnValue([{ name: 'DivineShield.png', isFile: () => true, isDirectory: () => false }]);

      manager = new IconManager([mockIconsDir]);
      expect(manager.resolveIcon('Divine Shield')).toBe(expectedPath);
    });

    it('should find fuzzy match (case insensitive)', () => {
      const expectedPath = path.join(mockIconsDir, 'divineshield.png');
      fs.readdirSync.mockReturnValue([{ name: 'divineshield.png', isFile: () => true, isDirectory: () => false }]);

      manager = new IconManager([mockIconsDir]);
      expect(manager.resolveIcon('Divine Shield')).toBe(expectedPath);
    });

    it('should support multiple search directories', () => {
      const altDir = '/Users/mock/alt';
      fs.existsSync.mockImplementation((p) => {
        if (p === mockIconsDir) return true;
        if (p === altDir) return true;
        return false;
      });
      // Construct mocked file entries
      const mockFilesMain = {
        [mockIconsDir]: [],
        [altDir]: [{ name: 'RareIcon.png', isFile: () => true, isDirectory: () => false }]
      };

      fs.readdirSync.mockImplementation((dir) => mockFilesMain[dir] || []);

      const multiManager = new IconManager([mockIconsDir, altDir]);
      expect(multiManager.resolveIcon('RareIcon')).toBe(path.join(altDir, 'RareIcon.png'));
    });

    it('should support alias mapping', () => {
      const mapping = { 'Divine Shield': 'Bubble.png' };
      const expectedPath = path.join(mockIconsDir, 'Bubble.png');

      fs.readdirSync.mockReturnValue([{ name: 'Bubble.png', isFile: () => true, isDirectory: () => false }]);

      const aliasedManager = new IconManager([mockIconsDir], mapping);
      expect(aliasedManager.resolveIcon('Divine Shield')).toBe(expectedPath);
    });
  });
});
