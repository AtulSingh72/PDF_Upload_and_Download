var express = require("express");
var mongoose = require("mongoose");
var URL = require("./models/URL");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/cat_app");

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/upload", function (req, res) {
    res.render("upload_page");
});

app.post("/upload", function (req, res) {
    var name = req.body.name;
    var url = req.body.url;

    var newBook = new URL({
        name: name,
        url: url,
    });
    newBook.save(function (err, book) {
        if (err) console.log(err);
        console.log(newBook);
        res.redirect("/");
    });
});

app.get("/download", function (req, res) {
    URL.find({}, function (err, books) {
        if (err) console.log(err);
        res.render("download_page", { books: books });
    });
});

app.listen(8080, function () {
    console.log("Server is listening !!!");
});
