const navigation = document.querySelector('.navigation');
const burgerButton = navigation.querySelector('.burger-button');
const burgerText = burgerButton.querySelector('.visually-hidden');
const navigationContainer = navigation.querySelector('.navigation__container');

const burger = () => {
  if (navigation.classList.contains('navigation-no-js')) {
    navigation.classList.remove('navigation-no-js');
  }
  burgerButton.addEventListener('click', () => {
    const isOpen = burgerButton.classList.contains('burger-button--open');
    burgerText.textContent = isOpen ? 'Открыть меню' : 'Закрыть меню';
    burgerButton.classList.toggle('burger-button--open');
    navigationContainer.classList.toggle('navigation__container--open');
  });
};

export { burger };
