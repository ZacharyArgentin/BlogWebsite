
var slideIndex = 0;
showSlides(slideIndex);
console.log(slideIndex);


function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n >= slides.length) {slideIndex = 0;}
    if (n < 0) {slideIndex = slides.length - 1;}
    for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
    for (i = 0; i < dots.length; i++) {dots[i].className = dots[i].className.replace(" active", "");}
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}
