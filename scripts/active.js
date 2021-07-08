const bigActive = new Swiper(".big-active", {
    loop: true,
    autoplay: true,
    autoplay:{
      delay:30000,  
    },
    simulateTouch:false,
    speed:700,
    sensitivity: 20,
    // direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    navigation: {
        nextEl: '.big-active-next-slide',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect:'slide',
    controller: {
        by: 'container',
      },
      touchRatio: 0.1,
});



const tarrifsOptions = {
    effect:'fade',
    centerSlides:true,
    touchRatio: 0.1,
    loop: true,
    autoplay: true,
    speed:1000,
    // slidesPerView: 3,
    navigation: {
        prevEl:'.arrow-slider-prev',
        nextEl:'.arrow-slider-next',
    },
    breakpoints: {
        // 320: {
        //     slidesPerView: 1.2,
        //     spaceBetween: 0
        // },
        // 410:{
        //     slidesPerView: 1.4,
        //     spaceBetween: 0
        // },
        700: {
            slidesPerView: 1,
            spaceBetween: 0,
            effect:'fade',
        },
   
        1200: {
            slidesPerView: 2.8,
            spaceBetween: 30,
            effect:'coverflow',
            coverflowEffect: {
                rotate: 30,
                slideShadows: false,
              },
        },
    },

    observer: true,
    observeParents: true,
    observeSlideChildren: true,
};

const tarifsSliderMain = new Swiper('#pills-tariff-main', tarrifsOptions);
const tarifsSliderOther = new Swiper('#pills-tariff-other', tarrifsOptions);
console.log("document.documentElement.scrollWidth",document.documentElement.scrollWidth);

// * * отключение слайдера
if (document.documentElement.offsetWidth < 991) {
    bigActive.destroy();
    console.log("document.documentElement.offsetWidth",document.documentElement.offsetWidth);
}