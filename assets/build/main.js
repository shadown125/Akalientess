"use strict";
(self["webpackChunkAkaLientesS"] = self["webpackChunkAkaLientesS"] || []).push([["main"],{

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
/* harmony import */ var _classes_HackingGame__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classes/HackingGame */ "./src/scripts/classes/HackingGame.js");






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }






var _initNavigationEvents = /*#__PURE__*/new WeakSet();

var _initOverlaysAnimations = /*#__PURE__*/new WeakSet();

var _initParticle = /*#__PURE__*/new WeakSet();

var _initHackingGame = /*#__PURE__*/new WeakSet();

var Application = function Application() {
  _classCallCheck(this, Application);

  _initHackingGame.add(this);

  _initParticle.add(this);

  _initOverlaysAnimations.add(this);

  _initNavigationEvents.add(this);

  _classPrivateMethodGet(this, _initNavigationEvents, _initNavigationEvents2).call(this);

  _classPrivateMethodGet(this, _initOverlaysAnimations, _initOverlaysAnimations2).call(this);

  _classPrivateMethodGet(this, _initParticle, _initParticle2).call(this);

  _classPrivateMethodGet(this, _initHackingGame, _initHackingGame2).call(this);
};

function _initNavigationEvents2() {
  var closeButton = document.querySelector('[data-button-close]');
  var menuButton = document.querySelector('[data-button-menu]');
  var navigationContainer = document.querySelector('[data-navigation-container]');
  var mobileContainerAnimation = document.querySelector('[data-mobile-container-animation]');
  var navLinks = document.querySelectorAll('[data-nav-link]');
  var navContactButton = document.querySelectorAll('[data-nav-contact]');
  var contactSection = document.querySelector('[data-contact-section]');
  new _classes_NavigationEvents__WEBPACK_IMPORTED_MODULE_5__.NavigationEvents(closeButton, menuButton, navigationContainer, mobileContainerAnimation, navLinks, navContactButton, contactSection);
}

function _initOverlaysAnimations2() {
  var rareOverlays = document.querySelectorAll('[data-overlay]');
  var secondOverlays = document.querySelectorAll('[data-second-overlay]');
  var loadingMask = document.querySelector('[data-loading-mask]');
  new _classes_OverlaysAnimations__WEBPACK_IMPORTED_MODULE_6__.OverlaysAnimations(rareOverlays, secondOverlays, loadingMask);
}

function _initParticle2() {
  var canvas = document.querySelector('[data-canvas]');

  if (canvas !== null) {
    new _classes_Particle__WEBPACK_IMPORTED_MODULE_7__.Particle(canvas);
  }
}

function _initHackingGame2() {
  var hackingButton = document.querySelector('[data-hacking-button]');
  var numberContainer = document.querySelector('[data-number-container]');
  var textContainer = document.querySelector('[data-text-container]');
  var answerReveal = document.querySelector('[data-answer-reveal]');
  var answerQuestion = document.querySelector('[data-answer-question]');
  var revealedSubmittedText = document.querySelector('[data-revealed-submitted-text]');
  var loadingText = document.querySelector('[data-loading-text]');
  var consoleContainer = document.querySelector('[data-console-container]');
  var countdown = document.querySelector('[data-answer-countdown]');
  var inputElement = document.querySelector('[data-answer-input]');
  var answerBoxDescription = document.querySelector('[data-answer-box-description]');
  var console = document.querySelector('[data-console]');
  var asciiArt = document.querySelector('[data-ascii-art]');

  if (hackingButton !== null) {
    new _classes_HackingGame__WEBPACK_IMPORTED_MODULE_8__.HackingGame(hackingButton, numberContainer, textContainer, answerReveal, answerQuestion, revealedSubmittedText, loadingText, consoleContainer, countdown, inputElement, answerBoxDescription, console, asciiArt);
  }
}



/***/ }),

/***/ "./src/scripts/classes/HackingGame.js":
/*!********************************************!*\
  !*** ./src/scripts/classes/HackingGame.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HackingGame": function() { return /* binding */ HackingGame; }
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _PuzzleHandler_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./PuzzleHandler.js */ "./src/scripts/classes/PuzzleHandler.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldDestructureSet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); return _classApplyDescriptorDestructureSet(receiver, descriptor); }

function _classApplyDescriptorDestructureSet(receiver, descriptor) { if (descriptor.set) { if (!("__destrObj" in descriptor)) { descriptor.__destrObj = { set value(v) { descriptor.set.call(receiver, v); } }; } return descriptor.__destrObj; } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } return descriptor; } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var _submitted = /*#__PURE__*/new WeakMap();

var _answer = /*#__PURE__*/new WeakMap();

var _result = /*#__PURE__*/new WeakMap();

var _hackingButton = /*#__PURE__*/new WeakMap();

var _numberContainer = /*#__PURE__*/new WeakMap();

var _textContainer = /*#__PURE__*/new WeakMap();

var _answerReveal = /*#__PURE__*/new WeakMap();

var _answerQuestion = /*#__PURE__*/new WeakMap();

var _revealedSubmittedText = /*#__PURE__*/new WeakMap();

var _loadingText = /*#__PURE__*/new WeakMap();

var _consoleContainer = /*#__PURE__*/new WeakMap();

var _countdown = /*#__PURE__*/new WeakMap();

var _inputElement = /*#__PURE__*/new WeakMap();

var _answerBoxDescription = /*#__PURE__*/new WeakMap();

var _startInput = /*#__PURE__*/new WeakMap();

var _consoleInputContainer = /*#__PURE__*/new WeakMap();

var _box = /*#__PURE__*/new WeakMap();

var _console = /*#__PURE__*/new WeakMap();

var _answerInputLabel = /*#__PURE__*/new WeakMap();

var _updated = /*#__PURE__*/new WeakMap();

var _asciiArt = /*#__PURE__*/new WeakMap();

var _inputListening = /*#__PURE__*/new WeakSet();

