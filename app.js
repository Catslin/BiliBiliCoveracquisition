const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/getcover", (req, res) => {
  const path = req.body.path;
  const regex = /aid=(\d*)/g;
  const match = regex.exec(path);
  const aid = match[1];
  const coverUrl = `https://i0.hdslb.com/bfs/archive/${aid}.jpg`;
  res.render("index.ejs", {aidPath: coverUrl});
});

app.listen(5000);