const db = require("../configs/Db").database;

module.exports = function Logout(req, res) {
  db.updateOne({email: req.userdata.email}, {
    $unset: {
      accessToken: "",
      refreshToken: "",
    },
  }).then((e) => {
    if (e.matchedCount === 0) raise("No record");
    else return res.json({ success: true, message: "Logged out" });
  }).catch(e=>console.log(e))
};
