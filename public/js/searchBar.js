const { Recipe } = require('../../models');

const searchBar = async (event) => {
const searchBarForm = document.querySelector('.searchbar')
const searchBarBackEnd = require('../../controllers/api/searchRoutes')

if (searchBarForm == Recipe.name) {
    const response = await fetch(`/api/recipes`, {
      method: 'GET',
      body: JSON.stringify({searchBarForm}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/recipe/${searchBarForm}`);
    } else {
    //   alert('Failed to create recipe');
    }
  }
}




document
  .querySelector('.searchbar')
  .addEventListener('submit', searchBar);