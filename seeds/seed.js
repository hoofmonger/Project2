const seedUsers = require('./userData');
const seedRecipes = require('./recipeData');
const seedComments = require('./commentData');

const sequelize = require('../config/connection');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedRecipes();
  console.log('\n----- RECIPES SEEDED -----\n');
  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedDatabase();
