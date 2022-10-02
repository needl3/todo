const jwt = require("jsonwebtoken")

module.exports.createAccessToken = async (payload) => {
    return await jwt.sign(payload, process.env.APP_SECRET, {expiresIn: '1d'})
}

module.exports.createRefreshToken = async (payload) => {
    return await jwt.sign(payload, process.env.APP_SECRET, {expiresIn: '2d'})
}