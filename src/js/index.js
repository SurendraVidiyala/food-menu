/* const lowers = ['alex', 'george', 'bonnie', 'maria', 'ellie'];
const uppers = lowers.map(name => name.toUpperCase());
uppers.forEach(name => console.log(`Hello, ${name}`)); */

import app from './components/app';

fetch('food.json')
    .then(res => res.json())
    .then(resBody => {
        const body = document.querySelector('body');
        body.insertBefore(resBody, body.childNodes[0]);
    });