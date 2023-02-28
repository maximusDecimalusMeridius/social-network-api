const { Reaction, Thought } = require("../models");

module.exports = {
    createReaction(req, res) {
        Reaction.create(req.body)
        .then((reaction) => {
            return Thought.findOneAndUpdate(
              { _id: req.baseUrl.split("/")[3] },
              { $addToSet: { reactions: reaction._id } },
              { new: true }
            );
          })
        .then(res.json("New reaction added!"))
        .catch((error) => res.status(500).json(error));
    },
    deleteReaction(req, res) {
        Reaction.findOneAndDelete({
            reactionId: req.body.reactionId
        })
        .then((response) => {
            if(response == null){
                res.json("No such record!");
            } else {
                res.json(`Successfully deleted reaction ${req.body.reactionId}`)
            }
        })
        .catch((error) => res.status(500).json(error));
    },
}