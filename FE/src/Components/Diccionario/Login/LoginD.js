//React
import React, { Suspense, lazy, useEffect, useState, Fragment, useContext }  from "react";

//Elements
import { withStyles } from "@material-ui/styles";

//Components
import { LinearProgress as Loading } from "@material-ui/core";
const LoginForm = lazy(()=> import('./LoginForm'))
const RegistroForm = lazy(()=> import('./RegistroForm'))
const Header = lazy(()=> import('./Header'))
const Footer = lazy(()=> import('./Footer'))

//Other req
import fondo from "../../../Imagenes/fondo.png";
import { sesionStore } from "../../../stores/sesionStore";

const loGin = {
  back: {
    backgroundImage: `url(${fondo})`,
    position: "fixed",
    zIndex: -1,
    height: "100vh",
    width: "100vw",
    opacity: 0.45,
    top: 0,
  },
};

const LoginD = (props) => {
  const [login, setLogin] = useState(true);
  const { classes, history, match } = props;
  const global = useContext(sesionStore);
  const {state} = global
  const {sesion} = state

  useEffect(() => {
    if (sesion != null) {
      history.push("/diccionario/husserl");
    }
  }, [sesion]);

  return (
    <Fragment>
      <div className={classes.back} />
      <Suspense fallback={<Loading />}>
        <Header />
      </Suspense>
      
      {login ? (
        <Suspense fallback={<Loading />}>
          <LoginForm
          history={history}
          match={match}
          setLogin={setLogin}
        />
        </Suspense>
        
      ) : (
        <Suspense fallback={<Loading />}>
          <RegistroForm
          history={history}
          match={match}
          setLogin={setLogin}
        />
        </Suspense>
        
      )}
      <br />
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </Fragment>
  );
}

export default withStyles(loGin)(LoginD);
