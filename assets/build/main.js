"use strict";
(self["webpackChunksusanoo"] = self["webpackChunksusanoo"] || []).push([["main"],{

/***/ "./src/scripts/Application.js":
/*!************************************!*\
  !*** ./src/scripts/Application.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Application; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _classes_NavigationEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/NavigationEvents */ "./src/scripts/classes/NavigationEvents.js");
/* harmony import */ var _classes_OverlaysAnimations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classes/OverlaysAnimations */ "./src/scripts/classes/OverlaysAnimations.js");
/* harmony import */ var _classes_Particle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classes/Particle */ "./src/scripts/classes/Particle.js");






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





var _initNavigationEvents = /*#__PURE__*/new WeakSet();

var _initOverlaysAnimations = /*#__PURE__*/new WeakSet();

var _initParticle = /*#__PURE__*/new WeakSet();

var Application = function Application() {
  _classCallCheck(this, Application);

  _initParticle.add(this);

  _initOverlaysAnimations.add(this);

  _initNavigationEvents.add(this);

  _classPrivateMethodGet(this, _initNavigationEvents, _initNavigationEvents2).call(this);

  _classPrivateMethodGet(this, _initOverlaysAnimations, _initOverlaysAnimations2).call(this);

  _classPrivateMethodGet(this, _initParticle, _initParticle2).call(this);
};

function _initNavigationEvents2() {
  var closeButton = document.querySelector('[data-button-close]');
  var menuButton = document.querySelector('[data-button-menu]');
  var navigationContainer = document.querySelector('[data-navigation-container]');
  var mobileContainerAnimation = document.querySelector('[data-mobile-container-animation]');
  new _classes_NavigationEvents__WEBPACK_IMPORTED_MODULE_5__.NavigationEvents(closeButton, menuButton, navigationContainer, mobileContainerAnimation);
}

function _initOverlaysAnimations2() {
  var rareOverlays = document.querySelectorAll('[data-overlay]');
  new _classes_OverlaysAnimations__WEBPACK_IMPORTED_MODULE_6__.OverlaysAnimations(rareOverlays);
}

function _initParticle2() {
  var canvas = document.querySelector('[data-canvas]');
  new _classes_Particle__WEBPACK_IMPORTED_MODULE_7__.Particle(canvas);
}



/***/ }),

/***/ "./src/scripts/classes/NavigationEvents.js":
/*!*************************************************!*\
  !*** ./src/scripts/classes/NavigationEvents.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationEvents": function() { return /* binding */ NavigationEvents; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_5__);







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _closeButton = /*#__PURE__*/new WeakMap();

var _menuButton = /*#__PURE__*/new WeakMap();

var _navigationContainer = /*#__PURE__*/new WeakMap();

var _mobileContainerAnimation = /*#__PURE__*/new WeakMap();

var _addRemoveClass = /*#__PURE__*/new WeakSet();

var NavigationEvents = function NavigationEvents(closeButton, menuButton, navigationContainer, mobileContainerAnimation) {
  _classCallCheck(this, NavigationEvents);

  _addRemoveClass.add(this);

  _closeButton.set(this, {
    writable: true,
    value: void 0
  });

  _menuButton.set(this, {
    writable: true,
    value: void 0
  });

  _navigationContainer.set(this, {
    writable: true,
    value: void 0
  });

  _mobileContainerAnimation.set(this, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldSet(this, _closeButton, closeButton);

  _classPrivateFieldSet(this, _menuButton, menuButton);

  _classPrivateFieldSet(this, _navigationContainer, navigationContainer);

  _classPrivateFieldSet(this, _mobileContainerAnimation, mobileContainerAnimation);

  _classPrivateFieldGet(this, _closeButton).addEventListener('click', _classPrivateMethodGet(this, _addRemoveClass, _addRemoveClass2).bind(this));

  _classPrivateFieldGet(this, _menuButton).addEventListener('click', _classPrivateMethodGet(this, _addRemoveClass, _addRemoveClass2).bind(this));
};

function _addRemoveClass2() {
  if (_classPrivateFieldGet(this, _closeButton).classList.contains('is-active')) {
    _classPrivateFieldGet(this, _closeButton).classList.remove('is-active');

    _classPrivateFieldGet(this, _navigationContainer).classList.remove('is-active');

    _classPrivateFieldGet(this, _mobileContainerAnimation).classList.remove('is-active');

    return;
  }

  _classPrivateFieldGet(this, _navigationContainer).classList.add('is-active');

  _classPrivateFieldGet(this, _mobileContainerAnimation).classList.add('is-active');

  _classPrivateFieldGet(this, _closeButton).classList.add('is-active');
}

/***/ }),

