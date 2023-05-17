import './style.css';
import {onHomeClick, onContactPageClick, onMenuPageClick} from "./pageContent";

onHomeClick();
document.querySelector('#home').addEventListener('click', onHomeClick);
document.querySelector('#restaurant-menu').addEventListener('click',onMenuPageClick);
document.querySelector('#contact').addEventListener('click', onContactPageClick);
