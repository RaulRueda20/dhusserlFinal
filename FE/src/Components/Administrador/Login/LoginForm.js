import React, { useEffect, useState } from "react";
import classNames from "classnames";
import {
  TextField,
  Grid,
  Typography,
  Button,
  LinearProgress,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import Snackbars from "./Snackbars";
import { loginService } from "../../../js/webServices";
import * as localStore from "../../../js/localStore";

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
};

const setStore = (user, pass) => {
  let newSession = { email: user, user_password: pass };
  newSession["ultimasVisitadas"] = [];
  newSession["ultimaVisitada"] = "alfabeto";
  localStore.setObjects("admin_sesion", newSession);
};

const LoginForm = (props) => {
  const { classes } = props;
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    variant: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const onFormSubmit = (event) => {
    event.preventDefault();
    let params = { email: correo, user_password: password };
    if (correo == "" || password == "") {
      setSnackbar({
        open: true,
        variant: "error",
        message: "correo o password invalidos",
      });
    } else if (correo != "" && password != "") {
      setLoading(true);
      localStore.setObjects("admin_sesion", params);
      let service = "/login/admin?userId=" + correo + "&password=" + password;
      loginService(service, "GET", params, (data) => {
        setLoading(false);
        localStorage.removeItem("admin_sesion");
        setStore(data.data.response.email, data.data.response.user_password);
        props.history.push(`${props.match.url}/husserl`);
      });
    } else {
      localStorage.removeItem("admin_sesion");
    }
  };

  const handleClose = () => {
    setSnackbar({ open: false, variant: snackbar.variant, message: "" });
  };

  return (
    <form className={classes.gridsF} onSubmit={onFormSubmit}>
      <br />
      <br />
      <Typography variant="h4" align="center" gutterBottom>
        Inicio
      </Typography>
      <br />
      <br />
      <Grid
        className="gridsF"
        container
        direction="column"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} sm={8} md={6} lg={5} className="grids">
          <TextField
            label="Usuario"
            id="custom-css-outlined-input"
            margin="normal"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className={classes.TextField1}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={5} className="grids">
          <TextField
            label="Contraseña"
            id="custom-css-outlined-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={classes.TextField2}
            type="password"
          />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={5} className="grids">
          <Grid container justify="flex-end" className="grids">
            <Grid item>
              <Button variant="contained" color="primary" type="submit">
                Ingresar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Snackbars
        snackbar={snackbar}
        handleClose={handleClose}
        lang={props.lang}
      />
      <LinearProgress
        className={classNames([{ hidden: !loading }, "loadingBar"])}
      />
    </form>
  );
};

export default withStyles(stylesFor)(LoginForm);
