//React
import React from 'react';
import {Switch, Redirect, Link, Route} from 'react-router-dom';

//Components
import HeaderMain from './HeaderMain';
import Expresiones from './Expresiones/Expresiones';
import Pasajes from './Pasajes/Pasajes';
import Acercade from './AcercaDe/Acercade';
import Manual from './Manual/Manual';
import Usuarios from './Usuarios/Usuarios';

//Other req
import * as localStore from '../../../js/localStore';

export default function Subvistas(props){
  
  
    React.useEffect(()=>{
      console.log(localStore.getObjects("admin_sesion"))
      if(!localStore.getObjects("admin_sesion")) props.history.push("/administrador/login")
  }, [true])

  return(
    <div>
      <HeaderMain match={props.match}/>
      <Switch>
        <Route path={`${props.match.url}/husserl/alfabeto`} component={Expresiones}/>
        <Route path={`${props.match.url}/husserl/pasajes`} component={Pasajes}/>
        <Route path={`${props.match.url}/husserl/acercade`} component={Acercade}/>
        <Route path={`${props.match.url}/husserl/manual`} component={Manual}/>
        <Route path={`${props.match.url}/husserl/usuarios`} component={Usuarios}/>
        <Route exact path={`${props.match.url}/husserl/`}>
          <Redirect to={`${props.match.url}/husserl/alfabeto`} component={Expresiones}/>
        </Route>
      </Switch>
    </div>
  )
}
