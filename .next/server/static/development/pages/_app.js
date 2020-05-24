module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n");

/***/ }),

/***/ "./actions.js":
/*!********************!*\
  !*** ./actions.js ***!
  \********************/
/*! exports provided: actionTypes, failure, loadLeagues, loadSeasons, loadLineup, loadFixtures, loadLeaguesSuccess, loadLineupSuccess, loadSeasonsSuccess, loadFixturesSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actionTypes\", function() { return actionTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"failure\", function() { return failure; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadLeagues\", function() { return loadLeagues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSeasons\", function() { return loadSeasons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadLineup\", function() { return loadLineup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadFixtures\", function() { return loadFixtures; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadLeaguesSuccess\", function() { return loadLeaguesSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadLineupSuccess\", function() { return loadLineupSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSeasonsSuccess\", function() { return loadSeasonsSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadFixturesSuccess\", function() { return loadFixturesSuccess; });\nconst actionTypes = {\n  FAILURE: 'FAILURE',\n  LOAD_LEAGUES: 'LOAD_LEAGUES',\n  LOAD_LEAGUES_SUCCESS: 'LOAD_LEAGUES_SUCCESS',\n  LOAD_SEASONS: 'LOAD_SEASONS',\n  LOAD_SEASONS_SUCCESS: 'LOAD_SEASONS_SUCCESS',\n  LOAD_FIXTURES_SUCCESS: 'LOAD_FIXTURES_SUCCESS',\n  LOAD_FIXTURES: 'LOAD_FIXTURES',\n  LOAD_LINEUP_SUCCESS: 'LOAD_LINEUP_SUCCESS',\n  LOAD_LINEUP: 'LOAD_LINEUP'\n};\nconst failure = error => {\n  return {\n    type: actionTypes.FAILURE,\n    error\n  };\n};\nconst loadLeagues = () => {\n  return {\n    type: actionTypes.LOAD_LEAGUES\n  };\n};\nconst loadSeasons = id => {\n  return {\n    type: actionTypes.LOAD_SEASONS,\n    payload: id\n  };\n};\nconst loadLineup = id => {\n  return {\n    type: actionTypes.LOAD_LINEUP,\n    payload: id\n  };\n};\nconst loadFixtures = (leagueId, id) => {\n  return {\n    type: actionTypes.LOAD_FIXTURES,\n    payload: {\n      \"idLeague\": leagueId,\n      \"yearSeason\": id\n    }\n  };\n};\nconst loadLeaguesSuccess = data => {\n  return {\n    type: actionTypes.LOAD_LEAGUES_SUCCESS,\n    data\n  };\n};\nconst loadLineupSuccess = data => {\n  return {\n    type: actionTypes.LOAD_LINEUP_SUCCESS,\n    data\n  };\n};\nconst loadSeasonsSuccess = data => {\n  return {\n    type: actionTypes.LOAD_SEASONS_SUCCESS,\n    data\n  };\n};\nconst loadFixturesSuccess = data => {\n  return {\n    type: actionTypes.LOAD_FIXTURES_SUCCESS,\n    data\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zLmpzP2MzY2YiXSwibmFtZXMiOlsiYWN0aW9uVHlwZXMiLCJGQUlMVVJFIiwiTE9BRF9MRUFHVUVTIiwiTE9BRF9MRUFHVUVTX1NVQ0NFU1MiLCJMT0FEX1NFQVNPTlMiLCJMT0FEX1NFQVNPTlNfU1VDQ0VTUyIsIkxPQURfRklYVFVSRVNfU1VDQ0VTUyIsIkxPQURfRklYVFVSRVMiLCJMT0FEX0xJTkVVUF9TVUNDRVNTIiwiTE9BRF9MSU5FVVAiLCJmYWlsdXJlIiwiZXJyb3IiLCJ0eXBlIiwibG9hZExlYWd1ZXMiLCJsb2FkU2Vhc29ucyIsImlkIiwicGF5bG9hZCIsImxvYWRMaW5ldXAiLCJsb2FkRml4dHVyZXMiLCJsZWFndWVJZCIsImxvYWRMZWFndWVzU3VjY2VzcyIsImRhdGEiLCJsb2FkTGluZXVwU3VjY2VzcyIsImxvYWRTZWFzb25zU3VjY2VzcyIsImxvYWRGaXh0dXJlc1N1Y2Nlc3MiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxXQUFXLEdBQUc7QUFDekJDLFNBQU8sRUFBRSxTQURnQjtBQUV6QkMsY0FBWSxFQUFFLGNBRlc7QUFHekJDLHNCQUFvQixFQUFFLHNCQUhHO0FBSXpCQyxjQUFZLEVBQUUsY0FKVztBQUt6QkMsc0JBQW9CLEVBQUUsc0JBTEc7QUFNekJDLHVCQUFxQixFQUFFLHVCQU5FO0FBT3pCQyxlQUFhLEVBQUUsZUFQVTtBQVF6QkMscUJBQW1CLEVBQUUscUJBUkk7QUFTekJDLGFBQVcsRUFBRTtBQVRZLENBQXBCO0FBWUEsTUFBTUMsT0FBTyxHQUFJQyxLQUFELElBQVc7QUFDaEMsU0FBTztBQUNMQyxRQUFJLEVBQUVaLFdBQVcsQ0FBQ0MsT0FEYjtBQUVMVTtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBT0EsTUFBTUUsV0FBVyxHQUFHLE1BQU07QUFDL0IsU0FBTztBQUFFRCxRQUFJLEVBQUVaLFdBQVcsQ0FBQ0U7QUFBcEIsR0FBUDtBQUNELENBRk07QUFJQSxNQUFNWSxXQUFXLEdBQUlDLEVBQUQsSUFBTztBQUNoQyxTQUFPO0FBQ0xILFFBQUksRUFBRVosV0FBVyxDQUFDSSxZQURiO0FBRUxZLFdBQU8sRUFBRUQ7QUFGSixHQUFQO0FBSUQsQ0FMTTtBQU9BLE1BQU1FLFVBQVUsR0FBSUYsRUFBRCxJQUFPO0FBQy9CLFNBQU87QUFDTEgsUUFBSSxFQUFFWixXQUFXLENBQUNTLFdBRGI7QUFFTE8sV0FBTyxFQUFFRDtBQUZKLEdBQVA7QUFJRCxDQUxNO0FBT0EsTUFBTUcsWUFBWSxHQUFHLENBQUNDLFFBQUQsRUFBV0osRUFBWCxLQUFpQjtBQUMzQyxTQUFPO0FBQ0xILFFBQUksRUFBRVosV0FBVyxDQUFDTyxhQURiO0FBRUxTLFdBQU8sRUFBRTtBQUNQLGtCQUFZRyxRQURMO0FBRVAsb0JBQWNKO0FBRlA7QUFGSixHQUFQO0FBT0QsQ0FSTTtBQVVBLE1BQU1LLGtCQUFrQixHQUFJQyxJQUFELElBQVU7QUFDMUMsU0FBTztBQUNMVCxRQUFJLEVBQUVaLFdBQVcsQ0FBQ0csb0JBRGI7QUFFTGtCO0FBRkssR0FBUDtBQUlELENBTE07QUFPQSxNQUFNQyxpQkFBaUIsR0FBSUQsSUFBRCxJQUFVO0FBQ3pDLFNBQU87QUFDTFQsUUFBSSxFQUFFWixXQUFXLENBQUNRLG1CQURiO0FBRUxhO0FBRkssR0FBUDtBQUlELENBTE07QUFPQSxNQUFNRSxrQkFBa0IsR0FBSUYsSUFBRCxJQUFVO0FBQzFDLFNBQU87QUFDTFQsUUFBSSxFQUFFWixXQUFXLENBQUNLLG9CQURiO0FBRUxnQjtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBT0EsTUFBTUcsbUJBQW1CLEdBQUlILElBQUQsSUFBVTtBQUMzQyxTQUFPO0FBQ0xULFFBQUksRUFBRVosV0FBVyxDQUFDTSxxQkFEYjtBQUVMZTtBQUZLLEdBQVA7QUFJRCxDQUxNIiwiZmlsZSI6Ii4vYWN0aW9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcbiAgRkFJTFVSRTogJ0ZBSUxVUkUnLFxuICBMT0FEX0xFQUdVRVM6ICdMT0FEX0xFQUdVRVMnLFxuICBMT0FEX0xFQUdVRVNfU1VDQ0VTUzogJ0xPQURfTEVBR1VFU19TVUNDRVNTJyxcbiAgTE9BRF9TRUFTT05TOiAnTE9BRF9TRUFTT05TJyxcbiAgTE9BRF9TRUFTT05TX1NVQ0NFU1M6ICdMT0FEX1NFQVNPTlNfU1VDQ0VTUycsXG4gIExPQURfRklYVFVSRVNfU1VDQ0VTUzogJ0xPQURfRklYVFVSRVNfU1VDQ0VTUycsXG4gIExPQURfRklYVFVSRVM6ICdMT0FEX0ZJWFRVUkVTJyxcbiAgTE9BRF9MSU5FVVBfU1VDQ0VTUzogJ0xPQURfTElORVVQX1NVQ0NFU1MnLFxuICBMT0FEX0xJTkVVUDogJ0xPQURfTElORVVQJyxcbn1cblxuZXhwb3J0IGNvbnN0IGZhaWx1cmUgPSAoZXJyb3IpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5GQUlMVVJFLFxuICAgIGVycm9yLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkTGVhZ3VlcyA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTE9BRF9MRUFHVUVTIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRTZWFzb25zID0gKGlkKSA9PntcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5MT0FEX1NFQVNPTlMsXG4gICAgcGF5bG9hZDogaWQsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRMaW5ldXAgPSAoaWQpID0+e1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLkxPQURfTElORVVQLFxuICAgIHBheWxvYWQ6IGlkLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkRml4dHVyZXMgPSAobGVhZ3VlSWQsIGlkKSA9PntcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5MT0FEX0ZJWFRVUkVTLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIFwiaWRMZWFndWVcIjogbGVhZ3VlSWQsXG4gICAgICBcInllYXJTZWFzb25cIjogaWQsXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9hZExlYWd1ZXNTdWNjZXNzID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5MT0FEX0xFQUdVRVNfU1VDQ0VTUyxcbiAgICBkYXRhLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkTGluZXVwU3VjY2VzcyA9IChkYXRhKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuTE9BRF9MSU5FVVBfU1VDQ0VTUyxcbiAgICBkYXRhLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkU2Vhc29uc1N1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLkxPQURfU0VBU09OU19TVUNDRVNTLFxuICAgIGRhdGEsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRGaXh0dXJlc1N1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLkxPQURfRklYVFVSRVNfU1VDQ0VTUyxcbiAgICBkYXRhLFxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./actions.js\n");

/***/ }),

