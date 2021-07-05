const swiper = new Swiper(".mySwiper", {
    speed:500,
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    navigation: {
        nextEl: '.big-light-next-slide',
        // prevEl: '.big-light-next-slide',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});