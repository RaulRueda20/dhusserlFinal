import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
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

import Snackbars from "./Snackbars";
import ModalRecuperacion from "./ModalRecuperacion";
import { loginService } from "../../../js/webServices";

import * as localStore from "../../../js/localStore";
import { sesionStore } from "../../../stores/sesionStore";
import { languageStore } from "../../../stores/languageStore";

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

var setStore = (user, pass) => {
  var newSession = { user: user, password: pass };
  newSession["ultimasVisitadas"] = [];
  newSession["ultimaVisitada"] = "alfabeto";
  localStore.setObjects("sesion", newSession);
};

function LoginForm(props) {
  const { classes } = props;
  const global = React.useContext(sesionStore);
  const globalLanguage = React.useContext(languageStore);
  const [correo, setCorreo] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    variant: "",
    message: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [recuperarContra, setRecuperarContra] = React.useState(false);

  function onFormSubmit(event) {
    console.log("entre");
    event.preventDefault();
    setLoading(true);
    var service = "/login/usuario";
    var params = JSON.stringify({ userId: correo, password: password });
    loginService(service, "POST", params, (data) => {
      if (data.data.error) {
        setSnackbar({
          open: true,
          variant: "error",
          message: correoInvalido(globalLanguage.lang),
        });
      } else {
        setStore(correo, password);
        var nuevaSesion = {
          usuario: correo,
          password: password,
        };
        //nuevaSesion['ultimasVisitadas'] = []
        //nuevaSesion["ultimaVisitada"] = "alfabeto"
        global.setSesion(nuevaSesion);
        props.history.push("/husserl");
      }
      setLoading(false);
    });
  }

  function handleClickModal() {
    setRecuperarContra(true);
  }

  const handleClose = (event, reason) => {
    setSnackbar({ open: false, variant: snackbar.variant, message: "" });
  };

  return (
    <div className={classes.divDelForm}>
      <Typography variant="h3" align="center" gutterBottom>
        {inicio(globalLanguage.lang)}
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
              label={email(globalLanguage.lang)}
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
              label={contra(globalLanguage.lang)}
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
                  {ingresar(globalLanguage.lang)}
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8} lg={7}>
            <Typography variant="h4">
              {olvidoDeContra(globalLanguage.lang)}{" "}
              <a onClick={handleClickModal} className="links">
                {aqui(globalLanguage.lang)}
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} lg={7}>
            <Typography variant="h4">
              {registrarse(globalLanguage.lang)}
              <a onClick={() => props.setLogin(false)} className="links">
                {" "}
                {aqui(globalLanguage.lang)}
              </a>
            </Typography>
          </Grid>
        </Grid>
      </form>
      <ModalRecuperacion
        recuperarContra={recuperarContra}
        setRecuperarContra={setRecuperarContra}
        loading={loading}
        setLoading={setLoading}
        snackbar={snackbar}
        setSnackbar={setSnackbar}
        lang={globalLanguage.lang}
      />
      <Snackbars
        snackbar={snackbar}
        handleClose={handleClose}
        lang={globalLanguage.lang}
      />
      <LinearProgress
        className={classNames([{ hidden: !loading }, "loadingBar"])}
      />
    </div>
  );
}

export default withStyles(stylesFor)(LoginForm);
