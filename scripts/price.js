const dollar = 16;
const prices = document.querySelectorAll('.price');

prices.forEach(price=>price.addEventListener('mouseover',()=>{
const priceCount = price.querySelector('.price-count');
priceCount.innerHTML = priceCount.textContent/dollar;
price.querySelector('.price-currency').innerHTML=" $";
}));

prices.forEach(price=>price.addEventListener('mouseout',()=>{
    const priceCount = price.querySelector('.price-count');
    priceCount.innerHTML = priceCount.textContent*dollar;
    price.querySelector('.price-currency').innerHTML=" руб.";
    }));