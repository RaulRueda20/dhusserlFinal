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
      console.log("lololo");
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
      lineNumber: 101,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h3",
    align: "center",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
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
      lineNumber: 105,
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
      lineNumber: 106,
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
      lineNumber: 113,
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
      lineNumber: 114,
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
      lineNumber: 124,
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
      lineNumber: 125,
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
      lineNumber: 134,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "flex-end",
    className: "grids",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
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
      lineNumber: 143,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["olvidoDeContra"])(lang), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: handleClickModal,
    className: "links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
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
      lineNumber: 151,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
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
      lineNumber: 154,
      columnNumber: 15
    }
  }, " ", Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["aqui"])(lang)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModalRecuperacion__WEBPACK_IMPORTED_MODULE_4__["default"], {
    recuperarContra: recuperarContra,
    setRecuperarContra: setRecuperarContra,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9EaWNjaW9uYXJpby9Mb2dpbi9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRGljY2lvbmFyaW8vTG9naW4vTW9kYWxSZWN1cGVyYWNpb24uanMiXSwibmFtZXMiOlsic3R5bGVzRm9yIiwiVGV4dEZpZWxkMSIsImp1c3RpZnkiLCJ3aWR0aCIsIlRleHRGaWVsZDIiLCJncmlkc0YiLCJtYXJnaW4iLCJkaXZEZWxGb3JtIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJMb2dpbkZvcm0iLCJwcm9wcyIsImNsYXNzZXMiLCJoaXN0b3J5Iiwic2V0TG9naW4iLCJnbG9iYWwiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJzZXNpb25TdG9yZSIsImRpc3BhdGNoIiwic3RhdGUiLCJsYW5nIiwibG9hZGluZyIsInVzZVN0YXRlIiwiY29ycmVvIiwic2V0Q29ycmVvIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJlY3VwZXJhckNvbnRyYSIsInNldFJlY3VwZXJhckNvbnRyYSIsIm9uRm9ybVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwic2VydmljZSIsInBhcmFtcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VySWQiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsIm9wZW4iLCJ2YXJpYW50IiwibWVzc2FnZSIsImNvcnJlb0ludmFsaWRvIiwibG9naW5TZXJ2aWNlIiwiZGF0YSIsImVycm9yIiwibnVldmFTZXNpb24iLCJ1c3VhcmlvIiwicHVzaCIsImhhbmRsZUNsaWNrTW9kYWwiLCJpbmljaW8iLCJtYXJnaW5Ub3AiLCJlbWFpbCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnRyYSIsImluZ3Jlc2FyIiwib2x2aWRvRGVDb250cmEiLCJhcXVpIiwicmVnaXN0cmFyc2UiLCJ3aXRoU3R5bGVzIiwibW9kYWxSZWN1cGVyYWNpb24iLCJtb2RhbGluUiIsIm1heEhlaWdodCIsImxlZnQiLCJ0b3AiLCJwb3NpdGlvbiIsInBhZGRpbmciLCJjYW1wb0RlVGV4dG8iLCJib3RvbkNsZWFyIiwiYm90dG9tIiwic2l6ZSIsImJvdG9uUmVjdXBlcmFyIiwiZ3JpZERlbEJvdG9uIiwidGV4dEFsaWduIiwiTW9kYWxSZWN1cGVyYWNpb24iLCJjb3JyZW9SZWN1cGVyYWRvIiwic2V0Q29ycmVvUmVjdXBlcmFkbyIsIm9uRm9ybVN1Ym1pdDEiLCJlbmNvbmRpbmciLCJ3aW5kb3ciLCJidG9hIiwic3RhdHVzIiwiZXhpdG9Cb2R5IiwiY29ycmVvTm9FbmNvbnRyYWRvIiwiaGFuZGxlQ2xvc2UiLCJtb2RhbFJlY3VwZXJhY2lvbkNvbnRyYSIsIm1vZGFsSW5ncmVzYXJDb3JyZW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBV0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxZQUFVLEVBQUU7QUFDVkMsV0FBTyxFQUFFLFFBREM7QUFFVkMsU0FBSyxFQUFFO0FBRkcsR0FESTtBQUtoQkMsWUFBVSxFQUFFO0FBQ1ZGLFdBQU8sRUFBRSxRQURDO0FBRVZDLFNBQUssRUFBRTtBQUZHLEdBTEk7QUFTaEJFLFFBQU0sRUFBRTtBQUNOQyxVQUFNLEVBQUU7QUFERixHQVRRO0FBWWhCQyxZQUFVLEVBQUU7QUFDVkMsaUJBQWEsRUFBRSxNQURMO0FBRVZDLGNBQVUsRUFBRTtBQUZGO0FBWkksQ0FBbEI7O0FBa0JBLFNBQVNDLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUEsTUFDaEJDLE9BRGdCLEdBQ2VELEtBRGYsQ0FDaEJDLE9BRGdCO0FBQUEsTUFDUEMsT0FETyxHQUNlRixLQURmLENBQ1BFLE9BRE87QUFBQSxNQUNFQyxRQURGLEdBQ2VILEtBRGYsQ0FDRUcsUUFERjtBQUV4QixNQUFNQyxNQUFNLEdBQUdDLDRDQUFLLENBQUNDLFVBQU4sQ0FBaUJDLCtEQUFqQixD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Q0FESixDQU5KLENBREo7QUF1REgsQ0FyRkQ7O0FBdUZlMkMscUlBQVUsQ0FBQ0MsaUJBQUQsQ0FBVixDQUE4QmMsaUJBQTlCLENBQWYsRSIsImZpbGUiOiIwLjA5ZTg1MmQ2NWY4OGRmYTkzNjAyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkLCBHcmlkLCBUeXBvZ3JhcGh5LCBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuXG5pbXBvcnQge1xuICBpbmljaW8sXG4gIGVtYWlsLFxuICBjb250cmEsXG4gIGluZ3Jlc2FyLFxuICBvbHZpZG9EZUNvbnRyYSxcbiAgcmVnaXN0cmFyc2UsXG4gIGFxdWksXG4gIGNvcnJlb0ludmFsaWRvLFxufSBmcm9tIFwiLi4vLi4vLi4vanMvTGFuZ3VhZ2VcIjtcblxuaW1wb3J0IE1vZGFsUmVjdXBlcmFjaW9uIGZyb20gXCIuL01vZGFsUmVjdXBlcmFjaW9uXCI7XG5pbXBvcnQgeyBsb2dpblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vanMvd2ViU2VydmljZXNcIjtcblxuaW1wb3J0IHsgc2VzaW9uU3RvcmUgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmVzL3Nlc2lvblN0b3JlXCI7XG5cbmNvbnN0IHN0eWxlc0ZvciA9IHtcbiAgVGV4dEZpZWxkMToge1xuICAgIGp1c3RpZnk6IFwiY2VudGVyXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICB9LFxuICBUZXh0RmllbGQyOiB7XG4gICAganVzdGlmeTogXCJjZW50ZXJcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gIH0sXG4gIGdyaWRzRjoge1xuICAgIG1hcmdpbjogXCI3LjV2aCAyLjV2d1wiLFxuICB9LFxuICBkaXZEZWxGb3JtOiB7XG4gICAgcGFkZGluZ0JvdHRvbTogXCIxNXZoXCIsXG4gICAgcGFkZGluZ1RvcDogXCI3LjV2aFwiLFxuICB9LFxufTtcblxuZnVuY3Rpb24gTG9naW5Gb3JtKHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcywgaGlzdG9yeSwgc2V0TG9naW4gfSA9IHByb3BzO1xuICBjb25zdCBnbG9iYWwgPSBSZWFjdC51c2VDb250ZXh0KHNlc2lvblN0b3JlKTtcbiAgY29uc3QgeyBkaXNwYXRjaCwgc3RhdGUgfSA9IGdsb2JhbDtcbiAgY29uc3QgeyBsYW5nLCBsb2FkaW5nIH0gPSBzdGF0ZTtcblxuICBjb25zdCBbY29ycmVvLCBzZXRDb3JyZW9dID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtyZWN1cGVyYXJDb250cmEsIHNldFJlY3VwZXJhckNvbnRyYV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25Gb3JtU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU1RBUlRfTE9BRElOR1wiIH0pO1xuXG4gICAgdmFyIHNlcnZpY2UgPSBcIi9sb2dpbi91c3VhcmlvXCI7XG4gICAgdmFyIHBhcmFtcyA9IEpTT04uc3RyaW5naWZ5KHsgdXNlcklkOiBjb3JyZW8sIHBhc3N3b3JkOiBwYXNzd29yZCB9KTtcbiAgICBpZiAoY29ycmVvID09IFwiXCIgfHwgcGFzc3dvcmQgPT0gXCJcIikge1xuICAgICAgY29uc29sZS5sb2coXCJsb2xvbG9cIik7XG5cbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogXCJTRVRfU05BQ0tCQVJcIixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgdmFyaWFudDogXCJlcnJvclwiLFxuICAgICAgICAgIG1lc3NhZ2U6IGNvcnJlb0ludmFsaWRvKGxhbmcpLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU1RPUF9MT0FESU5HXCIgfSk7XG4gICAgfSBlbHNlIGlmIChjb3JyZW8gIT0gXCJcIiAmJiBwYXNzd29yZCAhPSBcIlwiKSB7XG4gICAgICBsb2dpblNlcnZpY2Uoc2VydmljZSwgXCJQT1NUXCIsIHBhcmFtcywgKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEuZGF0YS5lcnJvcikge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IFwiU0VUX1NOQUNLQkFSXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICAgIHZhcmlhbnQ6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogY29ycmVvSW52YWxpZG8obGFuZyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBudWV2YVNlc2lvbiA9IHtcbiAgICAgICAgICAgIHVzdWFyaW86IGNvcnJlbyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJJTklDSUFSX1NFU0lPTlwiLFxuICAgICAgICAgICAgcGF5bG9hZDogbnVldmFTZXNpb24sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBoaXN0b3J5LnB1c2goXCIvaHVzc2VybFwiKTtcbiAgICAgICAgfVxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU1RPUF9MT0FESU5HXCIgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tNb2RhbCgpIHtcbiAgICBzZXRSZWN1cGVyYXJDb250cmEodHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRpdkRlbEZvcm19PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgYWxpZ249XCJjZW50ZXJcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgIHtpbmljaW8obGFuZyl9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25Gb3JtU3VibWl0fSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNSVcIiB9fT5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBjbGFzc05hbWU9XCJncmlkc0ZcIlxuICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbGc9ezd9IGNsYXNzTmFtZT1cImdyaWRzXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPXtlbWFpbChsYW5nKX1cbiAgICAgICAgICAgICAgaWQ9XCJjdXN0b20tY3NzLW91dGxpbmVkLWlucHV0XCJcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvcnJlb31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb3JyZW8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuVGV4dEZpZWxkMX1cbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbGc9ezd9IGNsYXNzTmFtZT1cImdyaWRzXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPXtjb250cmEobGFuZyl9XG4gICAgICAgICAgICAgIGlkPXtcImN1c3RvbS1jc3Mtb3V0bGluZWQtaW5wdXRcIiArIDF9XG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5UZXh0RmllbGQyfVxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBsZz17N30gY2xhc3NOYW1lPVwiZ3JpZHNcIj5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiZmxleC1lbmRcIiBjbGFzc05hbWU9XCJncmlkc1wiPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgIHtpbmdyZXNhcihsYW5nKX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9IGxnPXs3fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgICAgICB7b2x2aWRvRGVDb250cmEobGFuZyl9e1wiIFwifVxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVDbGlja01vZGFsfSBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICAgICAgICAgIHthcXVpKGxhbmcpfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbGc9ezd9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgICAgIHtyZWdpc3RyYXJzZShsYW5nKX1cbiAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gc2V0TG9naW4oZmFsc2UpfSBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICB7YXF1aShsYW5nKX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9mb3JtPlxuICAgICAgPE1vZGFsUmVjdXBlcmFjaW9uXG4gICAgICAgIHJlY3VwZXJhckNvbnRyYT17cmVjdXBlcmFyQ29udHJhfVxuICAgICAgICBzZXRSZWN1cGVyYXJDb250cmE9e3NldFJlY3VwZXJhckNvbnRyYX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzRm9yKShMb2dpbkZvcm0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTW9kYWwsIFR5cG9ncmFwaHksIFBhcGVyLCBEaXZpZGVyLCBUZXh0RmllbGQsIEJ1dHRvbiwgR3JpZCwgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBDbGVhckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NsZWFyJztcblxuaW1wb3J0IHsgbW9kYWxSZWN1cGVyYWNpb25Db250cmEsIG1vZGFsSW5ncmVzYXJDb3JyZW8sIGVtYWlsLCBpbmdyZXNhciwgZXhpdG9Cb2R5LCBjb3JyZW9Ob0VuY29udHJhZG8gfSBmcm9tICcuLi8uLi8uLi9qcy9MYW5ndWFnZSc7XG5cbmltcG9ydCB7IHNlc2lvblN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmVzL3Nlc2lvblN0b3JlJ1xuaW1wb3J0IHsgbG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vanMvd2ViU2VydmljZXMnO1xuXG5jb25zdCBtb2RhbFJlY3VwZXJhY2lvbiA9IHtcbiAgICBtb2RhbGluUjoge1xuICAgICAgICB3aWR0aDogXCI0MCVcIixcbiAgICAgICAgbWF4SGVpZ2h0OiBcIjc1dmhcIixcbiAgICAgICAgbGVmdDogXCIyNXZ3XCIsXG4gICAgICAgIHRvcDogXCIyNS41dmhcIixcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgcGFkZGluZzogXCIzMHB4IDMwcHhcIixcbiAgICB9LFxuICAgIGNhbXBvRGVUZXh0bzoge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICB9LFxuICAgIGJvdG9uQ2xlYXI6IHtcbiAgICAgICAgbGVmdDogXCIxOHB4XCIsXG4gICAgICAgIGJvdHRvbTogXCIxNXB4XCIsXG4gICAgICAgIHNpemU6IFwic21hbGxcIlxuICAgIH0sXG4gICAgYm90b25SZWN1cGVyYXI6IHtcbiAgICAgICAgdG9wOiBcIjEycHhcIlxuICAgIH0sXG4gICAgZ3JpZERlbEJvdG9uOiB7XG4gICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgfVxufVxuXG5jb25zdCBNb2RhbFJlY3VwZXJhY2lvbiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGdsb2JhbCA9IHVzZUNvbnRleHQoc2VzaW9uU3RvcmUpO1xuICAgIGNvbnN0IHsgc3RhdGUgfSA9IGdsb2JhbFxuICAgIGNvbnN0IHsgbGFuZyB9ID0gc3RhdGVcbiAgICBjb25zdCB7IGNsYXNzZXMsIHNldFJlY3VwZXJhckNvbnRyYSwgcmVjdXBlcmFyQ29udHJhIH0gPSBwcm9wcztcbiAgICBjb25zdCBbY29ycmVvUmVjdXBlcmFkbywgc2V0Q29ycmVvUmVjdXBlcmFkb10gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgY29uc3Qgb25Gb3JtU3VibWl0MSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTVEFSVF9MT0FESU5HJyB9KVxuICAgICAgICB2YXIgZW1haWwgPSBjb3JyZW9SZWN1cGVyYWRvXG4gICAgICAgIHZhciBzZXJ2aWNlID0gXCIvbG9naW4vcmVjb3ZlclBhc3N3b3JkL2VzP2VtYWlsPVwiICsgZW1haWxcbiAgICAgICAgdmFyIGVuY29uZGluZyA9IHdpbmRvdy5idG9hKGVtYWlsKVxuICAgICAgICBsb2dpblNlcnZpY2Uoc2VydmljZSwgXCJHRVRcIiwge30sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSlcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NUT1BfTE9BRElORycgfSlcbiAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1NOQUNLQkFSXCIsIHBheWxvYWQ6IHsgb3BlbjogdHJ1ZSwgdmFyaWFudDogXCJzdWNjZXNzXCIsIG1lc3NhZ2U6IGV4aXRvQm9keShsYW5nKSB9IH0pXG4gICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2goeyB0eXBlOiAnU0VUX1NFU0lPTicsIHBheWxvYWQ6IHsgXCJ1c2VyXCI6IG51ZXZvQ29ycmVvLCBcInBhc3N3b3JkXCI6IG51ZXZvUGFzc3dvcmQgfSB9KVxuICAgICAgICAgICAgICAgIC8vIHNldFN0b3JlKGRhdGEucmVzcG9uc2UsIGVtYWlsLmNvcnJlbylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX1NOQUNLQkFSJywgcGF5bG9hZDogeyBvcGVuOiB0cnVlLCB2YXJpYW50OiBcImVycm9yXCIsIG1lc3NhZ2U6IGNvcnJlb05vRW5jb250cmFkbyhsYW5nKSB9IH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xvc2UoKSB7XG4gICAgICAgIHNldFJlY3VwZXJhckNvbnRyYShmYWxzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1tb2RhbC10aXRsZVwiXG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwic2ltcGxlLW1vZGFsLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIG9wZW49e3JlY3VwZXJhckNvbnRyYX1cbiAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICA+XG4gICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsaW5SfT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25Gb3JtU3VibWl0MX0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21vZGFsUmVjdXBlcmFjaW9uQ29udHJhKGxhbmcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3RvbkNsZWFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsZWFySWNvbiBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgY2xhc3NOYW1lPVwiZGl2aXNvclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb2RhbEluZ3Jlc2FyQ29ycmVvKGxhbmcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtlbWFpbChsYW5nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjdXN0b20tY3NzLW91dGxpbmVkLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvcnJlb1JlY3VwZXJhZG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENvcnJlb1JlY3VwZXJhZG8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2FtcG9EZVRleHRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZERlbEJvdG9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvdG9uUmVjdXBlcmFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZ3Jlc2FyKGxhbmcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMobW9kYWxSZWN1cGVyYWNpb24pKE1vZGFsUmVjdXBlcmFjaW9uKTsiXSwic291cmNlUm9vdCI6IiJ9