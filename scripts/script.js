// * * Слайдеры

const bigSlider = new Swiper('.big-slider', {
  preloadImages: false,
  lazy: true,
lazy: {
    loadPrevNext: true,
    checkInView:true,
  },
    speed: 2000,
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 10000,
    },
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
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
const swiperPreloader = document.querySelector('.aminatse');

bigSlider.on('slideChange', () => {
    if (bigSlider.slides[bigSlider.activeIndex].classList.contains('slide-ligth'))
        headerMenu.classList.add('header-dark');
    else
        headerMenu.classList.remove('header-dark');
});

bigSlider.on('autoplay',()=>{
    swiperPreloader.classList.toggle('active');   
 });

  bigSlider.on('transitionEnd', () => {
      if(bigSlider.autoplay.running)
            swiperPreloader.classList.toggle('active');  
}) 
        
 bigSlider.on('autoplayStop', () => {
    swiperPreloader.classList.remove('active');  
 });
        

const tarrifsOptions = {
    slidesPerView: 1,
    pagination: {
        el: '.tariffs-swiper-pagination',
        type: 'bullets',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 5
        },
        410:{
            slidesPerView: 1.4,
            spaceBetween: 5
        },
        500: {
            slidesPerView: 1.6,
            spaceBetween: 10,
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
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
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
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        770: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1100: {
            watchOverflow: true,
            slidesPerView: 3,
            spaceBetween: 20
        },

    },
});

const shopSlider = new Swiper('.shop-slider', {
    pagination: {
        clickable: true,
        el: '.tariffs-swiper-pagination',
        type: 'bullets',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 0,
        },
        440: {
            slidesPerView: 1.6,
            spaceBetween: 0,
        },

        770: {
            slidesPerView:2.8,
            spaceBetween: 0,
        },
        990: {
            slidesPerView:3.4,
            spaceBetween: 0,
        },
        1100: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1400: {
            slidesPerView: 5,
            watchOverflow: true,
            spaceBetween: 0,
        },

    },
});

const newsSlider = new Swiper('.news-slider', {
    slidesPerView: 1,
    watchOverflow: true,
    pagination: {
        el: '.tariffs-swiper-pagination',
        type: 'bullets',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        770: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        1100: {
            watchOverflow: true,
            slidesPerView: 3,
            spaceBetween: 20
        },
    },
});

//* * Табы тарифов

const selectTariff = document.querySelector('#select-tariff');
const tabsTariff = document.querySelectorAll('.tab-tariff');

selectTariff.onchange = () => {
    const value = selectTariff[selectTariff.options.selectedIndex].value;
    tabsTariff.forEach(item => item.classList.remove('active'));
    document.querySelector(`#${value}`).classList.add('active');
    document.querySelector(`#${value}`).classList.add('show');
}

//* * табы оплаты
const selectPayment = document.querySelector('#select-payment');
const tabsPayment = document.querySelectorAll('.tab-payment');

selectPayment.onchange = () => {
    const value = selectPayment[selectPayment.options.selectedIndex].value;
    tabsPayment.forEach(item => item.classList.remove('active'));
    document.querySelector(`#${value}`).classList.add('active');
    document.querySelector(`#${value}`).classList.add('show');
}

// * * likes

const shopCardFavoritesButton = document.querySelectorAll('.shop-card-favorites-button');
shopCardFavoritesButton.forEach(item => item.addEventListener('click', () =>{
    item.classList.toggle('favorits');
}))



