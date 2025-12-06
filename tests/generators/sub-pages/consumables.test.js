/**
 * @fileoverview Tests for Consumables Sub-Page Generator
 */

const GenerateConsumablesPage = require('../../../src/generators/sub-pages/consumables');
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

describe('ConsumablesPageGenerator', () => {
    let mockKeybindManager;
    let mockIconManager;

    beforeEach(() => {
        mockKeybindManager = new KeybindManager();
        mockIconManager = new IconManager();
        mockKeybindManager.getKey.mockReturnValue('TEST_KEY');
        mockIconManager.resolveIcon.mockReturnValue('/mock/icon.png');
    });

    it('should generate 32 actions', () => {
        const page = GenerateConsumablesPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
        expect(page).toHaveLength(32);
    });

    it('should include Food & Drink', () => {
        const page = GenerateConsumablesPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
        expect(page.find(a => a.name === 'Food')).toBeDefined();
        expect(page.find(a => a.name === 'Drink')).toBeDefined();
    });

    it('should include Flask and Runes', () => {
        const page = GenerateConsumablesPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
        expect(page.find(a => a.name === 'Flask')).toBeDefined();
        expect(page.find(a => a.name === 'Rune')).toBeDefined();
    });

    it('should include Utility Items', () => {
        const page = GenerateConsumablesPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
        expect(page.find(a => a.name === 'Glider')).toBeDefined();
        expect(page.find(a => a.name === 'Drums')).toBeDefined();
    });
});