var _hackProgress = /*#__PURE__*/new WeakSet();

var _disableAndSaveInputValue = /*#__PURE__*/new WeakSet();

var _updateTerminal = /*#__PURE__*/new WeakSet();

var _newLineConsole = /*#__PURE__*/new WeakSet();

var _consoleStart = /*#__PURE__*/new WeakSet();

var _init = /*#__PURE__*/new WeakSet();

var _setInformationText = /*#__PURE__*/new WeakSet();

var HackingGame = /*#__PURE__*/function (_PuzzleHandler) {
  _inherits(HackingGame, _PuzzleHandler);

  var _super = _createSuper(HackingGame);

  function HackingGame(hackingButton, numberContainer, textContainer, answerReveal, answerQuestion, revealedSubmittedText, loadingText, consoleContainer, countdown, inputElement, answerBoxDescription, console, asciiArt) {
    var _this;

    _classCallCheck(this, HackingGame);

    _this = _super.call(this);

    _setInformationText.add(_assertThisInitialized(_this));

    _init.add(_assertThisInitialized(_this));

    _consoleStart.add(_assertThisInitialized(_this));

    _newLineConsole.add(_assertThisInitialized(_this));

    _updateTerminal.add(_assertThisInitialized(_this));

    _disableAndSaveInputValue.add(_assertThisInitialized(_this));

    _hackProgress.add(_assertThisInitialized(_this));

    _inputListening.add(_assertThisInitialized(_this));

    _submitted.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _answer.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _result.set(_assertThisInitialized(_this), {
      writable: true,
      value: true
    });

    _hackingButton.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _numberContainer.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _textContainer.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _answerReveal.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _answerQuestion.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _revealedSubmittedText.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _loadingText.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _consoleContainer.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _countdown.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _inputElement.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _answerBoxDescription.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _startInput.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _consoleInputContainer.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _box.set(_assertThisInitialized(_this), {
      writable: true,
      value: document.querySelector('[data-box]')
    });

    _console.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _answerInputLabel.set(_assertThisInitialized(_this), {
      writable: true,
      value: document.querySelector('[data-answer-input-label]')
    });

    _updated.set(_assertThisInitialized(_this), {
      writable: true,
      value: false
    });

    _asciiArt.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this), _hackingButton, hackingButton);

    _classPrivateFieldSet(_assertThisInitialized(_this), _numberContainer, numberContainer);

    _classPrivateFieldSet(_assertThisInitialized(_this), _textContainer, textContainer);

    _classPrivateFieldSet(_assertThisInitialized(_this), _answerReveal, answerReveal);

    _classPrivateFieldSet(_assertThisInitialized(_this), _answerQuestion, answerQuestion);

    _classPrivateFieldSet(_assertThisInitialized(_this), _revealedSubmittedText, revealedSubmittedText);

    _classPrivateFieldSet(_assertThisInitialized(_this), _loadingText, loadingText);

    _classPrivateFieldSet(_assertThisInitialized(_this), _consoleContainer, consoleContainer);

    _classPrivateFieldSet(_assertThisInitialized(_this), _countdown, countdown);

    _classPrivateFieldSet(_assertThisInitialized(_this), _inputElement, inputElement);

    _classPrivateFieldSet(_assertThisInitialized(_this), _answerBoxDescription, answerBoxDescription);

    _classPrivateFieldSet(_assertThisInitialized(_this), _console, console);

    _classPrivateFieldSet(_assertThisInitialized(_this), _asciiArt, asciiArt);

    _classPrivateFieldGet(_assertThisInitialized(_this), _hackingButton).addEventListener('click', _classPrivateMethodGet(_assertThisInitialized(_this), _consoleStart, _consoleStart2).bind(_assertThisInitialized(_this)));

    return _this;
  }

  return HackingGame;
}(_PuzzleHandler_js__WEBPACK_IMPORTED_MODULE_19__.PuzzleHandler);

function _inputListening2() {
  if (_classPrivateFieldGet(this, _startInput).value.toLowerCase() === 'exit') {
    _classPrivateFieldGet(this, _textContainer).classList.toggle('hidden');

    _classPrivateFieldSet(this, _consoleInputContainer, document.querySelectorAll('[data-console-input-container]'));

    _classPrivateFieldGet(this, _consoleInputContainer).forEach(function (item) {
      item.remove();
    });

    _classPrivateFieldGet(this, _answerInputLabel).classList.add('hidden');

    _classPrivateFieldGet(this, _answerQuestion).classList.add('hidden');

    _classPrivateFieldGet(this, _numberContainer).classList.add('hidden');

    _classPrivateFieldGet(this, _countdown).classList.add('hidden');

    _classPrivateFieldGet(this, _inputElement).classList.add('hidden');

    _classPrivateFieldGet(this, _answerBoxDescription).classList.remove('hidden');

    _classPrivateFieldGet(this, _answerReveal).classList.remove('hidden');

    _classPrivateFieldGet(this, _textContainer).classList.remove('hidden');

    _classPrivateFieldGet(this, _revealedSubmittedText).remove('hidden');

    _classPrivateFieldGet(this, _consoleContainer).classList.add('hidden');

    _classPrivateFieldGet(this, _console).classList.remove('is-active');
  } else if (_classPrivateFieldGet(this, _startInput).value.toLowerCase() === 'hack') {
    if (_classPrivateFieldGet(this, _updated) === true) {
      _classPrivateMethodGet(this, _disableAndSaveInputValue, _disableAndSaveInputValue2).call(this);

      _classPrivateMethodGet(this, _hackProgress, _hackProgress2).call(this);
    } else {
      _classPrivateMethodGet(this, _disableAndSaveInputValue, _disableAndSaveInputValue2).call(this);

      _classPrivateFieldGet(this, _box).innerHTML += "<div class=\"console-text console-text--red\" data-console-input-container>\n                The software version is outdated! Use 'update' to update\n                </div>";

      _classPrivateMethodGet(this, _newLineConsole, _newLineConsole2).call(this);
    }
  } else if (_classPrivateFieldGet(this, _startInput).value.toLowerCase() === 'help') {
    _classPrivateMethodGet(this, _disableAndSaveInputValue, _disableAndSaveInputValue2).call(this);

    _classPrivateFieldGet(this, _box).innerHTML += "<div class=\"console-text\" data-console-input-container>\n                If you are in console and wanna more data from AkaLientesS then maybe try to type 'hack'? :D\n            </div>";

    _classPrivateMethodGet(this, _newLineConsole, _newLineConsole2).call(this);
  } else if (_classPrivateFieldGet(this, _startInput).value.toLowerCase() === 'update') {
    _classPrivateMethodGet(this, _disableAndSaveInputValue, _disableAndSaveInputValue2).call(this);

    _classPrivateMethodGet(this, _updateTerminal, _updateTerminal2).call(this);
  } else {
    _classPrivateMethodGet(this, _disableAndSaveInputValue, _disableAndSaveInputValue2).call(this);

    _classPrivateMethodGet(this, _newLineConsole, _newLineConsole2).call(this);
  }
}

