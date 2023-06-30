var typed = new Typed('.typed', {
    strings: ['Developer', 'Freelancer', 'Photographer' ,'Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });


  const spinnerWrapperEl = document.querySelector('.spinner-wrapper');
window.addEventListener('load',() => {
  spinnerWrapperEl.style.opacity = '0'; 
  setTimeout(() => {
    spinnerWrapperEl.style.display = 'none';
  }, 1000);
});
  


window.onscroll = function() {
  scrollFunction();
};

window.onresize = function() {
  scrollFunction();
};

function scrollFunction() {
  var navbar = document.getElementById("navbar");

  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    navbar.style.background = "#000";
  } 
   else {
    navbar.style.background ="#000000e6";
    }
  }


  jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});