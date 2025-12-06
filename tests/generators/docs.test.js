/**
 * @fileoverview Tests for Docs Generator
 */

const GenerateDocs = require('../../src/generators/docs');
const GenerateMatrix = require('../../src/generators/matrix');

describe('DocsGenerator', () => {
    it('should generate instructions including class name', () => {
        const doc = GenerateDocs('Paladin', 'Protection', 'Tauren');
        expect(doc).toContain('Paladin');
        expect(doc).toContain('Protection');
        expect(doc).toContain('Tauren');
        expect(doc).toContain('keybinds.txt');
    });
});

describe('MatrixGenerator', () => {
    it('should generate a markdown table for multiple profiles', () => {
        const profiles = [
            { class: 'Paladin', spec: 'Protection', race: 'Tauren', file: 'Paladin_Protection_Tauren.streamDeckProfile' },
            { class: 'Warrior', spec: 'Arms', race: 'Orc', file: 'Warrior_Arms_Orc.streamDeckProfile' }
        ];

        const md = GenerateMatrix(profiles);

        // Header
        expect(md).toContain('| Class | Spec | Race | Download Link |');

        // Rows
        expect(md).toContain('| Paladin | Protection | Tauren | [Download](Paladin_Protection_Tauren.streamDeckProfile) |');
        expect(md).toContain('| Warrior | Arms | Orc | [Download](Warrior_Arms_Orc.streamDeckProfile) |');
    });
});
