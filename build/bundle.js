(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.text = text;
exports.createElement = createElement;
exports.div = div;
exports.article = article;
exports.h1 = h1;
exports.h3 = h3;
exports.nav = nav;
exports.ul = ul;
exports.li = li;
exports.i = i;
exports.span = span;
exports.section = section;
exports.footer = footer;
exports.p = p;
exports.img = img;
exports.button = button;
exports.addId = addId;
exports.addClass = addClass;
function text(words) {
    return document.createTextNode(words);
}
function createElement(type) {
    var newElement = document.createElement(type);

    for (var _len = arguments.length, children = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        children[_key - 1] = arguments[_key];
    }

    children.forEach(function (child) {
        return newElement.appendChild(child);
    });
    return newElement;
}
function div() {
    for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        children[_key2] = arguments[_key2];
    }

    return createElement.apply(undefined, ['div'].concat(children));
}
function article() {
    for (var _len3 = arguments.length, children = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        children[_key3] = arguments[_key3];
    }

    return createElement.apply(undefined, ['article'].concat(children));
}
function h1() {
    for (var _len4 = arguments.length, children = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        children[_key4] = arguments[_key4];
    }

    return createElement.apply(undefined, ['h1'].concat(children));
}
function h3() {
    for (var _len5 = arguments.length, children = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        children[_key5] = arguments[_key5];
    }

    return createElement.apply(undefined, ['h3'].concat(children));
}
function nav() {
    for (var _len6 = arguments.length, children = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        children[_key6] = arguments[_key6];
    }

    return createElement.apply(undefined, ['nav'].concat(children));
}
function ul() {
    for (var _len7 = arguments.length, children = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        children[_key7] = arguments[_key7];
    }

    return createElement.apply(undefined, ['ul'].concat(children));
}
function li() {
    for (var _len8 = arguments.length, children = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        children[_key8] = arguments[_key8];
    }

    return createElement.apply(undefined, ['li'].concat(children));
}
function i() {
    for (var _len9 = arguments.length, children = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        children[_key9] = arguments[_key9];
    }

    return createElement.apply(undefined, ['i'].concat(children));
}
function span() {
    for (var _len10 = arguments.length, children = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        children[_key10] = arguments[_key10];
    }

    return createElement.apply(undefined, ['span'].concat(children));
}
function section() {
    for (var _len11 = arguments.length, children = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        children[_key11] = arguments[_key11];
    }

    return createElement.apply(undefined, ['section'].concat(children));
}
function footer() {
    for (var _len12 = arguments.length, children = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        children[_key12] = arguments[_key12];
    }

    return createElement.apply(undefined, ['footer'].concat(children));
}
function p() {
    for (var _len13 = arguments.length, children = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        children[_key13] = arguments[_key13];
    }

    return createElement.apply(undefined, ['p'].concat(children));
}
function img(source) {
    var image = createElement('img');
    image.src = source;
    return image;
}
function button() {
    for (var _len14 = arguments.length, children = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        children[_key14] = arguments[_key14];
    }

    return createElement.apply(undefined, ['button'].concat(children));
}
function addId(element, id) {
    var newElement = element.cloneNode(true);
    return Object.assign(newElement, { id: id });
}
function addClass(element) {
    var newElement = element.cloneNode(true);

    for (var _len15 = arguments.length, klasses = Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
        klasses[_key15 - 1] = arguments[_key15];
    }

    klasses.forEach(function (klass) {
        return newElement.classList.add(klass);
    });
    return newElement;
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = app;

var _builders = require('../builders');

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _hero = require('./hero');

var _hero2 = _interopRequireDefault(_hero);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var _bottom = require('./bottom');

var _bottom2 = _interopRequireDefault(_bottom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//export default function app(items) {
function app(store) {
    var modalEle = (0, _modal2.default)(store);
    //const modalEle = modal(items);
    var navbarEle = (0, _navbar2.default)();
    var heroEle = (0, _hero2.default)();
    //const menuEle = menu(items);
    var menuEle = (0, _menu2.default)(store);
    var bottomEle = (0, _bottom2.default)();
    var appEle = (0, _builders.addId)((0, _builders.div)(modalEle, navbarEle, heroEle, menuEle, bottomEle), 'app-container');
    return appEle;
}

},{"../builders":1,"./bottom":3,"./hero":4,"./menu":6,"./modal":9,"./navbar":11}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = bottom;

var _builders = require('../builders');

function bottom() {
    var name = (0, _builders.p)((0, _builders.text)('Surendra Vidiyala'));
    var content = (0, _builders.addClass)((0, _builders.div)(name), 'content', 'is-centered');

    var container = (0, _builders.addClass)((0, _builders.div)(content), 'container');

    return (0, _builders.addClass)((0, _builders.footer)(container), 'footer');
}

},{"../builders":1}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hero;

var _builders = require('../builders');

function hero() {
    var logo = (0, _builders.addClass)((0, _builders.img)('static/chef_white.png'), 'logo');
    var the = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('The')), 'hero-text-light');
    var southIndian = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('South Indian')), 'hero-text-bold');
    var cuisine = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('Cuisine')), 'hero-text-light');

    var container = (0, _builders.addClass)((0, _builders.div)(logo, the, southIndian, cuisine), 'container');

    var heroContent = (0, _builders.addClass)((0, _builders.div)(container), 'hero-content');

    return (0, _builders.addClass)((0, _builders.section)(heroContent), 'hero', 'splash');
}

},{"../builders":1}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = leftMenu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _menuList = require('./menuList');

var _menuList2 = _interopRequireDefault(_menuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function leftMenu() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var appetizers = (0, _menuList2.default)('Appetizers', (0, _helpers.filterByType)(items, 'appetizer'));
    var burgers = (0, _menuList2.default)('Burgers', (0, _helpers.filterByType)(items, 'burger'));

    return (0, _builders.addClass)((0, _builders.div)(appetizers, burgers), 'column', 'is-6');
}

},{"../builders":1,"../helpers":13,"./menuList":8}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = menu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _leftMenu = require('./leftMenu');

