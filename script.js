// give id to each mosaic
let mosaics = document.getElementsByClassName("mosaic");
// console.log();
for (let i = 0; i < mosaics.length; i++) {
  mosaics[i].id = "m" + i.toString();
}

// set color by id
const changeColorDO = () => {
  let randomId = "m" + Math.floor(Math.random() * mosaics.length).toString();
  // console.log(randomId);
  document.getElementById(randomId).classList.add("mosaic-do");
  // reset color
  setInterval(() => {
    document.getElementById(randomId).classList.remove("mosaic-do");
  }, 1000);
};
const changeColorO = () => {
  let randomId = "m" + Math.floor(Math.random() * mosaics.length).toString();
  // console.log(randomId);
  document.getElementById(randomId).classList.add("mosaic-o");
  // reset color
  setInterval(() => {
    document.getElementById(randomId).classList.remove("mosaic-o");
  }, 2000);
};
const changeColorY = () => {
  let randomId = "m" + Math.floor(Math.random() * mosaics.length).toString();
  // console.log(randomId);
  document.getElementById(randomId).classList.add("mosaic-y");
  // reset color
  setInterval(() => {
    document.getElementById(randomId).classList.remove("mosaic-y");
  }, 2000);
};
const changeColorG = () => {
  let randomId = "m" + Math.floor(Math.random() * mosaics.length).toString();
  // console.log(randomId);
  document.getElementById(randomId).classList.add("mosaic-g");
  // reset color
  setInterval(() => {
    document.getElementById(randomId).classList.remove("mosaic-g");
  }, 2000);
};
let intDO = 900;
let intO = 700;
let intY = 1000;
let intG = 800;
// change mosaic color interval
setInterval(changeColorDO, intDO);
setInterval(changeColorO, intO);
setInterval(changeColorY, intY);
setInterval(changeColorG, intG);

// change name color\
let colorIndex = 0;
setInterval(() => {
  let colorList = {
    0: "var(--dark-orange)",
    1: "var(--orange)",
    2: "var(--yellow)",
    3: "var(--green)",
  };
  colorIndex++;
  if (colorIndex > Object.keys(colorList).length - 1) {
    colorIndex = 0;
  }
  let myName = document.getElementsByClassName("myName");
  for (let x of myName) {
    // console.log(x);
    x.style.color = colorList[colorIndex];
    x.style.transition = "all 500ms";
  }
}, 10000);

// intersection observer
const header = document.querySelector("header");
const hero = document.querySelector("#hero");
const observerHeroOptions = { rootMargin: "-100px 0px 0px 0px" };
const observerHero = new IntersectionObserver((entries, observerHero) => {
  for (let entry of entries) {
    if (!entry.isIntersecting) {
      header.classList.remove("logo-hidden");
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
      header.classList.add("logo-hidden");
    }
  }
}, observerHeroOptions);

observerHero.observe(hero);

// slides thanks w3schools
let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    // console.log(n);
    slideIndex = slides.length - 1;
  }
  // console.log(slideIndex);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

// mobile navbar
const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

mobileMenu.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  console.log(navbarLinks.classList);
});
