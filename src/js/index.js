/* const lowers = ['alex', 'george', 'bonnie', 'maria', 'ellie'];
const uppers = lowers.map(name => name.toUpperCase());
uppers.forEach(name => console.log(`Hello, ${name}`)); */
import app from './components/app';
import { createStore } from './state';
import setupListeners from './setup_listeners';
/*
function reducer(state, event, data) {
    switch (event) {
        case 'FOO':
            return Object.assign({}, state, {
                name: 'suren',
            });
        case 'BAR':
            return Object.assign({}, state, data);
        default:
            return state;
    }
}
*/
function reducer(state, event, data) {
    switch (event) {
        case 'SET_ITEMS':
            return Object.assign({}, state, {
                items: data.items.reduce((total, item) =>
                    Object.assign({}, total, {
                        [item.id]: item
                    }), {}),
            });
        case 'ITEM_ADDED':
            return Object.assign({}, state, {
                cart: (new Set(state.cart)).add(data.item),
            });
        case 'ITEM_REMOVED':
            const newCart = (new Set(state.cart));
            newCart.delete(data.item);
            return Object.assign({}, state, {
                cart: newCart,
            });
        case 'TOGGLE_SHOW_CART':
            return Object.assign({}, state, {
                cartVisible: !state.cartVisible,
            });
        default:
            return state;
    }
}
const store = createStore(reducer);
/*
store.on('FOO', state => {
    console.log('in FOO callback');
    console.log('state', state);
});

store.on('BAR', state => {
    console.log('in BAR callback');
    console.log('state', state);
});

store.on('NOT_REAL', state => {
    console.log('in NOT_REAL callback');
    console.log('state', state);
});

store.trigger('BAR', {
    name: 'surya',
    job: 'full stack web developer',
});
store.trigger('FOO');
store.trigger('NOT_REAL');
*/
fetch('food.json')
    .then(res => res.json())
    .then(resBody => {
        const body = document.querySelector('body');
        // body.insertBefore(app(resBody), body.childNodes[0]);
        body.insertBefore(app(store), body.childNodes[0]);
        store.trigger('SET_ITEMS', { items: resBody });
        setupListeners(store);
    });