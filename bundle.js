/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./about.js":
/*!******************!*\
  !*** ./about.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAbout: () => (/* binding */ getAbout)\n/* harmony export */ });\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ \"./script.js\");\n\r\n\r\nfunction getAbout() {\r\n    const content = document.querySelector(\"#content\");\r\n\r\n    content.innerHTML = ''\r\n    ;(0,_script__WEBPACK_IMPORTED_MODULE_0__.getHeader)(content)\r\n    const aboutBack = document.createElement(\"div\");\r\n    aboutBack.className = \"about-background\";\r\n    content.append(aboutBack)\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./about.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMain: () => (/* binding */ getMain)\n/* harmony export */ });\n/* harmony import */ var _imgs_background_spiral_c5d64e2d702a992fed648621f874d2b8_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/background-spiral.c5d64e2d702a992fed648621f874d2b8.png */ \"./imgs/background-spiral.c5d64e2d702a992fed648621f874d2b8.png\");\n/* harmony import */ var _imgs_header_total_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/header-total.png */ \"./imgs/header-total.png\");\n/* harmony import */ var _imgs_menu_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/menu.png */ \"./imgs/menu.png\");\n/* harmony import */ var _imgs_about_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/about.png */ \"./imgs/about.png\");\n/* harmony import */ var _imgs_Joker_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/Joker.png */ \"./imgs/Joker.png\");\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./script */ \"./script.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction getMain() {\r\n  const content = document.querySelector(\"#content\");\r\n\r\n  content.innerHTML = \"\";\r\n  const background = document.createElement(\"div\");\r\n  background.className = \"background\";\r\n  content.append(background);\r\n  (0,_script__WEBPACK_IMPORTED_MODULE_5__.getHeader)(content);\r\n  //header\r\n  //paralax\r\n  function paralxBox() {\r\n    const background = document.createElement(\"div\");\r\n    background.className = \"background\";\r\n    content.append(background);\r\n\r\n    const paralax = document.createElement(\"div\");\r\n    paralax.className = \"paralax-box\";\r\n    content.append(paralax);\r\n    // paralax Elements\r\n    const spiral = document.createElement(\"img\");\r\n    spiral.className = \"spiral\";\r\n    spiral.src = _imgs_background_spiral_c5d64e2d702a992fed648621f874d2b8_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    paralax.append(spiral);\r\n\r\n    const joker = document.createElement(\"img\");\r\n    joker.className = \"joker\";\r\n    joker.src = _imgs_Joker_png__WEBPACK_IMPORTED_MODULE_4__;\r\n    paralax.append(joker);\r\n  }\r\n  return paralxBox();\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./main.js?");

/***/ }),

