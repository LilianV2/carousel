
let button1 = document.querySelector('input[id="1"]');
let button2 = document.querySelector('input[id="2"]');
let button3 = document.querySelector('input[id="3"]');

let carousel = document.querySelector(".carousel");

button1.addEventListener("click", () => {
    carousel.style.transform = "translateX(0)";
});

button2.addEventListener("click", () => {
    carousel.style.transform = "translateX(-100%)";
});

button3.addEventListener("click", () => {
    carousel.style.transform = "translateX(-200%)";
});