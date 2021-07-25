const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const postRoutes = require("./postRoutes");

router.use('/users', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use("/post", postRoutes);

module.exports = router;
