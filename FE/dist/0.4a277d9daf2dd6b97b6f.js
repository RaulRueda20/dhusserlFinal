(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "Yi4w":
/*!*******************************************************!*\
  !*** ./src/Components/Diccionario/Login/LoginForm.js ***!
  \*******************************************************/
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
/* harmony import */ var _ModalRecuperacion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ModalRecuperacion */ "lRAo");
/* harmony import */ var _js_webServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../js/webServices */ "xrMW");
/* harmony import */ var _stores_sesionStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../stores/sesionStore */ "d70u");








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
  var global = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_stores_sesionStore__WEBPACK_IMPORTED_MODULE_7__["sesionStore"]);
  var dispatch = global.dispatch,
      state = global.state;
  var lang = state.lang,
      loading = state.loading;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),
      correo = _React$useState2[0],
      setCorreo = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState3, 2),
      password = _React$useState4[0],
      setPassword = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState5, 2),
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
          message: Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["correoInvalido"])(lang)
        }
      });
      dispatch({
        type: "STOP_LOADING"
      });
    } else if (correo != "" && password != "") {
      Object(_js_webServices__WEBPACK_IMPORTED_MODULE_6__["loginService"])(service, "POST", params, function (data) {
        if (data.data.error) {
          dispatch({
            type: "SET_SNACKBAR",
            payload: {
              open: true,
              variant: "error",
              message: Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["correoInvalido"])(lang)
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.divDelForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h3",
    align: "center",
    gutterBottom: true
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["inicio"])(lang)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: onFormSubmit,
    style: {
      marginTop: "5%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
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
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["email"])(lang),
    id: "custom-css-outlined-input",
    margin: "normal",
    value: correo,
    onChange: function onChange(e) {
      return setCorreo(e.target.value);
    },
    className: classes.TextField1,
    type: "email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7,
    className: "grids"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["contra"])(lang),
    id: "custom-css-outlined-input" + 1,
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
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
    variant: "contained",
    color: "primary",
    type: "submit"
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["ingresar"])(lang))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4"
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["olvidoDeContra"])(lang), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: handleClickModal,
    className: "links"
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["aqui"])(lang)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    lg: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4"
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["registrarse"])(lang), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: function onClick() {
      return setLogin(false);
    },
    className: "links"
  }, " ", Object(_js_Language__WEBPACK_IMPORTED_MODULE_4__["aqui"])(lang)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ModalRecuperacion__WEBPACK_IMPORTED_MODULE_5__["default"], {
    recuperarContra: recuperarContra,
    setRecuperarContra: setRecuperarContra
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(stylesFor)(LoginForm));

/***/ }),

