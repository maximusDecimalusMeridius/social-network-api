// bring in mongoose dependency
const mongoose = require("mongoose");

// define mongoose schema
const thoughtSchema = new mongoose.Schema({
    thoughtText: {

    },
    createdAt: {

    },
    username: {

    },
    reactions: [reactionSchema]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
}
);

thoughtSchema.virtual("reactionCount").get( function () {
    return this.reactions.length;
});

// declare the model object
const Thought = ("Thought", thoughtSchema);

module.exports = Thought;
