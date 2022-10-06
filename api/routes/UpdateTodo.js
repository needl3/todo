const { database: db } = require("../configs/Db");

module.exports = function UpdateTodo(req, res) {
  // Manually create a valid entry
  // To make sure no funky business goes on todo entry
  const record = {
    title: req.body.title,
    description: req.body.description,
    checked: req.body.checked,
    id: req.body.id,
  };
  //
  // There is probably more efficient method to do this
  // By only sending changed field from front
  // Validating then updating only those
  //
  db.updateOne(
    {
      email: req.userdata.email,
      "todo.id": record.id,
    },
    {
      $set: { "todo.$": record },
    }
  )
    .then((e) => {
      if (e.modifiedCount === 0) throw e;
      return res.json({ success: true, message: "Updated" });
    })
    .catch((e) => {
      console.log(e);
      res.status(400).json({ success: false, message: "Falied to Update" });
    });
};
