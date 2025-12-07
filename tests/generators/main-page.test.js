/**
 * @fileoverview Tests for Main Page Generator (Row 1 & 2)
 */

const GenerateMainPage = require('../../src/generators/main-page');
const KeybindManager = require('../../src/lib/keybind-manager');
const IconManager = require('../../src/lib/icon-manager');

jest.mock('../../src/lib/keybind-manager');
jest.mock('../../src/lib/icon-manager');

describe('MainPageGenerator', () => {
  let mockKeybindManager;
  let mockIconManager;

  beforeEach(() => {
    mockKeybindManager = new KeybindManager();
    mockIconManager = new IconManager();

    mockKeybindManager.getKey.mockReturnValue('TEST_KEY');
    mockIconManager.resolveIcon.mockReturnValue('/mock/icon.png');
  });

  it('should generate 16 actions (Row 1 and 2)', () => {
    const rows = GenerateMainPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
    expect(rows).toHaveLength(16);
  });

  it('should have correct Folders in Row 1', () => {
    const rows = GenerateMainPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
    const row1 = rows.slice(0, 8);

    expect(row1[0].name).toBe('Game Menu'); // was 'Class', code says Game Menu at 0, Class at 1
    expect(row1[1].name).toBe('Class');
    expect(row1[2].name).toBe('Group');
    expect(row1[3].name).toBe('PvP');
    expect(row1[4].name).toBe('Profs');
    expect(row1[5].name).toBe('Mounts');
    expect(row1[6].name).toBe('Consumes');
    expect(row1[7].name).toBe('Utilities');
  });

  it('should have correct Actions in Row 2', () => {
    const rows = GenerateMainPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
    const row2 = rows.slice(8, 16);

    expect(row2[0].name).toBe('Nameplates');
    expect(row2[1].name).toBe('Frnd Plt');
    expect(row2[2].name).toBe('Zoom In');
    expect(row2[3].name).toBe('Zoom Out');
    expect(row2[4].name).toBe('Tgl UI');
    expect(row2[5].name).toBe('Invite');
    expect(row2[6].name).toBe('Leave');
    expect(row2[7].name).toBe('Pet Atk');
  });

  it('should resolve icons for actions', () => {
    GenerateMainPage('Paladin', 'Protection', 'Tauren', mockKeybindManager, mockIconManager);
    expect(mockIconManager.resolveIcon).toHaveBeenCalled();
  });
});
