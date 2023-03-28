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

/***/ "./src/CancelarVacaciones.js":
/*!***********************************!*\
  !*** ./src/CancelarVacaciones.js ***!
  \***********************************/
/***/ (() => {

eval("// The idea here is to first get the whole list of vacations\r\n//and the number of vacations an user has\r\n\r\n// Then, dinamically put the number of vacations in this variable\r\n// You can change number of the next value and debug see it working\r\n//Remember to run 'npm run build' after changes\r\nvar numberOfVacations = 5;\r\n\r\n// In case there are no vacations, alert shows up\r\nif (numberOfVacations == 0) {\r\n  alert(\"Este usuario no tiene vacaciones solicitadas actualmente.\");\r\n} else {\r\n  // If the user has vacations\r\n  var ul = document.getElementById(\"vacationsList\");\r\n  var select = document.getElementById(\"vacationsDropdown\");\r\n  var li, option;\r\n\r\n  for (var i = 1; i <= numberOfVacations; i++) {\r\n    // ul element dinamically written\r\n    li = document.createElement(\"li\");\r\n    li.setAttribute(\"id\", \"vacation\" + i);\r\n    ul.appendChild(li);\r\n    li.appendChild(document.createTextNode(\"Vacation\" + i));\r\n\r\n    // select element dinamically written\r\n    option = document.createElement(\"option\");\r\n    option.setAttribute(\"id\", \"vacation\" + i);\r\n    select.appendChild(option);\r\n    option.innerHTML = \"vacation\" + i;\r\n  }\r\n}\r\n\r\n\r\ndocument.getElementById(\"cancelButton\").onclick = function () {\r\n  var confirmation = confirm(\r\n    \"¿Está seguro que desea cancelar estas vacaciones\"\r\n  );\r\n  if (!confirmation) {\r\n    return;\r\n  }\r\n  var optionSelected = document.getElementById(\"vacationsDropdown\").value;\r\n\r\n  alert(\r\n    \"Ha cancelado sus vacaciones desde \" +\r\n      optionSelected +\r\n      \" hasta \" +\r\n      optionSelected\r\n  );\r\n};\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ2FuY2VsYXJWYWNhY2lvbmVzLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9DYW5jZWxhclZhY2FjaW9uZXMuanM/ZWU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgaWRlYSBoZXJlIGlzIHRvIGZpcnN0IGdldCB0aGUgd2hvbGUgbGlzdCBvZiB2YWNhdGlvbnNcclxuLy9hbmQgdGhlIG51bWJlciBvZiB2YWNhdGlvbnMgYW4gdXNlciBoYXNcclxuXHJcbi8vIFRoZW4sIGRpbmFtaWNhbGx5IHB1dCB0aGUgbnVtYmVyIG9mIHZhY2F0aW9ucyBpbiB0aGlzIHZhcmlhYmxlXHJcbi8vIFlvdSBjYW4gY2hhbmdlIG51bWJlciBvZiB0aGUgbmV4dCB2YWx1ZSBhbmQgZGVidWcgc2VlIGl0IHdvcmtpbmdcclxuLy9SZW1lbWJlciB0byBydW4gJ25wbSBydW4gYnVpbGQnIGFmdGVyIGNoYW5nZXNcclxudmFyIG51bWJlck9mVmFjYXRpb25zID0gNTtcclxuXHJcbi8vIEluIGNhc2UgdGhlcmUgYXJlIG5vIHZhY2F0aW9ucywgYWxlcnQgc2hvd3MgdXBcclxuaWYgKG51bWJlck9mVmFjYXRpb25zID09IDApIHtcclxuICBhbGVydChcIkVzdGUgdXN1YXJpbyBubyB0aWVuZSB2YWNhY2lvbmVzIHNvbGljaXRhZGFzIGFjdHVhbG1lbnRlLlwiKTtcclxufSBlbHNlIHtcclxuICAvLyBJZiB0aGUgdXNlciBoYXMgdmFjYXRpb25zXHJcbiAgdmFyIHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWNhdGlvbnNMaXN0XCIpO1xyXG4gIHZhciBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhY2F0aW9uc0Ryb3Bkb3duXCIpO1xyXG4gIHZhciBsaSwgb3B0aW9uO1xyXG5cclxuICBmb3IgKHZhciBpID0gMTsgaSA8PSBudW1iZXJPZlZhY2F0aW9uczsgaSsrKSB7XHJcbiAgICAvLyB1bCBlbGVtZW50IGRpbmFtaWNhbGx5IHdyaXR0ZW5cclxuICAgIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ2YWNhdGlvblwiICsgaSk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlZhY2F0aW9uXCIgKyBpKSk7XHJcblxyXG4gICAgLy8gc2VsZWN0IGVsZW1lbnQgZGluYW1pY2FsbHkgd3JpdHRlblxyXG4gICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInZhY2F0aW9uXCIgKyBpKTtcclxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgb3B0aW9uLmlubmVySFRNTCA9IFwidmFjYXRpb25cIiArIGk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxCdXR0b25cIikub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgY29uZmlybWF0aW9uID0gY29uZmlybShcclxuICAgIFwiwr9Fc3TDoSBzZWd1cm8gcXVlIGRlc2VhIGNhbmNlbGFyIGVzdGFzIHZhY2FjaW9uZXNcIlxyXG4gICk7XHJcbiAgaWYgKCFjb25maXJtYXRpb24pIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgdmFyIG9wdGlvblNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWNhdGlvbnNEcm9wZG93blwiKS52YWx1ZTtcclxuXHJcbiAgYWxlcnQoXHJcbiAgICBcIkhhIGNhbmNlbGFkbyBzdXMgdmFjYWNpb25lcyBkZXNkZSBcIiArXHJcbiAgICAgIG9wdGlvblNlbGVjdGVkICtcclxuICAgICAgXCIgaGFzdGEgXCIgK1xyXG4gICAgICBvcHRpb25TZWxlY3RlZFxyXG4gICk7XHJcbn07XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/CancelarVacaciones.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/CancelarVacaciones.js"]();
/******/ 	
/******/ })()
;