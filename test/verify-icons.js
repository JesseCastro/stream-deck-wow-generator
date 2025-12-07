#!/usr/bin/env node
/**
 * Automated Icon Verification Test
 * Extracts manifest from .streamDeckProfile and verifies ALL actions have icons
 * NO MORE FALSE "100% COMPLETE" CLAIMS
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PROFILE_PATH = path.join(__dirname, '../Build/WoW.streamDeckProfile');
const TEMP_DIR = path.join(os.tmpdir(), 'verify-icons-' + Date.now());

function verifyIconCoverage() {
    console.log('=== ICON VERIFICATION TEST ===\n');

    if (!fs.existsSync(PROFILE_PATH)) {
        console.error('❌ FAIL: Profile not found at', PROFILE_PATH);
        process.exit(1);
    }

    // Extract profile using system unzip
    if (!fs.existsSync(TEMP_DIR)) {
        fs.mkdirSync(TEMP_DIR, { recursive: true });
    }

    execSync(`unzip -o "${PROFILE_PATH}" -d "${TEMP_DIR}"`, { stdio: 'pipe' });

    // Find all manifest.json files
    function findManifests(dir) {
        const results = [];
        const items = fs.readdirSync(dir);

        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                results.push(...findManifests(fullPath));
            } else if (item === 'manifest.json') {
                results.push(fullPath);
            }
        }
        return results;
    }

    const manifestPaths = findManifests(TEMP_DIR);

    console.log(`Found ${manifestPaths.length} profiles to verify\n`);

    let totalActions = 0;
    let actionsWithIcons = 0;
    let missingIcons = [];

    manifestPaths.forEach(manifestPath => {
        const content = fs.readFileSync(manifestPath, 'utf8');
        const manifest = JSON.parse(content);
        const profileName = path.basename(path.dirname(manifestPath));

        const actions = manifest.Controllers?.[0]?.Actions || {};

        // Identify profile type by checking action titles
        const firstAction = Object.values(actions)[0];
        const firstTitle = firstAction?.States?.[0]?.Title || '';

        let profileType = 'Unknown';
        if (firstTitle === 'Game Menu') profileType = 'Main (WoW)';
        else if (firstTitle === 'Divine Shield' || firstTitle === 'Anti-Magic Shell') profileType = 'Group (with Panic)';
        else if (firstTitle === 'Shield of Righteousness') profileType = 'Class';
        else if (firstTitle === '') profileType = 'Consumables';

        console.log(`\n📁 ${profileType}`);
        console.log(`   Profile ID: ${profileName}`);

        let profileMissing = [];

        for (const [position, action] of Object.entries(actions)) {
            const state = action.States?.[0] || {};
            const title = state.Title || 'empty';
            const hasImage = !!state.Image;

            totalActions++;
            if (hasImage) {
                actionsWithIcons++;
            } else if (title !== 'empty') {
                // Only count missing if it's not an empty slot
                profileMissing.push({ position, title });
                missingIcons.push({ profile: profileType, position, title });
            }
        }

        if (profileMissing.length === 0) {
            console.log('   ✅ All icons present');
        } else {
            console.log(`   ❌ ${profileMissing.length} missing icons:`);
            profileMissing.forEach(m => {
                console.log(`      - ${m.position}: ${m.title}`);
            });
        }
    });

    console.log('\n=== SUMMARY ===');
    console.log(`Total actions: ${totalActions}`);
    console.log(`With icons: ${actionsWithIcons}`);
    console.log(`Missing icons: ${missingIcons.length}`);

    if (missingIcons.length === 0) {
        console.log('\n✅ PASS: 100% icon coverage verified');
        process.exit(0);
    } else {
        console.log('\n❌ FAIL: Missing icons detected');
        console.log('\nMissing icons detail:');
        missingIcons.forEach(m => {
            console.log(`  ${m.profile} @ ${m.position}: ${m.title}`);
        });
        process.exit(1);
    }
}

// Run verification
try {
    verifyIconCoverage();
} catch (error) {
    console.error('❌ ERROR:', error.message);
    process.exit(1);
}
