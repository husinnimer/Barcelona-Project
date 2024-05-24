let section3 = document.querySelector(".services");
let cont = document.querySelector(".boxes");

let section2 = document.querySelector(".service-desighn");
let image = document.querySelector(".image img");
let box = document.querySelector(".text-desighn");

let section = document.querySelector(".information");
let spans = document.querySelectorAll(".prog span");

let secion4 = document.querySelector(".price");

let secion5 = document.querySelector(".contact");

window.onscroll = function () {
  if (window.scrollY >= section3.offsetTop - 400) {
    cont.style.transform = "scale(1)";
  }

  if (window.scrollY >= section2.offsetTop - 200) {
    image.style.bottom = "0";
    box.style.flex = "1";
  }

  if (window.scrollY >= section.offsetTop - 200)
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });

  if (window.scrollY >= secion4.offsetTop - 400) {
    secion4.style.transform = "scale(1)";
  }

  if (window.scrollY >= secion5.offsetTop - 100) {
    secion5.style.opacity = "1";
  }
};
