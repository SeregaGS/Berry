/* в этот файл добавляет скрипты*/
const burgerButton = document.querySelector('.burger-button');
const burgerText = burgerButton.querySelector('.visually-hidden');
const navigation = document.querySelector('.navigation__container');

burgerButton.addEventListener('click', () => {
  const isOpen = burgerButton.classList.contains('burger-button--open');
  burgerText.textContent = isOpen ? 'Открыть меню' : 'Закрыть меню';
  burgerButton.classList.toggle('burger-button--open');
  navigation.classList.toggle('navigation__container--open');
});

