/**
 * @fileoverview Tests for Mounts Sub-Page Generator
 */

const GenerateMountsPage = require('../../../src/generators/sub-pages/mounts');
const KeybindManager = require('../../../src/lib/keybind-manager');
const IconManager = require('../../../src/lib/icon-manager');

// Mocks
jest.mock('../../../src/lib/keybind-manager');
jest.mock('../../../src/lib/icon-manager');
jest.mock('../../../src/generators/panic-row', () => {
    return jest.fn().mockReturnValue(Array(8).fill({ name: 'PanicItem', type: 'hotkey' }));
});
jest.mock('../../../src/generators/universal-bar', () => {
    return jest.fn().mockReturnValue(Array(8).fill({ name: 'UniversalItem', type: 'hotkey' }));
});

describe('MountsPageGenerator', () => {
    let mockKeybindManager;
    let mockIconManager;

    beforeEach(() => {
        mockKeybindManager = new KeybindManager();
        mockIconManager = new IconManager();
        mockKeybindManager.getKey.mockReturnValue('TEST_KEY');
        mockIconManager.resolveIcon.mockReturnValue('/mock/icon.png');
    });

    it('should generate 32 actions', () => {
        const page = GenerateMountsPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
        expect(page).toHaveLength(32);
    });

    it('should include Repair Mount', () => {
        const page = GenerateMountsPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
        expect(page.find(a => a.name === 'Repair Mount')).toBeDefined();
    });

    it('should include Random Favorite', () => {
        const page = GenerateMountsPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
        expect(page.find(a => a.name === 'Random Favorite')).toBeDefined();
    });
});
