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
    localStorage.setItem('Theme', String(Theme.DARK));
  } else {
    localStorage.setItem('Theme', String(Theme.LIGHT));
  }
  bodyRef.setAttribute('class', localStorage.getItem('Theme'));
};

//Сохранение темы при перезагрузке страницы
const chekboxChecked = () => {
 const themeValue = localStorage.getItem('Theme');
  if (themeValue === Theme.DARK) {
    inputRef.checked =  true;
    bodyRef.setAttribute('class', Theme.DARK);
  }
};

inputRef.addEventListener('input', classChange);
document.addEventListener('DOMContentLoaded', chekboxChecked);
