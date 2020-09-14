var mongoose = require("mongoose");

var URLSchema = new mongoose.Schema({
    name: String,
    url: String,
});

module.exports = mongoose.model("URLSchema", URLSchema);
