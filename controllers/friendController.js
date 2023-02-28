const { User } = require("../models");

module.exports = {
    addFriend(req, res) {
        console.log(req.baseUrl.split("/")[3])
        console.log(req.baseUrl.split("/")[5])
        User.findOneAndUpdate(
            { _id: req.baseUrl.split("/")[3]},
            { $addToSet: { friends: req.baseUrl.split("/")[5] }}
        )
        .then(res.json(`Friend with id: ${req.baseUrl.split("/")[5]} was added!`))
        .catch((error) => res.status(500).json(error));
    },
    deleteFriend(req, res) {
        
    },
}