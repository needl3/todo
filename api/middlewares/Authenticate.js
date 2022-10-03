const jwt = require("jsonwebtoken");
const {
  createRefreshToken,
  createAccessToken,
} = require("../utils/createToken");
module.exports.Authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.APP_SECRET, async (err, data) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          const user = db.findOne(data);
          const payload = {email: user.email}
          const newAccessToken = user.refreshToken;
          const newRefreshToken = await createRefreshToken(payload);
          await db.updateOne(user, {
            $set: {
              accessToken: newAccessToken,
              refreshToken: newRefreshToken,
            },
          });
          req.userdata = payload
          return next()
        }
        console.log(err.name, err.message)
        return res
          .status(400)
          .json({ success: false, message: "Not authorized" });
      } else {
        req.userdata = data;
        return next();
      }
    });
  } catch (e) {
    return res
      .status(400)
      .json({ success: false, message: "Missing access token" });
  }
};
