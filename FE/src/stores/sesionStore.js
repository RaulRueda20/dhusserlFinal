import React, { useReducer } from 'react';

import * as localStore from "../js/localStore";

const sesionStore = React.createContext(null);
const { Provider } = sesionStore;

const initialState = {
  sesion: null,
  ultimasVisitadas: [],
  ultimaVisitada: [],
  lang: 'es',
  langLista: 'al',
  letra: 'A',
  loading: false,
  alert: { open: false, mensaje: "", tituloAlerta: "" },
  snackbar: {
    open: false,
    variant: "",
    message: "",
  }
}

const sesionReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "INICIAR_SESION":
      const { usuario, password } = payload;
      var newSession = { user: usuario, password: password };
      newSession["ultimasVisitadas"] = [];
      newSession["ultimaVisitada"] = "alfabeto";
      localStore.setObjects("ultimasVisitadas", [])
      localStore.setObjects("sesion", newSession);
      return { ...state, sesion: payload };
    case "SET_SESION":
      return { ...state, sesion: payload };
    case "SET_LANG":
      return { ...state, lang: payload };
    case "SET_LANGLISTA":
      return { ...state, langLista: payload };
    case "SET_ULTIMAS_VISITADAS":
      localStore.setObjects("ultimasVisitadas", payload)
      return { ...state, ultimasVisitadas: payload };
    case "START_LOADING":
      return { ...state, loading: true };
    case "STOP_LOADING":
      return { ...state, loading: false };
    case "SET_ALERT":
      return { ...state, alert: payload };
    case "SET_SNACKBAR":
      return { ...state, snackbar: payload };
    default:
      break;
  }

}

const SesionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sesionReducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { sesionStore, SesionProvider };
