// source/scripts/burger.js
var navigation = document.querySelector(".navigation");
var burgerButton = navigation.querySelector(".burger-button");
var burgerText = burgerButton.querySelector(".visually-hidden");
var navigationContainer = navigation.querySelector(".navigation__container");
var burger = () => {
  if (navigation.classList.contains("navigation-no-js")) {
    navigation.classList.remove("navigation-no-js");
  }
  burgerButton.addEventListener("click", () => {
    const isOpen = burgerButton.classList.contains("burger-button--open");
    burgerText.textContent = isOpen ? "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E" : "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E";
    burgerButton.classList.toggle("burger-button--open");
    navigationContainer.classList.toggle("navigation__container--open");
  });
};
export {
  burger
};
//# sourceMappingURL=burger.js.map
