(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "31D0":
/*!**********************************************************!*\
  !*** ./src/Components/Diccionario/Login/RegistroForm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "TTf+");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "04ZO");
/* harmony import */ var _js_Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../js/Language */ "UQwk");
/* harmony import */ var _js_webServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../js/webServices */ "xrMW");
/* harmony import */ var _js_localStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../js/localStore */ "DWYy");
/* harmony import */ var _stores_sesionStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../stores/sesionStore */ "d70u");








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
  var global = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_stores_sesionStore__WEBPACK_IMPORTED_MODULE_7__["sesionStore"]);
  var state = global.state,
      dispatch = global.dispatch;
  var lang = state.lang;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      nuevoNombre = _useState2[0],
      setNuevoNombre = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      nuevoApellido = _useState4[0],
      setNuevoApellido = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      nuevaEscuela = _useState6[0],
      setNuevaEscuela = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),
      nuevoPuesto = _useState8[0],
      setNuevoPuesto = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),
      nuevoPais = _useState10[0],
      setNuevoPais = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState11, 2),
      nuevoCorreo = _useState12[0],
      setNuevoCorreo = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState13, 2),
      nuevoPassword = _useState14[0],
      setNuevoPassword = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState16 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState15, 2),
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
      console.log("lang", lang);
      var service = "/login/registrar";
      Object(_js_webServices__WEBPACK_IMPORTED_MODULE_5__["loginService"])(service, "POST", JSON.stringify(params), function (data) {
        if (data.data.status == 200) {
          var serviceh = "/login/sendRegistroEmail/" + lang;
          Object(_js_webServices__WEBPACK_IMPORTED_MODULE_5__["loginService"])(serviceh, "GET", {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: onFormSubmit,
    className: classes.divDelForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h3",
    align: "center",
    gutterBottom: true
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["registro"])(lang)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: "gridsF",
    container: true,
    direction: "column",
    alignItems: "center",
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["nombre"])(lang),
    id: "custom-css-outlined-input",
    margin: "normal",
    value: nuevoNombre,
    onChange: function onChange(e) {
      return setNuevoNombre(e.target.value);
    },
    className: classes.TextField1
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["apellido"])(lang),
    id: "custom-css-outlined-input",
    value: nuevoApellido,
    onChange: function onChange(e) {
      return setNuevoApellido(e.target.value);
    },
    className: classes.TextField2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["escuela"])(lang),
    id: "custom-css-outlined-input",
    value: nuevaEscuela,
    onChange: function onChange(e) {
      return setNuevaEscuela(e.target.value);
    },
    className: classes.TextField2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["puesto"])(lang),
    id: "custom-css-outlined-input",
    value: nuevoPuesto,
    onChange: function onChange(e) {
      return setNuevoPuesto(e.target.value);
    },
    className: classes.TextField2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["pais"])(lang),
    id: "custom-css-outlined-input",
    value: nuevoPais,
    onChange: function onChange(e) {
      return setNuevoPais(e.target.value);
    },
    className: classes.TextField2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["email"])(lang),
    id: "custom-css-outlined-input",
    value: nuevoCorreo,
    onChange: function onChange(e) {
      return setNuevoCorreo(e.target.value);
    },
    className: classes.TextField2,
    type: "email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["contra"])(lang),
    id: "custom-css-outlined-input",
    value: nuevoPassword,
    onChange: function onChange(e) {
      return setNuevoPassword(e.target.value);
    },
    className: classes.TextField2,
    type: "password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["comprobacionContra"])(lang),
    id: "custom-css-outlined-input",
    value: repassword,
    onChange: function onChange(e) {
      return setRepassword(e.target.value);
    },
    className: classes.TextField2,
    type: "password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "flex-end",
    className: "grids"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "primary",
    variant: "contained",
    className: classes.boton,
    type: "submit"
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["ingresar"])(lang))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4"
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["registrado"])(lang), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "links",
    onClick: function onClick() {
      return setLogin(true);
    }
  }, " ", Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["aqui"])(lang), " ")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(stylesReg)(RegistroForm));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9EaWNjaW9uYXJpby9Mb2dpbi9SZWdpc3Ryb0Zvcm0uanMiXSwibmFtZXMiOlsic3R5bGVzUmVnIiwiVGV4dEZpZWxkMSIsImp1c3RpZnkiLCJ3aWR0aCIsIlRleHRGaWVsZDIiLCJkaXZEZWxGb3JtIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJSZWdpc3Ryb0Zvcm0iLCJwcm9wcyIsImNsYXNzZXMiLCJzZXRMb2dpbiIsImdsb2JhbCIsInVzZUNvbnRleHQiLCJzZXNpb25TdG9yZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJsYW5nIiwidXNlU3RhdGUiLCJudWV2b05vbWJyZSIsInNldE51ZXZvTm9tYnJlIiwibnVldm9BcGVsbGlkbyIsInNldE51ZXZvQXBlbGxpZG8iLCJudWV2YUVzY3VlbGEiLCJzZXROdWV2YUVzY3VlbGEiLCJudWV2b1B1ZXN0byIsInNldE51ZXZvUHVlc3RvIiwibnVldm9QYWlzIiwic2V0TnVldm9QYWlzIiwibnVldm9Db3JyZW8iLCJzZXROdWV2b0NvcnJlbyIsIm51ZXZvUGFzc3dvcmQiLCJzZXROdWV2b1Bhc3N3b3JkIiwicmVwYXNzd29yZCIsInNldFJlcGFzc3dvcmQiLCJvbkZvcm1TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsInBhcmFtcyIsIm5vbWJyZSIsImFwZWxsaWRvcyIsImVtYWlsIiwiaW5zdGl0dWNpb24iLCJncmFkbyIsInBhaXMiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJzZXJ2aWNlIiwibG9naW5TZXJ2aWNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzdGF0dXMiLCJzZXJ2aWNlaCIsInBhc3MiLCJwYXlsb2FkIiwibWVuc2FqZSIsIm9wZW4iLCJ0aXR1bG9BbGVydGEiLCJ1c3VhcmlvIiwicmVnaXN0cm8iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJhcGVsbGlkbyIsImVzY3VlbGEiLCJwdWVzdG8iLCJjb250cmEiLCJjb21wcm9iYWNpb25Db250cmEiLCJib3RvbiIsImluZ3Jlc2FyIiwicmVnaXN0cmFkbyIsImFxdWkiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFlQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLFlBQVUsRUFBRTtBQUNWQyxXQUFPLEVBQUUsUUFEQztBQUVWQyxTQUFLLEVBQUU7QUFGRyxHQURJO0FBS2hCQyxZQUFVLEVBQUU7QUFDVkYsV0FBTyxFQUFFLFFBREM7QUFFVkMsU0FBSyxFQUFFO0FBRkcsR0FMSTtBQVNoQkUsWUFBVSxFQUFFO0FBQ1ZDLGlCQUFhLEVBQUUsTUFETDtBQUVWQyxjQUFVLEVBQUU7QUFGRjtBQVRJLENBQWxCOztBQWVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ3RCQyxPQURzQixHQUNBRCxLQURBLENBQ3RCQyxPQURzQjtBQUFBLE1BQ2JDLFFBRGEsR0FDQUYsS0FEQSxDQUNiRSxRQURhO0FBRTlCLE1BQU1DLE1BQU0sR0FBR0Msd0RBQVUsQ0FBQ0MsK0RBQUQsQ0FBekI7QUFGOEIsTUFHdEJDLEtBSHNCLEdBR0ZILE1BSEUsQ0FHdEJHLEtBSHNCO0FBQUEsTUFHZkMsUUFIZSxHQUdGSixNQUhFLENBR2ZJLFFBSGU7QUFBQSxNQUl0QkMsSUFKc0IsR0FJYkYsS0FKYSxDQUl0QkUsSUFKc0I7O0FBQUEsa0JBTVFDLHNEQUFRLENBQUMsRUFBRCxDQU5oQjtBQUFBO0FBQUEsTUFNdkJDLFdBTnVCO0FBQUEsTUFNVkMsY0FOVTs7QUFBQSxtQkFPWUYsc0RBQVEsQ0FBQyxFQUFELENBUHBCO0FBQUE7QUFBQSxNQU92QkcsYUFQdUI7QUFBQSxNQU9SQyxnQkFQUTs7QUFBQSxtQkFRVUosc0RBQVEsQ0FBQyxFQUFELENBUmxCO0FBQUE7QUFBQSxNQVF2QkssWUFSdUI7QUFBQSxNQVFUQyxlQVJTOztBQUFBLG1C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RSxFQUFFLENBQTlCO0FBQWlDLGFBQVMsRUFBQztBQUEzQyxrQkFDRSwyREFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUMsVUFBeEI7QUFBbUMsYUFBUyxFQUFDO0FBQTdDLGtCQUNFLDJEQUFDLHNEQUFEO0FBQU0sUUFBSTtBQUFWLGtCQUNFLDJEQUFDLHdEQUFEO0FBQ0UsU0FBSyxFQUFDLFNBRFI7QUFFRSxXQUFPLEVBQUMsV0FGVjtBQUdFLGFBQVMsRUFBRU0sT0FBTyxDQUFDNkQsS0FIckI7QUFJRSxRQUFJLEVBQUM7QUFKUCxLQU1HQyw2REFBUSxDQUFDdkQsSUFBRCxDQU5YLENBREYsQ0FERixDQURGLENBbkZGLGVBa0dFLDJEQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQTBCLE1BQUUsRUFBRTtBQUE5QixrQkFDRSwyREFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQztBQUFwQixLQUNHd0QsK0RBQVUsQ0FBQ3hELElBQUQsQ0FEYixFQUNxQixHQURyQixlQUVFO0FBQUcsYUFBUyxFQUFDLE9BQWI7QUFBcUIsV0FBTyxFQUFFO0FBQUEsYUFBTU4sUUFBUSxDQUFDLElBQUQsQ0FBZDtBQUFBO0FBQTlCLEtBQ0csR0FESCxFQUVHK0QseURBQUksQ0FBQ3pELElBQUQsQ0FGUCxFQUVlLEdBRmYsQ0FGRixDQURGLENBbEdGLENBSkYsQ0FERjtBQW1IRCxDQXhNRDs7QUEwTWUwRCxxSUFBVSxDQUFDM0UsU0FBRCxDQUFWLENBQXNCUSxZQUF0QixDQUFmLEUiLCJmaWxlIjoiMy43MTYzODM0Y2E5N2YxNjdhNzYxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkLCBHcmlkLCBUeXBvZ3JhcGh5LCBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuXG5pbXBvcnQge1xuICByZWdpc3RybyxcbiAgbm9tYnJlLFxuICBhcGVsbGlkbyxcbiAgZXNjdWVsYSxcbiAgcHVlc3RvLFxuICBwYWlzLFxuICBlbWFpbCxcbiAgY29udHJhLFxuICBjb21wcm9iYWNpb25Db250cmEsXG4gIGluZ3Jlc2FyLFxuICByZWdpc3RyYWRvLFxuICBhcXVpLFxufSBmcm9tIFwiLi4vLi4vLi4vanMvTGFuZ3VhZ2VcIjtcblxuaW1wb3J0IHsgbG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2pzL3dlYlNlcnZpY2VzXCI7XG5pbXBvcnQgKiBhcyBsb2NhbFN0b3JlIGZyb20gXCIuLi8uLi8uLi9qcy9sb2NhbFN0b3JlXCI7XG5pbXBvcnQgeyBzZXNpb25TdG9yZSB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZXMvc2VzaW9uU3RvcmVcIjtcblxuY29uc3Qgc3R5bGVzUmVnID0ge1xuICBUZXh0RmllbGQxOiB7XG4gICAganVzdGlmeTogXCJjZW50ZXJcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gIH0sXG4gIFRleHRGaWVsZDI6IHtcbiAgICBqdXN0aWZ5OiBcImNlbnRlclwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbiAgZGl2RGVsRm9ybToge1xuICAgIHBhZGRpbmdCb3R0b206IFwiMTV2aFwiLFxuICAgIHBhZGRpbmdUb3A6IFwiNy41dmhcIixcbiAgfSxcbn07XG5cbmNvbnN0IFJlZ2lzdHJvRm9ybSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzZXMsIHNldExvZ2luIH0gPSBwcm9wcztcbiAgY29uc3QgZ2xvYmFsID0gdXNlQ29udGV4dChzZXNpb25TdG9yZSk7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSBnbG9iYWw7XG4gIGNvbnN0IHsgbGFuZyB9ID0gc3RhdGU7XG5cbiAgY29uc3QgW251ZXZvTm9tYnJlLCBzZXROdWV2b05vbWJyZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW251ZXZvQXBlbGxpZG8sIHNldE51ZXZvQXBlbGxpZG9dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtudWV2YUVzY3VlbGEsIHNldE51ZXZhRXNjdWVsYV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW251ZXZvUHVlc3RvLCBzZXROdWV2b1B1ZXN0b10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW251ZXZvUGFpcywgc2V0TnVldm9QYWlzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbnVldm9Db3JyZW8sIHNldE51ZXZvQ29ycmVvXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbnVldm9QYXNzd29yZCwgc2V0TnVldm9QYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JlcGFzc3dvcmQsIHNldFJlcGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgb25Gb3JtU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU1RBUlRfTE9BRElOR1wiIH0pO1xuICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICBub21icmU6IG51ZXZvTm9tYnJlLFxuICAgICAgYXBlbGxpZG9zOiBudWV2b0FwZWxsaWRvLFxuICAgICAgZW1haWw6IG51ZXZvQ29ycmVvLFxuICAgICAgaW5zdGl0dWNpb246IG51ZXZhRXNjdWVsYSxcbiAgICAgIGdyYWRvOiBudWV2b1B1ZXN0byxcbiAgICAgIHBhaXM6IG51ZXZvUGFpcyxcbiAgICAgIHBhc3N3b3JkOiBudWV2b1Bhc3N3b3JkLFxuICAgIH07XG4gICAgaWYgKG51ZXZvUGFzc3dvcmQgPT0gcmVwYXNzd29yZCkge1xuICAgICAgY29uc29sZS5sb2coXCJsYW5nXCIsIGxhbmcpO1xuICAgICAgdmFyIHNlcnZpY2UgPSBcIi9sb2dpbi9yZWdpc3RyYXJcIjtcbiAgICAgIGxvZ2luU2VydmljZShzZXJ2aWNlLCBcIlBPU1RcIiwgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSwgKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgdmFyIHNlcnZpY2VoID0gXCIvbG9naW4vc2VuZFJlZ2lzdHJvRW1haWwvXCIgKyBsYW5nO1xuICAgICAgICAgIGxvZ2luU2VydmljZShcbiAgICAgICAgICAgIHNlcnZpY2VoLFxuICAgICAgICAgICAgXCJHRVRcIixcbiAgICAgICAgICAgIHsgbm9tYnJlOiBudWV2b05vbWJyZSwgZW1haWw6IG51ZXZvQ29ycmVvLCBwYXNzOiBudWV2b1Bhc3N3b3JkIH0sXG4gICAgICAgICAgICAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJTRVRfQUxFUlRcIixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICBtZW5zYWplOiBcIk9wZXJhY2nDs24gRXhpdG9zYVwiLFxuICAgICAgICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHRpdHVsb0FsZXJ0YTogXCJPcGVyYWNpw7NuIENvbmNsdWlkYSBjb24gRXhpdG9cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiSU5JQ0lBUl9TRVNJT05cIixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7IHVzdWFyaW86IG51ZXZvQ29ycmVvLCBwYXNzd29yZDogbnVldm9QYXNzd29yZCB9LFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuZGF0YS5zdGF0dXMgPT0gNTAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJTRVRfQUxFUlRcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgbWVuc2FqZTogXCJFbCBjb3JyZW8geWEgc2UgZW5jdWVudHJhIHJlZ2lzdHJhZG9cIixcbiAgICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgdGl0dWxvQWxlcnRhOiBcIkFsZXJ0YSBkZSBFcnJvclwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmRhdGEuc3RhdHVzID09IDUwMCkge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IFwiU0VUX0FMRVJUXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgIG1lbnNhamU6IFwiSHVibyB1biBlcnJvciBhbCBlbnZpYXIgZWwgY29ycmVvIGRlIG5vdGlmaWNhY2nDs25cIixcbiAgICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgdGl0dWxvQWxlcnRhOiBcIkFsZXJ0YSBkZSBFcnJvclwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogXCJTRVRfQUxFUlRcIixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIG1lbnNhamU6IFwiRWwgcGFzc3dvcmQgbm8gY29pbmNpZGVcIixcbiAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgIHRpdHVsb0FsZXJ0YTogXCJBbGVydGEgZGUgRXJyb3JcIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU1RPUF9MT0FESU5HXCIgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25Gb3JtU3VibWl0fSBjbGFzc05hbWU9e2NsYXNzZXMuZGl2RGVsRm9ybX0+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBhbGlnbj1cImNlbnRlclwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAge3JlZ2lzdHJvKGxhbmcpfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWRcbiAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZHNGXCJcbiAgICAgICAgY29udGFpbmVyXG4gICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9IGxnPXs3fSBjbGFzc05hbWU9XCJncmlkc1wiPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGxhYmVsPXtub21icmUobGFuZyl9XG4gICAgICAgICAgICBpZD1cImN1c3RvbS1jc3Mtb3V0bGluZWQtaW5wdXRcIlxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgIHZhbHVlPXtudWV2b05vbWJyZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TnVldm9Ob21icmUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLlRleHRGaWVsZDF9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9IGxnPXs3fSBjbGFzc05hbWU9XCJncmlkc1wiPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGxhYmVsPXthcGVsbGlkbyhsYW5nKX1cbiAgICAgICAgICAgIGlkPVwiY3VzdG9tLWNzcy1vdXRsaW5lZC1pbnB1dFwiXG4gICAgICAgICAgICB2YWx1ZT17bnVldm9BcGVsbGlkb31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TnVldm9BcGVsbGlkbyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuVGV4dEZpZWxkMn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbGc9ezd9IGNsYXNzTmFtZT1cImdyaWRzXCI+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgbGFiZWw9e2VzY3VlbGEobGFuZyl9XG4gICAgICAgICAgICBpZD1cImN1c3RvbS1jc3Mtb3V0bGluZWQtaW5wdXRcIlxuICAgICAgICAgICAgdmFsdWU9e251ZXZhRXNjdWVsYX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TnVldmFFc2N1ZWxhKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5UZXh0RmllbGQyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBsZz17N30gY2xhc3NOYW1lPVwiZ3JpZHNcIj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBsYWJlbD17cHVlc3RvKGxhbmcpfVxuICAgICAgICAgICAgaWQ9XCJjdXN0b20tY3NzLW91dGxpbmVkLWlucHV0XCJcbiAgICAgICAgICAgIHZhbHVlPXtudWV2b1B1ZXN0b31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TnVldm9QdWVzdG8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLlRleHRGaWVsZDJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9IGxnPXs3fSBjbGFzc05hbWU9XCJncmlkc1wiPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGxhYmVsPXtwYWlzKGxhbmcpfVxuICAgICAgICAgICAgaWQ9XCJjdXN0b20tY3NzLW91dGxpbmVkLWlucHV0XCJcbiAgICAgICAgICAgIHZhbHVlPXtudWV2b1BhaXN9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE51ZXZvUGFpcyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuVGV4dEZpZWxkMn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbGc9ezd9IGNsYXNzTmFtZT1cImdyaWRzXCI+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgbGFiZWw9e2VtYWlsKGxhbmcpfVxuICAgICAgICAgICAgaWQ9XCJjdXN0b20tY3NzLW91dGxpbmVkLWlucHV0XCJcbiAgICAgICAgICAgIHZhbHVlPXtudWV2b0NvcnJlb31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TnVldm9Db3JyZW8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLlRleHRGaWVsZDJ9XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBsZz17N30gY2xhc3NOYW1lPVwiZ3JpZHNcIj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBsYWJlbD17Y29udHJhKGxhbmcpfVxuICAgICAgICAgICAgaWQ9XCJjdXN0b20tY3NzLW91dGxpbmVkLWlucHV0XCJcbiAgICAgICAgICAgIHZhbHVlPXtudWV2b1Bhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROdWV2b1Bhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5UZXh0RmllbGQyfVxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbGc9ezd9IGNsYXNzTmFtZT1cImdyaWRzXCI+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgbGFiZWw9e2NvbXByb2JhY2lvbkNvbnRyYShsYW5nKX1cbiAgICAgICAgICAgIGlkPVwiY3VzdG9tLWNzcy1vdXRsaW5lZC1pbnB1dFwiXG4gICAgICAgICAgICB2YWx1ZT17cmVwYXNzd29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVwYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuVGV4dEZpZWxkMn1cbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9IGxnPXs3fSBjbGFzc05hbWU9XCJncmlkc1wiPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiZmxleC1lbmRcIiBjbGFzc05hbWU9XCJncmlkc1wiPlxuICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvdG9ufVxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2luZ3Jlc2FyKGxhbmcpfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9IGxnPXs3fT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5cbiAgICAgICAgICAgIHtyZWdpc3RyYWRvKGxhbmcpfXtcIiBcIn1cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtzXCIgb25DbGljaz17KCkgPT4gc2V0TG9naW4odHJ1ZSl9PlxuICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgIHthcXVpKGxhbmcpfXtcIiBcIn1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlc1JlZykoUmVnaXN0cm9Gb3JtKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=