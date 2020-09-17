import React from 'react';

const sesionStore = React.createContext(null);
const { Provider } = sesionStore;

const SesionProvider = ({ children }) => {
  const [sesion, setSesion] = React.useState(null);

  return (
    <Provider
      value={{ sesion, setSesion}}>
      {children}
    </Provider>
  );
};

export { sesionStore, SesionProvider };
