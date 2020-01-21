function fetchDog() {
  let url = "https://dog.ceo/api/breeds/image/random";
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

function fetchDog2() {
  let url = "https://dog.ceo/api/breeds/image/random";

  $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    success: function(responseJSON) {
      displayResults(responseJSON);
    },
    error: function(err) {
      console.log(err);
    }
  });
}

function displayResults(responseJSON) {
  let results = document.getElementsByClassName("results");
  results[0].innerHTML = `
  <h1> Your random image </h1>
  <p> 
  <img src="${responseJSON.message}" />
  </p>fe
  `;
}

function watchForm() {
  let form = document.getElementById("randomDog");
  form.addEventListener("submit", event => {
    event.preventDefault();
    fetchDog();
  });
}

function init() {
  watchForm();
}
init();

/*
settings = {
  method: "GET",
  body: "...",
  headers: ""
};

$.ajax({
  url: url,
  method: "GET",
  data: "Datos a enviar",
  ContentType: "Tipo de dato que se envia al servidor",
  datType: "Tipo de dato que recibimos del serividor",
  success: function(responseJSON) {},
  error: function(err) {}
});
fetch(url, settings)
  .then(response => {
    console.log(response);
    if (response.ok) {
      return response.json();
    }
  })
  .then(responseJSON => {
    console.log(responseJSON);
  })
  .catch(err => {
    console.log(err);
  });
*/