var _leftMenu2 = _interopRequireDefault(_leftMenu);

var _rightMenu = require('./rightMenu');

var _rightMenu2 = _interopRequireDefault(_rightMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* import { addClass, addId, div, section } from '../builders';
                                                                                                                                                                                                    import { $ } from '../helpers';
                                                                                                                                                                                                    import leftMenu from './leftMenu';
                                                                                                                                                                                                    import rightMenu from './rightMenu';
                                                                                                                                                                                                    
                                                                                                                                                                                                    //export default function menu(items = []) {
                                                                                                                                                                                                    export default function menu(store) {
                                                                                                                                                                                                        const menuEle = addId(addClass(div(), 'container'), 'menu');
                                                                                                                                                                                                        store.on('SET_ITEMS', ({ items }) => {
                                                                                                                                                                                                            const leftSide = leftMenu(items);
                                                                                                                                                                                                            const rightSide = rightMenu(items);
                                                                                                                                                                                                            const columns = addClass(section(leftSide, rightSide), 'columns');
                                                                                                                                                                                                            //const menuEle = addId(addClass(div(columns), 'container'), 'menu');
                                                                                                                                                                                                            $('#menu').children(columns);
                                                                                                                                                                                                        });
                                                                                                                                                                                                        return menuEle;
                                                                                                                                                                                                    } */

function menu(store) {
    var menuEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.div)(), 'container'), 'menu');
    store.on('SET_ITEMS', function (_ref) {
        var items = _ref.items;

        var leftSide = (0, _leftMenu2.default)(items);
        var rightSide = (0, _rightMenu2.default)(items);
        var columns = (0, _builders.addClass)((0, _builders.section)(leftSide, rightSide), 'columns');
        (0, _helpers.$)('#menu').children(columns);
    });

    store.on('ITEM_ADDED', function (_ref2) {
        var cart = _ref2.cart;

        var cartArray = [].concat(_toConsumableArray(cart));
        var articles = cartArray.map(function (id) {
            return 'article[data-key=\'' + id + '\']';
        });
        var buttons = cartArray.map(function (id) {
            return 'article[data-key=\'' + id + '\'] button.add-to-cart';
        });
        (0, _helpers.$)(articles.join(', ')).addClass('in-cart');
        (0, _helpers.$)(buttons.join(', ')).attr('disabled', 'disabled');
    });

    store.on('ITEM_REMOVED', function (_ref3) {
        var cart = _ref3.cart;

        var onPageKeys = (0, _helpers.$)('article.in-cart').map(function (ele) {
            return parseInt(ele.dataset.key, 10);
        });
        var inCartKeys = [].concat(_toConsumableArray(cart));
        var keysToRemove = onPageKeys.filter(function (key) {
            return !inCartKeys.includes(key);
        });
        keysToRemove.forEach(function (key) {
            (0, _helpers.$)('article[data-key=\'' + key + '\']').removeClass('in-cart');
            (0, _helpers.$)('article[data-key=\'' + key + '\'] button.add-to-cart').attr('disabled', false);
        });
    });

    return menuEle;
}

},{"../builders":1,"../helpers":13,"./leftMenu":5,"./rightMenu":12}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = menuItem;

var _builders = require('../builders');

var _helpers = require('../helpers');

function menuItem() {
    var itemData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var name = (0, _builders.addClass)((0, _builders.h3)((0, _builders.text)(itemData.name)), 'name');
    var price = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)('$' + (0, _helpers.formatPrice)(itemData.price))), 'price', 'is-pulled-right');
    var description = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)(itemData.description)), 'desc');
    var addToCart = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Add to Cart')), 'button', 'is-pulled-right', 'add-to-cart');
    var mediaContent = (0, _builders.addClass)((0, _builders.div)(name, price, description, addToCart), 'media-content');
    var item = (0, _builders.addClass)((0, _builders.article)(mediaContent), 'media', 'menu_item');
    item.dataset.key = itemData.id;
    return item;
}

},{"../builders":1,"../helpers":13}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = menuList;

var _builders = require('../builders');

var _menuItem = require('./menuItem');

var _menuItem2 = _interopRequireDefault(_menuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function menuList(headline) {
    var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var menuItems = items.map(_menuItem2.default);

    var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)(headline)), 'title');

    return (0, _builders.addClass)(_builders.div.apply(undefined, [title].concat(_toConsumableArray(menuItems))), 'collection');
}

},{"../builders":1,"./menuItem":7}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = modal;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _modalItem = require('./modalItem');

var _modalItem2 = _interopRequireDefault(_modalItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function modal(store) {
    var close = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'close'), 'close');
    var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)('Cart')), 'title');
    var cartContainer = (0, _builders.addId)((0, _builders.div)((0, _builders.p)((0, _builders.text)('Your cart is empty.'))), 'cart-items');
    var checkoutButton = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Checkout')), 'button', 'is-fullwidth');
    var modalContainer = (0, _builders.addClass)((0, _builders.div)(close, title, cartContainer, checkoutButton), 'modal-container');
    var modalEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.section)(modalContainer), 'modal'), 'modal');

    store.on('TOGGLE_SHOW_CART', function (_ref) {
        var cartVisible = _ref.cartVisible;

        var ele = (0, _helpers.$)('#modal');
        if (cartVisible) {
            ele.addClass('show');
        } else {
            ele.removeClass('show');
        }
    });

    store.on('ITEM_ADDED', function (_ref2) {
        var items = _ref2.items,
            cart = _ref2.cart;

        var cartArray = [].concat(_toConsumableArray(cart));
        var cartItems = cartArray.map(function (itemId) {
            return (0, _modalItem2.default)(items[itemId]);
        });
        var cartList = (0, _builders.addClass)(_builders.ul.apply(undefined, _toConsumableArray(cartItems)), 'menu');
        (0, _helpers.$)('#cart-items').children(cartList);
    });

    return modalEle;
}

},{"../builders":1,"../helpers":13,"./modalItem":10}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = modalItem;

