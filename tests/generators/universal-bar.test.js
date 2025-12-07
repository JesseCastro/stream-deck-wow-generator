/**
 * @fileoverview Tests for UniversalBarGenerator
 */

const GenerateUniversalBar = require('../../src/generators/universal-bar');
const KeybindManager = require('../../src/lib/keybind-manager');
const IconManager = require('../../src/lib/icon-manager');

// Mocks
jest.mock('../../src/lib/keybind-manager');
jest.mock('../../src/lib/icon-manager');

describe('UniversalBarGenerator', () => {
  let mockKeybindManager;
  let mockIconManager;

  beforeEach(() => {
    mockKeybindManager = new KeybindManager();
    mockIconManager = new IconManager();

    // Setup default mocks
    mockKeybindManager.getKey.mockImplementation((action) => {
      if (action === 'World Map') return 'Shift+M';
      if (action === 'Hearthstone') return 'F12';
      return 'TEST_KEY';
    });

    mockIconManager.resolveIcon.mockImplementation((name) => {
      return `/mock/path/${name}`;
    });
  });

  it('should generate exactly 8 actions', () => {
    const bar = GenerateUniversalBar(mockKeybindManager, mockIconManager);
    expect(bar).toHaveLength(8);
  });

  it('should have correct actions in order', () => {
    const bar = GenerateUniversalBar(mockKeybindManager, mockIconManager);
    const actionNames = bar.map(a => a.name);

    const expectedOrder = [
      'Mount',
      'World Map',
      'Interact',
      'Open Bags',
      'Autorun',
      'Toggle Quest',
      'Health Potion',
      'Hearthstone'
    ];

    expect(actionNames).toEqual(expectedOrder);
  });

  it('should assign keybinds using the manager', () => {
    const bar = GenerateUniversalBar(mockKeybindManager, mockIconManager);
    const mapAction = bar.find(a => a.name === 'World Map');

    expect(mapAction.settings.hotkey).toBe('Shift+M');
    expect(mockKeybindManager.getKey).toHaveBeenCalledWith('World Map');
  });

  it('should resolve icons using the manager', () => {
    const bar = GenerateUniversalBar(mockKeybindManager, mockIconManager);
    const mountAction = bar.find(a => a.name === 'Mount');

    expect(mountAction.settings.icon).toBe('/mock/path/Mount');
    expect(mockIconManager.resolveIcon).toHaveBeenCalledWith('Mount');
  });

  it('should register default key if action is unknown to manager', () => {
    // return null for 'Mount', forcing the generator to try to register 'M'
    mockKeybindManager.getKey.mockReturnValue(null);

    GenerateUniversalBar(mockKeybindManager, mockIconManager);

    expect(mockKeybindManager.registerKey).toHaveBeenCalledWith('Mount', 'M', true);
    expect(mockKeybindManager.registerKey).toHaveBeenCalledWith('Open Bags', 'B', true);
    expect(mockKeybindManager.registerKey).toHaveBeenCalledWith('Autorun', 'NUM_LOCK', true);
  });
});
