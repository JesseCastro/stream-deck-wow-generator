/**
 * @fileoverview Tests for Panic Row Generator
 */

const GeneratePanicRow = require('../../src/generators/panic-row');
const Classes = require('../../src/data/classes');
const Races = require('../../src/data/races');
const KeybindManager = require('../../src/lib/keybind-manager');
const IconManager = require('../../src/lib/icon-manager');

// Mocks
jest.mock('../../src/lib/keybind-manager');
jest.mock('../../src/lib/icon-manager');

describe('PanicRowGenerator', () => {
  let mockKeybindManager;
  let mockIconManager;

  beforeEach(() => {
    mockKeybindManager = new KeybindManager();
    mockIconManager = new IconManager();

    mockKeybindManager.getKey.mockReturnValue('TEST_KEY');
    mockIconManager.resolveIcon.mockReturnValue('/mock/icon.png');
  });

  it('should generate 8 actions for Paladin Protection Tauren', () => {
    const row = GeneratePanicRow('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
    expect(row).toHaveLength(8);

    // Slot 1: Divine Shield (from Classes.js)
    expect(row[0].name).toBe('Divine Shield');
    // Slot 7: War Stomp (Racial injection)
    expect(row[6].name).toBe('War Stomp');
  });

  it('should handle [No Interrupt] by returning empty action', () => {
    // Priest Holy has [No Interrupt] at slot 6
    const row = GeneratePanicRow('Priest', 'Holy', 'Human', mockKeybindManager, mockIconManager);

    const interruptSlot = row[5]; // Index 5 is Slot 6
    // Determine behavior: Empty object? Or name 'Empty'?
    // Let's assume name is '[No Interrupt]' but type is 'noop' or similar, OR just treat it as empty.
    // For now, let's look for type 'empty' or similar if we define it, otherwise just check the name.
    expect(interruptSlot.name).toMatch(/No Interrupt/);
  });

  it('should register keys for abilities', () => {
    mockKeybindManager.getKey.mockReturnValue(null);
    GeneratePanicRow('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);

    expect(mockKeybindManager.assignKey).toHaveBeenCalledWith('Divine Shield');
    expect(mockKeybindManager.assignKey).toHaveBeenCalledWith('War Stomp');
  });

  it('should resolve icons', () => {
    GeneratePanicRow('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
    expect(mockIconManager.resolveIcon).toHaveBeenCalledWith('Divine Shield');
    expect(mockIconManager.resolveIcon).toHaveBeenCalledWith('War Stomp');
  });

  it('should throw error if class/spec/race invalid', () => {
    expect(() => {
      GeneratePanicRow('InvalidClass', 'Spec', 'Race', mockKeybindManager, mockIconManager);
    }).toThrow();
  });
});
