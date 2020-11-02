//React
import React from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

//Components
import RutaAdministrador from './Components/Administrador/RutaAdministrador';
import RutaDiccionario from './Components/Diccionario/RutaDiccionario';

//Other req
import { sesionStore } from './stores/sesionStore';
import { langProvider as LangProvider} from './stores/languageStore';
import * as localStore from './js/localStore';

function App() {
  const global = React.useContext(sesionStore);

  React.useEffect(()=>{
    if(global.sesion==null && localStore.getObjects("sesion")){
      console.log(localStore.getObjects("sesion"))
      var sesionBuscador = localStore.getObjects("sesion")
      global.setSesion(sesionBuscador)
      console.log(" global.sesion", global.sesion)
    }
    if(global.ultimasVisitadas.length==0 && localStore.getObjects("referenciasConsultadas")){
      global.setUltimasVisitadas(localStore.getObjects("referenciasConsultadas"))
    }
  }, [true])

  return (
    <LangProvider>
      <Router>
        <Switch>
          <Route path="/diccionario" render={(props)=><RutaDiccionario {...props}/>}/>
          <Route path="/administrador" render={(props)=><RutaAdministrador {...props}/>}/>
          <Route path={`/`}>
            <Redirect to={`diccionario`} />
          </Route>
        </Switch>
      </Router>
    </LangProvider>
  );
}

export default App;