var _builders = require('../builders');

var _helpers = require('../helpers');

function modalItem(itemData) {
    var name = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)(itemData.name)), 'name');
    var price = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)((0, _helpers.formatPrice)(itemData.price))), 'price', 'is-pulled-right');
    var removeButton = (0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'remove');
    var item = (0, _builders.addClass)((0, _builders.li)(name, price, removeButton), 'menu-item');
    item.dataset.key = itemData.id;

    return item;
}

},{"../builders":1,"../helpers":13}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = navbar;

var _builders = require('../builders');

function navbar() {
    var navLeft = (0, _builders.addClass)((0, _builders.div)(), 'navbar-left');

    var cartIcon = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-shopping-cart'), 'cart-icon');
    var cartItems = (0, _builders.addClass)((0, _builders.span)(), 'cart-items');
    var navbarItem = (0, _builders.addClass)((0, _builders.div)(cartIcon, cartItems), 'navbar-item');
    var navRight = (0, _builders.addClass)((0, _builders.div)(navbarItem), 'navbar-right', 'cart');

    return (0, _builders.addClass)((0, _builders.nav)(navLeft, navRight), 'navbar');
}

},{"../builders":1}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = rightMenu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _menuList = require('./menuList');

var _menuList2 = _interopRequireDefault(_menuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rightMenu() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var soupSalad = (0, _menuList2.default)('Soups and Salads', (0, _helpers.filterByType)(items, 'soup_salad'));
    var desserts = (0, _menuList2.default)('Desserts', (0, _helpers.filterByType)(items, 'dessert'));

    return (0, _builders.addClass)((0, _builders.div)(soupSalad, desserts), 'column', 'is-6');
}

},{"../builders":1,"../helpers":13,"./menuList":8}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatPrice = formatPrice;
exports.filterByType = filterByType;
exports.$ = $;
function formatPrice(price) {
    return parseFloat(price).toFixed(2);
}
function filterByType(map, type) {
    return Object.keys(map).filter(function (key) {
        return map[key].type === type;
    }).map(function (key) {
        return map[key];
    });
}
function $(query) {
    var elements = Array.prototype.slice.call(document.querySelectorAll(query));

    function on(event, cb) {
        elements.forEach(function (ele) {
            ele.addEventListener(event, cb);
        });
    }

    function children(toAdd) {
        elements.forEach(function (ele) {
            while (ele.firstChild) {
                ele.removeChild(ele.firstChild);
            }
            ele.appendChild(toAdd);
        });
    }

    function addClass(klass) {
        elements.forEach(function (ele) {
            ele.classList.add(klass);
        });
    }

    function removeClass(klass) {
        elements.forEach(function (ele) {
            ele.classList.remove(klass);
        });
    }

    function attr(attribute, value) {
        elements.forEach(function (ele) {
            if (value === false) {
                ele.removeAttribute(attribute);
            } else {
                ele.setAttribute(attribute, value);
            }
        });
    }

    function map(cb) {
        return elements.map(cb);
    }
    return {
        on: on,
        children: children,
        addClass: addClass,
        removeClass: removeClass,
        attr: attr,
        map: map
    };
}

},{}],14:[function(require,module,exports){
'use strict';

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _state = require('./state');

var _setup_listeners = require('./setup_listeners');

var _setup_listeners2 = _interopRequireDefault(_setup_listeners);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* const lowers = ['alex', 'george', 'bonnie', 'maria', 'ellie'];
                                                                                                                                                                                                                  const uppers = lowers.map(name => name.toUpperCase());
                                                                                                                                                                                                                  uppers.forEach(name => console.log(`Hello, ${name}`)); */


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
                items: data.items.reduce(function (total, item) {
                    return Object.assign({}, total, _defineProperty({}, item.id, item));
                }, {})
            });
        case 'ITEM_ADDED':
            return Object.assign({}, state, {
                cart: new Set(state.cart).add(data.item)
            });
        case 'ITEM_REMOVED':
            var newCart = new Set(state.cart);
            newCart.delete(data.item);
            return Object.assign({}, state, {
                cart: newCart
            });
        case 'TOGGLE_SHOW_CART':
            return Object.assign({}, state, {
                cartVisible: !state.cartVisible
            });
        default:
            return state;
    }
}
var store = (0, _state.createStore)(reducer);
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
fetch('food.json').then(function (res) {
    return res.json();
}).then(function (resBody) {
    var body = document.querySelector('body');
    // body.insertBefore(app(resBody), body.childNodes[0]);
    body.insertBefore((0, _app2.default)(store), body.childNodes[0]);
    store.trigger('SET_ITEMS', { items: resBody });
    (0, _setup_listeners2.default)(store);
});

},{"./components/app":2,"./setup_listeners":15,"./state":16}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (store) {
    (0, _helpers.$)('#cart-icon, #close').on('click', function () {
        store.trigger('TOGGLE_SHOW_CART');
    });

    function getParentWithKey(element) {
        var parent = element.parentElement;
        while (parent && !parent.dataset.key) {
            parent = parent.parentElement;
        }
        return parent;
    }
    (0, _helpers.$)('.add-to-cart').on('click', function (e) {
        var parent = getParentWithKey(e.currentTarget);
        var key = parseInt(parent.dataset.key, 10);
        store.trigger('ITEM_ADDED', { item: key });
    });
    (0, _helpers.$)('body').on('click', function (e) {
        if (e.target.classList.contains('remove')) {
            var element = e.target;
            var parent = getParentWithKey(element);
            var key = parseInt(parent.dataset.key, 10);
            parent.parentElement.removeChild(parent);
            store.trigger('ITEM_REMOVED', { item: key });
        }
    });
};

var _helpers = require('./helpers');

},{"./helpers":13}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createStore = createStore;
var defaultState = {
    items: {},
    cart: new Set(),
    cartVisible: false
};

