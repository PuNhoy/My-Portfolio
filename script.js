/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

/*=============== PORTFOLIO FILTERING ===============*/
const text = document.getElementById("animated-text");

const textArray = ["Freelancer", "UX UI Designer", "Frontend", "YouTuber"];
let index = 0;

const textLoad = () => {
    text.textContent = textArray[index];
    index = (index + 1) % textArray.length; // Cycle through the array
};

// Start text animation
setInterval(textLoad, 4000);

  
const scrollUpBtn = document.getElementById("scrollUpBtn");

// Show the button when the user scrolls down 200px
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollUpBtn.style.display = "flex";
    } else {
        scrollUpBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling effect
    });
}
