import React, { useReducer } from 'react';

const busquedaStore = React.createContext(null);
const { Provider } = busquedaStore;

const initialState = {
  expresionesEncontradas: [],
  posicionPasaje: 0,
  idPasaje: 0,
  abierto: true,
  busqueda: [],
  tipoBusqueda: "Expresion",
  tipoBusquedaRealizada: ""
}

const sesionReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_EXPRESIONES_ENCONTRADAS":
      return { ...state, expresionesEncontradas: payload };
    case "SET_POSICION_PASAJE":
      return { ...state, posicionPasaje: payload };
    case "SET_ID_PASAJE":
      return { ...state, idPasaje: payload };
    case "SET_ABIERTO":
      return { ...state, abierto: payload };
    case "SET_BUSQUEDA":
      return { ...state, busqueda: payload };
    case "SET_TIPO_BUSQUEDA":
      return { ...state, tipoBusqueda: payload };
    case "SET_TIPO_BUSQUEDA_REALIZADA":
      return { ...state, tipoBusquedaRealizada: payload };
    default:
      break;
  }

}

const BusquedasProvider = ({ children }) => {
  const [busquedaState, attend] = useReducer(sesionReducer, initialState);

  return <Provider value={{ busquedaState, attend }}>{children}</Provider>;
};

export { busquedaStore, BusquedasProvider };
