// bring in mongoose ODM dependency
const mongoose = require("mongoose");

// connect to our mongoDB and create the socialDB database
mongoose.connect("mongodb://127.0.0.1:27017/socialDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// export our connection
module.exports = mongoose.connection;
