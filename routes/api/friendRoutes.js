// instantiate router
const router = require("express").Router();

// import the functions that are defined in the user controller
const {
    addFriend,
    deleteFriend
} = require("../../controllers/friendController");

router.route("/:friendId").post(addFriend);
router.route("/:friendId").delete(deleteFriend);

module.exports = router;