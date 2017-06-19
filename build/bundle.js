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
exports.section = section;
exports.p = p;
exports.img = img;
exports.addClass = addClass;
exports.addId = addId;
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
function section() {
    for (var _len6 = arguments.length, children = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        children[_key6] = arguments[_key6];
    }

    return createElement.apply(undefined, ['section'].concat(children));
}

function p() {
    for (var _len7 = arguments.length, children = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        children[_key7] = arguments[_key7];
    }

    return createElement.apply(undefined, ['p'].concat(children));
}

function img(source) {
    var image = createElement('img');
    image.src = source;
    return image;
}

function addClass(element) {
    var newElement = element.cloneNode(true);

    for (var _len8 = arguments.length, klasses = Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
        klasses[_key8 - 1] = arguments[_key8];
    }

    klasses.forEach(function (klass) {
        return newElement.classList.add(klass);
    });
    return newElement;
}
function addId(element, id) {
    var newElement = element.cloneNode(true);
    return Object.assign(newElement, { id: id });
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = app;

var _builders = require('../builders');

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _hero = require('./hero');

var _hero2 = _interopRequireDefault(_hero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function app() {
    var navbarEle = (0, _navbar2.default)();
    var heroEle = (0, _hero2.default)();
    var appEle = (0, _builders.addId)((0, _builders.div)(navbarEle, heroEle), 'app-container');
    return appEle;
}

},{"../builders":1,"./hero":3,"./navbar":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hero;

var _builders = require('../builders');

function hero() {
    var logo = (0, _builders.addClass)((0, _builders.img)('static/fancybear_white.png'), 'logo');
    var the = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('The')), 'hero-text-light');
    var southIndian = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('South Indian')), 'hero-text-bold');
    var cuisine = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('Cuisine')), 'hero-text-light');

    var container = (0, _builders.addClass)((0, _builders.div)(logo, the, southIndian, cuisine), 'container');

    var heroContent = (0, _builders.addClass)((0, _builders.div)(container), 'hero-content');

    return (0, _builders.addClass)((0, _builders.section)(heroContent), 'hero', 'splash');
}

},{"../builders":1}],4:[function(require,module,exports){
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

},{"../builders":1}],5:[function(require,module,exports){
'use strict';

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var body = document.querySelector('body'); /* const lowers = ['alex', 'george', 'bonnie', 'maria', 'ellie'];
                                           const uppers = lowers.map(name => name.toUpperCase());
                                           uppers.forEach(name => console.log(`Hello, ${name}`)); */

body.insertBefore((0, _app2.default)(), body.childNodes[0]);

},{"./components/app":2}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxidWlsZGVycy5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXGFwcC5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXGhlcm8uanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxuYXZiYXIuanMiLCJzcmNcXGpzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O1FDQWdCLEksR0FBQSxJO1FBSUEsYSxHQUFBLGE7UUFNQSxHLEdBQUEsRztRQUdBLEMsR0FBQSxDO1FBR0EsSSxHQUFBLEk7UUFHQSxHLEdBQUEsRztRQUdBLE8sR0FBQSxPO1FBSUEsQyxHQUFBLEM7UUFJQSxHLEdBQUEsRztRQU1BLFEsR0FBQSxRO1FBS0EsSyxHQUFBLEs7QUF6Q1QsU0FBUyxJQUFULENBQWMsS0FBZCxFQUFxQjtBQUN4QixXQUFPLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFQO0FBQ0g7O0FBRU0sU0FBUyxhQUFULENBQXVCLElBQXZCLEVBQTBDO0FBQzdDLFFBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBbkI7O0FBRDZDLHNDQUFWLFFBQVU7QUFBVixnQkFBVTtBQUFBOztBQUU3QyxhQUFTLE9BQVQsQ0FBaUI7QUFBQSxlQUFTLFdBQVcsV0FBWCxDQUF1QixLQUF2QixDQUFUO0FBQUEsS0FBakI7QUFDQSxXQUFPLFVBQVA7QUFDSDs7QUFFTSxTQUFTLEdBQVQsR0FBMEI7QUFBQSx1Q0FBVixRQUFVO0FBQVYsZ0JBQVU7QUFBQTs7QUFDN0IsV0FBTyxnQ0FBYyxLQUFkLFNBQXdCLFFBQXhCLEVBQVA7QUFDSDtBQUNNLFNBQVMsQ0FBVCxHQUF3QjtBQUFBLHVDQUFWLFFBQVU7QUFBVixnQkFBVTtBQUFBOztBQUMzQixXQUFPLGdDQUFjLEdBQWQsU0FBc0IsUUFBdEIsRUFBUDtBQUNIO0FBQ00sU0FBUyxJQUFULEdBQTJCO0FBQUEsdUNBQVYsUUFB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QyxhQUFuQyxDQUFuQjtBQUNBLFFBQU0sV0FBVyx3QkFBUyxtQkFBSSxVQUFKLENBQVQsRUFBMEIsY0FBMUIsRUFBMEMsTUFBMUMsQ0FBakI7O0FBRUEsV0FBTyx3QkFBUyxtQkFBSSxPQUFKLEVBQWEsUUFBYixDQUFULEVBQWlDLFFBQWpDLENBQVA7QUFDSDs7Ozs7QUNQRDs7Ozs7O0FBQ0EsSUFBTSxPQUFPLFNBQVMsYUFBVCxDQUF1QixNQUF2QixDQUFiLEMsQ0FMQTs7OztBQU1BLEtBQUssWUFBTCxDQUFrQixvQkFBbEIsRUFBeUIsS0FBSyxVQUFMLENBQWdCLENBQWhCLENBQXpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBmdW5jdGlvbiB0ZXh0KHdvcmRzKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUod29yZHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCAuLi5jaGlsZHJlbikge1xyXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcclxuICAgIHJldHVybiBuZXdFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGl2KC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZGl2JywgLi4uY2hpbGRyZW4pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaScsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc3BhbiguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG5hdiguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ25hdicsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbiguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgncCcsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGltZyhzb3VyY2UpIHtcclxuICAgIGNvbnN0IGltYWdlID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWFnZS5zcmMgPSBzb3VyY2U7XHJcbiAgICByZXR1cm4gaW1hZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCAuLi5rbGFzc2VzKSB7XHJcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICBrbGFzc2VzLmZvckVhY2goa2xhc3MgPT4gbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGtsYXNzKSk7XHJcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkSWQoZWxlbWVudCwgaWQpIHtcclxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ld0VsZW1lbnQsIHsgaWQgfSk7XHJcbn0iLCJpbXBvcnQgeyBkaXYsIGFkZElkIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJztcclxuaW1wb3J0IGhlcm8gZnJvbSAnLi9oZXJvJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwKCkge1xyXG4gICAgY29uc3QgbmF2YmFyRWxlID0gbmF2YmFyKCk7XHJcbiAgICBjb25zdCBoZXJvRWxlID0gaGVybygpO1xyXG4gICAgY29uc3QgYXBwRWxlID0gYWRkSWQoZGl2KG5hdmJhckVsZSwgaGVyb0VsZSksICdhcHAtY29udGFpbmVyJyk7XHJcbiAgICByZXR1cm4gYXBwRWxlO1xyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiwgaW1nLCBwLCBzZWN0aW9uLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVybygpIHtcclxuICAgIGNvbnN0IGxvZ28gPSBhZGRDbGFzcyhpbWcoJ3N0YXRpYy9mYW5jeWJlYXJfd2hpdGUucG5nJyksICdsb2dvJyk7XHJcbiAgICBjb25zdCB0aGUgPSBhZGRDbGFzcyhwKHRleHQoJ1RoZScpKSwgJ2hlcm8tdGV4dC1saWdodCcpO1xyXG4gICAgY29uc3Qgc291dGhJbmRpYW4gPSBhZGRDbGFzcyhwKHRleHQoJ1NvdXRoIEluZGlhbicpKSwgJ2hlcm8tdGV4dC1ib2xkJyk7XHJcbiAgICBjb25zdCBjdWlzaW5lID0gYWRkQ2xhc3MocCh0ZXh0KCdDdWlzaW5lJykpLCAnaGVyby10ZXh0LWxpZ2h0Jyk7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGxvZ28sIHRoZSwgc291dGhJbmRpYW4sIGN1aXNpbmUpLCAnY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgaGVyb0NvbnRlbnQgPSBhZGRDbGFzcyhkaXYoY29udGFpbmVyKSwgJ2hlcm8tY29udGVudCcpO1xyXG5cclxuICAgIHJldHVybiBhZGRDbGFzcyhzZWN0aW9uKGhlcm9Db250ZW50KSwgJ2hlcm8nLCAnc3BsYXNoJyk7XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgYWRkSWQsIGRpdiwgaSwgbmF2LCBzcGFuIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2YmFyKCkge1xyXG4gICAgY29uc3QgbmF2TGVmdCA9IGFkZENsYXNzKGRpdigpLCAnbmF2YmFyLWxlZnQnKTtcclxuXHJcbiAgICBjb25zdCBjYXJ0SWNvbiA9IGFkZElkKGFkZENsYXNzKGkoKSwgJ2ZhJywgJ2ZhLXNob3BwaW5nLWNhcnQnKSwgJ2NhcnQtaWNvbicpO1xyXG4gICAgY29uc3QgY2FydEl0ZW1zID0gYWRkQ2xhc3Moc3BhbigpLCAnY2FydC1pdGVtcycpO1xyXG4gICAgY29uc3QgbmF2YmFySXRlbSA9IGFkZENsYXNzKGRpdihjYXJ0SWNvbiwgY2FydEl0ZW1zKSwgJ25hdmJhci1pdGVtJyk7XHJcbiAgICBjb25zdCBuYXZSaWdodCA9IGFkZENsYXNzKGRpdihuYXZiYXJJdGVtKSwgJ25hdmJhci1yaWdodCcsICdjYXJ0Jyk7XHJcblxyXG4gICAgcmV0dXJuIGFkZENsYXNzKG5hdihuYXZMZWZ0LCBuYXZSaWdodCksICduYXZiYXInKTtcclxufSIsIi8qIGNvbnN0IGxvd2VycyA9IFsnYWxleCcsICdnZW9yZ2UnLCAnYm9ubmllJywgJ21hcmlhJywgJ2VsbGllJ107XHJcbmNvbnN0IHVwcGVycyA9IGxvd2Vycy5tYXAobmFtZSA9PiBuYW1lLnRvVXBwZXJDYXNlKCkpO1xyXG51cHBlcnMuZm9yRWFjaChuYW1lID0+IGNvbnNvbGUubG9nKGBIZWxsbywgJHtuYW1lfWApKTsgKi9cclxuXHJcbmltcG9ydCBhcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCc7XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbmJvZHkuaW5zZXJ0QmVmb3JlKGFwcCgpLCBib2R5LmNoaWxkTm9kZXNbMF0pOyJdfQ==
