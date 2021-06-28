// * * Слайдеры

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
      
        swiperPreloader.style.display = 'block';
    }, 3000);
    swiperPreloader.style.display = 'none';

})


const balanceSlider = new Swiper('.slider-balance', {
    slidesPerView: 2,
    pagination: {
        el: '.tariffs-swiper-pagination',
        type: 'bullets',       
    },
    // watchOverflow: true,
        // breakpoints: {

        //     450:{
        //         slidesPerView: 1,
        //         spaceBetween:20,
              
        //     },

        //     820:{
        //         watchOverflow: true,
        //         slidesPerView: 2,
        //         spaceBetween:20,
        //     },
          
        // }, 
});




const tarrifsOptions = {
    slidesPerView: 1,
    pagination: {
        el: '.tariffs-swiper-pagination',
        type: 'bullets',       
    },
        breakpoints: {
            320:{
                slidesPerView: 1.1,
                spaceBetween: 10
            },

            500:{
                slidesPerView: 1.4,
                spaceBetween: 20,
            },
            770: {
                slidesPerView: 2.3,
                spaceBetween: 10
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

            320:{
                slidesPerView: 1,
                spaceBetween:20,
              
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

const shopSlider = new Swiper('.shop-slider', {
    // slidesPerView: 6,
    // slidesPerColumn:2,
    // slidesPerView: auto,
    pagination: {
        clickable:true,
        el: '.tariffs-swiper-pagination',
        type: 'bullets',       
    },
        breakpoints: {

            320:{
                slidesPerView: 1.1, 
                // slidesPerColumn:1,
                spaceBetween:20,
              
            },

            770:{ 
                // slidesPerColumn:1,
                slidesPerView: 2.2,
                spaceBetween:30,
            },
            
            1100: {
                
                slidesPerView: 3,
                // this.destroy(),
                watchOverflow: true,
                // slidesPerView: 4,
                // slidesPerColumn:2,
                spaceBetween: 50
            },
          
        }, 
});

const newsSlider = new Swiper('.news-slider', {
    slidesPerView: 1,
    watchOverflow: true,
    pagination: {
        el: '.tariffs-swiper-pagination',
        type: 'bullets',  
        dynamicBullets:true,     
    },
        breakpoints: {

            320:{
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

//* * Табы

const selectTariff = document.querySelector('#select-tariff');
const tabsTariff = document.querySelectorAll('.tab-tariff');

selectTariff.onchange = () => {
    const value = selectTariff[selectTariff.options.selectedIndex].value;
    tabsTariff.forEach(item => item.classList.remove('active'));
    document.querySelector(`#${value}`).classList.add('active');
    document.querySelector(`#${value}`).classList.add('show');
    }


const selectPayment = document.querySelector('#select-payment');
const tabsPayment = document.querySelectorAll('.tab-payment');

selectPayment.onchange = () => {
    const value = selectPayment[selectPayment.options.selectedIndex].value;
    tabsPayment.forEach(item => item.classList.remove('active'));
    document.querySelector(`#${value}`).classList.add('active');
    document.querySelector(`#${value}`).classList.add('show');
    }


// if (document.documentElement.scrollWidth > 1100) {
//     shopSlider.destroy();
    // swiper1.destroy();
    // swiper2.destroy();
// }