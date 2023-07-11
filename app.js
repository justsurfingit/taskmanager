//task is create a exoress server listening on port 3000
const express = require("express");
const app = express();
const task = require("./routes/taskroute");
require("dotenv").config();
const { connect } = require("./models/connectdb");
app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
//now we will use this router for creating tasks
app.use(express.static("./public"));
app.use("/api/v1/tasks", task);
// now let's connect to the database
// it should be a async function that is a good practice
// console.log(process.env);
async function init() {
  try {
    await connect(process.env.MONGO_URI);
    console.log("Connected to the database");

    app.listen(3000, () => {
      console.log("Server listening on port 3000");
    });
  } catch (err) {
    console.log(err);
  }
}

init();
