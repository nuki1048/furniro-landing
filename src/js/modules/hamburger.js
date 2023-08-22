const toggleDisplayOnElement = (element, originalDisplayProperty) => {
  // eslint-disable-next-line no-unused-expressions
  const compStyles = window.getComputedStyle(element);
  if (compStyles.display === originalDisplayProperty) {
    // eslint-disable-next-line no-param-reassign
    element.style.display = 'none';
  } else {
    // eslint-disable-next-line no-param-reassign
    element.style.display = originalDisplayProperty;
  }
};

const hamburgerParent = document.querySelector('[data-hamburger-parent]');
const menuElement = hamburgerParent.querySelector('[data-hamburger-menu]');
const hamburgerButton = hamburgerParent.querySelector(
  // eslint-disable-next-line comma-dangle
  '[data-hamburger-button]'
);
const hamburgerMenuButton = document.querySelector('[data-hamburger-close]');

hamburgerButton.addEventListener('click', () => {
  toggleDisplayOnElement(menuElement, 'block');
});

hamburgerMenuButton.addEventListener('click', () => {
  toggleDisplayOnElement(menuElement, 'block');
});
