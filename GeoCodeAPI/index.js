function displayResults(data) {
  let results = document.getElementsByClassName("results");
  results[0].innerHTML += `<ol>`;

  results[0].innerHTML += `<li>
  Longitud: ${data.Response.View[0].Result[0].Location.DisplayPosition.Longitude}
  Latitud: ${data.Response.View[0].Result[0].Location.DisplayPosition.Latitude}
  </li>`;
  results[0].innerHTML += `</ol>`;
}

function fetchViews() {
  let city = "Monterrey";
  let street1 = "Garza%20%Sada";
  let street2 = "Luis%20%Elizondo";
  let apiKey = "Aef1NblxmxxQACZ1PTNrlF38pJF-poLshj5jB_VnYyU";
  let url = `geocoder.ls.hereapi.com/6.2/geocode.json?city=Monterrey&street=Garza%20Sada%20%40%20Luis%20Elizondo&gen=9&apiKey=Aef1NblxmxxQACZ1PTNrlF38pJF-poLshj5jB_VnYyU`;

  $.ajax({
    url: "https://geocoder.ls.hereapi.com/6.2/geocode.json",
    type: "GET",
    dataType: "jsonp",
    jsonp: "jsoncallback",
    data: {
      city: "Monterrey",
      street: "Garza Sada @ Luis Elizondo",
      gen: "9",
      apiKey: "Aef1NblxmxxQACZ1PTNrlF38pJF-poLshj5jB_VnYyU"
    },
    success: function(data) {
      displayResults(data);
      console.log(data);
    }
  });
}

function displayCSV(path) {
  d3.dsv(",", path, function(d) {
    return {
      id: d.ORDEN,
      street1: d.Calle1,
      street2: d.Calle2
    };
  }).then(function(data) {
    var txt2 = $("<p></p>").text("Text.");
    data.map(item => {
      $("#csv").append();
    });
  });
}

function watchForm() {
  let form = document.getElementById("form");
  form.addEventListener("submit", event => {
    event.preventDefault();
    fetchViews();
  });
}

function init() {
  watchForm();
  let path = "./dataset/Coordenadas_Monterrey.csv";
  displayCSV(path);
}
init();
