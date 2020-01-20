console.log("Hola mundo");

function validateForm() {
  let form = document.getElementById("commentForm");
  form.addEventListener("submit", event => {
    event.preventDefault();
  });
  let firstName = document.getElementById("firstnameInput");
  let lastName = document.getElementById("lastnameInput");
  let email = document.getElementById("emailInput");
  let phone = document.getElementById("phonenumberInput");
  let comment = document.getElementById("comment");
  let rate = document.getElementById("rate");
  let visitAgain = document.getElementsByName("visit");
  if (firstName.value === "") {
    alert("Proporcionar el primer nombre");
    return false;
  }
  if (lastName.value === "") {
    alert("Proporcionar el apellido");
    return false;
  }
  if (email.value === "") {
    alert("Proporcionar el email");
    return false;
  }
  if (phone.value === "") {
    alert("Proporcionar el telefono");
    return false;
  }
  if (comment.value === "") {
    alert("Proporcionar tu comentario");
    return false;
  }

  if (rate.value === "-1") {
    alert("Proporcionar la valoracion");
    return false;
  }

  for (var i = 0; i < visitAgain.length; i++) {
    if (visitAgain[i].checked) {
      break;
    }
  }
  if (visitAgain.length === i) {
    alert("Dinos si vas a regresar.");
    return false;
  }
}

function watchForm() {
  let form = document.getElementById("commentForm");
  form.addEventListener("submit", event => {
    event.preventDefault();
    validateForm();
  });
}
function watchPage() {
  var home = Document.getElementById("home");
  var review = Document.getElementById("review");
  var about = Document.getElementById("about");
  home.addEventListener("click", event => {
    event.preventDefault();
    var form = document.getElementById("commentForm");
    form.style.display = "none";
  });
}
function init() {
  watchForm();
  watchPage();
}
init();
