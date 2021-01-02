//React
import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

//Components
import RutaAdministrador from "./Components/Administrador/RutaAdministrador";
import RutaDiccionario from "./Components/Diccionario/RutaDiccionario";
import Alerts from "./Components/Diccionario/Alerts";
import Snackbars from "./Components/Diccionario/Login/Snackbars";
import { LinearProgress } from "@material-ui/core";

//Other req
import { sesionStore } from "./stores/sesionStore";
import { langProvider as LangProvider } from "./stores/languageStore";
import * as localStore from "./js/localStore";

const App = () => {
  const global = useContext(sesionStore);
  const { state, dispatch } = global;
  const { sesion, ultimasVisitadas, loading, alert, snackbar } = state;
  const { mensaje, open, tituloAlerta } = alert;
  // const [Snack, setSnackbar] = useState({
  //   open: false,
  //   variant: snackbar.variant,
  //   message: "",
  // });

  const handleAlertClose = () => {
    setMensajeDeAlerta({
      open: false,
      mensaje: mensaje,
      tituloAlerta: tituloAlerta,
    });
  };

  const handleClose = (event, reason) => {
    // setSnackbar({ open: false, variant: snackbar.variant, message: "" });
    dispatch({
      type: "SET_SNACKBAR",
      payload: {
        open: false,
        variant: "",
        message: "",
      },
    });
  };

  useEffect(() => {
    console.log("open", open);
    if (sesion == null && localStore.getObjects("sesion")) {
      console.log("CASO A");
      var sesionBuscador = {
        usuario: localStore.getObjects("sesion").user,
        password: localStore.getObjects("sesion").user,
      };
      dispatch({
        type: "SET_SESION",
        payload: sesionBuscador,
      });
      if (
        ultimasVisitadas.length == 0 &&
        localStore.getObjects("referenciasConsultadas")
      ) {
        dispatch({
          type: "SET_ULTIMAS_VISITADAS",
          payload: localStore.getObjects("referenciasConsultadas"),
        });
      }
    }
  }, [true]);

  return (
    <LangProvider>
      <LinearProgress
        className={classNames([{ hidden: !loading }, "loadingBar"])}
      />
      <Alerts
        mensaje={mensaje}
        open={open}
        handleClose={handleAlertClose}
        titulo={tituloAlerta}
      />
      {/* <Snackbars /> */}
      <Router>
        <Switch>
          <Route
            path="/diccionario"
            render={(props) => <RutaDiccionario {...props} />}
          />
          <Route
            path="/administrador"
            render={(props) => <RutaAdministrador {...props} />}
          />
          <Route path={`/`}>
            <Redirect to={`diccionario`} />
          </Route>
        </Switch>
      </Router>
    </LangProvider>
  );
};

export default App;
