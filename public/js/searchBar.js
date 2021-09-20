
const searchBar = async (event) => {
  event.preventDefault()
  const searchValue = document.querySelector('.searchbar').value;
  console.log(searchValue)
const searchBarForm = document.querySelector('.searchbar')

const searchText = searchBarForm.searchbar.value

if (searchText) {
document.location.replace(`/api/search/all/${searchText}`)


    // const headers = await fetch(`/api/search/all/${searchText}`, {
    //   method: 'GET',

    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
// console.log(headers)
// console.log('response')
//     const response = await headers.json();
//       console.log(response[0].id)
//     if (headers.ok) {
//       document.location.replace(`/api/recipes/render/${response[0].id}`);
//     } else {
//      alert('Failed to search for recipe');
//     }
  }
}

document
  .querySelector('.searchbar')
  .addEventListener('submit', searchBar);


