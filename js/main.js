(function($){
  $(function() {
    $('#nav-icon1').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });
})(jQuery);



// first slider 

var slides = document.querySelectorAll('.slides__item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide(){
  goToSlide(currentSlide+1);
}
function previousSlide(){
  goToSlide(currentSlide-1);
}
function goToSlide(n){
  slides[currentSlide].classList.toggle('active');
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].classList.toggle('active');
}

