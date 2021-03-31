(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "kg6I":
/*!****************************************************!*\
  !*** ./src/Components/Diccionario/Login/Footer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "TTf+");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "04ZO");
/* harmony import */ var _js_Language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../js/Language */ "UQwk");
/* harmony import */ var _stores_sesionStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../stores/sesionStore */ "d70u");





var styles = {
  footerText: {
    paddingTop: "22px !important",
    color: "rgba(255,255,255, .9)"
  },
  footerBody: {
    bottom: "0px",
    width: "100%"
  }
};

var Footer = function Footer(props) {
  var classes = props.classes;
  var global = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_stores_sesionStore__WEBPACK_IMPORTED_MODULE_4__["sesionStore"]);
  var state = global.state;
  var lang = state.lang;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {}, [lang]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.footerBody
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    gutterBottom: true,
    align: "center"
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["Footer1"])(lang), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "http://www.filosoficas.unam.mx",
    className: "links"
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["InstitutoF"])(lang)), " ", Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["Footer2"])(lang), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "http://www.unam.mx",
    className: "links"
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["UNAM"])(lang)), " ", Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["FooterAl"])(lang)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footerDiccionario"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.footerText,
    variant: "h4",
    align: "center"
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["Footer3"])(lang))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Footer));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9EaWNjaW9uYXJpby9Mb2dpbi9Gb290ZXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwiZm9vdGVyVGV4dCIsInBhZGRpbmdUb3AiLCJjb2xvciIsImZvb3RlckJvZHkiLCJib3R0b20iLCJ3aWR0aCIsIkZvb3RlciIsInByb3BzIiwiY2xhc3NlcyIsImdsb2JhbCIsInVzZUNvbnRleHQiLCJzZXNpb25TdG9yZSIsInN0YXRlIiwibGFuZyIsInVzZUVmZmVjdCIsIkZvb3RlcjEiLCJJbnN0aXR1dG9GIiwiRm9vdGVyMiIsIlVOQU0iLCJGb290ZXJBbCIsIkZvb3RlcjMiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFlBQVUsRUFBRTtBQUNWQyxjQUFVLEVBQUUsaUJBREY7QUFFVkMsU0FBSyxFQUFFO0FBRkcsR0FEQztBQUtiQyxZQUFVLEVBQUU7QUFDVkMsVUFBTSxFQUFFLEtBREU7QUFFVkMsU0FBSyxFQUFFO0FBRkc7QUFMQyxDQUFmOztBQVdBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ2hCQyxPQURnQixHQUNKRCxLQURJLENBQ2hCQyxPQURnQjtBQUV4QixNQUFNQyxNQUFNLEdBQUdDLHdEQUFVLENBQUNDLCtEQUFELENBQXpCO0FBRndCLE1BR2hCQyxLQUhnQixHQUdOSCxNQUhNLENBR2hCRyxLQUhnQjtBQUFBLE1BSWhCQyxJQUpnQixHQUlQRCxLQUpPLENBSWhCQyxJQUpnQjtBQU14QkMseURBQVMsQ0FBQyxZQUFNLENBQ2YsQ0FEUSxFQUNOLENBQUNELElBQUQsQ0FETSxDQUFUO0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVMLE9BQU8sQ0FBQ0w7QUFBeEIsa0JBQ0UsMkRBQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsZ0JBQVksTUFBckM7QUFBc0MsU0FBSyxFQUFDO0FBQTVDLEtBQ0dZLDREQUFPLENBQUNGLElBQUQsQ0FEVixFQUNrQixHQURsQixlQUVFO0FBQ0UsVUFBTSxFQUFDLFFBRFQ7QUFFRSxRQUFJLEVBQUMsZ0NBRlA7QUFHRSxhQUFTLEVBQUM7QUFIWixLQUtHRywrREFBVSxDQUFDSCxJQUFELENBTGIsQ0FGRixFQVFPLEdBUlAsRUFTR0ksNERBQU8sQ0FBQ0osSUFBRCxDQVRWLEVBU2tCLEdBVGxCLGVBVUU7QUFBRyxVQUFNLEVBQUMsUUFBVjtBQUFtQixRQUFJLEVBQUMsb0JBQXhCO0FBQTZDLGFBQVMsRUFBQztBQUF2RCxLQUNHSyx5REFBSSxDQUFDTCxJQUFELENBRFAsQ0FWRixFQVlPLEdBWlAsRUFhR00sNkRBQVEsQ0FBQ04sSUFBRCxDQWJYLENBREYsZUFnQkU7QUFBUSxhQUFTLEVBQUM7QUFBbEIsa0JBQ0UsMkRBQUMsNERBQUQ7QUFBWSxhQUFTLEVBQUVMLE9BQU8sQ0FBQ1IsVUFBL0I7QUFBMkMsV0FBTyxFQUFDLElBQW5EO0FBQXdELFNBQUssRUFBQztBQUE5RCxLQUNHb0IsNERBQU8sQ0FBQ1AsSUFBRCxDQURWLENBREYsQ0FoQkYsQ0FERjtBQXdCRCxDQWpDRDs7QUFrQ2VRLHFJQUFVLENBQUN0QixNQUFELENBQVYsQ0FBbUJPLE1BQW5CLENBQWYsRSIsImZpbGUiOiIxLmNkZjc4MTEwNjg3YjM2ZDQ4YmU5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7VHlwb2dyYXBoeX0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIjtcblxuaW1wb3J0IHtcbiAgRm9vdGVyMSxcbiAgRm9vdGVyMixcbiAgRm9vdGVyMyxcbiAgRm9vdGVyQWwsXG4gIEluc3RpdHV0b0YsXG4gIFVOQU0sXG59IGZyb20gXCIuLi8uLi8uLi9qcy9MYW5ndWFnZVwiO1xuXG5pbXBvcnQgeyBzZXNpb25TdG9yZSB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZXMvc2VzaW9uU3RvcmVcIjtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBmb290ZXJUZXh0OiB7XG4gICAgcGFkZGluZ1RvcDogXCIyMnB4ICFpbXBvcnRhbnRcIixcbiAgICBjb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LCAuOSlcIixcbiAgfSxcbiAgZm9vdGVyQm9keToge1xuICAgIGJvdHRvbTogXCIwcHhcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gIH0sXG59O1xuXG5jb25zdCBGb290ZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSBwcm9wcztcbiAgY29uc3QgZ2xvYmFsID0gdXNlQ29udGV4dChzZXNpb25TdG9yZSk7XG4gIGNvbnN0IHsgc3RhdGUgfSA9IGdsb2JhbFxuICBjb25zdCB7IGxhbmcgfSA9IHN0YXRlXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgfSwgW2xhbmddKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3RlckJvZHl9PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgZ3V0dGVyQm90dG9tIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIHtGb290ZXIxKGxhbmcpfXtcIiBcIn1cbiAgICAgICAgPGFcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3LmZpbG9zb2ZpY2FzLnVuYW0ubXhcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmtzXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtJbnN0aXR1dG9GKGxhbmcpfVxuICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICB7Rm9vdGVyMihsYW5nKX17XCIgXCJ9XG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vd3d3LnVuYW0ubXhcIiBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICAgIHtVTkFNKGxhbmcpfVxuICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICB7Rm9vdGVyQWwobGFuZyl9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlckRpY2Npb25hcmlvXCI+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJUZXh0fSB2YXJpYW50PVwiaDRcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIHtGb290ZXIzKGxhbmcpfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShGb290ZXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==