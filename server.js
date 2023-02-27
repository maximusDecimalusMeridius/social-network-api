// bring in dependencies
// db is set to the mongodb connection defined in our connection file
const { application } = require("express");
const express = require("express");
const db = require("./config/connection");

// set our server to port 3001
// instantiate our express app
const PORT = 3001;
const app = express();

// middleware to parse URLs and json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// once the database is open, begin listening on port 3001
db.once("open", () => [
    app.listen(PORT, () => {
        console.log("Server listening on 3001");
    })
])