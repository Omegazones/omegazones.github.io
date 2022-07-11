const Bars = document.getElementById("bar");
const navLinks = document.getElementById("nav-links");
const load =document.getElementById("loader");

Bars.addEventListener("click", function() {
    navLinks.classList.toggle("close");
});


window.onload = function() {
    load.style.display= 'none';
}