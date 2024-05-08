let menuBar = document.getElementById('menu-icon');
let lowerLinks = document.querySelector('.lower-links');
let upperLinks = document.querySelector('#upper-links');
let nav = document.querySelector('.nav');


menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    lowerLinks.classList.toggle('nav-toggle');
    upperLinks.classList.toggle('nav-toggle');
});

window.addEventListener('scroll', () => {
    menuBar.classList.remove('fa-times');
    lowerLinks.classList.remove('nav-toggle');
    upperLinks.classList.remove('nav-toggle');
});

window.onscroll = function () {
    // const firstSectionHeight = document.querySelector("#home").offsetHeight;
    // const secondSection = document.getElementById("mission");
    if (window.scrollY > 0) {
        nav.style.background = "#004c23";
        lowerLinks.style.background = "#630f43";
        
    } else {
        nav.style.background = "transparent";
        lowerLinks.style.background = "transparent";
    }
    
    // if (window.scrollY > firstSectionHeight) {
    //     secondSection.style.opacity = 1;
    // } else {
    //     secondSection.style.opacity = 0;
    // }
};

