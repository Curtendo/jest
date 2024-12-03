/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Calculator: () => (/* binding */ Calculator),
/* harmony export */   analyzeArray: () => (/* binding */ analyzeArray),
/* harmony export */   caesarCipher: () => (/* binding */ caesarCipher),
/* harmony export */   capitalize: () => (/* binding */ capitalize),
/* harmony export */   reverse: () => (/* binding */ reverse)
/* harmony export */ });
function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1);
}

function reverse(text) {
  let reverseText = '';
  for (let i = text.length - 1; i >= 0; i--) {
    reverseText += text[i];
  }
  return reverseText;
}

function Calculator() {
  return {
    add(a, b) {
      return a + b;
    },

    subtract(a, b) {
      return a - b;
    },

    multiply(a, b) {
      return a * b;
    },

    divide(a, b) {
      return a / b;
    },
  };
}

function caesarCipher(text, shift) {
  let shiftedText = '';
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let ascii = char.charCodeAt(0);

    if (ascii >= 65 && ascii <= 90) {  // Check Uppercase
      ascii = ((ascii - 65 + shift) % 26) + 65;
    } else if (ascii >= 97 && ascii <= 122) {  // Check Lowercase
      ascii = ((ascii - 97 + shift) % 26) + 97;
    }

    char = String.fromCharCode(ascii);
    shiftedText += char;
  }

  return shiftedText;
}

function analyzeArray(array) {
  let object = {
    average: null,
    min: null,
    max: null,
    length: null
  };
  
  // length
  const length = array.length;
  object.length = length;

  // average
  const totalSum = array.reduce((total, item) => {
    return total += item;
  }, 0)
  object.average = totalSum / length;

  // min and max
  const sortedArray = array.toSorted(function (a, b) { return a - b });
  object.min = sortedArray[0];
  object.max = sortedArray[length - 1];

  return object;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGdDQUFnQyxRQUFRO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTs7QUFFQSx1Q0FBdUM7QUFDdkM7QUFDQSxNQUFNLHlDQUF5QztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtd2VicGFjay1lc2xpbnQtcHJldHRpZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanMtd2VicGFjay1lc2xpbnQtcHJldHRpZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzLXdlYnBhY2stZXNsaW50LXByZXR0aWVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanMtd2VicGFjay1lc2xpbnQtcHJldHRpZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcy13ZWJwYWNrLWVzbGludC1wcmV0dGllci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplKHRleHQpIHtcbiAgcmV0dXJuIHRleHRbMF0udG9VcHBlckNhc2UoKSArIHRleHQuc2xpY2UoMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlKHRleHQpIHtcbiAgbGV0IHJldmVyc2VUZXh0ID0gJyc7XG4gIGZvciAobGV0IGkgPSB0ZXh0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgcmV2ZXJzZVRleHQgKz0gdGV4dFtpXTtcbiAgfVxuICByZXR1cm4gcmV2ZXJzZVRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYWxjdWxhdG9yKCkge1xuICByZXR1cm4ge1xuICAgIGFkZChhLCBiKSB7XG4gICAgICByZXR1cm4gYSArIGI7XG4gICAgfSxcblxuICAgIHN1YnRyYWN0KGEsIGIpIHtcbiAgICAgIHJldHVybiBhIC0gYjtcbiAgICB9LFxuXG4gICAgbXVsdGlwbHkoYSwgYikge1xuICAgICAgcmV0dXJuIGEgKiBiO1xuICAgIH0sXG5cbiAgICBkaXZpZGUoYSwgYikge1xuICAgICAgcmV0dXJuIGEgLyBiO1xuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWVzYXJDaXBoZXIodGV4dCwgc2hpZnQpIHtcbiAgbGV0IHNoaWZ0ZWRUZXh0ID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjaGFyID0gdGV4dFtpXTtcbiAgICBsZXQgYXNjaWkgPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG5cbiAgICBpZiAoYXNjaWkgPj0gNjUgJiYgYXNjaWkgPD0gOTApIHsgIC8vIENoZWNrIFVwcGVyY2FzZVxuICAgICAgYXNjaWkgPSAoKGFzY2lpIC0gNjUgKyBzaGlmdCkgJSAyNikgKyA2NTtcbiAgICB9IGVsc2UgaWYgKGFzY2lpID49IDk3ICYmIGFzY2lpIDw9IDEyMikgeyAgLy8gQ2hlY2sgTG93ZXJjYXNlXG4gICAgICBhc2NpaSA9ICgoYXNjaWkgLSA5NyArIHNoaWZ0KSAlIDI2KSArIDk3O1xuICAgIH1cblxuICAgIGNoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFzY2lpKTtcbiAgICBzaGlmdGVkVGV4dCArPSBjaGFyO1xuICB9XG5cbiAgcmV0dXJuIHNoaWZ0ZWRUZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5hbHl6ZUFycmF5KGFycmF5KSB7XG4gIGxldCBvYmplY3QgPSB7XG4gICAgYXZlcmFnZTogbnVsbCxcbiAgICBtaW46IG51bGwsXG4gICAgbWF4OiBudWxsLFxuICAgIGxlbmd0aDogbnVsbFxuICB9O1xuICBcbiAgLy8gbGVuZ3RoXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgb2JqZWN0Lmxlbmd0aCA9IGxlbmd0aDtcblxuICAvLyBhdmVyYWdlXG4gIGNvbnN0IHRvdGFsU3VtID0gYXJyYXkucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4ge1xuICAgIHJldHVybiB0b3RhbCArPSBpdGVtO1xuICB9LCAwKVxuICBvYmplY3QuYXZlcmFnZSA9IHRvdGFsU3VtIC8gbGVuZ3RoO1xuXG4gIC8vIG1pbiBhbmQgbWF4XG4gIGNvbnN0IHNvcnRlZEFycmF5ID0gYXJyYXkudG9Tb3J0ZWQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgLSBiIH0pO1xuICBvYmplY3QubWluID0gc29ydGVkQXJyYXlbMF07XG4gIG9iamVjdC5tYXggPSBzb3J0ZWRBcnJheVtsZW5ndGggLSAxXTtcblxuICByZXR1cm4gb2JqZWN0O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9