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

eval("// The idea here is to first get the whole list of vacations\r\n//and the number of vacations an user has\r\n\r\n// Then, dinamically put the number of vacations in this variable\r\n//You can change number of the next value and debug see it working\r\nvar numberOfVacations = 3;\r\n\r\n// In case there are no vacations, alert shows up\r\nif (numberOfVacations == 0) {\r\n  alert(\"Este usuario no tiene vacaciones solicitadas actualmente.\");\r\n} else {\r\n  // If the user has vacations\r\n  var ul = document.getElementById(\"vacationsList\");\r\n  var select = document.getElementById(\"vacationsDropdown\");\r\n  var li, option;\r\n\r\n  for (var i = 1; i <= numberOfVacations; i++) {\r\n    // ul element dinamically written\r\n    li = document.createElement(\"li\");\r\n    li.setAttribute(\"id\", \"vacation\" + i);\r\n    ul.appendChild(li);\r\n    li.appendChild(document.createTextNode(\"Vacation\" + i));\r\n\r\n    // select element dinamically written\r\n    option = document.createElement(\"option\");\r\n    option.setAttribute(\"id\", \"vacation\" + i);\r\n    select.appendChild(option);\r\n    option.innerHTML = \"vacation\" + i;\r\n  }\r\n}\r\n\r\ndocument.getElementById(\"cancelButton\").onclick = function () {\r\n  var confirmation = confirm(\r\n    \"¿Está seguro que desea cancelar estas vacaciones\"\r\n  );\r\n  if (!confirmation) {\r\n    return;\r\n  }\r\n  var optionSelected = document.getElementById(\"vacationsDropdown\").value;\r\n\r\n  alert(\r\n    \"Ha cancelado sus vacaciones desde \" +\r\n      optionSelected +\r\n      \" hasta \" +\r\n      optionSelected\r\n  );\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ2FuY2VsYXJWYWNhY2lvbmVzLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9DYW5jZWxhclZhY2FjaW9uZXMuanM/ZWU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgaWRlYSBoZXJlIGlzIHRvIGZpcnN0IGdldCB0aGUgd2hvbGUgbGlzdCBvZiB2YWNhdGlvbnNcclxuLy9hbmQgdGhlIG51bWJlciBvZiB2YWNhdGlvbnMgYW4gdXNlciBoYXNcclxuXHJcbi8vIFRoZW4sIGRpbmFtaWNhbGx5IHB1dCB0aGUgbnVtYmVyIG9mIHZhY2F0aW9ucyBpbiB0aGlzIHZhcmlhYmxlXHJcbi8vWW91IGNhbiBjaGFuZ2UgbnVtYmVyIG9mIHRoZSBuZXh0IHZhbHVlIGFuZCBkZWJ1ZyBzZWUgaXQgd29ya2luZ1xyXG52YXIgbnVtYmVyT2ZWYWNhdGlvbnMgPSAzO1xyXG5cclxuLy8gSW4gY2FzZSB0aGVyZSBhcmUgbm8gdmFjYXRpb25zLCBhbGVydCBzaG93cyB1cFxyXG5pZiAobnVtYmVyT2ZWYWNhdGlvbnMgPT0gMCkge1xyXG4gIGFsZXJ0KFwiRXN0ZSB1c3VhcmlvIG5vIHRpZW5lIHZhY2FjaW9uZXMgc29saWNpdGFkYXMgYWN0dWFsbWVudGUuXCIpO1xyXG59IGVsc2Uge1xyXG4gIC8vIElmIHRoZSB1c2VyIGhhcyB2YWNhdGlvbnNcclxuICB2YXIgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhY2F0aW9uc0xpc3RcIik7XHJcbiAgdmFyIHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFjYXRpb25zRHJvcGRvd25cIik7XHJcbiAgdmFyIGxpLCBvcHRpb247XHJcblxyXG4gIGZvciAodmFyIGkgPSAxOyBpIDw9IG51bWJlck9mVmFjYXRpb25zOyBpKyspIHtcclxuICAgIC8vIHVsIGVsZW1lbnQgZGluYW1pY2FsbHkgd3JpdHRlblxyXG4gICAgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInZhY2F0aW9uXCIgKyBpKTtcclxuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVmFjYXRpb25cIiArIGkpKTtcclxuXHJcbiAgICAvLyBzZWxlY3QgZWxlbWVudCBkaW5hbWljYWxseSB3cml0dGVuXHJcbiAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidmFjYXRpb25cIiArIGkpO1xyXG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICBvcHRpb24uaW5uZXJIVE1MID0gXCJ2YWNhdGlvblwiICsgaTtcclxuICB9XHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsQnV0dG9uXCIpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGNvbmZpcm1hdGlvbiA9IGNvbmZpcm0oXHJcbiAgICBcIsK/RXN0w6Egc2VndXJvIHF1ZSBkZXNlYSBjYW5jZWxhciBlc3RhcyB2YWNhY2lvbmVzXCJcclxuICApO1xyXG4gIGlmICghY29uZmlybWF0aW9uKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHZhciBvcHRpb25TZWxlY3RlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFjYXRpb25zRHJvcGRvd25cIikudmFsdWU7XHJcblxyXG4gIGFsZXJ0KFxyXG4gICAgXCJIYSBjYW5jZWxhZG8gc3VzIHZhY2FjaW9uZXMgZGVzZGUgXCIgK1xyXG4gICAgICBvcHRpb25TZWxlY3RlZCArXHJcbiAgICAgIFwiIGhhc3RhIFwiICtcclxuICAgICAgb3B0aW9uU2VsZWN0ZWRcclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/CancelarVacaciones.js\n");

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