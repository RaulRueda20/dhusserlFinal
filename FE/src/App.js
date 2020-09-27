//React
import React from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

//Components
import RutaAdministrador from './Components/Administrador/RutaAdministrador';
import RutaDiccionario from './Components/Diccionario/RutaDiccionario';

//Other req
import { sesionStore } from './sesionStore';
import * as localStore from './js/localStore';

function App() {
  const global = React.useContext(sesionStore);
  const [lang, setLang]=React.useState("es");

  React.useEffect(()=>{
    console.log(localStore.getObjects("sesion"))
    console.log(global)
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