/***/ "./src/scripts/classes/OverlaysAnimations.js":
/*!***************************************************!*\
  !*** ./src/scripts/classes/OverlaysAnimations.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverlaysAnimations": function() { return /* binding */ OverlaysAnimations; }
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_6__);








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _rareOverlays = /*#__PURE__*/new WeakMap();

var _addOverlayClass = /*#__PURE__*/new WeakSet();

var OverlaysAnimations = function OverlaysAnimations(rareOverlays) {
  var _this = this;

  _classCallCheck(this, OverlaysAnimations);

  _addOverlayClass.add(this);

  _rareOverlays.set(this, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldSet(this, _rareOverlays, rareOverlays);

  _classPrivateFieldGet(this, _rareOverlays).forEach(function (item) {
    _classPrivateMethodGet(_this, _addOverlayClass, _addOverlayClass2).call(_this, item);
  });
};

function _addOverlayClass2(item) {
  var onIntersection = function onIntersection(entries) {
    if (entries[0]['intersectionRatio'] !== 0) {
      entries.forEach(function (entry) {
        entry.target.classList.add('overlay');
        setTimeout(function () {
          entry.target.classList.add('is-revealed');
        }, 700);
      });
    }
  };

  var observer = new IntersectionObserver(onIntersection);
  observer.observe(item);
}

/***/ }),

/***/ "./src/scripts/classes/Particle.js":
/*!*****************************************!*\
  !*** ./src/scripts/classes/Particle.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Particle": function() { return /* binding */ Particle; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ParticleFunctionality__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ParticleFunctionality */ "./src/scripts/classes/ParticleFunctionality.js");







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var _canvas = /*#__PURE__*/new WeakMap();

var _ctx = /*#__PURE__*/new WeakMap();

var _particlesArray = /*#__PURE__*/new WeakMap();

var _reset = /*#__PURE__*/new WeakSet();

var _init = /*#__PURE__*/new WeakSet();

var _animate = /*#__PURE__*/new WeakSet();

var _connect = /*#__PURE__*/new WeakSet();

var Particle = function Particle(canvas) {
  _classCallCheck(this, Particle);

  _connect.add(this);

  _animate.add(this);

  _init.add(this);

  _reset.add(this);

  _canvas.set(this, {
    writable: true,
    value: void 0
  });

  _ctx.set(this, {
    writable: true,
    value: void 0
  });

  _particlesArray.set(this, {
    writable: true,
    value: []
  });

  _classPrivateFieldSet(this, _canvas, canvas);

  _classPrivateFieldSet(this, _ctx, canvas.getContext('2d'));

  _classPrivateFieldGet(this, _canvas).width = window.innerWidth;
  _classPrivateFieldGet(this, _canvas).height = window.innerHeight;

  _classPrivateMethodGet(this, _init, _init2).call(this);

  _classPrivateMethodGet(this, _animate, _animate2).call(this);

  window.addEventListener('resize', _classPrivateMethodGet(this, _reset, _reset2).bind(this));
};

function _reset2() {
  _classPrivateFieldGet(this, _canvas).width = innerWidth;
  _classPrivateFieldGet(this, _canvas).height = innerHeight;
}

function _init2() {
  _classPrivateFieldSet(this, _particlesArray, []);

  var numberOfParticles = _classPrivateFieldGet(this, _canvas).height * _classPrivateFieldGet(this, _canvas).width / 34000;

  for (var i = 0; i < numberOfParticles; i++) {
    var size = Math.random() * 5 + 1;
    var x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
    var y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
    var directionX = Math.random() * 5 - 2.5;
    var directionY = Math.random() * 5 - 2.5;
    var color = '#b0abbe';

    _classPrivateFieldGet(this, _particlesArray).push(new _ParticleFunctionality__WEBPACK_IMPORTED_MODULE_6__.ParticleFunctionality(x, y, directionX, directionY, size, color));
  }
}

function _animate2() {
  var _this = this;

  setTimeout(function () {
    requestAnimationFrame(_classPrivateMethodGet(_this, _animate, _animate2).bind(_this));
  }, 15);

  _classPrivateFieldGet(this, _ctx).clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < _classPrivateFieldGet(this, _particlesArray).length; i++) {
    _classPrivateFieldGet(this, _particlesArray)[i].update();
  }

  _classPrivateMethodGet(this, _connect, _connect2).call(this);
}

