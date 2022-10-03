const router = require("express").Router();
const { Authenticate } = require("./middlewares/Authenticate");

router.post("/login", require("./routes/Login"));
router.post("/register", require("./routes/Register"));
router.get("/verifyMail*", require("./routes/VerifyMail"));
router.post("/logout", Authenticate, require("./routes/Logout"));
router.post("/add", Authenticate, require("./routes/AddTodo"));
router.delete("/remove", Authenticate, require("./routes/RemoveTodo"));
router.patch("/update", Authenticate, require("./routes/UpdateTodo"));
router.delete("/delete", Authenticate, require("./routes/Delete"));

module.exports = router;
