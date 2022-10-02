router = require("express").Router();

router.post("/login", require("./routes/Login"));
router.post("/register", require("./routes/Register"));
router.get("/verifyMail*", require("./routes/VerifyMail"));

module.exports = router;
