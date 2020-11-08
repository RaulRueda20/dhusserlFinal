//React
import React from "react";

//Elements
import { Switch, Redirect, Link, Route } from "react-router-dom";

//Components
import HeaderMain from "./HeaderMain";
import Expresion from "./Expresiones/Expresion";
import Pasaje from "./Pasajes/Pasaje";
import ModuloBusquedas from "./Busquedas/moduloBusquedas";
import Acercade from "./AcercaDe/Acercade";
import Guia from "./Guia/Guia";

//Other req
import { sesionStore } from "../../../stores/sesionStore";
import { letraProvider as LetraProvider } from "../../../stores/letraStore";
import { expresionProvider as ExpresionProvider } from "../../../stores/expresionStore";

const Subvistas = ({ match, history }) => {
  const global = React.useContext(sesionStore);
  const { state } = global
  const { sesion } = state

  React.useEffect(() => {
    if (sesion == null) history.push("/diccionario/login");
  }, [true]);

  return (
    <div>
      <HeaderMain match={match} history={history} />
      <ExpresionProvider>
        <LetraProvider>
          <Switch>
            <Route
              path={`${match.url}/expresiones`}
              render={(props) => <Expresion {...props} />}
            />
            <Route
              path={`${match.url}/pasaje/:expresion/:id`}
              render={(props) => <Pasaje {...props} />}
            />
            <Route
              path={`${match.url}/pasaje/:expresion`}
              render={(props) => <Pasaje {...props} />}
            />
            <Route
              path={`${match.url}/busquedas`}
              render={(props) => <ModuloBusquedas {...props} />}
            />
            -
            <Route
              path={`${match.url}/acercade`}
              render={(props) => <Acercade {...props} />}
            />
            <Route
              path={`${match.url}/guia`}
              render={(props) => <Guia {...props} />}
            />
            <Route path={`${match.url}/`}>
              <Redirect to={`${match.url}/expresiones`} />
            </Route>
          </Switch>
        </LetraProvider>
      </ExpresionProvider>
    </div>
  );
}

export default Subvistas
