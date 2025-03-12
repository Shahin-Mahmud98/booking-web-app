require('dotenv').config();
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET_KEY || "default_secret";

const verifyAdminToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Fixed token extraction

    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            console.error("JWT Verification Failed:", err.message);
            return res.status(403).json({ message: "Invalid credentials. Please log in again." });
        }
        req.user = user;
        next();
    });
};

module.exports = verifyAdminToken;
