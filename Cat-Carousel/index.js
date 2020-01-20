$(".thumbnail").on("click", function(event) {
  event.preventDefault();
  $(".hero")[0].children[0].src = event.target.src;
  $(".hero")[0].children[0].alt = event.target.alt;
});
