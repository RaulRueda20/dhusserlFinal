(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "Yi4w":
/*!*******************************************************!*\
  !*** ./src/Components/Diccionario/Login/LoginForm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "TTf+");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "04ZO");
/* harmony import */ var _js_Language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../js/Language */ "UQwk");
/* harmony import */ var _ModalRecuperacion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ModalRecuperacion */ "lRAo");
/* harmony import */ var _js_webServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../js/webServices */ "xrMW");
/* harmony import */ var _stores_sesionStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../stores/sesionStore */ "d70u");
var _jsxFileName = "/home/raul/Proyectos/dhusserlFinal/FE/src/Components/Diccionario/Login/LoginForm.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var stylesFor = {
  TextField1: {
    justify: "center",
    width: "100%"
  },
  TextField2: {
    justify: "center",
    width: "100%"
  },
  gridsF: {
    margin: "7.5vh 2.5vw"
  },
  divDelForm: {
    paddingBottom: "15vh",
    paddingTop: "7.5vh"
  }
};

function LoginForm(props) {
  var classes = props.classes,
      history = props.history,
      setLogin = props.setLogin;
  var global = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_stores_sesionStore__WEBPACK_IMPORTED_MODULE_6__["sesionStore"]);
  var dispatch = global.dispatch,
      state = global.state;
  var lang = state.lang,
      loading = state.loading;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      correo = _React$useState2[0],
      setCorreo = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(""),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      password = _React$useState4[0],
      setPassword = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      recuperarContra = _React$useState6[0],
      setRecuperarContra = _React$useState6[1];

  var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();
    dispatch({
      type: "START_LOADING"
    });
    var service = "/login/usuario";
    var params = JSON.stringify({
      userId: correo,
      password: password
    });
    Object(_js_webServices__WEBPACK_IMPORTED_MODULE_5__["loginService"])(service, "POST", params, function (data) {
      if (data.data.error) {
        dispatch({
          type: "SET_SNACKBAR",
          payload: {
            open: true,
            variant: "error",
            message: Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["correoInvalido"])(lang)
          }
        });
      } else {
        var nuevaSesion = {
          usuario: correo,
          password: password
        };
        dispatch({
          type: "INICIAR_SESION",
          payload: nuevaSesion
        });
        history.push("/husserl");
      }

      dispatch({
        type: "STOP_LOADING"
      });
    });
  };

  function handleClickModal() {
    setRecuperarContra(true);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.divDelForm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h3",
    align: "center",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["inicio"])(lang)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: onFormSubmit,
    style: {
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    className: "gridsF",
    container: true,
    direction: "column",
    alignItems: "center",
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["email"])(lang),
    id: "custom-css-outlined-input",
    margin: "normal",
    value: correo,
    onChange: function onChange(e) {
      return setCorreo(e.target.value);
    },
    className: classes.TextField1,
    type: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["contra"])(lang),
    id: "custom-css-outlined-input" + 1,
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    className: classes.TextField2,
    type: "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "flex-end",
    className: "grids",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["ingresar"])(lang))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["olvidoDeContra"])(lang), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: handleClickModal,
    className: "links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["aqui"])(lang)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["registrarse"])(lang), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      return setLogin(false);
    },
    className: "links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  }, " ", Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["aqui"])(lang)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModalRecuperacion__WEBPACK_IMPORTED_MODULE_4__["default"], {
    recuperarContra: recuperarContra,
    setRecuperarContra: setRecuperarContra,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(stylesFor)(LoginForm));

/***/ }),

/***/ "lRAo":
/*!***************************************************************!*\
  !*** ./src/Components/Diccionario/Login/ModalRecuperacion.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "TTf+");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "04ZO");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Clear */ "ytJY");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../js/Language */ "UQwk");
/* harmony import */ var _stores_sesionStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../stores/sesionStore */ "d70u");
/* harmony import */ var _js_webServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../js/webServices */ "xrMW");
var _this = undefined,
    _jsxFileName = "/home/raul/Proyectos/dhusserlFinal/FE/src/Components/Diccionario/Login/ModalRecuperacion.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var modalRecuperacion = {
  modalinR: {
    width: "40%",
    maxHeight: "75vh",
    left: "25vw",
    top: "25.5vh",
    position: "absolute",
    padding: "30px 30px"
  },
  campoDeTexto: {
    width: "100%"
  },
  botonClear: {
    left: "18px",
    bottom: "15px",
    size: "small"
  },
  botonRecuperar: {
    top: "12px"
  },
  gridDelBoton: {
    textAlign: "right"
  }
};

