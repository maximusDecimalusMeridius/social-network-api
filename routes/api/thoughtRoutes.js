// instantiate router
const router = require("express").Router();

// import the functions that are defined in the user controller
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require("../../controllers/thoughtController");

router.route("/").get(getAllThoughts);
router.route("/:id").get(getThoughtById);

router.route("/").post(createThought);

router.route("/:id").put(updateThought);

router.route("/:id").delete(deleteThought);

module.exports = router;