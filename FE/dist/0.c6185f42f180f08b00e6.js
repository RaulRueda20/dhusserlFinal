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
var _jsxFileName = "/home/wizard/Proyectos/dhusserlFinal/FE/src/Components/Diccionario/Login/LoginForm.js";

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

    if (correo == "" || password == "") {
      dispatch({
        type: "SET_SNACKBAR",
        payload: {
          open: true,
          variant: "error",
          message: Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["correoInvalido"])(lang)
        }
      });
      dispatch({
        type: "STOP_LOADING"
      });
    } else if (correo != "" && password != "") {
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
    }
  };

  function handleClickModal() {
    setRecuperarContra(true);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.divDelForm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h3",
    align: "center",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
      lineNumber: 103,
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
      lineNumber: 104,
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
      lineNumber: 111,
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
      lineNumber: 122,
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
      lineNumber: 123,
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
      lineNumber: 132,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "flex-end",
    className: "grids",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
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
      lineNumber: 141,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["olvidoDeContra"])(lang), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: handleClickModal,
    className: "links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
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
      lineNumber: 149,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
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
      lineNumber: 152,
      columnNumber: 15
    }
  }, " ", Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["aqui"])(lang)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModalRecuperacion__WEBPACK_IMPORTED_MODULE_4__["default"], {
    recuperarContra: recuperarContra,
    setRecuperarContra: setRecuperarContra,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
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
    _jsxFileName = "/home/wizard/Proyectos/dhusserlFinal/FE/src/Components/Diccionario/Login/ModalRecuperacion.js";

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
  var state = global.state,
      dispatch = global.dispatch;
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
      type: "START_LOADING"
    });
    var email = correoRecuperado;
    var service = "/login/recoverPassword/es?email=" + email;
    var enconding = window.btoa(email);
    Object(_js_webServices__WEBPACK_IMPORTED_MODULE_6__["loginService"])(service, "GET", {}, function (data) {
      dispatch({
        type: "STOP_LOADING"
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
          type: "SET_SNACKBAR",
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
      lineNumber: 92,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.modalinR,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: onFormSubmit1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 11,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["modalRecuperacionContra"])(lang))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    "aria-haspopup": "true",
    onClick: handleClose,
    className: classes.botonClear,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fontSize: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    className: "divisor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
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
      lineNumber: 118,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 6,
    className: classes.gridDelBoton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
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
      lineNumber: 129,
      columnNumber: 15
    }
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["ingresar"])(lang)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(modalRecuperacion)(ModalRecuperacion));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9EaWNjaW9uYXJpby9Mb2dpbi9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRGljY2lvbmFyaW8vTG9naW4vTW9kYWxSZWN1cGVyYWNpb24uanMiXSwibmFtZXMiOlsic3R5bGVzRm9yIiwiVGV4dEZpZWxkMSIsImp1c3RpZnkiLCJ3aWR0aCIsIlRleHRGaWVsZDIiLCJncmlkc0YiLCJtYXJnaW4iLCJkaXZEZWxGb3JtIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJMb2dpbkZvcm0iLCJwcm9wcyIsImNsYXNzZXMiLCJoaXN0b3J5Iiwic2V0TG9naW4iLCJnbG9iYWwiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJzZXNpb25TdG9yZSIsImRpc3BhdGNoIiwic3RhdGUiLCJsYW5nIiwibG9hZGluZyIsInVzZVN0YXRlIiwiY29ycmVvIiwic2V0Q29ycmVvIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJlY3VwZXJhckNvbnRyYSIsInNldFJlY3VwZXJhckNvbnRyYSIsIm9uRm9ybVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwic2VydmljZSIsInBhcmFtcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VySWQiLCJwYXlsb2FkIiwib3BlbiIsInZhcmlhbnQiLCJtZXNzYWdlIiwiY29ycmVvSW52YWxpZG8iLCJsb2dpblNlcnZpY2UiLCJkYXRhIiwiZXJyb3IiLCJudWV2YVNlc2lvbiIsInVzdWFyaW8iLCJwdXNoIiwiaGFuZGxlQ2xpY2tNb2RhbCIsImluaWNpbyIsIm1hcmdpblRvcCIsImVtYWlsIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29udHJhIiwiaW5ncmVzYXIiLCJvbHZpZG9EZUNvbnRyYSIsImFxdWkiLCJyZWdpc3RyYXJzZSIsIndpdGhTdHlsZXMiLCJtb2RhbFJlY3VwZXJhY2lvbiIsIm1vZGFsaW5SIiwibWF4SGVpZ2h0IiwibGVmdCIsInRvcCIsInBvc2l0aW9uIiwicGFkZGluZyIsImNhbXBvRGVUZXh0byIsImJvdG9uQ2xlYXIiLCJib3R0b20iLCJzaXplIiwiYm90b25SZWN1cGVyYXIiLCJncmlkRGVsQm90b24iLCJ0ZXh0QWxpZ24iLCJNb2RhbFJlY3VwZXJhY2lvbiIsImNvcnJlb1JlY3VwZXJhZG8iLCJzZXRDb3JyZW9SZWN1cGVyYWRvIiwib25Gb3JtU3VibWl0MSIsImVuY29uZGluZyIsIndpbmRvdyIsImJ0b2EiLCJzdGF0dXMiLCJleGl0b0JvZHkiLCJjb3JyZW9Ob0VuY29udHJhZG8iLCJoYW5kbGVDbG9zZSIsIm1vZGFsUmVjdXBlcmFjaW9uQ29udHJhIiwibW9kYWxJbmdyZXNhckNvcnJlbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFXQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLFlBQVUsRUFBRTtBQUNWQyxXQUFPLEVBQUUsUUFEQztBQUVWQyxTQUFLLEVBQUU7QUFGRyxHQURJO0FBS2hCQyxZQUFVLEVBQUU7QUFDVkYsV0FBTyxFQUFFLFFBREM7QUFFVkMsU0FBSyxFQUFFO0FBRkcsR0FMSTtBQVNoQkUsUUFBTSxFQUFFO0FBQ05DLFVBQU0sRUFBRTtBQURGLEdBVFE7QUFZaEJDLFlBQVUsRUFBRTtBQUNWQyxpQkFBYSxFQUFFLE1BREw7QUFFVkMsY0FBVSxFQUFFO0FBRkY7QUFaSSxDQUFsQjs7QUFrQkEsU0FBU0MsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQSxNQUNoQkMsT0FEZ0IsR0FDZUQsS0FEZixDQUNoQkMsT0FEZ0I7QUFBQSxNQUNQQyxPQURPLEdBQ2VGLEtBRGYsQ0FDUEUsT0FETztBQUFBLE1BQ0VDLFFBREYsR0FDZUgsS0FEZixDQUNFRyxRQURGO0FBRXhCLE1BQU1DLE1BQU0sR0FBR0MsNENBQUssQ0FBQ0MsVUFBTixDQUFpQkMsK0RBQWpCLENBQWY7QUFGd0IsTUFHaEJDLFFBSGdCLEdBR0lKLE1BSEosQ0FHaEJJLFFBSGdCO0FBQUEsTUFHTkMsS0FITSxHQUdJTCxNQUhKLENBR05LLEtBSE07QUFBQSxNQUloQkMsSUFKZ0IsR0FJRUQsS0FKRixDQUloQkMsSUFKZ0I7QUFBQSxNQUlWQyxPQUpVLEdBSUVGLEtBSkYsQ0FJVkUsT0FKVTs7QUFBQSx3QkFNSU4sNENBQUssQ0FBQ08sUUFBTixDQUFlLEVBQWYsQ0FOSjtBQUFBO0FBQUEsTUFNakJDLE1BTmlCO0FBQUEsTUFNVEMsU0FOUzs7QUFBQSx5QkFPUVQsNENBQUssQ0FBQ08sUUFBTixDQUFlLEVBQWYsQ0FQUjtBQUFBO0FBQUEsTUFPakJHLFFBUGlCO0FBQUEsTUFPUEMsV0FQTzs7QUFBQSx5QkFRc0JYLDRDQUFLLENBQUNPLFFBQU4sQ0FBZSxLQUFmLENBUnRCO0FBQUE7QUFBQSxNQVFqQkssZUFSaUI7QUFBQSxNQVFBQyxrQkFSQTs7QUFVeEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlCQSxTQUFLLENBQUNDLGNBQU47QUFDQWIsWUFBUSxDQUFDO0FBQUVjLFVBQUksRUFBRTtBQUFSLEtBQUQsQ0FBUjtBQUVBLFFBQUlDLE9BQU8sR0FBRyxnQkFBZDtBQUNBLFFBQUlDLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRUMsWUFBTSxFQUFFZCxNQUFWO0FBQWtCRSxjQUFRLEVBQUVBO0FBQTVCLEtBQWYsQ0FBYjs7QUFDQSxRQUFJRixNQUFNLElBQUksRUFBVixJQUFnQkUsUUFBUSxJQUFJLEVBQWhDLEVBQW9DO0FBQ2xDUCxjQUFRLENBQUM7QUFDUGMsWUFBSSxFQUFFLGNBREM7QUFFUE0sZUFBTyxFQUFFO0FBQ1BDLGNBQUksRUFBRSxJQURDO0FBRVBDLGlCQUFPLEVBQUUsT0FGRjtBQUdQQyxpQkFBTyxFQUFFQyxtRUFBYyxDQUFDdEIsSUFBRDtBQUhoQjtBQUZGLE9BQUQsQ0FBUjtBQVFBRixjQUFRLENBQUM7QUFBRWMsWUFBSSxFQUFFO0FBQVIsT0FBRCxDQUFSO0FBQ0QsS0FWRCxNQVVPLElBQUlULE1BQU0sSUFBSSxFQUFWLElBQWdCRSxRQUFRLElBQUksRUFBaEMsRUFBb0M7QUFDekNrQiwwRUFBWSxDQUFDVixPQUFELEVBQVUsTUFBVixFQUFrQkMsTUFBbEIsRUFBMEIsVUFBQ1UsSUFBRCxFQUFVO0FBQzlDLFlBQUlBLElBQUksQ0FBQ0EsSUFBTCxDQUFVQyxLQUFkLEVBQXFCO0FBQ25CM0Isa0JBQVEsQ0FBQztBQUNQYyxnQkFBSSxFQUFFLGNBREM7QUFFUE0sbUJBQU8sRUFBRTtBQUNQQyxrQkFBSSxFQUFFLElBREM7QUFFUEMscUJBQU8sRUFBRSxPQUZGO0FBR1BDLHFCQUFPLEVBQUVDLG1FQUFjLENBQUN0QixJQUFEO0FBSGhCO0FBRkYsV0FBRCxDQUFSO0FBUUQsU0FURCxNQVNPO0FBQ0wsY0FBSTBCLFdBQVcsR0FBRztBQUNoQkMsbUJBQU8sRUFBRXhCLE1BRE87QUFFaEJFLG9CQUFRLEVBQUVBO0FBRk0sV0FBbEI7QUFLQVAsa0JBQVEsQ0FBQztBQUNQYyxnQkFBSSxFQUFFLGdCQURDO0FBRVBNLG1CQUFPLEVBQUVRO0FBRkYsV0FBRCxDQUFSO0FBS0FsQyxpQkFBTyxDQUFDb0MsSUFBUixDQUFhLFVBQWI7QUFDRDs7QUFDRDlCLGdCQUFRLENBQUM7QUFBRWMsY0FBSSxFQUFFO0FBQVIsU0FBRCxDQUFSO0FBQ0QsT0F4QlcsQ0FBWjtBQXlCRDtBQUNGLEdBM0NEOztBQTZDQSxXQUFTaUIsZ0JBQVQsR0FBNEI7QUFDMUJyQixzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUVqQixPQUFPLENBQUNMLFVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ0UsMkRBQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsU0FBSyxFQUFDLFFBQS9CO0FBQXdDLGdCQUFZLE1BQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzRDLDJEQUFNLENBQUM5QixJQUFELENBRFQsQ0FERixlQUlFO0FBQU0sWUFBUSxFQUFFUyxZQUFoQjtBQUE4QixTQUFLLEVBQUU7QUFBRXNCLGVBQVMsRUFBRTtBQUFiLEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ0UsMkRBQUMsc0RBQUQ7QUFDRSxhQUFTLEVBQUMsUUFEWjtBQUVFLGFBQVMsTUFGWDtBQUdFLGFBQVMsRUFBQyxRQUhaO0FBSUUsY0FBVSxFQUFDLFFBSmI7QUFLRSxXQUFPLEVBQUUsQ0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU9FLDJEQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQTBCLE1BQUUsRUFBRSxDQUE5QjtBQUFpQyxhQUFTLEVBQUMsT0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDRSwyREFBQywyREFBRDtBQUNFLFNBQUssRUFBRUMsMERBQUssQ0FBQ2hDLElBQUQsQ0FEZDtBQUVFLE1BQUUsRUFBQywyQkFGTDtBQUdFLFVBQU0sRUFBQyxRQUhUO0FBSUUsU0FBSyxFQUFFRyxNQUpUO0FBS0UsWUFBUSxFQUFFLGtCQUFDOEIsQ0FBRDtBQUFBLGFBQU83QixTQUFTLENBQUM2QixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFoQjtBQUFBLEtBTFo7QUFNRSxhQUFTLEVBQUU1QyxPQUFPLENBQUNYLFVBTnJCO0FBT0UsUUFBSSxFQUFDLE9BUFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUEYsZUFrQkUsMkRBQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBMEIsTUFBRSxFQUFFLENBQTlCO0FBQWlDLGFBQVMsRUFBQyxPQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNFLDJEQUFDLDJEQUFEO0FBQ0UsU0FBSyxFQUFFd0QsMkRBQU0sQ0FBQ3BDLElBQUQsQ0FEZjtBQUVFLE1BQUUsRUFBRSw4QkFBOEIsQ0FGcEM7QUFHRSxTQUFLLEVBQUVLLFFBSFQ7QUFJRSxZQUFRLEVBQUUsa0JBQUM0QixDQUFEO0FBQUEsYUFBTzNCLFdBQVcsQ0FBQzJCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUEsS0FKWjtBQUtFLGFBQVMsRUFBRTVDLE9BQU8sQ0FBQ1IsVUFMckI7QUFNRSxRQUFJLEVBQUMsVUFOUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FsQkYsZUE0QkUsMkRBQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBMEIsTUFBRSxFQUFFLENBQTlCO0FBQWlDLGFBQVMsRUFBQyxPQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNFLDJEQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBQyxVQUF4QjtBQUFtQyxhQUFTLEVBQUMsT0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDRSwyREFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNFLDJEQUFDLHdEQUFEO0FBQVEsV0FBTyxFQUFDLFdBQWhCO0FBQTRCLFNBQUssRUFBQyxTQUFsQztBQUE0QyxRQUFJLEVBQUMsUUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHc0QsNkRBQVEsQ0FBQ3JDLElBQUQsQ0FEWCxDQURGLENBREYsQ0FERixDQTVCRixlQXFDRSwyREFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUEwQixNQUFFLEVBQUUsQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDRSwyREFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dzQyxtRUFBYyxDQUFDdEMsSUFBRCxDQURqQixFQUN5QixHQUR6QixlQUVFO0FBQUcsV0FBTyxFQUFFNkIsZ0JBQVo7QUFBOEIsYUFBUyxFQUFDLE9BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1UseURBQUksQ0FBQ3ZDLElBQUQsQ0FEUCxDQUZGLENBREYsQ0FyQ0YsZUE2Q0UsMkRBQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBMEIsTUFBRSxFQUFFLENBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ0UsMkRBQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHd0MsZ0VBQVcsQ0FBQ3hDLElBQUQsQ0FEZCxlQUVFO0FBQUcsV0FBTyxFQUFFO0FBQUEsYUFBTVAsUUFBUSxDQUFDLEtBQUQsQ0FBZDtBQUFBLEtBQVo7QUFBbUMsYUFBUyxFQUFDLE9BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxHQURILEVBRUc4Qyx5REFBSSxDQUFDdkMsSUFBRCxDQUZQLENBRkYsQ0FERixDQTdDRixDQURGLENBSkYsZUE2REUsMkRBQUMsMERBQUQ7QUFDRSxtQkFBZSxFQUFFTyxlQURuQjtBQUVFLHNCQUFrQixFQUFFQyxrQkFGdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdERixDQURGO0FBb0VEOztBQUVjaUMscUlBQVUsQ0FBQzlELFNBQUQsQ0FBVixDQUFzQlUsU0FBdEIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdktBO0FBQ0E7QUFVQTtBQUNBO0FBRUE7QUFTQTtBQUNBO0FBRUEsSUFBTXFELGlCQUFpQixHQUFHO0FBQ3hCQyxVQUFRLEVBQUU7QUFDUjdELFNBQUssRUFBRSxLQURDO0FBRVI4RCxhQUFTLEVBQUUsTUFGSDtBQUdSQyxRQUFJLEVBQUUsTUFIRTtBQUlSQyxPQUFHLEVBQUUsUUFKRztBQUtSQyxZQUFRLEVBQUUsVUFMRjtBQU1SQyxXQUFPLEVBQUU7QUFORCxHQURjO0FBU3hCQyxjQUFZLEVBQUU7QUFDWm5FLFNBQUssRUFBRTtBQURLLEdBVFU7QUFZeEJvRSxZQUFVLEVBQUU7QUFDVkwsUUFBSSxFQUFFLE1BREk7QUFFVk0sVUFBTSxFQUFFLE1BRkU7QUFHVkMsUUFBSSxFQUFFO0FBSEksR0FaWTtBQWlCeEJDLGdCQUFjLEVBQUU7QUFDZFAsT0FBRyxFQUFFO0FBRFMsR0FqQlE7QUFvQnhCUSxjQUFZLEVBQUU7QUFDWkMsYUFBUyxFQUFFO0FBREM7QUFwQlUsQ0FBMUI7O0FBeUJBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ2xFLEtBQUQsRUFBVztBQUNuQyxNQUFNSSxNQUFNLEdBQUdFLHdEQUFVLENBQUNDLCtEQUFELENBQXpCO0FBRG1DLE1BRTNCRSxLQUYyQixHQUVQTCxNQUZPLENBRTNCSyxLQUYyQjtBQUFBLE1BRXBCRCxRQUZvQixHQUVQSixNQUZPLENBRXBCSSxRQUZvQjtBQUFBLE1BRzNCRSxJQUgyQixHQUdsQkQsS0FIa0IsQ0FHM0JDLElBSDJCO0FBQUEsTUFJM0JULE9BSjJCLEdBSXNCRCxLQUp0QixDQUkzQkMsT0FKMkI7QUFBQSxNQUlsQmlCLGtCQUprQixHQUlzQmxCLEtBSnRCLENBSWxCa0Isa0JBSmtCO0FBQUEsTUFJRUQsZUFKRixHQUlzQmpCLEtBSnRCLENBSUVpQixlQUpGOztBQUFBLGtCQUthTCxzREFBUSxDQUFDLEVBQUQsQ0FMckI7QUFBQTtBQUFBLE1BSzVCdUQsZ0JBTDRCO0FBQUEsTUFLVkMsbUJBTFU7O0FBT25DLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ2pELEtBQUQsRUFBVztBQUMvQkEsU0FBSyxDQUFDQyxjQUFOO0FBQ0FiLFlBQVEsQ0FBQztBQUFFYyxVQUFJLEVBQUU7QUFBUixLQUFELENBQVI7QUFDQSxRQUFJb0IsS0FBSyxHQUFHeUIsZ0JBQVo7QUFDQSxRQUFJNUMsT0FBTyxHQUFHLHFDQUFxQ21CLEtBQW5EO0FBQ0EsUUFBSTRCLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVk5QixLQUFaLENBQWhCO0FBQ0FULHdFQUFZLENBQUNWLE9BQUQsRUFBVSxLQUFWLEVBQWlCLEVBQWpCLEVBQXFCLFVBQUNXLElBQUQsRUFBVTtBQUN6QzFCLGNBQVEsQ0FBQztBQUFFYyxZQUFJLEVBQUU7QUFBUixPQUFELENBQVI7O0FBQ0EsVUFBSVksSUFBSSxDQUFDdUMsTUFBTCxJQUFlLEdBQW5CLEVBQXdCO0FBQ3RCakUsZ0JBQVEsQ0FBQztBQUNQYyxjQUFJLEVBQUUsY0FEQztBQUVQTSxpQkFBTyxFQUFFO0FBQUVDLGdCQUFJLEVBQUUsSUFBUjtBQUFjQyxtQkFBTyxFQUFFLFNBQXZCO0FBQWtDQyxtQkFBTyxFQUFFMkMsOERBQVMsQ0FBQ2hFLElBQUQ7QUFBcEQ7QUFGRixTQUFELENBQVIsQ0FEc0IsQ0FLdEI7QUFDQTtBQUNELE9BUEQsTUFPTztBQUNMRixnQkFBUSxDQUFDO0FBQ1BjLGNBQUksRUFBRSxjQURDO0FBRVBNLGlCQUFPLEVBQUU7QUFDUEMsZ0JBQUksRUFBRSxJQURDO0FBRVBDLG1CQUFPLEVBQUUsT0FGRjtBQUdQQyxtQkFBTyxFQUFFNEMsdUVBQWtCLENBQUNqRSxJQUFEO0FBSHBCO0FBRkYsU0FBRCxDQUFSO0FBUUQ7QUFDRixLQW5CVyxDQUFaO0FBb0JELEdBMUJEOztBQTRCQSxXQUFTa0UsV0FBVCxHQUF1QjtBQUNyQjFELHNCQUFrQixDQUFDLEtBQUQsQ0FBbEI7QUFDRDs7QUFFRCxzQkFDRSwyREFBQyx1REFBRDtBQUNFLHVCQUFnQixvQkFEbEI7QUFFRSx3QkFBaUIsMEJBRm5CO0FBR0UsUUFBSSxFQUFFRCxlQUhSO0FBSUUsV0FBTyxFQUFFMkQsV0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU1FLDJEQUFDLHVEQUFEO0FBQU8sYUFBUyxFQUFFM0UsT0FBTyxDQUFDb0QsUUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDRTtBQUFNLFlBQVEsRUFBRWdCLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ0UsMkRBQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDRSwyREFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ0UsMkRBQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUSw0RUFBdUIsQ0FBQ25FLElBQUQsQ0FEMUIsQ0FERixDQURGLGVBTUUsMkRBQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNFLDJEQUFDLDREQUFEO0FBQ0UscUJBQWMsTUFEaEI7QUFFRSxXQUFPLEVBQUVrRSxXQUZYO0FBR0UsYUFBUyxFQUFFM0UsT0FBTyxDQUFDMkQsVUFIckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFLRSwyREFBQywrREFBRDtBQUFXLFlBQVEsRUFBQyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERixDQU5GLGVBZUUsMkRBQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNFLDJEQUFDLHlEQUFEO0FBQVMsYUFBUyxFQUFDLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixlQUVFLDJEQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMEJrQix3RUFBbUIsQ0FBQ3BFLElBQUQsQ0FBN0MsQ0FGRixlQUdFLDJEQUFDLDJEQUFEO0FBQ0UsU0FBSyxFQUFFZ0MsMERBQUssQ0FBQ2hDLElBQUQsQ0FEZDtBQUVFLE1BQUUsRUFBQywyQkFGTDtBQUdFLFVBQU0sRUFBQyxRQUhUO0FBSUUsU0FBSyxFQUFFeUQsZ0JBSlQ7QUFLRSxZQUFRLEVBQUUsa0JBQUN4QixDQUFEO0FBQUEsYUFBT3lCLG1CQUFtQixDQUFDekIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBMUI7QUFBQSxLQUxaO0FBTUUsUUFBSSxFQUFDLE9BTlA7QUFPRSxhQUFTLEVBQUU1QyxPQUFPLENBQUMwRCxZQVByQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FmRixlQTRCRSwyREFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxDQUFmO0FBQWtCLGFBQVMsRUFBRTFELE9BQU8sQ0FBQytELFlBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ0UsMkRBQUMsd0RBQUQ7QUFDRSxXQUFPLEVBQUMsV0FEVjtBQUVFLFNBQUssRUFBQyxTQUZSO0FBR0UsUUFBSSxFQUFDLFFBSFA7QUFJRSxRQUFJLEVBQUMsT0FKUDtBQUtFLGFBQVMsRUFBRS9ELE9BQU8sQ0FBQzhELGNBTHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPR2hCLDZEQUFRLENBQUNyQyxJQUFELENBUFgsQ0FERixDQTVCRixDQURGLENBREYsQ0FORixDQURGO0FBcURELENBNUZEOztBQThGZXlDLHFJQUFVLENBQUNDLGlCQUFELENBQVYsQ0FBOEJjLGlCQUE5QixDQUFmLEUiLCJmaWxlIjoiMC5jNjE4NWY0MmYxODBmMDhiMDBlNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRleHRGaWVsZCwgR3JpZCwgVHlwb2dyYXBoeSwgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIjtcblxuaW1wb3J0IHtcbiAgaW5pY2lvLFxuICBlbWFpbCxcbiAgY29udHJhLFxuICBpbmdyZXNhcixcbiAgb2x2aWRvRGVDb250cmEsXG4gIHJlZ2lzdHJhcnNlLFxuICBhcXVpLFxuICBjb3JyZW9JbnZhbGlkbyxcbn0gZnJvbSBcIi4uLy4uLy4uL2pzL0xhbmd1YWdlXCI7XG5cbmltcG9ydCBNb2RhbFJlY3VwZXJhY2lvbiBmcm9tIFwiLi9Nb2RhbFJlY3VwZXJhY2lvblwiO1xuaW1wb3J0IHsgbG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2pzL3dlYlNlcnZpY2VzXCI7XG5cbmltcG9ydCB7IHNlc2lvblN0b3JlIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3Jlcy9zZXNpb25TdG9yZVwiO1xuXG5jb25zdCBzdHlsZXNGb3IgPSB7XG4gIFRleHRGaWVsZDE6IHtcbiAgICBqdXN0aWZ5OiBcImNlbnRlclwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbiAgVGV4dEZpZWxkMjoge1xuICAgIGp1c3RpZnk6IFwiY2VudGVyXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICB9LFxuICBncmlkc0Y6IHtcbiAgICBtYXJnaW46IFwiNy41dmggMi41dndcIixcbiAgfSxcbiAgZGl2RGVsRm9ybToge1xuICAgIHBhZGRpbmdCb3R0b206IFwiMTV2aFwiLFxuICAgIHBhZGRpbmdUb3A6IFwiNy41dmhcIixcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIExvZ2luRm9ybShwcm9wcykge1xuICBjb25zdCB7IGNsYXNzZXMsIGhpc3RvcnksIHNldExvZ2luIH0gPSBwcm9wcztcbiAgY29uc3QgZ2xvYmFsID0gUmVhY3QudXNlQ29udGV4dChzZXNpb25TdG9yZSk7XG4gIGNvbnN0IHsgZGlzcGF0Y2gsIHN0YXRlIH0gPSBnbG9iYWw7XG4gIGNvbnN0IHsgbGFuZywgbG9hZGluZyB9ID0gc3RhdGU7XG5cbiAgY29uc3QgW2NvcnJlbywgc2V0Q29ycmVvXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVjdXBlcmFyQ29udHJhLCBzZXRSZWN1cGVyYXJDb250cmFdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uRm9ybVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNUQVJUX0xPQURJTkdcIiB9KTtcblxuICAgIHZhciBzZXJ2aWNlID0gXCIvbG9naW4vdXN1YXJpb1wiO1xuICAgIHZhciBwYXJhbXMgPSBKU09OLnN0cmluZ2lmeSh7IHVzZXJJZDogY29ycmVvLCBwYXNzd29yZDogcGFzc3dvcmQgfSk7XG4gICAgaWYgKGNvcnJlbyA9PSBcIlwiIHx8IHBhc3N3b3JkID09IFwiXCIpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogXCJTRVRfU05BQ0tCQVJcIixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgdmFyaWFudDogXCJlcnJvclwiLFxuICAgICAgICAgIG1lc3NhZ2U6IGNvcnJlb0ludmFsaWRvKGxhbmcpLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU1RPUF9MT0FESU5HXCIgfSk7XG4gICAgfSBlbHNlIGlmIChjb3JyZW8gIT0gXCJcIiAmJiBwYXNzd29yZCAhPSBcIlwiKSB7XG4gICAgICBsb2dpblNlcnZpY2Uoc2VydmljZSwgXCJQT1NUXCIsIHBhcmFtcywgKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEuZGF0YS5lcnJvcikge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IFwiU0VUX1NOQUNLQkFSXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICAgIHZhcmlhbnQ6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogY29ycmVvSW52YWxpZG8obGFuZyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBudWV2YVNlc2lvbiA9IHtcbiAgICAgICAgICAgIHVzdWFyaW86IGNvcnJlbyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJJTklDSUFSX1NFU0lPTlwiLFxuICAgICAgICAgICAgcGF5bG9hZDogbnVldmFTZXNpb24sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBoaXN0b3J5LnB1c2goXCIvaHVzc2VybFwiKTtcbiAgICAgICAgfVxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU1RPUF9MT0FESU5HXCIgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tNb2RhbCgpIHtcbiAgICBzZXRSZWN1cGVyYXJDb250cmEodHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRpdkRlbEZvcm19PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgYWxpZ249XCJjZW50ZXJcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgIHtpbmljaW8obGFuZyl9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25Gb3JtU3VibWl0fSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNSVcIiB9fT5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBjbGFzc05hbWU9XCJncmlkc0ZcIlxuICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbGc9ezd9IGNsYXNzTmFtZT1cImdyaWRzXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPXtlbWFpbChsYW5nKX1cbiAgICAgICAgICAgICAgaWQ9XCJjdXN0b20tY3NzLW91dGxpbmVkLWlucHV0XCJcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvcnJlb31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb3JyZW8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuVGV4dEZpZWxkMX1cbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbGc9ezd9IGNsYXNzTmFtZT1cImdyaWRzXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPXtjb250cmEobGFuZyl9XG4gICAgICAgICAgICAgIGlkPXtcImN1c3RvbS1jc3Mtb3V0bGluZWQtaW5wdXRcIiArIDF9XG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5UZXh0RmllbGQyfVxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBsZz17N30gY2xhc3NOYW1lPVwiZ3JpZHNcIj5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiZmxleC1lbmRcIiBjbGFzc05hbWU9XCJncmlkc1wiPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgIHtpbmdyZXNhcihsYW5nKX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9IGxnPXs3fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgICAgICB7b2x2aWRvRGVDb250cmEobGFuZyl9e1wiIFwifVxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVDbGlja01vZGFsfSBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICAgICAgICAgIHthcXVpKGxhbmcpfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbGc9ezd9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgICAgIHtyZWdpc3RyYXJzZShsYW5nKX1cbiAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gc2V0TG9naW4oZmFsc2UpfSBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICB7YXF1aShsYW5nKX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9mb3JtPlxuICAgICAgPE1vZGFsUmVjdXBlcmFjaW9uXG4gICAgICAgIHJlY3VwZXJhckNvbnRyYT17cmVjdXBlcmFyQ29udHJhfVxuICAgICAgICBzZXRSZWN1cGVyYXJDb250cmE9e3NldFJlY3VwZXJhckNvbnRyYX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzRm9yKShMb2dpbkZvcm0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBNb2RhbCxcbiAgVHlwb2dyYXBoeSxcbiAgUGFwZXIsXG4gIERpdmlkZXIsXG4gIFRleHRGaWVsZCxcbiAgQnV0dG9uLFxuICBHcmlkLFxuICBJY29uQnV0dG9uLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuaW1wb3J0IENsZWFySWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NsZWFyXCI7XG5cbmltcG9ydCB7XG4gIG1vZGFsUmVjdXBlcmFjaW9uQ29udHJhLFxuICBtb2RhbEluZ3Jlc2FyQ29ycmVvLFxuICBlbWFpbCxcbiAgaW5ncmVzYXIsXG4gIGV4aXRvQm9keSxcbiAgY29ycmVvTm9FbmNvbnRyYWRvLFxufSBmcm9tIFwiLi4vLi4vLi4vanMvTGFuZ3VhZ2VcIjtcblxuaW1wb3J0IHsgc2VzaW9uU3RvcmUgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmVzL3Nlc2lvblN0b3JlXCI7XG5pbXBvcnQgeyBsb2dpblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vanMvd2ViU2VydmljZXNcIjtcblxuY29uc3QgbW9kYWxSZWN1cGVyYWNpb24gPSB7XG4gIG1vZGFsaW5SOiB7XG4gICAgd2lkdGg6IFwiNDAlXCIsXG4gICAgbWF4SGVpZ2h0OiBcIjc1dmhcIixcbiAgICBsZWZ0OiBcIjI1dndcIixcbiAgICB0b3A6IFwiMjUuNXZoXCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICBwYWRkaW5nOiBcIjMwcHggMzBweFwiLFxuICB9LFxuICBjYW1wb0RlVGV4dG86IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gIH0sXG4gIGJvdG9uQ2xlYXI6IHtcbiAgICBsZWZ0OiBcIjE4cHhcIixcbiAgICBib3R0b206IFwiMTVweFwiLFxuICAgIHNpemU6IFwic21hbGxcIixcbiAgfSxcbiAgYm90b25SZWN1cGVyYXI6IHtcbiAgICB0b3A6IFwiMTJweFwiLFxuICB9LFxuICBncmlkRGVsQm90b246IHtcbiAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcbiAgfSxcbn07XG5cbmNvbnN0IE1vZGFsUmVjdXBlcmFjaW9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGdsb2JhbCA9IHVzZUNvbnRleHQoc2VzaW9uU3RvcmUpO1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gZ2xvYmFsO1xuICBjb25zdCB7IGxhbmcgfSA9IHN0YXRlO1xuICBjb25zdCB7IGNsYXNzZXMsIHNldFJlY3VwZXJhckNvbnRyYSwgcmVjdXBlcmFyQ29udHJhIH0gPSBwcm9wcztcbiAgY29uc3QgW2NvcnJlb1JlY3VwZXJhZG8sIHNldENvcnJlb1JlY3VwZXJhZG9dID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgb25Gb3JtU3VibWl0MSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNUQVJUX0xPQURJTkdcIiB9KTtcbiAgICB2YXIgZW1haWwgPSBjb3JyZW9SZWN1cGVyYWRvO1xuICAgIHZhciBzZXJ2aWNlID0gXCIvbG9naW4vcmVjb3ZlclBhc3N3b3JkL2VzP2VtYWlsPVwiICsgZW1haWw7XG4gICAgdmFyIGVuY29uZGluZyA9IHdpbmRvdy5idG9hKGVtYWlsKTtcbiAgICBsb2dpblNlcnZpY2Uoc2VydmljZSwgXCJHRVRcIiwge30sIChkYXRhKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU1RPUF9MT0FESU5HXCIgfSk7XG4gICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBcIlNFVF9TTkFDS0JBUlwiLFxuICAgICAgICAgIHBheWxvYWQ6IHsgb3BlbjogdHJ1ZSwgdmFyaWFudDogXCJzdWNjZXNzXCIsIG1lc3NhZ2U6IGV4aXRvQm9keShsYW5nKSB9LFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gZGlzcGF0Y2goeyB0eXBlOiAnU0VUX1NFU0lPTicsIHBheWxvYWQ6IHsgXCJ1c2VyXCI6IG51ZXZvQ29ycmVvLCBcInBhc3N3b3JkXCI6IG51ZXZvUGFzc3dvcmQgfSB9KVxuICAgICAgICAvLyBzZXRTdG9yZShkYXRhLnJlc3BvbnNlLCBlbWFpbC5jb3JyZW8pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogXCJTRVRfU05BQ0tCQVJcIixcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgICAgdmFyaWFudDogXCJlcnJvclwiLFxuICAgICAgICAgICAgbWVzc2FnZTogY29ycmVvTm9FbmNvbnRyYWRvKGxhbmcpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlKCkge1xuICAgIHNldFJlY3VwZXJhckNvbnRyYShmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxNb2RhbFxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwic2ltcGxlLW1vZGFsLXRpdGxlXCJcbiAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJzaW1wbGUtbW9kYWwtZGVzY3JpcHRpb25cIlxuICAgICAgb3Blbj17cmVjdXBlcmFyQ29udHJhfVxuICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgPlxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbGluUn0+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvbkZvcm1TdWJtaXQxfT5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgICAgICAgIHttb2RhbFJlY3VwZXJhY2lvbkNvbnRyYShsYW5nKX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3RvbkNsZWFyfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENsZWFySWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICA8RGl2aWRlciBjbGFzc05hbWU9XCJkaXZpc29yXCIgLz5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e21vZGFsSW5ncmVzYXJDb3JyZW8obGFuZyl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9e2VtYWlsKGxhbmcpfVxuICAgICAgICAgICAgICAgIGlkPVwiY3VzdG9tLWNzcy1vdXRsaW5lZC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29ycmVvUmVjdXBlcmFkb31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvcnJlb1JlY3VwZXJhZG8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhbXBvRGVUZXh0b31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkRGVsQm90b259PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3RvblJlY3VwZXJhcn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpbmdyZXNhcihsYW5nKX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L1BhcGVyPlxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKG1vZGFsUmVjdXBlcmFjaW9uKShNb2RhbFJlY3VwZXJhY2lvbik7XG4iXSwic291cmNlUm9vdCI6IiJ9