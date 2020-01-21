function displayResults(responseJSON) {
  let results = document.getElementsByClassName("results");

  for (let i = 0; i < responseJSON.drinks.length; ++i) {
    results[0].innerHTML += `
    <h1>${responseJSON.drinks[i].strDrink}</h1>
    <img src="${responseJSON.drinks[i].strDrinkThumb}"> </h2>
    <ul>
    `;
    for (let j = 1; j < 16; j++) {
      let ing = `strIngredient${i}`;
      let measure = `strMeasure${i}`;

      let ingComp = responseJSON.drinks[i][ing];
      let measureComp = responseJSON.drinks[i][measure];

      results[0].innerHTML += `
        <li> ${ingComp} : ${measureComp} </li>
      `;
    }
    results[0].innerHTML += `</ul>`;
  }
}
function fetchCocktails() {
  let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  let text = document.getElementById("text");
  url += text.value;

  let settings = {
    method: "GET"
  };

  fetch(url, settings)
    .then(response => {
      if (response !== "") {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJSON => {
      displayResults(responseJSON);
    });
}

function watchForm() {
  let form = document.getElementById("form");
  form.addEventListener("submit", event => {
    event.preventDefault();
    fetchCocktails();
  });
}

function init() {
  watchForm();
}
init();
