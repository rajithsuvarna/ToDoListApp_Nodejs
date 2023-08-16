//importing the task model
const Task = require("../models/task");

//function to fetch the data from the database and display in the browser
module.exports.home = function (req, res) {
  Task.find({})
    .then((tasks) => {
      return res.render("home", { title: "ToDo List App", Task_List: tasks });
    })
    .catch((err) => console.log("ERROR", err));
};

//function to create the task and send data to the database
module.exports.createtask = function (req, res) {
  let Dateval = req.body.datevalue;
  let newDate = Dateval.slice(0, 10);
  Task.create({
    description: req.body.description,
    category: req.body.category,
    datevalue: newDate,
  })
    .then((newTask) => {
      return res.redirect("back");
    })
    .catch((err) => {
      console.log("ERROR:", err);
    });
};

//array to store the checked tasks id
var taskid = [];

//function to get all the checked tasks and delte the id's from the array when it is unchecked
module.exports.checkid = function (req, res) {
  var checkboxid = req.query.id;
  if (taskid.includes(checkboxid)) {
    let taskindex = taskid.findIndex((val) => val == checkboxid);
    taskid.splice(taskindex, 1);
  } else {
    taskid.push(checkboxid);
  }
  if (taskid.length == 0) {
    return res.redirect("back");
  }
};

//function to delete the tasks from the database
module.exports.delete = function (req, res) {
  let j = 0;
  for (let i of taskid) {
    Task.findByIdAndDelete(i).catch((err) => console.log("ERROR:", err));
    taskid.splice(j, 1);
    j++;
  }
  return res.redirect("back");
};