/***/ "./menu.js":
/*!*****************!*\
  !*** ./menu.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMenu: () => (/* binding */ getMenu)\n/* harmony export */ });\n/* harmony import */ var _imgsMenu_snorlax_food_e41957ea4dfa06a60365129480382d06_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgsMenu/snorlax-food.e41957ea4dfa06a60365129480382d06.png */ \"./imgsMenu/snorlax-food.e41957ea4dfa06a60365129480382d06.png\");\n/* harmony import */ var _imgsMenu_eevee_food_9af9e2902101198fcb022fd8e4e6bdc3_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgsMenu/eevee-food.9af9e2902101198fcb022fd8e4e6bdc3.png */ \"./imgsMenu/eevee-food.9af9e2902101198fcb022fd8e4e6bdc3.png\");\n/* harmony import */ var _imgsMenu_jigglypuff_food_3c71fb31ea4331868b25d30b61a1cb75_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgsMenu/jigglypuff-food.3c71fb31ea4331868b25d30b61a1cb75.png */ \"./imgsMenu/jigglypuff-food.3c71fb31ea4331868b25d30b61a1cb75.png\");\n/* harmony import */ var _imgsMenu_pickachu_drink_ca1ac5acb51dfbc95eba7d9cb0bef704_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgsMenu/pickachu-drink.ca1ac5acb51dfbc95eba7d9cb0bef704.png */ \"./imgsMenu/pickachu-drink.ca1ac5acb51dfbc95eba7d9cb0bef704.png\");\n/* harmony import */ var _imgsMenu_eevee_drink_f8b591c2bb596b365db38035b955558b_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgsMenu/eevee-drink.f8b591c2bb596b365db38035b955558b.png */ \"./imgsMenu/eevee-drink.f8b591c2bb596b365db38035b955558b.png\");\n/* harmony import */ var _imgsMenu_gengar_drink_1e63d44d6cf39607a4527b2de6413051_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgsMenu/gengar-drink.1e63d44d6cf39607a4527b2de6413051.png */ \"./imgsMenu/gengar-drink.1e63d44d6cf39607a4527b2de6413051.png\");\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./script */ \"./script.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction getMenu() {\r\n    const content = document.querySelector(\"#content\");\r\n\r\n    content.innerHTML = ''\r\n    ;(0,_script__WEBPACK_IMPORTED_MODULE_6__.getHeader)(content)\r\n    const menuBack = document.createElement(\"div\");\r\n    menuBack.className = \"menu-back\";\r\n    content.append(menuBack);\r\n\r\n    const menuContainer = document.createElement(\"div\");\r\n    menuContainer.className = \"menu-container\";\r\n    content.append(menuContainer);\r\n\r\n    const imgOne = document.createElement(\"img\");\r\n    imgOne.className=\"dish-one\";\r\n    imgOne.src = _imgsMenu_snorlax_food_e41957ea4dfa06a60365129480382d06_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    menuContainer.append(imgOne);\r\n\r\n    const imgTwo = document.createElement(\"img\");\r\n    imgTwo.className=\"dish-two\";\r\n    imgTwo.src = _imgsMenu_eevee_food_9af9e2902101198fcb022fd8e4e6bdc3_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    menuContainer.append(imgTwo);\r\n\r\n    const imgThree = document.createElement(\"img\");\r\n    imgThree.className=\"dish-three\";\r\n    imgThree.src = _imgsMenu_jigglypuff_food_3c71fb31ea4331868b25d30b61a1cb75_png__WEBPACK_IMPORTED_MODULE_2__;\r\n    menuContainer.append(imgThree);\r\n\r\n    const imgFour = document.createElement(\"img\");\r\n    imgFour.className=\"dish-four\";\r\n    imgFour.src = _imgsMenu_pickachu_drink_ca1ac5acb51dfbc95eba7d9cb0bef704_png__WEBPACK_IMPORTED_MODULE_3__;\r\n    menuContainer.append(imgFour);\r\n\r\n    const imgFive = document.createElement(\"img\");\r\n    imgFive.className=\"dish-five\";\r\n    imgFive.src = _imgsMenu_eevee_drink_f8b591c2bb596b365db38035b955558b_png__WEBPACK_IMPORTED_MODULE_4__;\r\n    menuContainer.append(imgFive);\r\n\r\n    const imgSix = document.createElement(\"img\");\r\n    imgSix.className=\"dish-six\";\r\n    imgSix.src = _imgsMenu_gengar_drink_1e63d44d6cf39607a4527b2de6413051_png__WEBPACK_IMPORTED_MODULE_5__;\r\n    menuContainer.append(imgSix);\r\n\r\n    \r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./menu.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./main.css":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./main.css ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/paper_tear_only_bg.f44efaa060da5d0a8ee4c4561195a14a.png */ \"./imgs/paper_tear_only_bg.f44efaa060da5d0a8ee4c4561195a14a.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./imgsMenu/menu-page-background.1a9fae3c635aa820f8d110dcf05ba500.png */ \"./imgsMenu/menu-page-background.1a9fae3c635aa820f8d110dcf05ba500.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/about-bg.9ff76dd3ad24ef92da4b4370a48b5a02.png */ \"./imgs/about-bg.9ff76dd3ad24ef92da4b4370a48b5a02.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n#content {\r\n    width: 100%;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n}\r\n\r\n.background {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 19.5%;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    z-index: 100;\r\n}\r\n\r\n.main {\r\n    position: relative;\r\n    margin-top: 9.5%;\r\n    margin-left: 8.0%;\r\n    width: 80.0%;\r\n    height: auto;\r\n    cursor: pointer;\r\n}\r\n\r\n.menu {\r\n    position: relative;\r\n    min-width: 12.5%;\r\n    height: auto;\r\n    right: 53.30%;\r\n    bottom: 5.0%;\r\n    cursor: pointer\r\n}\r\n\r\n.about {\r\n    cursor: pointer\r\n}\r\n\r\n.img-container:has(.about){\r\n    position: relative;\r\n    min-width: 12.5%;\r\n    height: auto;\r\n    right: 8.00%;\r\n    bottom: 15.00%;\r\n}\r\n\r\n.joker {\r\n    position: fixed;\r\n    z-index: -1;\r\n    min-width: 80%;\r\n    top: 17%;\r\n    left: 8%;\r\n}\r\n\r\n.spiral {\r\n    position: fixed;\r\n    z-index: -2;\r\n}\r\n\r\n.menu-back {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n}\r\n\r\n.menu-container {\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.dish-one {\r\n    position: fixed;\r\n    top: 17vw;\r\n    left: 5.5vw;\r\n    width: 30vw;\r\n    cursor: pointer;\r\n}\r\n\r\n.dish-two {\r\n    position: fixed;\r\n    top: 26vw;\r\n    left: 29vw;\r\n    width: 27.8vw;\r\n    cursor: pointer;\r\n}\r\n\r\n.dish-three {\r\n    position: fixed;\r\n    top: 36.45vw;\r\n    left: 6.65vw;\r\n    width: 29.9vw;\r\n    cursor: pointer;\r\n}\r\n\r\n.dish-four {\r\n    position: fixed;\r\n    left: 65.4vw;\r\n    top: 15vw;\r\n    width: 30.8vw;\r\n    cursor: pointer;\r\n}\r\n\r\n.dish-five {\r\n    position: fixed;\r\n    top: 25.4vw;\r\n    left: 62vw;\r\n    width: 26.7vw;\r\n    cursor: pointer;\r\n}\r\n\r\n.dish-six {\r\n    position: fixed;\r\n    top: 33vw;\r\n    left: 65vw;\r\n    width: 27.6vw;\r\n    cursor: pointer;\r\n}\r\n\r\n.about-background {\r\n    display: flex;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 0;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\r\n    background-size: cover;\r\n    padding-top: 143.385%;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./main.css":
