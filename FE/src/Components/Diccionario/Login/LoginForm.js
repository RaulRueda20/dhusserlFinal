import React from "react";
import { TextField, Grid, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import {
  inicio,
  email,
  contra,
  ingresar,
  olvidoDeContra,
  registrarse,
  aqui,
  correoInvalido,
} from "../../../js/Language";

import ModalRecuperacion from "./ModalRecuperacion";
import { loginService } from "../../../js/webServices";

import { sesionStore } from "../../../stores/sesionStore";

const stylesFor = {
  TextField1: {
    justify: "center",
    width: "100%",
  },
  TextField2: {
    justify: "center",
    width: "100%",
  },
  gridsF: {
    margin: "7.5vh 2.5vw",
  },
  divDelForm: {
    paddingBottom: "15vh",
    paddingTop: "7.5vh",
  },
};

function LoginForm(props) {
  const { classes, history, setLogin } = props;
  const global = React.useContext(sesionStore);
  const { dispatch, state } = global;
  const { lang, loading } = state;

  const [correo, setCorreo] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [recuperarContra, setRecuperarContra] = React.useState(false);

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "START_LOADING" });

    var service = "/login/usuario";
    var params = JSON.stringify({ userId: correo, password: password });
    if (correo == "" || password == "") {
      dispatch({
        type: "SET_SNACKBAR",
        payload: {
          open: true,
          variant: "error",
          message: correoInvalido(lang),
        },
      });
      dispatch({ type: "STOP_LOADING" });
    } else if (correo != "" && password != "") {
      loginService(service, "POST", params, (data) => {
        if (data.data.error) {
          dispatch({
            type: "SET_SNACKBAR",
            payload: {
              open: true,
              variant: "error",
              message: correoInvalido(lang),
            },
          });
        } else {
          var nuevaSesion = {
            usuario: correo,
            password: password,
          };

          dispatch({
            type: "INICIAR_SESION",
            payload: nuevaSesion,
          });

          history.push("/husserl");
        }
        dispatch({ type: "STOP_LOADING" });
      });
    }
  };

  function handleClickModal() {
    setRecuperarContra(true);
  }

  return (
    <div className={classes.divDelForm}>
      <Typography variant="h3" align="center" gutterBottom>
        {inicio(lang)}
      </Typography>
      <form onSubmit={onFormSubmit} style={{ marginTop: "5%" }}>
        <Grid
          className="gridsF"
          container
          direction="column"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} sm={8} lg={7} className="grids">
            <TextField
              label={email(lang)}
              id="custom-css-outlined-input"
              margin="normal"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className={classes.TextField1}
              type="email"
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={7} className="grids">
            <TextField
              label={contra(lang)}
              id={"custom-css-outlined-input" + 1}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={classes.TextField2}
              type="password"
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={7} className="grids">
            <Grid container justify="flex-end" className="grids">
              <Grid item>
                <Button variant="contained" color="primary" type="submit">
                  {ingresar(lang)}
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8} lg={7}>
            <Typography variant="h4">
              {olvidoDeContra(lang)}{" "}
              <a onClick={handleClickModal} className="links">
                {aqui(lang)}
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} lg={7}>
            <Typography variant="h4">
              {registrarse(lang)}
              <a onClick={() => setLogin(false)} className="links">
                {" "}
                {aqui(lang)}
              </a>
            </Typography>
          </Grid>
        </Grid>
      </form>
      <ModalRecuperacion
        recuperarContra={recuperarContra}
        setRecuperarContra={setRecuperarContra}
      />
    </div>
  );
}

export default withStyles(stylesFor)(LoginForm);
