const { database: db } = require("../configs/Db");

module.exports = function GetUser(req, res) {
  try {
    db.findOne({ email: req.userdata.email }, { projection: { name : 1 } }).then(
      (v) => {
        return res.json({ success: true, data: v});
      }
    );
  } catch (e) {
    res.status(400).json({ success: false, message: "Cannot find that user" });
  }
};
