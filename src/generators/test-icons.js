/**
 * Minimal test profile - just 3 icons to diagnose the issue
 */

const { profile } = require('../lib/profile');
const { gridify } = require('../lib/grid');
const path = require('path');
const fs = require('fs');

function generateTestProfile(iconManager) {
    const actions = [
        {
            type: 'hotkey',
            name: 'Nameplates',
            defaultKey: 'V',
            settings: { icon: 'Nameplates' }
        },
        {
            type: 'hotkey',
            name: 'Zoom Out',
            defaultKey: 'Shift+Z',
            settings: { icon: 'Zoom Out' }
        },
        {
            type: 'hotkey',
            name: 'Repair Mount',
            defaultKey: 'Ctrl+M',
            settings: { icon: 'Repair Mount' }
        }
    ];

    const grid = gridify(actions, 'IconTest');
    const testProfile = profile({ name: 'IconTest', actions: grid, uuid: '00000000-0000-0000-0000-000000000001' });

    // Track which images we need
    const usedImages = new Map();

    actions.forEach(action => {
        if (action.settings?.icon) {
            const resolved = iconManager.resolveIcon(action.settings.icon);
            if (resolved) {
                const basename = path.basename(resolved);
                if (!usedImages.has(basename)) {
                    usedImages.set(basename, resolved);
                }
            }
        }
    });

    return {
        mainProfile: testProfile,
        additionalProfiles: [],
        images: usedImages,
        files: {
            'README.txt': 'Test profile with 3 icons: Nameplates, Zoom Out, Repair Mount'
        }
    };
}

module.exports = { generateTestProfile };
