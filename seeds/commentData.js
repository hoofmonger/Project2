const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Tastes great!",
    user_id: 2,
    recipe_id: 1,
    rating: "⭐⭐⭐"
  },
  {
    comment_text: "Too spicy",
    user_id: 3,
    recipe_id: 2,
    rating: "⭐⭐⭐⭐"
  },
  {
    comment_text: "Very good",
    user_id: 1,
    recipe_id: 3,
    rating: "⭐⭐⭐⭐⭐"
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;