const bigActive = new Swiper(".big-active", {
    speed:700,

    slidesPerView: 1,
    spaceBetween: 0,
    // mousewheel: true,
    navigation: {
        nextEl: '.big-active-next-slide',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect:'slide',
});



const tarrifsOptions = {
    loop: true,
    autoplay: true,
    speed:1000,
    slidesPerView: 2.3,
    navigation: {
        prevEl:'.arrow-slider-prev',
        nextEl:'.arrow-slider-next',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 0
        },
        410:{
            slidesPerView: 1.4,
            spaceBetween: 0
        },
        500: {
            slidesPerView: 1.6,
            spaceBetween: 0,
        },
   
        1200: {
            slidesPerView: 2.3,
            spaceBetween: 0,
        },
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
};

const tarifsSliderMain = new Swiper('#pills-tariff-main', tarrifsOptions);
const tarifsSliderOther = new Swiper('#pills-tariff-other', tarrifsOptions);