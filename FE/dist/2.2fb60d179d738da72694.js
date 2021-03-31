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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("grids", classes.grids),
    container: true,
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 11,
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h1",
    align: "center"
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["tituloDiccionario"])(lang))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 1,
    className: classes.menuIdiomas
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["LinearProgress"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuIdioma, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    className: "divisor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 11,
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4",
    align: "center"
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["subtituloDiccionario"])(lang)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(stylesHed)(Header));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9EaWNjaW9uYXJpby9Mb2dpbi9IZWFkZXIuanMiXSwibmFtZXMiOlsiTWVudUlkaW9tYSIsImxhenkiLCJzdHlsZXNIZWQiLCJzdWJ0aXR1bG8xIiwibWFyZ2luVG9wIiwiZ3JpZHMiLCJtYXJnaW4iLCJtZW51SWRpb21hcyIsInRleHRBbGlnbiIsIkhlYWRlciIsInByb3BzIiwiY2xhc3NlcyIsImdsb2JhbCIsInVzZUNvbnRleHQiLCJzZXNpb25TdG9yZSIsInN0YXRlIiwibGFuZyIsImNsYXNzTmFtZXMiLCJ0aXR1bG9EaWNjaW9uYXJpbyIsInN1YnRpdHVsb0RpY2Npb25hcmlvIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFFQSxJQUFNQSxVQUFVLGdCQUFHQyxrREFBSSxDQUFDO0FBQUEsU0FBTSxrR0FBTjtBQUFBLENBQUQsQ0FBdkI7QUFDQTtBQUVBLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsWUFBVSxFQUFFO0FBQ1ZDLGFBQVMsRUFBRTtBQURELEdBREk7QUFJaEJDLE9BQUssRUFBRTtBQUNMQyxVQUFNLEVBQUU7QUFESCxHQUpTO0FBT2hCQyxhQUFXLEVBQUU7QUFDWEMsYUFBUyxFQUFFO0FBREE7QUFQRyxDQUFsQjs7QUFZQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNoQkMsT0FEZ0IsR0FDSkQsS0FESSxDQUNoQkMsT0FEZ0I7QUFFeEIsTUFBTUMsTUFBTSxHQUFHQyx3REFBVSxDQUFDQywrREFBRCxDQUF6QjtBQUZ3QixNQUdoQkMsS0FIZ0IsR0FHTkgsTUFITSxDQUdoQkcsS0FIZ0I7QUFBQSxNQUloQkMsSUFKZ0IsR0FJUEQsS0FKTyxDQUloQkMsSUFKZ0I7QUFNeEIsc0JBQ0UsMkRBQUMsOENBQUQscUJBQ0UsMkRBQUMsc0RBQUQ7QUFDRSxhQUFTLEVBQUVDLGlEQUFVLENBQUMsT0FBRCxFQUFVTixPQUFPLENBQUNOLEtBQWxCLENBRHZCO0FBRUUsYUFBUyxNQUZYO0FBR0UsV0FBTyxFQUFDO0FBSFYsa0JBS0UsMkRBQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixTQUFLLEVBQUM7QUFBekIsa0JBQ0UsMkRBQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsU0FBSyxFQUFDO0FBQS9CLEtBQ0dhLHNFQUFpQixDQUFDRixJQUFELENBRHBCLENBREYsQ0FMRixlQVVFLDJEQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLENBQWY7QUFBa0IsYUFBUyxFQUFFTCxPQUFPLENBQUNKO0FBQXJDLGtCQUNFLDJEQUFDLDhDQUFEO0FBQVUsWUFBUSxlQUFFLDJEQUFDLGdFQUFEO0FBQXBCLGtCQUNFLDJEQUFDLFVBQUQsT0FERixDQURGLENBVkYsQ0FERixlQWlCRSxzRUFqQkYsZUFrQkUsMkRBQUMseURBQUQ7QUFBUyxhQUFTLEVBQUM7QUFBbkIsSUFsQkYsZUFtQkUsMkRBQUMsc0RBQUQ7QUFBTSxhQUFTO0FBQWYsa0JBQ0UsMkRBQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixTQUFLLEVBQUM7QUFBekIsa0JBQ0UsMkRBQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsU0FBSyxFQUFDO0FBQS9CLEtBQ0dZLHlFQUFvQixDQUFDSCxJQUFELENBRHZCLENBREYsQ0FERixDQW5CRixlQTBCRSxzRUExQkYsQ0FERjtBQThCRCxDQXBDRDs7QUFzQ2VJLHFJQUFVLENBQUNsQixTQUFELENBQVYsQ0FBc0JPLE1BQXRCLENBQWYsRSIsImZpbGUiOiIyLjJmYjYwZDE3OWQ3MzhkYTcyNjk0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFN1c3BlbnNlLCBsYXp5LCBGcmFnbWVudCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7XG4gIFR5cG9ncmFwaHksXG4gIEdyaWQsXG4gIERpdmlkZXIsXG4gIExpbmVhclByb2dyZXNzIGFzIExvYWRpbmcsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5cbmltcG9ydCB7IHRpdHVsb0RpY2Npb25hcmlvLCBzdWJ0aXR1bG9EaWNjaW9uYXJpbyB9IGZyb20gXCIuLi8uLi8uLi9qcy9MYW5ndWFnZVwiO1xuXG5jb25zdCBNZW51SWRpb21hID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuLi9NZW51SWRpb21hXCIpKTtcbmltcG9ydCB7IHNlc2lvblN0b3JlIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3Jlcy9zZXNpb25TdG9yZVwiO1xuXG5jb25zdCBzdHlsZXNIZWQgPSB7XG4gIHN1YnRpdHVsbzE6IHtcbiAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxuICB9LFxuICBncmlkczoge1xuICAgIG1hcmdpbjogXCI1dmggMFwiLFxuICB9LFxuICBtZW51SWRpb21hczoge1xuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgfSxcbn07XG5cbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzO1xuICBjb25zdCBnbG9iYWwgPSB1c2VDb250ZXh0KHNlc2lvblN0b3JlKTtcbiAgY29uc3QgeyBzdGF0ZSB9ID0gZ2xvYmFsO1xuICBjb25zdCB7IGxhbmcgfSA9IHN0YXRlO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEdyaWRcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiZ3JpZHNcIiwgY2xhc3Nlcy5ncmlkcyl9XG4gICAgICAgIGNvbnRhaW5lclxuICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgID5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIHt0aXR1bG9EaWNjaW9uYXJpbyhsYW5nKX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVJZGlvbWFzfT5cbiAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxMb2FkaW5nIC8+fT5cbiAgICAgICAgICAgIDxNZW51SWRpb21hIC8+XG4gICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICAgPGJyIC8+XG4gICAgICA8RGl2aWRlciBjbGFzc05hbWU9XCJkaXZpc29yXCIgLz5cbiAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIHtzdWJ0aXR1bG9EaWNjaW9uYXJpbyhsYW5nKX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxiciAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlc0hlZCkoSGVhZGVyKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=