function _hackProgress2() {
  return _hackProgress3.apply(this, arguments);
}

function _hackProgress3() {
  _hackProgress3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _classPrivateFieldGet(this, _box).innerHTML += "<div class=\"console-text\" data-console-input-container>\n                Breaking the connection cipher...\n            </div>";
            _context.next = 3;
            return _get(_getPrototypeOf(HackingGame.prototype), "addDelay", this).call(this, 4.5);

          case 3:
            _classPrivateFieldGet(this, _box).innerHTML += "<div class=\"console-text\" data-console-input-container>\n                Attempt number #1...\n            </div>";
            _context.next = 6;
            return _get(_getPrototypeOf(HackingGame.prototype), "addDelay", this).call(this, 4.5);

          case 6:
            _classPrivateFieldGet(this, _box).innerHTML += "<div class=\"console-text\" data-console-input-container>\n                Attempt number #2...\n            </div>";
            _context.next = 9;
            return _get(_getPrototypeOf(HackingGame.prototype), "addDelay", this).call(this, 2.5);

          case 9:
            _classPrivateFieldGet(this, _box).innerHTML += "<div class=\"console-text\" data-console-input-container>\n                The cipher is broken, connecting to the terminal...\n            </div>";
            _context.next = 12;
            return _get(_getPrototypeOf(HackingGame.prototype), "addDelay", this).call(this, 2);

          case 12:
            _classPrivateFieldGet(this, _box).innerHTML += "<div class=\"console-text\" data-console-input-container>\n                Initiating the program 5U5_1MP...\n            </div>";
            _context.next = 15;
            return _get(_getPrototypeOf(HackingGame.prototype), "addDelay", this).call(this, 7);

          case 15:
            _classPrivateFieldGet(this, _textContainer).classList.toggle('hidden');

            _classPrivateFieldSet(this, _consoleInputContainer, document.querySelectorAll('[data-console-input-container]'));

            _classPrivateFieldGet(this, _consoleInputContainer).forEach(function (item) {
              item.remove();
            });

            _classPrivateFieldGet(this, _asciiArt).classList.add('hidden');

            _classPrivateMethodGet(this, _init, _init2).call(this);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _hackProgress3.apply(this, arguments);
}

function _disableAndSaveInputValue2() {
  _classPrivateFieldGet(this, _startInput).setAttribute('value', _classPrivateFieldGet(this, _startInput).value);

  _classPrivateFieldGet(this, _startInput).disabled = true;

  _classPrivateFieldGet(this, _startInput).removeAttribute("data-start-input");
}

function _updateTerminal2() {
  return _updateTerminal3.apply(this, arguments);
}

function _updateTerminal3() {
  _updateTerminal3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _classPrivateFieldGet(this, _box).innerHTML += "<div class=\"console-text\" data-console-input-container>\n                Upgrading to 'penguin 1.32'...\n            </div>";
            _context2.next = 3;
            return _get(_getPrototypeOf(HackingGame.prototype), "addDelay", this).call(this, 2.5);

          case 3:
            _classPrivateFieldGet(this, _box).innerHTML += "<div class=\"console-text\" data-console-input-container>\n                Update: Importing the latest libraries...\n            </div>";
            _context2.next = 6;
            return _get(_getPrototypeOf(HackingGame.prototype), "addDelay", this).call(this, 1.5);

          case 6:
            _classPrivateFieldGet(this, _box).innerHTML += "<div class=\"console-text\" data-console-input-container>\n                Update: Patching bugs...\n            </div>";
            _context2.next = 9;
            return _get(_getPrototypeOf(HackingGame.prototype), "addDelay", this).call(this, 3.5);

          case 9:
            _classPrivateFieldGet(this, _box).innerHTML += "<div class=\"console-text\" data-console-input-container>\n                Update: Downloading new modules...\n            </div>";
            _context2.next = 12;
            return _get(_getPrototypeOf(HackingGame.prototype), "addDelay", this).call(this, 2.5);

          case 12:
            _classPrivateFieldGet(this, _box).innerHTML += "<div class=\"console-text\" data-console-input-container>\n                Update: Final touches...\n            </div>";
            _context2.next = 15;
            return _get(_getPrototypeOf(HackingGame.prototype), "addDelay", this).call(this, 1.5);

          case 15:
            _classPrivateFieldGet(this, _box).innerHTML += "<div class=\"console-text\" data-console-input-container>\n                Successfully upgraded to 'penguin 1.32'!!\n            </div>";
            _context2.next = 18;
            return _get(_getPrototypeOf(HackingGame.prototype), "addDelay", this).call(this, 1);

          case 18:
            _classPrivateMethodGet(this, _newLineConsole, _newLineConsole2).call(this);

            _classPrivateFieldSet(this, _updated, true);

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _updateTerminal3.apply(this, arguments);
}

