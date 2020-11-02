import React from 'react';

const languageStore = React.createContext(null);
const { Provider } = languageStore;

const langProvider = ({ children }) => {
  const [lang, setLang] = React.useState('es');
  const [langLista, setLangLista] = React.useState('al');

  return (
    <Provider
      value={{ lang, setLang, langLista, setLangLista}}>
      {children}
    </Provider>
  );
};

export { languageStore, langProvider };