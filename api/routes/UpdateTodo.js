const { database: db } = require("../configs/Db");

module.exports = function UpdateTodo(req, res) {
  // Manually create a valid entry
  // To make sure no funky business goes on todo entry
  const record = {
    title: req.body.todo.title,
    description: req.body.todo.description,
    completed: req.body.todo.completed,
    priority: req.body.todo.priority,
    _id: req.body.todo.timeStamp,
  };
  //
  // There is probably more effecient method to do this
  // By only sending changed field from front
  // Validating then updating only those
  //
  db.updateOne(
    {
      email: req.userdata.email,
      "todo._id": req.body.todo.timeStamp,
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
