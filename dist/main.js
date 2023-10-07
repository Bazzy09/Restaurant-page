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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _reservation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservation */ \"./src/reservation.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\nfunction clearContent() {\r\n  const content = document.getElementById('content');\r\n  while (content.firstChild) {\r\n    content.removeChild(content.firstChild);\r\n  }\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const content = document.getElementById('content');\r\n\r\n  const navLinks = document.createElement('ul');\r\n  navLinks.classList.add(\"nav-link\");\r\n  content.appendChild(navLinks);\r\n\r\n  const homeLink = document.createElement('li');\r\n  homeLink.classList.add(\"nav-link-child\");\r\n  const homeAnchor = document.createElement('a');\r\n  homeAnchor.href = \"#\";\r\n  homeAnchor.textContent = \"Home\";\r\n  homeAnchor.addEventListener('click', (event) => {\r\n    event.preventDefault(); \r\n    clearContent();\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n  homeLink.appendChild(homeAnchor);\r\n  navLinks.appendChild(homeLink);\r\n\r\n  const menuLink = document.createElement('li');\r\n  menuLink.classList.add(\"nav-link-child\");\r\n  const menuAnchor = document.createElement('a');\r\n  menuAnchor.href = \"#menu\";\r\n  menuAnchor.textContent = \"Menu\";\r\n  menuAnchor.addEventListener('click', (event) => {\r\n    event.preventDefault(); \r\n    clearContent();\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n  menuLink.appendChild(menuAnchor);\r\n  navLinks.appendChild(menuLink);\r\n\r\n  const reservationLink = document.createElement('li');\r\n  reservationLink.classList.add(\"nav-link-child\");\r\n  const reservationAnchor = document.createElement('a');\r\n  reservationAnchor.href = \"#reservation\";\r\n  reservationAnchor.textContent = \"Reservation\";\r\n  reservationAnchor.addEventListener('click', (event) => {\r\n    event.preventDefault(); \r\n    clearContent();\r\n    (0,_reservation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n  reservationLink.appendChild(reservationAnchor);\r\n  navLinks.appendChild(reservationLink);\r\n\r\n  const contactLink = document.createElement('li');\r\n  contactLink.classList.add(\"nav-link-child\");\r\n  const contactAnchor = document.createElement('a');\r\n  contactAnchor.href = \"#contact\";\r\n  contactAnchor.textContent = \"Contact\";\r\n  contactAnchor.addEventListener('click', (event) => {\r\n    event.preventDefault(); \r\n    clearContent();\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  });\r\n  contactLink.appendChild(contactAnchor);\r\n  navLinks.appendChild(contactLink);\r\n});\r\n\r\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMenuPage() {\r\n  const content = document.getElementById('content');\r\n  content.innerHTML = '';\r\n\r\n  const menuDiv = document.createElement('div');\r\n  menuDiv.className = 'menu-page';\r\n\r\n  const menuItems = [\r\n    {\r\n      name: 'beans and plantain',\r\n      description: 'beans porrage, with plantain',\r\n      price: '$12.99',\r\n      imageSrc: 'src/assets/beans.jpg.jpeg',\r\n    },\r\n    {\r\n      name: 'Muschel spaghetti',\r\n      description: 'Classic spaghetti with tomato, muschel, and basil',\r\n      price: '$10.99',\r\n      imageSrc: 'src/assets/Muschel-Spaghetti.jpeg',\r\n    },\r\n    {\r\n      name: ' moi moi',\r\n      description: 'Freshly cooked grinded beans with egg',\r\n      price: '$14.99',\r\n      imageSrc: 'Nigerian_Moi-Moi.png',\r\n    },\r\n  ];\r\n\r\n  menuItems.forEach((item) => {\r\n    const menuItemDiv = document.createElement('div');\r\n    menuItemDiv.className = 'menu-item';\r\n\r\n    const itemImage = document.createElement('img');\r\n    itemImage.src = item.imageSrc;\r\n    itemImage.alt = item.name;\r\n\r\n    const itemName = document.createElement('h3');\r\n    itemName.textContent = item.name;\r\n\r\n    const itemDescription = document.createElement('p');\r\n    itemDescription.textContent = item.description;\r\n\r\n    const itemPrice = document.createElement('p');\r\n    itemPrice.textContent = item.price;\r\n\r\n    menuItemDiv.appendChild(itemImage);\r\n    menuItemDiv.appendChild(itemName);\r\n    menuItemDiv.appendChild(itemDescription);\r\n    menuItemDiv.appendChild(itemPrice);\r\n\r\n    menuDiv.appendChild(menuItemDiv);\r\n  });\r\n\r\n  content.appendChild(menuDiv);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/reservation.js":
/*!****************************!*\
  !*** ./src/reservation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadReservationPage() {\r\n  const content = document.getElementById('content');\r\n\r\n  const reservationDiv = document.createElement('div');\r\n  reservationDiv.textContent = 'Please fill out the form below to make a restaurant reservation.';\r\n\r\n  const reservationForm = document.createElement('form');\r\n  reservationForm.id = 'reservationForm';\r\n\r\n  const formElements = [\r\n    { label: 'Name:', type: 'text', name: 'name' },\r\n    { label: 'Email:', type: 'email', name: 'email' },\r\n    { label: 'Phone:', type: 'tel', name: 'phone' },\r\n    { label: 'Number of Guests:', type: 'number', name: 'guests' }, \r\n    { label: 'Date/Time:', type: 'datetime-local', name: 'dateTime' },\r\n  ];\r\n\r\n  formElements.forEach((element) => {\r\n    const label = document.createElement('label');\r\n    label.textContent = element.label;\r\n\r\n    const input = document.createElement('input');\r\n    input.type = element.type;\r\n    input.name = element.name;\r\n\r\n    reservationForm.appendChild(label);\r\n    reservationForm.appendChild(input);\r\n  });\r\n\r\n  const specialRequestsLabel = document.createElement('label');\r\n  specialRequestsLabel.textContent = 'Special Requests:';\r\n  const specialRequestsTextarea = document.createElement('textarea');\r\n  specialRequestsTextarea.name = 'specialRequests';\r\n\r\n  reservationForm.appendChild(specialRequestsLabel);\r\n  reservationForm.appendChild(specialRequestsTextarea);\r\n\r\n  const submitButton = document.createElement('button');\r\n  submitButton.type = 'submit';\r\n  submitButton.textContent = 'Make Reservation';\r\n\r\n  reservationForm.appendChild(submitButton);\r\n\r\n  reservationDiv.appendChild(reservationForm);\r\n\r\n  content.appendChild(reservationDiv);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadReservationPage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/reservation.js?");

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