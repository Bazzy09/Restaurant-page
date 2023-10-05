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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadContactPage() {\r\n  const content = document.getElementById('content');\r\n  const contactDiv = document.createElement('div');\r\n    contactDiv.textContent = 'Contact us for reservations!';\r\n    content.appendChild(contactDiv);\r\n  }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHomePage() {\r\n  const content = document.getElementById('content');\r\n  const homeDiv = document.createElement('div');\r\n  homeDiv.classList.add('home-page');\r\n\r\n  const backgroundImage = document.createElement('div');\r\n  backgroundImage.classList.add('background-image');\r\n\r\n  homeDiv.appendChild(backgroundImage);\r\n\r\n  const welcomeMessage = document.createElement('div');\r\n  welcomeMessage.textContent = 'Welcome to The 5th chops – A Taste of Excellence';\r\n  welcomeMessage.classList.add('welcome-message'); \r\n\r\n  homeDiv.appendChild(welcomeMessage);\r\n\r\n  const footer = document.createElement('footer');\r\n  footer.classList.add('footer');\r\n\r\n  const footerText = document.createElement('p');\r\n  footerText.textContent = '© 2023 The 5th Chops. All rights reserved.';\r\n  footer.appendChild(footerText);\r\n\r\n  content.appendChild(homeDiv);\r\n  content.appendChild(footer);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomePage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _reservation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservation */ \"./src/reservation.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\nfunction clearContent() {\r\n  const content = document.getElementById('content');\r\n  while (content.firstChild) {\r\n    content.removeChild(content.firstChild);\r\n  }\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const content = document.getElementById('content');\r\n\r\n  const navLinks = document.createElement('ul');\r\n  navLinks.classList.add(\"nav-link\");\r\n  content.appendChild(navLinks);\r\n\r\n  const homeLink = document.createElement('li');\r\n  homeLink.classList.add(\"nav-link-child\");\r\n  const homeAnchor = document.createElement('a');\r\n  homeAnchor.href = \"#\";\r\n  homeAnchor.textContent = \"Home\";\r\n  homeLink.appendChild(homeAnchor);\r\n  navLinks.appendChild(homeLink);\r\n\r\n  const menuLink = document.createElement('li');\r\n  menuLink.classList.add(\"nav-link-child\");\r\n  const menuAnchor = document.createElement('a');\r\n  menuAnchor.href = \"#menu\";\r\n  menuAnchor.textContent = \"Menu\";\r\n  menuLink.appendChild(menuAnchor);\r\n  menuLink.addEventListener('click', () => {\r\n    clearContent();\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n  navLinks.appendChild(menuLink);\r\n\r\n  const reservationLink = document.createElement('li');\r\n  reservationLink.classList.add(\"nav-link-child\");\r\n  const reservationAnchor = document.createElement('a');\r\n  reservationAnchor.href = \"#reservation\"; \r\n  reservationAnchor.textContent = \"Reservation\";\r\n  reservationLink.appendChild(reservationAnchor);\r\n  reservationLink.addEventListener('click', () => {\r\n    clearContent();\r\n    (0,_reservation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n  navLinks.appendChild(reservationLink);\r\n\r\n  const contactLink = document.createElement('li');\r\n  contactLink.classList.add(\"nav-link-child\");\r\n  const contactAnchor = document.createElement('a');\r\n  contactAnchor.href = \"#contact\"; \r\n  contactAnchor.textContent = \"Contact\";\r\n  contactLink.appendChild(contactAnchor);\r\n  contactLink.addEventListener('click', () => {\r\n    clearContent();\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  });\r\n  navLinks.appendChild(contactLink);\r\n\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMenuPage() {\r\n    const content = document.getElementById('content');\r\n    const menuDiv = document.createElement('div');\r\n    menuDiv.textContent = 'Check out our delicious menu!';\r\n    content.appendChild(menuDiv);\r\n  }\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);\r\n  \n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/reservation.js":
/*!****************************!*\
  !*** ./src/reservation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadResevervationPage() {\r\n  const content = document.getElementById('content');\r\n  const reservationDiv = document.createElement('div');\r\n  reservationDiv.textContent = 'please fill out the form below to reserve a seat!';\r\n\r\n  \r\n  const reservationForm = document.createElement('form');\r\n  reservationForm.id = 'reservationForm';\r\n\r\n  const nameLabel = document.createElement('label');\r\n  nameLabel.textContent = 'Name:';\r\n  const nameInput = document.createElement('input');\r\n  nameInput.type = 'text';\r\n  nameInput.name = 'name';\r\n\r\n  const emailLabel = document.createElement('label');\r\n  emailLabel.textContent = 'Email:';\r\n  const emailInput = document.createElement('input');\r\n  emailInput.type = 'email';\r\n  emailInput.name = 'email';\r\n\r\n  const dateTimeLabel = document.createElement('label');\r\n  dateTimeLabel.textContent = 'Date/Time:';\r\n  const dateTimeInput = document.createElement('input');\r\n  dateTimeInput.type = 'datetime-local';\r\n  dateTimeInput.name = 'dateTime';\r\n\r\n  const seatLabel = document.createElement('label');\r\n  seatLabel.textContent = 'Seat:';\r\n  const seatSelect = document.createElement('select');\r\n  seatSelect.name = 'seat';\r\n\r\n  const option1 = document.createElement('option');\r\n  option1.value = 'table1';\r\n  option1.textContent = 'Table 1';\r\n\r\n  const option2 = document.createElement('option');\r\n  option2.value = 'table2';\r\n  option2.textContent = 'Table 2';\r\n\r\n  const option3 = document.createElement('option');\r\n  option3.value = 'table3';\r\n  option3.textContent = 'Table 3';\r\n\r\n  seatSelect.appendChild(option1);\r\n  seatSelect.appendChild(option2);\r\n  seatSelect.appendChild(option3)\r\n\r\n  const submitButton = document.createElement('button');\r\n  submitButton.type = 'submit';\r\n  submitButton.textContent = 'Book Now';\r\n\r\n  reservationForm.appendChild(nameLabel);\r\n  reservationForm.appendChild(nameInput);\r\n  reservationForm.appendChild(emailLabel);\r\n  reservationForm.appendChild(emailInput);\r\n  reservationForm.appendChild(dateTimeLabel);\r\n  reservationForm.appendChild(dateTimeInput);\r\n  reservationForm.appendChild(seatLabel);\r\n  reservationForm.appendChild(seatSelect);\r\n  reservationForm.appendChild(submitButton);\r\n\r\n  reservationDiv.appendChild(reservationForm);\r\n\r\n  content.appendChild(reservationDiv);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadResevervationPage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/reservation.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;