function _connect2() {
  var opacity = 1;

  for (var a = 0; a < _classPrivateFieldGet(this, _particlesArray).length; a++) {
    for (var b = a; b < _classPrivateFieldGet(this, _particlesArray).length; b++) {
      var distance = (_classPrivateFieldGet(this, _particlesArray)[a].x - _classPrivateFieldGet(this, _particlesArray)[b].x) * (_classPrivateFieldGet(this, _particlesArray)[a].x - _classPrivateFieldGet(this, _particlesArray)[b].x) + (_classPrivateFieldGet(this, _particlesArray)[a].y - _classPrivateFieldGet(this, _particlesArray)[b].y) * (_classPrivateFieldGet(this, _particlesArray)[a].y - _classPrivateFieldGet(this, _particlesArray)[b].y);

      if (distance < _classPrivateFieldGet(this, _canvas).width / 7 * (_classPrivateFieldGet(this, _canvas).height / 7)) {
        opacity = 1 - distance / 20000;
        _classPrivateFieldGet(this, _ctx).strokeStyle = 'rgba(176, 171, 190,' + opacity + ')';
        _classPrivateFieldGet(this, _ctx).lineWidth = 1;

        _classPrivateFieldGet(this, _ctx).beginPath();

        _classPrivateFieldGet(this, _ctx).moveTo(_classPrivateFieldGet(this, _particlesArray)[a].x, _classPrivateFieldGet(this, _particlesArray)[a].y);

        _classPrivateFieldGet(this, _ctx).lineTo(_classPrivateFieldGet(this, _particlesArray)[b].x, _classPrivateFieldGet(this, _particlesArray)[b].y);

        _classPrivateFieldGet(this, _ctx).stroke();
      }
    }
  }
}

/***/ }),

/***/ "./src/scripts/classes/ParticleFunctionality.js":
/*!******************************************************!*\
  !*** ./src/scripts/classes/ParticleFunctionality.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParticleFunctionality": function() { return /* binding */ ParticleFunctionality; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _resetMouseCoordinate = /*#__PURE__*/new WeakSet();

var _reset = /*#__PURE__*/new WeakSet();

var ParticleFunctionality = /*#__PURE__*/function () {
  function ParticleFunctionality(x, y, directionX, directionY, size, color) {
    _classCallCheck(this, ParticleFunctionality);

    _reset.add(this);

    _resetMouseCoordinate.add(this);

    this.canvas = document.querySelector('[data-canvas]');
    this.ctx = this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
    this.mouse = {
      x: null,
      y: null,
      radius: this.canvas.height / 180 * (this.canvas.width / 180)
    };
    window.addEventListener('mousemove', this.mouseMovement.bind(this));
    window.addEventListener('mouseout', _classPrivateMethodGet(this, _resetMouseCoordinate, _resetMouseCoordinate2).bind(this));
    window.addEventListener('resize', _classPrivateMethodGet(this, _reset, _reset2).bind(this));
  }

  _createClass(ParticleFunctionality, [{
    key: "mouseMovement",
    value: function mouseMovement(event) {
      this.mouse.x = event.x;
      this.mouse.y = event.y;
    }
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.x > this.canvas.width || this.x < 0) {
        this.directionX = -this.directionX;
      }

      if (this.y > this.canvas.height || this.y < 0) {
        this.directionY = -this.directionY;
      }

      var dx = this.mouse.x - this.x;
      var dy = this.mouse.y - this.y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.mouse.radius + this.size) {
        if (this.mouse.x < this.x && this.x < this.canvas.width - this.size * 10) {
          this.x += 10;
        }

        if (this.mouse.x > this.x && this.x > this.size * 10) {
          this.x -= 10;
        }

        if (this.mouse.y < this.y && this.y < this.canvas.height - this.size * 10) {
          this.y += 10;
        }

        if (this.mouse.y > this.y && this.y > this.size * 10) {
          this.y -= 10;
        }
      }

      this.x += this.directionX;
      this.y += this.directionY;
      this.draw();
    }
  }]);

  return ParticleFunctionality;
}();

function _resetMouseCoordinate2() {
  this.mouse.x = undefined;
  this.mouse.y = undefined;
}

function _reset2() {
  this.mouse.radius = this.canvas.height / 180 * (this.canvas.width / 180);
}

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Application */ "./src/scripts/Application.js");

new _Application__WEBPACK_IMPORTED_MODULE_0__.default();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__("./src/scripts/main.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);