


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
    },
});
