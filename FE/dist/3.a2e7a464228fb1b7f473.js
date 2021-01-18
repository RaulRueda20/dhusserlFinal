(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "31D0":
/*!**********************************************************!*\
  !*** ./src/Components/Diccionario/Login/RegistroForm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "TTf+");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "04ZO");
/* harmony import */ var _js_Language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../js/Language */ "UQwk");
/* harmony import */ var _js_webServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../js/webServices */ "xrMW");
/* harmony import */ var _js_localStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../js/localStore */ "DWYy");
/* harmony import */ var _stores_sesionStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../stores/sesionStore */ "d70u");
var _this = undefined,
    _jsxFileName = "/home/raul/Proyectos/dhusserlFinal/FE/src/Components/Diccionario/Login/RegistroForm.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var stylesReg = {
  TextField1: {
    justify: "center",
    width: "100%"
  },
  TextField2: {
    justify: "center",
    width: "100%"
  },
  divDelForm: {
    paddingBottom: "15vh",
    paddingTop: "7.5vh"
  }
};

var RegistroForm = function RegistroForm(props) {
  var classes = props.classes,
      setLogin = props.setLogin;
  var global = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_stores_sesionStore__WEBPACK_IMPORTED_MODULE_6__["sesionStore"]);
  var state = global.state,
      dispatch = global.dispatch;
  var lang = state.lang;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      nuevoNombre = _useState2[0],
      setNuevoNombre = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      nuevoApellido = _useState4[0],
      setNuevoApellido = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState6 = _slicedToArray(_useState5, 2),
      nuevaEscuela = _useState6[0],
      setNuevaEscuela = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState8 = _slicedToArray(_useState7, 2),
      nuevoPuesto = _useState8[0],
      setNuevoPuesto = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState10 = _slicedToArray(_useState9, 2),
      nuevoPais = _useState10[0],
      setNuevoPais = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState12 = _slicedToArray(_useState11, 2),
      nuevoCorreo = _useState12[0],
      setNuevoCorreo = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState14 = _slicedToArray(_useState13, 2),
      nuevoPassword = _useState14[0],
      setNuevoPassword = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState16 = _slicedToArray(_useState15, 2),
      repassword = _useState16[0],
      setRepassword = _useState16[1];

  var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();
    dispatch({
      type: "START_LOADING"
    });
    var params = {
      nombre: nuevoNombre,
      apellidos: nuevoApellido,
      email: nuevoCorreo,
      institucion: nuevaEscuela,
      grado: nuevoPuesto,
      pais: nuevoPais,
      password: nuevoPassword
    };

    if (nuevoPassword == repassword) {
      var service = "/login/registrar";
      Object(_js_webServices__WEBPACK_IMPORTED_MODULE_4__["loginService"])(service, "POST", JSON.stringify(params), function (data) {
        if (data.data.status == 200) {
          var serviceh = "/login/sendRegistroEmail/" + _js_localStore__WEBPACK_IMPORTED_MODULE_5__["getItem"]("es");
          Object(_js_webServices__WEBPACK_IMPORTED_MODULE_4__["loginService"])(serviceh, "GET", {
            nombre: nuevoNombre,
            email: nuevoCorreo,
            pass: nuevoPassword
          }, function (data) {
            dispatch({
              type: "SET_ALERT",
              payload: {
                mensaje: "Operación Exitosa",
                open: true,
                tituloAlerta: "Operación Concluida con Exito"
              }
            });
            dispatch({
              type: "INICIAR_SESION",
              payload: {
                usuario: nuevoCorreo,
                password: nuevoPassword
              }
            });
          });
        } else if (data.data.status == 501) {
          dispatch({
            type: "SET_ALERT",
            payload: {
              mensaje: "El correo ya se encuentra registrado",
              open: true,
              tituloAlerta: "Alerta de Error"
            }
          });
        } else if (data.data.status == 500) {
          dispatch({
            type: "SET_ALERT",
            payload: {
              mensaje: "Hubo un error al enviar el correo de notificación",
              open: true,
              tituloAlerta: "Alerta de Error"
            }
          });
        }
      });
    } else {
      dispatch({
        type: "SET_ALERT",
        payload: {
          mensaje: "El password no coincide",
          open: true,
          tituloAlerta: "Alerta de Error"
        }
      });
    }

    dispatch({
      type: "STOP_LOADING"
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: onFormSubmit,
    className: classes.divDelForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h3",
    align: "center",
    gutterBottom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["registro"])(lang)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    className: "gridsF",
    container: true,
    direction: "column",
    alignItems: "center",
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["nombre"])(lang),
    id: "custom-css-outlined-input",
    margin: "normal",
    value: nuevoNombre,
    onChange: function onChange(e) {
      return setNuevoNombre(e.target.value);
    },
    className: classes.TextField1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["apellido"])(lang),
    id: "custom-css-outlined-input",
    value: nuevoApellido,
    onChange: function onChange(e) {
      return setNuevoApellido(e.target.value);
    },
    className: classes.TextField2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["escuela"])(lang),
    id: "custom-css-outlined-input",
    value: nuevaEscuela,
    onChange: function onChange(e) {
      return setNuevaEscuela(e.target.value);
    },
    className: classes.TextField2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["puesto"])(lang),
    id: "custom-css-outlined-input",
    value: nuevoPuesto,
    onChange: function onChange(e) {
      return setNuevoPuesto(e.target.value);
    },
    className: classes.TextField2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["pais"])(lang),
    id: "custom-css-outlined-input",
    value: nuevoPais,
    onChange: function onChange(e) {
      return setNuevoPais(e.target.value);
    },
    className: classes.TextField2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["email"])(lang),
    id: "custom-css-outlined-input",
    value: nuevoCorreo,
    onChange: function onChange(e) {
      return setNuevoCorreo(e.target.value);
    },
    className: classes.TextField2,
    type: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["contra"])(lang),
    id: "custom-css-outlined-input",
    value: nuevoPassword,
    onChange: function onChange(e) {
      return setNuevoPassword(e.target.value);
    },
    className: classes.TextField2,
    type: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["comprobacionContra"])(lang),
    id: "custom-css-outlined-input",
    value: repassword,
    onChange: function onChange(e) {
      return setRepassword(e.target.value);
    },
    className: classes.TextField2,
    type: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "flex-end",
    className: "grids",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "primary",
    variant: "contained",
    className: classes.boton,
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 15
    }
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["ingresar"])(lang))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["registrado"])(lang), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "links",
    onClick: function onClick() {
      return setLogin(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }
  }, " ", Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["aqui"])(lang), " ")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(stylesReg)(RegistroForm));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9EaWNjaW9uYXJpby9Mb2dpbi9SZWdpc3Ryb0Zvcm0uanMiXSwibmFtZXMiOlsic3R5bGVzUmVnIiwiVGV4dEZpZWxkMSIsImp1c3RpZnkiLCJ3aWR0aCIsIlRleHRGaWVsZDIiLCJkaXZEZWxGb3JtIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJSZWdpc3Ryb0Zvcm0iLCJwcm9wcyIsImNsYXNzZXMiLCJzZXRMb2dpbiIsImdsb2JhbCIsInVzZUNvbnRleHQiLCJzZXNpb25TdG9yZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJsYW5nIiwidXNlU3RhdGUiLCJudWV2b05vbWJyZSIsInNldE51ZXZvTm9tYnJlIiwibnVldm9BcGVsbGlkbyIsInNldE51ZXZvQXBlbGxpZG8iLCJudWV2YUVzY3VlbGEiLCJzZXROdWV2YUVzY3VlbGEiLCJudWV2b1B1ZXN0byIsInNldE51ZXZvUHVlc3RvIiwibnVldm9QYWlzIiwic2V0TnVldm9QYWlzIiwibnVldm9Db3JyZW8iLCJzZXROdWV2b0NvcnJlbyIsIm51ZXZvUGFzc3dvcmQiLCJzZXROdWV2b1Bhc3N3b3JkIiwicmVwYXNzd29yZCIsInNldFJlcGFzc3dvcmQiLCJvbkZvcm1TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsInBhcmFtcyIsIm5vbWJyZSIsImFwZWxsaWRvcyIsImVtYWlsIiwiaW5zdGl0dWNpb24iLCJncmFkbyIsInBhaXMiLCJwYXNzd29yZCIsInNlcnZpY2UiLCJsb2dpblNlcnZpY2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInN0YXR1cyIsInNlcnZpY2VoIiwibG9jYWxTdG9yZSIsInBhc3MiLCJwYXlsb2FkIiwibWVuc2FqZSIsIm9wZW4iLCJ0aXR1bG9BbGVydGEiLCJ1c3VhcmlvIiwicmVnaXN0cm8iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJhcGVsbGlkbyIsImVzY3VlbGEiLCJwdWVzdG8iLCJjb250cmEiLCJjb21wcm9iYWNpb25Db250cmEiLCJib3RvbiIsImluZ3Jlc2FyIiwicmVnaXN0cmFkbyIsImFxdWkiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFlQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLFlBQVUsRUFBRTtBQUNWQyxXQUFPLEVBQUUsUUFEQztBQUVWQyxTQUFLLEVBQUU7QUFGRyxHQURJO0FBS2hCQyxZQUFVLEVBQUU7QUFDVkYsV0FBTyxFQUFFLFFBREM7QUFFVkMsU0FBSyxFQUFFO0FBRkcsR0FMSTtBQVNoQkUsWUFBVSxFQUFFO0FBQ1ZDLGlCQUFhLEVBQUUsTUFETDtBQUVWQyxjQUFVLEVBQUU7QUFGRjtBQVRJLENBQWxCOztBQWVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ3RCQyxPQURzQixHQUNBRCxLQURBLENBQ3RCQyxPQURzQjtBQUFBLE1BQ2JDLFFBRGEsR0FDQUYsS0FEQSxDQUNiRSxRQURhO0FBRTlCLE1BQU1DLE1BQU0sR0FBR0Msd0RBQVUsQ0FBQ0MsK0RBQUQsQ0FBekI7QUFGOEIsTUFHdEJDLEtBSHNCLEdBR0ZILE1BSEUsQ0FHdEJHLEtBSHNCO0FBQUEsTUFHZkMsUUFIZSxHQUdGSixNQUhFLENBR2ZJLFFBSGU7QUFBQSxNQUl0QkMsSUFKc0IsR0FJYkYsS0FKYSxDQUl0QkUsSUFKc0I7O0FBQUEsa0JBTVFDLHNEQUFRLENBQUMsRUFBRCxDQU5oQjtBQUFBO0FBQUEsTUFNdkJDLFdBTnVCO0FBQUEsTUFNVkMsY0FOVTs7QUFBQSxtQkFPWUYsc0RBQVEsQ0FBQyxFQUFELENBUHBCO0FBQUE7QUFBQSxNQU92QkcsYUFQdUI7QUFBQSxNQU9SQyxnQkFQUTs7QUFBQSxtQkFRVUosc0RBQVEsQ0FBQyxFQUFELENBUmxCO0FBQUE7QUFBQSxNQVF2QkssWUFSdUI7QUFBQSxNQVFUQyxlQVJT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REFBQyx3REFBRDtBQUNFLFNBQUssRUFBQyxTQURSO0FBRUUsV0FBTyxFQUFDLFdBRlY7QUFHRSxhQUFTLEVBQUVNLE9BQU8sQ0FBQzRELEtBSHJCO0FBSUUsUUFBSSxFQUFDLFFBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HQyw2REFBUSxDQUFDdEQsSUFBRCxDQU5YLENBREYsQ0FERixDQURGLENBbkZGLGVBa0dFLDJEQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQTBCLE1BQUUsRUFBRSxDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNFLDJEQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3VELCtEQUFVLENBQUN2RCxJQUFELENBRGIsRUFDcUIsR0FEckIsZUFFRTtBQUFHLGFBQVMsRUFBQyxPQUFiO0FBQXFCLFdBQU8sRUFBRTtBQUFBLGFBQU1OLFFBQVEsQ0FBQyxJQUFELENBQWQ7QUFBQSxLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csR0FESCxFQUVHOEQseURBQUksQ0FBQ3hELElBQUQsQ0FGUCxFQUVlLEdBRmYsQ0FGRixDQURGLENBbEdGLENBSkYsQ0FERjtBQW1IRCxDQXZNRDs7QUF5TWV5RCxxSUFBVSxDQUFDMUUsU0FBRCxDQUFWLENBQXNCUSxZQUF0QixDQUFmLEUiLCJmaWxlIjoiMy5hMmU3YTQ2NDIyOGZiMWI3ZjQ3My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkLCBHcmlkLCBUeXBvZ3JhcGh5LCBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuXG5pbXBvcnQge1xuICByZWdpc3RybyxcbiAgbm9tYnJlLFxuICBhcGVsbGlkbyxcbiAgZXNjdWVsYSxcbiAgcHVlc3RvLFxuICBwYWlzLFxuICBlbWFpbCxcbiAgY29udHJhLFxuICBjb21wcm9iYWNpb25Db250cmEsXG4gIGluZ3Jlc2FyLFxuICByZWdpc3RyYWRvLFxuICBhcXVpLFxufSBmcm9tIFwiLi4vLi4vLi4vanMvTGFuZ3VhZ2VcIjtcblxuaW1wb3J0IHsgbG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2pzL3dlYlNlcnZpY2VzXCI7XG5pbXBvcnQgKiBhcyBsb2NhbFN0b3JlIGZyb20gXCIuLi8uLi8uLi9qcy9sb2NhbFN0b3JlXCI7XG5pbXBvcnQgeyBzZXNpb25TdG9yZSB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZXMvc2VzaW9uU3RvcmVcIjtcblxuY29uc3Qgc3R5bGVzUmVnID0ge1xuICBUZXh0RmllbGQxOiB7XG4gICAganVzdGlmeTogXCJjZW50ZXJcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gIH0sXG4gIFRleHRGaWVsZDI6IHtcbiAgICBqdXN0aWZ5OiBcImNlbnRlclwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbiAgZGl2RGVsRm9ybToge1xuICAgIHBhZGRpbmdCb3R0b206IFwiMTV2aFwiLFxuICAgIHBhZGRpbmdUb3A6IFwiNy41dmhcIixcbiAgfSxcbn07XG5cbmNvbnN0IFJlZ2lzdHJvRm9ybSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzZXMsIHNldExvZ2luIH0gPSBwcm9wcztcbiAgY29uc3QgZ2xvYmFsID0gdXNlQ29udGV4dChzZXNpb25TdG9yZSk7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSBnbG9iYWw7XG4gIGNvbnN0IHsgbGFuZyB9ID0gc3RhdGU7XG5cbiAgY29uc3QgW251ZXZvTm9tYnJlLCBzZXROdWV2b05vbWJyZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW251ZXZvQXBlbGxpZG8sIHNldE51ZXZvQXBlbGxpZG9dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtudWV2YUVzY3VlbGEsIHNldE51ZXZhRXNjdWVsYV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW251ZXZvUHVlc3RvLCBzZXROdWV2b1B1ZXN0b10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW251ZXZvUGFpcywgc2V0TnVldm9QYWlzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbnVldm9Db3JyZW8sIHNldE51ZXZvQ29ycmVvXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbnVldm9QYXNzd29yZCwgc2V0TnVldm9QYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JlcGFzc3dvcmQsIHNldFJlcGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgb25Gb3JtU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU1RBUlRfTE9BRElOR1wiIH0pO1xuICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICBub21icmU6IG51ZXZvTm9tYnJlLFxuICAgICAgYXBlbGxpZG9zOiBudWV2b0FwZWxsaWRvLFxuICAgICAgZW1haWw6IG51ZXZvQ29ycmVvLFxuICAgICAgaW5zdGl0dWNpb246IG51ZXZhRXNjdWVsYSxcbiAgICAgIGdyYWRvOiBudWV2b1B1ZXN0byxcbiAgICAgIHBhaXM6IG51ZXZvUGFpcyxcbiAgICAgIHBhc3N3b3JkOiBudWV2b1Bhc3N3b3JkLFxuICAgIH07XG4gICAgaWYgKG51ZXZvUGFzc3dvcmQgPT0gcmVwYXNzd29yZCkge1xuICAgICAgdmFyIHNlcnZpY2UgPSBcIi9sb2dpbi9yZWdpc3RyYXJcIjtcbiAgICAgIGxvZ2luU2VydmljZShzZXJ2aWNlLCBcIlBPU1RcIiwgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSwgKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgdmFyIHNlcnZpY2VoID0gXCIvbG9naW4vc2VuZFJlZ2lzdHJvRW1haWwvXCIgKyBsb2NhbFN0b3JlLmdldEl0ZW0oXCJlc1wiKTtcbiAgICAgICAgICBsb2dpblNlcnZpY2UoXG4gICAgICAgICAgICBzZXJ2aWNlaCxcbiAgICAgICAgICAgIFwiR0VUXCIsXG4gICAgICAgICAgICB7IG5vbWJyZTogbnVldm9Ob21icmUsIGVtYWlsOiBudWV2b0NvcnJlbywgcGFzczogbnVldm9QYXNzd29yZCB9LFxuICAgICAgICAgICAgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiU0VUX0FMRVJUXCIsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgbWVuc2FqZTogXCJPcGVyYWNpw7NuIEV4aXRvc2FcIixcbiAgICAgICAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICAgICAgICB0aXR1bG9BbGVydGE6IFwiT3BlcmFjacOzbiBDb25jbHVpZGEgY29uIEV4aXRvXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIklOSUNJQVJfU0VTSU9OXCIsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogeyB1c3VhcmlvOiBudWV2b0NvcnJlbywgcGFzc3dvcmQ6IG51ZXZvUGFzc3dvcmQgfSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmRhdGEuc3RhdHVzID09IDUwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IFwiU0VUX0FMRVJUXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgIG1lbnNhamU6IFwiRWwgY29ycmVvIHlhIHNlIGVuY3VlbnRyYSByZWdpc3RyYWRvXCIsXG4gICAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICAgIHRpdHVsb0FsZXJ0YTogXCJBbGVydGEgZGUgRXJyb3JcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5kYXRhLnN0YXR1cyA9PSA1MDApIHtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBcIlNFVF9BTEVSVFwiLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICBtZW5zYWplOiBcIkh1Ym8gdW4gZXJyb3IgYWwgZW52aWFyIGVsIGNvcnJlbyBkZSBub3RpZmljYWNpw7NuXCIsXG4gICAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICAgIHRpdHVsb0FsZXJ0YTogXCJBbGVydGEgZGUgRXJyb3JcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwiU0VUX0FMRVJUXCIsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBtZW5zYWplOiBcIkVsIHBhc3N3b3JkIG5vIGNvaW5jaWRlXCIsXG4gICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICB0aXR1bG9BbGVydGE6IFwiQWxlcnRhIGRlIEVycm9yXCIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNUT1BfTE9BRElOR1wiIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uRm9ybVN1Ym1pdH0gY2xhc3NOYW1lPXtjbGFzc2VzLmRpdkRlbEZvcm19PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgYWxpZ249XCJjZW50ZXJcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgIHtyZWdpc3RybyhsYW5nKX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxHcmlkXG4gICAgICAgIGNsYXNzTmFtZT1cImdyaWRzRlwiXG4gICAgICAgIGNvbnRhaW5lclxuICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgID5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBsZz17N30gY2xhc3NOYW1lPVwiZ3JpZHNcIj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBsYWJlbD17bm9tYnJlKGxhbmcpfVxuICAgICAgICAgICAgaWQ9XCJjdXN0b20tY3NzLW91dGxpbmVkLWlucHV0XCJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICB2YWx1ZT17bnVldm9Ob21icmV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE51ZXZvTm9tYnJlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5UZXh0RmllbGQxfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBsZz17N30gY2xhc3NOYW1lPVwiZ3JpZHNcIj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBsYWJlbD17YXBlbGxpZG8obGFuZyl9XG4gICAgICAgICAgICBpZD1cImN1c3RvbS1jc3Mtb3V0bGluZWQtaW5wdXRcIlxuICAgICAgICAgICAgdmFsdWU9e251ZXZvQXBlbGxpZG99XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE51ZXZvQXBlbGxpZG8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLlRleHRGaWVsZDJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9IGxnPXs3fSBjbGFzc05hbWU9XCJncmlkc1wiPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGxhYmVsPXtlc2N1ZWxhKGxhbmcpfVxuICAgICAgICAgICAgaWQ9XCJjdXN0b20tY3NzLW91dGxpbmVkLWlucHV0XCJcbiAgICAgICAgICAgIHZhbHVlPXtudWV2YUVzY3VlbGF9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE51ZXZhRXNjdWVsYShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuVGV4dEZpZWxkMn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbGc9ezd9IGNsYXNzTmFtZT1cImdyaWRzXCI+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgbGFiZWw9e3B1ZXN0byhsYW5nKX1cbiAgICAgICAgICAgIGlkPVwiY3VzdG9tLWNzcy1vdXRsaW5lZC1pbnB1dFwiXG4gICAgICAgICAgICB2YWx1ZT17bnVldm9QdWVzdG99XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE51ZXZvUHVlc3RvKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5UZXh0RmllbGQyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBsZz17N30gY2xhc3NOYW1lPVwiZ3JpZHNcIj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBsYWJlbD17cGFpcyhsYW5nKX1cbiAgICAgICAgICAgIGlkPVwiY3VzdG9tLWNzcy1vdXRsaW5lZC1pbnB1dFwiXG4gICAgICAgICAgICB2YWx1ZT17bnVldm9QYWlzfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROdWV2b1BhaXMoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLlRleHRGaWVsZDJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9IGxnPXs3fSBjbGFzc05hbWU9XCJncmlkc1wiPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGxhYmVsPXtlbWFpbChsYW5nKX1cbiAgICAgICAgICAgIGlkPVwiY3VzdG9tLWNzcy1vdXRsaW5lZC1pbnB1dFwiXG4gICAgICAgICAgICB2YWx1ZT17bnVldm9Db3JyZW99XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE51ZXZvQ29ycmVvKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5UZXh0RmllbGQyfVxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbGc9ezd9IGNsYXNzTmFtZT1cImdyaWRzXCI+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgbGFiZWw9e2NvbnRyYShsYW5nKX1cbiAgICAgICAgICAgIGlkPVwiY3VzdG9tLWNzcy1vdXRsaW5lZC1pbnB1dFwiXG4gICAgICAgICAgICB2YWx1ZT17bnVldm9QYXNzd29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TnVldm9QYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuVGV4dEZpZWxkMn1cbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9IGxnPXs3fSBjbGFzc05hbWU9XCJncmlkc1wiPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGxhYmVsPXtjb21wcm9iYWNpb25Db250cmEobGFuZyl9XG4gICAgICAgICAgICBpZD1cImN1c3RvbS1jc3Mtb3V0bGluZWQtaW5wdXRcIlxuICAgICAgICAgICAgdmFsdWU9e3JlcGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlcGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLlRleHRGaWVsZDJ9XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBsZz17N30gY2xhc3NOYW1lPVwiZ3JpZHNcIj5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImZsZXgtZW5kXCIgY2xhc3NOYW1lPVwiZ3JpZHNcIj5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3Rvbn1cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpbmdyZXNhcihsYW5nKX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBsZz17N30+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgICB7cmVnaXN0cmFkbyhsYW5nKX17XCIgXCJ9XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rc1wiIG9uQ2xpY2s9eygpID0+IHNldExvZ2luKHRydWUpfT5cbiAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICB7YXF1aShsYW5nKX17XCIgXCJ9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXNSZWcpKFJlZ2lzdHJvRm9ybSk7XG4iXSwic291cmNlUm9vdCI6IiJ9