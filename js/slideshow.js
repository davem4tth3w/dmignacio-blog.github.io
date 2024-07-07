
 //ACTIVITIES JS
 let slideshows = document.querySelectorAll('.slideshow-container');

 slideshows.forEach((slideshow, index) => {
   let slideIndex = 1;
   showSlides(slideIndex, index + 1);
 
   window['plusSlides'] = function(n, slideshowIndex) {
     showSlides(slideIndex += n, slideshowIndex);
   }
 
   window['currentSlide'] = function(n, slideshowIndex) {
     showSlides(slideIndex = n, slideshowIndex);
   }

   function showSlides(n, slideshowIndex) {
     let i;
     let slides = document.querySelectorAll(`.slideshow-container[data-slideshow="${slideshowIndex}"] .mySlides`);
     let dots = document.querySelectorAll(`.slideshow-container[data-slideshow="${slideshowIndex}"] .dot`);
     if (n > slides.length) {slideIndex = 1}
     if (n < 1) {slideIndex = slides.length}
     for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
     }
     slides[slideIndex-1].style.display = "block";
     dots[slideIndex-1].className += " active";
   }
 });