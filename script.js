var dropdown = document.getElementsByClassName("collapse navbar-collapse");
var dropButton = document.getElementById("dropButton");
dropButton.addEventListener("click", function() {
  for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].classList.toggle("dropdownClass");
  }
})
