//React
import React from "react";

//Elements
import { Switch, Route, Redirect } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

//Components
import LoginD from "./Login/LoginD";
import Subvistas from "./dhusserl/Subvistas";
import Aviso_privacidad from "./Aviso_privacidad";
//imort Recuperacion from './Login/Recuperacion'

const theme = createMuiTheme({
  palette: {
    primary: { main: "rgb(126, 46, 56)" },
    secondary: { main: "#daa79f" },
  },
});

theme.typography.h1 = {
  fontSize: "3rem",
  fontFamily: "DHTitle",
  color: "rgba(0,0,0,.9)",
};

theme.typography.h2 = {
  fontSize: "2rem",
  fontFamily: "ROBOTO",
  color: "rgba(0,0,0,.8)",
  fontWeight: "400",
};

theme.typography.h3 = {
  fontSize: "1.5rem",
  fontFamily: "ROBOTO",
  color: "rgba(0,0,0,.8)",
  fontWeight: "300",
};

theme.typography.h4 = {
  fontSize: "1.2rem",
  fontFamily: "ROBOTO",
  color: "rgba(0,0,0,.7)",
  fontWeight: "300",
};

theme.typography.h5 = {
  fontSize: "1rem",
  fontFamily: "ROBOTO",
  fontWeight: "300",
  color: "rgba(0,0,0,.7)",
};

theme.typography.h6 = {
  fontSize: "0.90rem",
  fontFamily: "ROBOTO",
  color: "rgba(0,0,0,.7)",
  fontWeight: "300",
};

theme.typography.caption = {
  position: "relative",
  margin: "16px",
  fontSize: "0.6em",
  fontWeight: "bold",
};

const RutaDiccionario = ({ match }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route
          path={`${match.url}/husserl`}
          render={(props) => <Subvistas {...props} />}
        />
        <Route
          path={`${match.url}/login`}
          render={(props) => <LoginD {...props} />}
        />
        <Route
          path={`${match.url}/Aviso_privacidad`}
          render={(props) => <Aviso_privacidad {...props} />}
        />
        <Route path={`${match.url}/`}>
          <Redirect to={`${match.url}/login`} />
        </Route>
      </Switch>
    </MuiThemeProvider>
  );
};

export default RutaDiccionario;
