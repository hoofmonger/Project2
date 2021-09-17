const router = require('express').Router();
const { Recipe } = require('../../models');
// const withAuth = require('../../utils/auth');
// const { search } = require('./userRoutes');

router.get(`/`, async (req, res) => {
  console.log("test");
    try {
      // Get all recipes and JOIN with user data
      const recipeData = await Recipe.findOne({
        where:{
          name : req.json(this.name)
        }
           });
  
      // Serialize data so the template can read it
      const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.json(recipes)
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get(`/:name`, async (req, res) => {
  console.log("test");
    try {
      // Get all recipes and JOIN with user data
      const recipeData = await Recipe.findOne({
           where: {
             name: req.params.name
           },
           });
  
      // Serialize data so the template can read it
      const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.json(recipes)
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports=router