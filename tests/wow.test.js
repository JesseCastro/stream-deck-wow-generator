/**
 * @fileoverview Tests for WoW profile generator
 */

const path = require('path');
const generate = require('../src/generators/wow');

describe('WoW Profile Generator', () => {
    let result;

    beforeAll(() => {
        result = generate([]);
    });

    describe('mainProfile', () => {
        it('should have a name of "WoW"', () => {
            expect(result.mainProfile.name).toBe('WoW');
        });

        it('should have a valid UUID', () => {
            expect(result.mainProfile.uuid).toMatch(
                /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
            );
        });

        it('should have a manifest with Controllers', () => {
            expect(result.mainProfile.manifest).toHaveProperty('Controllers');
            expect(result.mainProfile.manifest.Controllers).toBeInstanceOf(Array);
            expect(result.mainProfile.manifest.Controllers[0].Type).toBe('Keypad');
        });
    });

    describe('additionalProfiles', () => {
        it('should include Paladin profile', () => {
            const paladin = result.additionalProfiles.find(p => p.name === 'Paladin');
            expect(paladin).toBeDefined();
        });

        it('should include Crafting profile', () => {
            const crafting = result.additionalProfiles.find(p => p.name === 'Crafting');
            expect(crafting).toBeDefined();
        });

        it('should have valid UUIDs for all profiles', () => {
            result.additionalProfiles.forEach(profile => {
                expect(profile.uuid).toMatch(
                    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
                );
            });
        });
    });

    describe('images', () => {
        it('should have image mappings for WoW profile', () => {
            expect(result.images).toHaveProperty('WoW');
        });

        it('should resolve to absolute paths', () => {
            const wowImages = result.images['WoW'] || {};
            Object.values(wowImages).forEach(imagePath => {
                expect(path.isAbsolute(imagePath)).toBe(true);
            });
        });
    });
});
