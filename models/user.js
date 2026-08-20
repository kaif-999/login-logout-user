const mongoose = require("mongoose");
mongoose.connect(
  // "mongodb+srv://kaif:fsBElucbRX8WcoRj@backend-l1.40ukgmf.mongodb.net/miniprojects?appName=Backend-L1/",
  "mongodb://localhost:27017/miniprojects",
);

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  email: String,
  password: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
