//React
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

//Elements
import {
  Typography,
  TextField,
  Grid,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import { sesionStore } from "../../../stores/sesionStore";
import { loginService } from "../../../js/webServices";

import fondo from "../../../Imagenes/fondo.png";

import Header from "./Header";

const Recovery = {
  back: {
    backgroundImage: `url(${fondo})`,
    position: "fixed",
    zIndex: -1,
    height: "100vh",
    width: "100%",
    opacity: 0.45,
    top: 0,
  },
  pass: {
    textAlign: "center !important",
  },
  TextField1: {
    justify: "center",
    // width: "70%",
  },
};

const Recuperacion = (props) => {
  const { classes } = props;
  const [nuevoPassword, setNuevoPassword] = useState("");
  const [confirmacion, setConfirmacion] = useState("");
  const [status, setStatus] = useState("idle");
  const { hash } = useParams();

  const global = useContext(sesionStore);
  const { dispatch } = global;

  const [loading, setLoading] = useState(false);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (confirmacion != nuevoPassword) {
      dispatch({
        type: "SET_SNACKBAR",
        payload: {
          open: true,
          variant: "error",
          message: "El password no concuerda con la confirmación.",
        },
      });
    } else {
      setStatus("loading");
      var service = `/login/updatePassword/${atob(hash)}/${nuevoPassword}`;
      loginService(service, "POST", {}, (data) => {
        if (data.status == 200) {
          dispatch({
            type: "SET_SNACKBAR",
            payload: {
              open: true,
              variant: "success",
              message: "Password actualizado con éxito.",
            },
          });
          setStatus("success");
          // dispatch({ type: 'SET_SESION', payload: { "user": nuevoCorreo, "password": nuevoPassword } })
          // setStore(data.response, email.correo)
        } else {
          setStatus("idle");
          dispatch({
            type: "SET_SNACKBAR",
            payload: {
              open: true,
              variant: "error",
              message: "ERROR",
            },
          });
        }
      });
    }
  };

  useEffect(() => {
    console.log(atob(hash));
  }, []);

  const getContent = () => {
    switch (status) {
      case "loading":
        return (
          <div
            style={{ width: "100%", textAlign: "center", paddingTop: "10%" }}
          >
            <CircularProgress />
          </div>
        );
      case "success":
        return (
          <Grid container spacing={4} style={{ padding: "5% 10%" }}>
            <Grid item xs={12}>
              <Typography variant="h3" className={classes.pass}>
                El password ha sido actualizado con éxito.
              </Typography>
              <br />
              <hr />
              <br />
              <Typography variant="h4" className={classes.pass}>
                Regresa al diccionario para iniciar sesión{" "}
                <Link to="/diccionario/login" className="links">
                  aquí
                </Link>
                .
              </Typography>
            </Grid>
          </Grid>
        );
      case "idle":
      default:
        return (
          <form onSubmit={onFormSubmit}>
            <Grid container spacing={4} style={{ padding: "5% 10%" }}>
              <Grid item xs={12}>
                <Typography variant="h3" className={classes.pass}>
                  Introduce el nuevo password
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  className={classes.TextField1}
                  value={nuevoPassword}
                  fullWidth
                  label="Nuevo Password"
                  onChange={(e) => setNuevoPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="passwordC"
                  className={classes.TextField1}
                  value={confirmacion}
                  fullWidth
                  label="Confirma Password"
                  onChange={(e) => setConfirmacion(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  size="small"
                  className={classes.botonRecuperar}
                >
                  Actualizar Password
                </Button>
              </Grid>
            </Grid>
          </form>
        );
    }
  };

  return (
    <div>
      <div className={classes.back} />
      <Header lang={props.lang} setLang={props.setLang} />
      {getContent()}
    </div>
  );
};

export default withStyles(Recovery)(Recuperacion);
