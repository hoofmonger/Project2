const router = require('express').Router();
const { Recipe, User } = require('../../models');
// const withAuth = require('../../utils/auth');
// const { search } = require('./userRoutes');
const { Op } = require("sequelize");
router.get(`/all/:search`, async (req, res) => {
  console.log("test");
  try {
    // Get all recipes and JOIN with user data
    const recipeData = await Recipe.findAll({
      where: {
        name: {
          [Op.like]: `%${req.params.search}%`
        },

      }
    });
    // const users = userData.map((user) => user.get({ plain: true }));
    // console.log(users)
    // Serialize data so the template can read it
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    // console.log("========")
    // console.log(recipes[0].user_id)
    // const userData = await User.findByPk(1)
    // console.log(userData)
    // const users = userData.get({ plain: true });
    
    
    console.log("these are the matching recipes", recipes)
    // Pass serialized data and session flag into template
    res.render('searchresults', { recipes})
    // res.render('searchresults', { recipes, user})

  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get(`/:search`, async (req, res) => {
  console.log("test");
  try {
    // Get all recipes and JOIN with user data
    const recipeData = await Recipe.findAll({
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

module.exports = router