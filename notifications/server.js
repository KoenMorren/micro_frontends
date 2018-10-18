var express = require("express");
var app = express();

app.use(express.static(__dirname + "/dist"));

app.get("/bundle.js", function(req, res) {
  res.sendFile(__dirname + "/dist/bundle.js");
});

app.listen(2001);
