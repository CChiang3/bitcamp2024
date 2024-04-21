const jwt = require("jsonwebtoken");

async function requireAuth(req, res, next) {
    let token = req.headers.authorization;

    if (!token) {
        return res.send(401);
    }

    token = token.replace("Bearer ", "");
    try {
        req.user = await jwt.verify(token, process.env.JWT_SECRET);

        return next();
    } catch (error) {
        return next(error);
    }
}

module.exports = requireAuth;
