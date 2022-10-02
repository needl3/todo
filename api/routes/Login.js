const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../configs/Db").database;
const {
  createAccessToken,
  createRefreshToken,
} = require("../utils/createToken");

const Login = async (req, res) => {
  const user = await db.findOne({ email: req.body.email });
  const payload = { email: user.email };
  if (await bcrypt.compare(req.body.password, user.password)) {
    if (user.accessToken !== undefined && user.accessToken !== {}) {
      jwt.verify(
        user.accessToken,
        process.env.APP_SECRET,
        async (err, decoded) => {
          if (err) {
            const newAccessToken = user.refreshToken;
            const newRefreshToken = await createRefreshToken(payload);
            await db.updateOne(user, {
              $set: {
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
              },
            });
            return res.json({ success: true, accessToken: newAccessToken });
          } else {
            return res.json({ success: true, accessToken: user.accessToken });
          }
        }
      );
    } else {
      await db.updateOne(user, {
        $set: {
          accessToken: await createAccessToken(payload),
          refreshToken: await createRefreshToken(payload),
        },
      });
    }
  } else {
    return res
      .status(403)
      .json({ success: false, message: "Invalid credentials" });
  }
};

module.exports = Login;
