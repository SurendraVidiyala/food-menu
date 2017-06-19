(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.text = text;
exports.createElement = createElement;
exports.div = div;
exports.i = i;
exports.nav = nav;
exports.span = span;
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

function nav() {
    for (var _len4 = arguments.length, children = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        children[_key4] = arguments[_key4];
    }

    return createElement.apply(undefined, ['nav'].concat(children));
}

function span() {
    for (var _len5 = arguments.length, children = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        children[_key5] = arguments[_key5];
    }

    return createElement.apply(undefined, ['span'].concat(children));
}

function addClass(element) {
    var newElement = element.cloneNode(true);

    for (var _len6 = arguments.length, klasses = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        klasses[_key6 - 1] = arguments[_key6];
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function app() {
    var navbarEle = (0, _navbar2.default)();
    var appEle = (0, _builders.addId)((0, _builders.div)(navbarEle), 'app-container');
    return appEle;
}

},{"../builders":1,"./navbar":3}],3:[function(require,module,exports){
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

},{"../builders":1}],4:[function(require,module,exports){
'use strict';

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var body = document.querySelector('body'); /* const lowers = ['alex', 'george', 'bonnie', 'maria', 'ellie'];
                                           const uppers = lowers.map(name => name.toUpperCase());
                                           uppers.forEach(name => console.log(`Hello, ${name}`)); */

body.insertBefore((0, _app2.default)(), body.childNodes[0]);

},{"./components/app":2}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxidWlsZGVycy5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXGFwcC5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXG5hdmJhci5qcyIsInNyY1xcanNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7UUNBZ0IsSSxHQUFBLEk7UUFJQSxhLEdBQUEsYTtRQU1BLEcsR0FBQSxHO1FBR0EsQyxHQUFBLEM7UUFJQSxHLEdBQUEsRztRQUlBLEksR0FBQSxJO1FBSUEsUSxHQUFBLFE7UUFLQSxLLEdBQUEsSztBQTlCVCxTQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQ3hCLFdBQU8sU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQVA7QUFDSDs7QUFFTSxTQUFTLGFBQVQsQ0FBdUIsSUFBdkIsRUFBMEM7QUFDN0MsUUFBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixJQUF2QixDQUFuQjs7QUFENkMsc0NBQVYsUUFBVTtBQUFWLGdCQUFVO0FBQUE7O0FBRTdDLGFBQVMsT0FBVCxDQUFpQjtBQUFBLGVBQVMsV0FBVyxXQUFYLENBQXVCLEtBQXZCLENBQVQ7QUFBQSxLQUFqQjtBQUNBLFdBQU8sVUFBUDtBQUNIOztBQUVNLFNBQVMsR0FBVCxHQUEwQjtBQUFBLHVDQUFWLFFBQVU7QUFBVixnQkFBVTtBQUFBOztBQUM3QixXQUFPLGdDQUFjLEtBQWQsU0FBd0IsUUFBeEIsRUFBUDtBQUNIO0FBQ00sU0FBUyxDQUFULEdBQXdCO0FBQUEsdUNBQVYsUUFBVTtBQUFWLGdCQUFVO0FBQUE7O0FBQzNCLFdBQU8sZ0NBQWMsR0FBZCxTQUFzQixRQUF0QixFQUFQO0FBQ0g7O0FBRU0sU0FBUyxHQUFULEdBQTBCO0FBQUEsdUNBQVYsUUFBVTtBQUFWLGdCQUFVO0FBQUE7O0FBQzdCLFdBQU8sZ0NBQWMsS0FBZCxTQUF3QixRQUF4QixFQUFQO0FBQ0g7O0FBRU0sU0FBUyxJQUFULEdBQTJCO0FBQUEsdUNBQVYsUUFBVTtBQUFWLGdCQUFVO0FBQUE7O0FBQzlCLFdBQU8sZ0NBQWMsTUFBZCxTQUF5QixRQUF6QixFQUFQO0FBQ0g7O0FBRU0sU0FBUyxRQUFULENBQWtCLE9BQWxCLEVBQXVDO0FBQzFDLFFBQU0sYUFBYSxRQUFRLFNBQVIsQ0FBa0IsSUFBbEIsQ0FBbkI7O0FBRDBDLHVDQUFULE9BQVM7QUFBVCxlQUFTO0FBQUE7O0FBRTFDLFlBQVEsT0FBUixDQUFnQjtBQUFBLGVBQVMsV0FBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLEtBQXpCLENBQVQ7QUFBQSxLQUFoQjtBQUNBLFdBQU8sVUFBUDtBQUNIO0FBQ00sU0FBUyxLQUFULENBQWUsT0FBZixFQUF3QixFQUF4QixFQUE0QjtBQUMvQixRQUFNLGFBQWEsUUFBUSxTQUFSLENBQWtCLElBQWxCLENBQW5CO0FBQ0EsV0FBTyxPQUFPLE1BQVAsQ0FBYyxVQUFkLEVBQTBCLEVBQUUsTUFBRixFQUExQixDQUFQO0FBQ0g7Ozs7Ozs7O2tCQy9CdUIsRzs7QUFGeEI7O0FBQ0E7Ozs7OztBQUNlLFNBQVMsR0FBVCxHQUFlO0FBQzFCLFFBQU0sWUFBWSx1QkFBbEI7QUFDQSxRQUFNLFNBQVMscUJBQU0sbUJBQUksU0FBSixDQUFOLEVBQXNCLGVBQXRCLENBQWY7QUFDQSxXQUFPLE1BQVA7QUFDSDs7Ozs7Ozs7a0JDSnVCLE07O0FBRnhCOztBQUVlLFNBQVMsTUFBVCxHQUFrQjtBQUM3QixRQUFNLFVBQVUsd0JBQVMsb0JBQVQsRUFBZ0IsYUFBaEIsQ0FBaEI7O0FBRUEsUUFBTSxXQUFXLHFCQUFNLHdCQUFTLGtCQUFULEVBQWMsSUFBZCxFQUFvQixrQkFBcEIsQ0FBTixFQUErQyxXQUEvQyxDQUFqQjtBQUNBLFFBQU0sWUFBWSx3QkFBUyxxQkFBVCxFQUFpQixZQUFqQixDQUFsQjtBQUNBLFFBQU0sYUFBYSx3QkFBUyxtQkFBSSxRQUFKLEVBQWMsU0FBZCxDQUFULEVBQW1DLGFBQW5DLENBQW5CO0FBQ0EsUUFBTSxXQUFXLHdCQUFTLG1CQUFJLFVBQUosQ0FBVCxFQUEwQixjQUExQixFQUEwQyxNQUExQyxDQUFqQjs7QUFFQSxXQUFPLHdCQUFTLG1CQUFJLE9BQUosRUFBYSxRQUFiLENBQVQsRUFBaUMsUUFBakMsQ0FBUDtBQUNIOzs7OztBQ1BEOzs7Ozs7QUFDQSxJQUFNLE9BQU8sU0FBUyxhQUFULENBQXVCLE1BQXZCLENBQWIsQyxDQUxBOzs7O0FBTUEsS0FBSyxZQUFMLENBQWtCLG9CQUFsQixFQUF5QixLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBekIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGZ1bmN0aW9uIHRleHQod29yZHMpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh3b3Jkcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gbmV3RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xyXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXYoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGkoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdpJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmF2KC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbmF2JywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3BhbiguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCAuLi5rbGFzc2VzKSB7XHJcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICBrbGFzc2VzLmZvckVhY2goa2xhc3MgPT4gbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGtsYXNzKSk7XHJcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkSWQoZWxlbWVudCwgaWQpIHtcclxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ld0VsZW1lbnQsIHsgaWQgfSk7XHJcbn0iLCJpbXBvcnQgeyBkaXYsIGFkZElkIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwKCkge1xyXG4gICAgY29uc3QgbmF2YmFyRWxlID0gbmF2YmFyKCk7XHJcbiAgICBjb25zdCBhcHBFbGUgPSBhZGRJZChkaXYobmF2YmFyRWxlKSwgJ2FwcC1jb250YWluZXInKTtcclxuICAgIHJldHVybiBhcHBFbGU7XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgYWRkSWQsIGRpdiwgaSwgbmF2LCBzcGFuIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2YmFyKCkge1xyXG4gICAgY29uc3QgbmF2TGVmdCA9IGFkZENsYXNzKGRpdigpLCAnbmF2YmFyLWxlZnQnKTtcclxuXHJcbiAgICBjb25zdCBjYXJ0SWNvbiA9IGFkZElkKGFkZENsYXNzKGkoKSwgJ2ZhJywgJ2ZhLXNob3BwaW5nLWNhcnQnKSwgJ2NhcnQtaWNvbicpO1xyXG4gICAgY29uc3QgY2FydEl0ZW1zID0gYWRkQ2xhc3Moc3BhbigpLCAnY2FydC1pdGVtcycpO1xyXG4gICAgY29uc3QgbmF2YmFySXRlbSA9IGFkZENsYXNzKGRpdihjYXJ0SWNvbiwgY2FydEl0ZW1zKSwgJ25hdmJhci1pdGVtJyk7XHJcbiAgICBjb25zdCBuYXZSaWdodCA9IGFkZENsYXNzKGRpdihuYXZiYXJJdGVtKSwgJ25hdmJhci1yaWdodCcsICdjYXJ0Jyk7XHJcblxyXG4gICAgcmV0dXJuIGFkZENsYXNzKG5hdihuYXZMZWZ0LCBuYXZSaWdodCksICduYXZiYXInKTtcclxufSIsIi8qIGNvbnN0IGxvd2VycyA9IFsnYWxleCcsICdnZW9yZ2UnLCAnYm9ubmllJywgJ21hcmlhJywgJ2VsbGllJ107XHJcbmNvbnN0IHVwcGVycyA9IGxvd2Vycy5tYXAobmFtZSA9PiBuYW1lLnRvVXBwZXJDYXNlKCkpO1xyXG51cHBlcnMuZm9yRWFjaChuYW1lID0+IGNvbnNvbGUubG9nKGBIZWxsbywgJHtuYW1lfWApKTsgKi9cclxuXHJcbmltcG9ydCBhcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCc7XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbmJvZHkuaW5zZXJ0QmVmb3JlKGFwcCgpLCBib2R5LmNoaWxkTm9kZXNbMF0pOyJdfQ==
