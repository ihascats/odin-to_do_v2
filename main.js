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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    padding: 0;\\n    margin: 0;\\n    font-family: 'Ubuntu', 'Roboto', -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Helvetica, Arial, sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\";\\n}\\n\\n.container {\\n    display: grid;\\n    grid-template-columns: 1fr 10fr;\\n    height: 100vh;\\n}\\n\\n.left {\\n    background-color: #ab453d;\\n    width: 384px;\\n}\\n\\n.right {\\n    background-color: #363636;\\n    display: grid;\\n    grid-template-rows: 1fr auto;\\n}\\n\\n.keyInfo {\\n    height: 104px;\\n    background-color: #202020;\\n    border-top: 2px solid #F0D9FF;\\n    display: grid;\\n    grid-template-columns: auto auto auto;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.keyInfo > button {\\n    background-color: #822328;\\n    border: none;\\n    border-radius: 2px;\\n    font-weight: 900;\\n    letter-spacing: 2px;\\n    height: 56px;\\n    width: 256px;\\n    border-right: 1px solid #F0D9FF;\\n}\\n\\n.keyInfo > button:hover {\\n    background-color: #5b0010;\\n    font-size: 12px;\\n}\\n\\n.keyInfo > button:active {\\n    background-color: #9c2a30;\\n}\\n\\n.keyInfo > select:hover {\\n    background-color: #5b0010;\\n    font-size: 11px;\\n}\\n\\n.keyInfo > select:active {\\n    background-color: #9c2a30;\\n}\\n\\n.priority {\\n    height: 56px;\\n    width: 156px;\\n\\tfont-size: 12px;\\n    font-weight: 900;\\n    letter-spacing: 2px;\\n\\tbackground-color: #822328;\\n\\tpadding: 12px;\\n    border: none;\\n    border-radius: 2px;\\n    text-align: center;\\n}\\n\\n.task {\\n    display: grid;\\n    grid-template-rows: auto;\\n    gap: 48px;\\n    padding: 24px;\\n}\\n\\n.title-date {\\n    display: grid;\\n    grid-template-columns: 128px 1fr;\\n    gap: 16px;\\n    align-items: center;\\n    height: fit-content;\\n}\\n\\n.task-info {\\n    display: grid;\\n    grid-auto-rows: min-content;\\n    gap: 48px;\\n    align-content: space-between;\\n}\\n\\n.task-info > div {\\n    display: grid;\\n    grid-template-rows: 16px 1fr;\\n    gap: 6px;\\n    align-items: start;\\n}\\n\\nlabel {\\n    letter-spacing: 1px;\\n    font-weight: 900;\\n    font-size: 12px;\\n    color: #b2948e;\\n}\\n\\ninput {\\n    width: calc(100% - 8px);\\n}\\n\\ninput, textarea {\\n    border: none;\\n    border-radius: 2px;\\n    background-color: #b2948e;\\n    padding: 4px;\\n    color: rgb(32, 32, 32);\\n    letter-spacing: 0px;\\n    font-size: 16px;\\n    resize: none;\\n}\\n\\n.checkList {\\n    display: grid;\\n    gap: 8px;\\n\\n}\\n\\n.task-info > div:nth-child(2){\\n    min-height: 192px;\\n    max-height: 192px;\\n    overflow: auto;\\n}\\n\\nli {\\n    display: grid;\\n    grid-template-columns:min-content 1fr;\\n    list-style: none;\\n    gap: 4px;\\n    height: fit-content;\\n}\\n\\nli > button {\\n    height: 26px;\\n    width: 26px;\\n}\\n\\nul > div > input {\\n    text-align: center;\\n}\\n\\ninput:disabled, textarea:disabled {\\n    background-color: #69514c;\\n}\\n\\nli > button {\\n    border: none;\\n    border-radius: 2px;\\n    background-color: #a36762;\\n    font-weight: 900;\\n}\\n\\n.projects {\\n    display: grid;\\n}\\n\\n.projects > button {\\n    width: 100%;\\n    letter-spacing: 1px;\\n    font-weight: bold;\\n    font-size: 16px;\\n    border: none;\\n    background-color: #561418;\\n    height: 32px;\\n    display: grid;\\n    grid-template-columns: 1fr auto auto;\\n    align-items: center;\\n    color: #dbb1b1;\\n}\\n\\n.projects > button:hover {\\n    background-color: rgb(61, 0, 11);\\n    font-size: 14px;\\n}\\n.projects > button:active {\\n    background-color: #9c2a30;\\n    font-size: 13px;\\n}\\n\\n.nav {\\n    height: 32px;\\n}\\n\\n.nav > button {\\n    width: 100%;\\n    letter-spacing: 1px;\\n    font-weight: bold;\\n    font-size: 14px;\\n    border: none;\\n    background-color: #320000;\\n    height: 32px;\\n    color: #b2948e;\\n}\\n\\n.nav > .return:hover {\\n    background-color: #200000;\\n    font-size: 12px;\\n}\\n.nav > .return:active {\\n    background-color: #580000;\\n    font-size: 11px;\\n}\\n\\n.title {\\n    width: 240px;\\n}\\n\\n.dueDate {\\n    width: fit-content;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-to_do_v2/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-to_do_v2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-to_do_v2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-to_do_v2/./src/css/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-to_do_v2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-to_do_v2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-to_do_v2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-to_do_v2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-to_do_v2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-to_do_v2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/change.task-expired.js":
/*!***************************************!*\
  !*** ./src/js/change.task-expired.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction checkExpired(info){\n    window.onload = () => {\n        let currentDate = new Date();\n        currentDate.setHours(0,0,0,0);\n        info.projects.forEach(project => {\n            project.tasks.forEach(task => {\n                if (task.dueDate)\n                if (task.dueDate.getTime() < currentDate.getTime()){\n                    task.setExpired();\n                }\n            })\n        })\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkExpired);\n\n//# sourceURL=webpack://odin-to_do_v2/./src/js/change.task-expired.js?");

/***/ }),