function _newLineConsole2() {
  _classPrivateFieldGet(this, _box).innerHTML += "<div class=\"console-input-container\" data-console-input-container>\n                <div>server@AkaLientesS:~$ </div>\n                <input type=\"text\" class=\"input start-input\" data-start-input>\n            </div>";

  _classPrivateFieldSet(this, _startInput, document.querySelector('[data-start-input]'));

  _classPrivateFieldGet(this, _startInput).addEventListener('change', _classPrivateMethodGet(this, _inputListening, _inputListening2).bind(this));

  _classPrivateFieldGet(this, _startInput).focus();
}

function _consoleStart2() {
  return _consoleStart3.apply(this, arguments);
}

function _consoleStart3() {
  _consoleStart3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _classPrivateFieldGet(this, _box).innerHTML += "<div class=\"console-text console-text--intro\" data-console-input-container>\n                Correctly initialized the program on the computer. You are now connected to AkaLientesS.\n            </div>";
            _classPrivateFieldGet(this, _box).innerHTML += "<div class=\"console-text console-text--intro\" data-console-input-container>\n                If you want to exit, type 'exit' in the console. If you are stuck, type 'help' in the console.\n            </div>";
            _classPrivateFieldGet(this, _box).innerHTML += "<div class=\"console-input-container\" data-console-input-container>\n                <div>server@AkaLientesS:~$ </div>\n                <input type=\"text\" class=\"input start-input\" data-start-input>\n            </div>";

            _classPrivateFieldSet(this, _startInput, document.querySelector('[data-start-input]'));

            _classPrivateFieldGet(this, _startInput).addEventListener('change', _classPrivateMethodGet(this, _inputListening, _inputListening2).bind(this));

            _classPrivateFieldGet(this, _asciiArt).classList.remove('hidden');

            _classPrivateFieldSet(this, _updated, false);

            _classPrivateFieldGet(this, _revealedSubmittedText).classList.add('hidden');

            _classPrivateFieldGet(this, _answerReveal).classList.add('hidden');

            _classPrivateFieldGet(this, _answerBoxDescription).classList.add('hidden');

            _classPrivateFieldGet(this, _textContainer).classList.toggle('hidden');

            _classPrivateFieldGet(this, _consoleContainer).classList.remove('hidden');

            _classPrivateFieldGet(this, _console).classList.add('is-active');

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _consoleStart3.apply(this, arguments);
}

function _init2() {
  return _init3.apply(this, arguments);
}

function _init3() {
  _init3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var i, _classPrivateFieldGet2, _yield$_get$call, _yield$_get$call2;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _classPrivateFieldGet(this, _loadingText).innerHTML = 'Establish Connection';
            _context4.next = 3;
            return _get(_getPrototypeOf(HackingGame.prototype), "addDelay", this).call(this, 3);

          case 3:
            _classPrivateFieldGet(this, _numberContainer).classList.toggle('hidden');

            _classPrivateFieldGet(this, _textContainer).classList.toggle('hidden');

            _classPrivateFieldSet(this, _answer, '');

            _classPrivateFieldSet(this, _submitted, '');

            _classPrivateFieldSet(this, _result, true);

            i = 0;

          case 9:
            if (!(i < 3 && _classPrivateFieldGet(this, _result))) {
              _context4.next = 20;
              break;
            }

            _context4.next = 12;
            return _get(_getPrototypeOf(HackingGame.prototype), "doPuzzle", this).call(this);

          case 12:
            _yield$_get$call = _context4.sent;
            _yield$_get$call2 = _slicedToArray(_yield$_get$call, 2);
            _classPrivateFieldDestructureSet(this, _submitted).value = _yield$_get$call2[0];
            _classPrivateFieldDestructureSet(this, _answer).value = _yield$_get$call2[1];

            _classPrivateFieldSet(this, _result, ((_classPrivateFieldGet2 = _classPrivateFieldGet(this, _submitted)) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.toLowerCase()) === _classPrivateFieldGet(this, _answer));

          case 17:
            i++;
            _context4.next = 9;
            break;

          case 20:
            _classPrivateFieldGet(this, _answerInputLabel).classList.add('hidden');

            _classPrivateFieldGet(this, _answerQuestion).classList.add('hidden');

            _classPrivateFieldGet(this, _numberContainer).classList.add('hidden');

            _classPrivateFieldGet(this, _countdown).classList.add('hidden');

            _classPrivateFieldGet(this, _inputElement).classList.add('hidden');

            _classPrivateFieldGet(this, _answerBoxDescription).classList.remove('hidden');

            _classPrivateFieldGet(this, _answerReveal).classList.remove('hidden');

            _classPrivateFieldGet(this, _textContainer).classList.remove('hidden');

            _classPrivateFieldGet(this, _revealedSubmittedText).remove('hidden');

            _classPrivateMethodGet(this, _setInformationText, _setInformationText2).call(this, _classPrivateFieldGet(this, _result) ? 'Access Granted' : "The system didn't accept your answers");

            if (!_classPrivateFieldGet(this, _result)) {
              _classPrivateFieldGet(this, _answerReveal).textContent = "The answer was: " + _classPrivateFieldGet(this, _answer);
            }

            _classPrivateFieldGet(this, _revealedSubmittedText).textContent = _classPrivateFieldGet(this, _result) ? 'Good job, indeed the' : _classPrivateFieldGet(this, _submitted) == null ? "The time ran out," : "You wrote \"".concat(_classPrivateFieldGet(this, _submitted) || ' ', "\"");
            _context4.next = 34;
            return _get(_getPrototypeOf(HackingGame.prototype), "addDelay", this).call(this, 4.9);

          case 34:
            _classPrivateFieldGet(this, _consoleContainer).classList.add('hidden');

            _classPrivateFieldGet(this, _console).classList.remove('is-active');

          case 36:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _init3.apply(this, arguments);
}

