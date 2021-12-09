const express = require("express");
const port = process.env.PORT || 5000;
const app = express();

app.get("/", (re, res) => {
  res.send("I am a backend server");
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Error: ${err.message}`);
  } else {
    console.log(`Listening on port ${port}`);
  }
});
