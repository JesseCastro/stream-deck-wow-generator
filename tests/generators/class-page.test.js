/**
 * @fileoverview Tests for Class Page Generator
 */

const GenerateClassPage = require('../../src/generators/class-page');
const Classes = require('../../src/data/classes');
const KeybindManager = require('../../src/lib/keybind-manager');
const IconManager = require('../../src/lib/icon-manager');

// Mocks
jest.mock('../../src/lib/keybind-manager');
jest.mock('../../src/lib/icon-manager');
jest.mock('../../src/generators/panic-row', () => {
  return jest.fn().mockReturnValue(Array(8).fill({ name: 'PanicItem', type: 'hotkey' }));
});
jest.mock('../../src/generators/universal-bar', () => {
  return jest.fn().mockReturnValue(Array(8).fill({ name: 'UniversalItem', type: 'hotkey' }));
});

jest.mock('../../src/data/classes', () => ({
  Paladin: {
    name: 'Paladin',
    specs: {
      Protection: {
        name: 'Protection',
        rotation: { 1: 'Shield of Righteousness', 4: 'Avenger\'s Shield' },
        panicRow: {}
      }
    }
  },
  Warrior: {
    name: 'Warrior',
    specs: {
      Arms: {
        name: 'Arms',
        rotation: {},
        panicRow: {}
      }
    }
  }
}));


const GeneratePanicRow = require('../../src/generators/panic-row');
const GenerateUniversalBar = require('../../src/generators/universal-bar');

describe('ClassPageGenerator', () => {
  let mockKeybindManager;
  let mockIconManager;

  beforeEach(() => {
    mockKeybindManager = new KeybindManager();
    mockIconManager = new IconManager();
    mockKeybindManager.getKey.mockReturnValue('TEST_KEY');
    mockIconManager.resolveIcon.mockReturnValue('/mock/icon.png');
  });

  it('should generate 32 actions', () => {
    const page = GenerateClassPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
    expect(page).toHaveLength(32);
  });

  it('should have Back button at index 0', () => {
    const page = GenerateClassPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
    expect(page[0].type).toBe('back');
  });

  it('should populate Rotation from data (Paladin Protection)', () => {
    const page = GenerateClassPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
    // From our injected data: 1: Shield of Righteousness
    expect(page[1].name).toBe('Shield of Righteousness');
    // 4: Avenger's Shield
    expect(page[4].name).toBe('Avenger\'s Shield');
  });

  it('should handle missing rotation data gracefully (Empty Shells)', () => {
    // Warrior Arms has no rotation data defined yet
    const page = GenerateClassPage('Warrior', 'Arms', 'Orc', mockKeybindManager, mockIconManager);
    expect(page).toHaveLength(32);
    // Slot 1 should be empty
    expect(page[1].type).toBe('empty');
  });

  it('should inherit Panic Row and Universal Bar', () => {
    GenerateClassPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
    expect(GeneratePanicRow).toHaveBeenCalled();
    expect(GenerateUniversalBar).toHaveBeenCalled();
  });

  it('should assign keys for rotation abilities', () => {
    GenerateClassPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
    expect(mockKeybindManager.getKey).toHaveBeenCalledWith('Avenger\'s Shield');
  });
});
