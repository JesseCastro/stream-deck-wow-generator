/**
 * @fileoverview Tests for ID generation utilities
 */

const { actionId, profileId, profileFolderId, uuidV4 } = require('../src/lib/ids');

describe('ID Utilities', () => {
  describe('actionId', () => {
    it('should return a static zero UUID', () => {
      expect(actionId()).toBe('00000000-0000-0000-0000-000000000000');
    });
  });

  describe('profileId', () => {
    it('should return a valid UUID v4', () => {
      const id = profileId();
      expect(id).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
      );
    });

    it('should return unique IDs on each call', () => {
      const id1 = profileId();
      const id2 = profileId();
      expect(id1).not.toBe(id2);
    });
  });

  describe('profileFolderId', () => {
    it('should convert UUID to base32-ish folder ID', () => {
      const uuid = '12345678-1234-1234-1234-123456789abc';
      const folderId = profileFolderId(uuid);
      expect(folderId).toMatch(/^[A-Z0-9]+Z$/);
    });

    it('should end with Z', () => {
      const uuid = uuidV4();
      const folderId = profileFolderId(uuid);
      expect(folderId.endsWith('Z')).toBe(true);
    });
  });

  describe('uuidV4', () => {
    it('should have correct version (4)', () => {
      const id = uuidV4();
      expect(id[14]).toBe('4');
    });

    it('should have correct variant (8, 9, a, or b)', () => {
      const id = uuidV4();
      expect(['8', '9', 'a', 'b']).toContain(id[19]);
    });
  });
});
