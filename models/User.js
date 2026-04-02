const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: {
    type: String,
    enum: ["farmer", "customer"],
  },
});

module.exports = mongoose.model("User", userSchema);