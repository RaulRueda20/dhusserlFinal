//React
import React, { useEffect, Fragment } from "react";
import { Switch, Redirect, Route } from "react-router-dom";

//Components
import HeaderMain from "./HeaderMain";
import Expresiones from "./Expresiones/Expresiones";
import Pasajes from "./Pasajes/Pasajes";
import Acercade from "./AcercaDe/Acercade";
import Manual from "./Manual/Manual";
import Usuarios from "./Usuarios/Usuarios";

//Other req
import * as localStore from "../../../js/localStore";

const Subvistas = (props) => {
  const { match } = props;
  const { url } = match;
  useEffect(() => {
    if (!localStore.getObjects("admin_sesion"))
      props.history.push("/administrador/login");
  }, [true]);

  return (
    <Fragment>
      <HeaderMain match={props.match} />
      <Switch>
        <Route path={`${url}/husserl/alfabeto`} component={Expresiones} />
        <Route path={`${url}/husserl/pasajes`} component={Pasajes} />
        <Route path={`${url}/husserl/acercade`} component={Acercade} />
        <Route path={`${url}/husserl/manual`} component={Manual} />
        <Route path={`${url}/husserl/usuarios`} component={Usuarios} />
        <Route exact path={`${url}/husserl/`}>
          <Redirect to={`${url}/husserl/alfabeto`} component={Expresiones} />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default Subvistas;
