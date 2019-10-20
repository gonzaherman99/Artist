const express = require("express");
const ejs = require("ejs");

var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("index.ejs");
});

app.listen(8080, function(req, res) {
    console.log("Port started on 8080");
});

