// instantiate router
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");
const reactionRoutes = require("./reactionRoutes");
const friendRoutes = require("./friendRoutes");

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('/thoughts/:thoughtId/reactions', reactionRoutes);
router.use('/users/:userId/friends/:friendId', friendRoutes);

module.exports = router;
