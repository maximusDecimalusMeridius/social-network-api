// bring in mongoose dependency
const mongoose = require("mongoose");

// define mongoose schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validator: function(email) {
            return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
        }
    }, 
    thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }],
    friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
},
{
    toJSON: {
        virtuals: true
    },
    id: false
}
);

// create a virtual called friendCount that returns the number of friends
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
})

// declare the model object
const User = ("User", userSchema);

module.exports = User;
