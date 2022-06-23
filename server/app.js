const express = require("express");
const app = express();
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.name && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "NO USER FOUND" });
    }
  } else {
    res.send({ result: "No password found" });
  }
});

app.listen(3004, () => {
  console.log("listening to port 3004");
});
