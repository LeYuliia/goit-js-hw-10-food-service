"use strict";

import itemsTemplate from '../template/template.hbs';
import menu from '../menu.json';

const markup = itemsTemplate(menu);
const menuListRef = document.querySelector('.js-menu');
menuListRef.insertAdjacentHTML('beforeend', markup);
