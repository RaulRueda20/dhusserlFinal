import React, { useReducer } from "react";

const expresionesStore = React.createContext(null);
const { Provider } = expresionesStore;

const initialState = {
  expresiones: [],
  chunk: [],
  chunkGlobal: [],
  expresionSeleccionada: null,
};

const sesionReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "START_EXPRESIONES":
      const { expresiones, chunk } = payload;
      return { ...state, expresiones, chunk };
    case "SET_CHUNK":
      return { ...state, chunk: payload };
    case "SET_CHUNKGLOBAL":
      return { ...state, chunkGlobal: payload };
    case "SELECT_EXPRESION":
      return { ...state, expresionSeleccionada: payload };
    case "RESET_CHUNK":
      return {
        ...state,
        chunk: state.expresiones.slice(0, 50),
        chunkGlobal: state.expresiones,
      };
    default:
      break;
  }
};

const ExpresionesProvider = ({ children }) => {
  const [store, attend] = useReducer(sesionReducer, initialState);

  return <Provider value={{ store, attend }}>{children}</Provider>;
};

export { expresionesStore, ExpresionesProvider };
