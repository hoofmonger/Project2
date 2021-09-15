const { Recipe } = require('../models');

const recipeData = [
  {
    name: "Scrambled Eggs",
    ingredients: "Eggs, Butter",
    cooking_instructions: "crack the eggs over a bowl or other container; beat the eggs until the white and yolk are one; place in a hot skillet with the butter melted; move, flip, and chop the eggs for two minutes; serve hot on a plate",
    user_id: 1
  },
  {
    name: "Cheese burger",
    ingredients: "Ground Beef (1lb), salt, pepper, cheddar cheese, lettuce, tomato, onion, hamburger buns",
    cooking_instructions: "Heat up the skillet with oil, roll the beef into 4 quarter pound balls, flatten them out, apply salt and pepper liberally to both sides of the patty, lay the patty in the pan; flip patties every two minutes for 8-10 minutes; apply cheese after last flip; serve on bun with veggies",
    user_id: 3
  },
  {
    name: "French Toast",
    ingredients: "Eggs, Bread, Butter (optional vanilla extract, sweet spices",
    cooking_instructions: "crack the eggs over a bowl or other container; beat the eggs until the white and yolk are one; place the beaten eggs into a shallow bowl; soak each side of bread in the egg; place the bread in the skillet; flip every 30 seconds until golden brown; serve hot with maple syrup and butter on top",
    user_id: 2
  }
];

const seedRecipes = () =>Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
