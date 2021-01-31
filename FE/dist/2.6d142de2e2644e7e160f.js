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
      lineNumber: 35,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("grids", classes.grids),
    container: true,
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 11,
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h1",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["tituloDiccionario"])(lang))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 1,
    className: classes.menuIdiomas,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["LinearProgress"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 31
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuIdioma, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    className: "divisor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 11,
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["subtituloDiccionario"])(lang)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(stylesHed)(Header));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9EaWNjaW9uYXJpby9Mb2dpbi9IZWFkZXIuanMiXSwibmFtZXMiOlsiTWVudUlkaW9tYSIsImxhenkiLCJzdHlsZXNIZWQiLCJzdWJ0aXR1bG8xIiwibWFyZ2luVG9wIiwiZ3JpZHMiLCJtYXJnaW4iLCJtZW51SWRpb21hcyIsInRleHRBbGlnbiIsIkhlYWRlciIsInByb3BzIiwiY2xhc3NlcyIsImdsb2JhbCIsInVzZUNvbnRleHQiLCJzZXNpb25TdG9yZSIsInN0YXRlIiwibGFuZyIsImNsYXNzTmFtZXMiLCJ0aXR1bG9EaWNjaW9uYXJpbyIsInN1YnRpdHVsb0RpY2Npb25hcmlvIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFFQSxJQUFNQSxVQUFVLGdCQUFHQyxrREFBSSxDQUFDO0FBQUEsU0FBTSxrR0FBTjtBQUFBLENBQUQsQ0FBdkI7QUFDQTtBQUVBLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsWUFBVSxFQUFFO0FBQ1ZDLGFBQVMsRUFBRTtBQURELEdBREk7QUFJaEJDLE9BQUssRUFBRTtBQUNMQyxVQUFNLEVBQUU7QUFESCxHQUpTO0FBT2hCQyxhQUFXLEVBQUU7QUFDWEMsYUFBUyxFQUFFO0FBREE7QUFQRyxDQUFsQjs7QUFZQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNoQkMsT0FEZ0IsR0FDSkQsS0FESSxDQUNoQkMsT0FEZ0I7QUFFeEIsTUFBTUMsTUFBTSxHQUFHQyx3REFBVSxDQUFDQywrREFBRCxDQUF6QjtBQUZ3QixNQUdoQkMsS0FIZ0IsR0FHTkgsTUFITSxDQUdoQkcsS0FIZ0I7QUFBQSxNQUloQkMsSUFKZ0IsR0FJUEQsS0FKTyxDQUloQkMsSUFKZ0I7QUFNeEIsc0JBQ0UsMkRBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDRSwyREFBQyxzREFBRDtBQUNFLGFBQVMsRUFBRUMsaURBQVUsQ0FBQyxPQUFELEVBQVVOLE9BQU8sQ0FBQ04sS0FBbEIsQ0FEdkI7QUFFRSxhQUFTLE1BRlg7QUFHRSxXQUFPLEVBQUMsUUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUtFLDJEQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsU0FBSyxFQUFDLFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ0UsMkRBQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsU0FBSyxFQUFDLFFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2Esc0VBQWlCLENBQUNGLElBQUQsQ0FEcEIsQ0FERixDQUxGLGVBVUUsMkRBQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsQ0FBZjtBQUFrQixhQUFTLEVBQUVMLE9BQU8sQ0FBQ0osV0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDRSwyREFBQyw4Q0FBRDtBQUFVLFlBQVEsZUFBRSwyREFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ0UsMkRBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQVZGLENBREYsZUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRixlQWtCRSwyREFBQyx5REFBRDtBQUFTLGFBQVMsRUFBQyxTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEJGLGVBbUJFLDJEQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ0UsMkRBQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixTQUFLLEVBQUMsUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDRSwyREFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixTQUFLLEVBQUMsUUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWSx5RUFBb0IsQ0FBQ0gsSUFBRCxDQUR2QixDQURGLENBREYsQ0FuQkYsZUEwQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFCRixDQURGO0FBOEJELENBcENEOztBQXNDZUkscUlBQVUsQ0FBQ2xCLFNBQUQsQ0FBVixDQUFzQk8sTUFBdEIsQ0FBZixFIiwiZmlsZSI6IjIuNmQxNDJkZTJlMjY0NGU3ZTE2MGYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgU3VzcGVuc2UsIGxhenksIEZyYWdtZW50LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHtcbiAgVHlwb2dyYXBoeSxcbiAgR3JpZCxcbiAgRGl2aWRlcixcbiAgTGluZWFyUHJvZ3Jlc3MgYXMgTG9hZGluZyxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIjtcblxuaW1wb3J0IHsgdGl0dWxvRGljY2lvbmFyaW8sIHN1YnRpdHVsb0RpY2Npb25hcmlvIH0gZnJvbSBcIi4uLy4uLy4uL2pzL0xhbmd1YWdlXCI7XG5cbmNvbnN0IE1lbnVJZGlvbWEgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uL01lbnVJZGlvbWFcIikpO1xuaW1wb3J0IHsgc2VzaW9uU3RvcmUgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmVzL3Nlc2lvblN0b3JlXCI7XG5cbmNvbnN0IHN0eWxlc0hlZCA9IHtcbiAgc3VidGl0dWxvMToge1xuICAgIG1hcmdpblRvcDogXCIxMHB4XCIsXG4gIH0sXG4gIGdyaWRzOiB7XG4gICAgbWFyZ2luOiBcIjV2aCAwXCIsXG4gIH0sXG4gIG1lbnVJZGlvbWFzOiB7XG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICB9LFxufTtcblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XG4gIGNvbnN0IGdsb2JhbCA9IHVzZUNvbnRleHQoc2VzaW9uU3RvcmUpO1xuICBjb25zdCB7IHN0YXRlIH0gPSBnbG9iYWw7XG4gIGNvbnN0IHsgbGFuZyB9ID0gc3RhdGU7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8R3JpZFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJncmlkc1wiLCBjbGFzc2VzLmdyaWRzKX1cbiAgICAgICAgY29udGFpbmVyXG4gICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0gYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAge3RpdHVsb0RpY2Npb25hcmlvKGxhbmcpfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBjbGFzc05hbWU9e2NsYXNzZXMubWVudUlkaW9tYXN9PlxuICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PExvYWRpbmcgLz59PlxuICAgICAgICAgICAgPE1lbnVJZGlvbWEgLz5cbiAgICAgICAgICA8L1N1c3BlbnNlPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8YnIgLz5cbiAgICAgIDxEaXZpZGVyIGNsYXNzTmFtZT1cImRpdmlzb3JcIiAvPlxuICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0gYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAge3N1YnRpdHVsb0RpY2Npb25hcmlvKGxhbmcpfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICAgPGJyIC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzSGVkKShIZWFkZXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==