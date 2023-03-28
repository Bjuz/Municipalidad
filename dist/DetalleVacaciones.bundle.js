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

eval("// The idea here is to first get the whole list of vacations\r\n//and the number of vacations an user has\r\n\r\n// Then, dinamically put the number of vacations in this variable\r\n//You can change number of the next value and debug see it working\r\nvar numberOfVacations = 3;\r\n\r\n// In case there are no vacations, alert shows up\r\nif (numberOfVacations == 0) {\r\n  alert(\"Este usuario no tiene vacaciones solicitadas actualmente.\");\r\n} else {\r\n  var ul = document.getElementById(\"vacationsList\");\r\n  var li;\r\n\r\n  for (var i = 1; i <= numberOfVacations; i++) {\r\n    li = document.createElement(\"li\");\r\n    li.setAttribute(\"id\", \"vacation\" + i);\r\n    ul.appendChild(li);\r\n\r\n    // Here, you can add the details of one of the vacations user has\r\n    if(i == 1){\r\n      li.appendChild(document.createTextNode(\"Vacacion \"+ i +\" : \" + \"Fecha de inicio = 03/27/2023\" + \"Fecha finalizacion = 03/27/2023\"));\r\n    }else if(i == 2){\r\n      li.appendChild(document.createTextNode(\"Vacacion \"+ i +\" : \" + \"Fecha de inicio = 03/28/2023\" + \"Fecha finalizacion = 03/29/2023\"));\r\n    }else{\r\n      li.appendChild(document.createTextNode(\"Vacacion \"+ i +\" : \"+ \"Fecha de inicio = 03/30/2023\" + \"Fecha finalizacion = 03/31/2023\"));\r\n    }\r\n    \r\n  }\r\n}\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvRGV0YWxsZXNWYWNhY2lvbmVzLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvRGV0YWxsZXNWYWNhY2lvbmVzLmpzPzc0MGMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIGlkZWEgaGVyZSBpcyB0byBmaXJzdCBnZXQgdGhlIHdob2xlIGxpc3Qgb2YgdmFjYXRpb25zXHJcbi8vYW5kIHRoZSBudW1iZXIgb2YgdmFjYXRpb25zIGFuIHVzZXIgaGFzXHJcblxyXG4vLyBUaGVuLCBkaW5hbWljYWxseSBwdXQgdGhlIG51bWJlciBvZiB2YWNhdGlvbnMgaW4gdGhpcyB2YXJpYWJsZVxyXG4vL1lvdSBjYW4gY2hhbmdlIG51bWJlciBvZiB0aGUgbmV4dCB2YWx1ZSBhbmQgZGVidWcgc2VlIGl0IHdvcmtpbmdcclxudmFyIG51bWJlck9mVmFjYXRpb25zID0gMztcclxuXHJcbi8vIEluIGNhc2UgdGhlcmUgYXJlIG5vIHZhY2F0aW9ucywgYWxlcnQgc2hvd3MgdXBcclxuaWYgKG51bWJlck9mVmFjYXRpb25zID09IDApIHtcclxuICBhbGVydChcIkVzdGUgdXN1YXJpbyBubyB0aWVuZSB2YWNhY2lvbmVzIHNvbGljaXRhZGFzIGFjdHVhbG1lbnRlLlwiKTtcclxufSBlbHNlIHtcclxuICB2YXIgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhY2F0aW9uc0xpc3RcIik7XHJcbiAgdmFyIGxpO1xyXG5cclxuICBmb3IgKHZhciBpID0gMTsgaSA8PSBudW1iZXJPZlZhY2F0aW9uczsgaSsrKSB7XHJcbiAgICBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGxpLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidmFjYXRpb25cIiArIGkpO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG5cclxuICAgIC8vIEhlcmUsIHlvdSBjYW4gYWRkIHRoZSBkZXRhaWxzIG9mIG9uZSBvZiB0aGUgdmFjYXRpb25zIHVzZXIgaGFzXHJcbiAgICBpZihpID09IDEpe1xyXG4gICAgICBsaS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlZhY2FjaW9uIFwiKyBpICtcIiA6IFwiICsgXCJGZWNoYSBkZSBpbmljaW8gPSAwMy8yNy8yMDIzXCIgKyBcIkZlY2hhIGZpbmFsaXphY2lvbiA9IDAzLzI3LzIwMjNcIikpO1xyXG4gICAgfWVsc2UgaWYoaSA9PSAyKXtcclxuICAgICAgbGkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJWYWNhY2lvbiBcIisgaSArXCIgOiBcIiArIFwiRmVjaGEgZGUgaW5pY2lvID0gMDMvMjgvMjAyM1wiICsgXCJGZWNoYSBmaW5hbGl6YWNpb24gPSAwMy8yOS8yMDIzXCIpKTtcclxuICAgIH1lbHNle1xyXG4gICAgICBsaS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlZhY2FjaW9uIFwiKyBpICtcIiA6IFwiKyBcIkZlY2hhIGRlIGluaWNpbyA9IDAzLzMwLzIwMjNcIiArIFwiRmVjaGEgZmluYWxpemFjaW9uID0gMDMvMzEvMjAyM1wiKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/DetallesVacaciones.js\n");

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