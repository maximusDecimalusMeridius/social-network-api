// instantiate router
const router = require("express").Router();

// import the functions that are defined in the user controller
const {
    createUser,
    getAllUsers,
    getOneUser
} = require("../../controllers/userController");

router.route("/").post(createUser);

module.exports = router;