/***/ "./assets/style.css":
/*!**************************!*\
  !*** ./assets/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2Fzc2V0cy9zdHlsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/style.css\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/NGVhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.Container = Container;\nexports.createUrl = createUrl;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  // Kept here for backwards compatibility.\n  // When someone ended App they could call `super.componentDidCatch`.\n  // @deprecated This method is no longer needed. Errors are caught at the top level\n  componentDidCatch(error, _errorInfo) {\n    throw error;\n  }\n\n  render() {\n    const {\n      router,\n      Component,\n      pageProps,\n      __N_SSG,\n      __N_SSP\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy\n    // methods like getStaticProps and getServerSideProps\n    !(__N_SSG || __N_SSP) ? {\n      url: createUrl(router)\n    } : {}));\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nlet warnContainer;\nlet warnUrl;\n\nif (true) {\n  warnContainer = (0, _utils.execOnce)(() => {\n    console.warn(`Warning: the \\`Container\\` in \\`_app\\` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated`);\n  });\n  warnUrl = (0, _utils.execOnce)(() => {\n    console.error(`Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated`);\n  });\n} // @deprecated noop for now until removal\n\n\nfunction Container(p) {\n  if (true) warnContainer();\n  return p.children;\n}\n\nfunction createUrl(router) {\n  // This is to make sure we don't references the router object at call time\n  const {\n    pathname,\n    asPath,\n    query\n  } = router;\n  return {\n    get query() {\n      if (true) warnUrl();\n      return query;\n    },\n\n    get pathname() {\n      if (true) warnUrl();\n      return pathname;\n    },\n\n    get asPath() {\n      if (true) warnUrl();\n      return asPath;\n    },\n\n    back: () => {\n      if (true) warnUrl();\n      router.back();\n    },\n    push: (url, as) => {\n      if (true) warnUrl();\n      return router.push(url, as);\n    },\n    pushTo: (href, as) => {\n      if (true) warnUrl();\n      const pushRoute = as ? href : '';\n      const pushUrl = as || href;\n      return router.push(pushRoute, pushUrl);\n    },\n    replace: (url, as) => {\n      if (true) warnUrl();\n      return router.replace(url, as);\n    },\n    replaceTo: (href, as) => {\n      if (true) warnUrl();\n      const replaceRoute = as ? href : '';\n      const replaceUrl = as || href;\n      return router.replace(replaceRoute, replaceUrl);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3g/MmMzNSJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7OztBQWVBOzs7OztBQUlBLGtDQUFrQztBQUFBO0FBQWxDO0FBQWtDLENBQWxDLEVBR3lDO0FBQ3ZDLFFBQU1BLFNBQVMsR0FBRyxNQUFNLDJDQUF4QixHQUF3QixDQUF4QjtBQUNBLFNBQU87QUFBUDtBQUFPLEdBQVA7QUFHYTs7QUFBQSxrQkFBMkNDLGVBQU1DLFNBQWpELENBR2I7QUFJQTtBQUNBO0FBQ0E7QUFDQUMsbUJBQWlCLG9CQUE0QztBQUMzRDtBQUdGQzs7QUFBQUEsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFxRCxLQUEzRDtBQUdBLHdCQUNFLHFFQUdJO0FBQ0E7QUFDSSxNQUFFQyxPQUFPLElBQVQsV0FBd0I7QUFBRUMsU0FBRyxFQUFFQyxTQUFTLENBQXhDLE1BQXdDO0FBQWhCLEtBQXhCLEdBTlYsRUFDRSxFQURGO0FBZkY7O0FBQUE7OztBQUhtQkMsRyxDQUlaQyxtQkFKWUQsR0FJVUUsa0JBSlZGO0FBQUFBLEcsQ0FLWkcsZUFMWUgsR0FLTUUsa0JBTE5GO0FBK0JyQjtBQUNBOztBQUVBLFVBQTJDO0FBQ3pDSSxlQUFhLEdBQUcscUJBQVMsTUFBTTtBQUM3QkMsV0FBTyxDQUFQQTtBQURGRCxHQUFnQixDQUFoQkE7QUFNQUUsU0FBTyxHQUFHLHFCQUFTLE1BQU07QUFDdkJELFdBQU8sQ0FBUEE7QUFERkMsR0FBVSxDQUFWQTtBQU9GLEMsQ0FBQTs7O0FBQ08sc0JBQTJCO0FBQ2hDLFlBQTJDRixhQUFhO0FBQ3hELFNBQU9HLENBQUMsQ0FBUjtBQUdLOztBQUFBLDJCQUFtQztBQUN4QztBQUNBLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFOO0FBQ0EsU0FBTztBQUNMLGdCQUFZO0FBQ1YsZ0JBQTJDRCxPQUFPO0FBQ2xEO0FBSEc7O0FBS0wsbUJBQWU7QUFDYixnQkFBMkNBLE9BQU87QUFDbEQ7QUFQRzs7QUFTTCxpQkFBYTtBQUNYLGdCQUEyQ0EsT0FBTztBQUNsRDtBQVhHOztBQWFMRSxRQUFJLEVBQUUsTUFBTTtBQUNWLGdCQUEyQ0YsT0FBTztBQUNsREcsWUFBTSxDQUFOQTtBQWZHO0FBaUJMQyxRQUFJLEVBQUUsYUFBOEI7QUFDbEMsZ0JBQTJDSixPQUFPO0FBQ2xELGFBQU9HLE1BQU0sQ0FBTkEsVUFBUCxFQUFPQSxDQUFQO0FBbkJHO0FBcUJMRSxVQUFNLEVBQUUsY0FBK0I7QUFDckMsZ0JBQTJDTCxPQUFPO0FBQ2xELFlBQU1NLFNBQVMsR0FBR0MsRUFBRSxVQUFwQjtBQUNBLFlBQU1DLE9BQU8sR0FBR0QsRUFBRSxJQUFsQjtBQUVBLGFBQU9KLE1BQU0sQ0FBTkEsZ0JBQVAsT0FBT0EsQ0FBUDtBQTFCRztBQTRCTE0sV0FBTyxFQUFFLGFBQThCO0FBQ3JDLGdCQUEyQ1QsT0FBTztBQUNsRCxhQUFPRyxNQUFNLENBQU5BLGFBQVAsRUFBT0EsQ0FBUDtBQTlCRztBQWdDTE8sYUFBUyxFQUFFLGNBQStCO0FBQ3hDLGdCQUEyQ1YsT0FBTztBQUNsRCxZQUFNVyxZQUFZLEdBQUdKLEVBQUUsVUFBdkI7QUFDQSxZQUFNSyxVQUFVLEdBQUdMLEVBQUUsSUFBckI7QUFFQSxhQUFPSixNQUFNLENBQU5BLHNCQUFQLFVBQU9BLENBQVA7QUFyQ0o7QUFBTyxHQUFQO0FBd0NEIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-saga */ \"next-redux-saga\");\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/style.css */ \"./assets/style.css\");\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_style_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ \"./store.js\");\nvar _jsxFileName = \"/home/gr/Work/TestReact/test-sport-appREP/sportTest/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\nclass MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {\n  static async getInitialProps({\n    Component,\n    ctx\n  }) {\n    let pageProps = {};\n\n    if (Component.getInitialProps) {\n      pageProps = await Component.getInitialProps({\n        ctx\n      });\n    }\n\n    return {\n      pageProps\n    };\n  }\n\n  render() {\n    const {\n      Component,\n      pageProps,\n      store\n    } = this.props;\n    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n      store: store,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 7\n      }\n    }, __jsx(Component, _extends({}, pageProps, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }\n    })));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default()(MyApp)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJBcHAiLCJnZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJyZW5kZXIiLCJzdG9yZSIsInByb3BzIiwid2l0aFJlZHV4IiwiY3JlYXRlU3RvcmUiLCJ3aXRoUmVkdXhTYWdhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFOLFNBQW9CQywrQ0FBcEIsQ0FBd0I7QUFDdEIsZUFBYUMsZUFBYixDQUE2QjtBQUFFQyxhQUFGO0FBQWFDO0FBQWIsR0FBN0IsRUFBaUQ7QUFDL0MsUUFBSUMsU0FBUyxHQUFHLEVBQWhCOztBQUNBLFFBQUlGLFNBQVMsQ0FBQ0QsZUFBZCxFQUErQjtBQUM3QkcsZUFBUyxHQUFHLE1BQU1GLFNBQVMsQ0FBQ0QsZUFBVixDQUEwQjtBQUFFRTtBQUFGLE9BQTFCLENBQWxCO0FBQ0Q7O0FBRUQsV0FBTztBQUFFQztBQUFGLEtBQVA7QUFDRDs7QUFFREMsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFSCxlQUFGO0FBQWFFLGVBQWI7QUFBd0JFO0FBQXhCLFFBQWtDLEtBQUtDLEtBQTdDO0FBRUEsV0FDRSxNQUFDLG9EQUFEO0FBQVUsV0FBSyxFQUFFRCxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxTQUFELGVBQWVGLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGLENBREY7QUFLRDs7QUFsQnFCOztBQXFCVEksd0hBQVMsQ0FBQ0MsOENBQUQsQ0FBVCxDQUF1QkMsc0RBQWEsQ0FBQ1gsS0FBRCxDQUFwQyxDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQgd2l0aFJlZHV4U2FnYSBmcm9tICduZXh0LXJlZHV4LXNhZ2EnXG5pbXBvcnQgXCIuLi9hc3NldHMvc3R5bGUuY3NzXCJcbmltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuLi9zdG9yZSdcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xuICAgIGxldCBwYWdlUHJvcHMgPSB7fVxuICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKHsgY3R4IH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCBzdG9yZSB9ID0gdGhpcy5wcm9wc1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9Qcm92aWRlcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGNyZWF0ZVN0b3JlKSh3aXRoUmVkdXhTYWdhKE15QXBwKSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducer.js":
