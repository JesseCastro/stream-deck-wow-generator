const { topLevelManifest, profile } = require('../../src/lib/profile');

describe('Profile Library', () => {
    describe('topLevelManifest', () => {
        it('should include main profile and all additional profiles in Pages list', () => {
            const main = profile({ name: 'Main', actions: [] });
            const sub1 = profile({ name: 'Sub1', actions: [] });
            const sub2 = profile({ name: 'Sub2', actions: [] });

            const manifest = topLevelManifest(main, [sub1, sub2]);

            expect(manifest.Pages.Pages).toHaveLength(3);
            expect(manifest.Pages.Pages).toContain(main.uuid);
            expect(manifest.Pages.Pages).toContain(sub1.uuid);
            expect(manifest.Pages.Pages).toContain(sub2.uuid);
        });

        it('should default to just main profile if no additional profiles provided', () => {
            const main = profile({ name: 'Main', actions: [] });
            const manifest = topLevelManifest(main);

            expect(manifest.Pages.Pages).toHaveLength(1);
            expect(manifest.Pages.Pages[0]).toBe(main.uuid);
        });
    });
});
