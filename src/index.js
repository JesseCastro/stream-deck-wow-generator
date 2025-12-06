#!/usr/bin/env node
/**
 * @fileoverview Stream Deck Profile Generator CLI
 */

const path = require('path');
const { writeToDisk } = require('./lib/writeToDisk');

async function main() {
    const args = process.argv.slice(2);
    let generatorName = args[0] || 'wow';
    if (generatorName.startsWith('-')) generatorName = 'wow';

    try {
        const generatorPath = path.join(__dirname, 'generators', `${generatorName}.js`);
        console.log(`Loading generator: ${generatorPath}`);

        const generator = require(generatorPath);
        const result = generator(args);

        await writeToDisk(result, {
            images: result.images || {},
            files: result.files || {}
        });

    } catch (err) {
        console.error('Error:', err.message);
        process.exit(1);
    }
}

main();