/*!********************!*\
  !*** ./reducer.js ***!
  \********************/
/*! exports provided: exampleInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exampleInitialState\", function() { return exampleInitialState; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./actions.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst exampleInitialState = {\n  leaguesData: null,\n  seasonsData: null,\n  fixtureData: null,\n  lineupData: null,\n  error: false,\n  leagueInfo: {\n    status: false,\n    id: null\n  },\n  seasonInfo: {\n    status: false,\n    id: null\n  },\n  fixtureInfo: {\n    status: false,\n    id: null\n  }\n};\n\nfunction reducer(state = exampleInitialState, action) {\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"actionTypes\"].FAILURE:\n      return _objectSpread(_objectSpread({}, state), {\n        error: action.error\n      });\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"actionTypes\"].LOAD_LEAGUES_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {\n        leaguesData: action.data\n      });\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"actionTypes\"].LOAD_FIXTURES_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {\n        fixtureData: action.data,\n        seasonInfo: {\n          status: true,\n          id: action.payload.yearSeason\n        }\n      });\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"actionTypes\"].LOAD_LINEUP_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {\n        lineupData: action.data,\n        fixtureInfo: {\n          status: true,\n          id: action.payload\n        }\n      });\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"actionTypes\"].LOAD_SEASONS_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {\n        seasonsData: action.data,\n        leagueInfo: {\n          status: true,\n          id: action.payload\n        }\n      });\n\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2VyLmpzP2YwZDIiXSwibmFtZXMiOlsiZXhhbXBsZUluaXRpYWxTdGF0ZSIsImxlYWd1ZXNEYXRhIiwic2Vhc29uc0RhdGEiLCJmaXh0dXJlRGF0YSIsImxpbmV1cERhdGEiLCJlcnJvciIsImxlYWd1ZUluZm8iLCJzdGF0dXMiLCJpZCIsInNlYXNvbkluZm8iLCJmaXh0dXJlSW5mbyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJhY3Rpb25UeXBlcyIsIkZBSUxVUkUiLCJMT0FEX0xFQUdVRVNfU1VDQ0VTUyIsImRhdGEiLCJMT0FEX0ZJWFRVUkVTX1NVQ0NFU1MiLCJwYXlsb2FkIiwieWVhclNlYXNvbiIsIkxPQURfTElORVVQX1NVQ0NFU1MiLCJMT0FEX1NFQVNPTlNfU1VDQ0VTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxtQkFBbUIsR0FBRztBQUNqQ0MsYUFBVyxFQUFFLElBRG9CO0FBRWpDQyxhQUFXLEVBQUUsSUFGb0I7QUFHakNDLGFBQVcsRUFBRSxJQUhvQjtBQUlqQ0MsWUFBVSxFQUFFLElBSnFCO0FBS2pDQyxPQUFLLEVBQUUsS0FMMEI7QUFNakNDLFlBQVUsRUFBRTtBQUNWQyxVQUFNLEVBQUUsS0FERTtBQUVWQyxNQUFFLEVBQUU7QUFGTSxHQU5xQjtBQVVqQ0MsWUFBVSxFQUFFO0FBQ1ZGLFVBQU0sRUFBRSxLQURFO0FBRVZDLE1BQUUsRUFBRTtBQUZNLEdBVnFCO0FBY2pDRSxhQUFXLEVBQUU7QUFDWEgsVUFBTSxFQUFFLEtBREc7QUFFWEMsTUFBRSxFQUFFO0FBRk87QUFkb0IsQ0FBNUI7O0FBb0JQLFNBQVNHLE9BQVQsQ0FBaUJDLEtBQUssR0FBR1osbUJBQXpCLEVBQThDYSxNQUE5QyxFQUFzRDtBQUVwRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQyxvREFBVyxDQUFDQyxPQUFqQjtBQUNFLDZDQUNLSixLQURMLEdBRUs7QUFBRVAsYUFBSyxFQUFFUSxNQUFNLENBQUNSO0FBQWhCLE9BRkw7O0FBTUYsU0FBS1Usb0RBQVcsQ0FBQ0Usb0JBQWpCO0FBQ0UsNkNBQ0tMLEtBREwsR0FFSztBQUFFWCxtQkFBVyxFQUFFWSxNQUFNLENBQUNLO0FBQXRCLE9BRkw7O0FBS0YsU0FBS0gsb0RBQVcsQ0FBQ0kscUJBQWpCO0FBQ0UsNkNBQ0tQLEtBREwsR0FFSztBQUFFVCxtQkFBVyxFQUFFVSxNQUFNLENBQUNLLElBQXRCO0FBQTRCVCxrQkFBVSxFQUFFO0FBQUNGLGdCQUFNLEVBQUUsSUFBVDtBQUFlQyxZQUFFLEVBQUVLLE1BQU0sQ0FBQ08sT0FBUCxDQUFlQztBQUFsQztBQUF4QyxPQUZMOztBQUtGLFNBQUtOLG9EQUFXLENBQUNPLG1CQUFqQjtBQUNFLDZDQUNLVixLQURMLEdBRUs7QUFBRVIsa0JBQVUsRUFBRVMsTUFBTSxDQUFDSyxJQUFyQjtBQUEyQlIsbUJBQVcsRUFBRTtBQUFDSCxnQkFBTSxFQUFFLElBQVQ7QUFBZUMsWUFBRSxFQUFFSyxNQUFNLENBQUNPO0FBQTFCO0FBQXhDLE9BRkw7O0FBS0YsU0FBS0wsb0RBQVcsQ0FBQ1Esb0JBQWpCO0FBQ0UsNkNBQ0tYLEtBREwsR0FFSztBQUFFVixtQkFBVyxFQUFFVyxNQUFNLENBQUNLLElBQXRCO0FBQTRCWixrQkFBVSxFQUFFO0FBQUNDLGdCQUFNLEVBQUUsSUFBVDtBQUFlQyxZQUFFLEVBQUVLLE1BQU0sQ0FBQ087QUFBMUI7QUFBeEMsT0FGTDs7QUFLRjtBQUNFLGFBQU9SLEtBQVA7QUFqQ0o7QUFtQ0Q7O0FBRWNELHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb25zJ1xuXG5leHBvcnQgY29uc3QgZXhhbXBsZUluaXRpYWxTdGF0ZSA9IHtcbiAgbGVhZ3Vlc0RhdGE6IG51bGwsXG4gIHNlYXNvbnNEYXRhOiBudWxsLFxuICBmaXh0dXJlRGF0YTogbnVsbCxcbiAgbGluZXVwRGF0YTogbnVsbCxcbiAgZXJyb3I6IGZhbHNlLFxuICBsZWFndWVJbmZvOiB7XG4gICAgc3RhdHVzOiBmYWxzZSxcbiAgICBpZDogbnVsbFxuICB9LFxuICBzZWFzb25JbmZvOiB7XG4gICAgc3RhdHVzOiBmYWxzZSxcbiAgICBpZDogbnVsbFxuICB9LFxuICBmaXh0dXJlSW5mbzoge1xuICAgIHN0YXR1czogZmFsc2UsXG4gICAgaWQ6IG51bGxcbiAgfSxcbn1cblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGV4YW1wbGVJbml0aWFsU3RhdGUsIGFjdGlvbikge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGFjdGlvblR5cGVzLkZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4ueyBlcnJvcjogYWN0aW9uLmVycm9yIH0sXG4gICAgICB9XG5cblxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9BRF9MRUFHVUVTX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4ueyBsZWFndWVzRGF0YTogYWN0aW9uLmRhdGEgfSxcbiAgICAgIH1cblxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9BRF9GSVhUVVJFU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLnsgZml4dHVyZURhdGE6IGFjdGlvbi5kYXRhLCBzZWFzb25JbmZvOiB7c3RhdHVzOiB0cnVlLCBpZDogYWN0aW9uLnBheWxvYWQueWVhclNlYXNvbiB9IH0sXG4gICAgICB9XG5cbiAgICBjYXNlIGFjdGlvblR5cGVzLkxPQURfTElORVVQX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4ueyBsaW5ldXBEYXRhOiBhY3Rpb24uZGF0YSwgZml4dHVyZUluZm86IHtzdGF0dXM6IHRydWUsIGlkOiBhY3Rpb24ucGF5bG9hZCB9IH0sXG4gICAgICB9XG5cbiAgICBjYXNlIGFjdGlvblR5cGVzLkxPQURfU0VBU09OU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLnsgc2Vhc29uc0RhdGE6IGFjdGlvbi5kYXRhLCBsZWFndWVJbmZvOiB7c3RhdHVzOiB0cnVlLCBpZDogYWN0aW9uLnBheWxvYWQgfSB9LFxuICAgICAgfVxuICAgIFxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducer.js\n");

/***/ }),

