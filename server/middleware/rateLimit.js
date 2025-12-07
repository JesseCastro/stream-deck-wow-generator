/**
 * Rate limiting middleware configuration
 */

const rateLimit = require('express-rate-limit');

/**
 * Rate limit for profile generation - more restrictive
 * 10 requests per minute per IP
 */
const generateLimit = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 10,
    message: { error: 'Too many generation requests. Please wait a minute.' },
    standardHeaders: true,
    legacyHeaders: false
});

/**
 * Rate limit for general API endpoints - less restrictive
 * 60 requests per minute per IP
 */
const apiLimit = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 60,
    message: { error: 'Too many requests. Please slow down.' },
    standardHeaders: true,
    legacyHeaders: false
});

module.exports = {
    generateLimit,
    apiLimit
};
