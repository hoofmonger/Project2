const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const commentRoutes = require('./commentRoutes');
const searchRoutes = require('./searchRoutes')

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/comments', commentRoutes);
router.use("/search", searchRoutes)
module.exports = router;
