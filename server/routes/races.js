/**
 * Races API routes
 * GET /api/races - List all races
 */

const express = require('express');
const router = express.Router();

const Races = require('../../src/data/races');

/**
 * GET /api/races
 * Returns list of all available races
 */
router.get('/', (req, res) => {
    const races = Object.entries(Races).map(([id, data]) => ({
        id,
        name: data.name || id,
        faction: data.faction || 'neutral'
    }));

    res.json({ races });
});

module.exports = router;