/***/ "./src/js/change.task-information.js":
/*!*******************************************!*\
  !*** ./src/js/change.task-information.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction changeTaskInformation(task){\n    const inputElements = document.querySelectorAll('input');\n\n    let classes = []\n    inputElements.forEach(element => {\n        if (element.classList[0]){\n            classes.push(element.classList[0])\n        }\n    })\n\n    const textAreaElements = document.querySelectorAll('textarea');\n    textAreaElements.forEach(element => {\n        if (element.classList[0]){\n            classes.push(element.classList[0])\n        }\n    })\n\n    classes.forEach(item => {\n        let capitalized = item[0].toUpperCase() + item.slice(1).toLowerCase();\n        if (task['change'+`${capitalized}`]){\n            if (item == \"dueDate\"){\n                let itemValue = document.querySelector(`.${item}`).value;\n                let date = new Date(itemValue);\n                task['change'+`${capitalized}`](date)\n            } else {\n                let itemValue = document.querySelector(`.${item}`).value\n                task['change'+`${capitalized}`](itemValue)\n            }\n        }\n    })\n\n    const checkListItemElements = document.querySelectorAll('li');\n    \n    checkListItemElements.forEach(element => {\n        let id = element.classList[0];\n        let text = element.lastElementChild.value;\n        let status = element.firstElementChild.classList[0];\n        task.changeChecklist(id, text, status);\n    })\n\n    const priorityElement = document.querySelector('.priority');\n    let priority = priorityElement.value;\n\n    task.changePriority(priority)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeTaskInformation);\n\n//# sourceURL=webpack://odin-to_do_v2/./src/js/change.task-information.js?");

/***/ }),

/***/ "./src/js/create.element.js":
/*!**********************************!*\
  !*** ./src/js/create.element.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction newElement(type = 'div', className){\n    let element = document.createElement(type);\n    if (className){\n        element.classList.add(className);\n    }\n    return element\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newElement);\n\n//# sourceURL=webpack://odin-to_do_v2/./src/js/create.element.js?");

/***/ }),

