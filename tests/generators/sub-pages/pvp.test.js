/**
 * @fileoverview Tests for PvP Sub-Page Generator
 */

const GeneratePvPPage = require('../../../src/generators/sub-pages/pvp');
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

const GeneratePanicRow = require('../../../src/generators/panic-row');
const GenerateUniversalBar = require('../../../src/generators/universal-bar');

describe('PvPPageGenerator', () => {
  let mockKeybindManager;
  let mockIconManager;

  beforeEach(() => {
    mockKeybindManager = new KeybindManager();
    mockIconManager = new IconManager();
    mockKeybindManager.getKey.mockReturnValue('TEST_KEY');
    mockIconManager.resolveIcon.mockReturnValue('/mock/icon.png');
  });

  it('should generate 32 actions total', () => {
    const page = GeneratePvPPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
    expect(page).toHaveLength(32);
  });

  it('should have Back button at index 0', () => {
    const page = GeneratePvPPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
    expect(page[0].type).toBe('back');
  });

  it('should include Arena Targets (1-3)', () => {
    const page = GeneratePvPPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
    const t1 = page.find(a => a.name === 'Target Arena 1');
    const t2 = page.find(a => a.name === 'Target Arena 2');
    const t3 = page.find(a => a.name === 'Target Arena 3');
    expect(t1).toBeDefined();
    expect(t2).toBeDefined();
    expect(t3).toBeDefined();

    expect(t1.settings.macro).toBe('/target arena1');
  });

  it('should include Focus Arena Targets (1-3)', () => {
    const page = GeneratePvPPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
    const f1 = page.find(a => a.name === 'Focus Arena 1');
    expect(f1.settings.macro).toBe('/focus arena1');
  });

  it('should inherit Panic Row and Universal Bar', () => {
    GeneratePvPPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
    expect(GeneratePanicRow).toHaveBeenCalled();
    expect(GenerateUniversalBar).toHaveBeenCalled();
  });
});
