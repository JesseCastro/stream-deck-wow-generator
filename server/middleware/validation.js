/**
 * Input validation middleware
 */

const path = require('path');

// Load class and race data from existing source
const Classes = require('../../src/data/classes');
const Races = require('../../src/data/races');

// Build allowlists from data
const VALID_CLASSES = Object.keys(Classes);
const VALID_RACES = Object.keys(Races);

/**
 * Get valid specs for a given class
 */
function getValidSpecs(classId) {
    if (!Classes[classId]) return [];
    return Object.keys(Classes[classId].specs || {});
}

/**
 * Validate generation request body
 */
function validateGenerateRequest(req, res, next) {
    const { classId, specId, raceId } = req.body;

    // Check all fields present
    if (!classId || !specId || !raceId) {
        return res.status(400).json({
            error: 'Missing required fields: classId, specId, raceId'
        });
    }

    // Check types
    if (typeof classId !== 'string' || typeof specId !== 'string' || typeof raceId !== 'string') {
        return res.status(400).json({
            error: 'Invalid field types. All fields must be strings.'
        });
    }

    // Validate against allowlists
    if (!VALID_CLASSES.includes(classId)) {
        return res.status(400).json({
            error: `Invalid class: ${classId}`
        });
    }

    const validSpecs = getValidSpecs(classId);
    if (!validSpecs.includes(specId)) {
        return res.status(400).json({
            error: `Invalid spec "${specId}" for class "${classId}"`
        });
    }

    if (!VALID_RACES.includes(raceId)) {
        return res.status(400).json({
            error: `Invalid race: ${raceId}`
        });
    }

    // Attach validated data to request
    req.validated = { classId, specId, raceId };
    next();
}

module.exports = {
    validateGenerateRequest,
    VALID_CLASSES,
    VALID_RACES,
    getValidSpecs
};