/***/ "./src/js/create.newListItem.js":
/*!**************************************!*\
  !*** ./src/js/create.newListItem.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listItemGenerator\": () => (/* binding */ listItemGenerator),\n/* harmony export */   \"newListItem\": () => (/* binding */ newListItem)\n/* harmony export */ });\n/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.element */ \"./src/js/create.element.js\");\n\n\nfunction newListItem(id, status, text){\n    const li = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li');\n    const button = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button');\n    li.appendChild(button);\n    const input = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input');\n    li.appendChild(input);\n    input.setAttribute('type', 'text');\n    input.setAttribute('maxlength', '64');\n    li.classList.add(id);\n    button.classList.add(`${status}`);\n    input.value = text;\n    return li;\n}\n\nfunction listItemGenerator(){\n    const div = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const input = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', 'newListItem');\n    div.appendChild(input);\n    input.setAttribute('type', 'text');\n    input.value = '+';\n    return div;\n}\n\n\n\n//# sourceURL=webpack://odin-to_do_v2/./src/js/create.newListItem.js?");

/***/ }),

/***/ "./src/js/create.project.js":
/*!**********************************!*\
  !*** ./src/js/create.project.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.task */ \"./src/js/create.task.js\");\n\n\nclass Project {\n    constructor (title){\n        this.title = title;\n        this.tasks = [];\n    }\n\n    newTask(title = \"\", description = \"\", dueDate = '', priority = 0, checkList = {}, note = \"\"){\n        let id = this.tasks.length;\n        let task = new _create_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](id, title, description, dueDate, priority , checkList, note);\n        this.tasks.push(task)\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://odin-to_do_v2/./src/js/create.project.js?");

/***/ }),

/***/ "./src/js/create.task.js":
/*!*******************************!*\
  !*** ./src/js/create.task.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task{\n    constructor (id = 0, title = \"\", description = \"\", dueDate = '', priority = 0, checkList = {}, note = \"\"){\n        this.id = id;\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.checkList = checkList;\n        this.note = note;\n        this.completed = false;\n        this.expired = false;\n    }\n\n    changeId(newId){\n        this.id = newId;\n    }\n\n    changeTitle(newTitle){\n        this.title = newTitle;\n    }\n\n    changeDescription(newDescription){\n        this.description = newDescription;\n    }\n\n    changeDuedate(newDueDate){\n        this.dueDate = newDueDate;\n    }\n\n    changePriority(newPriority){\n        this.priority = newPriority;\n    }\n\n    changeChecklist(id, task, status){\n        this.checkList[id] = [task, status];\n    }\n\n    changeNote(newNote){\n        this.note = newNote;\n    }\n\n    newListItem(task, status){\n        let id = Object.keys(this.checkList).length;\n        this.checkList[id] = [task, status];\n    }\n\n    setCompleted(){\n        this.completed = true;\n    }\n\n    setExpired(){\n        this.expired = true;\n    }\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://odin-to_do_v2/./src/js/create.task.js?");

/***/ }),