function createStore(reducer) {
    var listeners = {};
    var state = Object.assign({}, defaultState);

    function on(event, cb) {
        if (!listeners[event]) {
            listeners[event] = [];
        }

        listeners[event].push(cb);
    }

    function trigger(event) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        state = reducer(state, event, data);

        if (listeners[event]) {
            listeners[event].forEach(function (cb) {
                cb(state);
            });
        }
    }

    return {
        on: on,
        trigger: trigger
    };
}

},{}]},{},[14])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxidWlsZGVycy5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXGFwcC5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXGJvdHRvbS5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXGhlcm8uanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxsZWZ0TWVudS5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXG1lbnUuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxtZW51SXRlbS5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXG1lbnVMaXN0LmpzIiwic3JjXFxqc1xcY29tcG9uZW50c1xcbW9kYWwuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxtb2RhbEl0ZW0uanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxuYXZiYXIuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxyaWdodE1lbnUuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIiwic3JjXFxqc1xcaW5kZXguanMiLCJzcmNcXGpzXFxzZXR1cF9saXN0ZW5lcnMuanMiLCJzcmNcXGpzXFxzdGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O1FDQWdCLEksR0FBQSxJO1FBR0EsYSxHQUFBLGE7UUFLQSxHLEdBQUEsRztRQUdBLE8sR0FBQSxPO1FBR0EsRSxHQUFBLEU7UUFHQSxFLEdBQUEsRTtRQUdBLEcsR0FBQSxHO1FBR0EsRSxHQUFBLEU7UUFHQSxFLEdBQUEsRTtRQUdBLEMsR0FBQSxDO1FBR0EsSSxHQUFBLEk7UUFHQSxPLEdBQUEsTztRQUdBLE0sR0FBQSxNO1FBR0EsQyxHQUFBLEM7UUFHQSxHLEdBQUEsRztRQUtBLE0sR0FBQSxNO1FBR0EsSyxHQUFBLEs7UUFJQSxRLEdBQUEsUTtBQXhEVCxTQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQ3hCLFdBQU8sU0FBUyxjQUFULENBQXdCLEtBQXhCLENB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QzNCLG1CQUFHLEtBQUg7QUFDSCxhQUZEO0FBR0g7QUFDSjs7QUFFRCxXQUFPO0FBQ0gsY0FERztBQUVIO0FBRkcsS0FBUDtBQUlIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBmdW5jdGlvbiB0ZXh0KHdvcmRzKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUod29yZHMpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gbmV3RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xyXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRpdiguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYXJ0aWNsZSguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGgxKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaDEnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGgzKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaDMnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG5hdiguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ25hdicsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdWwoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCd1bCcsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbGkoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdsaScsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaSguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2knLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNwYW4oLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdzcGFuJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZm9vdGVyKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZm9vdGVyJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgncCcsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaW1nKHNvdXJjZSkge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBjcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltYWdlLnNyYyA9IHNvdXJjZTtcclxuICAgIHJldHVybiBpbWFnZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYnV0dG9uKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRJZChlbGVtZW50LCBpZCkge1xyXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3RWxlbWVudCwgeyBpZCB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgLi4ua2xhc3Nlcykge1xyXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAga2xhc3Nlcy5mb3JFYWNoKGtsYXNzID0+IG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChrbGFzcykpO1xyXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgeyBkaXYsIGFkZElkIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgbW9kYWwgZnJvbSAnLi9tb2RhbCc7XHJcbmltcG9ydCBuYXZiYXIgZnJvbSAnLi9uYXZiYXInO1xyXG5pbXBvcnQgaGVybyBmcm9tICcuL2hlcm8nO1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xyXG5pbXBvcnQgYm90dG9tIGZyb20gJy4vYm90dG9tJztcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwKGl0ZW1zKSB7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcChzdG9yZSkge1xyXG4gICAgY29uc3QgbW9kYWxFbGUgPSBtb2RhbChzdG9yZSk7XHJcbiAgICAvL2NvbnN0IG1vZGFsRWxlID0gbW9kYWwoaXRlbXMpO1xyXG4gICAgY29uc3QgbmF2YmFyRWxlID0gbmF2YmFyKCk7XHJcbiAgICBjb25zdCBoZXJvRWxlID0gaGVybygpO1xyXG4gICAgLy9jb25zdCBtZW51RWxlID0gbWVudShpdGVtcyk7XHJcbiAgICBjb25zdCBtZW51RWxlID0gbWVudShzdG9yZSk7XHJcbiAgICBjb25zdCBib3R0b21FbGUgPSBib3R0b20oKTtcclxuICAgIGNvbnN0IGFwcEVsZSA9IGFkZElkKGRpdihtb2RhbEVsZSwgbmF2YmFyRWxlLCBoZXJvRWxlLCBtZW51RWxlLCBib3R0b21FbGUpLCAnYXBwLWNvbnRhaW5lcicpO1xyXG4gICAgcmV0dXJuIGFwcEVsZTtcclxufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGZvb3RlciwgdGV4dCwgcCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJvdHRvbSgpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBwKHRleHQoJ1N1cmVuZHJhIFZpZGl5YWxhJykpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGFkZENsYXNzKGRpdihuYW1lKSwgJ2NvbnRlbnQnLCAnaXMtY2VudGVyZWQnKTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBhZGRDbGFzcyhkaXYoY29udGVudCksICdjb250YWluZXInKTtcclxuXHJcbiAgICByZXR1cm4gYWRkQ2xhc3MoZm9vdGVyKGNvbnRhaW5lciksICdmb290ZXInKTtcclxufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGltZywgcCwgc2VjdGlvbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlcm8oKSB7XHJcbiAgICBjb25zdCBsb2dvID0gYWRkQ2xhc3MoaW1nKCdzdGF0aWMvY2hlZl93aGl0ZS5wbmcnKSwgJ2xvZ28nKTtcclxuICAgIGNvbnN0IHRoZSA9IGFkZENsYXNzKHAodGV4dCgnVGhlJykpLCAnaGVyby10ZXh0LWxpZ2h0Jyk7XHJcbiAgICBjb25zdCBzb3V0aEluZGlhbiA9IGFkZENsYXNzKHAodGV4dCgnU291dGggSW5kaWFuJykpLCAnaGVyby10ZXh0LWJvbGQnKTtcclxuICAgIGNvbnN0IGN1aXNpbmUgPSBhZGRDbGFzcyhwKHRleHQoJ0N1aXNpbmUnKSksICdoZXJvLXRleHQtbGlnaHQnKTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBhZGRDbGFzcyhkaXYobG9nbywgdGhlLCBzb3V0aEluZGlhbiwgY3Vpc2luZSksICdjb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCBoZXJvQ29udGVudCA9IGFkZENsYXNzKGRpdihjb250YWluZXIpLCAnaGVyby1jb250ZW50Jyk7XHJcblxyXG4gICAgcmV0dXJuIGFkZENsYXNzKHNlY3Rpb24oaGVyb0NvbnRlbnQpLCAnaGVybycsICdzcGxhc2gnKTtcclxufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCB7IGZpbHRlckJ5VHlwZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgbWVudUxpc3QgZnJvbSAnLi9tZW51TGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZWZ0TWVudShpdGVtcyA9IFtdKSB7XHJcbiAgICBjb25zdCBhcHBldGl6ZXJzID0gbWVudUxpc3QoJ0FwcGV0aXplcnMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdhcHBldGl6ZXInKSk7XHJcbiAgICBjb25zdCBidXJnZXJzID0gbWVudUxpc3QoJ0J1cmdlcnMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdidXJnZXInKSk7XHJcblxyXG4gICAgcmV0dXJuIGFkZENsYXNzKGRpdihhcHBldGl6ZXJzLCBidXJnZXJzKSwgJ2NvbHVtbicsICdpcy02Jyk7XHJcbn0iLCIvKiBpbXBvcnQgeyBhZGRDbGFzcywgYWRkSWQsIGRpdiwgc2VjdGlvbiB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IHsgJCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgbGVmdE1lbnUgZnJvbSAnLi9sZWZ0TWVudSc7XHJcbmltcG9ydCByaWdodE1lbnUgZnJvbSAnLi9yaWdodE1lbnUnO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KGl0ZW1zID0gW10pIHtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudShzdG9yZSkge1xyXG4gICAgY29uc3QgbWVudUVsZSA9IGFkZElkKGFkZENsYXNzKGRpdigpLCAnY29udGFpbmVyJyksICdtZW51Jyk7XHJcbiAgICBzdG9yZS5vbignU0VUX0lURU1TJywgKHsgaXRlbXMgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxlZnRTaWRlID0gbGVmdE1lbnUoaXRlbXMpO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0U2lkZSA9IHJpZ2h0TWVudShpdGVtcyk7XHJcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IGFkZENsYXNzKHNlY3Rpb24obGVmdFNpZGUsIHJpZ2h0U2lkZSksICdjb2x1bW5zJyk7XHJcbiAgICAgICAgLy9jb25zdCBtZW51RWxlID0gYWRkSWQoYWRkQ2xhc3MoZGl2KGNvbHVtbnMpLCAnY29udGFpbmVyJyksICdtZW51Jyk7XHJcbiAgICAgICAgJCgnI21lbnUnKS5jaGlsZHJlbihjb2x1bW5zKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG1lbnVFbGU7XHJcbn0gKi9cclxuXHJcbmltcG9ydCB7IGFkZENsYXNzLCBhZGRJZCwgZGl2LCBzZWN0aW9uIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgeyAkIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCBsZWZ0TWVudSBmcm9tICcuL2xlZnRNZW51JztcclxuaW1wb3J0IHJpZ2h0TWVudSBmcm9tICcuL3JpZ2h0TWVudSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KHN0b3JlKSB7XHJcbiAgICBjb25zdCBtZW51RWxlID0gYWRkSWQoYWRkQ2xhc3MoZGl2KCksICdjb250YWluZXInKSwgJ21lbnUnKTtcclxuICAgIHN0b3JlLm9uKCdTRVRfSVRFTVMnLCAoeyBpdGVtcyB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGVmdFNpZGUgPSBsZWZ0TWVudShpdGVtcyk7XHJcbiAgICAgICAgY29uc3QgcmlnaHRTaWRlID0gcmlnaHRNZW51KGl0ZW1zKTtcclxuICAgICAgICBjb25zdCBjb2x1bW5zID0gYWRkQ2xhc3Moc2VjdGlvbihsZWZ0U2lkZSwgcmlnaHRTaWRlKSwgJ2NvbHVtbnMnKTtcclxuICAgICAgICAkKCcjbWVudScpLmNoaWxkcmVuKGNvbHVtbnMpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHN0b3JlLm9uKCdJVEVNX0FEREVEJywgKHsgY2FydCB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FydEFycmF5ID0gWy4uLmNhcnRdO1xyXG4gICAgICAgIGNvbnN0IGFydGljbGVzID0gY2FydEFycmF5Lm1hcChpZCA9PiBgYXJ0aWNsZVtkYXRhLWtleT0nJHtpZH0nXWApO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBjYXJ0QXJyYXkubWFwKGlkID0+IGBhcnRpY2xlW2RhdGEta2V5PScke2lkfSddIGJ1dHRvbi5hZGQtdG8tY2FydGApO1xyXG4gICAgICAgICQoYXJ0aWNsZXMuam9pbignLCAnKSkuYWRkQ2xhc3MoJ2luLWNhcnQnKTtcclxuICAgICAgICAkKGJ1dHRvbnMuam9pbignLCAnKSkuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHN0b3JlLm9uKCdJVEVNX1JFTU9WRUQnLCAoeyBjYXJ0IH0pID0+IHtcclxuICAgICAgICBjb25zdCBvblBhZ2VLZXlzID0gJCgnYXJ0aWNsZS5pbi1jYXJ0JykubWFwKGVsZSA9PiBwYXJzZUludChlbGUuZGF0YXNldC5rZXksIDEwKSk7XHJcbiAgICAgICAgY29uc3QgaW5DYXJ0S2V5cyA9IFsuLi5jYXJ0XTtcclxuICAgICAgICBjb25zdCBrZXlzVG9SZW1vdmUgPSBvblBhZ2VLZXlzLmZpbHRlcihrZXkgPT4gIWluQ2FydEtleXMuaW5jbHVkZXMoa2V5KSk7XHJcbiAgICAgICAga2V5c1RvUmVtb3ZlLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgJChgYXJ0aWNsZVtkYXRhLWtleT0nJHtrZXl9J11gKS5yZW1vdmVDbGFzcygnaW4tY2FydCcpO1xyXG4gICAgICAgICAgICAkKGBhcnRpY2xlW2RhdGEta2V5PScke2tleX0nXSBidXR0b24uYWRkLXRvLWNhcnRgKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbWVudUVsZTtcclxuXHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgYXJ0aWNsZSwgYnV0dG9uLCBkaXYsIGgzLCBwLCBzcGFuLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51SXRlbShpdGVtRGF0YSA9IHt9KSB7XHJcbiAgICBjb25zdCBuYW1lID0gYWRkQ2xhc3MoaDModGV4dChpdGVtRGF0YS5uYW1lKSksICduYW1lJyk7XHJcbiAgICBjb25zdCBwcmljZSA9IGFkZENsYXNzKHNwYW4odGV4dChgJCR7Zm9ybWF0UHJpY2UoaXRlbURhdGEucHJpY2UpfWApKSwgJ3ByaWNlJywgJ2lzLXB1bGxlZC1yaWdodCcpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBhZGRDbGFzcyhwKHRleHQoaXRlbURhdGEuZGVzY3JpcHRpb24pKSwgJ2Rlc2MnKTtcclxuICAgIGNvbnN0IGFkZFRvQ2FydCA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdBZGQgdG8gQ2FydCcpKSwgJ2J1dHRvbicsICdpcy1wdWxsZWQtcmlnaHQnLCAnYWRkLXRvLWNhcnQnKTtcclxuICAgIGNvbnN0IG1lZGlhQ29udGVudCA9IGFkZENsYXNzKGRpdihuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24sIGFkZFRvQ2FydCksICdtZWRpYS1jb250ZW50Jyk7XHJcbiAgICBjb25zdCBpdGVtID0gYWRkQ2xhc3MoYXJ0aWNsZShtZWRpYUNvbnRlbnQpLCAnbWVkaWEnLCAnbWVudV9pdGVtJyk7XHJcbiAgICBpdGVtLmRhdGFzZXQua2V5ID0gaXRlbURhdGEuaWQ7XHJcbiAgICByZXR1cm4gaXRlbTtcclxuXHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2LCBoMSwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IG1lbnVJdGVtIGZyb20gJy4vbWVudUl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUxpc3QoaGVhZGxpbmUsIGl0ZW1zID0gW10pIHtcclxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGl0ZW1zLm1hcChtZW51SXRlbSk7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBhZGRDbGFzcyhoMSh0ZXh0KGhlYWRsaW5lKSksICd0aXRsZScpO1xyXG5cclxuICAgIHJldHVybiBhZGRDbGFzcyhkaXYodGl0bGUsIC4uLm1lbnVJdGVtcyksICdjb2xsZWN0aW9uJyk7XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgYWRkSWQsIGJ1dHRvbiwgZGl2LCBoMSwgaSwgcCwgc2VjdGlvbiwgdGV4dCwgdWwgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCB7ICQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IG1vZGFsSXRlbSBmcm9tICcuL21vZGFsSXRlbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbChzdG9yZSkge1xyXG4gICAgY29uc3QgY2xvc2UgPSBhZGRJZChhZGRDbGFzcyhpKCksICdmYScsICdmYS10aW1lcycsICdjbG9zZScpLCAnY2xvc2UnKTtcclxuICAgIGNvbnN0IHRpdGxlID0gYWRkQ2xhc3MoaDEodGV4dCgnQ2FydCcpKSwgJ3RpdGxlJyk7XHJcbiAgICBjb25zdCBjYXJ0Q29udGFpbmVyID0gYWRkSWQoZGl2KHAodGV4dCgnWW91ciBjYXJ0IGlzIGVtcHR5LicpKSksICdjYXJ0LWl0ZW1zJyk7XHJcbiAgICBjb25zdCBjaGVja291dEJ1dHRvbiA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdDaGVja291dCcpKSwgJ2J1dHRvbicsICdpcy1mdWxsd2lkdGgnKTtcclxuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGNsb3NlLCB0aXRsZSwgY2FydENvbnRhaW5lciwgY2hlY2tvdXRCdXR0b24pLCAnbW9kYWwtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBtb2RhbEVsZSA9IGFkZElkKGFkZENsYXNzKHNlY3Rpb24obW9kYWxDb250YWluZXIpLCAnbW9kYWwnKSwgJ21vZGFsJyk7XHJcblxyXG4gICAgc3RvcmUub24oJ1RPR0dMRV9TSE9XX0NBUlQnLCAoeyBjYXJ0VmlzaWJsZSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlID0gJCgnI21vZGFsJyk7XHJcbiAgICAgICAgaWYgKGNhcnRWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgIGVsZS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHN0b3JlLm9uKCdJVEVNX0FEREVEJywgKHsgaXRlbXMsIGNhcnQgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcnRBcnJheSA9IFsuLi5jYXJ0XTtcclxuICAgICAgICBjb25zdCBjYXJ0SXRlbXMgPSBjYXJ0QXJyYXkubWFwKGl0ZW1JZCA9PiBtb2RhbEl0ZW0oaXRlbXNbaXRlbUlkXSkpO1xyXG4gICAgICAgIGNvbnN0IGNhcnRMaXN0ID0gYWRkQ2xhc3ModWwoLi4uY2FydEl0ZW1zKSwgJ21lbnUnKTtcclxuICAgICAgICAkKCcjY2FydC1pdGVtcycpLmNoaWxkcmVuKGNhcnRMaXN0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBtb2RhbEVsZTtcclxuXHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgaSwgbGksIHNwYW4sIHRleHQgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbEl0ZW0oaXRlbURhdGEpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBhZGRDbGFzcyhzcGFuKHRleHQoaXRlbURhdGEubmFtZSkpLCAnbmFtZScpO1xyXG4gICAgY29uc3QgcHJpY2UgPSBhZGRDbGFzcyhzcGFuKHRleHQoZm9ybWF0UHJpY2UoaXRlbURhdGEucHJpY2UpKSksICdwcmljZScsICdpcy1wdWxsZWQtcmlnaHQnKTtcclxuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGFkZENsYXNzKGkoKSwgJ2ZhJywgJ2ZhLXRpbWVzJywgJ3JlbW92ZScpO1xyXG4gICAgY29uc3QgaXRlbSA9IGFkZENsYXNzKGxpKG5hbWUsIHByaWNlLCByZW1vdmVCdXR0b24pLCAnbWVudS1pdGVtJyk7XHJcbiAgICBpdGVtLmRhdGFzZXQua2V5ID0gaXRlbURhdGEuaWQ7XHJcblxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgYWRkSWQsIGRpdiwgaSwgbmF2LCBzcGFuIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2YmFyKCkge1xyXG4gICAgY29uc3QgbmF2TGVmdCA9IGFkZENsYXNzKGRpdigpLCAnbmF2YmFyLWxlZnQnKTtcclxuXHJcbiAgICBjb25zdCBjYXJ0SWNvbiA9IGFkZElkKGFkZENsYXNzKGkoKSwgJ2ZhJywgJ2ZhLXNob3BwaW5nLWNhcnQnKSwgJ2NhcnQtaWNvbicpO1xyXG4gICAgY29uc3QgY2FydEl0ZW1zID0gYWRkQ2xhc3Moc3BhbigpLCAnY2FydC1pdGVtcycpO1xyXG4gICAgY29uc3QgbmF2YmFySXRlbSA9IGFkZENsYXNzKGRpdihjYXJ0SWNvbiwgY2FydEl0ZW1zKSwgJ25hdmJhci1pdGVtJyk7XHJcbiAgICBjb25zdCBuYXZSaWdodCA9IGFkZENsYXNzKGRpdihuYXZiYXJJdGVtKSwgJ25hdmJhci1yaWdodCcsICdjYXJ0Jyk7XHJcblxyXG4gICAgcmV0dXJuIGFkZENsYXNzKG5hdihuYXZMZWZ0LCBuYXZSaWdodCksICduYXZiYXInKTtcclxufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCB7IGZpbHRlckJ5VHlwZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgbWVudUxpc3QgZnJvbSAnLi9tZW51TGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByaWdodE1lbnUoaXRlbXMgPSBbXSkge1xyXG4gICAgY29uc3Qgc291cFNhbGFkID0gbWVudUxpc3QoJ1NvdXBzIGFuZCBTYWxhZHMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdzb3VwX3NhbGFkJykpO1xyXG4gICAgY29uc3QgZGVzc2VydHMgPSBtZW51TGlzdCgnRGVzc2VydHMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdkZXNzZXJ0JykpO1xyXG5cclxuICAgIHJldHVybiBhZGRDbGFzcyhkaXYoc291cFNhbGFkLCBkZXNzZXJ0cyksICdjb2x1bW4nLCAnaXMtNicpO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFByaWNlKHByaWNlKSB7XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdChwcmljZSkudG9GaXhlZCgyKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQnlUeXBlKG1hcCwgdHlwZSkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG1hcClcclxuICAgICAgICAuZmlsdGVyKGtleSA9PiBtYXBba2V5XS50eXBlID09PSB0eXBlKVxyXG4gICAgICAgIC5tYXAoa2V5ID0+IG1hcFtrZXldKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gJChxdWVyeSkge1xyXG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb24oZXZlbnQsIGNiKSB7XHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGUgPT4ge1xyXG4gICAgICAgICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoaWxkcmVuKHRvQWRkKSB7XHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGUgPT4ge1xyXG4gICAgICAgICAgICB3aGlsZSAoZWxlLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIGVsZS5yZW1vdmVDaGlsZChlbGUuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxlLmFwcGVuZENoaWxkKHRvQWRkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRDbGFzcyhrbGFzcykge1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcclxuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoa2xhc3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGtsYXNzKSB7XHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGUgPT4ge1xyXG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShrbGFzcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXR0cihhdHRyaWJ1dGUsIHZhbHVlKSB7XHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBlbGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWFwKGNiKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzLm1hcChjYik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG9uLFxyXG4gICAgICAgIGNoaWxkcmVuLFxyXG4gICAgICAgIGFkZENsYXNzLFxyXG4gICAgICAgIHJlbW92ZUNsYXNzLFxyXG4gICAgICAgIGF0dHIsXHJcbiAgICAgICAgbWFwLFxyXG4gICAgfTtcclxufSIsIi8qIGNvbnN0IGxvd2VycyA9IFsnYWxleCcsICdnZW9yZ2UnLCAnYm9ubmllJywgJ21hcmlhJywgJ2VsbGllJ107XHJcbmNvbnN0IHVwcGVycyA9IGxvd2Vycy5tYXAobmFtZSA9PiBuYW1lLnRvVXBwZXJDYXNlKCkpO1xyXG51cHBlcnMuZm9yRWFjaChuYW1lID0+IGNvbnNvbGUubG9nKGBIZWxsbywgJHtuYW1lfWApKTsgKi9cclxuaW1wb3J0IGFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICcuL3N0YXRlJztcclxuaW1wb3J0IHNldHVwTGlzdGVuZXJzIGZyb20gJy4vc2V0dXBfbGlzdGVuZXJzJztcclxuLypcclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgZXZlbnQsIGRhdGEpIHtcclxuICAgIHN3aXRjaCAoZXZlbnQpIHtcclxuICAgICAgICBjYXNlICdGT08nOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdzdXJlbicsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2UgJ0JBUic6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgZGF0YSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcbiovXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGV2ZW50LCBkYXRhKSB7XHJcbiAgICBzd2l0Y2ggKGV2ZW50KSB7XHJcbiAgICAgICAgY2FzZSAnU0VUX0lURU1TJzpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogZGF0YS5pdGVtcy5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRvdGFsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpdGVtLmlkXTogaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLCB7fSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2UgJ0lURU1fQURERUQnOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgICAgIGNhcnQ6IChuZXcgU2V0KHN0YXRlLmNhcnQpKS5hZGQoZGF0YS5pdGVtKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY2FzZSAnSVRFTV9SRU1PVkVEJzpcclxuICAgICAgICAgICAgY29uc3QgbmV3Q2FydCA9IChuZXcgU2V0KHN0YXRlLmNhcnQpKTtcclxuICAgICAgICAgICAgbmV3Q2FydC5kZWxldGUoZGF0YS5pdGVtKTtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICBjYXJ0OiBuZXdDYXJ0LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjYXNlICdUT0dHTEVfU0hPV19DQVJUJzpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICBjYXJ0VmlzaWJsZTogIXN0YXRlLmNhcnRWaXNpYmxlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKTtcclxuLypcclxuc3RvcmUub24oJ0ZPTycsIHN0YXRlID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdpbiBGT08gY2FsbGJhY2snKTtcclxuICAgIGNvbnNvbGUubG9nKCdzdGF0ZScsIHN0YXRlKTtcclxufSk7XHJcblxyXG5zdG9yZS5vbignQkFSJywgc3RhdGUgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2luIEJBUiBjYWxsYmFjaycpO1xyXG4gICAgY29uc29sZS5sb2coJ3N0YXRlJywgc3RhdGUpO1xyXG59KTtcclxuXHJcbnN0b3JlLm9uKCdOT1RfUkVBTCcsIHN0YXRlID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdpbiBOT1RfUkVBTCBjYWxsYmFjaycpO1xyXG4gICAgY29uc29sZS5sb2coJ3N0YXRlJywgc3RhdGUpO1xyXG59KTtcclxuXHJcbnN0b3JlLnRyaWdnZXIoJ0JBUicsIHtcclxuICAgIG5hbWU6ICdzdXJ5YScsXHJcbiAgICBqb2I6ICdmdWxsIHN0YWNrIHdlYiBkZXZlbG9wZXInLFxyXG59KTtcclxuc3RvcmUudHJpZ2dlcignRk9PJyk7XHJcbnN0b3JlLnRyaWdnZXIoJ05PVF9SRUFMJyk7XHJcbiovXHJcbmZldGNoKCdmb29kLmpzb24nKVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihyZXNCb2R5ID0+IHtcclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIC8vIGJvZHkuaW5zZXJ0QmVmb3JlKGFwcChyZXNCb2R5KSwgYm9keS5jaGlsZE5vZGVzWzBdKTtcclxuICAgICAgICBib2R5Lmluc2VydEJlZm9yZShhcHAoc3RvcmUpLCBib2R5LmNoaWxkTm9kZXNbMF0pO1xyXG4gICAgICAgIHN0b3JlLnRyaWdnZXIoJ1NFVF9JVEVNUycsIHsgaXRlbXM6IHJlc0JvZHkgfSk7XHJcbiAgICAgICAgc2V0dXBMaXN0ZW5lcnMoc3RvcmUpO1xyXG4gICAgfSk7IiwiaW1wb3J0IHsgJCB9IGZyb20gJy4vaGVscGVycyc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0b3JlKSB7XHJcbiAgICAkKCcjY2FydC1pY29uLCAjY2xvc2UnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgc3RvcmUudHJpZ2dlcignVE9HR0xFX1NIT1dfQ0FSVCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UGFyZW50V2l0aEtleShlbGVtZW50KSB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICB3aGlsZSAocGFyZW50ICYmICFwYXJlbnQuZGF0YXNldC5rZXkpIHtcclxuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAkKCcuYWRkLXRvLWNhcnQnKS5vbignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRQYXJlbnRXaXRoS2V5KGUuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gcGFyc2VJbnQocGFyZW50LmRhdGFzZXQua2V5LCAxMCk7XHJcbiAgICAgICAgc3RvcmUudHJpZ2dlcignSVRFTV9BRERFRCcsIHsgaXRlbToga2V5IH0pO1xyXG4gICAgfSk7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVtb3ZlJykpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRQYXJlbnRXaXRoS2V5KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBwYXJzZUludChwYXJlbnQuZGF0YXNldC5rZXksIDEwKTtcclxuICAgICAgICAgICAgcGFyZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocGFyZW50KTtcclxuICAgICAgICAgICAgc3RvcmUudHJpZ2dlcignSVRFTV9SRU1PVkVEJywgeyBpdGVtOiBrZXkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iLCJjb25zdCBkZWZhdWx0U3RhdGUgPSB7XHJcbiAgICBpdGVtczoge30sXHJcbiAgICBjYXJ0OiAobmV3IFNldCgpKSxcclxuICAgIGNhcnRWaXNpYmxlOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyKSB7XHJcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB7fTtcclxuICAgIGxldCBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRTdGF0ZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb24oZXZlbnQsIGNiKSB7XHJcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyc1tldmVudF0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpc3RlbmVyc1tldmVudF0ucHVzaChjYik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJpZ2dlcihldmVudCwgZGF0YSA9IHt9KSB7XHJcbiAgICAgICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBldmVudCwgZGF0YSk7XHJcblxyXG4gICAgICAgIGlmIChsaXN0ZW5lcnNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyc1tldmVudF0uZm9yRWFjaChjYiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYihzdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG9uLFxyXG4gICAgICAgIHRyaWdnZXIsXHJcbiAgICB9O1xyXG59Il19
