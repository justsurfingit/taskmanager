const router = require("express").Router();
const {
  getTasks,
  createTask,
  updateTask,
  getTask,
  deleteTask,
} = require("../controller/taskfetch");

router.get("/", getTasks);
router.post("/", createTask);
router.get("/:id", getTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);
//we are getting al tasks
module.exports = router;
