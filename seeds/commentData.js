const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Tastes great!",
    user_id: 2,
    recipe_id: 1,
    rating: 3
  },
  {
    comment_text: "Too spicy",
    user_id: 3,
    recipe_id: 2,
    rating: 4
  },
  {
    comment_text: "Very good",
    user_id: 1,
    recipe_id: 3,
    rating: 5
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;