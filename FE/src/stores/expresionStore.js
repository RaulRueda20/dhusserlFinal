import React from "react";

const expresionStore = React.createContext(null);
const { Provider } = expresionStore;

const expresionProvider = ({ children }) => {
  const [expresiones, setExpresiones] = React.useState([]);

  return (
    <Provider value={{ expresiones, setExpresiones }}>{children}</Provider>
  );
};

export { expresionStore, expresionProvider };
