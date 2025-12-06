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
        const rows = GenerateMainPage(mockKeybindManager, mockIconManager);
        expect(rows).toHaveLength(16);
    });

    it('should have correct Folders in Row 1', () => {
        const rows = GenerateMainPage(mockKeybindManager, mockIconManager);
        const row1 = rows.slice(0, 8);

        expect(row1[0].name).toBe('Class');
        expect(row1[0].type).toBe('folder');

        expect(row1[1].name).toBe('Group/Raid');
        expect(row1[2].name).toBe('PvP');
        expect(row1[3].name).toBe('Social');
        expect(row1[4].name).toBe('Professions');
        expect(row1[5].name).toBe('Mounts');
        expect(row1[6].name).toBe('Consumables');
        expect(row1[7].name).toBe('Nameplates'); // Action, not folder usually? Requirements say "Nameplates".
    });

    it('should have correct Actions in Row 2', () => {
        const rows = GenerateMainPage(mockKeybindManager, mockIconManager);
        const row2 = rows.slice(8, 16);

        expect(row2[0].name).toBe('Friendly Plates');
        expect(row2[1].name).toBe('Zoom In');
        expect(row2[2].name).toBe('Zoom Out');
        expect(row2[3].name).toBe('Toggle UI');
        expect(row2[4].name).toBe('Invite Target');
        expect(row2[5].name).toBe('Leave Group');
        expect(row2[6].name).toBe('Pet Attack');
        expect(row2[7].name).toBe('Spare');
    });

    it('should resolve icons for actions', () => {
        GenerateMainPage(mockKeybindManager, mockIconManager);
        expect(mockIconManager.resolveIcon).toHaveBeenCalledWith('Class');
        expect(mockIconManager.resolveIcon).toHaveBeenCalledWith('Pet Attack');
    });
});
