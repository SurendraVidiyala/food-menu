(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.text = text;
exports.createElement = createElement;
exports.div = div;
exports.i = i;
exports.span = span;
exports.nav = nav;
exports.ul = ul;
exports.li = li;
exports.section = section;
exports.p = p;
exports.img = img;
exports.h1 = h1;
exports.article = article;
exports.footer = footer;
exports.h3 = h3;
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
function i() {
    for (var _len3 = arguments.length, children = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        children[_key3] = arguments[_key3];
    }

    return createElement.apply(undefined, ['i'].concat(children));
}
function span() {
    for (var _len4 = arguments.length, children = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        children[_key4] = arguments[_key4];
    }

    return createElement.apply(undefined, ['span'].concat(children));
}
function nav() {
    for (var _len5 = arguments.length, children = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        children[_key5] = arguments[_key5];
    }

    return createElement.apply(undefined, ['nav'].concat(children));
}
function ul() {
    for (var _len6 = arguments.length, children = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        children[_key6] = arguments[_key6];
    }

    return createElement.apply(undefined, ['ul'].concat(children));
}
function li() {
    for (var _len7 = arguments.length, children = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        children[_key7] = arguments[_key7];
    }

    return createElement.apply(undefined, ['li'].concat(children));
}
function section() {
    for (var _len8 = arguments.length, children = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        children[_key8] = arguments[_key8];
    }

    return createElement.apply(undefined, ['section'].concat(children));
}

function p() {
    for (var _len9 = arguments.length, children = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        children[_key9] = arguments[_key9];
    }

    return createElement.apply(undefined, ['p'].concat(children));
}

function img(source) {
    var image = createElement('img');
    image.src = source;
    return image;
}
function h1() {
    for (var _len10 = arguments.length, children = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        children[_key10] = arguments[_key10];
    }

    return createElement.apply(undefined, ['h1'].concat(children));
}
function article() {
    for (var _len11 = arguments.length, children = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        children[_key11] = arguments[_key11];
    }

    return createElement.apply(undefined, ['article'].concat(children));
}
function footer() {
    for (var _len12 = arguments.length, children = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        children[_key12] = arguments[_key12];
    }

    return createElement.apply(undefined, ['footer'].concat(children));
}

function h3() {
    for (var _len13 = arguments.length, children = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        children[_key13] = arguments[_key13];
    }

    return createElement.apply(undefined, ['h3'].concat(children));
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

function modal() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var close = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'close'), 'close');
    var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)('Cart')), 'title');

    var cart = void 0;
    if (items.length === 0) {
        cart = (0, _builders.p)((0, _builders.text)('Your cart is empty.'));
    } else {
        cart = (0, _builders.addClass)((0, _builders.ul)(items.map(_modalItem2.default), 'menu'));
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

fetch('food.json').then(function (res) {
    return res.json();
}).then(function (resBody) {
    var body = document.querySelector('body');
    body.insertBefore((0, _app2.default)(resBody), body.childNodes[0]);
}); /* const lowers = ['alex', 'george', 'bonnie', 'maria', 'ellie'];
    const uppers = lowers.map(name => name.toUpperCase());
    uppers.forEach(name => console.log(`Hello, ${name}`)); */

},{"./components/app":2}]},{},[14])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxidWlsZGVycy5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXGFwcC5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXGJvdHRvbS5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXGhlcm8uanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxsZWZ0TWVudS5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXG1lbnUuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxtZW51SXRlbS5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXG1lbnVMaXN0LmpzIiwic3JjXFxqc1xcY29tcG9uZW50c1xcbW9kYWwuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxtb2RhbEl0ZW0uanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxuYXZiYXIuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxyaWdodE1lbnUuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIiwic3JjXFxqc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztRQ0FnQixJLEdBQUEsSTtRQUlBLGEsR0FBQSxhO1FBTUEsRyxHQUFBLEc7UUFHQSxDLEdBQUEsQztRQUdBLEksR0FBQSxJO1FBR0EsRyxHQUFBLEc7UUFHQSxFLEdBQUEsRTtRQUdBLEUsR0FBQSxFO1FBR0EsTyxHQUFBLE87UUFJQSxDLEdBQUEsQztRQUlBLEcsR0FBQSxHO1FBS0EsRSxHQUFBLEU7UUFHQSxPLEdBQUEsTztRQUdBLE0sR0FBQSxNO1FBSUEsRSxHQUFBLEU7UUFJQSxNLEdBQUEsTTtRQUlBLEssR0FBQSxLO1FBSUEsUSxHQUFBLFE7QUEvRFQsU0FBUyxJQUFULENBQWMsS0FBZCxFQUFxQjtBQUN4QixXQUFPLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFQO0FBQ0g7O0FBRU0sU0FBUyxhQUFULENBQXVCLElBQXZCLEVBQTBDO0FBQzdDLFFB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TSxXQUFXLHdCQUFTLFVBQVQsRUFBcUIsMkJBQWEsS0FBYixFQUFvQixTQUFwQixDQUFyQixDQUFqQjs7QUFFQSxXQUFPLHdCQUFTLG1CQUFJLFNBQUosRUFBZSxRQUFmLENBQVQsRUFBbUMsUUFBbkMsRUFBNkMsTUFBN0MsQ0FBUDtBQUNIOzs7Ozs7OztRQ1RlLFksR0FBQSxZO1FBR0EsVyxHQUFBLFc7QUFIVCxTQUFTLFlBQVQsQ0FBc0IsS0FBdEIsRUFBNkIsSUFBN0IsRUFBbUM7QUFDdEMsV0FBTyxNQUFNLE1BQU4sQ0FBYTtBQUFBLGVBQVEsS0FBSyxJQUFMLEtBQWMsSUFBdEI7QUFBQSxLQUFiLENBQVA7QUFDSDtBQUNNLFNBQVMsV0FBVCxDQUFxQixLQUFyQixFQUE0QjtBQUMvQixXQUFPLFdBQVcsS0FBWCxFQUFrQixPQUFsQixDQUEwQixDQUExQixDQUFQO0FBQ0g7Ozs7O0FDREQ7Ozs7OztBQUVBLE1BQU0sV0FBTixFQUNLLElBREwsQ0FDVTtBQUFBLFdBQU8sSUFBSSxJQUFKLEVBQVA7QUFBQSxDQURWLEVBRUssSUFGTCxDQUVVLG1CQUFXO0FBQ2IsUUFBTSxPQUFPLFNBQVMsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsU0FBSyxZQUFMLENBQWtCLG1CQUFJLE9BQUosQ0FBbEIsRUFBZ0MsS0FBSyxVQUFMLENBQWdCLENBQWhCLENBQWhDO0FBQ0gsQ0FMTCxFLENBTkEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGZ1bmN0aW9uIHRleHQod29yZHMpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh3b3Jkcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gbmV3RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xyXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXYoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGkoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdpJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzcGFuKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnc3BhbicsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbmF2KC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbmF2JywgLi4uY2hpbGRyZW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1bCguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3VsJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBsaSguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2xpJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHAoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdwJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW1nKHNvdXJjZSkge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBjcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltYWdlLnNyYyA9IHNvdXJjZTtcclxuICAgIHJldHVybiBpbWFnZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaDEoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdoMScsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYXJ0aWNsZSguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZvb3RlciguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGgzKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaDMnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidXR0b24oLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRJZChlbGVtZW50LCBpZCkge1xyXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3RWxlbWVudCwgeyBpZCB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgLi4ua2xhc3Nlcykge1xyXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAga2xhc3Nlcy5mb3JFYWNoKGtsYXNzID0+IG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChrbGFzcykpO1xyXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgeyBkaXYsIGFkZElkIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgbW9kYWwgZnJvbSAnLi9tb2RhbCc7XHJcbmltcG9ydCBuYXZiYXIgZnJvbSAnLi9uYXZiYXInO1xyXG5pbXBvcnQgaGVybyBmcm9tICcuL2hlcm8nO1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xyXG5pbXBvcnQgYm90dG9tIGZyb20gJy4vYm90dG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcChpdGVtcykge1xyXG4gICAgY29uc3QgbW9kYWxFbGUgPSBtb2RhbChpdGVtcyk7XHJcbiAgICBjb25zdCBuYXZiYXJFbGUgPSBuYXZiYXIoKTtcclxuICAgIGNvbnN0IGhlcm9FbGUgPSBoZXJvKCk7XHJcbiAgICBjb25zdCBtZW51RWxlID0gbWVudShpdGVtcyk7XHJcbiAgICBjb25zdCBib3R0b21FbGUgPSBib3R0b20oKTtcclxuICAgIGNvbnN0IGFwcEVsZSA9IGFkZElkKGRpdihtb2RhbEVsZSwgbmF2YmFyRWxlLCBoZXJvRWxlLCBtZW51RWxlLCBib3R0b21FbGUpLCAnYXBwLWNvbnRhaW5lcicpO1xyXG4gICAgcmV0dXJuIGFwcEVsZTtcclxufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGZvb3RlciwgdGV4dCwgcCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJvdHRvbSgpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBwKHRleHQoJ1N1cmVuZHJhIFZpZGl5YWxhJykpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGFkZENsYXNzKGRpdihuYW1lKSwgJ2NvbnRlbnQnLCAnaXMtY2VudGVyZWQnKTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBhZGRDbGFzcyhkaXYoY29udGVudCksICdjb250YWluZXInKTtcclxuXHJcbiAgICByZXR1cm4gYWRkQ2xhc3MoZm9vdGVyKGNvbnRhaW5lciksICdmb290ZXInKTtcclxufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGltZywgcCwgc2VjdGlvbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlcm8oKSB7XHJcbiAgICBjb25zdCBsb2dvID0gYWRkQ2xhc3MoaW1nKCdzdGF0aWMvY2hlZl93aGl0ZS5wbmcnKSwgJ2xvZ28nKTtcclxuICAgIGNvbnN0IHRoZSA9IGFkZENsYXNzKHAodGV4dCgnVGhlJykpLCAnaGVyby10ZXh0LWxpZ2h0Jyk7XHJcbiAgICBjb25zdCBzb3V0aEluZGlhbiA9IGFkZENsYXNzKHAodGV4dCgnU291dGggSW5kaWFuJykpLCAnaGVyby10ZXh0LWJvbGQnKTtcclxuICAgIGNvbnN0IGN1aXNpbmUgPSBhZGRDbGFzcyhwKHRleHQoJ0N1aXNpbmUnKSksICdoZXJvLXRleHQtbGlnaHQnKTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBhZGRDbGFzcyhkaXYobG9nbywgdGhlLCBzb3V0aEluZGlhbiwgY3Vpc2luZSksICdjb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCBoZXJvQ29udGVudCA9IGFkZENsYXNzKGRpdihjb250YWluZXIpLCAnaGVyby1jb250ZW50Jyk7XHJcblxyXG4gICAgcmV0dXJuIGFkZENsYXNzKHNlY3Rpb24oaGVyb0NvbnRlbnQpLCAnaGVybycsICdzcGxhc2gnKTtcclxufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCB7IGZpbHRlckJ5VHlwZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgbWVudUxpc3QgZnJvbSAnLi9tZW51TGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZWZ0TWVudShpdGVtcyA9IFtdKSB7XHJcbiAgICBjb25zdCBhcHBldGl6ZXJzID0gbWVudUxpc3QoJ0FwcGV0aXplcnMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdhcHBldGl6ZXInKSk7XHJcbiAgICBjb25zdCBidXJnZXJzID0gbWVudUxpc3QoJ0J1cmdlcnMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdidXJnZXInKSk7XHJcblxyXG4gICAgcmV0dXJuIGFkZENsYXNzKGRpdihhcHBldGl6ZXJzLCBidXJnZXJzKSwgJ2NvbHVtbicsICdpcy02Jyk7XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgYWRkSWQsIGRpdiwgc2VjdGlvbiB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IGxlZnRNZW51IGZyb20gJy4vbGVmdE1lbnUnO1xyXG5pbXBvcnQgcmlnaHRNZW51IGZyb20gJy4vcmlnaHRNZW51JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoaXRlbXMgPSBbXSkge1xyXG4gICAgY29uc3QgbGVmdFNpZGUgPSBsZWZ0TWVudShpdGVtcyk7XHJcbiAgICBjb25zdCByaWdodFNpZGUgPSByaWdodE1lbnUoaXRlbXMpO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IGFkZENsYXNzKHNlY3Rpb24obGVmdFNpZGUsIHJpZ2h0U2lkZSksICdjb2x1bW5zJyk7XHJcbiAgICBjb25zdCBtZW51RWxlID0gYWRkSWQoYWRkQ2xhc3MoZGl2KGNvbHVtbnMpLCAnY29udGFpbmVyJyksICdtZW51Jyk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnVFbGU7XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgYXJ0aWNsZSwgYnV0dG9uLCBkaXYsIGgzLCBwLCBzcGFuLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUl0ZW0oaXRlbURhdGEgPSB7fSkge1xyXG4gICAgY29uc3QgbmFtZSA9IGFkZENsYXNzKGgzKHRleHQoaXRlbURhdGEubmFtZSkpLCAnbmFtZScpO1xyXG4gICAgY29uc3QgcHJpY2UgPSBhZGRDbGFzcyhzcGFuKHRleHQoYCQke2Zvcm1hdFByaWNlKGl0ZW1EYXRhLnByaWNlKX1gKSksICdwcmljZScsICdpcy1wdWxsZWQtcmlnaHQnKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYWRkQ2xhc3MocCh0ZXh0KGl0ZW1EYXRhLmRlc2NyaXB0aW9uKSksICdkZXNjJyk7XHJcbiAgICBjb25zdCBhZGRUb0NhcnQgPSBhZGRDbGFzcyhidXR0b24odGV4dCgnQWRkIHRvIENhcnQnKSksICdidXR0b24nLCAnaXMtcHVsbGVkLXJpZ2h0JywgJ2FkZC10by1jYXJ0Jyk7XHJcblxyXG4gICAgY29uc3QgbWVkaWFDb250ZW50ID0gYWRkQ2xhc3MoZGl2KG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbiwgYWRkVG9DYXJ0KSwgJ21lZGlhLWNvbnRlbnQnKTtcclxuXHJcbiAgICBjb25zdCBpdGVtID0gYWRkQ2xhc3MoYXJ0aWNsZShtZWRpYUNvbnRlbnQpLCAnbWVkaWEnLCAnbWVudV9pdGVtJyk7XHJcbiAgICBpdGVtLmRhdGFzZXQua2V5ID0gaXRlbURhdGEuaWQ7XHJcblxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2LCBoMSwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IG1lbnVJdGVtIGZyb20gJy4vbWVudUl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUxpc3QoaGVhZGxpbmUsIGl0ZW1zID0gW10pIHtcclxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGl0ZW1zLm1hcChtZW51SXRlbSk7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBhZGRDbGFzcyhoMSh0ZXh0KGhlYWRsaW5lKSksICd0aXRsZScpO1xyXG5cclxuICAgIHJldHVybiBhZGRDbGFzcyhkaXYodGl0bGUsIC4uLm1lbnVJdGVtcyksICdjb2xsZWN0aW9uJyk7XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgYWRkSWQsIGJ1dHRvbiwgZGl2LCBoMSwgaSwgcCwgc2VjdGlvbiwgdGV4dCwgdWwgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCBtb2RhbEl0ZW0gZnJvbSAnLi9tb2RhbEl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWwoaXRlbXMgPSBbXSkge1xyXG4gICAgY29uc3QgY2xvc2UgPSBhZGRJZChhZGRDbGFzcyhpKCksICdmYScsICdmYS10aW1lcycsICdjbG9zZScpLCAnY2xvc2UnKTtcclxuICAgIGNvbnN0IHRpdGxlID0gYWRkQ2xhc3MoaDEodGV4dCgnQ2FydCcpKSwgJ3RpdGxlJyk7XHJcblxyXG4gICAgbGV0IGNhcnQ7XHJcbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY2FydCA9IHAodGV4dCgnWW91ciBjYXJ0IGlzIGVtcHR5LicpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2FydCA9IGFkZENsYXNzKHVsKGl0ZW1zLm1hcChtb2RhbEl0ZW0pLCAnbWVudScpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNhcnRDb250YWluZXIgPSBhZGRJZChkaXYoY2FydCksICdjYXJ0LWl0ZW1zJyk7XHJcbiAgICBjb25zdCBjaGVja291dEJ1dHRvbiA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdDaGVja291dCcpKSwgJ2J1dHRvbicsICdpcy1mdWxsd2lkdGgnKTtcclxuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGNsb3NlLCB0aXRsZSwgY2FydENvbnRhaW5lciwgY2hlY2tvdXRCdXR0b24pLCAnbW9kYWwtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBtb2RhbEVsZSA9IGFkZElkKGFkZENsYXNzKHNlY3Rpb24obW9kYWxDb250YWluZXIpLCAnbW9kYWwnKSwgJ21vZGFsJyk7XHJcblxyXG4gICAgcmV0dXJuIG1vZGFsRWxlO1xyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGksIGxpLCBzcGFuLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWxJdGVtKGl0ZW1EYXRhKSB7XHJcbiAgICBjb25zdCBuYW1lID0gYWRkQ2xhc3Moc3Bhbih0ZXh0KGl0ZW1EYXRhLm5hbWUpKSwgJ25hbWUnKTtcclxuICAgIGNvbnN0IHByaWNlID0gYWRkQ2xhc3Moc3Bhbih0ZXh0KGZvcm1hdFByaWNlKGl0ZW1EYXRhLnByaWNlKSkpLCAncHJpY2UnLCAnaXMtcHVsbGVkLXJpZ2h0Jyk7XHJcbiAgICBjb25zdCByZW1vdmVCdXR0b24gPSBhZGRDbGFzcyhpKCksICdmYScsICdmYS10aW1lcycsICdyZW1vdmUnKTtcclxuICAgIGNvbnN0IGl0ZW0gPSBhZGRDbGFzcyhsaShuYW1lLCBwcmljZSwgcmVtb3ZlQnV0dG9uKSwgJ21lbnUtaXRlbScpO1xyXG4gICAgaXRlbS5kYXRhc2V0LmtleSA9IGl0ZW1EYXRhLmlkO1xyXG5cclxuICAgIHJldHVybiBpdGVtO1xyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGFkZElkLCBkaXYsIGksIG5hdiwgc3BhbiB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmJhcigpIHtcclxuICAgIGNvbnN0IG5hdkxlZnQgPSBhZGRDbGFzcyhkaXYoKSwgJ25hdmJhci1sZWZ0Jyk7XHJcblxyXG4gICAgY29uc3QgY2FydEljb24gPSBhZGRJZChhZGRDbGFzcyhpKCksICdmYScsICdmYS1zaG9wcGluZy1jYXJ0JyksICdjYXJ0LWljb24nKTtcclxuICAgIGNvbnN0IGNhcnRJdGVtcyA9IGFkZENsYXNzKHNwYW4oKSwgJ2NhcnQtaXRlbXMnKTtcclxuICAgIGNvbnN0IG5hdmJhckl0ZW0gPSBhZGRDbGFzcyhkaXYoY2FydEljb24sIGNhcnRJdGVtcyksICduYXZiYXItaXRlbScpO1xyXG4gICAgY29uc3QgbmF2UmlnaHQgPSBhZGRDbGFzcyhkaXYobmF2YmFySXRlbSksICduYXZiYXItcmlnaHQnLCAnY2FydCcpO1xyXG5cclxuICAgIHJldHVybiBhZGRDbGFzcyhuYXYobmF2TGVmdCwgbmF2UmlnaHQpLCAnbmF2YmFyJyk7XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgeyBmaWx0ZXJCeVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IG1lbnVMaXN0IGZyb20gJy4vbWVudUxpc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmlnaHRNZW51KGl0ZW1zID0gW10pIHtcclxuICAgIGNvbnN0IHNvdXBTYWxhZCA9IG1lbnVMaXN0KCdTb3VwcyBhbmQgU2FsYWRzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnc291cF9zYWxhZCcpKTtcclxuICAgIGNvbnN0IGRlc3NlcnRzID0gbWVudUxpc3QoJ0Rlc3NlcnRzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnZGVzc2VydCcpKTtcclxuXHJcbiAgICByZXR1cm4gYWRkQ2xhc3MoZGl2KHNvdXBTYWxhZCwgZGVzc2VydHMpLCAnY29sdW1uJywgJ2lzLTYnKTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJCeVR5cGUoaXRlbXMsIHR5cGUpIHtcclxuICAgIHJldHVybiBpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnR5cGUgPT09IHR5cGUpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQcmljZShwcmljZSkge1xyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocHJpY2UpLnRvRml4ZWQoMik7XHJcbn0iLCIvKiBjb25zdCBsb3dlcnMgPSBbJ2FsZXgnLCAnZ2VvcmdlJywgJ2Jvbm5pZScsICdtYXJpYScsICdlbGxpZSddO1xyXG5jb25zdCB1cHBlcnMgPSBsb3dlcnMubWFwKG5hbWUgPT4gbmFtZS50b1VwcGVyQ2FzZSgpKTtcclxudXBwZXJzLmZvckVhY2gobmFtZSA9PiBjb25zb2xlLmxvZyhgSGVsbG8sICR7bmFtZX1gKSk7ICovXHJcblxyXG5pbXBvcnQgYXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnO1xyXG5cclxuZmV0Y2goJ2Zvb2QuanNvbicpXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKHJlc0JvZHkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUoYXBwKHJlc0JvZHkpLCBib2R5LmNoaWxkTm9kZXNbMF0pO1xyXG4gICAgfSk7Il19
