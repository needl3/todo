const router = require("express").Router();
const { Authenticate } = require("./middlewares/Authenticate");

router.post("/login", require("./routes/Login"));
router.post("/register", require("./routes/Register"));
router.get("/verifyMail*", require("./routes/VerifyMail"));
router.get("/user", Authenticate, require("./routes/GetUser"));
router.delete("/logout", Authenticate, require("./routes/Logout"));
router.post("/todo", Authenticate, require("./routes/AddTodo"));
router.get("/todo", Authenticate, require("./routes/GetTodo"));
router.delete("/todo", Authenticate, require("./routes/RemoveTodo"));
router.patch("/todo", Authenticate, require("./routes/UpdateTodo"));
router.delete("/delete", Authenticate, require("./routes/Delete"));

module.exports = router;