var ModalRecuperacion = function ModalRecuperacion(props) {
  var global = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_stores_sesionStore__WEBPACK_IMPORTED_MODULE_5__["sesionStore"]);
  var state = global.state;
  var lang = state.lang;
  var classes = props.classes,
      setRecuperarContra = props.setRecuperarContra,
      recuperarContra = props.recuperarContra;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      correoRecuperado = _useState2[0],
      setCorreoRecuperado = _useState2[1];

  var onFormSubmit1 = function onFormSubmit1(event) {
    event.preventDefault();
    dispatch({
      type: 'START_LOADING'
    });
    var email = correoRecuperado;
    var service = "/login/recoverPassword/es?email=" + email;
    var enconding = window.btoa(email);
    Object(_js_webServices__WEBPACK_IMPORTED_MODULE_6__["loginService"])(service, "GET", {}, function (data) {
      console.log("data", data);
      dispatch({
        type: 'STOP_LOADING'
      });

      if (data.status == 200) {
        dispatch({
          type: "SET_SNACKBAR",
          payload: {
            open: true,
            variant: "success",
            message: Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["exitoBody"])(lang)
          }
        }); // dispatch({ type: 'SET_SESION', payload: { "user": nuevoCorreo, "password": nuevoPassword } })
        // setStore(data.response, email.correo)
      } else {
        dispatch({
          type: 'SET_SNACKBAR',
          payload: {
            open: true,
            variant: "error",
            message: Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["correoNoEncontrado"])(lang)
          }
        });
      }
    });
  };

  function handleClose() {
    setRecuperarContra(false);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    "aria-labelledby": "simple-modal-title",
    "aria-describedby": "simple-modal-description",
    open: recuperarContra,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.modalinR,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: onFormSubmit1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 11,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["modalRecuperacionContra"])(lang))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    "aria-haspopup": "true",
    onClick: handleClose,
    className: classes.botonClear,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fontSize: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    className: "divisor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 29
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 29
    }
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["modalIngresarCorreo"])(lang)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["email"])(lang),
    id: "custom-css-outlined-input",
    margin: "normal",
    value: correoRecuperado,
    onChange: function onChange(e) {
      return setCorreoRecuperado(e.target.value);
    },
    type: "email",
    className: classes.campoDeTexto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 6,
    className: classes.gridDelBoton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    type: "submit",
    size: "small",
    className: classes.botonRecuperar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 29
    }
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["ingresar"])(lang)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(modalRecuperacion)(ModalRecuperacion));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9EaWNjaW9uYXJpby9Mb2dpbi9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRGljY2lvbmFyaW8vTG9naW4vTW9kYWxSZWN1cGVyYWNpb24uanMiXSwibmFtZXMiOlsic3R5bGVzRm9yIiwiVGV4dEZpZWxkMSIsImp1c3RpZnkiLCJ3aWR0aCIsIlRleHRGaWVsZDIiLCJncmlkc0YiLCJtYXJnaW4iLCJkaXZEZWxGb3JtIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJMb2dpbkZvcm0iLCJwcm9wcyIsImNsYXNzZXMiLCJoaXN0b3J5Iiwic2V0TG9naW4iLCJnbG9iYWwiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJzZXNpb25TdG9yZSIsImRpc3BhdGNoIiwic3RhdGUiLCJsYW5nIiwibG9hZGluZyIsInVzZVN0YXRlIiwiY29ycmVvIiwic2V0Q29ycmVvIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJlY3VwZXJhckNvbnRyYSIsInNldFJlY3VwZXJhckNvbnRyYSIsIm9uRm9ybVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwic2VydmljZSIsInBhcmFtcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VySWQiLCJsb2dpblNlcnZpY2UiLCJkYXRhIiwiZXJyb3IiLCJwYXlsb2FkIiwib3BlbiIsInZhcmlhbnQiLCJtZXNzYWdlIiwiY29ycmVvSW52YWxpZG8iLCJudWV2YVNlc2lvbiIsInVzdWFyaW8iLCJwdXNoIiwiaGFuZGxlQ2xpY2tNb2RhbCIsImluaWNpbyIsIm1hcmdpblRvcCIsImVtYWlsIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29udHJhIiwiaW5ncmVzYXIiLCJvbHZpZG9EZUNvbnRyYSIsImFxdWkiLCJyZWdpc3RyYXJzZSIsIndpdGhTdHlsZXMiLCJtb2RhbFJlY3VwZXJhY2lvbiIsIm1vZGFsaW5SIiwibWF4SGVpZ2h0IiwibGVmdCIsInRvcCIsInBvc2l0aW9uIiwicGFkZGluZyIsImNhbXBvRGVUZXh0byIsImJvdG9uQ2xlYXIiLCJib3R0b20iLCJzaXplIiwiYm90b25SZWN1cGVyYXIiLCJncmlkRGVsQm90b24iLCJ0ZXh0QWxpZ24iLCJNb2RhbFJlY3VwZXJhY2lvbiIsImNvcnJlb1JlY3VwZXJhZG8iLCJzZXRDb3JyZW9SZWN1cGVyYWRvIiwib25Gb3JtU3VibWl0MSIsImVuY29uZGluZyIsIndpbmRvdyIsImJ0b2EiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiZXhpdG9Cb2R5IiwiY29ycmVvTm9FbmNvbnRyYWRvIiwiaGFuZGxlQ2xvc2UiLCJtb2RhbFJlY3VwZXJhY2lvbkNvbnRyYSIsIm1vZGFsSW5ncmVzYXJDb3JyZW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBV0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxZQUFVLEVBQUU7QUFDVkMsV0FBTyxFQUFFLFFBREM7QUFFVkMsU0FBSyxFQUFFO0FBRkcsR0FESTtBQUtoQkMsWUFBVSxFQUFFO0FBQ1ZGLFdBQU8sRUFBRSxRQURDO0FBRVZDLFNBQUssRUFBRTtBQUZHLEdBTEk7QUFTaEJFLFFBQU0sRUFBRTtBQUNOQyxVQUFNLEVBQUU7QUFERixHQVRRO0FBWWhCQyxZQUFVLEVBQUU7QUFDVkMsaUJBQWEsRUFBRSxNQURMO0FBRVZDLGNBQVUsRUFBRTtBQUZGO0FBWkksQ0FBbEI7O0FBa0JBLFNBQVNDLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUEsTUFDaEJDLE9BRGdCLEdBQ2VELEtBRGYsQ0FDaEJDLE9BRGdCO0FBQUEsTUFDUEMsT0FETyxHQUNlRixLQURmLENBQ1BFLE9BRE87QUFBQSxNQUNFQyxRQURGLEdBQ2VILEtBRGYsQ0FDRUcsUUFERjtBQUV4QixNQUFNQyxNQUFNLEdBQUdDLDRDQUFLLENBQUNDLFVBQU4sQ0FBaUJDLCtEQUFqQixD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O0FBS0ksWUFBUSxFQUFFLGtCQUFBeEIsQ0FBQztBQUFBLGFBQUl5QixtQkFBbUIsQ0FBQ3pCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXZCO0FBQUEsS0FMZjtBQU1JLFFBQUksRUFBQyxPQU5UO0FBT0ksYUFBUyxFQUFFNUMsT0FBTyxDQUFDMEQsWUFQdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBZkosZUE4QkksMkRBQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsQ0FBZjtBQUFrQixhQUFTLEVBQUUxRCxPQUFPLENBQUMrRCxZQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNJLDJEQUFDLHdEQUFEO0FBQ0ksV0FBTyxFQUFDLFdBRFo7QUFFSSxTQUFLLEVBQUMsU0FGVjtBQUdJLFFBQUksRUFBQyxRQUhUO0FBSUksUUFBSSxFQUFDLE9BSlQ7QUFLSSxhQUFTLEVBQUUvRCxPQUFPLENBQUM4RCxjQUx2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0toQiw2REFBUSxDQUFDckMsSUFBRCxDQVBiLENBREosQ0E5QkosQ0FESixDQURKLENBTkosQ0FESjtBQXVESCxDQXJGRDs7QUF1RmV5QyxxSUFBVSxDQUFDQyxpQkFBRCxDQUFWLENBQThCYyxpQkFBOUIsQ0FBZixFIiwiZmlsZSI6IjAuOGEwMGVkOGVjMmJkMDkzZGNmOTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUZXh0RmllbGQsIEdyaWQsIFR5cG9ncmFwaHksIEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5cbmltcG9ydCB7XG4gIGluaWNpbyxcbiAgZW1haWwsXG4gIGNvbnRyYSxcbiAgaW5ncmVzYXIsXG4gIG9sdmlkb0RlQ29udHJhLFxuICByZWdpc3RyYXJzZSxcbiAgYXF1aSxcbiAgY29ycmVvSW52YWxpZG8sXG59IGZyb20gXCIuLi8uLi8uLi9qcy9MYW5ndWFnZVwiO1xuXG5pbXBvcnQgTW9kYWxSZWN1cGVyYWNpb24gZnJvbSBcIi4vTW9kYWxSZWN1cGVyYWNpb25cIjtcbmltcG9ydCB7IGxvZ2luU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9qcy93ZWJTZXJ2aWNlc1wiO1xuXG5pbXBvcnQgeyBzZXNpb25TdG9yZSB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZXMvc2VzaW9uU3RvcmVcIjtcblxuY29uc3Qgc3R5bGVzRm9yID0ge1xuICBUZXh0RmllbGQxOiB7XG4gICAganVzdGlmeTogXCJjZW50ZXJcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gIH0sXG4gIFRleHRGaWVsZDI6IHtcbiAgICBqdXN0aWZ5OiBcImNlbnRlclwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbiAgZ3JpZHNGOiB7XG4gICAgbWFyZ2luOiBcIjcuNXZoIDIuNXZ3XCIsXG4gIH0sXG4gIGRpdkRlbEZvcm06IHtcbiAgICBwYWRkaW5nQm90dG9tOiBcIjE1dmhcIixcbiAgICBwYWRkaW5nVG9wOiBcIjcuNXZoXCIsXG4gIH0sXG59O1xuXG5mdW5jdGlvbiBMb2dpbkZvcm0ocHJvcHMpIHtcbiAgY29uc3QgeyBjbGFzc2VzLCBoaXN0b3J5LCBzZXRMb2dpbiB9ID0gcHJvcHM7XG4gIGNvbnN0IGdsb2JhbCA9IFJlYWN0LnVzZUNvbnRleHQoc2VzaW9uU3RvcmUpO1xuICBjb25zdCB7IGRpc3BhdGNoLCBzdGF0ZSB9ID0gZ2xvYmFsO1xuICBjb25zdCB7IGxhbmcsIGxvYWRpbmcgfSA9IHN0YXRlO1xuXG4gIGNvbnN0IFtjb3JyZW8sIHNldENvcnJlb10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JlY3VwZXJhckNvbnRyYSwgc2V0UmVjdXBlcmFyQ29udHJhXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkZvcm1TdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTVEFSVF9MT0FESU5HXCIgfSk7XG5cbiAgICB2YXIgc2VydmljZSA9IFwiL2xvZ2luL3VzdWFyaW9cIjtcbiAgICB2YXIgcGFyYW1zID0gSlNPTi5zdHJpbmdpZnkoeyB1c2VySWQ6IGNvcnJlbywgcGFzc3dvcmQ6IHBhc3N3b3JkIH0pO1xuXG4gICAgbG9naW5TZXJ2aWNlKHNlcnZpY2UsIFwiUE9TVFwiLCBwYXJhbXMsIChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5kYXRhLmVycm9yKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBcIlNFVF9TTkFDS0JBUlwiLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICB2YXJpYW50OiBcImVycm9yXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBjb3JyZW9JbnZhbGlkbyhsYW5nKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBudWV2YVNlc2lvbiA9IHtcbiAgICAgICAgICB1c3VhcmlvOiBjb3JyZW8sXG4gICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICB9O1xuXG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBcIklOSUNJQVJfU0VTSU9OXCIsXG4gICAgICAgICAgcGF5bG9hZDogbnVldmFTZXNpb24sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGhpc3RvcnkucHVzaChcIi9odXNzZXJsXCIpO1xuICAgICAgfVxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNUT1BfTE9BRElOR1wiIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrTW9kYWwoKSB7XG4gICAgc2V0UmVjdXBlcmFyQ29udHJhKHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZEZWxGb3JtfT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGFsaWduPVwiY2VudGVyXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICB7aW5pY2lvKGxhbmcpfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uRm9ybVN1Ym1pdH0gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjUlXCIgfX0+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZHNGXCJcbiAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgID5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9IGxnPXs3fSBjbGFzc05hbWU9XCJncmlkc1wiPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBsYWJlbD17ZW1haWwobGFuZyl9XG4gICAgICAgICAgICAgIGlkPVwiY3VzdG9tLWNzcy1vdXRsaW5lZC1pbnB1dFwiXG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtjb3JyZW99XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29ycmVvKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLlRleHRGaWVsZDF9XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9IGxnPXs3fSBjbGFzc05hbWU9XCJncmlkc1wiPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBsYWJlbD17Y29udHJhKGxhbmcpfVxuICAgICAgICAgICAgICBpZD17XCJjdXN0b20tY3NzLW91dGxpbmVkLWlucHV0XCIgKyAxfVxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuVGV4dEZpZWxkMn1cbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbGc9ezd9IGNsYXNzTmFtZT1cImdyaWRzXCI+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImZsZXgtZW5kXCIgY2xhc3NOYW1lPVwiZ3JpZHNcIj5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICB7aW5ncmVzYXIobGFuZyl9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBsZz17N30+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICAgICAge29sdmlkb0RlQ29udHJhKGxhbmcpfXtcIiBcIn1cbiAgICAgICAgICAgICAgPGEgb25DbGljaz17aGFuZGxlQ2xpY2tNb2RhbH0gY2xhc3NOYW1lPVwibGlua3NcIj5cbiAgICAgICAgICAgICAgICB7YXF1aShsYW5nKX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9IGxnPXs3fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgICAgICB7cmVnaXN0cmFyc2UobGFuZyl9XG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldExvZ2luKGZhbHNlKX0gY2xhc3NOYW1lPVwibGlua3NcIj5cbiAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAge2FxdWkobGFuZyl9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxNb2RhbFJlY3VwZXJhY2lvblxuICAgICAgICByZWN1cGVyYXJDb250cmE9e3JlY3VwZXJhckNvbnRyYX1cbiAgICAgICAgc2V0UmVjdXBlcmFyQ29udHJhPXtzZXRSZWN1cGVyYXJDb250cmF9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlc0ZvcikoTG9naW5Gb3JtKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1vZGFsLCBUeXBvZ3JhcGh5LCBQYXBlciwgRGl2aWRlciwgVGV4dEZpZWxkLCBCdXR0b24sIEdyaWQsIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgQ2xlYXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbGVhcic7XG5cbmltcG9ydCB7IG1vZGFsUmVjdXBlcmFjaW9uQ29udHJhLCBtb2RhbEluZ3Jlc2FyQ29ycmVvLCBlbWFpbCwgaW5ncmVzYXIsIGV4aXRvQm9keSwgY29ycmVvTm9FbmNvbnRyYWRvIH0gZnJvbSAnLi4vLi4vLi4vanMvTGFuZ3VhZ2UnO1xuXG5pbXBvcnQgeyBzZXNpb25TdG9yZSB9IGZyb20gJy4uLy4uLy4uL3N0b3Jlcy9zZXNpb25TdG9yZSdcbmltcG9ydCB7IGxvZ2luU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2pzL3dlYlNlcnZpY2VzJztcblxuY29uc3QgbW9kYWxSZWN1cGVyYWNpb24gPSB7XG4gICAgbW9kYWxpblI6IHtcbiAgICAgICAgd2lkdGg6IFwiNDAlXCIsXG4gICAgICAgIG1heEhlaWdodDogXCI3NXZoXCIsXG4gICAgICAgIGxlZnQ6IFwiMjV2d1wiLFxuICAgICAgICB0b3A6IFwiMjUuNXZoXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMzBweCAzMHB4XCIsXG4gICAgfSxcbiAgICBjYW1wb0RlVGV4dG86IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiXG4gICAgfSxcbiAgICBib3RvbkNsZWFyOiB7XG4gICAgICAgIGxlZnQ6IFwiMThweFwiLFxuICAgICAgICBib3R0b206IFwiMTVweFwiLFxuICAgICAgICBzaXplOiBcInNtYWxsXCJcbiAgICB9LFxuICAgIGJvdG9uUmVjdXBlcmFyOiB7XG4gICAgICAgIHRvcDogXCIxMnB4XCJcbiAgICB9LFxuICAgIGdyaWREZWxCb3Rvbjoge1xuICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIlxuICAgIH1cbn1cblxuY29uc3QgTW9kYWxSZWN1cGVyYWNpb24gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBnbG9iYWwgPSB1c2VDb250ZXh0KHNlc2lvblN0b3JlKTtcbiAgICBjb25zdCB7IHN0YXRlIH0gPSBnbG9iYWxcbiAgICBjb25zdCB7IGxhbmcgfSA9IHN0YXRlXG4gICAgY29uc3QgeyBjbGFzc2VzLCBzZXRSZWN1cGVyYXJDb250cmEsIHJlY3VwZXJhckNvbnRyYSB9ID0gcHJvcHM7XG4gICAgY29uc3QgW2NvcnJlb1JlY3VwZXJhZG8sIHNldENvcnJlb1JlY3VwZXJhZG9dID0gdXNlU3RhdGUoXCJcIilcblxuICAgIGNvbnN0IG9uRm9ybVN1Ym1pdDEgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU1RBUlRfTE9BRElORycgfSlcbiAgICAgICAgdmFyIGVtYWlsID0gY29ycmVvUmVjdXBlcmFkb1xuICAgICAgICB2YXIgc2VydmljZSA9IFwiL2xvZ2luL3JlY292ZXJQYXNzd29yZC9lcz9lbWFpbD1cIiArIGVtYWlsXG4gICAgICAgIHZhciBlbmNvbmRpbmcgPSB3aW5kb3cuYnRvYShlbWFpbClcbiAgICAgICAgbG9naW5TZXJ2aWNlKHNlcnZpY2UsIFwiR0VUXCIsIHt9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTVE9QX0xPQURJTkcnIH0pXG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TTkFDS0JBUlwiLCBwYXlsb2FkOiB7IG9wZW46IHRydWUsIHZhcmlhbnQ6IFwic3VjY2Vzc1wiLCBtZXNzYWdlOiBleGl0b0JvZHkobGFuZykgfSB9KVxuICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9TRVNJT04nLCBwYXlsb2FkOiB7IFwidXNlclwiOiBudWV2b0NvcnJlbywgXCJwYXNzd29yZFwiOiBudWV2b1Bhc3N3b3JkIH0gfSlcbiAgICAgICAgICAgICAgICAvLyBzZXRTdG9yZShkYXRhLnJlc3BvbnNlLCBlbWFpbC5jb3JyZW8pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9TTkFDS0JBUicsIHBheWxvYWQ6IHsgb3BlbjogdHJ1ZSwgdmFyaWFudDogXCJlcnJvclwiLCBtZXNzYWdlOiBjb3JyZW9Ob0VuY29udHJhZG8obGFuZykgfSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsb3NlKCkge1xuICAgICAgICBzZXRSZWN1cGVyYXJDb250cmEoZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtbW9kYWwtdGl0bGVcIlxuICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInNpbXBsZS1tb2RhbC1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBvcGVuPXtyZWN1cGVyYXJDb250cmF9XG4gICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbGluUn0+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uRm9ybVN1Ym1pdDF9PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb2RhbFJlY3VwZXJhY2lvbkNvbnRyYShsYW5nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYm90b25DbGVhcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbGVhckljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIGNsYXNzTmFtZT1cImRpdmlzb3JcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kYWxJbmdyZXNhckNvcnJlbyhsYW5nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17ZW1haWwobGFuZyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY3VzdG9tLWNzcy1vdXRsaW5lZC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3JyZW9SZWN1cGVyYWRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRDb3JyZW9SZWN1cGVyYWRvKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhbXBvRGVUZXh0b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWREZWxCb3Rvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3RvblJlY3VwZXJhcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmdyZXNhcihsYW5nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKG1vZGFsUmVjdXBlcmFjaW9uKShNb2RhbFJlY3VwZXJhY2lvbik7Il0sInNvdXJjZVJvb3QiOiIifQ==