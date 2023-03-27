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

/***/ "./src/SolicitarVacaciones.js":
/*!************************************!*\
  !*** ./src/SolicitarVacaciones.js ***!
  \************************************/
/***/ (() => {

eval("document.getElementById(\"sendData\").onclick = function () {\r\n\r\n    //Get values from the form on SolicitarVacaciones.html\r\n    var firstDate = document.getElementById(\"firstDate\").value;\r\n    var finishDate = document.getElementById(\"finishDate\").value;\r\n\r\n    //Check if the dates are valid\r\n    if (firstDate == \"\" || finishDate == \"\") {\r\n        alert(\"Debe ingresar ambas fechas\");\r\n        return;\r\n    } else if (firstDate > finishDate || firstDate == finishDate) {\r\n        alert(\"La fecha de inicio no puede ser mayor o igual a la fecha de fin\");\r\n        return;\r\n    }\r\n\r\n    //Ask for confirmation from the user showing the dates formatting them to dd of month formatting month in spanish\r\n    var firstDateFormatted = new Date(firstDate);\r\n    var finishDateFormatted = new Date(finishDate);\r\n\r\n    var confirmation = confirm(\"¿Está seguro que desea solicitar vacaciones desde el \" + firstDateFormatted.getDate() + \" de \" + firstDateFormatted.toLocaleString('es-ES', { month: 'long' }) + \" hasta el \" + finishDateFormatted.getDate() + \" de \" + finishDateFormatted.toLocaleString('es-ES', { month: 'long' }) + \"?\");\r\n    if (!confirmation) {\r\n        return;\r\n    }\r\n\r\n    // Storage the dates in the local storage\r\n    localStorage.setItem(\"firstDate\", firstDate);\r\n    localStorage.setItem(\"finishDate\", finishDate);\r\n\r\n    console.log(\"firstDate: \" + firstDate);\r\n    console.log(\"finishDate: \" + finishDate);\r\n\r\n    alert(\"Vacaciones solicitadas con éxito\");\r\n};\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU29saWNpdGFyVmFjYWNpb25lcy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEtBQThLLGVBQWUsMEdBQTBHLGVBQWU7QUFDdFQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9Tb2xpY2l0YXJWYWNhY2lvbmVzLmpzPzhiMGUiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZW5kRGF0YVwiKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vR2V0IHZhbHVlcyBmcm9tIHRoZSBmb3JtIG9uIFNvbGljaXRhclZhY2FjaW9uZXMuaHRtbFxyXG4gICAgdmFyIGZpcnN0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlyc3REYXRlXCIpLnZhbHVlO1xyXG4gICAgdmFyIGZpbmlzaERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbmlzaERhdGVcIikudmFsdWU7XHJcblxyXG4gICAgLy9DaGVjayBpZiB0aGUgZGF0ZXMgYXJlIHZhbGlkXHJcbiAgICBpZiAoZmlyc3REYXRlID09IFwiXCIgfHwgZmluaXNoRGF0ZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgYWxlcnQoXCJEZWJlIGluZ3Jlc2FyIGFtYmFzIGZlY2hhc1wiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKGZpcnN0RGF0ZSA+IGZpbmlzaERhdGUgfHwgZmlyc3REYXRlID09IGZpbmlzaERhdGUpIHtcclxuICAgICAgICBhbGVydChcIkxhIGZlY2hhIGRlIGluaWNpbyBubyBwdWVkZSBzZXIgbWF5b3IgbyBpZ3VhbCBhIGxhIGZlY2hhIGRlIGZpblwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy9Bc2sgZm9yIGNvbmZpcm1hdGlvbiBmcm9tIHRoZSB1c2VyIHNob3dpbmcgdGhlIGRhdGVzIGZvcm1hdHRpbmcgdGhlbSB0byBkZCBvZiBtb250aCBmb3JtYXR0aW5nIG1vbnRoIGluIHNwYW5pc2hcclxuICAgIHZhciBmaXJzdERhdGVGb3JtYXR0ZWQgPSBuZXcgRGF0ZShmaXJzdERhdGUpO1xyXG4gICAgdmFyIGZpbmlzaERhdGVGb3JtYXR0ZWQgPSBuZXcgRGF0ZShmaW5pc2hEYXRlKTtcclxuXHJcbiAgICB2YXIgY29uZmlybWF0aW9uID0gY29uZmlybShcIsK/RXN0w6Egc2VndXJvIHF1ZSBkZXNlYSBzb2xpY2l0YXIgdmFjYWNpb25lcyBkZXNkZSBlbCBcIiArIGZpcnN0RGF0ZUZvcm1hdHRlZC5nZXREYXRlKCkgKyBcIiBkZSBcIiArIGZpcnN0RGF0ZUZvcm1hdHRlZC50b0xvY2FsZVN0cmluZygnZXMtRVMnLCB7IG1vbnRoOiAnbG9uZycgfSkgKyBcIiBoYXN0YSBlbCBcIiArIGZpbmlzaERhdGVGb3JtYXR0ZWQuZ2V0RGF0ZSgpICsgXCIgZGUgXCIgKyBmaW5pc2hEYXRlRm9ybWF0dGVkLnRvTG9jYWxlU3RyaW5nKCdlcy1FUycsIHsgbW9udGg6ICdsb25nJyB9KSArIFwiP1wiKTtcclxuICAgIGlmICghY29uZmlybWF0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0b3JhZ2UgdGhlIGRhdGVzIGluIHRoZSBsb2NhbCBzdG9yYWdlXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZpcnN0RGF0ZVwiLCBmaXJzdERhdGUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmaW5pc2hEYXRlXCIsIGZpbmlzaERhdGUpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZmlyc3REYXRlOiBcIiArIGZpcnN0RGF0ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImZpbmlzaERhdGU6IFwiICsgZmluaXNoRGF0ZSk7XHJcblxyXG4gICAgYWxlcnQoXCJWYWNhY2lvbmVzIHNvbGljaXRhZGFzIGNvbiDDqXhpdG9cIik7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/SolicitarVacaciones.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/SolicitarVacaciones.js"]();
/******/ 	
/******/ })()
;