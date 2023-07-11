const mongoose = require("mongoose");
function connect(url) {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
module.exports = { connect };
