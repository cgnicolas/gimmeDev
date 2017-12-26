var scrollPos = window.pageOffsetY;
var checker = 0;
var containers = document.getElementsByClassName("container");
AOS.init({
  duration: 1000,
})

window.addEventListener("scroll", function(){
  //Need to figure out how to get this to only fire once
  if(checker >= 1700){
    alert("we made it");
    for (var i = 0; i < containers.length; i++) {
      if(containers[i].hasAttribute("data-aos") == true){
        containers[i].removeAttribute("data-aos");
      }
    }
  }
})
