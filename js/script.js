const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    navbar.classList.add('scrolled'); 
  } else {
    navbar.classList.remove('scrolled'); 
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'));
  var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
      return new bootstrap.Offcanvas(offcanvasEl);
  });

  var navLinks = document.querySelectorAll('.offcanvas-body .nav-link');
  navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
          var offcanvasElement = bootstrap.Offcanvas.getInstance(document.getElementById('mobileMenu'));
          offcanvasElement.hide();
      });
  });
});


const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true, 
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false, 
  },
  breakpoints: {
    768: {
      slidesPerView: 2, 
    },
    1024: {
      slidesPerView: 3, 
    }
  }
});




