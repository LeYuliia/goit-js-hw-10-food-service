"use strict";

const bodyRef = document.querySelector('body');
const inputRef = document.querySelector('input');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// Переключение темы
const classChange = () => {
  if (inputRef.checked === true) {
    localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
  } else {
    localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
  }
  bodyRef.setAttribute('class', JSON.parse(localStorage.getItem('Theme')));
  localStorage.setItem('inputRef.checked', JSON.stringify(inputRef.checked));
};

//Сохранение темы при перезагрузке страницы
const chekboxChecked = () => {
  const checkedValue = JSON.parse(localStorage.getItem('inputRef.checked'));
  if (checkedValue === true) {
    inputRef.setAttribute('checked', true);
    bodyRef.setAttribute('class', Theme.DARK);
  }
};

inputRef.addEventListener('input', classChange);
document.addEventListener('DOMContentLoaded', chekboxChecked);