/***/ "./src/js/display-bundle.task-information.js":
/*!***************************************************!*\
  !*** ./src/js/display-bundle.task-information.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _change_task_information__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change.task-information */ \"./src/js/change.task-information.js\");\n/* harmony import */ var _display_new_task_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.new-task-button */ \"./src/js/display.new-task-button.js\");\n/* harmony import */ var _display_project_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.project-tasks */ \"./src/js/display.project-tasks.js\");\n/* harmony import */ var _display_task_information__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display.task-information */ \"./src/js/display.task-information.js\");\n/* harmony import */ var _manage_input_fields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage.input-fields */ \"./src/js/manage.input-fields.js\");\n\n\n\n\n\n\nfunction displayBundleTaskInformation(info){\n    const projectsSelector = document.querySelector('.projects');\n    // onclick event displays tasks from within a project\n    projectsSelector.onclick = (event) => {\n\n        // if button used to create new project is clicked, do nothing\n        let project = event.target.closest('button');\n        if (!project || project == null || project.classList.contains(\"newProjectButton\")) return\n\n        let returnButton = document.querySelector('.nav > button');\n        returnButton.textContent = \"<< RETURN TO PROJECTS\";\n        returnButton.classList.toggle('return');\n        \n        let selectedProject = (0,_display_project_tasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(project, info, projectsSelector);\n\n        (0,_display_new_task_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(info, projectsSelector, selectedProject);\n\n        \n\n        // change onclick event to display task information\n        projectsSelector.onclick = (event) => {\n            let button = event.target.closest('button');\n            if (!button || button == null) return\n            let selectedTask;\n            selectedProject.tasks.forEach(task =>{\n                if (button.classList.contains(task.id)){\n                    (0,_display_task_information__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(task);\n                    selectedTask = task;\n                }\n            })\n            document.querySelector('.task').oninput = () =>{\n                bundleChange(info, projectsSelector, selectedProject, project, selectedTask)\n            }\n            document.querySelector('.task').onclick = () =>{\n                bundleChange(info, projectsSelector, selectedProject, project, selectedTask)\n            }\n\n            const keyInfoElement = document.querySelector('.keyInfo');\n            const completeTaskElement = keyInfoElement.firstElementChild;\n            const deleteTaskElement = keyInfoElement.childNodes[3];\n            keyInfoElement.oninput = () => {\n                (0,_display_project_tasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(project, info, projectsSelector);\n                bundleChange(info, projectsSelector, selectedProject, project, selectedTask)\n            }\n            completeTaskElement.onclick = () => {\n                selectedTask.setCompleted();\n                bundleChange(info, projectsSelector, selectedProject, project, selectedTask)\n                ;(0,_manage_input_fields__WEBPACK_IMPORTED_MODULE_4__.clearFields)();\n                (0,_manage_input_fields__WEBPACK_IMPORTED_MODULE_4__.disableFields)();\n            }\n            deleteTaskElement.onclick = () => {\n                let index = selectedProject.tasks.indexOf(selectedTask);\n                if ( index != -1){\n                    selectedProject.tasks.splice(index, 1);\n                }\n                bundleChange(info, projectsSelector, selectedProject, project, selectedTask)\n                ;(0,_manage_input_fields__WEBPACK_IMPORTED_MODULE_4__.clearFields)();\n                (0,_manage_input_fields__WEBPACK_IMPORTED_MODULE_4__.disableFields)();\n            }\n            \n            \n\n        }\n    };\n}\n\nfunction bundleChange(info, projectsSelector, selectedProject, project, selectedTask){\n    (0,_change_task_information__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(selectedTask);\n    selectedProject = (0,_display_project_tasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(project, info, projectsSelector);\n    (0,_display_new_task_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(info, projectsSelector, selectedProject);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayBundleTaskInformation);\n\n//# sourceURL=webpack://odin-to_do_v2/./src/js/display-bundle.task-information.js?");

/***/ }),

/***/ "./src/js/display.list-item-status.js":
/*!********************************************!*\
  !*** ./src/js/display.list-item-status.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeStatus\": () => (/* binding */ changeStatus),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction displayStatus(item){\n    const button = item.firstElementChild;\n    const input = item.lastElementChild;\n    if (button.classList.contains('true')){\n        button.textContent = 'X';\n        input.setAttribute('style', 'text-decoration: line-through');\n        input.disabled = true;\n    } else {\n        button.textContent = '';\n        input.setAttribute('style', '');\n        input.disabled = false;\n    }\n}\n\nfunction changeStatus(event){\n    let button = event.target.closest('button');\n    if (!button || button == null) return\n    let currentClass = button.classList[0] === \"true\";\n    button.classList.replace(currentClass, !currentClass);\n    displayStatus(button.parentElement);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayStatus);\n\n\n//# sourceURL=webpack://odin-to_do_v2/./src/js/display.list-item-status.js?");

/***/ }),

/***/ "./src/js/display.navigation-button.js":
/*!*********************************************!*\
  !*** ./src/js/display.navigation-button.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_bundle_task_information__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-bundle.task-information */ \"./src/js/display-bundle.task-information.js\");\n/* harmony import */ var _display_new_project_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.new-project-button */ \"./src/js/display.new-project-button.js\");\n/* harmony import */ var _display_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.projects */ \"./src/js/display.projects.js\");\n/* harmony import */ var _manage_input_fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage.input-fields */ \"./src/js/manage.input-fields.js\");\n\n\n\n\n\nfunction navigationButton(projectsSelector, info){\n    document.querySelector('.nav').onclick = (event) => {\n        let button = event.target.closest('.return');\n        if (!button || button == null) return\n        while (projectsSelector.firstElementChild){\n            projectsSelector.firstElementChild.remove();\n        }\n        info.projects.forEach(project => {\n            (0,_display_projects__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(project);\n        });\n        (0,_display_new_project_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(info, projectsSelector)\n        button.textContent = \"PROJECTS\";\n        button.classList.toggle('return');\n        (0,_display_bundle_task_information__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(info);\n        (0,_manage_input_fields__WEBPACK_IMPORTED_MODULE_3__.clearFields)();\n        (0,_manage_input_fields__WEBPACK_IMPORTED_MODULE_3__.disableFields)();\n    \n    };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigationButton);\n\n//# sourceURL=webpack://odin-to_do_v2/./src/js/display.navigation-button.js?");

