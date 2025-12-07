/**
 * Generate API routes
 * POST /api/generate - Generate a profile
 * GET /api/generate/:id - Download generated files
 */

const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const { validateGenerateRequest } = require('../middleware/validation');
const generateWoW = require('../../src/generators/wow');
const { writeToDisk } = require('../../src/lib/writeToDisk');

// Store for tracking generated files (in-memory for simplicity)
const generatedFiles = new Map();

// Cleanup old files after 10 minutes
const CLEANUP_INTERVAL_MS = 10 * 60 * 1000;
const FILE_TTL_MS = 10 * 60 * 1000;

// Downloads directory
const DOWNLOADS_DIR = path.join(__dirname, '../downloads');

// Ensure downloads directory exists
if (!fs.existsSync(DOWNLOADS_DIR)) {
    fs.mkdirSync(DOWNLOADS_DIR, { recursive: true });
}

/**
 * POST /api/generate
 * Generate a Stream Deck profile for given class/spec/race
 */
router.post('/', validateGenerateRequest, async (req, res) => {
    const { classId, specId, raceId } = req.validated;

    try {
        // Generate using existing generator
        const args = ['--class', classId, '--spec', specId, '--race', raceId];
        const result = generateWoW(args);

        // Create unique ID for this generation
        const generationId = uuidv4();
        const outputDir = path.join(DOWNLOADS_DIR, generationId);
        fs.mkdirSync(outputDir, { recursive: true });

        // Write files to disk using the result's mainProfile/additionalProfiles
        const filenameBase = `${raceId}_${specId}_${classId}`;
        await writeToDisk(result, {
            outputDir,
            images: result.images,
            files: result.files
        });

        // Track for cleanup - use actual filenames from writeToDisk
        generatedFiles.set(generationId, {
            createdAt: Date.now(),
            dir: outputDir,
            files: {
                profile: 'WoW.streamDeckProfile',
                keybinds: 'keybinds.txt',
                lua: 'install_keybinds.lua'
            }
        });

        // Return download URLs
        res.json({
            success: true,
            generationId,
            downloads: {
                profile: `/api/generate/${generationId}/profile`,
                keybinds: `/api/generate/${generationId}/keybinds`,
                lua: `/api/generate/${generationId}/lua`
            }
        });

    } catch (error) {
        console.error('Generation error:', error);
        res.status(500).json({ error: 'Profile generation failed' });
    }
});

/**
 * GET /api/generate/:id/:type
 * Download a specific generated file
 */
router.get('/:id/:type', (req, res) => {
    const { id, type } = req.params;

    const generation = generatedFiles.get(id);
    if (!generation) {
        return res.status(404).json({ error: 'Generation not found or expired' });
    }

    const fileMap = {
        profile: generation.files.profile,
        keybinds: generation.files.keybinds,
        lua: generation.files.lua
    };

    const filename = fileMap[type];
    if (!filename) {
        return res.status(400).json({ error: 'Invalid file type' });
    }

    const filePath = path.join(generation.dir, filename);
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'File not found' });
    }

    res.download(filePath, filename);
});

/**
 * Cleanup old generated files
 */
function cleanupOldFiles() {
    const now = Date.now();
    for (const [id, data] of generatedFiles.entries()) {
        if (now - data.createdAt > FILE_TTL_MS) {
            try {
                fs.rmSync(data.dir, { recursive: true, force: true });
                generatedFiles.delete(id);
            } catch (e) {
                console.error('Cleanup error:', e.message);
            }
        }
    }
}

// Run cleanup every 10 minutes
setInterval(cleanupOldFiles, CLEANUP_INTERVAL_MS);

module.exports = router;
