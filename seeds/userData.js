const { User } = require('../models');

const userData = [{
    name: "Sal",
    email: "sal@hotmail.com",
    password: "password"
  },
  {
    name: "Bailey",
    email: "Bailey@gmail.com",
    password: "password"
  },
  {
    name: "Amiko",
    email: "amiko2k20@aol.com",
    password: "password"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
