// bring in mongoose dependency
const mongoose = require("mongoose");

// define mongoose schema
const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    // user that created the thought
    username: {
        type: String,
        required: true
    },
    reactions: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Reaction',
        },
      ],
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
const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
