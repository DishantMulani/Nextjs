"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/home/home-page.jsx":
/*!*******************************************!*\
  !*** ./src/components/home/home-page.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst HomePage = (param)=>{\n    let { data  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-3\",\n        children: data.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"grid gridcol-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"...\",\n                        children: \"01\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\nextjs\\\\my-app\\\\src\\\\components\\\\home\\\\home-page.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"col-span-2 ...\",\n                        children: \"02\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\nextjs\\\\my-app\\\\src\\\\components\\\\home\\\\home-page.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\nextjs\\\\my-app\\\\src\\\\components\\\\home\\\\home-page.jsx\",\n                lineNumber: 9,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\nextjs\\\\my-app\\\\src\\\\components\\\\home\\\\home-page.jsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n{}var _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL2hvbWUtcGFnZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEI7QUFDRjtBQUNrQjtBQUU5QyxNQUFNRyxXQUFXLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7SUFDdEIscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1ZGLEtBQUtHLEdBQUcsQ0FBQ0gsQ0FBQUEscUJBQ04sOERBQUNDO2dCQUFJRyxPQUFNOztrQ0FDUCw4REFBQ0g7d0JBQUlHLE9BQU07a0NBQU07Ozs7OztrQ0FDakIsOERBQUNIO3dCQUFJRyxPQUFNO2tDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEQ7S0FYTUw7QUFhTiwrREFBZUEsUUFBUUEsRUFBQTtBQUV2QixDQVV5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob21lL2hvbWUtcGFnZS5qc3g/MjA5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoeyBkYXRhIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zXCI+XHJcbiAgICAgICAgICAgIHtkYXRhLm1hcChkYXRhID0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkY29sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiLi4uXCI+MDE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNwYW4tMiAuLi5cIj4wMjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXHJcblxyXG57LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV90ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2RhdGEuaWR9IGhyZWY9e2AvZXZlbnRzLyR7ZGF0YS5pZH1gfSBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0xMFwiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSBzcmM9e2RhdGEuaW1hZ2V9IGFsdD17ZGF0YS50aXRsZX0gaGVpZ2h0PXsxMDB9IHdpZHRoPXsxMDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBweS0zXCI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB5LTJcIj57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL30iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwic3R5bGVzIiwiSG9tZVBhZ2UiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiY2xhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/home/home-page.jsx\n"));

/***/ })

});