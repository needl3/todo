const jwt = require("jsonwebtoken");
const database = require("../configs/Db").database;

const VerifyMail = (req, res) => {
  jwt.verify(req.query.token, process.env.APP_SECRET, (err, decoded) => {
    if (err) {
      if (err.name == "TokenExpiredError")
        return res
          .status(498)
          .json({ success: false, message: "Expired Token" });
      else if (err.name == "JsonWebTokenError")
        return res
          .status(498)
          .json({ success: false, message: "Invalid Token" });
    } else {
      database.insertOne({
        name: decoded.name,
        email: decoded.email,
        password: decoded.token,
        todo: [],
      });
      return res.json({ success: true, message: "Verified" });
    }
  });
};

module.exports = VerifyMail;
