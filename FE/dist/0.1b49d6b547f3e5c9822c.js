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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9EaWNjaW9uYXJpby9Mb2dpbi9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRGljY2lvbmFyaW8vTG9naW4vTW9kYWxSZWN1cGVyYWNpb24uanMiXSwibmFtZXMiOlsic3R5bGVzRm9yIiwiVGV4dEZpZWxkMSIsImp1c3RpZnkiLCJ3aWR0aCIsIlRleHRGaWVsZDIiLCJncmlkc0YiLCJtYXJnaW4iLCJkaXZEZWxGb3JtIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJMb2dpbkZvcm0iLCJwcm9wcyIsImNsYXNzZXMiLCJoaXN0b3J5Iiwic2V0TG9naW4iLCJnbG9iYWwiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJzZXNpb25TdG9yZSIsImRpc3BhdGNoIiwic3RhdGUiLCJsYW5nIiwibG9hZGluZyIsInVzZVN0YXRlIiwiY29ycmVvIiwic2V0Q29ycmVvIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJlY3VwZXJhckNvbnRyYSIsInNldFJlY3VwZXJhckNvbnRyYSIsIm9uRm9ybVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwic2VydmljZSIsInBhcmFtcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VySWQiLCJwYXlsb2FkIiwib3BlbiIsInZhcmlhbnQiLCJtZXNzYWdlIiwiY29ycmVvSW52YWxpZG8iLCJsb2dpblNlcnZpY2UiLCJkYXRhIiwiZXJyb3IiLCJudWV2YVNlc2lvbiIsInVzdWFyaW8iLCJwdXNoIiwiaGFuZGxlQ2xpY2tNb2RhbCIsImluaWNpbyIsIm1hcmdpblRvcCIsImVtYWlsIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29udHJhIiwiaW5ncmVzYXIiLCJvbHZpZG9EZUNvbnRyYSIsImFxdWkiLCJyZWdpc3RyYXJzZSIsIndpdGhTdHlsZXMiLCJtb2RhbFJlY3VwZXJhY2lvbiIsIm1vZGFsaW5SIiwibWF4SGVpZ2h0IiwibGVmdCIsInRvcCIsInBvc2l0aW9uIiwicGFkZGluZyIsImNhbXBvRGVUZXh0byIsImJvdG9uQ2xlYXIiLCJib3R0b20iLCJzaXplIiwiYm90b25SZWN1cGVyYXIiLCJncmlkRGVsQm90b24iLCJ0ZXh0QWxpZ24iLCJNb2RhbFJlY3VwZXJhY2lvbiIsImNvcnJlb1JlY3VwZXJhZG8iLCJzZXRDb3JyZW9SZWN1cGVyYWRvIiwib25Gb3JtU3VibWl0MSIsImVuY29uZGluZyIsIndpbmRvdyIsImJ0b2EiLCJzdGF0dXMiLCJleGl0b0JvZHkiLCJjb3JyZW9Ob0VuY29udHJhZG8iLCJoYW5kbGVDbG9zZSIsIm1vZGFsUmVjdXBlcmFjaW9uQ29udHJhIiwibW9kYWxJbmdyZXNhckNvcnJlbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFXQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLFlBQVUsRUFBRTtBQUNWQyxXQUFPLEVBQUUsUUFEQztBQUVWQyxTQUFLLEVBQUU7QUFGRyxHQURJO0FBS2hCQyxZQUFVLEVBQUU7QUFDVkYsV0FBTyxFQUFFLFFBREM7QUFFVkMsU0FBSyxFQUFFO0FBRkcsR0FMSTtBQVNoQkUsUUFBTSxFQUFFO0FBQ05DLFVBQU0sRUFBRTtBQURGLEdBVFE7QUFZaEJDLFlBQVUsRUFBRTtBQUNWQyxpQkFBYSxFQUFFLE1BREw7QUFFVkMsY0FBVSxFQUFFO0FBRkY7QUFaSSxDQUFsQjs7QUFrQkEsU0FBU0MsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQSxNQUNoQkMsT0FEZ0IsR0FDZUQsS0FEZixDQUNoQkMsT0FEZ0I7QUFBQSxNQUNQQyxPQURPLEdBQ2VGLEtBRGYsQ0FDUEUsT0FETztBQUFBLE1BQ0VDLFFBREYsR0FDZUgsS0FEZixDQUNFRyxRQURGO0FBRXhCLE1BQU1DLE1BQU0sR0FBR0MsNENBQUssQ0FBQ0MsVUFBTixDQUFpQkMsK0RBQWpCLENBQWY7QUFGd0IsTUFHaEJD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NmI1NDdmM2U1Yzk4MjJjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkLCBHcmlkLCBUeXBvZ3JhcGh5LCBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuXG5pbXBvcnQge1xuICBpbmljaW8sXG4gIGVtYWlsLFxuICBjb250cmEsXG4gIGluZ3Jlc2FyLFxuICBvbHZpZG9EZUNvbnRyYSxcbiAgcmVnaXN0cmFyc2UsXG4gIGFxdWksXG4gIGNvcnJlb0ludmFsaWRvLFxufSBmcm9tIFwiLi4vLi4vLi4vanMvTGFuZ3VhZ2VcIjtcblxuaW1wb3J0IE1vZGFsUmVjdXBlcmFjaW9uIGZyb20gXCIuL01vZGFsUmVjdXBlcmFjaW9uXCI7XG5pbXBvcnQgeyBsb2dpblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vanMvd2ViU2VydmljZXNcIjtcblxuaW1wb3J0IHsgc2VzaW9uU3RvcmUgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmVzL3Nlc2lvblN0b3JlXCI7XG5cbmNvbnN0IHN0eWxlc0ZvciA9IHtcbiAgVGV4dEZpZWxkMToge1xuICAgIGp1c3RpZnk6IFwiY2VudGVyXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICB9LFxuICBUZXh0RmllbGQyOiB7XG4gICAganVzdGlmeTogXCJjZW50ZXJcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gIH0sXG4gIGdyaWRzRjoge1xuICAgIG1hcmdpbjogXCI3LjV2aCAyLjV2d1wiLFxuICB9LFxuICBkaXZEZWxGb3JtOiB7XG4gICAgcGFkZGluZ0JvdHRvbTogXCIxNXZoXCIsXG4gICAgcGFkZGluZ1RvcDogXCI3LjV2aFwiLFxuICB9LFxufTtcblxuZnVuY3Rpb24gTG9naW5Gb3JtKHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcywgaGlzdG9yeSwgc2V0TG9naW4gfSA9IHByb3BzO1xuICBjb25zdCBnbG9iYWwgPSBSZWFjdC51c2VDb250ZXh0KHNlc2lvblN0b3JlKTtcbiAgY29uc3QgeyBkaXNwYXRjaCwgc3RhdGUgfSA9IGdsb2JhbDtcbiAgY29uc3QgeyBsYW5nLCBsb2FkaW5nIH0gPSBzdGF0ZTtcblxuICBjb25zdCBbY29ycmVvLCBzZXRDb3JyZW9dID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtyZWN1cGVyYXJDb250cmEsIHNldFJlY3VwZXJhckNvbnRyYV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25Gb3JtU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU1RBUlRfTE9BRElOR1wiIH0pO1xuXG4gICAgdmFyIHNlcnZpY2UgPSBcIi9sb2dpbi91c3VhcmlvXCI7XG4gICAgdmFyIHBhcmFtcyA9IEpTT04uc3RyaW5naWZ5KHsgdXNlcklkOiBjb3JyZW8sIHBhc3N3b3JkOiBwYXNzd29yZCB9KTtcbiAgICBpZiAoY29ycmVvID09IFwiXCIgfHwgcGFzc3dvcmQgPT0gXCJcIikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBcIlNFVF9TTkFDS0JBUlwiLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICB2YXJpYW50OiBcImVycm9yXCIsXG4gICAgICAgICAgbWVzc2FnZTogY29ycmVvSW52YWxpZG8obGFuZyksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTVE9QX0xPQURJTkdcIiB9KTtcbiAgICB9IGVsc2UgaWYgKGNvcnJlbyAhPSBcIlwiICYmIHBhc3N3b3JkICE9IFwiXCIpIHtcbiAgICAgIGxvZ2luU2VydmljZShzZXJ2aWNlLCBcIlBPU1RcIiwgcGFyYW1zLCAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5kYXRhLmVycm9yKSB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJTRVRfU05BQ0tCQVJcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgdmFyaWFudDogXCJlcnJvclwiLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBjb3JyZW9JbnZhbGlkbyhsYW5nKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG51ZXZhU2VzaW9uID0ge1xuICAgICAgICAgICAgdXN1YXJpbzogY29ycmVvLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBcIklOSUNJQVJfU0VTSU9OXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiBudWV2YVNlc2lvbixcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGhpc3RvcnkucHVzaChcIi9odXNzZXJsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTVE9QX0xPQURJTkdcIiB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVDbGlja01vZGFsKCkge1xuICAgIHNldFJlY3VwZXJhckNvbnRyYSh0cnVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGl2RGVsRm9ybX0+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBhbGlnbj1cImNlbnRlclwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAge2luaWNpbyhsYW5nKX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvbkZvcm1TdWJtaXR9IHN0eWxlPXt7IG1hcmdpblRvcDogXCI1JVwiIH19PlxuICAgICAgICA8R3JpZFxuICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWRzRlwiXG4gICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBsZz17N30gY2xhc3NOYW1lPVwiZ3JpZHNcIj5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9e2VtYWlsKGxhbmcpfVxuICAgICAgICAgICAgICBpZD1cImN1c3RvbS1jc3Mtb3V0bGluZWQtaW5wdXRcIlxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17Y29ycmVvfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvcnJlbyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5UZXh0RmllbGQxfVxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBsZz17N30gY2xhc3NOYW1lPVwiZ3JpZHNcIj5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9e2NvbnRyYShsYW5nKX1cbiAgICAgICAgICAgICAgaWQ9e1wiY3VzdG9tLWNzcy1vdXRsaW5lZC1pbnB1dFwiICsgMX1cbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLlRleHRGaWVsZDJ9XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9IGxnPXs3fSBjbGFzc05hbWU9XCJncmlkc1wiPlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJmbGV4LWVuZFwiIGNsYXNzTmFtZT1cImdyaWRzXCI+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAge2luZ3Jlc2FyKGxhbmcpfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbGc9ezd9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgICAgIHtvbHZpZG9EZUNvbnRyYShsYW5nKX17XCIgXCJ9XG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2hhbmRsZUNsaWNrTW9kYWx9IGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgICAgICAgICAge2FxdWkobGFuZyl9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBsZz17N30+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICAgICAge3JlZ2lzdHJhcnNlKGxhbmcpfVxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzZXRMb2dpbihmYWxzZSl9IGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIHthcXVpKGxhbmcpfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8TW9kYWxSZWN1cGVyYWNpb25cbiAgICAgICAgcmVjdXBlcmFyQ29udHJhPXtyZWN1cGVyYXJDb250cmF9XG4gICAgICAgIHNldFJlY3VwZXJhckNvbnRyYT17c2V0UmVjdXBlcmFyQ29udHJhfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXNGb3IpKExvZ2luRm9ybSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIE1vZGFsLFxuICBUeXBvZ3JhcGh5LFxuICBQYXBlcixcbiAgRGl2aWRlcixcbiAgVGV4dEZpZWxkLFxuICBCdXR0b24sXG4gIEdyaWQsXG4gIEljb25CdXR0b24sXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5pbXBvcnQgQ2xlYXJJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xlYXJcIjtcblxuaW1wb3J0IHtcbiAgbW9kYWxSZWN1cGVyYWNpb25Db250cmEsXG4gIG1vZGFsSW5ncmVzYXJDb3JyZW8sXG4gIGVtYWlsLFxuICBpbmdyZXNhcixcbiAgZXhpdG9Cb2R5LFxuICBjb3JyZW9Ob0VuY29udHJhZG8sXG59IGZyb20gXCIuLi8uLi8uLi9qcy9MYW5ndWFnZVwiO1xuXG5pbXBvcnQgeyBzZXNpb25TdG9yZSB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZXMvc2VzaW9uU3RvcmVcIjtcbmltcG9ydCB7IGxvZ2luU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9qcy93ZWJTZXJ2aWNlc1wiO1xuXG5jb25zdCBtb2RhbFJlY3VwZXJhY2lvbiA9IHtcbiAgbW9kYWxpblI6IHtcbiAgICB3aWR0aDogXCI0MCVcIixcbiAgICBtYXhIZWlnaHQ6IFwiNzV2aFwiLFxuICAgIGxlZnQ6IFwiMjV2d1wiLFxuICAgIHRvcDogXCIyNS41dmhcIixcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHBhZGRpbmc6IFwiMzBweCAzMHB4XCIsXG4gIH0sXG4gIGNhbXBvRGVUZXh0bzoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbiAgYm90b25DbGVhcjoge1xuICAgIGxlZnQ6IFwiMThweFwiLFxuICAgIGJvdHRvbTogXCIxNXB4XCIsXG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICB9LFxuICBib3RvblJlY3VwZXJhcjoge1xuICAgIHRvcDogXCIxMnB4XCIsXG4gIH0sXG4gIGdyaWREZWxCb3Rvbjoge1xuICAgIHRleHRBbGlnbjogXCJyaWdodFwiLFxuICB9LFxufTtcblxuY29uc3QgTW9kYWxSZWN1cGVyYWNpb24gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZ2xvYmFsID0gdXNlQ29udGV4dChzZXNpb25TdG9yZSk7XG4gIGNvbnN0IHsgc3RhdGUgfSA9IGdsb2JhbDtcbiAgY29uc3QgeyBsYW5nIH0gPSBzdGF0ZTtcbiAgY29uc3QgeyBjbGFzc2VzLCBzZXRSZWN1cGVyYXJDb250cmEsIHJlY3VwZXJhckNvbnRyYSB9ID0gcHJvcHM7XG4gIGNvbnN0IFtjb3JyZW9SZWN1cGVyYWRvLCBzZXRDb3JyZW9SZWN1cGVyYWRvXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IG9uRm9ybVN1Ym1pdDEgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTVEFSVF9MT0FESU5HXCIgfSk7XG4gICAgdmFyIGVtYWlsID0gY29ycmVvUmVjdXBlcmFkbztcbiAgICB2YXIgc2VydmljZSA9IFwiL2xvZ2luL3JlY292ZXJQYXNzd29yZC9lcz9lbWFpbD1cIiArIGVtYWlsO1xuICAgIHZhciBlbmNvbmRpbmcgPSB3aW5kb3cuYnRvYShlbWFpbCk7XG4gICAgbG9naW5TZXJ2aWNlKHNlcnZpY2UsIFwiR0VUXCIsIHt9LCAoZGF0YSkgPT4ge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNUT1BfTE9BRElOR1wiIH0pO1xuICAgICAgaWYgKGRhdGEuc3RhdHVzID09IDIwMCkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogXCJTRVRfU05BQ0tCQVJcIixcbiAgICAgICAgICBwYXlsb2FkOiB7IG9wZW46IHRydWUsIHZhcmlhbnQ6IFwic3VjY2Vzc1wiLCBtZXNzYWdlOiBleGl0b0JvZHkobGFuZykgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9TRVNJT04nLCBwYXlsb2FkOiB7IFwidXNlclwiOiBudWV2b0NvcnJlbywgXCJwYXNzd29yZFwiOiBudWV2b1Bhc3N3b3JkIH0gfSlcbiAgICAgICAgLy8gc2V0U3RvcmUoZGF0YS5yZXNwb25zZSwgZW1haWwuY29ycmVvKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFwiU0VUX1NOQUNLQkFSXCIsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgIHZhcmlhbnQ6IFwiZXJyb3JcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGNvcnJlb05vRW5jb250cmFkbyhsYW5nKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZSgpIHtcbiAgICBzZXRSZWN1cGVyYXJDb250cmEoZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1tb2RhbC10aXRsZVwiXG4gICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwic2ltcGxlLW1vZGFsLWRlc2NyaXB0aW9uXCJcbiAgICAgIG9wZW49e3JlY3VwZXJhckNvbnRyYX1cbiAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgID5cbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWxpblJ9PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25Gb3JtU3VibWl0MX0+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICAgICAgICB7bW9kYWxSZWN1cGVyYWNpb25Db250cmEobGFuZyl9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYm90b25DbGVhcn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDbGVhckljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgPERpdmlkZXIgY2xhc3NOYW1lPVwiZGl2aXNvclwiIC8+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPnttb2RhbEluZ3Jlc2FyQ29ycmVvKGxhbmcpfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPXtlbWFpbChsYW5nKX1cbiAgICAgICAgICAgICAgICBpZD1cImN1c3RvbS1jc3Mtb3V0bGluZWQtaW5wdXRcIlxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvcnJlb1JlY3VwZXJhZG99XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb3JyZW9SZWN1cGVyYWRvKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYW1wb0RlVGV4dG99XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZERlbEJvdG9ufT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYm90b25SZWN1cGVyYXJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aW5ncmVzYXIobGFuZyl9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9QYXBlcj5cbiAgICA8L01vZGFsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhtb2RhbFJlY3VwZXJhY2lvbikoTW9kYWxSZWN1cGVyYWNpb24pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==