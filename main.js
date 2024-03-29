
// show menu
const navMenu = document.getElementById("nav__menu");
const navToggle = document.getElementById("nav__toggle");
const navClose = document.getElementById("nav__close");

if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show__menu');
  });
}

if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show__menu');
  });
}

// scroll header
function scrollHeader(){
  const header = document.getElementById('header');
  // when the scroll is greater than 40 viewport height, add the scroll-header class to header tag
  if(this.scrollY >= 40) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

// brand swiper

var brandSwiper = new Swiper(".brand-swiper", {
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        463: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        763: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        993: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1203: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        1403: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
    },
});

// anime swiper

var animeSwiper = new Swiper(".anime-swiper", {
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        463: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        763: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        993: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1203: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        1403: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
    },
});
