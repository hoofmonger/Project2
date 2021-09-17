
const searchBar = async (event) => {
  event.preventDefault()
  const searchValue = document.querySelector('.searchbar').value;
  console.log(searchValue)
console.log("is this doing anything")
const searchBarForm = document.querySelector('.searchbar')

const searchText = searchBarForm.searchbar.value

if (searchText) {

    const headers = await fetch(`/api/search/${searchText}`, {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await headers.text();
      console.log(response)
    if (response.ok) {
      document.location.replace(`/recipe/${searchText}`);
    } else {
     alert('Failed to create recipe');
    }
  }
}

document
  .querySelector('.searchbar')
  .addEventListener('submit', searchBar);


