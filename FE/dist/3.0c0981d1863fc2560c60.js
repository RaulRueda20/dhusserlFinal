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
    justify: 'center',
    width: "100%"
  },
  TextField2: {
    justify: 'center',
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
      type: 'START_LOADING'
    });
    var params = {
      'nombre': nuevoNombre,
      'apellidos': nuevoApellido,
      'email': nuevoCorreo,
      'institucion': nuevaEscuela,
      'grado': nuevoPuesto,
      'pais': nuevoPais,
      'password': nuevoPassword
    };

    if (nuevoPassword == repassword) {
      var service = "/login/registrar";
      Object(_js_webServices__WEBPACK_IMPORTED_MODULE_4__["loginService"])(service, "POST", JSON.stringify(params), function (data) {
        console.log("error", data.error);

        if (data.data.status == 200) {
          var serviceh = "/login/sendRegistroEmail/" + _js_localStore__WEBPACK_IMPORTED_MODULE_5__["getItem"]("es");
          Object(_js_webServices__WEBPACK_IMPORTED_MODULE_4__["loginService"])(serviceh, "GET", {
            "nombre": nuevoNombre,
            "email": nuevoCorreo,
            "pass": nuevoPassword
          }, function (data) {
            console.log("data", JSON.parse(data.config.data));
            dispatch({
              type: 'SET_ALERT',
              payload: {
                mensaje: "Operación Exitosa",
                open: true,
                tituloAlerta: "Operación Concluida con Exito"
              }
            });
            dispatch({
              type: "INICIAR_SESION",
              payload: {
                "usuario": nuevoCorreo,
                "password": nuevoPassword
              }
            });
          });
        } else if (data.data.status == 501) {
          dispatch({
            type: 'SET_ALERT',
            payload: {
              mensaje: "El correo ya se encuentra registrado",
              open: true,
              tituloAlerta: "Alerta de Error"
            }
          });
        } else if (data.data.status == 500) {
          dispatch({
            type: 'SET_ALERT',
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
        type: 'SET_ALERT',
        payload: {
          mensaje: "El password no coincide",
          open: true,
          tituloAlerta: "Alerta de Error"
        }
      });
    }

    dispatch({
      type: 'STOP_LOADING'
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: onFormSubmit,
    className: classes.divDelForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h3",
    align: "center",
    gutterBottom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
      lineNumber: 85,
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
      lineNumber: 86,
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
      lineNumber: 87,
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
      lineNumber: 96,
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
      lineNumber: 97,
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
      lineNumber: 105,
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
      lineNumber: 106,
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
      lineNumber: 114,
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
      lineNumber: 115,
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
      lineNumber: 123,
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
      lineNumber: 124,
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
      lineNumber: 132,
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
      lineNumber: 133,
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
      lineNumber: 142,
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
      lineNumber: 143,
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
      lineNumber: 152,
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
      lineNumber: 153,
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
      lineNumber: 162,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "flex-end",
    className: "grids",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
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
      lineNumber: 165,
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
      lineNumber: 177,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
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
      lineNumber: 179,
      columnNumber: 32
    }
  }, " ", Object(_js_Language__WEBPACK_IMPORTED_MODULE_3__["aqui"])(lang), " ")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(stylesReg)(RegistroForm));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9EaWNjaW9uYXJpby9Mb2dpbi9SZWdpc3Ryb0Zvcm0uanMiXSwibmFtZXMiOlsic3R5bGVzUmVnIiwiVGV4dEZpZWxkMSIsImp1c3RpZnkiLCJ3aWR0aCIsIlRleHRGaWVsZDIiLCJkaXZEZWxGb3JtIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJSZWdpc3Ryb0Zvcm0iLCJwcm9wcyIsImNsYXNzZXMiLCJzZXRMb2dpbiIsImdsb2JhbCIsInVzZUNvbnRleHQiLCJzZXNpb25TdG9yZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJsYW5nIiwidXNlU3RhdGUiLCJudWV2b05vbWJyZSIsInNldE51ZXZvTm9tYnJlIiwibnVldm9BcGVsbGlkbyIsInNldE51ZXZvQXBlbGxpZG8iLCJudWV2YUVzY3VlbGEiLCJzZXROdWV2YUVzY3VlbGEiLCJudWV2b1B1ZXN0byIsInNldE51ZXZvUHVlc3RvIiwibnVldm9QYWlzIiwic2V0TnVldm9QYWlzIiwibnVldm9Db3JyZW8iLCJzZXROdWV2b0NvcnJlbyIsIm51ZXZvUGFzc3dvcmQiLCJzZXROdWV2b1Bhc3N3b3JkIiwicmVwYXNzd29yZCIsInNldFJlcGFzc3dvcmQiLCJvbkZvcm1TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsInBhcmFtcyIsInNlcnZpY2UiLCJsb2dpblNlcnZpY2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInN0YXR1cyIsInNlcnZpY2VoIiwibG9jYWxTdG9yZSIsInBhcnNlIiwiY29uZmlnIiwicGF5bG9hZCIsIm1lbnNhamUiLCJvcGVuIiwidGl0dWxvQWxlcnRhIiwicmVnaXN0cm8iLCJub21icmUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJhcGVsbGlkbyIsImVzY3VlbGEiLCJwdWVzdG8iLCJwYWlzIiwiZW1haWwiLCJjb250cmEiLCJjb21wcm9iYWNpb25Db250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a0JBQ0UsMkRBQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDRSwyREFBQyx3REFBRDtBQUNFLFNBQUssRUFBQyxTQURSO0FBRUUsV0FBTyxFQUFDLFdBRlY7QUFHRSxhQUFTLEVBQUVNLE9BQU8sQ0FBQzJELEtBSHJCO0FBSUUsUUFBSSxFQUFDLFFBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HQyw2REFBUSxDQUFDckQsSUFBRCxDQU5YLENBREYsQ0FERixDQURGLENBN0VGLGVBNEZFLDJEQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQTBCLE1BQUUsRUFBRSxDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNFLDJEQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3NELCtEQUFVLENBQUN0RCxJQUFELENBRGIsb0JBQ3FCO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBcUIsV0FBTyxFQUFFO0FBQUEsYUFBTU4sUUFBUSxDQUFDLElBQUQsQ0FBZDtBQUFBLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBc0Q2RCx5REFBSSxDQUFDdkQsSUFBRCxDQUExRCxNQURyQixDQURGLENBNUZGLENBSkYsQ0FERjtBQXlHRCxDQTlKRDs7QUFnS2V3RCxxSUFBVSxDQUFDekUsU0FBRCxDQUFWLENBQXNCUSxZQUF0QixDQUFmLEUiLCJmaWxlIjoiMy4wYzA5ODFkMTg2M2ZjMjU2MGM2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRleHRGaWVsZCwgR3JpZCwgVHlwb2dyYXBoeSwgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuXG5pbXBvcnQgeyByZWdpc3Rybywgbm9tYnJlLCBhcGVsbGlkbywgZXNjdWVsYSwgcHVlc3RvLCBwYWlzLCBlbWFpbCwgY29udHJhLCBjb21wcm9iYWNpb25Db250cmEsIGluZ3Jlc2FyLCByZWdpc3RyYWRvLCBhcXVpIH0gZnJvbSAnLi4vLi4vLi4vanMvTGFuZ3VhZ2UnO1xuXG5pbXBvcnQgeyBsb2dpblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9qcy93ZWJTZXJ2aWNlcyc7XG5pbXBvcnQgKiBhcyBsb2NhbFN0b3JlIGZyb20gJy4uLy4uLy4uL2pzL2xvY2FsU3RvcmUnO1xuaW1wb3J0IHsgc2VzaW9uU3RvcmUgfSBmcm9tICcuLi8uLi8uLi9zdG9yZXMvc2VzaW9uU3RvcmUnO1xuXG5jb25zdCBzdHlsZXNSZWcgPSB7XG4gIFRleHRGaWVsZDE6IHtcbiAgICBqdXN0aWZ5OiAnY2VudGVyJyxcbiAgICB3aWR0aDogXCIxMDAlXCIsXG5cbiAgfSxcbiAgVGV4dEZpZWxkMjoge1xuICAgIGp1c3RpZnk6ICdjZW50ZXInLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbiAgZGl2RGVsRm9ybToge1xuICAgIHBhZGRpbmdCb3R0b206IFwiMTV2aFwiLFxuICAgIHBhZGRpbmdUb3A6IFwiNy41dmhcIlxuICB9XG59XG5cbmNvbnN0IFJlZ2lzdHJvRm9ybSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzZXMsIHNldExvZ2luIH0gPSBwcm9wcztcbiAgY29uc3QgZ2xvYmFsID0gdXNlQ29udGV4dChzZXNpb25TdG9yZSk7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSBnbG9iYWxcbiAgY29uc3QgeyBsYW5nIH0gPSBzdGF0ZVxuXG4gIGNvbnN0IFtudWV2b05vbWJyZSwgc2V0TnVldm9Ob21icmVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtudWV2b0FwZWxsaWRvLCBzZXROdWV2b0FwZWxsaWRvXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbnVldmFFc2N1ZWxhLCBzZXROdWV2YUVzY3VlbGFdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtudWV2b1B1ZXN0bywgc2V0TnVldm9QdWVzdG9dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtudWV2b1BhaXMsIHNldE51ZXZvUGFpc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW251ZXZvQ29ycmVvLCBzZXROdWV2b0NvcnJlb10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW251ZXZvUGFzc3dvcmQsIHNldE51ZXZvUGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtyZXBhc3N3b3JkLCBzZXRSZXBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IG9uRm9ybVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnU1RBUlRfTE9BRElORycgfSlcbiAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgJ25vbWJyZSc6IG51ZXZvTm9tYnJlLFxuICAgICAgJ2FwZWxsaWRvcyc6IG51ZXZvQXBlbGxpZG8sXG4gICAgICAnZW1haWwnOiBudWV2b0NvcnJlbyxcbiAgICAgICdpbnN0aXR1Y2lvbic6IG51ZXZhRXNjdWVsYSxcbiAgICAgICdncmFkbyc6IG51ZXZvUHVlc3RvLFxuICAgICAgJ3BhaXMnOiBudWV2b1BhaXMsXG4gICAgICAncGFzc3dvcmQnOiBudWV2b1Bhc3N3b3JkXG4gICAgfVxuICAgIGlmIChudWV2b1Bhc3N3b3JkID09IHJlcGFzc3dvcmQpIHtcbiAgICAgIHZhciBzZXJ2aWNlID0gXCIvbG9naW4vcmVnaXN0cmFyXCJcbiAgICAgIGxvZ2luU2VydmljZShzZXJ2aWNlLCBcIlBPU1RcIiwgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSwgKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBkYXRhLmVycm9yKVxuICAgICAgICBpZiAoZGF0YS5kYXRhLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICB2YXIgc2VydmljZWggPSBcIi9sb2dpbi9zZW5kUmVnaXN0cm9FbWFpbC9cIiArIGxvY2FsU3RvcmUuZ2V0SXRlbShcImVzXCIpXG4gICAgICAgICAgbG9naW5TZXJ2aWNlKHNlcnZpY2VoLCBcIkdFVFwiLCB7IFwibm9tYnJlXCI6IG51ZXZvTm9tYnJlLCBcImVtYWlsXCI6IG51ZXZvQ29ycmVvLCBcInBhc3NcIjogbnVldm9QYXNzd29yZCB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsIEpTT04ucGFyc2UoZGF0YS5jb25maWcuZGF0YSkpXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfQUxFUlQnLCBwYXlsb2FkOiB7IG1lbnNhamU6IFwiT3BlcmFjacOzbiBFeGl0b3NhXCIsIG9wZW46IHRydWUsIHRpdHVsb0FsZXJ0YTogXCJPcGVyYWNpw7NuIENvbmNsdWlkYSBjb24gRXhpdG9cIiB9IH0pXG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgIHR5cGU6IFwiSU5JQ0lBUl9TRVNJT05cIixcbiAgICAgICAgICAgICAgcGF5bG9hZDogeyBcInVzdWFyaW9cIjogbnVldm9Db3JyZW8sIFwicGFzc3dvcmRcIjogbnVldm9QYXNzd29yZCB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5kYXRhLnN0YXR1cyA9PSA1MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfQUxFUlQnLCBwYXlsb2FkOiB7IG1lbnNhamU6IFwiRWwgY29ycmVvIHlhIHNlIGVuY3VlbnRyYSByZWdpc3RyYWRvXCIsIG9wZW46IHRydWUsIHRpdHVsb0FsZXJ0YTogXCJBbGVydGEgZGUgRXJyb3JcIiB9IH0pXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5kYXRhLnN0YXR1cyA9PSA1MDApIHtcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfQUxFUlQnLCBwYXlsb2FkOiB7IG1lbnNhamU6IFwiSHVibyB1biBlcnJvciBhbCBlbnZpYXIgZWwgY29ycmVvIGRlIG5vdGlmaWNhY2nDs25cIiwgb3BlbjogdHJ1ZSwgdGl0dWxvQWxlcnRhOiBcIkFsZXJ0YSBkZSBFcnJvclwiIH0gfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX0FMRVJUJywgcGF5bG9hZDogeyBtZW5zYWplOiBcIkVsIHBhc3N3b3JkIG5vIGNvaW5jaWRlXCIsIG9wZW46IHRydWUsIHRpdHVsb0FsZXJ0YTogXCJBbGVydGEgZGUgRXJyb3JcIiB9IH0pXG4gICAgfVxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NUT1BfTE9BRElORycgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uRm9ybVN1Ym1pdH0gY2xhc3NOYW1lPXtjbGFzc2VzLmRpdkRlbEZvcm19PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgYWxpZ249XCJjZW50ZXJcIiBndXR0ZXJCb3R0b20gPlxuICAgICAgICB7cmVnaXN0cm8obGFuZyl9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBjbGFzc05hbWU9XCJncmlkc0ZcIiBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHNwYWNpbmc9ezJ9PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9IGxnPXs3fSBjbGFzc05hbWU9XCJncmlkc1wiPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGxhYmVsPXtub21icmUobGFuZyl9XG4gICAgICAgICAgICBpZD1cImN1c3RvbS1jc3Mtb3V0bGluZWQtaW5wdXRcIlxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgIHZhbHVlPXtudWV2b05vbWJyZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE51ZXZvTm9tYnJlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5UZXh0RmllbGQxfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBsZz17N30gY2xhc3NOYW1lPVwiZ3JpZHNcIj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBsYWJlbD17YXBlbGxpZG8obGFuZyl9XG4gICAgICAgICAgICBpZD1cImN1c3RvbS1jc3Mtb3V0bGluZWQtaW5wdXRcIlxuICAgICAgICAgICAgdmFsdWU9e251ZXZvQXBlbGxpZG99XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXROdWV2b0FwZWxsaWRvKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5UZXh0RmllbGQyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBsZz17N30gY2xhc3NOYW1lPVwiZ3JpZHNcIj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBsYWJlbD17ZXNjdWVsYShsYW5nKX1cbiAgICAgICAgICAgIGlkPVwiY3VzdG9tLWNzcy1vdXRsaW5lZC1pbnB1dFwiXG4gICAgICAgICAgICB2YWx1ZT17bnVldmFFc2N1ZWxhfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TnVldmFFc2N1ZWxhKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5UZXh0RmllbGQyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBsZz17N30gY2xhc3NOYW1lPVwiZ3JpZHNcIj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBsYWJlbD17cHVlc3RvKGxhbmcpfVxuICAgICAgICAgICAgaWQ9XCJjdXN0b20tY3NzLW91dGxpbmVkLWlucHV0XCJcbiAgICAgICAgICAgIHZhbHVlPXtudWV2b1B1ZXN0b31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE51ZXZvUHVlc3RvKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5UZXh0RmllbGQyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBsZz17N30gY2xhc3NOYW1lPVwiZ3JpZHNcIj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBsYWJlbD17cGFpcyhsYW5nKX1cbiAgICAgICAgICAgIGlkPVwiY3VzdG9tLWNzcy1vdXRsaW5lZC1pbnB1dFwiXG4gICAgICAgICAgICB2YWx1ZT17bnVldm9QYWlzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TnVldm9QYWlzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5UZXh0RmllbGQyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBsZz17N30gY2xhc3NOYW1lPVwiZ3JpZHNcIj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBsYWJlbD17ZW1haWwobGFuZyl9XG4gICAgICAgICAgICBpZD1cImN1c3RvbS1jc3Mtb3V0bGluZWQtaW5wdXRcIlxuICAgICAgICAgICAgdmFsdWU9e251ZXZvQ29ycmVvfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TnVldm9Db3JyZW8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLlRleHRGaWVsZDJ9XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBsZz17N30gY2xhc3NOYW1lPVwiZ3JpZHNcIj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBsYWJlbD17Y29udHJhKGxhbmcpfVxuICAgICAgICAgICAgaWQ9XCJjdXN0b20tY3NzLW91dGxpbmVkLWlucHV0XCJcbiAgICAgICAgICAgIHZhbHVlPXtudWV2b1Bhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TnVldm9QYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuVGV4dEZpZWxkMn1cbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9IGxnPXs3fSBjbGFzc05hbWU9XCJncmlkc1wiPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGxhYmVsPXtjb21wcm9iYWNpb25Db250cmEobGFuZyl9XG4gICAgICAgICAgICBpZD1cImN1c3RvbS1jc3Mtb3V0bGluZWQtaW5wdXRcIlxuICAgICAgICAgICAgdmFsdWU9e3JlcGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRSZXBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5UZXh0RmllbGQyfVxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbGc9ezd9IGNsYXNzTmFtZT1cImdyaWRzXCI+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJmbGV4LWVuZFwiIGNsYXNzTmFtZT1cImdyaWRzXCI+XG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYm90b259XG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aW5ncmVzYXIobGFuZyl9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbGc9ezd9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgICAge3JlZ2lzdHJhZG8obGFuZyl9IDxhIGNsYXNzTmFtZT1cImxpbmtzXCIgb25DbGljaz17KCkgPT4gc2V0TG9naW4odHJ1ZSl9PiB7YXF1aShsYW5nKX0gPC9hPlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlc1JlZykoUmVnaXN0cm9Gb3JtKTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==