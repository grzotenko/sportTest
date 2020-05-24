webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FixtureLineup.jsx":
/*!**************************************!*\
  !*** ./components/FixtureLineup.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/head */ \"./node_modules/lodash/head.js\");\n/* harmony import */ var lodash_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/concat */ \"./node_modules/lodash/concat.js\");\n/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/forEach */ \"./node_modules/lodash/forEach.js\");\n/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/last */ \"./node_modules/lodash/last.js\");\n/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_soccer_lineup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-soccer-lineup */ \"./node_modules/react-soccer-lineup/dist/index.es.js\");\n/* harmony import */ var _temp_tempData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../temp/tempData */ \"./temp/tempData.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/gr/Work/TestReact/test-sport-appREP/sportTest/components/FixtureLineup.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar FixtureLineup = function FixtureLineup(fixtureId) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.lineupData;\n  })),\n      lineupData = _useState[0],\n      setLineupData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    \"color\": \"red\",\n    \"squad\": {\n      \"gk\": {},\n      \"df\": [],\n      \"cm\": [],\n      \"fw\": []\n    }\n  }),\n      homeTeam = _useState2[0],\n      setHomeTeam = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    \"color\": \"blue\",\n    \"squad\": {\n      \"gk\": {},\n      \"df\": [],\n      \"cm\": [],\n      \"fw\": []\n    }\n  }),\n      awayTeam = _useState3[0],\n      setAwayTeam = _useState3[1];\n\n  setHomeTeam(getStartXI(lodash_head__WEBPACK_IMPORTED_MODULE_2___default()(lineupData.response).startXI, homeTeam));\n  setAwayTeam(getStartXI(lodash_last__WEBPACK_IMPORTED_MODULE_5___default()(lineupData.response).startXI, awayTeam)); // if (lineupData === null){\n  //     setLineupData(lineupTempData)\n  // }\n\n  var getStartXI = function getStartXI(startXI, team) {\n    lodash_forEach__WEBPACK_IMPORTED_MODULE_4___default()(startXI, function (item) {\n      switch (item.player.pos) {\n        case \"G\":\n          team.squad.gk = item;\n          break;\n\n        case \"D\":\n          team.squad.df = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(team.squad.df, item);\n          break;\n\n        case \"M\":\n          team.squad.cm = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(team.squad.cm, item);\n          break;\n\n        case \"F\":\n          team.squad.fw = lodash_concat__WEBPACK_IMPORTED_MODULE_3___default()(team.squad.fw, item);\n          break;\n\n        default:\n          break;\n      }\n    });\n    return team;\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log(homeTeam);\n  }, []);\n  return __jsx(react_soccer_lineup__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    size: \"small\",\n    color: \"lightseagreen\",\n    pattern: \"circles\",\n    homeTeam: homeTeam,\n    awayTeam: awayTeam,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  });\n};\n\n_s(FixtureLineup, \"ycRpk6rrGzLNB/z6K7cV4JlARq4=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = FixtureLineup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FixtureLineup);\n\nvar _c;\n\n$RefreshReg$(_c, \"FixtureLineup\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpeHR1cmVMaW5ldXAuanN4P2MwZGQiXSwibmFtZXMiOlsiRml4dHVyZUxpbmV1cCIsImZpeHR1cmVJZCIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImxpbmV1cERhdGEiLCJzZXRMaW5ldXBEYXRhIiwiaG9tZVRlYW0iLCJzZXRIb21lVGVhbSIsImF3YXlUZWFtIiwic2V0QXdheVRlYW0iLCJnZXRTdGFydFhJIiwiaGVhZCIsInJlc3BvbnNlIiwic3RhcnRYSSIsImxhc3QiLCJ0ZWFtIiwiZm9yRWFjaCIsIml0ZW0iLCJwbGF5ZXIiLCJwb3MiLCJzcXVhZCIsImdrIiwiZGYiLCJjb25jYXQiLCJjbSIsImZ3IiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxTQUFELEVBQWU7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQ0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxVQUFWO0FBQUEsR0FBTixDQUFaLENBRFg7QUFBQSxNQUMxQkEsVUFEMEI7QUFBQSxNQUNkQyxhQURjOztBQUFBLG1CQUVESixzREFBUSxDQUFDO0FBQUMsYUFBUyxLQUFWO0FBQWlCLGFBQVM7QUFBRSxZQUFNLEVBQVI7QUFBWSxZQUFNLEVBQWxCO0FBQXNCLFlBQU0sRUFBNUI7QUFBZ0MsWUFBTTtBQUF0QztBQUExQixHQUFELENBRlA7QUFBQSxNQUUxQkssUUFGMEI7QUFBQSxNQUVoQkMsV0FGZ0I7O0FBQUEsbUJBR0ROLHNEQUFRLENBQUM7QUFBQyxhQUFTLE1BQVY7QUFBa0IsYUFBUztBQUFFLFlBQU0sRUFBUjtBQUFZLFlBQU0sRUFBbEI7QUFBc0IsWUFBTSxFQUE1QjtBQUFnQyxZQUFNO0FBQXRDO0FBQTNCLEdBQUQsQ0FIUDtBQUFBLE1BRzFCTyxRQUgwQjtBQUFBLE1BR2hCQyxXQUhnQjs7QUFLakNGLGFBQVcsQ0FBQ0csVUFBVSxDQUFDQyxrREFBSSxDQUFDUCxVQUFVLENBQUNRLFFBQVosQ0FBSixDQUEwQkMsT0FBM0IsRUFBb0NQLFFBQXBDLENBQVgsQ0FBWDtBQUNBRyxhQUFXLENBQUNDLFVBQVUsQ0FBQ0ksa0RBQUksQ0FBQ1YsVUFBVSxDQUFDUSxRQUFaLENBQUosQ0FBMEJDLE9BQTNCLEVBQW9DTCxRQUFwQyxDQUFYLENBQVgsQ0FOaUMsQ0FPakM7QUFDQTtBQUNBOztBQUNBLE1BQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNHLE9BQUQsRUFBVUUsSUFBVixFQUFtQjtBQUNsQ0MseURBQU8sQ0FBQ0gsT0FBRCxFQUFVLFVBQUFJLElBQUksRUFBSTtBQUNyQixjQUFPQSxJQUFJLENBQUNDLE1BQUwsQ0FBWUMsR0FBbkI7QUFDSSxhQUFLLEdBQUw7QUFDSUosY0FBSSxDQUFDSyxLQUFMLENBQVdDLEVBQVgsR0FBZ0JKLElBQWhCO0FBQ0E7O0FBQ0osYUFBSyxHQUFMO0FBQ0lGLGNBQUksQ0FBQ0ssS0FBTCxDQUFXRSxFQUFYLEdBQWdCQyxvREFBTSxDQUFDUixJQUFJLENBQUNLLEtBQUwsQ0FBV0UsRUFBWixFQUFnQkwsSUFBaEIsQ0FBdEI7QUFDQTs7QUFDSixhQUFLLEdBQUw7QUFDSUYsY0FBSSxDQUFDSyxLQUFMLENBQVdJLEVBQVgsR0FBZ0JELG9EQUFNLENBQUNSLElBQUksQ0FBQ0ssS0FBTCxDQUFXSSxFQUFaLEVBQWdCUCxJQUFoQixDQUF0QjtBQUNBOztBQUNKLGFBQUssR0FBTDtBQUNJRixjQUFJLENBQUNLLEtBQUwsQ0FBV0ssRUFBWCxHQUFnQkYsb0RBQU0sQ0FBQ1IsSUFBSSxDQUFDSyxLQUFMLENBQVdLLEVBQVosRUFBZ0JSLElBQWhCLENBQXRCO0FBQ0E7O0FBQ0o7QUFDSTtBQWRSO0FBZ0JILEtBakJNLENBQVA7QUFrQkEsV0FBT0YsSUFBUDtBQUNILEdBcEJEOztBQXNCQVcseURBQVMsQ0FBQyxZQUFNO0FBRVpDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZdEIsUUFBWjtBQUNILEdBSFEsRUFHTixFQUhNLENBQVQ7QUFRQSxTQUNJLE1BQUMsMkRBQUQ7QUFDSSxRQUFJLEVBQUcsT0FEWDtBQUVJLFNBQUssRUFBRyxlQUZaO0FBR0ksV0FBTyxFQUFHLFNBSGQ7QUFJSSxZQUFRLEVBQUdBLFFBSmY7QUFLSSxZQUFRLEVBQUdFLFFBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKO0FBVUgsQ0FsREQ7O0dBQU1ULGE7VUFDMkNHLHVEOzs7S0FEM0NILGE7QUFtRFNBLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GaXh0dXJlTGluZXVwLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IGhlYWQgZnJvbSAnbG9kYXNoL2hlYWQnXG5pbXBvcnQgY29uY2F0IGZyb20gJ2xvZGFzaC9jb25jYXQnXG5pbXBvcnQgZm9yRWFjaCBmcm9tICdsb2Rhc2gvZm9yRWFjaCdcbmltcG9ydCBsYXN0IGZyb20gJ2xvZGFzaC9sYXN0J1xuaW1wb3J0IFNvY2NlckxpbmVVcCBmcm9tICdyZWFjdC1zb2NjZXItbGluZXVwJ1xuaW1wb3J0IHtsaW5ldXBUZW1wRGF0YX0gZnJvbSAnLi4vdGVtcC90ZW1wRGF0YSdcblxuY29uc3QgRml4dHVyZUxpbmV1cCA9IChmaXh0dXJlSWQpID0+IHtcbiAgICBjb25zdCBbbGluZXVwRGF0YSwgc2V0TGluZXVwRGF0YV0gPSB1c2VTdGF0ZSh1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5saW5ldXBEYXRhKSlcbiAgICBjb25zdCBbaG9tZVRlYW0sIHNldEhvbWVUZWFtXSA9IHVzZVN0YXRlKHtcImNvbG9yXCI6IFwicmVkXCIsIFwic3F1YWRcIjogeyBcImdrXCI6IHt9LCBcImRmXCI6IFtdLCBcImNtXCI6IFtdLCBcImZ3XCI6IFtdIH19KVxuICAgIGNvbnN0IFthd2F5VGVhbSwgc2V0QXdheVRlYW1dID0gdXNlU3RhdGUoe1wiY29sb3JcIjogXCJibHVlXCIsIFwic3F1YWRcIjogeyBcImdrXCI6IHt9LCBcImRmXCI6IFtdLCBcImNtXCI6IFtdLCBcImZ3XCI6IFtdIH19KVxuICAgIFxuICAgIHNldEhvbWVUZWFtKGdldFN0YXJ0WEkoaGVhZChsaW5ldXBEYXRhLnJlc3BvbnNlKS5zdGFydFhJLCBob21lVGVhbSkpXG4gICAgc2V0QXdheVRlYW0oZ2V0U3RhcnRYSShsYXN0KGxpbmV1cERhdGEucmVzcG9uc2UpLnN0YXJ0WEksIGF3YXlUZWFtKSlcbiAgICAvLyBpZiAobGluZXVwRGF0YSA9PT0gbnVsbCl7XG4gICAgLy8gICAgIHNldExpbmV1cERhdGEobGluZXVwVGVtcERhdGEpXG4gICAgLy8gfVxuICAgIGNvbnN0IGdldFN0YXJ0WEkgPSAoc3RhcnRYSSwgdGVhbSkgPT4ge1xuICAgICAgICBmb3JFYWNoKHN0YXJ0WEksIGl0ZW0gPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGl0ZW0ucGxheWVyLnBvcyl7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkdcIjpcbiAgICAgICAgICAgICAgICAgICAgdGVhbS5zcXVhZC5nayA9IGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICB0ZWFtLnNxdWFkLmRmID0gY29uY2F0KHRlYW0uc3F1YWQuZGYsIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICAgICAgICAgICAgdGVhbS5zcXVhZC5jbSA9IGNvbmNhdCh0ZWFtLnNxdWFkLmNtLCBpdGVtKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgXCJGXCI6XG4gICAgICAgICAgICAgICAgICAgIHRlYW0uc3F1YWQuZncgPSBjb25jYXQodGVhbS5zcXVhZC5mdywgaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGVhbVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhob21lVGVhbSlcbiAgICB9LCBbXSlcbiAgICBcblxuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNvY2NlckxpbmVVcFxuICAgICAgICAgICAgc2l6ZT17IFwic21hbGxcIiB9XG4gICAgICAgICAgICBjb2xvcj17IFwibGlnaHRzZWFncmVlblwiIH1cbiAgICAgICAgICAgIHBhdHRlcm49eyBcImNpcmNsZXNcIiB9XG4gICAgICAgICAgICBob21lVGVhbT17IGhvbWVUZWFtIH1cbiAgICAgICAgICAgIGF3YXlUZWFtPXsgYXdheVRlYW0gfVxuICAgICAgICAvPlxuICAgIClcblxufVxuZXhwb3J0IGRlZmF1bHQgRml4dHVyZUxpbmV1cCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FixtureLineup.jsx\n");

/***/ })

})