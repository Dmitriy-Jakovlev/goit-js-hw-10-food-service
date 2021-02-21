import './styles.css';
import './theme-switch';
import template from '../templats/template.hbs';
import menu from './menu.json';

const menuRef = document.querySelector('.js-menu');

const markup = template(menu);
menuRef.insertAdjacentHTML("beforeend", markup);