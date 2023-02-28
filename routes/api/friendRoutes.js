// instantiate router
const router = require("express").Router();

// import the functions that are defined in the user controller
const {
    addFriend,
    deleteFriend
} = require("../../controllers/friendController");

router.route("/").post(addFriend);
router.route("/").delete(deleteFriend);

module.exports = router;