//this contriller will contain all the task related to the task fetching
const Tasks = require("../models/taskcreate");
const getTasks = async (req, res) => {
  //this is how we can get all tasks and is very easy
  const tasks = await Tasks.find();
  //this will find all
  if (!tasks) {
    res.status(404).send("no tasks found");
    return;
  }
  res.status(200).json({ tasks });
};
const createTask = async (req, res) => {
  // res.send(req.body);
  try {
    await Tasks.create({
      name: req.body.name,
      completed: req.body.completed,
    });
    res.status(200).send(req.body);
  } catch (err) {
    res.send(err);
  }
};
const getTask = async (req, res) => {
  //we have to get specific task
  try {
    const { id: taskID } = req.params;
    const task = await Tasks.findOne({ _id: taskID });
    // this is how search is done effectiveky
    // paramteres are passed as params
    if (!task) {
      res.status(404).send("task not found");
      return;
    }
    res.status(200).send({ task });
  } catch (err) {
    res.send(err);
  }
};
const updateTask = async (req, res) => {
  // res.send("task created");
  //this is also easy and easy
  try {
    const { id: taskID } = req.params;
    console.log(taskID);
    console.log(req.body);
    const neo = await Tasks.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      // runValidators: true,
    });
    if (!neo) {
      res.status(404).send("task not found");
      return;
    }
    //this await is important
    res.status(200).json({ neo });
  } catch (err) {
    res.send(err);
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Tasks.findOneAndDelete({ _id: taskID });
    if (!task) {
      res.status(404).send("task not found");
      return;
    }
    res.send(task);
  } catch (err) {
    res.send(err);
  }
};
module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
