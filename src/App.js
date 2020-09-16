//React
import React from 'react';

//Elements
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

//Components
import RutaAdministrador from './Components/Administrador/RutaAdministrador';
import RutaDiccionario from './Components/Diccionario/RutaDiccionario';
import { SesionProvider } from './sesionStore.js';

function App() {
  const [lang, setLang]=React.useState("es");

  return (
    <Router>
      <SesionProvider>
        <Switch>
          <Route path="/diccionario" render={(props)=><RutaDiccionario {...props} lang={lang} setLang={setLang}/>}/>
          <Route path="/administrador" render={(props)=><RutaAdministrador {...props} lang={lang} setLang={setLang}/>}/>
          <Route path={`/`}>
            <Redirect to={`diccionario`} />
          </Route>
        </Switch>
      </SesionProvider>
    </Router>
  );
}

export default App;
