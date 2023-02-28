const { User } = require("../models");

module.exports = {
    getAllUsers(req, res) {
        User.find({})
        .then((users) => res.json(users))
        .catch((error) => res.status(500).json(error));
    },
    getUserById(req, res) {
        res.json("yay");
    },
    createUser(req, res) {
        User.create(req.body)
        .then(res.json("User created!"))
        .catch((error) => res.status(500).json(error));
    },
    updateUser(req, res) {
        res.json("yay");
    },
    deleteUser(req, res) {
        res.json("yay");
    },
}