/*!******************!*\
  !*** ./main.css ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHeader: () => (/* binding */ getHeader)\n/* harmony export */ });\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./main.css\");\n/* harmony import */ var _imgs_header_total_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/header-total.png */ \"./imgs/header-total.png\");\n/* harmony import */ var _imgs_menu_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/menu.png */ \"./imgs/menu.png\");\n/* harmony import */ var _imgs_about_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/about.png */ \"./imgs/about.png\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./menu.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main */ \"./main.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about */ \"./about.js\");\n\r\n// import spiralImg from \"./imgs/background-spiral.c5d64e2d702a992fed648621f874d2b8.png\";\r\n\r\n\r\n\r\n// import jokerImg from \"./imgs/Joker.png\";\r\n\r\n\r\n\r\n\r\nconst content = document.querySelector(\"#content\");\r\n\r\nconst pageObj = {\r\n  main: _main__WEBPACK_IMPORTED_MODULE_5__.getMain,\r\n  menu: _menu__WEBPACK_IMPORTED_MODULE_4__.getMenu,\r\n  about: _about__WEBPACK_IMPORTED_MODULE_6__.getAbout,\r\n};\r\n\r\nconst linksImgs = [\r\n  { img: _imgs_header_total_png__WEBPACK_IMPORTED_MODULE_1__, page: \"main\" },\r\n  { img: _imgs_menu_png__WEBPACK_IMPORTED_MODULE_2__, page: \"menu\" },\r\n  { img: _imgs_about_png__WEBPACK_IMPORTED_MODULE_3__, page: \"about\" },\r\n];\r\n\r\nfunction renderPage(page) {\r\n  if (pageObj[page]) {\r\n    content.innerHTML = \"\";\r\n    content.append(getHeader);\r\n    const pageContent = pageObj[page]();\r\n    if (pageContent) {\r\n      content.append(pageContent);\r\n    }\r\n  }\r\n}\r\nrenderPage(\"main\");\r\n\r\nlinksImgs.forEach(({ img, page }) => {\r\n  const imgContainer = document.createElement(\"div\");\r\n  imgContainer.append(img);\r\n  imgContainer.addEventListener(\"click\", () => {\r\n    renderPage(page);\r\n  });\r\n});\r\n\r\n// //header\r\nfunction getHeader(content) {\r\n  const header = document.createElement(\"header\");\r\n  header.className = \"header\";\r\n  content.append(header);\r\n  //header Elements\r\n\r\n\r\n\r\n  linksImgs.forEach(({ img, page }) => {\r\n    const imgTag = document.createElement(\"img\");\r\n    imgTag.className = page;\r\n    imgTag.src = img;\r\n    const imgContainer = document.createElement(\"div\");\r\n    imgContainer.className = \"img-container\";\r\n    imgContainer.append(imgTag);\r\n    imgContainer.addEventListener(\"click\", () => {\r\n      renderPage(page);\r\n    });\r\n    header.append(imgContainer)\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./script.js?");

/***/ }),

/***/ "./imgsMenu/eevee-drink.f8b591c2bb596b365db38035b955558b.png":
/*!*******************************************************************!*\
  !*** ./imgsMenu/eevee-drink.f8b591c2bb596b365db38035b955558b.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f8b591c2bb596b365db3.png\";\n\n//# sourceURL=webpack://restaurant/./imgsMenu/eevee-drink.f8b591c2bb596b365db38035b955558b.png?");

/***/ }),

/***/ "./imgsMenu/eevee-food.9af9e2902101198fcb022fd8e4e6bdc3.png":
/*!******************************************************************!*\
  !*** ./imgsMenu/eevee-food.9af9e2902101198fcb022fd8e4e6bdc3.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9af9e2902101198fcb02.png\";\n\n//# sourceURL=webpack://restaurant/./imgsMenu/eevee-food.9af9e2902101198fcb022fd8e4e6bdc3.png?");

/***/ }),

