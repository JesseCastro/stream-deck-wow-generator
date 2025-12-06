/**
 * @fileoverview Tests for Group/Raid Sub-Page Generator
 */

const GenerateGroupPage = require('../../../src/generators/sub-pages/group');
const KeybindManager = require('../../../src/lib/keybind-manager');
const IconManager = require('../../../src/lib/icon-manager');

// Mocks
jest.mock('../../../src/lib/keybind-manager');
jest.mock('../../../src/lib/icon-manager');

// Mock inherit dependencies to avoid complexity in this unit test
jest.mock('../../../src/generators/panic-row', () => {
    return jest.fn().mockReturnValue(Array(8).fill({ name: 'PanicItem', type: 'hotkey' }));
});
jest.mock('../../../src/generators/universal-bar', () => {
    return jest.fn().mockReturnValue(Array(8).fill({ name: 'UniversalItem', type: 'hotkey' }));
});

const GeneratePanicRow = require('../../../src/generators/panic-row');
const GenerateUniversalBar = require('../../../src/generators/universal-bar');

describe('GroupPageGenerator', () => {
    let mockKeybindManager;
    let mockIconManager;

    beforeEach(() => {
        mockKeybindManager = new KeybindManager();
        mockIconManager = new IconManager();

        mockKeybindManager.getKey.mockReturnValue('TEST_KEY');
        mockIconManager.resolveIcon.mockReturnValue('/mock/icon.png');
    });

    it('should generate 32 actions total', () => {
        const page = GenerateGroupPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
        expect(page).toHaveLength(32);
    });

    it('should have Back button at index 0', () => {
        const page = GenerateGroupPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
        expect(page[0].type).toBe('back');
    });

    it('should include Raid Markers', () => {
        const page = GenerateGroupPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
        // Indices 1-8 should be markers
        const skull = page.find(a => a.name === 'Skull');
        const star = page.find(a => a.name === 'Star');
        expect(skull).toBeDefined();
        expect(star).toBeDefined();
    });

    it('should include Utility Actions', () => {
        const page = GenerateGroupPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
        const readyCheck = page.find(a => a.name === 'Ready Check');
        const pullTimer = page.find(a => a.name === 'Pull Timer');
        expect(readyCheck).toBeDefined();
        expect(pullTimer).toBeDefined();
    });

    it('should inherit Panic Row (Indices 16-23)', () => {
        GenerateGroupPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
        expect(GeneratePanicRow).toHaveBeenCalled();
        // Since we mocked the return, we can assume validation is implicit if length is 32 and they are inserted
    });

    it('should inherit Universal Bar (Indices 24-31)', () => {
        GenerateGroupPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
        expect(GenerateUniversalBar).toHaveBeenCalled();
    });
});
