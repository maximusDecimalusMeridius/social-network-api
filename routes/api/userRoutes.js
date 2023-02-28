// instantiate router
const router = require("express").Router();

// import the functions that are defined in the user controller
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require("../../controllers/userController");

router.route("/").get(getAllUsers);
router.route("/:id").get(getUserById);

router.route("/").post(createUser);

router.route("/:id").put(updateUser);

router.route("/:id").delete(deleteUser);

module.exports = router;