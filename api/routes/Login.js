const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../configs/Db").database;
const {
  createAccessToken,
  createRefreshToken,
} = require("../utils/createToken");

const Login = async (req, res) => {
  const user = await db.findOne({ email: req.body.email });
  if (user !== null && await bcrypt.compare(req.body.password, user.password)) {
    const payload = { email: user.email };
    if (user.accessToken !== undefined && user.accessToken !== {}) {
      jwt.verify(
        user.accessToken,
        process.env.APP_SECRET,
        async (err, decoded) => {
          if (err) {
            const newAccessToken = user.refreshToken;
            const newRefreshToken = await createRefreshToken(payload);
            db.updateOne(user, {
              $set: {
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
              },
            }).then(e=>{
              if(e.modifiedCount === 0) return res.status(500).json({success: false, message: "Cannot login"})
              return res.json({ success: true, accessToken: newAccessToken });
            })
          } else {
            return res.json({ success: true, accessToken: user.accessToken });
          }
        }
      );
    } else {
      const token = await createAccessToken(payload);
      db.updateOne(user, {
        $set: {
          accessToken: token, 
          refreshToken: await createRefreshToken(payload),
        },
      }).then(e=>{
        if(e.modifiedCount === 0) return res.status(500).json({success: false, message: "Cannot login"})
        else res.json({success: true, accessToken: token})
      })
    }
  } else {
    return res
      .status(403)
      .json({ success: false, message: "Invalid credentials" });
  }
};

module.exports = Login;
