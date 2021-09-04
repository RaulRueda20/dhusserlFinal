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
    case "RESET_PASAJE":
      return { ...state, pasaje: emptyPasaje };
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
