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

if (document.documentElement.scrollWidth < 991) {
    bigLight.destroy();
}