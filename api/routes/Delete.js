const db = require("../configs/Db").database;
//
// Poor security design
// Make user to login one again
// Then redirect to delete account
//
module.exports = function Delete(req, res) {
  db.findOne({ email: req.userdata.email })
    .then((user) => {
      if (user === null) raise("No record found with that payload");
      db.deleteOne(user).then((e) => {
        if (e.matchedCount === 0) raise("Cant remove user");
        else return res.json({ success: true, message: "Deleted user" });
      });
    })
    .catch((e) => {
      console.log(e);
      return res
        .status(404)
        .json({ success: false, message: "Can't delete user" });
    });
};
