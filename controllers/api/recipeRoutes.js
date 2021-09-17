const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Recipe, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Recipe.findAll({
      attributes: [
          'id',
          'ingredients',
          'cooking_instructions',
          'name',
          'created_at'
        ],
      order: [['created_at', 'DESC']],
      include: [
          {
              model: User,
              attributes: ['name']
          },
          {
              model: Comment,
              attributes: ['id', 'comment_text', 'recipe_id', 'user_id', 'created_at', 'rating'],
              include: {
                  model: User,
                  attributes: ['name']
              }
          }
      ]
  })
  .then(dbRecipeData => res.json(dbRecipeData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  Recipe.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'ingredients',
      'cooking_instructions',
      'name',
      'created_at'
    ],
    include: [
      {
        model: User,
        attributes: ['name']
      },
      {
          model: Comment,
          attributes: ['id', 'comment_text', 'recipe_id', 'user_id', 'created_at', 'rating'],
          include: {
              model: User,
              attributes: ['name']
          }
      }
    ]
  })
    .then(dbRecipeData => {
      if (!dbRecipeData) {
        res.status(404).json({ message: 'No recipe found with this id' });
        return;
      }
      console.log(dbRecipeData);
      res.json(dbRecipeData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  Recipe.create({
      name: req.body.name,
      ingredients: req.body.ingredients,
      cooking_instructions: req.body.cooking_instructions,
      user_id: req.session.user_id
  })
  .then(dbRecipeData => res.json(dbRecipeData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

router.put('/:id', withAuth, (req, res) => {
  Recipe.update(req.body,
      {
          where: {
              id: req.params.id
          }
      }
  )
  .then(dbRecipeData => {
      if (!dbRecipeData) {
          res.status(404).json({ message: 'No recipe found with this id' });
          return;
      }
      res.json(dbRecipeData);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err)
  });
});

router.delete('/:id', withAuth, (req, res) => {
  Recipe.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbRecipeData => {
      if (!dbRecipeData) {
        res.status(404).json({ message: 'No recipe found with this id' });
        return;
      }
      res.json(dbRecipeData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
