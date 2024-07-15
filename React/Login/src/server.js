const express = require("express");
const mongoose = require("mongoose");
const User = require('./models/User')
const app = express();
const PORT = 5000;

mongoose.connect("mongodb://127.0.0.1:27017/Users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/", async (req, res) => {
  try {
    const data = await User.create();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));