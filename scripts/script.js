const swiper = new Swiper('.big-slider', {
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
    lazy: {
        loadPrevNext: true,

    },

    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },


});


const headerMenu = document.querySelector('.header-menu');
swiper.on('slideChange',  ()=> {
    if (swiper.slides[swiper.activeIndex].classList.contains('slide-ligth')) 
        headerMenu.classList.add('header-dark');
     else 
        headerMenu.classList.remove('header-dark');
    
});