// bring in mongoose dependency
const mongoose = require("mongoose");

// define mongoose schema
const reactionSchema = new mongoose.Schema({
    reactionId: {

    },
    reactionBody: {

    },
    username: {

    },
    createdAt: {
        
    }
});

// declare the model object
const Reaction = ("Reaction", reactionSchema);

module.exports = Reaction;
