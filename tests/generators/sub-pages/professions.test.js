/**
 * @fileoverview Tests for Professions Sub-Page Generator
 */

const GenerateProfessionsPage = require('../../../src/generators/sub-pages/professions');
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

describe('ProfessionsPageGenerator', () => {
  let mockKeybindManager;
  let mockIconManager;

  beforeEach(() => {
    mockKeybindManager = new KeybindManager();
    mockIconManager = new IconManager();
    mockKeybindManager.getKey.mockReturnValue('TEST_KEY');
    mockIconManager.resolveIcon.mockReturnValue('/mock/icon.png');
  });

  it('should generate 32 actions', () => {
    const page = GenerateProfessionsPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
    expect(page).toHaveLength(32);
  });

  it('should include Primary Professions placeholders', () => {
    const page = GenerateProfessionsPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
    expect(page.find(a => a.name === 'Profession 1')).toBeDefined();
    expect(page.find(a => a.name === 'Profession 2')).toBeDefined();
  });

  it('should include Secondary Professions', () => {
    const page = GenerateProfessionsPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
    expect(page.find(a => a.name === 'Cooking')).toBeDefined();
    expect(page.find(a => a.name === 'Fishing')).toBeDefined();
    expect(page.find(a => a.name === 'Archaeology')).toBeDefined();
  });

  it('should include Utilities (Campfire)', () => {
    const page = GenerateProfessionsPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
    expect(page.find(a => a.name === 'Campfire')).toBeDefined();
  });
});
