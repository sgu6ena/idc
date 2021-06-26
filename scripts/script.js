const bigSlider = new Swiper('.big-slider', {
    speed: 1000,
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.arrow-slider-next',
        prevEl: '.arrow-slider-prev',
    },
    pagination: {
        el: '.progress-slider',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return `<div class="progress-slider-start ">0${current}</div>
            <progress class="progress-bar " max="${total}" value="${current}"></progress>
            <div class="progress-slider-end">0${total}</div>`;
        },
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});


const headerMenu = document.querySelector('.header-menu');
const swiperPreloader = document.querySelector('.swiper-lazy-preloader');
bigSlider.on('slideChange', () => {
    if (bigSlider.slides[bigSlider.activeIndex].classList.contains('slide-ligth'))
        headerMenu.classList.add('header-dark');
    else
        headerMenu.classList.remove('header-dark');
});

bigSlider.on('beforeTransitionStart', () => {
    setTimeout(() => {
        console.log('смена слайда');
        swiperPreloader.style.display = 'block';
    }, 3000);
    swiperPreloader.style.display = 'none';

})

const tarrifsOptions = {
    slidesPerView: 1,
    pagination: {
        el: '.tariffs-swiper-pagination',
        type: 'bullets',
    },
        breakpoints: {
            320:{
                slidesPerView: 1,
                spaceBetween: 0
            },

            500:{
                slidesPerView: 1,
                spaceBetween: 20,
            },
            780: {
                slidesPerView: 2.3,
                spaceBetween: 0
            },
            995: {
                slidesPerView: 3.4,
                spaceBetween: 0
            },
            1200: {
                watchOverflow: true,
                slidesPerView: 4,
                spaceBetween: 0
            },
        }, 
observer:true,
observeParents:true,
observeSlideChildren:true,
};

const tarifsSliderHits = new Swiper('#pills-tariff-hits', tarrifsOptions);
const tarifsSliderMobile = new Swiper('#pills-tariff-mobile', tarrifsOptions);
const tarifsSliderInternet = new Swiper('#pills-tariff-internet', tarrifsOptions);
const tarifsSliderTv = new Swiper('#pills-tariff-tv', tarrifsOptions);
const tarifsSliderHomePhone = new Swiper('#pills-tariff-home-phone', tarrifsOptions);

const extraSlider = new Swiper('.swiper-exrta', {
    slidesPerView: 1,
    pagination: {
        el: '.tariffs-swiper-pagination',
        type: 'bullets',       
    },
        breakpoints: {

            440:{
                slidesPerView: 1,
              
            },

            770:{
                slidesPerView: 2,
                spaceBetween:20,
            },
            
            1100: {
                watchOverflow: true,
                slidesPerView: 3,
                spaceBetween: 20
            },
          
        }, 
});