/***/ "./saga.js":
/*!*****************!*\
  !*** ./saga.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! es6-promise */ \"es6-promise\");\n/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ \"./actions.js\");\n\n\n\nes6_promise__WEBPACK_IMPORTED_MODULE_1___default.a.polyfill();\n\nfunction* loadLeaguesSaga() {\n  try {\n    const res = yield fetch('https://v3.football.api-sports.io/leagues', {\n      \"method\": \"GET\",\n      \"headers\": {\n        \"x-rapidapi-host\": \"v3.football.api-sports.io\",\n        \"x-rapidapi-key\": `${process.env.x_rapidapi_key}`\n      }\n    });\n    const data = yield res.json();\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"loadLeaguesSuccess\"])(data));\n  } catch (err) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"failure\"])(err));\n  }\n}\n\nfunction* loadSeasonsSaga(action) {\n  try {\n    const res = yield fetch('https://v3.football.api-sports.io/leagues?id=' + action.payload, {\n      \"method\": \"GET\",\n      \"headers\": {\n        \"x-rapidapi-host\": \"v3.football.api-sports.io\",\n        \"x-rapidapi-key\": `${process.env.x_rapidapi_key}`,\n        'Accept': 'application/json',\n        'Content-Type': 'application/json',\n        'Access-Control-Allow-Origin': \"*\"\n      }\n    });\n    const data = yield res.json();\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"loadSeasonsSuccess\"])(data));\n  } catch (err) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"failure\"])(err));\n  }\n}\n\nfunction* loadFixturesSaga(action) {\n  try {\n    const res = yield fetch('https://v3.football.api-sports.io/fixtures?league=' + action.payload.idLeague + '&season=' + action.payload.yearSeason, {\n      \"method\": \"GET\",\n      \"headers\": {\n        \"x-rapidapi-host\": \"v3.football.api-sports.io\",\n        \"x-rapidapi-key\": `${process.env.x_rapidapi_key}`,\n        'Accept': 'application/json',\n        'Content-Type': 'application/json',\n        'Access-Control-Allow-Origin': \"*\"\n      }\n    });\n    const data = yield res.json();\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"loadFixturesSuccess\"])(data));\n  } catch (err) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"failure\"])(err));\n  }\n}\n\nfunction* loadLineupSaga(action) {\n  try {\n    const res = yield fetch('https://v3.football.api-sports.io/fixtures/lineups?fixture=' + action.payload, {\n      \"method\": \"GET\",\n      \"headers\": {\n        \"x-rapidapi-host\": \"v3.football.api-sports.io\",\n        \"x-rapidapi-key\": `${process.env.x_rapidapi_key}`,\n        'Accept': 'application/json',\n        'Content-Type': 'application/json',\n        'Access-Control-Allow-Origin': \"*\"\n      }\n    });\n    const data = yield res.json();\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"loadLineupSuccess\"])(data));\n  } catch (err) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"failure\"])(err));\n  }\n}\n\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_actions__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].LOAD_LEAGUES, loadLeaguesSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeEvery\"])(_actions__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].LOAD_SEASONS, loadSeasonsSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeEvery\"])(_actions__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].LOAD_FIXTURES, loadFixturesSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeEvery\"])(_actions__WEBPACK_IMPORTED_MODULE_2__[\"actionTypes\"].LOAD_LINEUP, loadLineupSaga)]);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootSaga);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhLmpzP2Y2MWMiXSwibmFtZXMiOlsiZXM2cHJvbWlzZSIsInBvbHlmaWxsIiwibG9hZExlYWd1ZXNTYWdhIiwicmVzIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwieF9yYXBpZGFwaV9rZXkiLCJkYXRhIiwianNvbiIsInB1dCIsImxvYWRMZWFndWVzU3VjY2VzcyIsImVyciIsImZhaWx1cmUiLCJsb2FkU2Vhc29uc1NhZ2EiLCJhY3Rpb24iLCJwYXlsb2FkIiwibG9hZFNlYXNvbnNTdWNjZXNzIiwibG9hZEZpeHR1cmVzU2FnYSIsImlkTGVhZ3VlIiwieWVhclNlYXNvbiIsImxvYWRGaXh0dXJlc1N1Y2Nlc3MiLCJsb2FkTGluZXVwU2FnYSIsImxvYWRMaW5ldXBTdWNjZXNzIiwicm9vdFNhZ2EiLCJhbGwiLCJ0YWtlTGF0ZXN0IiwiYWN0aW9uVHlwZXMiLCJMT0FEX0xFQUdVRVMiLCJ0YWtlRXZlcnkiLCJMT0FEX1NFQVNPTlMiLCJMT0FEX0ZJWFRVUkVTIiwiTE9BRF9MSU5FVVAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBQSxrREFBVSxDQUFDQyxRQUFYOztBQUVBLFVBQVVDLGVBQVYsR0FBNEI7QUFDMUIsTUFBSTtBQUNGLFVBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsMkNBQUQsRUFBOEM7QUFDbkUsZ0JBQVUsS0FEeUQ7QUFFbkUsaUJBQVc7QUFDVCwyQkFBbUIsMkJBRFY7QUFFVCwwQkFBbUIsR0FBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGNBQWU7QUFGdkM7QUFGd0QsS0FBOUMsQ0FBdkI7QUFPQSxVQUFNQyxJQUFJLEdBQUcsTUFBTUwsR0FBRyxDQUFDTSxJQUFKLEVBQW5CO0FBRUEsVUFBTUMsOERBQUcsQ0FBQ0MsbUVBQWtCLENBQUNILElBQUQsQ0FBbkIsQ0FBVDtBQUNELEdBWEQsQ0FXRSxPQUFPSSxHQUFQLEVBQVk7QUFDWixVQUFNRiw4REFBRyxDQUFDRyx3REFBTyxDQUFDRCxHQUFELENBQVIsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsVUFBVUUsZUFBVixDQUEwQkMsTUFBMUIsRUFBa0M7QUFDaEMsTUFBSTtBQUNGLFVBQU1aLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsa0RBQWtEVyxNQUFNLENBQUNDLE9BQTFELEVBQW1FO0FBQ3hGLGdCQUFVLEtBRDhFO0FBRXhGLGlCQUFXO0FBQ1QsMkJBQW1CLDJCQURWO0FBRVQsMEJBQW1CLEdBQUVYLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxjQUFlLEVBRnZDO0FBR1Qsa0JBQVUsa0JBSEQ7QUFJVCx3QkFBZ0Isa0JBSlA7QUFLVCx1Q0FBK0I7QUFMdEI7QUFGNkUsS0FBbkUsQ0FBdkI7QUFVQSxVQUFNQyxJQUFJLEdBQUcsTUFBTUwsR0FBRyxDQUFDTSxJQUFKLEVBQW5CO0FBQ0EsVUFBTUMsOERBQUcsQ0FBQ08sbUVBQWtCLENBQUNULElBQUQsQ0FBbkIsQ0FBVDtBQUVELEdBZEQsQ0FjRSxPQUFPSSxHQUFQLEVBQVk7QUFDWixVQUFNRiw4REFBRyxDQUFDRyx3REFBTyxDQUFDRCxHQUFELENBQVIsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsVUFBVU0sZ0JBQVYsQ0FBMkJILE1BQTNCLEVBQW1DO0FBQ2pDLE1BQUk7QUFDRixVQUFNWixHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLHVEQUF1RFcsTUFBTSxDQUFDQyxPQUFQLENBQWVHLFFBQXRFLEdBQWlGLFVBQWpGLEdBQThGSixNQUFNLENBQUNDLE9BQVAsQ0FBZUksVUFBOUcsRUFBMEg7QUFDL0ksZ0JBQVUsS0FEcUk7QUFFL0ksaUJBQVc7QUFDVCwyQkFBbUIsMkJBRFY7QUFFVCwwQkFBbUIsR0FBRWYsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGNBQWUsRUFGdkM7QUFHVCxrQkFBVSxrQkFIRDtBQUlULHdCQUFnQixrQkFKUDtBQUtULHVDQUErQjtBQUx0QjtBQUZvSSxLQUExSCxDQUF2QjtBQVVBLFVBQU1DLElBQUksR0FBRyxNQUFNTCxHQUFHLENBQUNNLElBQUosRUFBbkI7QUFDQSxVQUFNQyw4REFBRyxDQUFDVyxvRUFBbUIsQ0FBQ2IsSUFBRCxDQUFwQixDQUFUO0FBRUQsR0FkRCxDQWNFLE9BQU9JLEdBQVAsRUFBWTtBQUNaLFVBQU1GLDhEQUFHLENBQUNHLHdEQUFPLENBQUNELEdBQUQsQ0FBUixDQUFUO0FBQ0Q7QUFDRjs7QUFHRCxVQUFVVSxjQUFWLENBQXlCUCxNQUF6QixFQUFpQztBQUMvQixNQUFJO0FBQ0YsVUFBTVosR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxnRUFBZ0VXLE1BQU0sQ0FBQ0MsT0FBeEUsRUFBaUY7QUFDdEcsZ0JBQVUsS0FENEY7QUFFdEcsaUJBQVc7QUFDVCwyQkFBbUIsMkJBRFY7QUFFVCwwQkFBbUIsR0FBRVgsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGNBQWUsRUFGdkM7QUFHVCxrQkFBVSxrQkFIRDtBQUlULHdCQUFnQixrQkFKUDtBQUtULHVDQUErQjtBQUx0QjtBQUYyRixLQUFqRixDQUF2QjtBQVVBLFVBQU1DLElBQUksR0FBRyxNQUFNTCxHQUFHLENBQUNNLElBQUosRUFBbkI7QUFDQSxVQUFNQyw4REFBRyxDQUFDYSxrRUFBaUIsQ0FBQ2YsSUFBRCxDQUFsQixDQUFUO0FBRUQsR0FkRCxDQWNFLE9BQU9JLEdBQVAsRUFBWTtBQUNaLFVBQU1GLDhEQUFHLENBQUNHLHdEQUFPLENBQUNELEdBQUQsQ0FBUixDQUFUO0FBQ0Q7QUFDRjs7QUFHRCxVQUFVWSxRQUFWLEdBQXFCO0FBQ25CLFFBQU1DLDhEQUFHLENBQUMsQ0FDUkMscUVBQVUsQ0FBQ0Msb0RBQVcsQ0FBQ0MsWUFBYixFQUEyQjFCLGVBQTNCLENBREYsRUFFUjJCLG9FQUFTLENBQUNGLG9EQUFXLENBQUNHLFlBQWIsRUFBMkJoQixlQUEzQixDQUZELEVBR1JlLG9FQUFTLENBQUNGLG9EQUFXLENBQUNJLGFBQWIsRUFBNEJiLGdCQUE1QixDQUhELEVBSVJXLG9FQUFTLENBQUNGLG9EQUFXLENBQUNLLFdBQWIsRUFBMEJWLGNBQTFCLENBSkQsQ0FBRCxDQUFUO0FBTUQ7O0FBRWNFLHVFQUFmIiwiZmlsZSI6Ii4vc2FnYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgY2FsbCwgZGVsYXksIHB1dCwgdGFrZSwgdGFrZUxhdGVzdCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuaW1wb3J0IGVzNnByb21pc2UgZnJvbSAnZXM2LXByb21pc2UnXG5cbmltcG9ydCB7IGFjdGlvblR5cGVzLCBmYWlsdXJlLCBsb2FkTGVhZ3Vlc1N1Y2Nlc3MsIGxvYWRTZWFzb25zU3VjY2VzcywgbG9hZEZpeHR1cmVzU3VjY2VzcywgbG9hZExpbmV1cFN1Y2Nlc3MgfSBmcm9tICcuL2FjdGlvbnMnXG5cbmVzNnByb21pc2UucG9seWZpbGwoKVxuXG5mdW5jdGlvbiogbG9hZExlYWd1ZXNTYWdhKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkIGZldGNoKCdodHRwczovL3YzLmZvb3RiYWxsLmFwaS1zcG9ydHMuaW8vbGVhZ3VlcycsIHtcbiAgICAgIFwibWV0aG9kXCI6IFwiR0VUXCIsXG4gICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICBcIngtcmFwaWRhcGktaG9zdFwiOiBcInYzLmZvb3RiYWxsLmFwaS1zcG9ydHMuaW9cIixcbiAgICAgICAgXCJ4LXJhcGlkYXBpLWtleVwiOiBgJHtwcm9jZXNzLmVudi54X3JhcGlkYXBpX2tleX1gXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zdCBkYXRhID0geWllbGQgcmVzLmpzb24oKVxuXG4gICAgeWllbGQgcHV0KGxvYWRMZWFndWVzU3VjY2VzcyhkYXRhKSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KGZhaWx1cmUoZXJyKSlcbiAgfVxufVxuXG5mdW5jdGlvbiogbG9hZFNlYXNvbnNTYWdhKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkIGZldGNoKCdodHRwczovL3YzLmZvb3RiYWxsLmFwaS1zcG9ydHMuaW8vbGVhZ3Vlcz9pZD0nICsgYWN0aW9uLnBheWxvYWQsIHtcbiAgICAgIFwibWV0aG9kXCI6IFwiR0VUXCIsXG4gICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICBcIngtcmFwaWRhcGktaG9zdFwiOiBcInYzLmZvb3RiYWxsLmFwaS1zcG9ydHMuaW9cIixcbiAgICAgICAgXCJ4LXJhcGlkYXBpLWtleVwiOiBgJHtwcm9jZXNzLmVudi54X3JhcGlkYXBpX2tleX1gLFxuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogXCIqXCJcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IGRhdGEgPSB5aWVsZCByZXMuanNvbigpXG4gICAgeWllbGQgcHV0KGxvYWRTZWFzb25zU3VjY2VzcyhkYXRhKSlcbiAgICBcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KGZhaWx1cmUoZXJyKSlcbiAgfVxufVxuXG5mdW5jdGlvbiogbG9hZEZpeHR1cmVzU2FnYShhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSB5aWVsZCBmZXRjaCgnaHR0cHM6Ly92My5mb290YmFsbC5hcGktc3BvcnRzLmlvL2ZpeHR1cmVzP2xlYWd1ZT0nICsgYWN0aW9uLnBheWxvYWQuaWRMZWFndWUgKyAnJnNlYXNvbj0nICsgYWN0aW9uLnBheWxvYWQueWVhclNlYXNvbiwge1xuICAgICAgXCJtZXRob2RcIjogXCJHRVRcIixcbiAgICAgIFwiaGVhZGVyc1wiOiB7XG4gICAgICAgIFwieC1yYXBpZGFwaS1ob3N0XCI6IFwidjMuZm9vdGJhbGwuYXBpLXNwb3J0cy5pb1wiLFxuICAgICAgICBcIngtcmFwaWRhcGkta2V5XCI6IGAke3Byb2Nlc3MuZW52LnhfcmFwaWRhcGlfa2V5fWAsXG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiBcIipcIlxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgZGF0YSA9IHlpZWxkIHJlcy5qc29uKClcbiAgICB5aWVsZCBwdXQobG9hZEZpeHR1cmVzU3VjY2VzcyhkYXRhKSlcbiAgICBcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KGZhaWx1cmUoZXJyKSlcbiAgfVxufVxuXG5cbmZ1bmN0aW9uKiBsb2FkTGluZXVwU2FnYShhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSB5aWVsZCBmZXRjaCgnaHR0cHM6Ly92My5mb290YmFsbC5hcGktc3BvcnRzLmlvL2ZpeHR1cmVzL2xpbmV1cHM/Zml4dHVyZT0nICsgYWN0aW9uLnBheWxvYWQsIHtcbiAgICAgIFwibWV0aG9kXCI6IFwiR0VUXCIsXG4gICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICBcIngtcmFwaWRhcGktaG9zdFwiOiBcInYzLmZvb3RiYWxsLmFwaS1zcG9ydHMuaW9cIixcbiAgICAgICAgXCJ4LXJhcGlkYXBpLWtleVwiOiBgJHtwcm9jZXNzLmVudi54X3JhcGlkYXBpX2tleX1gLFxuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogXCIqXCJcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IGRhdGEgPSB5aWVsZCByZXMuanNvbigpXG4gICAgeWllbGQgcHV0KGxvYWRMaW5ldXBTdWNjZXNzKGRhdGEpKVxuICAgIFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoZmFpbHVyZShlcnIpKVxuICB9XG59XG5cblxuZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIHRha2VMYXRlc3QoYWN0aW9uVHlwZXMuTE9BRF9MRUFHVUVTLCBsb2FkTGVhZ3Vlc1NhZ2EpLFxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5MT0FEX1NFQVNPTlMsIGxvYWRTZWFzb25zU2FnYSksXG4gICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkxPQURfRklYVFVSRVMsIGxvYWRGaXh0dXJlc1NhZ2EpLFxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5MT0FEX0xJTkVVUCwgbG9hZExpbmV1cFNhZ2EpXG4gIF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RTYWdhXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./saga.js\n");

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ \"./reducer.js\");\n/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saga */ \"./saga.js\");\n\n\n\n\n\nconst bindMiddleware = middleware => {\n  if (true) {\n    const {\n      composeWithDevTools\n    } = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n\n    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(...middleware));\n  }\n\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(...middleware);\n};\n\nfunction configureStore(initialState = _reducer__WEBPACK_IMPORTED_MODULE_2__[\"exampleInitialState\"]) {\n  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState, bindMiddleware([sagaMiddleware]));\n  store.sagaTask = sagaMiddleware.run(_saga__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  return store;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (configureStore);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS5qcz8wNTcxIl0sIm5hbWVzIjpbImJpbmRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJyZXF1aXJlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29uZmlndXJlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJleGFtcGxlSW5pdGlhbFN0YXRlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsInNhZ2FUYXNrIiwicnVuIiwicm9vdFNhZ2EiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsY0FBYyxHQUFJQyxVQUFELElBQWdCO0FBQ3JDLFlBQTJDO0FBQ3pDLFVBQU07QUFBRUM7QUFBRixRQUEwQkMsbUJBQU8sQ0FBQywwREFBRCxDQUF2Qzs7QUFDQSxXQUFPRCxtQkFBbUIsQ0FBQ0UsNkRBQWUsQ0FBQyxHQUFHSCxVQUFKLENBQWhCLENBQTFCO0FBQ0Q7O0FBQ0QsU0FBT0csNkRBQWUsQ0FBQyxHQUFHSCxVQUFKLENBQXRCO0FBQ0QsQ0FORDs7QUFRQSxTQUFTSSxjQUFULENBQXdCQyxZQUFZLEdBQUdDLDREQUF2QyxFQUE0RDtBQUMxRCxRQUFNQyxjQUFjLEdBQUdDLGlEQUFvQixFQUEzQztBQUNBLFFBQU1DLEtBQUssR0FBR0MseURBQVcsQ0FDdkJDLGdEQUR1QixFQUV2Qk4sWUFGdUIsRUFHdkJOLGNBQWMsQ0FBQyxDQUFDUSxjQUFELENBQUQsQ0FIUyxDQUF6QjtBQU1BRSxPQUFLLENBQUNHLFFBQU4sR0FBaUJMLGNBQWMsQ0FBQ00sR0FBZixDQUFtQkMsNkNBQW5CLENBQWpCO0FBRUEsU0FBT0wsS0FBUDtBQUNEOztBQUVjTCw2RUFBZiIsImZpbGUiOiIuL3N0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnXG5cbmltcG9ydCByb290UmVkdWNlciwgeyBleGFtcGxlSW5pdGlhbFN0YXRlIH0gZnJvbSAnLi9yZWR1Y2VyJ1xuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4vc2FnYSdcblxuY29uc3QgYmluZE1pZGRsZXdhcmUgPSAobWlkZGxld2FyZSkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9ID0gcmVxdWlyZSgncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJylcbiAgICByZXR1cm4gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXG4gIH1cbiAgcmV0dXJuIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKVxufVxuXG5mdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUgPSBleGFtcGxlSW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKVxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIHJvb3RSZWR1Y2VyLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBiaW5kTWlkZGxld2FyZShbc2FnYU1pZGRsZXdhcmVdKVxuICApXG5cbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpXG5cbiAgcmV0dXJuIHN0b3JlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "es6-promise":
/*!******************************!*\
  !*** external "es6-promise" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"es6-promise\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlczYtcHJvbWlzZVwiP2IyMDYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZXM2LXByb21pc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlczYtcHJvbWlzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///es6-promise\n");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXNhZ2FcIj81MGI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtc2FnYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-saga\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCI/Mzg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1zYWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga\n");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIj80MGI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LXNhZ2EvZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga/effects\n");

/***/ })

/******/ });