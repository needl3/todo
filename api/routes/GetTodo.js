const { database: db } = require("../configs/Db");

module.exports = function GetTodo(req, res) {
  try {
    db.findOne({ email: req.userdata.email }, { projection: { todo: 1 } }).then(
      (v) => {
        return res.json({ success: true, todo: v});
      }
    );
  } catch (e) {
    res.status(400).json({ success: false, message: "Cannot find that user" });
  }
};
