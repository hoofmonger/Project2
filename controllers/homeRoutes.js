const router = require('express').Router();
const { Recipe, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  Recipe.findAll({
      attributes: [
          'id',
          'name',
          'created_at'
      ],
      include: [{
              model: Comment,
              attributes: ['id', 'comment_text', 'recipe_id', 'user_id', 'created_at'],
              include: {
                  model: User,
                  attributes: ['name']
              }
          },
          {
              model: User,
              attributes: ['name']
          }
      ]
  })
      .then(dbRecipeData => {
          const recipes = dbRecipeData.map(recipe => recipe.get({ plain: true }));
          console.log('------------------------------------------');
          console.log(recipes);
          console.log('------------------------------------------');
          res.render('homepage', { recipes });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.get('/recipe/:id', (req, res) => {
  Recipe.findOne({
          where: {
              id: req.params.id
          },
          attributes: [
              'id',
              'name',
              'ingredients',
              'cooking_instructions',
              'created_at'
          ],
          include: [{
                  model: Comment,
                  attributes: ['id', 'comment_text', 'recipe_id', 'user_id', 'created_at'],
                  include: {
                      model: User,
                      attributes: ['name']
                  }
              },
              {
                  model: User,
                  attributes: ['name']
              }
          ]
      })
      .then(dbRecipeData => {
          if (!dbRecipeData) {
              res.status(404).json({ message: 'No recipe found with this id' });
              return;
          }
          const recipe = dbRecipeData.get({ plain: true });
          console.log(recipe);
          res.render('recipe', { recipe, loggedIn: req.session.loggedIn });


      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Recipe }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
