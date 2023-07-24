const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Api");
});

app.listen(PORT, console.log("api working"));
