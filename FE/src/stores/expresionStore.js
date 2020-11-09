import React, { useReducer } from 'react';

const expresionesStore = React.createContext(null);
const { Provider } = expresionesStore;

const initialState = {
  expresiones: []
}

const sesionReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_SNACKBAR":
      return { ...state, snackbar: payload };
    default:
      break;
  }

}

const ExpresionesProvider = ({ children }) => {
  const [state, attend] = useReducer(sesionReducer, initialState);

  return <Provider value={{ state, attend }}>{children}</Provider>;
};

export { expresionesStore, ExpresionesProvider };
