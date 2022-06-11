var typed = new Typed('.span-two', {
    strings: ["Web Designer", "Web Devloper", "Graphic Designer", "Network Administrator"],
    typeSpeed: 100,
    Backspeed: 60,
    loop: true
})

const toggleButton = document.querySelector("#toggle");
const toggleMenu = document.querySelector(".nav");
const toggleIcon = document.querySelector("#icon");


// Event listener
toggleButton.addEventListener("click", function(){
    toggleMenu.classList.toggle("toggle-expand")
    toggleIcon.classList.toggle("fa-x")
})

