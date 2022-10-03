const { database: db } = require("../configs/Db");

module.exports = function AddTodo(req, res) {
  // Manually create a valid entry
  const record = {
    title: req.body.todo.title,
    description: req.body.todo.description,
    completed: req.body.todo.completed,
    priority: req.body.todo.priority,
  };
  db.updateOne({email: req.userdata.email}, {
    $push: {
      todo: record,
    },
  })
    .then((e) => {
      if (e.matchedCount === 0) throw(e);
      return res.json({ success: true, message: "Added" });
    })
    .catch((e) => {
      console.log(e);
      res.status(400).json({ success: false, message: "Failed to add" });
    });
};
