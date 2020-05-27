//React
import React from 'react';

//Elements
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

//Components
import RutaAdministrador from './Components/Administrador/RutaAdministrador';
import RutaDiccionario from './Components/Diccionario/RutaDiccionario';

function App() {
  const [lang, setLang]=React.useState("es");

  return (
    <Router>
      <Switch>
        <Route path="/diccionario" render={(props)=><RutaDiccionario {...props} lang={lang} setLang={setLang}/>}/>
        <Route path="/administrador" render={(props)=><RutaAdministrador {...props} lang={lang} setLang={setLang}/>}/>
        <Route path={`/`}>
          <Redirect to={`diccionario`} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
