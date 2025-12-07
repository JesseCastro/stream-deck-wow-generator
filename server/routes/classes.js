/**
 * Classes API routes
 * GET /api/classes - List all classes
 * GET /api/classes/:classId/specs - List specs for a class
 */

const express = require('express');
const router = express.Router();

const Classes = require('../../src/data/classes');

/**
 * GET /api/classes
 * Returns list of all available classes with their display names
 */
router.get('/', (req, res) => {
    const classes = Object.entries(Classes).map(([id, data]) => ({
        id,
        name: data.name || id,
        specs: Object.keys(data.specs || {})
    }));

    res.json({ classes });
});

/**
 * GET /api/classes/:classId/specs
 * Returns list of specs for a specific class
 */
router.get('/:classId/specs', (req, res) => {
    const { classId } = req.params;

    if (!Classes[classId]) {
        return res.status(404).json({ error: `Class not found: ${classId}` });
    }

    const classData = Classes[classId];
    const specs = Object.entries(classData.specs || {}).map(([id, data]) => ({
        id,
        name: data.name || id
    }));

    res.json({ specs });
});

module.exports = router;
