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

/***/ "./src/SolicitudEmergencia.js":
/*!************************************!*\
  !*** ./src/SolicitudEmergencia.js ***!
  \************************************/
/***/ (() => {

eval("document.getElementById(\"actionBtn\").onclick = function() {\r\n\r\n    var firstDate = document.getElementById(\"firstDate\").value; \r\n    var finishDate = document.getElementById(\"finishDate\").value; \r\n    var motivo = document.getElementById(\"motivo\").value;\r\n\r\n    //Check if the dates are valid\r\n    if (firstDate == \"\" || finishDate == \"\") {\r\n        alert(\"Debe ingresar ambas fechas\");\r\n        return;\r\n    } else if (firstDate > finishDate || firstDate == finishDate) {\r\n        alert(\"La fecha de inicio no puede ser mayor o igual a la fecha de fin\");\r\n        return;\r\n    }\r\n\r\n    //Ask for confirmation from the user showing the dates formatting them to dd of month formatting month in spanish\r\n    var firstDateFormatted = new Date(firstDate);\r\n    var finishDateFormatted = new Date(finishDate);\r\n\r\n    var confirmation = confirm(\"¿Está seguro que desea solicitar vacaciones desde el \" + firstDateFormatted.getDate() + \" de \" + firstDateFormatted.toLocaleString('es-ES', { month: 'long' }) + \" hasta el \" + finishDateFormatted.getDate() + \" de \" + finishDateFormatted.toLocaleString('es-ES', { month: 'long' }) + \"?\");\r\n    if (!confirmation) {\r\n        return;\r\n    }\r\n\r\n    // Storage the dates in the local storage\r\n    localStorage.setItem(\"firstDate\", firstDate);\r\n    localStorage.setItem(\"finishDate\", finishDate);\r\n    localStorage.setItem(\"motivo\", motivo);\r\n\r\n    console.log(\"firstDate: \" + firstDate);\r\n    console.log(\"finishDate: \" + finishDate);\r\n    console.log(\"motivo: \" + motivo);\r\n\r\n    alert(\"Vacaciones solicitadas con alta prioridad\");\r\n\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU29saWNpdHVkRW1lcmdlbmNpYS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEtBQThLLGVBQWUsMEdBQTBHLGVBQWU7QUFDdFQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvU29saWNpdHVkRW1lcmdlbmNpYS5qcz81YTgxIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aW9uQnRuXCIpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB2YXIgZmlyc3REYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXJzdERhdGVcIikudmFsdWU7IFxyXG4gICAgdmFyIGZpbmlzaERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbmlzaERhdGVcIikudmFsdWU7IFxyXG4gICAgdmFyIG1vdGl2byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW90aXZvXCIpLnZhbHVlO1xyXG5cclxuICAgIC8vQ2hlY2sgaWYgdGhlIGRhdGVzIGFyZSB2YWxpZFxyXG4gICAgaWYgKGZpcnN0RGF0ZSA9PSBcIlwiIHx8IGZpbmlzaERhdGUgPT0gXCJcIikge1xyXG4gICAgICAgIGFsZXJ0KFwiRGViZSBpbmdyZXNhciBhbWJhcyBmZWNoYXNcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmIChmaXJzdERhdGUgPiBmaW5pc2hEYXRlIHx8IGZpcnN0RGF0ZSA9PSBmaW5pc2hEYXRlKSB7XHJcbiAgICAgICAgYWxlcnQoXCJMYSBmZWNoYSBkZSBpbmljaW8gbm8gcHVlZGUgc2VyIG1heW9yIG8gaWd1YWwgYSBsYSBmZWNoYSBkZSBmaW5cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQXNrIGZvciBjb25maXJtYXRpb24gZnJvbSB0aGUgdXNlciBzaG93aW5nIHRoZSBkYXRlcyBmb3JtYXR0aW5nIHRoZW0gdG8gZGQgb2YgbW9udGggZm9ybWF0dGluZyBtb250aCBpbiBzcGFuaXNoXHJcbiAgICB2YXIgZmlyc3REYXRlRm9ybWF0dGVkID0gbmV3IERhdGUoZmlyc3REYXRlKTtcclxuICAgIHZhciBmaW5pc2hEYXRlRm9ybWF0dGVkID0gbmV3IERhdGUoZmluaXNoRGF0ZSk7XHJcblxyXG4gICAgdmFyIGNvbmZpcm1hdGlvbiA9IGNvbmZpcm0oXCLCv0VzdMOhIHNlZ3VybyBxdWUgZGVzZWEgc29saWNpdGFyIHZhY2FjaW9uZXMgZGVzZGUgZWwgXCIgKyBmaXJzdERhdGVGb3JtYXR0ZWQuZ2V0RGF0ZSgpICsgXCIgZGUgXCIgKyBmaXJzdERhdGVGb3JtYXR0ZWQudG9Mb2NhbGVTdHJpbmcoJ2VzLUVTJywgeyBtb250aDogJ2xvbmcnIH0pICsgXCIgaGFzdGEgZWwgXCIgKyBmaW5pc2hEYXRlRm9ybWF0dGVkLmdldERhdGUoKSArIFwiIGRlIFwiICsgZmluaXNoRGF0ZUZvcm1hdHRlZC50b0xvY2FsZVN0cmluZygnZXMtRVMnLCB7IG1vbnRoOiAnbG9uZycgfSkgKyBcIj9cIik7XHJcbiAgICBpZiAoIWNvbmZpcm1hdGlvbikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTdG9yYWdlIHRoZSBkYXRlcyBpbiB0aGUgbG9jYWwgc3RvcmFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmaXJzdERhdGVcIiwgZmlyc3REYXRlKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmluaXNoRGF0ZVwiLCBmaW5pc2hEYXRlKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibW90aXZvXCIsIG1vdGl2byk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJmaXJzdERhdGU6IFwiICsgZmlyc3REYXRlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZmluaXNoRGF0ZTogXCIgKyBmaW5pc2hEYXRlKTtcclxuICAgIGNvbnNvbGUubG9nKFwibW90aXZvOiBcIiArIG1vdGl2byk7XHJcblxyXG4gICAgYWxlcnQoXCJWYWNhY2lvbmVzIHNvbGljaXRhZGFzIGNvbiBhbHRhIHByaW9yaWRhZFwiKTtcclxuXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/SolicitudEmergencia.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/SolicitudEmergencia.js"]();
/******/ 	
/******/ })()
;