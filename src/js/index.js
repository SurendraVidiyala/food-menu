/* const lowers = ['alex', 'george', 'bonnie', 'maria', 'ellie'];
const uppers = lowers.map(name => name.toUpperCase());
uppers.forEach(name => console.log(`Hello, ${name}`)); */

import app from './components/app';
const body = document.querySelector('body');
body.insertBefore(app(), body.childNodes[0]);