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
    var modalEle = (0, _modal2.default)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxidWlsZGVycy5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXGFwcC5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXGJvdHRvbS5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXGhlcm8uanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxsZWZ0TWVudS5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXG1lbnUuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxtZW51SXRlbS5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXG1lbnVMaXN0LmpzIiwic3JjXFxqc1xcY29tcG9uZW50c1xcbW9kYWwuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxtb2RhbEl0ZW0uanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxuYXZiYXIuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxyaWdodE1lbnUuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIiwic3JjXFxqc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztRQ0FnQixJLEdBQUEsSTtRQUdBLGEsR0FBQSxhO1FBS0EsRyxHQUFBLEc7UUFHQSxPLEdBQUEsTztRQUdBLEUsR0FBQSxFO1FBR0EsRSxHQUFBLEU7UUFHQSxHLEdBQUEsRztRQUdBLEUsR0FBQSxFO1FBR0EsRSxHQUFBLEU7UUFHQSxDLEdBQUEsQztRQUdBLEksR0FBQSxJO1FBR0EsTyxHQUFBLE87UUFHQSxNLEdBQUEsTTtRQUdBLEMsR0FBQSxDO1FBR0EsRyxHQUFBLEc7UUFLQSxNLEdBQUEsTTtRQUdBLEssR0FBQSxLO1FBSUEsUSxHQUFBLFE7QUF4RFQsU0FBUyxJQUFULENBQWMsS0FBZCxFQUFxQjtBQUN4QixXQUFPLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFQO0FBQ0g7QUFDTSxTQUFTLGFBQVQsQ0FBdUIsSUFBdkIsRUFBMEM7QUFDN0MsUUFB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UUFBTSxXQUFXLHdCQUFTLFVBQVQsRUFBcUIsMkJBQWEsS0FBYixFQUFvQixTQUFwQixDQUFyQixDQUFqQjs7QUFFQSxXQUFPLHdCQUFTLG1CQUFJLFNBQUosRUFBZSxRQUFmLENBQVQsRUFBbUMsUUFBbkMsRUFBNkMsTUFBN0MsQ0FBUDtBQUNIOzs7Ozs7OztRQ1RlLFksR0FBQSxZO1FBR0EsVyxHQUFBLFc7QUFIVCxTQUFTLFlBQVQsQ0FBc0IsS0FBdEIsRUFBNkIsSUFBN0IsRUFBbUM7QUFDdEMsV0FBTyxNQUFNLE1BQU4sQ0FBYTtBQUFBLGVBQVEsS0FBSyxJQUFMLEtBQWMsSUFBdEI7QUFBQSxLQUFiLENBQVA7QUFDSDtBQUNNLFNBQVMsV0FBVCxDQUFxQixLQUFyQixFQUE0QjtBQUMvQixXQUFPLFdBQVcsS0FBWCxFQUFrQixPQUFsQixDQUEwQixDQUExQixDQUFQO0FBQ0g7Ozs7O0FDREQ7Ozs7OztBQUVBLE1BQU0sV0FBTixFQUNLLElBREwsQ0FDVTtBQUFBLFdBQU8sSUFBSSxJQUFKLEVBQVA7QUFBQSxDQURWLEVBRUssSUFGTCxDQUVVLG1CQUFXO0FBQ2IsUUFBTSxPQUFPLFNBQVMsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsU0FBSyxZQUFMLENBQWtCLG1CQUFJLE9BQUosQ0FBbEIsRUFBZ0MsS0FBSyxVQUFMLENBQWdCLENBQWhCLENBQWhDO0FBQ0gsQ0FMTCxFLENBTkEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGZ1bmN0aW9uIHRleHQod29yZHMpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh3b3Jkcyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgLi4uY2hpbGRyZW4pIHtcclxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XHJcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGl2KC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZGl2JywgLi4uY2hpbGRyZW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xlKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaDEoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdoMScsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaDMoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdoMycsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbmF2KC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbmF2JywgLi4uY2hpbGRyZW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1bCguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3VsJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBsaSguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2xpJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaScsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc3BhbiguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNlY3Rpb24oLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmb290ZXIoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdmb290ZXInLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHAoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdwJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpbWcoc291cmNlKSB7XHJcbiAgICBjb25zdCBpbWFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1hZ2Uuc3JjID0gc291cmNlO1xyXG4gICAgcmV0dXJuIGltYWdlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBidXR0b24oLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZElkKGVsZW1lbnQsIGlkKSB7XHJcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXdFbGVtZW50LCB7IGlkIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCAuLi5rbGFzc2VzKSB7XHJcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICBrbGFzc2VzLmZvckVhY2goa2xhc3MgPT4gbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGtsYXNzKSk7XHJcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcclxufSIsImltcG9ydCB7IGRpdiwgYWRkSWQgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCBtb2RhbCBmcm9tICcuL21vZGFsJztcclxuaW1wb3J0IG5hdmJhciBmcm9tICcuL25hdmJhcic7XHJcbmltcG9ydCBoZXJvIGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCBib3R0b20gZnJvbSAnLi9ib3R0b20nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwKGl0ZW1zKSB7XHJcbiAgICBjb25zdCBtb2RhbEVsZSA9IG1vZGFsKCk7XHJcbiAgICBjb25zdCBuYXZiYXJFbGUgPSBuYXZiYXIoKTtcclxuICAgIGNvbnN0IGhlcm9FbGUgPSBoZXJvKCk7XHJcbiAgICBjb25zdCBtZW51RWxlID0gbWVudShpdGVtcyk7XHJcbiAgICBjb25zdCBib3R0b21FbGUgPSBib3R0b20oKTtcclxuICAgIGNvbnN0IGFwcEVsZSA9IGFkZElkKGRpdihtb2RhbEVsZSwgbmF2YmFyRWxlLCBoZXJvRWxlLCBtZW51RWxlLCBib3R0b21FbGUpLCAnYXBwLWNvbnRhaW5lcicpO1xyXG4gICAgcmV0dXJuIGFwcEVsZTtcclxufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGZvb3RlciwgdGV4dCwgcCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJvdHRvbSgpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBwKHRleHQoJ1N1cmVuZHJhIFZpZGl5YWxhJykpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGFkZENsYXNzKGRpdihuYW1lKSwgJ2NvbnRlbnQnLCAnaXMtY2VudGVyZWQnKTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBhZGRDbGFzcyhkaXYoY29udGVudCksICdjb250YWluZXInKTtcclxuXHJcbiAgICByZXR1cm4gYWRkQ2xhc3MoZm9vdGVyKGNvbnRhaW5lciksICdmb290ZXInKTtcclxufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGltZywgcCwgc2VjdGlvbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlcm8oKSB7XHJcbiAgICBjb25zdCBsb2dvID0gYWRkQ2xhc3MoaW1nKCdzdGF0aWMvY2hlZl93aGl0ZS5wbmcnKSwgJ2xvZ28nKTtcclxuICAgIGNvbnN0IHRoZSA9IGFkZENsYXNzKHAodGV4dCgnVGhlJykpLCAnaGVyby10ZXh0LWxpZ2h0Jyk7XHJcbiAgICBjb25zdCBzb3V0aEluZGlhbiA9IGFkZENsYXNzKHAodGV4dCgnU291dGggSW5kaWFuJykpLCAnaGVyby10ZXh0LWJvbGQnKTtcclxuICAgIGNvbnN0IGN1aXNpbmUgPSBhZGRDbGFzcyhwKHRleHQoJ0N1aXNpbmUnKSksICdoZXJvLXRleHQtbGlnaHQnKTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBhZGRDbGFzcyhkaXYobG9nbywgdGhlLCBzb3V0aEluZGlhbiwgY3Vpc2luZSksICdjb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCBoZXJvQ29udGVudCA9IGFkZENsYXNzKGRpdihjb250YWluZXIpLCAnaGVyby1jb250ZW50Jyk7XHJcblxyXG4gICAgcmV0dXJuIGFkZENsYXNzKHNlY3Rpb24oaGVyb0NvbnRlbnQpLCAnaGVybycsICdzcGxhc2gnKTtcclxufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCB7IGZpbHRlckJ5VHlwZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgbWVudUxpc3QgZnJvbSAnLi9tZW51TGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZWZ0TWVudShpdGVtcyA9IFtdKSB7XHJcbiAgICBjb25zdCBhcHBldGl6ZXJzID0gbWVudUxpc3QoJ0FwcGV0aXplcnMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdhcHBldGl6ZXInKSk7XHJcbiAgICBjb25zdCBidXJnZXJzID0gbWVudUxpc3QoJ0J1cmdlcnMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdidXJnZXInKSk7XHJcblxyXG4gICAgcmV0dXJuIGFkZENsYXNzKGRpdihhcHBldGl6ZXJzLCBidXJnZXJzKSwgJ2NvbHVtbicsICdpcy02Jyk7XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgYWRkSWQsIGRpdiwgc2VjdGlvbiB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IGxlZnRNZW51IGZyb20gJy4vbGVmdE1lbnUnO1xyXG5pbXBvcnQgcmlnaHRNZW51IGZyb20gJy4vcmlnaHRNZW51JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoaXRlbXMgPSBbXSkge1xyXG4gICAgY29uc3QgbGVmdFNpZGUgPSBsZWZ0TWVudShpdGVtcyk7XHJcbiAgICBjb25zdCByaWdodFNpZGUgPSByaWdodE1lbnUoaXRlbXMpO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IGFkZENsYXNzKHNlY3Rpb24obGVmdFNpZGUsIHJpZ2h0U2lkZSksICdjb2x1bW5zJyk7XHJcbiAgICBjb25zdCBtZW51RWxlID0gYWRkSWQoYWRkQ2xhc3MoZGl2KGNvbHVtbnMpLCAnY29udGFpbmVyJyksICdtZW51Jyk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnVFbGU7XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgYXJ0aWNsZSwgYnV0dG9uLCBkaXYsIGgzLCBwLCBzcGFuLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51SXRlbShpdGVtRGF0YSA9IHt9KSB7XHJcbiAgICBjb25zdCBuYW1lID0gYWRkQ2xhc3MoaDModGV4dChpdGVtRGF0YS5uYW1lKSksICduYW1lJyk7XHJcbiAgICBjb25zdCBwcmljZSA9IGFkZENsYXNzKHNwYW4odGV4dChgJCR7Zm9ybWF0UHJpY2UoaXRlbURhdGEucHJpY2UpfWApKSwgJ3ByaWNlJywgJ2lzLXB1bGxlZC1yaWdodCcpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBhZGRDbGFzcyhwKHRleHQoaXRlbURhdGEuZGVzY3JpcHRpb24pKSwgJ2Rlc2MnKTtcclxuICAgIGNvbnN0IGFkZFRvQ2FydCA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdBZGQgdG8gQ2FydCcpKSwgJ2J1dHRvbicsICdpcy1wdWxsZWQtcmlnaHQnLCAnYWRkLXRvLWNhcnQnKTtcclxuICAgIGNvbnN0IG1lZGlhQ29udGVudCA9IGFkZENsYXNzKGRpdihuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24sIGFkZFRvQ2FydCksICdtZWRpYS1jb250ZW50Jyk7XHJcbiAgICBjb25zdCBpdGVtID0gYWRkQ2xhc3MoYXJ0aWNsZShtZWRpYUNvbnRlbnQpLCAnbWVkaWEnLCAnbWVudV9pdGVtJyk7XHJcbiAgICBpdGVtLmRhdGFzZXQua2V5ID0gaXRlbURhdGEuaWQ7XHJcbiAgICByZXR1cm4gaXRlbTtcclxuXHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2LCBoMSwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IG1lbnVJdGVtIGZyb20gJy4vbWVudUl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUxpc3QoaGVhZGxpbmUsIGl0ZW1zID0gW10pIHtcclxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGl0ZW1zLm1hcChtZW51SXRlbSk7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBhZGRDbGFzcyhoMSh0ZXh0KGhlYWRsaW5lKSksICd0aXRsZScpO1xyXG5cclxuICAgIHJldHVybiBhZGRDbGFzcyhkaXYodGl0bGUsIC4uLm1lbnVJdGVtcyksICdjb2xsZWN0aW9uJyk7XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgYWRkSWQsIGJ1dHRvbiwgZGl2LCBoMSwgaSwgcCwgc2VjdGlvbiwgdGV4dCwgdWwgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCBtb2RhbEl0ZW0gZnJvbSAnLi9tb2RhbEl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWwoaXRlbXMgPSBbXSkge1xyXG4gICAgY29uc3QgY2xvc2UgPSBhZGRJZChhZGRDbGFzcyhpKCksICdmYScsICdmYS10aW1lcycsICdjbG9zZScpLCAnY2xvc2UnKTtcclxuICAgIGNvbnN0IHRpdGxlID0gYWRkQ2xhc3MoaDEodGV4dCgnQ2FydCcpKSwgJ3RpdGxlJyk7XHJcblxyXG4gICAgbGV0IGNhcnQ7XHJcbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY2FydCA9IHAodGV4dCgnWW91ciBjYXJ0IGlzIGVtcHR5LicpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWxJdGVtcyA9IGl0ZW1zLm1hcChtb2RhbEl0ZW0pO1xyXG4gICAgICAgIGNhcnQgPSBhZGRDbGFzcyh1bCguLi5tb2RhbEl0ZW1zKSwgJ21lbnUnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNhcnRDb250YWluZXIgPSBhZGRJZChkaXYoY2FydCksICdjYXJ0LWl0ZW1zJyk7XHJcbiAgICBjb25zdCBjaGVja291dEJ1dHRvbiA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdDaGVja291dCcpKSwgJ2J1dHRvbicsICdpcy1mdWxsd2lkdGgnKTtcclxuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGNsb3NlLCB0aXRsZSwgY2FydENvbnRhaW5lciwgY2hlY2tvdXRCdXR0b24pLCAnbW9kYWwtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBtb2RhbEVsZSA9IGFkZElkKGFkZENsYXNzKHNlY3Rpb24obW9kYWxDb250YWluZXIpLCAnbW9kYWwnKSwgJ21vZGFsJyk7XHJcblxyXG4gICAgcmV0dXJuIG1vZGFsRWxlO1xyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGksIGxpLCBzcGFuLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWxJdGVtKGl0ZW1EYXRhKSB7XHJcbiAgICBjb25zdCBuYW1lID0gYWRkQ2xhc3Moc3Bhbih0ZXh0KGl0ZW1EYXRhLm5hbWUpKSwgJ25hbWUnKTtcclxuICAgIGNvbnN0IHByaWNlID0gYWRkQ2xhc3Moc3Bhbih0ZXh0KGZvcm1hdFByaWNlKGl0ZW1EYXRhLnByaWNlKSkpLCAncHJpY2UnLCAnaXMtcHVsbGVkLXJpZ2h0Jyk7XHJcbiAgICBjb25zdCByZW1vdmVCdXR0b24gPSBhZGRDbGFzcyhpKCksICdmYScsICdmYS10aW1lcycsICdyZW1vdmUnKTtcclxuICAgIGNvbnN0IGl0ZW0gPSBhZGRDbGFzcyhsaShuYW1lLCBwcmljZSwgcmVtb3ZlQnV0dG9uKSwgJ21lbnUtaXRlbScpO1xyXG4gICAgaXRlbS5kYXRhc2V0LmtleSA9IGl0ZW1EYXRhLmlkO1xyXG5cclxuICAgIHJldHVybiBpdGVtO1xyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGFkZElkLCBkaXYsIGksIG5hdiwgc3BhbiB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmJhcigpIHtcclxuICAgIGNvbnN0IG5hdkxlZnQgPSBhZGRDbGFzcyhkaXYoKSwgJ25hdmJhci1sZWZ0Jyk7XHJcblxyXG4gICAgY29uc3QgY2FydEljb24gPSBhZGRJZChhZGRDbGFzcyhpKCksICdmYScsICdmYS1zaG9wcGluZy1jYXJ0JyksICdjYXJ0LWljb24nKTtcclxuICAgIGNvbnN0IGNhcnRJdGVtcyA9IGFkZENsYXNzKHNwYW4oKSwgJ2NhcnQtaXRlbXMnKTtcclxuICAgIGNvbnN0IG5hdmJhckl0ZW0gPSBhZGRDbGFzcyhkaXYoY2FydEljb24sIGNhcnRJdGVtcyksICduYXZiYXItaXRlbScpO1xyXG4gICAgY29uc3QgbmF2UmlnaHQgPSBhZGRDbGFzcyhkaXYobmF2YmFySXRlbSksICduYXZiYXItcmlnaHQnLCAnY2FydCcpO1xyXG5cclxuICAgIHJldHVybiBhZGRDbGFzcyhuYXYobmF2TGVmdCwgbmF2UmlnaHQpLCAnbmF2YmFyJyk7XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgeyBmaWx0ZXJCeVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IG1lbnVMaXN0IGZyb20gJy4vbWVudUxpc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmlnaHRNZW51KGl0ZW1zID0gW10pIHtcclxuICAgIGNvbnN0IHNvdXBTYWxhZCA9IG1lbnVMaXN0KCdTb3VwcyBhbmQgU2FsYWRzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnc291cF9zYWxhZCcpKTtcclxuICAgIGNvbnN0IGRlc3NlcnRzID0gbWVudUxpc3QoJ0Rlc3NlcnRzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnZGVzc2VydCcpKTtcclxuXHJcbiAgICByZXR1cm4gYWRkQ2xhc3MoZGl2KHNvdXBTYWxhZCwgZGVzc2VydHMpLCAnY29sdW1uJywgJ2lzLTYnKTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJCeVR5cGUoaXRlbXMsIHR5cGUpIHtcclxuICAgIHJldHVybiBpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnR5cGUgPT09IHR5cGUpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQcmljZShwcmljZSkge1xyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocHJpY2UpLnRvRml4ZWQoMik7XHJcbn0iLCIvKiBjb25zdCBsb3dlcnMgPSBbJ2FsZXgnLCAnZ2VvcmdlJywgJ2Jvbm5pZScsICdtYXJpYScsICdlbGxpZSddO1xyXG5jb25zdCB1cHBlcnMgPSBsb3dlcnMubWFwKG5hbWUgPT4gbmFtZS50b1VwcGVyQ2FzZSgpKTtcclxudXBwZXJzLmZvckVhY2gobmFtZSA9PiBjb25zb2xlLmxvZyhgSGVsbG8sICR7bmFtZX1gKSk7ICovXHJcblxyXG5pbXBvcnQgYXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnO1xyXG5cclxuZmV0Y2goJ2Zvb2QuanNvbicpXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKHJlc0JvZHkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUoYXBwKHJlc0JvZHkpLCBib2R5LmNoaWxkTm9kZXNbMF0pO1xyXG4gICAgfSk7Il19