function _setInformationText2(text) {
  _classPrivateFieldGet(this, _loadingText).innerHTML = text;
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

var _closeButton = /*#__PURE__*/new WeakMap();

var _menuButton = /*#__PURE__*/new WeakMap();

var _navigationContainer = /*#__PURE__*/new WeakMap();

var _mobileContainerAnimation = /*#__PURE__*/new WeakMap();

var _navLinks = /*#__PURE__*/new WeakMap();

var _contactButton = /*#__PURE__*/new WeakMap();

var _contactSection = /*#__PURE__*/new WeakMap();

var _addRemoveClass = /*#__PURE__*/new WeakSet();

var _contactEvent = /*#__PURE__*/new WeakSet();

var NavigationEvents = function NavigationEvents(closeButton, menuButton, navigationContainer, mobileContainerAnimation, navLinks, contactButton, contactSection) {
  var _this = this;

  _classCallCheck(this, NavigationEvents);

  _contactEvent.add(this);

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

  _navLinks.set(this, {
    writable: true,
    value: void 0
  });

  _contactButton.set(this, {
    writable: true,
    value: void 0
  });

  _contactSection.set(this, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldSet(this, _closeButton, closeButton);

  _classPrivateFieldSet(this, _menuButton, menuButton);

  _classPrivateFieldSet(this, _navigationContainer, navigationContainer);

  _classPrivateFieldSet(this, _mobileContainerAnimation, mobileContainerAnimation);

  _classPrivateFieldSet(this, _navLinks, navLinks);

  _classPrivateFieldSet(this, _contactButton, contactButton);

  _classPrivateFieldSet(this, _contactSection, contactSection);

  _classPrivateFieldGet(this, _contactButton).forEach(function (item) {
    item.addEventListener('click', _classPrivateMethodGet(_this, _contactEvent, _contactEvent2).bind(_this));
  });

  _classPrivateFieldGet(this, _navLinks).forEach(function (item) {
    item.addEventListener('click', _classPrivateMethodGet(_this, _addRemoveClass, _addRemoveClass2).bind(_this));
  });

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

function _contactEvent2() {
  if (_classPrivateFieldGet(this, _contactSection).classList.contains('is-active')) {
    _classPrivateFieldGet(this, _contactSection).classList.remove('is-active');

    _classPrivateFieldGet(this, _contactButton).forEach(function (item) {
      item.classList.remove('is-active');
    });

    return;
  }

  _classPrivateFieldGet(this, _contactSection).classList.add('is-active');

  _classPrivateFieldGet(this, _contactButton).forEach(function (item) {
    item.classList.add('is-active');
  });
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

var _secondOverlays = /*#__PURE__*/new WeakMap();

var _loadingMask = /*#__PURE__*/new WeakMap();

var _addOverlayClass = /*#__PURE__*/new WeakSet();

var _addSecondOverlayClass = /*#__PURE__*/new WeakSet();

var _removeLoadingMask = /*#__PURE__*/new WeakSet();

var OverlaysAnimations = function OverlaysAnimations(rareOverlays, secondOverlays, loadingMask) {
  var _this = this;

  _classCallCheck(this, OverlaysAnimations);

  _removeLoadingMask.add(this);

  _addSecondOverlayClass.add(this);

  _addOverlayClass.add(this);

  _rareOverlays.set(this, {
    writable: true,
    value: void 0
  });

  _secondOverlays.set(this, {
    writable: true,
    value: void 0
  });

  _loadingMask.set(this, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldSet(this, _rareOverlays, rareOverlays);

  _classPrivateFieldSet(this, _secondOverlays, secondOverlays);

  _classPrivateFieldSet(this, _loadingMask, loadingMask);

  _classPrivateFieldGet(this, _secondOverlays).forEach(function (item) {
    _classPrivateMethodGet(_this, _addSecondOverlayClass, _addSecondOverlayClass2).call(_this, item);
  });

  _classPrivateFieldGet(this, _rareOverlays).forEach(function (item) {
    _classPrivateMethodGet(_this, _addOverlayClass, _addOverlayClass2).call(_this, item);
  });

  window.addEventListener('DOMContentLoaded', _classPrivateMethodGet(this, _removeLoadingMask, _removeLoadingMask2).bind(this));
};

function _addOverlayClass2(item) {
  var onIntersection = function onIntersection(entries) {
    if (entries[0]['intersectionRatio'] !== 0) {
      entries.forEach(function (entry) {
        if (entry.target.classList.contains('link-project')) {
          entry.target.classList.add('overlay-project');
          entry.target.classList.add('is-revealed');
        } else if (entry.target.classList.contains('mask') || entry.target.classList.contains('mask-about-me')) {
          setTimeout(function () {
            entry.target.classList.add('mask-revealed');
          }, 750);
        } else {
          entry.target.classList.add('overlay');
          setTimeout(function () {
            entry.target.classList.add('is-revealed');
          }, 1450);
        }
      });
    }
  };

  var observer = new IntersectionObserver(onIntersection, {
    threshold: 0.25
  });
  observer.observe(item);
}

function _addSecondOverlayClass2(item) {
  var onIntersection = function onIntersection(entries) {
    if (entries[0]['intersectionRatio'] !== 0) {
      entries.forEach(function (entry) {
        entry.target.classList.add('is-revealed');
      });
    }
  };

  var observer = new IntersectionObserver(onIntersection, {
    threshold: 0.25
  });
  observer.observe(item);
}

function _removeLoadingMask2() {
  _classPrivateFieldGet(this, _loadingMask).classList.add('is-loaded');
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

/***/ "./src/scripts/classes/PuzzleBuilder.js":
/*!**********************************************!*\
  !*** ./src/scripts/classes/PuzzleBuilder.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PuzzleBuilder": function() { return /* binding */ PuzzleBuilder; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_10__);












function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _shapes = /*#__PURE__*/new WeakMap();

var _colorable = /*#__PURE__*/new WeakMap();

var _colors = /*#__PURE__*/new WeakMap();

var _questions = /*#__PURE__*/new WeakMap();

var _generateSample = /*#__PURE__*/new WeakSet();

var _generateRandomInt = /*#__PURE__*/new WeakSet();

var PuzzleBuilder = /*#__PURE__*/function () {
  function PuzzleBuilder() {
    _classCallCheck(this, PuzzleBuilder);

    _generateRandomInt.add(this);

    _generateSample.add(this);

    _shapes.set(this, {
      writable: true,
      value: ["square", "triangle", "rectangle", "circle"]
    });

    _colorable.set(this, {
      writable: true,
      value: ['background', 'text', 'number', 'shape']
    });

    _colors.set(this, {
      writable: true,
      value: {
        'black': '#000000',
        'white': '#FFFFFF',
        'blue': '#1991F9',
        'red': '#8C0C00',
        'yellow': '#FFE335',
        'orange': '#FF9900',
        'green': '#46A04F',
        'purple': '#A43AB5'
      }
    });

    _questions.set(this, {
      writable: true,
      value: {
        'background color': function backgroundColor(d) {
          return d.colors['background'];
        },
        'text background color': function textBackgroundColor(d) {
          return d.colors['text'];
        },
        'number color': function numberColor(d) {
          return d.colors['number'];
        },
        'shape color': function shapeColor(d) {
          return d.colors['shape'];
        },
        'color text': function colorText(d) {
          return d.text[0];
        },
        'shape text': function shapeText(d) {
          return d.text[1];
        },
        'shape': function shape(d) {
          return d.shape;
        }
      }
    });
  }

  _createClass(PuzzleBuilder, [{
    key: "generateRandomPuzzle",
    value: function generateRandomPuzzle() {
      var _this = this;

      var shape = _classPrivateMethodGet(this, _generateSample, _generateSample2).call(this, _classPrivateFieldGet(this, _shapes));

      var number = _classPrivateMethodGet(this, _generateRandomInt, _generateRandomInt2).call(this, 9) + 1;

      var topText = _classPrivateMethodGet(this, _generateSample, _generateSample2).call(this, Object.keys(_classPrivateFieldGet(this, _colors)));

      var bottomText = _classPrivateMethodGet(this, _generateSample, _generateSample2).call(this, _classPrivateFieldGet(this, _shapes));

      var colors = _classPrivateFieldGet(this, _colorable).reduce(function (obj, color) {
        obj[color] = _classPrivateMethodGet(_this, _generateSample, _generateSample2).call(_this, Object.keys(_classPrivateFieldGet(_this, _colors)));
        return obj;
      }, {});

      while (colors['text'] === colors['background']) {
        colors['text'] = _classPrivateMethodGet(this, _generateSample, _generateSample2).call(this, Object.keys(_classPrivateFieldGet(this, _colors)));
      }

      while (['background', 'text', 'number'].map(function (i) {
        return colors[i];
      }).includes(colors['shape'])) {
        colors['shape'] = _classPrivateMethodGet(this, _generateSample, _generateSample2).call(this, Object.keys(_classPrivateFieldGet(this, _colors)));
      }

      return {
        'shape': shape,
        'number': number,
        'text': [topText, bottomText],
        'colors': colors
      };
    }
  }, {
    key: "generateQuestionAndAnswer",
    value: function generateQuestionAndAnswer(nums, puzzles) {
      var positionOne = _classPrivateMethodGet(this, _generateRandomInt, _generateRandomInt2).call(this, nums.length);

      var tempPosTwo;

      do {
        tempPosTwo = _classPrivateMethodGet(this, _generateRandomInt, _generateRandomInt2).call(this, nums.length);
      } while (positionOne === tempPosTwo);

      var positionTwo = tempPosTwo;

      var firstQuestion = _classPrivateMethodGet(this, _generateSample, _generateSample2).call(this, Object.keys(_classPrivateFieldGet(this, _questions)));

      var tempSecondQuestion;

      do {
        tempSecondQuestion = _classPrivateMethodGet(this, _generateSample, _generateSample2).call(this, Object.keys(_classPrivateFieldGet(this, _questions)));
      } while (tempSecondQuestion === firstQuestion);

      var secondQuestion = tempSecondQuestion;
      var question = "".concat(firstQuestion, " (").concat(nums[positionOne], ") AND ").concat(secondQuestion, " (").concat(nums[positionTwo], ")");

      var answer = _classPrivateFieldGet(this, _questions)[firstQuestion](puzzles[positionOne]) + ' ' + _classPrivateFieldGet(this, _questions)[secondQuestion](puzzles[positionTwo]);

      return [question, answer];
    }
  }]);

  return PuzzleBuilder;
}();

function _generateSample2(arr) {
  return arr[_classPrivateMethodGet(this, _generateRandomInt, _generateRandomInt2).call(this, arr.length)];
}

function _generateRandomInt2(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/***/ }),

/***/ "./src/scripts/classes/PuzzleHandler.js":
/*!**********************************************!*\
  !*** ./src/scripts/classes/PuzzleHandler.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PuzzleHandler": function() { return /* binding */ PuzzleHandler; }
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _PuzzleBuilder_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./PuzzleBuilder.js */ "./src/scripts/classes/PuzzleBuilder.js");
/* harmony import */ var _SvgBuilder_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SvgBuilder.js */ "./src/scripts/classes/SvgBuilder.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }




var _progressBar = /*#__PURE__*/new WeakMap();

var _inputElement = /*#__PURE__*/new WeakMap();

var _puzzleTime = /*#__PURE__*/new WeakMap();

var _puzzleAmount = /*#__PURE__*/new WeakMap();

var _numberContainer = /*#__PURE__*/new WeakMap();

var _answerQuestion = /*#__PURE__*/new WeakMap();

var _countdown = /*#__PURE__*/new WeakMap();

var _answerInputLabel = /*#__PURE__*/new WeakMap();

var _shuffleArray = /*#__PURE__*/new WeakSet();

var _displayNumbers = /*#__PURE__*/new WeakSet();

var PuzzleHandler = /*#__PURE__*/function () {
  function PuzzleHandler() {
    _classCallCheck(this, PuzzleHandler);

    _displayNumbers.add(this);

    _shuffleArray.add(this);

    _progressBar.set(this, {
      writable: true,
      value: document.querySelector('[data-answer-progress-bar]')
    });

    _inputElement.set(this, {
      writable: true,
      value: document.querySelector('[data-answer-input]')
    });

    _puzzleTime.set(this, {
      writable: true,
      value: 15
    });

    _puzzleAmount.set(this, {
      writable: true,
      value: 4
    });

    _numberContainer.set(this, {
      writable: true,
      value: document.querySelector('[data-number-container]')
    });

    _answerQuestion.set(this, {
      writable: true,
      value: document.querySelector('[data-answer-question]')
    });

    _countdown.set(this, {
      writable: true,
      value: document.querySelector('[data-answer-countdown]')
    });

    _answerInputLabel.set(this, {
      writable: true,
      value: document.querySelector('[data-answer-input-label]')
    });
  }

  _createClass(PuzzleHandler, [{
    key: "addDelay",
    value: function addDelay(seconds) {
      return new Promise(function (res) {
        return setTimeout(res, seconds * 1000);
      });
    }
  }, {
    key: "doPuzzle",
    value: function () {
      var _doPuzzle = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this = this;

        var squares, puzzles, nums, _PuzzleBuilder$genera, _PuzzleBuilder$genera2, question, answer;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _classPrivateFieldGet(this, _inputElement).classList.add('hidden');

                _classPrivateFieldGet(this, _answerInputLabel).classList.add('hidden');

                _classPrivateFieldGet(this, _answerQuestion).classList.add('hidden');

                _classPrivateFieldGet(this, _countdown).classList.add('hidden');

                _classPrivateFieldGet(this, _numberContainer).innerHTML = '';
                squares = _toConsumableArray(Array(_classPrivateFieldGet(this, _puzzleAmount)).keys()).map(function (i) {
                  var square = document.createElement('div');
                  square.id = "square-".concat(i + 1);
                  square.className = 'square';

                  _classPrivateFieldGet(_this, _numberContainer).appendChild(square);

                  return square;
                });
                puzzles = _toConsumableArray(Array(_classPrivateFieldGet(this, _puzzleAmount))).map(function (_) {
                  return new _PuzzleBuilder_js__WEBPACK_IMPORTED_MODULE_18__.PuzzleBuilder().generateRandomPuzzle();
                });
                nums = _classPrivateMethodGet(this, _shuffleArray, _shuffleArray2).call(this, _toConsumableArray(Array(_classPrivateFieldGet(this, _puzzleAmount))).map(function (v, i) {
                  return i + 1;
                }));
                _context2.next = 10;
                return _classPrivateMethodGet(this, _displayNumbers, _displayNumbers2).call(this, nums);

              case 10:
                _classPrivateFieldGet(this, _answerQuestion).classList.remove('hidden');

                _classPrivateFieldGet(this, _progressBar).classList.remove('hidden');

                _classPrivateFieldGet(this, _inputElement).classList.remove('hidden');

                _classPrivateFieldGet(this, _answerInputLabel).classList.remove('hidden');

                _classPrivateFieldGet(this, _countdown).classList.remove('hidden');

                _classPrivateFieldGet(this, _inputElement).value = '';

                _classPrivateFieldGet(this, _inputElement).focus();

                _classPrivateFieldGet(this, _progressBar).style.transition = "";

                _classPrivateFieldGet(this, _progressBar).classList.remove('progress-bar-shrink');

                _context2.next = 21;
                return this.addDelay(0.1);

              case 21:
                _classPrivateFieldGet(this, _progressBar).style.transition = "width ".concat(_classPrivateFieldGet(this, _puzzleTime) * 1000, "ms linear");

                _classPrivateFieldGet(this, _progressBar).classList.add('progress-bar-shrink');

                squares.forEach(function (square, i) {
                  return square.style.backgroundColor = puzzles[i].colors['background'];
                });
                squares.forEach(function (square, i) {
                  return square.innerHTML = new _SvgBuilder_js__WEBPACK_IMPORTED_MODULE_19__.SvgBuilder(puzzles[i]).getPuzzle();
                });
                _PuzzleBuilder$genera = new _PuzzleBuilder_js__WEBPACK_IMPORTED_MODULE_18__.PuzzleBuilder().generateQuestionAndAnswer(nums, puzzles), _PuzzleBuilder$genera2 = _slicedToArray(_PuzzleBuilder$genera, 2), question = _PuzzleBuilder$genera2[0], answer = _PuzzleBuilder$genera2[1];
                _classPrivateFieldGet(this, _answerQuestion).textContent = question.toUpperCase();
                return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _classPrivateFieldGet(_this, _inputElement).addEventListener("keyup", function (event) {
                              if (event.keyCode === 13) {
                                resolve([_classPrivateFieldGet(_this, _inputElement).value, answer]);
                              }
                            });

                            _context.next = 3;
                            return _this.addDelay(_classPrivateFieldGet(_this, _puzzleTime));

                          case 3:
                            resolve([null, answer]);

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 28:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function doPuzzle() {
        return _doPuzzle.apply(this, arguments);
      }

      return doPuzzle;
    }()
  }]);

  return PuzzleHandler;
}();

function _shuffleArray2(arr) {
  return arr.map(function (a) {
    return {
      sort: Math.random(),
      value: a
    };
  }).sort(function (a, b) {
    return a.sort - b.sort;
  }).map(function (a) {
    return a.value;
  });
}

function _displayNumbers2(_x2) {
  return _displayNumbers3.apply(this, arguments);
}

function _displayNumbers3() {
  _displayNumbers3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(numbers) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            numbers.forEach(function (n, i) {
              return document.querySelector('#square-' + (i + 1)).innerHTML = "<div class=\"big-numbers can-shrink\" id=\"num-".concat(i + 1, "\">").concat(n, "</div>");
            });
            _context3.next = 3;
            return this.addDelay(1.5);

          case 3:
            numbers.forEach(function (n) {
              return document.querySelector('#num-' + n).classList.add('number-shrink');
            });
            _context3.next = 6;
            return this.addDelay(1.5);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _displayNumbers3.apply(this, arguments);
}

/***/ }),

