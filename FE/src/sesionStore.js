import React from 'react';

const sesionStore = React.createContext(null);
const { Provider } = sesionStore;

const SesionProvider = ({ children }) => {
  const [sesion, setSesion] = React.useState(null);
  const [ultimasVisitadas, setUltimasVisitadas] = React.useState([]);

  return (
    <Provider
      value={{ sesion, setSesion, ultimasVisitadas, setUltimasVisitadas}}>
      {children}
    </Provider>
  );
};

export { sesionStore, SesionProvider };
