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
            expect(manager.resolveIcon('NonExistent')).toBeNull();
        });

        it('should find exact match', () => {
            const expectedPath = path.join(mockIconsDir, 'Spell.png');
            fs.existsSync.mockImplementation((p) => p === expectedPath || p === mockIconsDir);

            expect(manager.resolveIcon('Spell.png')).toBe(expectedPath);
        });

        it('should find match with .png extension added', () => {
            const expectedPath = path.join(mockIconsDir, 'Spell.png');
            fs.existsSync.mockImplementation((p) => p === expectedPath || p === mockIconsDir);

            expect(manager.resolveIcon('Spell')).toBe(expectedPath);
        });

        it('should find fuzzy match (spaces removed)', () => {
            const expectedPath = path.join(mockIconsDir, 'DivineShield.png');
            fs.existsSync.mockImplementation((p) => p === expectedPath || p === mockIconsDir);
            fs.readdirSync.mockReturnValue(['DivineShield.png']);

            expect(manager.resolveIcon('Divine Shield')).toBe(expectedPath);
        });

        it('should find fuzzy match (case insensitive)', () => {
            const expectedPath = path.join(mockIconsDir, 'divineshield.png');
            fs.existsSync.mockImplementation((p) => p === expectedPath || p === mockIconsDir);
            fs.readdirSync.mockReturnValue(['divineshield.png']);

            expect(manager.resolveIcon('Divine Shield')).toBe(expectedPath);
        });

        it('should support multiple search directories', () => {
            const altDir = '/Users/mock/alt';
            fs.existsSync.mockImplementation((p) => {
                if (p === mockIconsDir) return true;
                if (p === altDir) return true;
                if (p === path.join(altDir, 'RareIcon.png')) return true;
                return false;
            });
            fs.readdirSync.mockReturnValue([]);

            const multiManager = new IconManager([mockIconsDir, altDir]);
            expect(multiManager.resolveIcon('RareIcon')).toBe(path.join(altDir, 'RareIcon.png'));
        });
        it('should support alias mapping', () => {
            const mapping = { 'Divine Shield': 'Bubble.png' };
            const aliasedManager = new IconManager([mockIconsDir], mapping);

            const expectedPath = path.join(mockIconsDir, 'Bubble.png');
            fs.existsSync.mockImplementation((p) => p === expectedPath || p === mockIconsDir);

            expect(aliasedManager.resolveIcon('Divine Shield')).toBe(expectedPath);
        });
    });
});
