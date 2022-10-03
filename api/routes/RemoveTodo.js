const { database: db } = require("../configs/Db");

module.exports = function RemoveTodo(req, res) {
  db.updateOne(
    { email: req.userdata.email },
    {
      $pull: {
        todo: { _id: { $eq: req.body.arrayId } },
      },
    }
  )
    .then((e) => {
      if (e.modifiedCount=== 0) throw e;
      return res.json({ success: true, message: "Removed" });
    })
    .catch((e) => {
      console.log(e);
      res.status(400).json({ success: false, message: "Failed to remove" });
    });
};