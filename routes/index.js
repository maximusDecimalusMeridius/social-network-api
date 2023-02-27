// instantiate a router from express
const router = require("express").Router()

// define root /api directory
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;