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
      type: 'START_LOADING'
    });
    var service = "/login/usuario";
    var params = JSON.stringify({
      userId: correo,
      password: password
    });
    Object(_js_webServices__WEBPACK_IMPORTED_MODULE_5__["loginService"])(service, "POST", params, function (data) {
      if (data.data.error) {
        dispatch({
          type: 'SET_SNACKBAR',
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
          type: 'INICIAR_SESION',
          payload: nuevaSesion
        });
        history.push("/husserl");
      }

      dispatch({
        type: 'STOP_LOADING'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9EaWNjaW9uYXJpby9Mb2dpbi9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRGljY2lvbmFyaW8vTG9naW4vTW9kYWxSZWN1cGVyYWNpb24uanMiXSwibmFtZXMiOlsic3R5bGVzRm9yIiwiVGV4dEZpZWxkMSIsImp1c3RpZnkiLCJ3aWR0aCIsIlRleHRGaWVsZDIiLCJncmlkc0YiLCJtYXJnaW4iLCJkaXZEZWxGb3JtIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJMb2dpbkZvcm0iLCJwcm9wcyIsImNsYXNzZXMiLCJoaXN0b3J5Iiwic2V0TG9naW4iLCJnbG9iYWwiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJzZXNpb25TdG9yZSIsImRpc3BhdGNoIiwic3RhdGUiLCJsYW5nIiwibG9hZGluZyIsInVzZVN0YXRlIiwiY29ycmVvIiwic2V0Q29ycmVvIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJlY3VwZXJhckNvbnRyYSIsInNldFJlY3VwZXJhckNvbnRyYSIsIm9uRm9ybVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwic2VydmljZSIsInBhcmFtcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VySWQiLCJsb2dpblNlcnZpY2UiLCJkYXRhIiwiZXJyb3IiLCJwYXlsb2FkIiwib3BlbiIsInZhcmlhbnQiLCJtZXNzYWdlIiwiY29ycmVvSW52YWxpZG8iLCJudWV2YVNlc2lvbiIsInVzdWFyaW8iLCJwdXNoIiwiaGFuZGxlQ2xpY2tNb2RhbCIsImluaWNpbyIsIm1hcmdpblRvcCIsImVtYWlsIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29udHJhIiwiaW5ncmVzYXIiLCJvbHZpZG9EZUNvbnRyYSIsImFxdWkiLCJyZWdpc3RyYXJzZSIsIndpdGhTdHlsZXMiLCJtb2RhbFJlY3VwZXJhY2lvbiIsIm1vZGFsaW5SIiwibWF4SGVpZ2h0IiwibGVmdCIsInRvcCIsInBvc2l0aW9uIiwicGFkZGluZyIsImNhbXBvRGVUZXh0byIsImJvdG9uQ2xlYXIiLCJib3R0b20iLCJzaXplIiwiYm90b25SZWN1cGVyYXIiLCJncmlkRGVsQm90b24iLCJ0ZXh0QWxpZ24iLCJNb2RhbFJlY3VwZXJhY2lvbiIsImNvcnJlb1JlY3VwZXJhZG8iLCJzZXRDb3JyZW9SZWN1cGVyYWRvIiwib25Gb3JtU3VibWl0MSIsImVuY29uZGluZyIsIndpbmRvdyIsImJ0b2EiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiZXhpdG9Cb2R5IiwiY29ycmVvTm9FbmNvbnRyYWRvIiwiaGFuZGxlQ2xvc2UiLCJtb2RhbFJlY3VwZXJhY2lvbkNvbnRyYSIsIm1vZGFsSW5ncmVzYXJDb3JyZW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBV0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxZQUFVLEVBQUU7QUFDVkMsV0FBTyxFQUFFLFFBREM7QUFFVkMsU0FBSyxFQUFFO0FBRkcsR0FESTtBQUtoQkMsWUFBVSxFQUFFO0FBQ1ZGLFdBQU8sRUFBRSxRQURDO0FBRVZDLFNBQUssRUFBRTtBQUZHLEdBTEk7QUFTaEJFLFFBQU0sRUFBRTtBQUNOQyxVQUFNLEVBQUU7QUFERixHQVRRO0FBWWhCQyxZQUFVLEVBQUU7QUFDVkMsaUJBQWEsRUFBRSxNQURMO0FBRVZDLGNBQVUsRUFBRTtBQUZGO0FBWkksQ0FBbEI7O0FBa0JBLFNBQVNDLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUEsTUFDaEJDLE9BRGdCLEdBQ2VELEtBRGYsQ0FDaEJDLE9BRGdCO0FBQUEsTUFDUEMsT0FETyxHQUNlRixLQURmLENBQ1BFLE9BRE87QUFBQSxNQUNFQyxRQURGLEdBQ2VILEtBRGYsQ0FDRUcsUUFERjtBQUV4QixNQUFNQyxNQUFNLEdBQUdDLDRDQUFLLENBQUNDLFVBQU4sQ0FBaUJDLCtEQUFqQixD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Z0JBSlg7QUFLSSxZQUFRLEVBQUUsa0JBQUF4QixDQUFDO0FBQUEsYUFBSXlCLG1CQUFtQixDQUFDekIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBdkI7QUFBQSxLQUxmO0FBTUksUUFBSSxFQUFDLE9BTlQ7QUFPSSxhQUFTLEVBQUU1QyxPQUFPLENBQUMwRCxZQVB2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosQ0FmSixlQThCSSwyREFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxDQUFmO0FBQWtCLGFBQVMsRUFBRTFELE9BQU8sQ0FBQytELFlBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ0ksMkRBQUMsd0RBQUQ7QUFDSSxXQUFPLEVBQUMsV0FEWjtBQUVJLFNBQUssRUFBQyxTQUZWO0FBR0ksUUFBSSxFQUFDLFFBSFQ7QUFJSSxRQUFJLEVBQUMsT0FKVDtBQUtJLGFBQVMsRUFBRS9ELE9BQU8sQ0FBQzhELGNBTHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPS2hCLDZEQUFRLENBQUNyQyxJQUFELENBUGIsQ0FESixDQTlCSixDQURKLENBREosQ0FOSixDQURKO0FBdURILENBckZEOztBQXVGZXlDLHFJQUFVLENBQUNDLGlCQUFELENBQVYsQ0FBOEJjLGlCQUE5QixDQUFmLEUiLCJmaWxlIjoiMC4zOWE4NDI0M2ZjMjRmYTNjYjBjNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRleHRGaWVsZCwgR3JpZCwgVHlwb2dyYXBoeSwgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIjtcblxuaW1wb3J0IHtcbiAgaW5pY2lvLFxuICBlbWFpbCxcbiAgY29udHJhLFxuICBpbmdyZXNhcixcbiAgb2x2aWRvRGVDb250cmEsXG4gIHJlZ2lzdHJhcnNlLFxuICBhcXVpLFxuICBjb3JyZW9JbnZhbGlkbyxcbn0gZnJvbSBcIi4uLy4uLy4uL2pzL0xhbmd1YWdlXCI7XG5cbmltcG9ydCBNb2RhbFJlY3VwZXJhY2lvbiBmcm9tIFwiLi9Nb2RhbFJlY3VwZXJhY2lvblwiO1xuaW1wb3J0IHsgbG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2pzL3dlYlNlcnZpY2VzXCI7XG5cbmltcG9ydCB7IHNlc2lvblN0b3JlIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3Jlcy9zZXNpb25TdG9yZVwiO1xuXG5jb25zdCBzdHlsZXNGb3IgPSB7XG4gIFRleHRGaWVsZDE6IHtcbiAgICBqdXN0aWZ5OiBcImNlbnRlclwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbiAgVGV4dEZpZWxkMjoge1xuICAgIGp1c3RpZnk6IFwiY2VudGVyXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICB9LFxuICBncmlkc0Y6IHtcbiAgICBtYXJnaW46IFwiNy41dmggMi41dndcIixcbiAgfSxcbiAgZGl2RGVsRm9ybToge1xuICAgIHBhZGRpbmdCb3R0b206IFwiMTV2aFwiLFxuICAgIHBhZGRpbmdUb3A6IFwiNy41dmhcIixcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIExvZ2luRm9ybShwcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMsIGhpc3RvcnksIHNldExvZ2luIH0gPSBwcm9wcztcbiAgY29uc3QgZ2xvYmFsID0gUmVhY3QudXNlQ29udGV4dChzZXNpb25TdG9yZSk7XG4gIGNvbnN0IHsgZGlzcGF0Y2gsIHN0YXRlIH0gPSBnbG9iYWxcbiAgY29uc3QgeyBsYW5nLCBsb2FkaW5nIH0gPSBzdGF0ZVxuXG4gIGNvbnN0IFtjb3JyZW8sIHNldENvcnJlb10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JlY3VwZXJhckNvbnRyYSwgc2V0UmVjdXBlcmFyQ29udHJhXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkZvcm1TdWJtaXQgPSAoZXZlbnQpID0+IHtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnU1RBUlRfTE9BRElORycgfSk7XG5cbiAgICB2YXIgc2VydmljZSA9IFwiL2xvZ2luL3VzdWFyaW9cIjtcbiAgICB2YXIgcGFyYW1zID0gSlNPTi5zdHJpbmdpZnkoeyB1c2VySWQ6IGNvcnJlbywgcGFzc3dvcmQ6IHBhc3N3b3JkIH0pO1xuXG4gICAgbG9naW5TZXJ2aWNlKHNlcnZpY2UsIFwiUE9TVFwiLCBwYXJhbXMsIChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5kYXRhLmVycm9yKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnU0VUX1NOQUNLQkFSJywgcGF5bG9hZDoge1xuICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgIHZhcmlhbnQ6IFwiZXJyb3JcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGNvcnJlb0ludmFsaWRvKGxhbmcpLFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbnVldmFTZXNpb24gPSB7XG4gICAgICAgICAgdXN1YXJpbzogY29ycmVvLFxuICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgfTtcblxuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ0lOSUNJQVJfU0VTSU9OJyxcbiAgICAgICAgICBwYXlsb2FkOiBudWV2YVNlc2lvblxuICAgICAgICB9KVxuXG4gICAgICAgIGhpc3RvcnkucHVzaChcIi9odXNzZXJsXCIpO1xuICAgICAgfVxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU1RPUF9MT0FESU5HJyB9KVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tNb2RhbCgpIHtcbiAgICBzZXRSZWN1cGVyYXJDb250cmEodHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRpdkRlbEZvcm19PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgYWxpZ249XCJjZW50ZXJcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgIHtpbmljaW8obGFuZyl9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25Gb3JtU3VibWl0fSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNSVcIiB9fT5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBjbGFzc05hbWU9XCJncmlkc0ZcIlxuICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbGc9ezd9IGNsYXNzTmFtZT1cImdyaWRzXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPXtlbWFpbChsYW5nKX1cbiAgICAgICAgICAgICAgaWQ9XCJjdXN0b20tY3NzLW91dGxpbmVkLWlucHV0XCJcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvcnJlb31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb3JyZW8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuVGV4dEZpZWxkMX1cbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbGc9ezd9IGNsYXNzTmFtZT1cImdyaWRzXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPXtjb250cmEobGFuZyl9XG4gICAgICAgICAgICAgIGlkPXtcImN1c3RvbS1jc3Mtb3V0bGluZWQtaW5wdXRcIiArIDF9XG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5UZXh0RmllbGQyfVxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBsZz17N30gY2xhc3NOYW1lPVwiZ3JpZHNcIj5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiZmxleC1lbmRcIiBjbGFzc05hbWU9XCJncmlkc1wiPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgIHtpbmdyZXNhcihsYW5nKX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9IGxnPXs3fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgICAgICB7b2x2aWRvRGVDb250cmEobGFuZyl9e1wiIFwifVxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVDbGlja01vZGFsfSBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICAgICAgICAgIHthcXVpKGxhbmcpfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbGc9ezd9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgICAgIHtyZWdpc3RyYXJzZShsYW5nKX1cbiAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gc2V0TG9naW4oZmFsc2UpfSBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICB7YXF1aShsYW5nKX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9mb3JtPlxuICAgICAgPE1vZGFsUmVjdXBlcmFjaW9uXG4gICAgICAgIHJlY3VwZXJhckNvbnRyYT17cmVjdXBlcmFyQ29udHJhfVxuICAgICAgICBzZXRSZWN1cGVyYXJDb250cmE9e3NldFJlY3VwZXJhckNvbnRyYX1cbiAgICAgIC8+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXNGb3IpKExvZ2luRm9ybSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbCwgVHlwb2dyYXBoeSwgUGFwZXIsIERpdmlkZXIsIFRleHRGaWVsZCwgQnV0dG9uLCBHcmlkLCBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IENsZWFySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xlYXInO1xuXG5pbXBvcnQgeyBtb2RhbFJlY3VwZXJhY2lvbkNvbnRyYSwgbW9kYWxJbmdyZXNhckNvcnJlbywgZW1haWwsIGluZ3Jlc2FyLCBleGl0b0JvZHksIGNvcnJlb05vRW5jb250cmFkbyB9IGZyb20gJy4uLy4uLy4uL2pzL0xhbmd1YWdlJztcblxuaW1wb3J0IHsgc2VzaW9uU3RvcmUgfSBmcm9tICcuLi8uLi8uLi9zdG9yZXMvc2VzaW9uU3RvcmUnXG5pbXBvcnQgeyBsb2dpblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9qcy93ZWJTZXJ2aWNlcyc7XG5cbmNvbnN0IG1vZGFsUmVjdXBlcmFjaW9uID0ge1xuICAgIG1vZGFsaW5SOiB7XG4gICAgICAgIHdpZHRoOiBcIjQwJVwiLFxuICAgICAgICBtYXhIZWlnaHQ6IFwiNzV2aFwiLFxuICAgICAgICBsZWZ0OiBcIjI1dndcIixcbiAgICAgICAgdG9wOiBcIjI1LjV2aFwiLFxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICBwYWRkaW5nOiBcIjMwcHggMzBweFwiLFxuICAgIH0sXG4gICAgY2FtcG9EZVRleHRvOiB7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIlxuICAgIH0sXG4gICAgYm90b25DbGVhcjoge1xuICAgICAgICBsZWZ0OiBcIjE4cHhcIixcbiAgICAgICAgYm90dG9tOiBcIjE1cHhcIixcbiAgICAgICAgc2l6ZTogXCJzbWFsbFwiXG4gICAgfSxcbiAgICBib3RvblJlY3VwZXJhcjoge1xuICAgICAgICB0b3A6IFwiMTJweFwiXG4gICAgfSxcbiAgICBncmlkRGVsQm90b246IHtcbiAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCJcbiAgICB9XG59XG5cbmNvbnN0IE1vZGFsUmVjdXBlcmFjaW9uID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgZ2xvYmFsID0gdXNlQ29udGV4dChzZXNpb25TdG9yZSk7XG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gZ2xvYmFsXG4gICAgY29uc3QgeyBsYW5nIH0gPSBzdGF0ZVxuICAgIGNvbnN0IHsgY2xhc3Nlcywgc2V0UmVjdXBlcmFyQ29udHJhLCByZWN1cGVyYXJDb250cmEgfSA9IHByb3BzO1xuICAgIGNvbnN0IFtjb3JyZW9SZWN1cGVyYWRvLCBzZXRDb3JyZW9SZWN1cGVyYWRvXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICBjb25zdCBvbkZvcm1TdWJtaXQxID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NUQVJUX0xPQURJTkcnIH0pXG4gICAgICAgIHZhciBlbWFpbCA9IGNvcnJlb1JlY3VwZXJhZG9cbiAgICAgICAgdmFyIHNlcnZpY2UgPSBcIi9sb2dpbi9yZWNvdmVyUGFzc3dvcmQvZXM/ZW1haWw9XCIgKyBlbWFpbFxuICAgICAgICB2YXIgZW5jb25kaW5nID0gd2luZG93LmJ0b2EoZW1haWwpXG4gICAgICAgIGxvZ2luU2VydmljZShzZXJ2aWNlLCBcIkdFVFwiLCB7fSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKVxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU1RPUF9MT0FESU5HJyB9KVxuICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfU05BQ0tCQVJcIiwgcGF5bG9hZDogeyBvcGVuOiB0cnVlLCB2YXJpYW50OiBcInN1Y2Nlc3NcIiwgbWVzc2FnZTogZXhpdG9Cb2R5KGxhbmcpIH0gfSlcbiAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfU0VTSU9OJywgcGF5bG9hZDogeyBcInVzZXJcIjogbnVldm9Db3JyZW8sIFwicGFzc3dvcmRcIjogbnVldm9QYXNzd29yZCB9IH0pXG4gICAgICAgICAgICAgICAgLy8gc2V0U3RvcmUoZGF0YS5yZXNwb25zZSwgZW1haWwuY29ycmVvKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfU05BQ0tCQVInLCBwYXlsb2FkOiB7IG9wZW46IHRydWUsIHZhcmlhbnQ6IFwiZXJyb3JcIiwgbWVzc2FnZTogY29ycmVvTm9FbmNvbnRyYWRvKGxhbmcpIH0gfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDbG9zZSgpIHtcbiAgICAgICAgc2V0UmVjdXBlcmFyQ29udHJhKGZhbHNlKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwic2ltcGxlLW1vZGFsLXRpdGxlXCJcbiAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJzaW1wbGUtbW9kYWwtZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgb3Blbj17cmVjdXBlcmFyQ29udHJhfVxuICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWxpblJ9PlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvbkZvcm1TdWJtaXQxfT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kYWxSZWN1cGVyYWNpb25Db250cmEobGFuZyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvdG9uQ2xlYXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xlYXJJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciBjbGFzc05hbWU9XCJkaXZpc29yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21vZGFsSW5ncmVzYXJDb3JyZW8obGFuZyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2VtYWlsKGxhbmcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImN1c3RvbS1jc3Mtb3V0bGluZWQtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29ycmVvUmVjdXBlcmFkb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q29ycmVvUmVjdXBlcmFkbyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYW1wb0RlVGV4dG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkRGVsQm90b259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYm90b25SZWN1cGVyYXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5ncmVzYXIobGFuZyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L01vZGFsPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhtb2RhbFJlY3VwZXJhY2lvbikoTW9kYWxSZWN1cGVyYWNpb24pOyJdLCJzb3VyY2VSb290IjoiIn0=