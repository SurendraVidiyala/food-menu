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

function app(items) {
    var modalEle = (0, _modal2.default)(items);
    var navbarEle = (0, _navbar2.default)();
    var heroEle = (0, _hero2.default)();
    var menuEle = (0, _menu2.default)(items);
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

var _leftMenu = require('./leftMenu');

var _leftMenu2 = _interopRequireDefault(_leftMenu);

var _rightMenu = require('./rightMenu');

var _rightMenu2 = _interopRequireDefault(_rightMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function menu() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var leftSide = (0, _leftMenu2.default)(items);
    var rightSide = (0, _rightMenu2.default)(items);
    var columns = (0, _builders.addClass)((0, _builders.section)(leftSide, rightSide), 'columns');
    var menuEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.div)(columns), 'container'), 'menu');

    return menuEle;
}

},{"../builders":1,"./leftMenu":5,"./rightMenu":12}],7:[function(require,module,exports){
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

var _modalItem = require('./modalItem');

var _modalItem2 = _interopRequireDefault(_modalItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function modal() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var close = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'close'), 'close');
    var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)('Cart')), 'title');

    var cart = void 0;
    if (items.length === 0) {
        cart = (0, _builders.p)((0, _builders.text)('Your cart is empty.'));
    } else {
        var modalItems = items.map(_modalItem2.default);
        cart = (0, _builders.addClass)(_builders.ul.apply(undefined, _toConsumableArray(modalItems)), 'menu');
    }
    var cartContainer = (0, _builders.addId)((0, _builders.div)(cart), 'cart-items');
    var checkoutButton = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Checkout')), 'button', 'is-fullwidth');
    var modalContainer = (0, _builders.addClass)((0, _builders.div)(close, title, cartContainer, checkoutButton), 'modal-container');
    var modalEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.section)(modalContainer), 'modal'), 'modal');

    return modalEle;
}

},{"../builders":1,"./modalItem":10}],10:[function(require,module,exports){
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
exports.filterByType = filterByType;
exports.formatPrice = formatPrice;
function filterByType(items, type) {
    return items.filter(function (item) {
        return item.type === type;
    });
}
function formatPrice(price) {
    return parseFloat(price).toFixed(2);
}

},{}],14:[function(require,module,exports){
'use strict';

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _state = require('./state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* const lowers = ['alex', 'george', 'bonnie', 'maria', 'ellie'];
const uppers = lowers.map(name => name.toUpperCase());
uppers.forEach(name => console.log(`Hello, ${name}`)); */
function reducer(state, event, data) {
    switch (event) {
        case 'FOO':
            return Object.assign({}, state, {
                name: 'suren'
            });
        case 'BAR':
            return Object.assign({}, state, data);
        default:
            return state;
    }
}

var store = (0, _state.createStore)(reducer);

store.on('FOO', function (state) {
    console.log('in FOO callback');
    console.log('state', state);
});

store.on('BAR', function (state) {
    console.log('in BAR callback');
    console.log('state', state);
});

store.on('NOT_REAL', function (state) {
    console.log('in NOT_REAL callback');
    console.log('state', state);
});

store.trigger('BAR', {
    name: 'surya',
    job: 'full stack web developer'
});
store.trigger('FOO');
store.trigger('NOT_REAL');

fetch('food.json').then(function (res) {
    return res.json();
}).then(function (resBody) {
    var body = document.querySelector('body');
    body.insertBefore((0, _app2.default)(resBody), body.childNodes[0]);
});

},{"./components/app":2,"./state":15}],15:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxidWlsZGVycy5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXGFwcC5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXGJvdHRvbS5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXGhlcm8uanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxsZWZ0TWVudS5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXG1lbnUuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxtZW51SXRlbS5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXG1lbnVMaXN0LmpzIiwic3JjXFxqc1xcY29tcG9uZW50c1xcbW9kYWwuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxtb2RhbEl0ZW0uanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxuYXZiYXIuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxyaWdodE1lbnUuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIiwic3JjXFxqc1xcaW5kZXguanMiLCJzcmNcXGpzXFxzdGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O1FDQWdCLEksR0FBQSxJO1FBR0EsYSxHQUFBLGE7UUFLQSxHLEdBQUEsRztRQUdBLE8sR0FBQSxPO1FBR0EsRSxHQUFBLEU7UUFHQSxFLEdBQUEsRTtRQUdBLEcsR0FBQSxHO1FBR0EsRSxHQUFBLEU7UUFHQSxFLEdBQUEsRTtRQUdBLEMsR0FBQSxDO1FBR0EsSSxHQUFBLEk7UUFHQSxPLEdBQUEsTztRQUdBLE0sR0FBQSxNO1FBR0EsQyxHQUFBLEM7UUFHQSxHLEdBQUEsRztRQUtBLE0sR0FBQSxNO1FBR0EsSyxHQUFBLEs7UUFJQSxRLEdBQUEsUTtBQXhEVCxTQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQ3hCLFdBQU8sU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQVA7QUFDSDtBQUNNLFNBQVMsYUFBVCxDQUF1QixJ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LENBQWlCLEtBQWpCLEVBQW1DO0FBQUEsWUFBWCxJQUFXLHVFQUFKLEVBQUk7O0FBQy9CLGdCQUFRLFFBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsSUFBdEIsQ0FBUjs7QUFFQSxZQUFJLFVBQVUsS0FBVixDQUFKLEVBQXNCO0FBQ2xCLHNCQUFVLEtBQVYsRUFBaUIsT0FBakIsQ0FBeUIsY0FBTTtBQUMzQixtQkFBRyxLQUFIO0FBQ0gsYUFGRDtBQUdIO0FBQ0o7O0FBRUQsV0FBTztBQUNILGNBREc7QUFFSDtBQUZHLEtBQVA7QUFJSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZnVuY3Rpb24gdGV4dCh3b3Jkcykge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHdvcmRzKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCAuLi5jaGlsZHJlbikge1xyXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcclxuICAgIHJldHVybiBuZXdFbGVtZW50O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkaXYoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFydGljbGUoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdhcnRpY2xlJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBoMSguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2gxJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBoMyguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2gzJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBuYXYoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCduYXYnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVsKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgndWwnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGxpKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbGknLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGkoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdpJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzcGFuKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnc3BhbicsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbiguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZvb3RlciguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcCguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3AnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGltZyhzb3VyY2UpIHtcclxuICAgIGNvbnN0IGltYWdlID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWFnZS5zcmMgPSBzb3VyY2U7XHJcbiAgICByZXR1cm4gaW1hZ2U7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1dHRvbiguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkSWQoZWxlbWVudCwgaWQpIHtcclxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ld0VsZW1lbnQsIHsgaWQgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIC4uLmtsYXNzZXMpIHtcclxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgIGtsYXNzZXMuZm9yRWFjaChrbGFzcyA9PiBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoa2xhc3MpKTtcclxuICAgIHJldHVybiBuZXdFbGVtZW50O1xyXG59IiwiaW1wb3J0IHsgZGl2LCBhZGRJZCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IG1vZGFsIGZyb20gJy4vbW9kYWwnO1xyXG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJztcclxuaW1wb3J0IGhlcm8gZnJvbSAnLi9oZXJvJztcclxuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcclxuaW1wb3J0IGJvdHRvbSBmcm9tICcuL2JvdHRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHAoaXRlbXMpIHtcclxuICAgIGNvbnN0IG1vZGFsRWxlID0gbW9kYWwoaXRlbXMpO1xyXG4gICAgY29uc3QgbmF2YmFyRWxlID0gbmF2YmFyKCk7XHJcbiAgICBjb25zdCBoZXJvRWxlID0gaGVybygpO1xyXG4gICAgY29uc3QgbWVudUVsZSA9IG1lbnUoaXRlbXMpO1xyXG4gICAgY29uc3QgYm90dG9tRWxlID0gYm90dG9tKCk7XHJcbiAgICBjb25zdCBhcHBFbGUgPSBhZGRJZChkaXYobW9kYWxFbGUsIG5hdmJhckVsZSwgaGVyb0VsZSwgbWVudUVsZSwgYm90dG9tRWxlKSwgJ2FwcC1jb250YWluZXInKTtcclxuICAgIHJldHVybiBhcHBFbGU7XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2LCBmb290ZXIsIHRleHQsIHAgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib3R0b20oKSB7XHJcbiAgICBjb25zdCBuYW1lID0gcCh0ZXh0KCdTdXJlbmRyYSBWaWRpeWFsYScpKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBhZGRDbGFzcyhkaXYobmFtZSksICdjb250ZW50JywgJ2lzLWNlbnRlcmVkJyk7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGNvbnRlbnQpLCAnY29udGFpbmVyJyk7XHJcblxyXG4gICAgcmV0dXJuIGFkZENsYXNzKGZvb3Rlcihjb250YWluZXIpLCAnZm9vdGVyJyk7XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2LCBpbWcsIHAsIHNlY3Rpb24sIHRleHQgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZXJvKCkge1xyXG4gICAgY29uc3QgbG9nbyA9IGFkZENsYXNzKGltZygnc3RhdGljL2NoZWZfd2hpdGUucG5nJyksICdsb2dvJyk7XHJcbiAgICBjb25zdCB0aGUgPSBhZGRDbGFzcyhwKHRleHQoJ1RoZScpKSwgJ2hlcm8tdGV4dC1saWdodCcpO1xyXG4gICAgY29uc3Qgc291dGhJbmRpYW4gPSBhZGRDbGFzcyhwKHRleHQoJ1NvdXRoIEluZGlhbicpKSwgJ2hlcm8tdGV4dC1ib2xkJyk7XHJcbiAgICBjb25zdCBjdWlzaW5lID0gYWRkQ2xhc3MocCh0ZXh0KCdDdWlzaW5lJykpLCAnaGVyby10ZXh0LWxpZ2h0Jyk7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGxvZ28sIHRoZSwgc291dGhJbmRpYW4sIGN1aXNpbmUpLCAnY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgaGVyb0NvbnRlbnQgPSBhZGRDbGFzcyhkaXYoY29udGFpbmVyKSwgJ2hlcm8tY29udGVudCcpO1xyXG5cclxuICAgIHJldHVybiBhZGRDbGFzcyhzZWN0aW9uKGhlcm9Db250ZW50KSwgJ2hlcm8nLCAnc3BsYXNoJyk7XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgeyBmaWx0ZXJCeVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IG1lbnVMaXN0IGZyb20gJy4vbWVudUxpc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGVmdE1lbnUoaXRlbXMgPSBbXSkge1xyXG4gICAgY29uc3QgYXBwZXRpemVycyA9IG1lbnVMaXN0KCdBcHBldGl6ZXJzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnYXBwZXRpemVyJykpO1xyXG4gICAgY29uc3QgYnVyZ2VycyA9IG1lbnVMaXN0KCdCdXJnZXJzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnYnVyZ2VyJykpO1xyXG5cclxuICAgIHJldHVybiBhZGRDbGFzcyhkaXYoYXBwZXRpemVycywgYnVyZ2VycyksICdjb2x1bW4nLCAnaXMtNicpO1xyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGFkZElkLCBkaXYsIHNlY3Rpb24gfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCBsZWZ0TWVudSBmcm9tICcuL2xlZnRNZW51JztcclxuaW1wb3J0IHJpZ2h0TWVudSBmcm9tICcuL3JpZ2h0TWVudSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KGl0ZW1zID0gW10pIHtcclxuICAgIGNvbnN0IGxlZnRTaWRlID0gbGVmdE1lbnUoaXRlbXMpO1xyXG4gICAgY29uc3QgcmlnaHRTaWRlID0gcmlnaHRNZW51KGl0ZW1zKTtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSBhZGRDbGFzcyhzZWN0aW9uKGxlZnRTaWRlLCByaWdodFNpZGUpLCAnY29sdW1ucycpO1xyXG4gICAgY29uc3QgbWVudUVsZSA9IGFkZElkKGFkZENsYXNzKGRpdihjb2x1bW5zKSwgJ2NvbnRhaW5lcicpLCAnbWVudScpO1xyXG5cclxuICAgIHJldHVybiBtZW51RWxlO1xyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGFydGljbGUsIGJ1dHRvbiwgZGl2LCBoMywgcCwgc3BhbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUl0ZW0oaXRlbURhdGEgPSB7fSkge1xyXG4gICAgY29uc3QgbmFtZSA9IGFkZENsYXNzKGgzKHRleHQoaXRlbURhdGEubmFtZSkpLCAnbmFtZScpO1xyXG4gICAgY29uc3QgcHJpY2UgPSBhZGRDbGFzcyhzcGFuKHRleHQoYCQke2Zvcm1hdFByaWNlKGl0ZW1EYXRhLnByaWNlKX1gKSksICdwcmljZScsICdpcy1wdWxsZWQtcmlnaHQnKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYWRkQ2xhc3MocCh0ZXh0KGl0ZW1EYXRhLmRlc2NyaXB0aW9uKSksICdkZXNjJyk7XHJcbiAgICBjb25zdCBhZGRUb0NhcnQgPSBhZGRDbGFzcyhidXR0b24odGV4dCgnQWRkIHRvIENhcnQnKSksICdidXR0b24nLCAnaXMtcHVsbGVkLXJpZ2h0JywgJ2FkZC10by1jYXJ0Jyk7XHJcbiAgICBjb25zdCBtZWRpYUNvbnRlbnQgPSBhZGRDbGFzcyhkaXYobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBhZGRUb0NhcnQpLCAnbWVkaWEtY29udGVudCcpO1xyXG4gICAgY29uc3QgaXRlbSA9IGFkZENsYXNzKGFydGljbGUobWVkaWFDb250ZW50KSwgJ21lZGlhJywgJ21lbnVfaXRlbScpO1xyXG4gICAgaXRlbS5kYXRhc2V0LmtleSA9IGl0ZW1EYXRhLmlkO1xyXG4gICAgcmV0dXJuIGl0ZW07XHJcblxyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiwgaDEsIHRleHQgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCBtZW51SXRlbSBmcm9tICcuL21lbnVJdGVtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVMaXN0KGhlYWRsaW5lLCBpdGVtcyA9IFtdKSB7XHJcbiAgICBjb25zdCBtZW51SXRlbXMgPSBpdGVtcy5tYXAobWVudUl0ZW0pO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gYWRkQ2xhc3MoaDEodGV4dChoZWFkbGluZSkpLCAndGl0bGUnKTtcclxuXHJcbiAgICByZXR1cm4gYWRkQ2xhc3MoZGl2KHRpdGxlLCAuLi5tZW51SXRlbXMpLCAnY29sbGVjdGlvbicpO1xyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGFkZElkLCBidXR0b24sIGRpdiwgaDEsIGksIHAsIHNlY3Rpb24sIHRleHQsIHVsIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgbW9kYWxJdGVtIGZyb20gJy4vbW9kYWxJdGVtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsKGl0ZW1zID0gW10pIHtcclxuICAgIGNvbnN0IGNsb3NlID0gYWRkSWQoYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtdGltZXMnLCAnY2xvc2UnKSwgJ2Nsb3NlJyk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGFkZENsYXNzKGgxKHRleHQoJ0NhcnQnKSksICd0aXRsZScpO1xyXG5cclxuICAgIGxldCBjYXJ0O1xyXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGNhcnQgPSBwKHRleHQoJ1lvdXIgY2FydCBpcyBlbXB0eS4nKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsSXRlbXMgPSBpdGVtcy5tYXAobW9kYWxJdGVtKTtcclxuICAgICAgICBjYXJ0ID0gYWRkQ2xhc3ModWwoLi4ubW9kYWxJdGVtcyksICdtZW51Jyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjYXJ0Q29udGFpbmVyID0gYWRkSWQoZGl2KGNhcnQpLCAnY2FydC1pdGVtcycpO1xyXG4gICAgY29uc3QgY2hlY2tvdXRCdXR0b24gPSBhZGRDbGFzcyhidXR0b24odGV4dCgnQ2hlY2tvdXQnKSksICdidXR0b24nLCAnaXMtZnVsbHdpZHRoJyk7XHJcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGFkZENsYXNzKGRpdihjbG9zZSwgdGl0bGUsIGNhcnRDb250YWluZXIsIGNoZWNrb3V0QnV0dG9uKSwgJ21vZGFsLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgbW9kYWxFbGUgPSBhZGRJZChhZGRDbGFzcyhzZWN0aW9uKG1vZGFsQ29udGFpbmVyKSwgJ21vZGFsJyksICdtb2RhbCcpO1xyXG5cclxuICAgIHJldHVybiBtb2RhbEVsZTtcclxufSIsImltcG9ydCB7IGFkZENsYXNzLCBpLCBsaSwgc3BhbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsSXRlbShpdGVtRGF0YSkge1xyXG4gICAgY29uc3QgbmFtZSA9IGFkZENsYXNzKHNwYW4odGV4dChpdGVtRGF0YS5uYW1lKSksICduYW1lJyk7XHJcbiAgICBjb25zdCBwcmljZSA9IGFkZENsYXNzKHNwYW4odGV4dChmb3JtYXRQcmljZShpdGVtRGF0YS5wcmljZSkpKSwgJ3ByaWNlJywgJ2lzLXB1bGxlZC1yaWdodCcpO1xyXG4gICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtdGltZXMnLCAncmVtb3ZlJyk7XHJcbiAgICBjb25zdCBpdGVtID0gYWRkQ2xhc3MobGkobmFtZSwgcHJpY2UsIHJlbW92ZUJ1dHRvbiksICdtZW51LWl0ZW0nKTtcclxuICAgIGl0ZW0uZGF0YXNldC5rZXkgPSBpdGVtRGF0YS5pZDtcclxuXHJcbiAgICByZXR1cm4gaXRlbTtcclxufSIsImltcG9ydCB7IGFkZENsYXNzLCBhZGRJZCwgZGl2LCBpLCBuYXYsIHNwYW4gfSBmcm9tICcuLi9idWlsZGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZiYXIoKSB7XHJcbiAgICBjb25zdCBuYXZMZWZ0ID0gYWRkQ2xhc3MoZGl2KCksICduYXZiYXItbGVmdCcpO1xyXG5cclxuICAgIGNvbnN0IGNhcnRJY29uID0gYWRkSWQoYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtc2hvcHBpbmctY2FydCcpLCAnY2FydC1pY29uJyk7XHJcbiAgICBjb25zdCBjYXJ0SXRlbXMgPSBhZGRDbGFzcyhzcGFuKCksICdjYXJ0LWl0ZW1zJyk7XHJcbiAgICBjb25zdCBuYXZiYXJJdGVtID0gYWRkQ2xhc3MoZGl2KGNhcnRJY29uLCBjYXJ0SXRlbXMpLCAnbmF2YmFyLWl0ZW0nKTtcclxuICAgIGNvbnN0IG5hdlJpZ2h0ID0gYWRkQ2xhc3MoZGl2KG5hdmJhckl0ZW0pLCAnbmF2YmFyLXJpZ2h0JywgJ2NhcnQnKTtcclxuXHJcbiAgICByZXR1cm4gYWRkQ2xhc3MobmF2KG5hdkxlZnQsIG5hdlJpZ2h0KSwgJ25hdmJhcicpO1xyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IHsgZmlsdGVyQnlUeXBlIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCBtZW51TGlzdCBmcm9tICcuL21lbnVMaXN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJpZ2h0TWVudShpdGVtcyA9IFtdKSB7XHJcbiAgICBjb25zdCBzb3VwU2FsYWQgPSBtZW51TGlzdCgnU291cHMgYW5kIFNhbGFkcycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ3NvdXBfc2FsYWQnKSk7XHJcbiAgICBjb25zdCBkZXNzZXJ0cyA9IG1lbnVMaXN0KCdEZXNzZXJ0cycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ2Rlc3NlcnQnKSk7XHJcblxyXG4gICAgcmV0dXJuIGFkZENsYXNzKGRpdihzb3VwU2FsYWQsIGRlc3NlcnRzKSwgJ2NvbHVtbicsICdpcy02Jyk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gZmlsdGVyQnlUeXBlKGl0ZW1zLCB0eXBlKSB7XHJcbiAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS50eXBlID09PSB0eXBlKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UHJpY2UocHJpY2UpIHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KHByaWNlKS50b0ZpeGVkKDIpO1xyXG59IiwiLyogY29uc3QgbG93ZXJzID0gWydhbGV4JywgJ2dlb3JnZScsICdib25uaWUnLCAnbWFyaWEnLCAnZWxsaWUnXTtcclxuY29uc3QgdXBwZXJzID0gbG93ZXJzLm1hcChuYW1lID0+IG5hbWUudG9VcHBlckNhc2UoKSk7XHJcbnVwcGVycy5mb3JFYWNoKG5hbWUgPT4gY29uc29sZS5sb2coYEhlbGxvLCAke25hbWV9YCkpOyAqL1xyXG5pbXBvcnQgYXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJy4vc3RhdGUnO1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgZXZlbnQsIGRhdGEpIHtcclxuICAgIHN3aXRjaCAoZXZlbnQpIHtcclxuICAgICAgICBjYXNlICdGT08nOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdzdXJlbicsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2UgJ0JBUic6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgZGF0YSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xyXG5cclxuc3RvcmUub24oJ0ZPTycsIHN0YXRlID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdpbiBGT08gY2FsbGJhY2snKTtcclxuICAgIGNvbnNvbGUubG9nKCdzdGF0ZScsIHN0YXRlKTtcclxufSk7XHJcblxyXG5zdG9yZS5vbignQkFSJywgc3RhdGUgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2luIEJBUiBjYWxsYmFjaycpO1xyXG4gICAgY29uc29sZS5sb2coJ3N0YXRlJywgc3RhdGUpO1xyXG59KTtcclxuXHJcbnN0b3JlLm9uKCdOT1RfUkVBTCcsIHN0YXRlID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdpbiBOT1RfUkVBTCBjYWxsYmFjaycpO1xyXG4gICAgY29uc29sZS5sb2coJ3N0YXRlJywgc3RhdGUpO1xyXG59KTtcclxuXHJcbnN0b3JlLnRyaWdnZXIoJ0JBUicsIHtcclxuICAgIG5hbWU6ICdzdXJ5YScsXHJcbiAgICBqb2I6ICdmdWxsIHN0YWNrIHdlYiBkZXZlbG9wZXInLFxyXG59KTtcclxuc3RvcmUudHJpZ2dlcignRk9PJyk7XHJcbnN0b3JlLnRyaWdnZXIoJ05PVF9SRUFMJyk7XHJcblxyXG5mZXRjaCgnZm9vZC5qc29uJylcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzQm9keSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBib2R5Lmluc2VydEJlZm9yZShhcHAocmVzQm9keSksIGJvZHkuY2hpbGROb2Rlc1swXSk7XHJcbiAgICB9KTsiLCJjb25zdCBkZWZhdWx0U3RhdGUgPSB7XHJcbiAgICBpdGVtczoge30sXHJcbiAgICBjYXJ0OiAobmV3IFNldCgpKSxcclxuICAgIGNhcnRWaXNpYmxlOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyKSB7XHJcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB7fTtcclxuICAgIGxldCBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRTdGF0ZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb24oZXZlbnQsIGNiKSB7XHJcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyc1tldmVudF0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpc3RlbmVyc1tldmVudF0ucHVzaChjYik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJpZ2dlcihldmVudCwgZGF0YSA9IHt9KSB7XHJcbiAgICAgICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBldmVudCwgZGF0YSk7XHJcblxyXG4gICAgICAgIGlmIChsaXN0ZW5lcnNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyc1tldmVudF0uZm9yRWFjaChjYiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYihzdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG9uLFxyXG4gICAgICAgIHRyaWdnZXIsXHJcbiAgICB9O1xyXG59Il19
