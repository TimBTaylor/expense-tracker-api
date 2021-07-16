const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  transaction: {
    type: Array,
  },
});

module.exports = mongoose.model("User", userSchema);
