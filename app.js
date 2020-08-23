var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/upload", function (req, res) {
    res.render("upload_page");
});

app.get("/download", function (req, res) {
    res.render("download_page");
});

app.listen(8080, function () {
    console.log("Server is listening !!!");
});
