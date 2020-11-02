import React from 'react';

const letraStore = React.createContext(null);
const { Provider } = letraStore;

const letraProvider = ({ children }) => {
  const [letra, setLetra] = React.useState("A");
  const [letraFlag, setLetraFlag] = React.useState(false);

  return (
    <Provider
      value={{ letra, setLetra, letraFlag, setLetraFlag}}>
      {children}
    </Provider>
  );
};

export { letraStore, letraProvider };