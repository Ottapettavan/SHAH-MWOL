function validateApiKey(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    if (apiKey === process.env.VALID_API_KEY) {
        next();
    } else {
        res.status(403).json({ error: 'Invalid API Key' });
    }
}
module.exports = validateApiKey;
