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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadContactPage() {\r\n  const content = document.getElementById('content');\r\n\r\n  const contactDiv = document.createElement('div');\r\n  contactDiv.textContent = 'Contact us for reservations!';\r\n  \r\n  const locationDiv = document.createElement('div');\r\n  locationDiv.textContent = 'Charles Eluyera Street, Mahuta, Kaduna, Nigeria.';\r\n\r\n  const phoneDiv = document.createElement('div');\r\n  phoneDiv.textContent = 'Phone: +2347084422406';\r\n\r\n  const mapDiv = document.createElement('div');\r\n  mapDiv.innerHTML = '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15736.376885770578!2d8.28648005!3d9.5871465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105245726d0177cf%3A0x98f062e21d0ba8e4!2sKafanchan!5e0!3m2!1sen!2sng!4v1654926199871!5m2!1sen!2sng\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>';\r\n\r\n  const socialMediaDiv = document.createElement('div');\r\n  \r\n  const facebookLink = document.createElement('a');\r\n  facebookLink.href = 'https://www.facebook.com/YourRestaurantPage'; \r\n  facebookLink.target = '_blank'; \r\n  facebookLink.textContent = 'Follow us on Facebook';\r\n  \r\n  const facebookIcon = document.createElement('i');\r\n  facebookIcon.classList.add('fa', 'fa-facebook-official');\r\n\r\n  facebookLink.appendChild(facebookIcon);\r\n  socialMediaDiv.appendChild(facebookLink);\r\n\r\n  contactDiv.appendChild(locationDiv);\r\n  contactDiv.appendChild(phoneDiv);\r\n  contactDiv.appendChild(mapDiv);\r\n  contactDiv.appendChild(socialMediaDiv);\r\n\r\n  content.appendChild(contactDiv);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadRestaurantPage() {\r\n  const content = document.getElementById('content');\r\n  const restaurantDiv = document.createElement('div');\r\n  restaurantDiv.classList.add('restaurant-page');\r\n\r\n  const backgroundImage = document.createElement('div');\r\n  backgroundImage.classList.add('background-image');\r\n\r\n  restaurantDiv.appendChild(backgroundImage);\r\n\r\n  const restaurantName = document.createElement('h1');\r\n  restaurantName.textContent = 'The 5th Chops';\r\n  restaurantName.classList.add('restaurant-name');\r\n\r\n  const slogan = document.createElement('h2');\r\n  slogan.textContent = 'A Taste of Excellence';\r\n  slogan.classList.add('slogan');\r\n\r\n  restaurantDiv.appendChild(restaurantName);\r\n  restaurantDiv.appendChild(slogan);\r\n\r\n  const aboutUs = document.createElement('div');\r\n  aboutUs.textContent = 'About Us';\r\n  aboutUs.classList.add('about-us-heading');\r\n\r\n  const aboutUsText = document.createElement('p');\r\n  aboutUsText.textContent = \"At The 5th Chops, we pride ourselves on offering a culinary experience like no other. Our chef's passion for food and dedication to quality ensure that every dish we serve is a masterpiece.\";\r\n  aboutUsText.classList.add('about-us-text');\r\n\r\n  restaurantDiv.appendChild(aboutUs);\r\n  restaurantDiv.appendChild(aboutUsText);\r\n\r\n  const footer = document.createElement('footer');\r\n  footer.classList.add('footer');\r\n\r\n  const footerText = document.createElement('p');\r\n  footerText.textContent = '© 2023 The 5th Chops. All rights reserved.';\r\n  footer.appendChild(footerText);\r\n\r\n  content.appendChild(restaurantDiv);\r\n  content.appendChild(footer);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadRestaurantPage);\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _reservation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservation */ \"./src/reservation.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\nfunction clearContent() {\r\n  const content = document.getElementById('content');\r\n  while (content.firstChild) {\r\n    content.removeChild(content.firstChild);\r\n  }\r\n}\r\n\r\nfunction loadPage(pageLoader) {\r\n  pageLoader();\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const content = document.getElementById('content');\r\n  const nav = document.createElement('nav');\r\n  nav.classList.add('fixed-nav');\r\n  document.body.appendChild(nav);\r\n\r\n  const links = [\r\n    { text: 'Home', href: '#', loader: _home__WEBPACK_IMPORTED_MODULE_0__[\"default\"] },\r\n    { text: 'Menu', href: '#menu', loader: _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"] },\r\n    { text: 'Reservation', href: '#reservation', loader: _reservation__WEBPACK_IMPORTED_MODULE_2__[\"default\"] },\r\n    { text: 'Contact', href: '#contact', loader: _contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"] },\r\n  ];\r\n\r\n  const navLinks = document.createElement('ul');\r\n  navLinks.classList.add('nav-link');\r\n  nav.appendChild(navLinks);\r\n\r\n  links.forEach((linkDetail) => {\r\n    const link = document.createElement('li');\r\n    link.classList.add('nav-link-child');\r\n    const anchor = document.createElement('a');\r\n    anchor.href = linkDetail.href;\r\n    anchor.textContent = linkDetail.text;\r\n    anchor.addEventListener('click', (event) => {\r\n      event.preventDefault();\r\n      clearContent();\r\n      loadPage(linkDetail.loader);\r\n    });\r\n    link.appendChild(anchor);\r\n    navLinks.appendChild(link);\r\n  });\r\n\r\n  loadPage(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n});\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMenuPage() {\r\n  const content = document.getElementById('content');\r\n  content.innerHTML = '';\r\n\r\n  const menuDiv = document.createElement('div');\r\n  menuDiv.className = 'menu-page';\r\n\r\n  const menuItems = [\r\n    {\r\n      name: 'beans and plantain',\r\n      description: 'beans porrage, with plantain',\r\n      price: '₦1200',\r\n    },\r\n    {\r\n      name: 'Muschel spaghetti',\r\n      description: 'Classic spaghetti with tomato, muschel, and basil',\r\n      price: '₦1500',\r\n    },\r\n    {\r\n      name: ' moi moi',\r\n      description: 'Freshly cooked grinded beans with egg',\r\n      price: '₦500',\r\n    },\r\n  ];\r\n\r\n  menuItems.forEach((item) => {\r\n    const menuItemDiv = document.createElement('div');\r\n    menuItemDiv.className = 'menu-item';\r\n\r\n    const itemImage = document.createElement('img');\r\n    itemImage.alt = item.name;\r\n\r\n    const itemName = document.createElement('h3');\r\n    itemName.textContent = item.name;\r\n\r\n    const itemDescription = document.createElement('p');\r\n    itemDescription.textContent = item.description;\r\n\r\n    const itemPrice = document.createElement('p');\r\n    itemPrice.textContent = item.price;\r\n\r\n    menuItemDiv.appendChild(itemName);\r\n    menuItemDiv.appendChild(itemDescription);\r\n    menuItemDiv.appendChild(itemPrice);\r\n\r\n    menuDiv.appendChild(menuItemDiv);\r\n  });\r\n\r\n  content.appendChild(menuDiv);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/reservation.js":
/*!****************************!*\
  !*** ./src/reservation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadReservationPage() {\r\n  const content = document.getElementById('content');\r\n\r\n  const reservationDiv = document.createElement('div');\r\n  reservationDiv.textContent = 'Please fill out the form below to make a reservation.';\r\n\r\n  const reservationForm = document.createElement('form');\r\n  reservationForm.id = 'reservationForm';\r\n\r\n  const formElements = [\r\n    { label: 'Name:', type: 'text', name: 'name' },\r\n    { label: 'Email:', type: 'email', name: 'email' },\r\n    { label: 'Phone:', type: 'tel', name: 'phone' },\r\n    { label: 'Number of Guests:', type: 'number', name: 'guests' }, \r\n    { label: 'Date/Time:', type: 'datetime-local', name: 'dateTime' },\r\n  ];\r\n\r\n  formElements.forEach((element) => {\r\n    const label = document.createElement('label');\r\n    label.textContent = element.label;\r\n\r\n    const input = document.createElement('input');\r\n    input.type = element.type;\r\n    input.name = element.name;\r\n\r\n    reservationForm.appendChild(label);\r\n    reservationForm.appendChild(input);\r\n  });\r\n\r\n  const specialRequestsLabel = document.createElement('label');\r\n  specialRequestsLabel.textContent = 'Special Requests:';\r\n  const specialRequestsTextarea = document.createElement('textarea');\r\n  specialRequestsTextarea.name = 'specialRequests';\r\n\r\n  reservationForm.appendChild(specialRequestsLabel);\r\n  reservationForm.appendChild(specialRequestsTextarea);\r\n\r\n  const submitButton = document.createElement('button');\r\n  submitButton.type = 'submit';\r\n  submitButton.textContent = 'Make Reservation';\r\n\r\n  reservationForm.appendChild(submitButton);\r\n\r\n  reservationDiv.appendChild(reservationForm);\r\n\r\n  content.appendChild(reservationDiv);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadReservationPage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/reservation.js?");

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