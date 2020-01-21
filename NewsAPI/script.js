function fetchNews() {
  let API_KEY = "&apiKey=749d66bbc2ea41fda270c6aa9a7833f9";
  let url = "https://newsapi.org/v2/top-headlines?q=";
  let text = document.getElementById("text");
  url += text.value;
  url += API_KEY;
  console.log(url);

  let settings = {
    method: "GET"
  };

  fetch(url, settings)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJSON => {
      displayResults(responseJSON);
    });
}

function displayResults(responseJSON) {
  let results = document.getElementsByClassName("results");
  for (var i = 0; i < responseJSON.articles.length; ++i) {
    results[0].innerHTML += `
        <h2> ${responseJSON.articles[i].title}</h2>
        <img src="${responseJSON.articles[i].urlToImage}"> </h2>
        <p> ${responseJSON.articles[i].author}</p>
        <p> ${responseJSON.articles[i].description} </p>
          `;
  }
}

function watchForm() {
  let form = document.getElementById("form");
  form.addEventListener("submit", event => {
    event.preventDefault();
    fetchNews();
  });
}

function init() {
  watchForm();
}
init();
