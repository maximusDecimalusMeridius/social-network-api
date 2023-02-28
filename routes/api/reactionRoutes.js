// instantiate router
const router = require("express").Router();

// import the functions that are defined in the user controller
const {
    createReaction,
    deleteReaction
} = require("../../controllers/reactionController");

router.route("/").post(createReaction);
router.route("/").delete(deleteReaction);

module.exports = router;