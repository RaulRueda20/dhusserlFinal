import React, { useReducer } from "react";

import * as localStore from "../js/localStore";

const adminStore = React.createContext(null);
const { Provider } = adminStore;

const emptyPasaje = {
  clave: "",
  ref_def_de: "",
  ref_def_es: "",
  ref_id: "",
  ref_libro_de: "",
  ref_libro_es: "",
};

const initialState = {
  pasajes: [],
  pasajeSeleccionado: "",
  pasaje: emptyPasaje,
  original: {},
  traduccion: {},
  claveSeleccionada: "",
  refIdSeleccionado: "",
  reload: false,
};

const sesionReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_PASAJES":
      return { ...state, pasajes: payload };
    case "SET_PASAJE_SELECCIONADO":
      return { ...state, pasajeSeleccionado: payload };
    case "SET_PASAJE":
      return { ...state, pasaje: payload };
    case "SET_PASAJE_TRADUCCION":
      return { ...state, traduccion: payload };
    case "SET_PASAJE_ORIGINAL":
      return { ...state, original: payload };
    case "RESET_PASAJE":
      return { ...state, pasaje: emptyPasaje };
    case "SET_CLAVE":
      return { ...state, claveSeleccionada: payload };
    case "SET_REFID":
      return { ...state, refIdSeleccionado: payload };
    case "RELOAD":
      return { ...state, reload: !state.reload };
    default:
      break;
  }
};

const AdminProvider = ({ children }) => {
  const [store, action] = useReducer(sesionReducer, initialState);
  return <Provider value={{ store, action }}>{children}</Provider>;
};

export { adminStore, AdminProvider };