/***/ }),

/***/ "./src/js/display.new-project-button.js":
/*!**********************************************!*\
  !*** ./src/js/display.new-project-button.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.element */ \"./src/js/create.element.js\");\n/* harmony import */ var _display_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.projects */ \"./src/js/display.projects.js\");\n\n\n\nfunction newProjectButton(info, projectsSelector){\n    let newButton = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', 'newProjectButton');\n    newButton.textContent = '+';\n    projectsSelector.appendChild(newButton);\n    newButton.onclick = (event) => {\n        let button = event.target;\n        button.textContent = '';\n        button.appendChild(document.createElement('input'));\n        newButton.onclick = null;\n        newButton.onkeydown = (event) => {\n            if (event.key == \"Enter\"){\n                info.newProject(button.firstElementChild.value);\n                while (projectsSelector.firstElementChild){\n                    projectsSelector.firstElementChild.remove();\n                }\n                info.projects.forEach(project => {\n                    (0,_display_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(project);\n                })\n                selfCall(info, projectsSelector);\n            }\n            if (event.key == \"Escape\"){\n                while (projectsSelector.firstElementChild){\n                    projectsSelector.firstElementChild.remove();\n                }\n                info.projects.forEach(project => {\n                    (0,_display_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(project);\n                })\n                selfCall(info, projectsSelector);\n            }\n        }\n    }\n}\n\nfunction selfCall(info, projectsSelector){\n    newProjectButton(info, projectsSelector);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProjectButton);\n\n//# sourceURL=webpack://odin-to_do_v2/./src/js/display.new-project-button.js?");

/***/ }),

/***/ "./src/js/display.new-task-button.js":
/*!*******************************************!*\
  !*** ./src/js/display.new-task-button.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.element */ \"./src/js/create.element.js\");\n/* harmony import */ var _display_project_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.project-tasks */ \"./src/js/display.project-tasks.js\");\n\n\n\nfunction addNewTaskButton(info, projectsSelector, selectedProject){\n    let newTaskButton = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', 'newTaskButton');\n    projectsSelector.appendChild(newTaskButton);\n    newTaskButton.textContent = '+';\n    newTaskButton.onclick = (event) => {\n        let button = event.target;\n        button.textContent = '';\n        button.appendChild(document.createElement('input'));\n        newTaskButton.onclick = null;\n        newTaskButton.onkeydown = (event) => {\n            if (event.key == \"Enter\"){\n                selectedProject.newTask(button.firstElementChild.value);\n                button.textContent = selectedProject.title;\n                (0,_display_project_tasks__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(button, info, projectsSelector);\n                selfCall(info, projectsSelector, selectedProject);\n            }\n            if (event.key == \"Escape\"){\n                button.textContent = selectedProject.title;\n                (0,_display_project_tasks__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(button, info, projectsSelector);\n                selfCall(info, projectsSelector, selectedProject);\n            }\n        }\n    }\n}\n\nfunction selfCall(info, projectsSelector, selectedProject){\n    addNewTaskButton(info, projectsSelector, selectedProject);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewTaskButton);\n\n//# sourceURL=webpack://odin-to_do_v2/./src/js/display.new-task-button.js?");

/***/ }),

/***/ "./src/js/display.project-tasks.js":
/*!*****************************************!*\
  !*** ./src/js/display.project-tasks.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.element */ \"./src/js/create.element.js\");\n\n\nfunction displayProjectTasks(button, info, displayTo){\n    if (!button || button == null) return\n    while (displayTo.firstElementChild){\n        displayTo.firstElementChild.remove()\n    }\n    let selectedProject;\n    info.projects.forEach(project => {\n        if (project.title == button.textContent){\n            selectedProject = project;\n            project.tasks.forEach(task => {\n                if (!task.completed && !task.expired){\n                    let button = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', `${task.id}`);\n                    document.querySelector('.projects').appendChild(button);\n                    button.textContent = task.title;\n                    if (task.priority == 1) {\n                        button.setAttribute('style', 'color: #83d7d3')\n                    }\n                    if (task.priority == 2) {\n                        button.setAttribute('style', 'color: #cecf90')\n                    }\n                    if (task.priority == 3) {\n                        button.setAttribute('style', 'color: #ff6d6d')\n                    }\n                }\n\n            })\n        }\n    })\n    return selectedProject;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayProjectTasks);\n\n//# sourceURL=webpack://odin-to_do_v2/./src/js/display.project-tasks.js?");