/***/ "lRAo":
/*!***************************************************************!*\
  !*** ./src/Components/Diccionario/Login/ModalRecuperacion.js ***!
  \***************************************************************/
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
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Clear */ "ytJY");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_Language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../js/Language */ "UQwk");
/* harmony import */ var _stores_sesionStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../stores/sesionStore */ "d70u");
/* harmony import */ var _js_webServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../js/webServices */ "xrMW");








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
  var global = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_stores_sesionStore__WEBPACK_IMPORTED_MODULE_6__["sesionStore"]);
  var state = global.state;
  var lang = state.lang;
  var classes = props.classes,
      setRecuperarContra = props.setRecuperarContra,
      recuperarContra = props.recuperarContra;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
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
    Object(_js_webServices__WEBPACK_IMPORTED_MODULE_7__["loginService"])(service, "GET", {}, function (data) {
      dispatch({
        type: "STOP_LOADING"
      });

      if (data.status == 200) {
        dispatch({
          type: "SET_SNACKBAR",
          payload: {
            open: true,
            variant: "success",
            message: Object(_js_Language__WEBPACK_IMPORTED_MODULE_5__["exitoBody"])(lang)
          }
        }); // dispatch({ type: 'SET_SESION', payload: { "user": nuevoCorreo, "password": nuevoPassword } })
        // setStore(data.response, email.correo)
      } else {
        dispatch({
          type: "SET_SNACKBAR",
          payload: {
            open: true,
            variant: "error",
            message: Object(_js_Language__WEBPACK_IMPORTED_MODULE_5__["correoNoEncontrado"])(lang)
          }
        });
      }
    });
  };

  function handleClose() {
    setRecuperarContra(false);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    "aria-labelledby": "simple-modal-title",
    "aria-describedby": "simple-modal-description",
    open: recuperarContra,
    onClose: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    className: classes.modalinR
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: onFormSubmit1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 11
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4"
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_5__["modalRecuperacionContra"])(lang))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    "aria-haspopup": "true",
    onClick: handleClose,
    className: classes.botonClear
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_4___default.a, {
    fontSize: "small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    className: "divisor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h5"
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_5__["modalIngresarCorreo"])(lang)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    label: Object(_js_Language__WEBPACK_IMPORTED_MODULE_5__["email"])(lang),
    id: "custom-css-outlined-input",
    margin: "normal",
    value: correoRecuperado,
    onChange: function onChange(e) {
      return setCorreoRecuperado(e.target.value);
    },
    type: "email",
    className: classes.campoDeTexto
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 6,
    className: classes.gridDelBoton
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    color: "primary",
    type: "submit",
    size: "small",
    className: classes.botonRecuperar
  }, Object(_js_Language__WEBPACK_IMPORTED_MODULE_5__["ingresar"])(lang)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(modalRecuperacion)(ModalRecuperacion));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9EaWNjaW9uYXJpby9Mb2dpbi9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRGljY2lvbmFyaW8vTG9naW4vTW9kYWxSZWN1cGVyYWNpb24uanMiXSwibmFtZXMiOlsic3R5bGVzRm9yIiwiVGV4dEZpZWxkMSIsImp1c3RpZnkiLCJ3aWR0aCIsIlRleHRGaWVsZDIiLCJncmlkc0YiLCJtYXJnaW4iLCJkaXZEZWxGb3JtIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJMb2dpbkZvcm0iLCJwcm9wcyIsImNsYXNzZXMiLCJoaXN0b3J5Iiwic2V0TG9naW4iLCJnbG9iYWwiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJzZXNpb25TdG9yZSIsImRpc3BhdGNoIiwic3RhdGUiLCJsYW5nIiwibG9hZGluZyIsInVzZVN0YXRlIiwiY29ycmVvIiwic2V0Q29ycmVvIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJlY3VwZXJhckNvbnRyYSIsInNldFJlY3VwZXJhckNvbnRyYSIsIm9uRm9ybVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwic2VydmljZSIsInBhcmFtcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VySWQiLCJwYXlsb2FkIiwib3BlbiIsInZhcmlhbnQiLCJtZXNzYWdlIiwiY29ycmVvSW52YWxpZG8iLCJsb2dpblNlcnZpY2UiLCJkYXRhIiwiZXJyb3IiLCJudWV2YVNlc2lvbiIsInVzdWFyaW8iLCJwdXNoIiwiaGFuZGxlQ2xpY2tNb2RhbCIsImluaWNpbyIsIm1hcmdpblRvcCIsImVtYWlsIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29udHJhIiwiaW5ncmVzYXIiLCJvbHZpZG9EZUNvbnRyYSIsImFxdWkiLCJyZWdpc3RyYXJzZSIsIndpdGhTdHlsZXMiLCJtb2RhbFJlY3VwZXJhY2lvbiIsIm1vZGFsaW5SIiwibWF4SGVpZ2h0IiwibGVmdCIsInRvcCIsInBvc2l0aW9uIiwicGFkZGluZyIsImNhbXBvRGVUZXh0byIsImJvdG9uQ2xlYXIiLCJib3R0b20iLCJzaXplIiwiYm90b25SZWN1cGVyYXIiLCJncmlkRGVsQm90b24iLCJ0ZXh0QWxpZ24iLCJNb2RhbFJlY3VwZXJhY2lvbiIsImNvcnJlb1JlY3VwZXJhZG8iLCJzZXRDb3JyZW9SZWN1cGVyYWRvIiwib25Gb3JtU3VibWl0MSIsImVuY29uZGluZyIsIndpbmRvdyIsImJ0b2EiLCJzdGF0dXMiLCJleGl0b0JvZHkiLCJjb3JyZW9Ob0VuY29udHJhZG8iLCJoYW5kbGVDbG9zZSIsIm1vZGFsUmVjdXBlcmFjaW9uQ29udHJhIiwibW9kYWxJbmdyZXNhckNvcnJlbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQTtBQUVBO0FBV0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxZQUFVLEVBQUU7QUFDVkMsV0FBTyxFQUFFLFFBREM7QUFFVkMsU0FBSyxFQUFFO0FBRkcsR0FESTtBQUtoQkMsWUFBVSxFQUFFO0FBQ1ZGLFdBQU8sRUFBRSxRQURDO0FBRVZDLFNBQUssRUFBRTtBQUZHLEdBTEk7QUFTaEJFLFFBQU0sRUFBRTtBQUNOQyxVQUFNLEVBQUU7QUFERixHQVRRO0FBWWhCQyxZQUFVLEVBQUU7QUFDVkMsaUJBQWEsRUFBRSxNQURMO0FBRVZDLGNBQVUsRUFBRTtBQUZGO0FBWkksQ0FBbEI7O0FBa0JBLFNBQVNDLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUEsTUFDaEJDLE9BRGdCLEdBQ2VELEtBRGYsQ0FDaEJDLE9BRGdCO0FBQUEsTUFDUEMsT0FETyxHQUNlRixLQURmLENBQ1BFLE9BRE87QUFBQSxNQUNFQyxRQURGLEdBQ2VILEtBRGYsQ0FDRUcsUUFERjtBQUV4QixNQUFNQyxNQUFNLEdBQUdDLDRDQUFLLENBQUNDLFVBQU4sQ0FBaUJDLCtEQUFqQixDQUFmO0FBRndCLE1BR2hCQyxRQUhnQixHQUdJ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RUUsTUFBRSxFQUFDLDJCQUZMO0FBR0UsVUFBTSxFQUFDLFFBSFQ7QUFJRSxTQUFLLEVBQUV5RCxnQkFKVDtBQUtFLFlBQVEsRUFBRSxrQkFBQ3hCLENBQUQ7QUFBQSxhQUFPeUIsbUJBQW1CLENBQUN6QixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUExQjtBQUFBLEtBTFo7QUFNRSxRQUFJLEVBQUMsT0FOUDtBQU9FLGFBQVMsRUFBRTVDLE9BQU8sQ0FBQzBEO0FBUHJCLElBSEYsQ0FmRixlQTRCRSwyREFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxDQUFmO0FBQWtCLGFBQVMsRUFBRTFELE9BQU8sQ0FBQytEO0FBQXJDLGtCQUNFLDJEQUFDLHdEQUFEO0FBQ0UsV0FBTyxFQUFDLFdBRFY7QUFFRSxTQUFLLEVBQUMsU0FGUjtBQUdFLFFBQUksRUFBQyxRQUhQO0FBSUUsUUFBSSxFQUFDLE9BSlA7QUFLRSxhQUFTLEVBQUUvRCxPQUFPLENBQUM4RDtBQUxyQixLQU9HaEIsNkRBQVEsQ0FBQ3JDLElBQUQsQ0FQWCxDQURGLENBNUJGLENBREYsQ0FERixDQU5GLENBREY7QUFxREQsQ0E1RkQ7O0FBOEZleUMscUlBQVUsQ0FBQ0MsaUJBQUQsQ0FBVixDQUE4QmMsaUJBQTlCLENBQWYsRSIsImZpbGUiOiIwLjRhMjc3ZDlkYWYyZGQ2Yjk3YjZmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgVGV4dEZpZWxkLFxuICBHcmlkLFxuICBUeXBvZ3JhcGh5LFxuICBCdXR0b24sXG4gIEJvdHRvbU5hdmlnYXRpb24sXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5cbmltcG9ydCB7XG4gIGluaWNpbyxcbiAgZW1haWwsXG4gIGNvbnRyYSxcbiAgaW5ncmVzYXIsXG4gIG9sdmlkb0RlQ29udHJhLFxuICByZWdpc3RyYXJzZSxcbiAgYXF1aSxcbiAgY29ycmVvSW52YWxpZG8sXG59IGZyb20gXCIuLi8uLi8uLi9qcy9MYW5ndWFnZVwiO1xuXG5pbXBvcnQgTW9kYWxSZWN1cGVyYWNpb24gZnJvbSBcIi4vTW9kYWxSZWN1cGVyYWNpb25cIjtcbmltcG9ydCB7IGxvZ2luU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9qcy93ZWJTZXJ2aWNlc1wiO1xuXG5pbXBvcnQgeyBzZXNpb25TdG9yZSB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZXMvc2VzaW9uU3RvcmVcIjtcblxuY29uc3Qgc3R5bGVzRm9yID0ge1xuICBUZXh0RmllbGQxOiB7XG4gICAganVzdGlmeTogXCJjZW50ZXJcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gIH0sXG4gIFRleHRGaWVsZDI6IHtcbiAgICBqdXN0aWZ5OiBcImNlbnRlclwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbiAgZ3JpZHNGOiB7XG4gICAgbWFyZ2luOiBcIjcuNXZoIDIuNXZ3XCIsXG4gIH0sXG4gIGRpdkRlbEZvcm06IHtcbiAgICBwYWRkaW5nQm90dG9tOiBcIjE1dmhcIixcbiAgICBwYWRkaW5nVG9wOiBcIjcuNXZoXCIsXG4gIH0sXG59O1xuXG5mdW5jdGlvbiBMb2dpbkZvcm0ocHJvcHMpIHtcbiAgY29uc3QgeyBjbGFzc2VzLCBoaXN0b3J5LCBzZXRMb2dpbiB9ID0gcHJvcHM7XG4gIGNvbnN0IGdsb2JhbCA9IFJlYWN0LnVzZUNvbnRleHQoc2VzaW9uU3RvcmUpO1xuICBjb25zdCB7IGRpc3BhdGNoLCBzdGF0ZSB9ID0gZ2xvYmFsO1xuICBjb25zdCB7IGxhbmcsIGxvYWRpbmcgfSA9IHN0YXRlO1xuXG4gIGNvbnN0IFtjb3JyZW8sIHNldENvcnJlb10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JlY3VwZXJhckNvbnRyYSwgc2V0UmVjdXBlcmFyQ29udHJhXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkZvcm1TdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTVEFSVF9MT0FESU5HXCIgfSk7XG5cbiAgICB2YXIgc2VydmljZSA9IFwiL2xvZ2luL3VzdWFyaW9cIjtcbiAgICB2YXIgcGFyYW1zID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdXNlcklkOiBjb3JyZW8sXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgfSk7XG4gICAgaWYgKGNvcnJlbyA9PSBcIlwiIHx8IHBhc3N3b3JkID09IFwiXCIpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogXCJTRVRfU05BQ0tCQVJcIixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgdmFyaWFudDogXCJlcnJvclwiLFxuICAgICAgICAgIG1lc3NhZ2U6IGNvcnJlb0ludmFsaWRvKGxhbmcpLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU1RPUF9MT0FESU5HXCIgfSk7XG4gICAgfSBlbHNlIGlmIChjb3JyZW8gIT0gXCJcIiAmJiBwYXNzd29yZCAhPSBcIlwiKSB7XG4gICAgICBsb2dpblNlcnZpY2Uoc2VydmljZSwgXCJQT1NUXCIsIHBhcmFtcywgKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEuZGF0YS5lcnJvcikge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IFwiU0VUX1NOQUNLQkFSXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICAgIHZhcmlhbnQ6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogY29ycmVvSW52YWxpZG8obGFuZyksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBudWV2YVNlc2lvbiA9IHtcbiAgICAgICAgICAgIHVzdWFyaW86IGNvcnJlbyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJJTklDSUFSX1NFU0lPTlwiLFxuICAgICAgICAgICAgcGF5bG9hZDogbnVldmFTZXNpb24sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBoaXN0b3J5LnB1c2goXCIvaHVzc2VybFwiKTtcbiAgICAgICAgfVxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU1RPUF9MT0FESU5HXCIgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tNb2RhbCgpIHtcbiAgICBzZXRSZWN1cGVyYXJDb250cmEodHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRpdkRlbEZvcm19PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgYWxpZ249XCJjZW50ZXJcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgIHtpbmljaW8obGFuZyl9XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25Gb3JtU3VibWl0fSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNSVcIiB9fT5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBjbGFzc05hbWU9XCJncmlkc0ZcIlxuICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbGc9ezd9IGNsYXNzTmFtZT1cImdyaWRzXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPXtlbWFpbChsYW5nKX1cbiAgICAgICAgICAgICAgaWQ9XCJjdXN0b20tY3NzLW91dGxpbmVkLWlucHV0XCJcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvcnJlb31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb3JyZW8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuVGV4dEZpZWxkMX1cbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbGc9ezd9IGNsYXNzTmFtZT1cImdyaWRzXCI+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPXtjb250cmEobGFuZyl9XG4gICAgICAgICAgICAgIGlkPXtcImN1c3RvbS1jc3Mtb3V0bGluZWQtaW5wdXRcIiArIDF9XG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5UZXh0RmllbGQyfVxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBsZz17N30gY2xhc3NOYW1lPVwiZ3JpZHNcIj5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiZmxleC1lbmRcIiBjbGFzc05hbWU9XCJncmlkc1wiPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgIHtpbmdyZXNhcihsYW5nKX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9IGxnPXs3fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgICAgICB7b2x2aWRvRGVDb250cmEobGFuZyl9e1wiIFwifVxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVDbGlja01vZGFsfSBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICAgICAgICAgIHthcXVpKGxhbmcpfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbGc9ezd9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgICAgIHtyZWdpc3RyYXJzZShsYW5nKX1cbiAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gc2V0TG9naW4oZmFsc2UpfSBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICB7YXF1aShsYW5nKX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9mb3JtPlxuICAgICAgPE1vZGFsUmVjdXBlcmFjaW9uXG4gICAgICAgIHJlY3VwZXJhckNvbnRyYT17cmVjdXBlcmFyQ29udHJhfVxuICAgICAgICBzZXRSZWN1cGVyYXJDb250cmE9e3NldFJlY3VwZXJhckNvbnRyYX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzRm9yKShMb2dpbkZvcm0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBNb2RhbCxcbiAgVHlwb2dyYXBoeSxcbiAgUGFwZXIsXG4gIERpdmlkZXIsXG4gIFRleHRGaWVsZCxcbiAgQnV0dG9uLFxuICBHcmlkLFxuICBJY29uQnV0dG9uLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuaW1wb3J0IENsZWFySWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NsZWFyXCI7XG5cbmltcG9ydCB7XG4gIG1vZGFsUmVjdXBlcmFjaW9uQ29udHJhLFxuICBtb2RhbEluZ3Jlc2FyQ29ycmVvLFxuICBlbWFpbCxcbiAgaW5ncmVzYXIsXG4gIGV4aXRvQm9keSxcbiAgY29ycmVvTm9FbmNvbnRyYWRvLFxufSBmcm9tIFwiLi4vLi4vLi4vanMvTGFuZ3VhZ2VcIjtcblxuaW1wb3J0IHsgc2VzaW9uU3RvcmUgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmVzL3Nlc2lvblN0b3JlXCI7XG5pbXBvcnQgeyBsb2dpblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vanMvd2ViU2VydmljZXNcIjtcblxuY29uc3QgbW9kYWxSZWN1cGVyYWNpb24gPSB7XG4gIG1vZGFsaW5SOiB7XG4gICAgd2lkdGg6IFwiNDAlXCIsXG4gICAgbWF4SGVpZ2h0OiBcIjc1dmhcIixcbiAgICBsZWZ0OiBcIjI1dndcIixcbiAgICB0b3A6IFwiMjUuNXZoXCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICBwYWRkaW5nOiBcIjMwcHggMzBweFwiLFxuICB9LFxuICBjYW1wb0RlVGV4dG86IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gIH0sXG4gIGJvdG9uQ2xlYXI6IHtcbiAgICBsZWZ0OiBcIjE4cHhcIixcbiAgICBib3R0b206IFwiMTVweFwiLFxuICAgIHNpemU6IFwic21hbGxcIixcbiAgfSxcbiAgYm90b25SZWN1cGVyYXI6IHtcbiAgICB0b3A6IFwiMTJweFwiLFxuICB9LFxuICBncmlkRGVsQm90b246IHtcbiAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcbiAgfSxcbn07XG5cbmNvbnN0IE1vZGFsUmVjdXBlcmFjaW9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGdsb2JhbCA9IHVzZUNvbnRleHQoc2VzaW9uU3RvcmUpO1xuICBjb25zdCB7IHN0YXRlIH0gPSBnbG9iYWw7XG4gIGNvbnN0IHsgbGFuZyB9ID0gc3RhdGU7XG4gIGNvbnN0IHsgY2xhc3Nlcywgc2V0UmVjdXBlcmFyQ29udHJhLCByZWN1cGVyYXJDb250cmEgfSA9IHByb3BzO1xuICBjb25zdCBbY29ycmVvUmVjdXBlcmFkbywgc2V0Q29ycmVvUmVjdXBlcmFkb10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBvbkZvcm1TdWJtaXQxID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU1RBUlRfTE9BRElOR1wiIH0pO1xuICAgIHZhciBlbWFpbCA9IGNvcnJlb1JlY3VwZXJhZG87XG4gICAgdmFyIHNlcnZpY2UgPSBcIi9sb2dpbi9yZWNvdmVyUGFzc3dvcmQvZXM/ZW1haWw9XCIgKyBlbWFpbDtcbiAgICB2YXIgZW5jb25kaW5nID0gd2luZG93LmJ0b2EoZW1haWwpO1xuICAgIGxvZ2luU2VydmljZShzZXJ2aWNlLCBcIkdFVFwiLCB7fSwgKGRhdGEpID0+IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTVE9QX0xPQURJTkdcIiB9KTtcbiAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFwiU0VUX1NOQUNLQkFSXCIsXG4gICAgICAgICAgcGF5bG9hZDogeyBvcGVuOiB0cnVlLCB2YXJpYW50OiBcInN1Y2Nlc3NcIiwgbWVzc2FnZTogZXhpdG9Cb2R5KGxhbmcpIH0sXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfU0VTSU9OJywgcGF5bG9hZDogeyBcInVzZXJcIjogbnVldm9Db3JyZW8sIFwicGFzc3dvcmRcIjogbnVldm9QYXNzd29yZCB9IH0pXG4gICAgICAgIC8vIHNldFN0b3JlKGRhdGEucmVzcG9uc2UsIGVtYWlsLmNvcnJlbylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBcIlNFVF9TTkFDS0JBUlwiLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICB2YXJpYW50OiBcImVycm9yXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBjb3JyZW9Ob0VuY29udHJhZG8obGFuZyksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xvc2UoKSB7XG4gICAgc2V0UmVjdXBlcmFyQ29udHJhKGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtbW9kYWwtdGl0bGVcIlxuICAgICAgYXJpYS1kZXNjcmliZWRieT1cInNpbXBsZS1tb2RhbC1kZXNjcmlwdGlvblwiXG4gICAgICBvcGVuPXtyZWN1cGVyYXJDb250cmF9XG4gICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICA+XG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsaW5SfT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uRm9ybVN1Ym1pdDF9PlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgICAgICAge21vZGFsUmVjdXBlcmFjaW9uQ29udHJhKGxhbmcpfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT5cbiAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvdG9uQ2xlYXJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2xlYXJJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgIDxEaXZpZGVyIGNsYXNzTmFtZT1cImRpdmlzb3JcIiAvPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57bW9kYWxJbmdyZXNhckNvcnJlbyhsYW5nKX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD17ZW1haWwobGFuZyl9XG4gICAgICAgICAgICAgICAgaWQ9XCJjdXN0b20tY3NzLW91dGxpbmVkLWlucHV0XCJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb3JyZW9SZWN1cGVyYWRvfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29ycmVvUmVjdXBlcmFkbyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2FtcG9EZVRleHRvfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWREZWxCb3Rvbn0+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvdG9uUmVjdXBlcmFyfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2luZ3Jlc2FyKGxhbmcpfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvUGFwZXI+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMobW9kYWxSZWN1cGVyYWNpb24pKE1vZGFsUmVjdXBlcmFjaW9uKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=