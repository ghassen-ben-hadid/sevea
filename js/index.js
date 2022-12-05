function toggle_div_fun(id) {
  var divelement = document.getElementById(id);
  divelement.classList.toggle("visible");
}
function toggleBtnText() {
  var btn = document.getElementById("affinerBtn");
  if (btn.innerHTML === "affiner votre recherche") {
    btn.innerHTML = "Collapse";
  } else {
    btn.innerHTML = "affiner votre recherche";
  }
}

//I made a media query with javascript, i apparently forgot that media query exists :,)

// function renderCarousel(className) {
//   var carousel = document.querySelector(className);
//   window.addEventListener("resize", function () {
//     if (window.matchMedia("(max-width: 500px)").matches) {
//       if (!carousel.classList.contains("renderCarousel")) {
//         carousel.classList.add("renderCarousel");
//       }
//     }
//     if (window.matchMedia("(min-width: 501px)").matches) {
//       if (carousel.classList.contains("renderCarousel")) {
//         carousel.classList.remove("renderCarousel");
//       }
//     }
//   });
// }

// renderCarousel(".cards");

var links = document.getElementsByClassName("changeable");
function changeColorToRed(e) {
  for (var i = 0; i < links.length; i++) {
    links[i].style.color = "grey";
  }
  e.target.style.color = e.target.style.color ? "green" : "grey";
}
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", changeColorToRed);
}

function toggle_div_fun_2(className) {
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < 12; i++) {
    elements[i].classList.toggle("visible");
  }
}
