const { User } = require("../models");

module.exports = {
    getAllUsers(req, res) {
        User.find({})
        .populate("thoughts")
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
        User.findOneAndUpdate(
            { _id: req.params.id },
            {
                username: req.body.username,
                email: req.body.email
            },
            {
                new: true
            }
        )
        .then(res.json("User Updated!"))
        .catch((error) => res.status(500).json(error));
    },
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.id })
        .then(res.json("User deleted!"))
        .catch((error) => res.status(500).json(error));
    },
}