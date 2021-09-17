const router = require('express').Router();
const { Recipe, User } = require('../../models');
// const withAuth = require('../../utils/auth');
// const { search } = require('./userRoutes');

const searchRoute = router.get(`/search/:name`, async (req, res) => {
    try {
      // Get all recipes and JOIN with user data
      const recipeData = await Recipe.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        recipes, 
        loggedIn: req.session.loggedIn 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports=searchRoute