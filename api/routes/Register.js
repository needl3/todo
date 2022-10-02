const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendVerifyMailEmail = require("../utils/Mail");
const Register = async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const token = await jwt.sign(
      { email: req.body.email, token: hash },
      process.env.APP_SECRET,
      { expiresIn: 300 }
    );
    sendVerifyMailEmail(req.body.email, token);
    return res.json({ success: true, message: "Verification email sent" });
  } catch (e) {
    console.log(e);
    return res.json({ success: false, message: "Error while sending email" });
  }
};

module.exports = Register;
