import React from 'react';

const expresionStore = React.createContext(null);
const { Provider } = expresionStore;

const letraProvider = ({ children }) => {
  const [expresiones, setExpresiones] = React.useState([]);
  const [letraFlag, setLetraFlag] = React.useState(false);

  return (
    <Provider
      value={{ letra, setLetra, letraFlag, setLetraFlag}}>
      {children}
    </Provider>
  );
};

export { letraStore, letraProvider };