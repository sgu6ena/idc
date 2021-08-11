const dollar = 16;
const prices = document.querySelectorAll(".price");

prices.forEach((price) => {
  const priceCount = price.querySelector(".price-count").textContent;
  price.addEventListener("mouseover", () => {
    price.querySelector(".price-count").textContent =
      Math.floor((priceCount / dollar) * 100) / 100;
    price.querySelector(".price-currency").innerHTML = " USD";
  });
  price.addEventListener("mouseout", () => {
    price.querySelector(".price-count").textContent = priceCount;
    price.querySelector(".price-currency").innerHTML = " RUP";
  });
});
