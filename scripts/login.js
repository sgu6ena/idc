
//* *  логин

const buttonModalLoginNext = document.querySelector('.button-modal-login-next');
const loginBackward = document.querySelectorAll('.login-backward');
const buttonModalForgottenPassword = document.querySelector('.button-modal-forgotten-password');
const loginButtonBackward = document.querySelector('.login-button-backward');

const inputLogin = document.querySelector('.input-login');
const modalLoginTextDescr = document.querySelector('.modal-login-text-descr');
const modalLoginTextDescrSMS = document.querySelector('.modal-login-text-descr-sms');

const cardLogin = document.querySelector('.card-login');
const cardPassword = document.querySelector('.card-pass');
const cardSMS = document.querySelector('.card-sms');
const loginDangerText = document.querySelector('.login-danger-text');
const spinnerBorder = document.querySelector('.spinner-border');


inputLogin.addEventListener('keyup', () => {
    

    if (inputLogin.value.length < 11) {
        buttonModalLoginNext.disabled = true;
    } else if (inputLogin.value.match(/^0{1}\(7{2}\d\)\d{5}$/)!== null) {
            buttonModalLoginNext.disabled = false; 
            modalLoginTextDescr.innerHTML = `для номера ${inputLogin.value} `;
        }
        else{
            loginDangerText.style.display ='block';
        }
    }
)


buttonModalLoginNext.addEventListener('click', e => {
    e.preventDefault();
    cardLogin.classList.toggle('deactivate');
    spinnerBorder.classList.toggle('hidden');
    setTimeout(()=>{
        cardLogin.classList.toggle('hidden');
        spinnerBorder.classList.toggle('hidden');
        cardPassword.classList.toggle('hidden');
        cardLogin.classList.toggle('deactivate');
        loginButtonBackward.disabled = false;
        buttonModalLoginNext.disabled = true;
    },3000);

});


buttonModalForgottenPassword.addEventListener('click', e => {
    e.preventDefault();
    cardSMS.classList.toggle('hidden');
    cardPassword.classList.toggle('hidden');
    buttonModalLoginNext.disabled = true;
    loginButtonBackward.disabled = false;
});

loginBackward.forEach(item => item.addEventListener('click', e => {
    e.preventDefault();
    cardLogin.classList.remove('hidden');
    cardPassword.classList.add('hidden');
    cardSMS.classList.add('hidden');
    modalLoginTextDescrSMS.innerHTML = `для номера ${inputLogin.value} `;
    loginButtonBackward.disabled = true;
    buttonModalLoginNext.disabled = false;
}));



// 1. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
// Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
// This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
const targetElement = document.querySelector('.modal-open);

// 2. ...in some event handler after showing the target element...disable body scroll
bodyScrollLock.disableBodyScroll(targetElement);

// 3. ...in some event handler after hiding the target element...
bodyScrollLock.enableBodyScroll(targetElement);

// 4. Useful if we have called disableBodyScroll for multiple target elements,
// and we just want a kill-switch to undo all that.
bodyScrollLock.clearAllBodyScrollLocks();