// bring in mongoose dependency
const mongoose = require("mongoose");

// define mongoose schema
const userSchema = new mongoose.Schema({
    name: String
});

// declare the model object
const User = ("User", userSchema);

module.exports = User;
