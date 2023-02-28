const { Thought, User } = require("../models");

module.exports = {
    getAllThoughts(req, res) {
        Thought.find({})
        .then((thoughts) => res.json(thoughts))
        .catch((error) => res.status(500).json(error));
    },
    getThoughtById(req, res) {
        Thought.find({ _id: req.params.id })
        .then((thought) => res.json(thought))
        .catch((error) => res.status(500).json(error));
    },
    createThought(req, res) {
        Thought.create(req.body)
        .then((thought) => {
            return User.findOneAndUpdate(
              { _id: req.body.userId },
              { $addToSet: { thoughts: thought._id } },
              { new: true }
            );
          })
        .then(res.json("Thought created!"))
        .catch((error) => res.status(500).json(error));
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.id },
            {
                thoughtText: req.body.thoughtText,
                username: req.body.username,
                userId: req.body.userId
            },
            {
                new: true
            }
        )
        .then(res.json("Thought Updated!"))
        .catch((error) => res.status(500).json(error));
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.id })
        .then(res.json("Thought deleted!"))
        .catch((error) => res.status(500).json(error));
    },
}