/***/ "./imgsMenu/gengar-drink.1e63d44d6cf39607a4527b2de6413051.png":
/*!********************************************************************!*\
  !*** ./imgsMenu/gengar-drink.1e63d44d6cf39607a4527b2de6413051.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e63d44d6cf39607a452.png\";\n\n//# sourceURL=webpack://restaurant/./imgsMenu/gengar-drink.1e63d44d6cf39607a4527b2de6413051.png?");

/***/ }),

/***/ "./imgsMenu/jigglypuff-food.3c71fb31ea4331868b25d30b61a1cb75.png":
/*!***********************************************************************!*\
  !*** ./imgsMenu/jigglypuff-food.3c71fb31ea4331868b25d30b61a1cb75.png ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3c71fb31ea4331868b25.png\";\n\n//# sourceURL=webpack://restaurant/./imgsMenu/jigglypuff-food.3c71fb31ea4331868b25d30b61a1cb75.png?");

/***/ }),

/***/ "./imgsMenu/menu-page-background.1a9fae3c635aa820f8d110dcf05ba500.png":
/*!****************************************************************************!*\
  !*** ./imgsMenu/menu-page-background.1a9fae3c635aa820f8d110dcf05ba500.png ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1a9fae3c635aa820f8d1.png\";\n\n//# sourceURL=webpack://restaurant/./imgsMenu/menu-page-background.1a9fae3c635aa820f8d110dcf05ba500.png?");

/***/ }),

/***/ "./imgsMenu/pickachu-drink.ca1ac5acb51dfbc95eba7d9cb0bef704.png":
/*!**********************************************************************!*\
  !*** ./imgsMenu/pickachu-drink.ca1ac5acb51dfbc95eba7d9cb0bef704.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ca1ac5acb51dfbc95eba.png\";\n\n//# sourceURL=webpack://restaurant/./imgsMenu/pickachu-drink.ca1ac5acb51dfbc95eba7d9cb0bef704.png?");

/***/ }),

/***/ "./imgsMenu/snorlax-food.e41957ea4dfa06a60365129480382d06.png":
/*!********************************************************************!*\
  !*** ./imgsMenu/snorlax-food.e41957ea4dfa06a60365129480382d06.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e41957ea4dfa06a60365.png\";\n\n//# sourceURL=webpack://restaurant/./imgsMenu/snorlax-food.e41957ea4dfa06a60365129480382d06.png?");

/***/ }),

/***/ "./imgs/Joker.png":
/*!************************!*\
  !*** ./imgs/Joker.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4907cb3d3a5aee11cb28.png\";\n\n//# sourceURL=webpack://restaurant/./imgs/Joker.png?");

/***/ }),

/***/ "./imgs/about-bg.9ff76dd3ad24ef92da4b4370a48b5a02.png":
/*!************************************************************!*\
  !*** ./imgs/about-bg.9ff76dd3ad24ef92da4b4370a48b5a02.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9ff76dd3ad24ef92da4b.png\";\n\n//# sourceURL=webpack://restaurant/./imgs/about-bg.9ff76dd3ad24ef92da4b4370a48b5a02.png?");

/***/ }),

/***/ "./imgs/about.png":
/*!************************!*\
  !*** ./imgs/about.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8627eecbcde7c3a15fef.png\";\n\n//# sourceURL=webpack://restaurant/./imgs/about.png?");

/***/ }),

/***/ "./imgs/background-spiral.c5d64e2d702a992fed648621f874d2b8.png":
/*!*********************************************************************!*\
  !*** ./imgs/background-spiral.c5d64e2d702a992fed648621f874d2b8.png ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c5d64e2d702a992fed64.png\";\n\n//# sourceURL=webpack://restaurant/./imgs/background-spiral.c5d64e2d702a992fed648621f874d2b8.png?");

/***/ }),

/***/ "./imgs/header-total.png":
/*!*******************************!*\
  !*** ./imgs/header-total.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5b4831794634fe4bc2c1.png\";\n\n//# sourceURL=webpack://restaurant/./imgs/header-total.png?");

/***/ }),

/***/ "./imgs/menu.png":
/*!***********************!*\
  !*** ./imgs/menu.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"613efc3d28898a9476ae.png\";\n\n//# sourceURL=webpack://restaurant/./imgs/menu.png?");

/***/ }),

/***/ "./imgs/paper_tear_only_bg.f44efaa060da5d0a8ee4c4561195a14a.png":
/*!**********************************************************************!*\
  !*** ./imgs/paper_tear_only_bg.f44efaa060da5d0a8ee4c4561195a14a.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f44efaa060da5d0a8ee4.png\";\n\n//# sourceURL=webpack://restaurant/./imgs/paper_tear_only_bg.f44efaa060da5d0a8ee4c4561195a14a.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;