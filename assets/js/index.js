// hmburger-menu

let hamburger=document.querySelector('.hamburger')
let nav=document.querySelector('.nav')
let xmark=document.querySelector('.bi-x')
let burger=document.querySelector('.bi-list')
hamburger.addEventListener('click',()=>{
nav.classList.toggle('active-burger')
burger.classList.toggle('deactive')
xmark.classList.toggle('active')

})


// go-to-top

const goUp = document.querySelector(".gototop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    goUp.classList.add("show");
  } else {
    goUp.classList.remove("show");
  }
});


// navlink active & go to section

const home = document.querySelector("#home");
const team = document.querySelector("#team");
const pricing = document.querySelector("#pricing");
const clients = document.querySelector("#clients");
const faqs = document.querySelector("#faqs");

home.addEventListener("click", () => openPage(event, "#carousel"));
team.addEventListener("click", () => openPage(event, "#teamSection"));
pricing.addEventListener("click", () => openPage(event, "#pricetable"));
clients.addEventListener("click", () => openPage(event, "#clientssection"));
faqs.addEventListener("click", () => openPage(event, "#faqssection"));

openPage = (event, sectionId) => {
  const goToSection = document.querySelector(sectionId);
  window.scrollTo(0, goToSection.offsetTop);
  let navItem = document.querySelectorAll(".nav-link");
  for (let i = 0; i < navItem.length; i++) {
    navItem[i].classList.remove("active");
  }
  event.target.classList.add("active");
};


// animation on scroll

window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});