/***/ "./src/scripts/classes/SvgBuilder.js":
/*!*******************************************!*\
  !*** ./src/scripts/classes/SvgBuilder.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgBuilder": function() { return /* binding */ SvgBuilder; }
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
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_7__);









function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _shapeSvg = /*#__PURE__*/new WeakMap();

var _puzzleDate = /*#__PURE__*/new WeakMap();

var _textSize = /*#__PURE__*/new WeakMap();

var _textWeight = /*#__PURE__*/new WeakMap();

var _textColor = /*#__PURE__*/new WeakMap();

var _shapeSVG = /*#__PURE__*/new WeakMap();

var _topText = /*#__PURE__*/new WeakMap();

var _bottomText = /*#__PURE__*/new WeakMap();

var _numberText = /*#__PURE__*/new WeakMap();

var _createSvg = /*#__PURE__*/new WeakSet();

var _createShape = /*#__PURE__*/new WeakSet();

var _createText = /*#__PURE__*/new WeakSet();

var SvgBuilder = /*#__PURE__*/function () {
  function SvgBuilder(puzzleData) {
    _classCallCheck(this, SvgBuilder);

    _createText.add(this);

    _createShape.add(this);

    _createSvg.add(this);

    _shapeSvg.set(this, {
      writable: true,
      value: {
        "square": function square(c) {
          return "<rect fill=".concat(c, " stroke=\"#000\" stroke-width=\"1\" width=\"150\" height=\"150\"/>");
        },
        "triangle": function triangle(c) {
          return "<polygon  fill=".concat(c, "  stroke=\"#000\" stroke-width=\"1\" points=\"0 150 75 0 150 150 0 150\"/>");
        },
        "rectangle": function rectangle(c) {
          return "<rect y=\"30\" fill=".concat(c, "  stroke=\"#000\" stroke-width=\"1\" class=\"shape\" width=\"150\" height=\"90\"/>");
        },
        "circle": function circle(c) {
          return "<circle fill=".concat(c, "  stroke=\"#000\" stroke-width=\"1\" cx=\"75\" cy=\"75\" r=\"75\"/>");
        }
      }
    });

    _puzzleDate.set(this, {
      writable: true,
      value: void 0
    });

    _textSize.set(this, {
      writable: true,
      value: void 0
    });

    _textWeight.set(this, {
      writable: true,
      value: void 0
    });

    _textColor.set(this, {
      writable: true,
      value: void 0
    });

    _shapeSVG.set(this, {
      writable: true,
      value: void 0
    });

    _topText.set(this, {
      writable: true,
      value: void 0
    });

    _bottomText.set(this, {
      writable: true,
      value: void 0
    });

    _numberText.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _puzzleDate, puzzleData);
  }

  _createClass(SvgBuilder, [{
    key: "getPuzzle",
    value: function getPuzzle() {
      _classPrivateFieldSet(this, _textSize, 21);

      _classPrivateFieldSet(this, _textWeight, 'normal');

      _classPrivateFieldSet(this, _textColor, _classPrivateFieldGet(this, _puzzleDate).colors['text']);

      _classPrivateFieldSet(this, _shapeSVG, _classPrivateMethodGet(this, _createShape, _createShape2).call(this, _classPrivateFieldGet(this, _puzzleDate).shape, _classPrivateFieldGet(this, _puzzleDate).colors['shape']));

      _classPrivateFieldSet(this, _topText, _classPrivateMethodGet(this, _createText, _createText2).call(this, _classPrivateFieldGet(this, _puzzleDate).text[0].toUpperCase(), _classPrivateFieldGet(this, _textColor), _classPrivateFieldGet(this, _textSize), _classPrivateFieldGet(this, _textWeight), 31));

      _classPrivateFieldSet(this, _bottomText, _classPrivateMethodGet(this, _createText, _createText2).call(this, _classPrivateFieldGet(this, _puzzleDate).text[1].toUpperCase(), _classPrivateFieldGet(this, _textColor), _classPrivateFieldGet(this, _textSize), _classPrivateFieldGet(this, _textWeight), 67));

      _classPrivateFieldSet(this, _numberText, _classPrivateMethodGet(this, _createText, _createText2).call(this, _classPrivateFieldGet(this, _puzzleDate).number, _classPrivateFieldGet(this, _puzzleDate).colors['number'], 60, 100, 50, 'Arial, Helvetica'));

      return _classPrivateMethodGet(this, _createSvg, _createSvg2).call(this, [_classPrivateFieldGet(this, _shapeSVG), _classPrivateFieldGet(this, _topText), _classPrivateFieldGet(this, _bottomText), _classPrivateFieldGet(this, _numberText)]);
    }
  }]);

  return SvgBuilder;
}();

function _createSvg2(elements) {
  return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 150 150\"> ".concat(elements.join("\n"), " </svg>");
}

function _createShape2(shape, color) {
  return _classPrivateFieldGet(this, _shapeSvg)[shape](color);
}

function _createText2(text, color, size, weight, y, font) {
  return "<text \n        stroke=\"black\" \n        fill=\"".concat(color, "\" \n        stroke-width=\"1\" \n        style=\"font-size:").concat(size, "px;\" \n        font-weight=\"").concat(weight, "\" \n        font-family=\"").concat(font || 'Archivo Black', ", sans-serif\"\n        x=\"50%\" \n        y=\"").concat(y, "%\" \n        dominant-baseline=\"middle\" \n        text-anchor=\"middle\"\n    >\n        ").concat(text, "\n    </text> ");
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