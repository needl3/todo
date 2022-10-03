const db = require("../configs/Db").database;

module.exports = function Logout(req, res){
  db.findOne({ email: req.userdata.email }).then((user) => {
    if (user === null) raise("No record found with that payload");
    db.updateOne(user, {$unset: {
        accessToken: "",
        refreshToken: ""
    }}).then(e=>{
        if(e.matchedCount === 0) raise("No record")
        else return res.json({success: true, message: "Logged out"})
    })
  }).catch(e=>{
        return res.status(404).json({success: false, message: "No record"})
  });
};
