/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DetallesVacaciones.js":
/*!***********************************!*\
  !*** ./src/DetallesVacaciones.js ***!
  \***********************************/
/***/ (() => {

eval("// The idea here is to first get the whole list of vacations\r\n//and the number of vacations an user has\r\n\r\n// Then, dinamically put the number of vacations in this variable\r\n//You can change number of the next value and debug see it working\r\nvar numberOfVacations = 3;\r\n\r\n// In case there are no vacations, alert shows up\r\nif (numberOfVacations == 0) {\r\n  alert(\"Este usuario no tiene vacaciones solicitadas actualmente.\");\r\n} else {\r\n  var ul = document.getElementById(\"vacationsList\");\r\n  var li;\r\n\r\n  for (var i = 1; i <= numberOfVacations; i++) {\r\n    li = document.createElement(\"li\");\r\n    li.setAttribute(\"id\", \"vacation\" + i);\r\n    ul.appendChild(li);\r\n\r\n    // Here, you can add the details of one of the vacations user has\r\n    li.appendChild(document.createTextNode(\"Vacation\" + i));\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvRGV0YWxsZXNWYWNhY2lvbmVzLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9EZXRhbGxlc1ZhY2FjaW9uZXMuanM/NzQwYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgaWRlYSBoZXJlIGlzIHRvIGZpcnN0IGdldCB0aGUgd2hvbGUgbGlzdCBvZiB2YWNhdGlvbnNcclxuLy9hbmQgdGhlIG51bWJlciBvZiB2YWNhdGlvbnMgYW4gdXNlciBoYXNcclxuXHJcbi8vIFRoZW4sIGRpbmFtaWNhbGx5IHB1dCB0aGUgbnVtYmVyIG9mIHZhY2F0aW9ucyBpbiB0aGlzIHZhcmlhYmxlXHJcbi8vWW91IGNhbiBjaGFuZ2UgbnVtYmVyIG9mIHRoZSBuZXh0IHZhbHVlIGFuZCBkZWJ1ZyBzZWUgaXQgd29ya2luZ1xyXG52YXIgbnVtYmVyT2ZWYWNhdGlvbnMgPSAzO1xyXG5cclxuLy8gSW4gY2FzZSB0aGVyZSBhcmUgbm8gdmFjYXRpb25zLCBhbGVydCBzaG93cyB1cFxyXG5pZiAobnVtYmVyT2ZWYWNhdGlvbnMgPT0gMCkge1xyXG4gIGFsZXJ0KFwiRXN0ZSB1c3VhcmlvIG5vIHRpZW5lIHZhY2FjaW9uZXMgc29saWNpdGFkYXMgYWN0dWFsbWVudGUuXCIpO1xyXG59IGVsc2Uge1xyXG4gIHZhciB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFjYXRpb25zTGlzdFwiKTtcclxuICB2YXIgbGk7XHJcblxyXG4gIGZvciAodmFyIGkgPSAxOyBpIDw9IG51bWJlck9mVmFjYXRpb25zOyBpKyspIHtcclxuICAgIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ2YWNhdGlvblwiICsgaSk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcblxyXG4gICAgLy8gSGVyZSwgeW91IGNhbiBhZGQgdGhlIGRldGFpbHMgb2Ygb25lIG9mIHRoZSB2YWNhdGlvbnMgdXNlciBoYXNcclxuICAgIGxpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVmFjYXRpb25cIiArIGkpKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/DetallesVacaciones.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/DetallesVacaciones.js"]();
/******/ 	
/******/ })()
;