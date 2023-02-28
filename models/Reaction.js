// bring in mongoose dependency
const mongoose = require("mongoose");

// define mongoose schema
const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true
        // or should I return a new ObjectId()?
    },
    reactionBody: {
        type: String,
        required: true,
        max: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

//getter method to format timestap
reactionSchema.virtual("formatTimestap")
  .get(function () {
    return `Format the time!: ${this.createdAt}`;
  });

// declare the model object
const Reaction = mongoose.model("Reaction", reactionSchema);

module.exports = Reaction;