/***/ }),

/***/ "./src/js/display.projects.js":
/*!************************************!*\
  !*** ./src/js/display.projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.element */ \"./src/js/create.element.js\");\n\n\nfunction displayProject(project){\n    let button = (0,_create_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button');\n    document.querySelector('.projects').appendChild(button);\n    button.textContent = project.title;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayProject);\n\n//# sourceURL=webpack://odin-to_do_v2/./src/js/display.projects.js?");

/***/ }),

/***/ "./src/js/display.task-information.js":
/*!********************************************!*\
  !*** ./src/js/display.task-information.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _change_task_information__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change.task-information */ \"./src/js/change.task-information.js\");\n/* harmony import */ var _create_newListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.newListItem */ \"./src/js/create.newListItem.js\");\n/* harmony import */ var _display_list_item_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.list-item-status */ \"./src/js/display.list-item-status.js\");\n/* harmony import */ var _manage_input_fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage.input-fields */ \"./src/js/manage.input-fields.js\");\n\n\n\n\n\nfunction displayTaskInformation(task){\n    (0,_manage_input_fields__WEBPACK_IMPORTED_MODULE_3__.enableFields)();\n    Object.keys(task).forEach(key => {\n        const query = document.querySelector(`.${key}`);\n        if (query){\n            if (key == 'checkList'){\n                while(query.firstElementChild){\n                    query.firstElementChild.remove();\n                }\n                displayCheckList(task[key], query);\n                let itemGen = (0,_create_newListItem__WEBPACK_IMPORTED_MODULE_1__.listItemGenerator)();\n\n                itemGen.onclick = (event) => {\n                    let val = event.target.value;\n                    let input = event.target;\n                    if (val == '+'){\n                        event.target.value = '';\n                        document.onclick = (event) => {\n                            if (event.target != input)\n                            input.value = '+';\n                        }\n                    }\n                }\n                \n                itemGen.onkeydown = (event) => {\n                    let val = event.target.value;\n                    if (val == '+'){\n                        val = '';\n                    }\n                    if (event.key == \"Enter\" && val != ''){\n                        task.newListItem(val, false);\n                        selfCall(task)\n                    }\n                    if (event.key == \"Escape\"){\n                        event.target.value = '+';\n                    }\n                }\n                query.appendChild(itemGen);\n            } else if (key == \"dueDate\"){\n                if (task[key]){\n                    let year = task[key].getFullYear();\n                    let month = ('0' + task[key].getMonth()).slice(-2);\n                    let day = ('0' + task[key].getDate()).slice(-2);\n                    query.value = `${year}-${month}-${day}`\n                } else {\n                    query.value = '';    \n                }\n            } else {\n                if (key == 'priority'){\n                    query.onchange = () => {\n                        (0,_change_task_information__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task);\n                    }\n                }\n                query.value = task[key];\n            }\n        }\n    })\n}\n\nfunction selfCall(task){\n    displayTaskInformation(task);\n}\n\nfunction displayCheckList(checkList, element){\n    Object.keys(checkList).forEach(key =>{\n        let id = key;\n        let text = checkList[key][0];\n        let status = checkList[key][1];\n        if (text!=''){\n            const listItem = (0,_create_newListItem__WEBPACK_IMPORTED_MODULE_1__.newListItem)(id, status, text);\n            listItem.onkeydown = (event)=>{\n                let li = event.target.closest('li');\n                checkList[li.classList[0]][0] = '';\n                if (!li || li == null) return\n                if (event.key == 'Delete'){\n                    li.remove();\n                }\n            }\n            element.appendChild(listItem)\n            if (status){\n                (0,_display_list_item_status__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(listItem)\n            }\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTaskInformation);\n\n//# sourceURL=webpack://odin-to_do_v2/./src/js/display.task-information.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _change_task_expired__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change.task-expired */ \"./src/js/change.task-expired.js\");\n/* harmony import */ var _display_bundle_task_information__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-bundle.task-information */ \"./src/js/display-bundle.task-information.js\");\n/* harmony import */ var _display_list_item_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display.list-item-status */ \"./src/js/display.list-item-status.js\");\n/* harmony import */ var _display_navigation_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display.navigation-button */ \"./src/js/display.navigation-button.js\");\n/* harmony import */ var _display_new_project_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display.new-project-button */ \"./src/js/display.new-project-button.js\");\n/* harmony import */ var _display_projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./display.projects */ \"./src/js/display.projects.js\");\n/* harmony import */ var _information_holder_project_task_unions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./information-holder.project-task-unions */ \"./src/js/information-holder.project-task-unions.js\");\n/* harmony import */ var _manage_input_fields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manage.input-fields */ \"./src/js/manage.input-fields.js\");\n\n\n\n\n\n\n\n\n\n\nconst projectsSelector = document.querySelector('.projects')\n\nlet info = new _information_holder_project_task_unions__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\ninfo.newProject('Personal');\ninfo.newProject('Work');\n\nlet checkList = document.querySelector('.checkList');\ncheckList.onclick = (event) => (0,_display_list_item_status__WEBPACK_IMPORTED_MODULE_3__.changeStatus)(event);\n\ninfo.projects.forEach(project => {\n    (0,_display_projects__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(project);\n})\n;(0,_display_new_project_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(info, projectsSelector);\n\n(0,_display_bundle_task_information__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(info);\n\n(0,_display_navigation_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(projectsSelector, info);\n\n(0,_change_task_expired__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(info);\n\n(0,_manage_input_fields__WEBPACK_IMPORTED_MODULE_8__.clearFields)();\n(0,_manage_input_fields__WEBPACK_IMPORTED_MODULE_8__.disableFields)();\n\n//# sourceURL=webpack://odin-to_do_v2/./src/js/index.js?");

