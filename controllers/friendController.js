const { User } = require("../models");

module.exports = {
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.baseUrl.split("/")[3]},
            { $addToSet: { friends: req.params.friendId }}
        )
        .then(res.json(`Friend with id: ${req.params.friendId} was added!`))
        .catch((error) => res.status(500).json(error));
    },
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.baseUrl.split("/")[3] },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        )
        .then(res.json(`Friend with id: ${req.params.friendId} was deleted!`))
        .catch((error) => res.status(500).json(error));
    },
}