const jwt = require('jsonwebtoken')
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

const Protect = (req, res, next) => {
    const AuthHeader = req.headers["authorization"]
    const token = AuthHeader && AuthHeader.split(" ")[1]

    if (!token)
        return res.status(403).json({ message: "Token Missing" })

    jwt.verify(token, JWT_SECRET_KEY, (err, UserInfo) => {
        if (err)
            return res.status(401).json({ message: "Invalid Token" })
        req.user = UserInfo;
        next();
    })
}
module.exports = { Protect }