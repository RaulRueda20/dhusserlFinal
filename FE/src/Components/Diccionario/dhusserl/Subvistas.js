//React
import React, { useEffect, useContext, useState } from "react";

//Elements
import { Switch, Redirect, Route } from "react-router-dom";

//Components
import HeaderMain from "./HeaderMain";
import Expresion from "./Expresiones/Expresion";
import Pasaje from "./Pasajes/Pasaje";
import ModuloBusquedas from "./Busquedas/moduloBusquedas";
import Acercade from "./AcercaDe/Acercade";
import Guia from "./Guia/Guia";

//Other req
import { sesionStore } from "../../../stores/sesionStore";
import { BusquedasProvider } from "../../../stores/busquedaStore";
import { ExpresionesProvider } from "../../../stores/expresionStore";

const Subvistas = ({ match, history }) => {
  const global = useContext(sesionStore);
  const { state } = global;
  const { sesion } = state;
  const [flagCambio, setFlagCambio] = useState("");

  useEffect(() => {
    if (sesion == null) return history.push("/diccionario/login");
  }, []);

  return (
    <ExpresionesProvider>
      <HeaderMain match={match} history={history} flagCambio={flagCambio} />
      <Switch>
        <Route
          path={`${match.url}/expresiones`}
          render={(props) => (
            <Expresion {...props} setFlagCambio={setFlagCambio} />
          )}
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
          render={(props) => (
            <BusquedasProvider>
              <ModuloBusquedas {...props} setFlagCambio={setFlagCambio} />
            </BusquedasProvider>
          )}
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
    </ExpresionesProvider>
  );
};

export default Subvistas;
