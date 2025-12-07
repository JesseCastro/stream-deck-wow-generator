#!/usr/bin/env node
/**
 * Generate test profile with only 3 icons
 */

const IconManager = require('./src/lib/icon-manager');
const { generateTestProfile } = require('./src/generators/test-icons');
const { createProfile } = require('./src/lib/create-profile');
const path = require('path');

const iconManager = new IconManager(['Assets/Icons/WoW_Combined']);

const result = generateTestProfile(iconManager);

const outputPath = path.join(__dirname, 'Build', 'IconTest.streamDeckProfile');

createProfile(outputPath, result.mainProfile, result.additionalProfiles, result.images, result.files);

console.log('Test profile created:', outputPath);
console.log('Images included:', Array.from(result.images.keys()).join(', '));
