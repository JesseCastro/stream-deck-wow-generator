/**
 * WoW Stream Deck Generator - Backend API Server
 * @description Express server providing REST API for profile generation
 */

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

const classesRouter = require('./routes/classes');
const racesRouter = require('./routes/races');
const generateRouter = require('./routes/generate');
const rateLimitMiddleware = require('./middleware/rateLimit');

const app = express();
const PORT = process.env.PORT || 4000;

// Security middleware
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

// Body parsing
app.use(express.json({ limit: '1kb' })); // Tiny limit - we only accept class/spec/race

// Rate limiting
app.use('/api/generate', rateLimitMiddleware.generateLimit);
app.use('/api', rateLimitMiddleware.apiLimit);

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', version: '2.0.0' });
});

// API Routes
app.use('/api/classes', classesRouter);
app.use('/api/races', racesRouter);
app.use('/api/generate', generateRouter);

// Static file serving for downloads
app.use('/downloads', express.static(path.join(__dirname, 'downloads')));

// Error handling
app.use((err, req, res, next) => {
    console.error('Server error:', err.message);
    res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

// Start server (only if not in test mode)
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`🎮 WoW Stream Deck API running on port ${PORT}`);
    });
}

module.exports = app;
