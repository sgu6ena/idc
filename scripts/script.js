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
});

const tarrifsOptions = {
    slidesPerView: 1,
    pagination: {
        el: '.tariffs-swiper-pagination',
        type: 'bullets',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.1,
            spaceBetween: 10
        },
        500: {
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
            slidesPerView: 1.1,
            spaceBetween: 20,
        },
        770: {
            slidesPerView: 2.2,
            spaceBetween: 30,
        },
        1100: {
            slidesPerView: 3,
            watchOverflow: true,
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
        dynamicBullets: true,
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


//* * флип логина

const buttonModalLoginNext = document.querySelector('.button-modal-login-next');
const loginBackward = document.querySelectorAll('.login-backward');

const buttonModalForgottenPassword = document.querySelector('.button-modal-forgotten-password');
const loginButtonBackward = document.querySelector('.login-button-backward');
const inputLogin = document.querySelector('.input-login');
const modalLoginTextDescr = document.querySelector('.modal-login-text-descr');
const modalLoginTextDescrSMS = document.querySelector('.modal-login-text-descr-sms');
const cardLogin = document.querySelector('.card-login')
const cardPassword = document.querySelector('.card-pass')
const cardSMS = document.querySelector('.card-sms')



inputLogin.addEventListener('keyup', () => {
    console.log(inputLogin.value.length);
    if (inputLogin.value.length<11) {
        buttonModalLoginNext.disabled = true;
    } else {  buttonModalLoginNext.disabled = false;
        modalLoginTextDescr.innerHTML = `для номера ${inputLogin.value}`;

    }
})



buttonModalLoginNext.addEventListener('click', () => {
    cardLogin.classList.toggle('hidden');
    cardPassword.classList.toggle('hidden');
    loginButtonBackward.disabled = false;
    buttonModalLoginNext.disabled = true;
});


buttonModalForgottenPassword.addEventListener('click', () => {
    cardSMS.classList.toggle('hidden');
    cardPassword.classList.toggle('hidden');
    buttonModalLoginNext.disabled = true;
    loginButtonBackward.disabled = false;
});

loginBackward.forEach(item => item.addEventListener('click', () => {
    cardLogin.classList.remove('hidden');
    cardPassword.classList.add('hidden');
    cardSMS.classList.add('hidden');
    modalLoginTextDescrSMS.innerHTML =  `для номера ${inputLogin.value} `;
    loginButtonBackward.disabled = true;
    buttonModalLoginNext.disabled = false;
}));

