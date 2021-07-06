const bigLight = new Swiper(".big-light", {
    speed:700,
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    navigation: {
        nextEl: '.big-light-next-slide',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect:'slide',
});

// * * перекрашивание заголовка
const headerMenu = document.querySelector('.header-menu');
const logo = document.querySelector('.logo-icon');
bigLight.on('slideChange', () => {
    if (bigLight.slides[bigLight.activeIndex].classList.contains('slide-2')){
        headerMenu.classList.add('header-dark');
        logo.style.fill = '#F2F3F7';
        document.querySelector('.hr-line').style.borderRight ='3px solid rgba(0, 98, 133, .5)';
        document.querySelectorAll('.swiper-pagination-bullet').forEach(item => item.style.background ='#006285');

    }
    else{ 
        headerMenu.classList.remove('header-dark');
        if (bigLight.slides[bigLight.activeIndex].classList.contains('slide-3')){
            logo.style.fill = '#006285';  
            document.querySelector('.hr-line').style.borderRight ='3px solid rgba(255, 255, 255, .5)'; 
            document.querySelectorAll('.swiper-pagination-bullet').forEach(item => item.style.background ='#FFF');
        }
    }
});


// * * отключение слайдера
if (document.documentElement.scrollWidth < 991) {
    bigLight.destroy();
}