(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "Ty2U":
/*!****************************************************!*\
  !*** ./src/Components/Diccionario/Login/Header.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "TTf+");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "04ZO");
/* harmony import */ var _js_Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../js/Language */ "UQwk");
/* harmony import */ var _stores_sesionStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../stores/sesionStore */ "d70u");
var _this = undefined,
    _jsxFileName = "/home/wizard/Proyectos/dhusserlFinal/FE/src/Components/Diccionario/Login/Header.js";






var MenuIdioma = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../MenuIdioma */ "5h9C"));
});

var stylesHed = {
  subtitulo1: {
    marginTop: "10px"
  },
  grids: {
    margin: "5vh 0"
  },
  menuIdiomas: {
    textAlign: "center"
  }
};

var Header = function Header(props) {
  var classes = props.classes;
  var global = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_stores_sesionStore__WEBPACK_IMPORTED_MODULE_5__["sesionStore"]);
  var state = global.state;
  var lang = state.lang;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("grids", classes.grids),
    container: true,
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 11,
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h1",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["tituloDiccionario"])(lang))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 1,
    className: classes.menuIdiomas,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["LinearProgress"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 31
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuIdioma, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    className: "divisor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 11,
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["subtituloDiccionario"])(lang)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(stylesHed)(Header));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9EaWNjaW9uYXJpby9Mb2dpbi9IZWFkZXIuanMiXSwibmFtZXMiOlsiTWVudUlkaW9tYSIsImxhenkiLCJzdHlsZXNIZWQiLCJzdWJ0aXR1bG8xIiwibWFyZ2luVG9wIiwiZ3JpZHMiLCJtYXJnaW4iLCJtZW51SWRpb21hcyIsInRleHRBbGlnbiIsIkhlYWRlciIsInByb3BzIiwiY2xhc3NlcyIsImdsb2JhbCIsInVzZUNvbnRleHQiLCJzZXNpb25TdG9yZSIsInN0YXRlIiwibGFuZyIsImNsYXNzTmFtZXMiLCJ0aXR1bG9EaWNjaW9uYXJpbyIsInN1YnRpdHVsb0RpY2Npb25hcmlvIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxVQUFVLGdCQUFHQyxrREFBSSxDQUFDO0FBQUEsU0FBTSxrR0FBTjtBQUFBLENBQUQsQ0FBdkI7QUFDQTtBQUVBLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsWUFBVSxFQUFFO0FBQ1ZDLGFBQVMsRUFBRTtBQURELEdBREk7QUFJaEJDLE9BQUssRUFBRTtBQUNMQyxVQUFNLEVBQUU7QUFESCxHQUpTO0FBT2hCQyxhQUFXLEVBQUU7QUFDWEMsYUFBUyxFQUFFO0FBREE7QUFQRyxDQUFsQjs7QUFZQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNoQkMsT0FEZ0IsR0FDSkQsS0FESSxDQUNoQkMsT0FEZ0I7QUFFeEIsTUFBTUMsTUFBTSxHQUFHQyx3REFBVSxDQUFDQywrREFBRCxDQUF6QjtBQUZ3QixNQUdoQkMsS0FIZ0IsR0FHTkgsTUFITSxDQUdoQkcsS0FIZ0I7QUFBQSxNQUloQkMsSUFKZ0IsR0FJUEQsS0FKTyxDQUloQkMsSUFKZ0I7QUFNeEIsc0JBQ0UsMkRBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDRSwyREFBQyxzREFBRDtBQUFNLGFBQVMsRUFBRUMsaURBQVUsQ0FBQyxPQUFELEVBQVVOLE9BQU8sQ0FBQ04sS0FBbEIsQ0FBM0I7QUFBcUQsYUFBUyxNQUE5RDtBQUErRCxXQUFPLEVBQUMsUUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDRSwyREFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLFNBQUssRUFBQyxRQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNFLDJEQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLFNBQUssRUFBQyxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dhLHNFQUFpQixDQUFDRixJQUFELENBRHBCLENBREYsQ0FERixlQU1FLDJEQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLENBQWY7QUFBa0IsYUFBUyxFQUFFTCxPQUFPLENBQUNKLFdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ0UsMkRBQUMsOENBQUQ7QUFBVSxZQUFRLGVBQUUsMkRBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNFLDJEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FORixDQURGLGVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLGVBY0UsMkRBQUMseURBQUQ7QUFBUyxhQUFTLEVBQUMsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLGVBZUUsMkRBQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDRSwyREFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLFNBQUssRUFBQyxRQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNFLDJEQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLFNBQUssRUFBQyxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dZLHlFQUFvQixDQUFDSCxJQUFELENBRHZCLENBREYsQ0FERixDQWZGLGVBc0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0QkYsQ0FERjtBQTBCRCxDQWhDRDs7QUFrQ2VJLHFJQUFVLENBQUNsQixTQUFELENBQVYsQ0FBc0JPLE1BQXRCLENBQWYsRSIsImZpbGUiOiIyLjU4NjViYWNjMzg4MTA1OTBlODc5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFN1c3BlbnNlLCBsYXp5LCBGcmFnbWVudCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBHcmlkLCBEaXZpZGVyLCBMaW5lYXJQcm9ncmVzcyBhcyBMb2FkaW5nIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuXG5pbXBvcnQgeyB0aXR1bG9EaWNjaW9uYXJpbywgc3VidGl0dWxvRGljY2lvbmFyaW8gfSBmcm9tICcuLi8uLi8uLi9qcy9MYW5ndWFnZSc7XG5cbmNvbnN0IE1lbnVJZGlvbWEgPSBsYXp5KCgpID0+IGltcG9ydCgnLi4vTWVudUlkaW9tYScpKVxuaW1wb3J0IHsgc2VzaW9uU3RvcmUgfSBmcm9tICcuLi8uLi8uLi9zdG9yZXMvc2VzaW9uU3RvcmUnO1xuXG5jb25zdCBzdHlsZXNIZWQgPSB7XG4gIHN1YnRpdHVsbzE6IHtcbiAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxuICB9LFxuICBncmlkczoge1xuICAgIG1hcmdpbjogXCI1dmggMFwiXG4gIH0sXG4gIG1lbnVJZGlvbWFzOiB7XG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIH1cbn1cblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XG4gIGNvbnN0IGdsb2JhbCA9IHVzZUNvbnRleHQoc2VzaW9uU3RvcmUpO1xuICBjb25zdCB7IHN0YXRlIH0gPSBnbG9iYWxcbiAgY29uc3QgeyBsYW5nIH0gPSBzdGF0ZVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiZ3JpZHNcIiwgY2xhc3Nlcy5ncmlkcyl9IGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfSBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICB7dGl0dWxvRGljY2lvbmFyaW8obGFuZyl9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51SWRpb21hc30+XG4gICAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8TG9hZGluZyAvPn0+XG4gICAgICAgICAgICA8TWVudUlkaW9tYSAvPlxuICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxiciAvPlxuICAgICAgPERpdmlkZXIgY2xhc3NOYW1lPVwiZGl2aXNvclwiIC8+XG4gICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfSBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICB7c3VidGl0dWxvRGljY2lvbmFyaW8obGFuZyl9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8YnIgLz5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzSGVkKShIZWFkZXIpOyJdLCJzb3VyY2VSb290IjoiIn0=