/***/ }),

/***/ "./src/js/information-holder.project-task-unions.js":
/*!**********************************************************!*\
  !*** ./src/js/information-holder.project-task-unions.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.project */ \"./src/js/create.project.js\");\n\n\nclass ProjectTaskInformation{\n    constructor(){\n        this.projects = []\n    }\n\n    newProject(projectName){\n        let project = new _create_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectName);\n        this.projects.push(project);\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectTaskInformation);\n\n//# sourceURL=webpack://odin-to_do_v2/./src/js/information-holder.project-task-unions.js?");

/***/ }),

/***/ "./src/js/manage.input-fields.js":
/*!***************************************!*\
  !*** ./src/js/manage.input-fields.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearFields\": () => (/* binding */ clearFields),\n/* harmony export */   \"disableFields\": () => (/* binding */ disableFields),\n/* harmony export */   \"enableFields\": () => (/* binding */ enableFields)\n/* harmony export */ });\nfunction clearFields(){\n    let input = document.querySelectorAll('input')\n    input.forEach(item => {\n        item.value = '';\n    })\n    let textArea = document.querySelectorAll('textarea')\n\n    textArea.forEach(item => {\n        item.value = '';\n    })\n    let priority = document.querySelector('.priority')\n    priority.value = 0;\n}\n\nfunction disableFields(){\n    let checkList = document.querySelector('.checkList')\n    \n    while(checkList.firstElementChild){\n        checkList.firstElementChild.remove();\n    }\n\n    let input = document.querySelectorAll('input')\n    input.forEach(item => {\n        item.disabled = true;\n    })\n    let textArea = document.querySelectorAll('textarea')\n\n    textArea.forEach(item => {\n        item.disabled = true;\n    })\n    let priority = document.querySelector('.priority')\n    priority.disabled = true;\n\n}\n\nfunction enableFields(){\n    let input = document.querySelectorAll('input')\n    input.forEach(item => {\n        item.disabled = false;\n    })\n    let textArea = document.querySelectorAll('textarea')\n\n    textArea.forEach(item => {\n        item.disabled = false;\n    })\n    let priority = document.querySelector('.priority')\n    priority.disabled = false;\n}\n\n\n\n//# sourceURL=webpack://odin-to_do_v2/./src/js/manage.input-fields.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;