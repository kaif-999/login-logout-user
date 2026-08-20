const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://kaif:fsBElucbRX8WcoRj@backend-l1.40ukgmf.mongodb.net/miniprojects?appName=Backend-L1/",
);

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  email: String,
  password: String,
});

module.exports = mongoose.model("user", userSchema);
