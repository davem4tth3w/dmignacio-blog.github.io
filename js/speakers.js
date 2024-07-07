 
 //background image-animation START
 window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const bgElement = document.getElementById('animated-bg');
        bgElement.style.backgroundPositionY = `${scrollY * 0.5}px`; // Adjust the multiplier to control the speed of the animation
    });
 //background image-animation END

 
 