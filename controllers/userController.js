const { User } = require("../models");

module.exports = {
    getAllUsers(req, res) {
        User.find({})
        .then((users) => res.json(users))
        .catch((error) => res.status(500).json(error));
    },
    getUserById(req, res) {
        User.find({ _id: req.params.id })
        .then((user) => res.json(user))
        .catch((error) => res.status(500).json(error));
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