const { Recipe } = require('../../models');

const searchBar = async (event) => {
const searchBarForm = document.querySelector('.searchbar')
const searchBarBackEnd = require('../../controllers/api/searchRoutes')

if (name == Recipe.name) {
    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({ name,}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create recipe');
    }
  }
}




document
  .querySelector('.searchbar')
  .addEventListener('submit', searchBar);