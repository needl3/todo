const router = require("express").Router();
const { Authenticate } = require("./middlewares/Authenticate");
router.post("/login", require("./routes/Login"));
router.post("/register", require("./routes/Register"));
router.get("/verifyMail*", require("./routes/VerifyMail"));
router.post("/logout", Authenticate, require("./routes/Logout"));

module.exports = router;
