import React, { useContext, useState } from "react";
import { TextField, Grid, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import {
  registro,
  nombre,
  apellido,
  escuela,
  puesto,
  pais,
  email,
  contra,
  comprobacionContra,
  ingresar,
  registrado,
  aqui,
  terminosYCondiciones,
} from "../../../js/Language";

import { loginService } from "../../../js/webServices";
import * as localStore from "../../../js/localStore";
import { sesionStore } from "../../../stores/sesionStore";

const stylesReg = {
  TextField1: {
    justify: "center",
    width: "100%",
  },
  TextField2: {
    justify: "center",
    width: "100%",
  },
  divDelForm: {
    paddingBottom: "15vh",
    paddingTop: "7.5vh",
  },
};

const RegistroForm = (props) => {
  const { classes, setLogin } = props;
  const global = useContext(sesionStore);
  const { state, dispatch } = global;
  const { lang } = state;

  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoApellido, setNuevoApellido] = useState("");
  const [nuevaEscuela, setNuevaEscuela] = useState("");
  const [nuevoPuesto, setNuevoPuesto] = useState("");
  const [nuevoPais, setNuevoPais] = useState("");
  const [nuevoCorreo, setNuevoCorreo] = useState("");
  const [nuevoPassword, setNuevoPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "START_LOADING" });
    var params = {
      nombre: nuevoNombre,
      apellidos: nuevoApellido,
      email: nuevoCorreo,
      institucion: nuevaEscuela,
      grado: nuevoPuesto,
      pais: nuevoPais,
      password: nuevoPassword,
    };
    if (nuevoPassword == repassword) {
      console.log("lang", lang);
      var service = "/login/registrar";
      loginService(service, "POST", JSON.stringify(params), (data) => {
        if (data.data.status == 200) {
          var serviceh = "/login/sendRegistroEmail/" + lang;
          loginService(
            serviceh,
            "GET",
            { nombre: nuevoNombre, email: nuevoCorreo, pass: nuevoPassword },
            (data) => {
              dispatch({
                type: "SET_ALERT",
                payload: {
                  mensaje: "Operación Exitosa",
                  open: true,
                  tituloAlerta: "Operación Concluida con Exito",
                },
              });
              dispatch({
                type: "INICIAR_SESION",
                payload: { usuario: nuevoCorreo, password: nuevoPassword },
              });
            }
          );
        } else if (data.data.status == 501) {
          dispatch({
            type: "SET_ALERT",
            payload: {
              mensaje: "El correo ya se encuentra registrado",
              open: true,
              tituloAlerta: "Alerta de Error",
            },
          });
        } else if (data.data.status == 500) {
          dispatch({
            type: "SET_ALERT",
            payload: {
              mensaje: "Hubo un error al enviar el correo de notificación",
              open: true,
              tituloAlerta: "Alerta de Error",
            },
          });
        }
      });
    } else {
      dispatch({
        type: "SET_ALERT",
        payload: {
          mensaje: "El password no coincide",
          open: true,
          tituloAlerta: "Alerta de Error",
        },
      });
    }
    dispatch({ type: "STOP_LOADING" });
  };

  return (
    <form onSubmit={onFormSubmit} className={classes.divDelForm}>
      <Typography variant="h3" align="center" gutterBottom>
        {registro(lang)}
      </Typography>
      <Grid
        className="gridsF"
        container
        direction="column"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} sm={8} lg={7} className="grids">
          <TextField
            label={nombre(lang)}
            id="custom-css-outlined-input"
            margin="normal"
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
            className={classes.TextField1}
          />
        </Grid>
        <Grid item xs={12} sm={8} lg={7} className="grids">
          <TextField
            label={apellido(lang)}
            id="custom-css-outlined-input"
            value={nuevoApellido}
            onChange={(e) => setNuevoApellido(e.target.value)}
            className={classes.TextField2}
          />
        </Grid>
        <Grid item xs={12} sm={8} lg={7} className="grids">
          <TextField
            label={escuela(lang)}
            id="custom-css-outlined-input"
            value={nuevaEscuela}
            onChange={(e) => setNuevaEscuela(e.target.value)}
            className={classes.TextField2}
          />
        </Grid>
        <Grid item xs={12} sm={8} lg={7} className="grids">
          <TextField
            label={puesto(lang)}
            id="custom-css-outlined-input"
            value={nuevoPuesto}
            onChange={(e) => setNuevoPuesto(e.target.value)}
            className={classes.TextField2}
          />
        </Grid>
        <Grid item xs={12} sm={8} lg={7} className="grids">
          <TextField
            label={pais(lang)}
            id="custom-css-outlined-input"
            value={nuevoPais}
            onChange={(e) => setNuevoPais(e.target.value)}
            className={classes.TextField2}
          />
        </Grid>
        <Grid item xs={12} sm={8} lg={7} className="grids">
          <TextField
            label={email(lang)}
            id="custom-css-outlined-input"
            value={nuevoCorreo}
            onChange={(e) => setNuevoCorreo(e.target.value)}
            className={classes.TextField2}
            type="email"
          />
        </Grid>
        <Grid item xs={12} sm={8} lg={7} className="grids">
          <TextField
            label={contra(lang)}
            id="custom-css-outlined-input"
            value={nuevoPassword}
            onChange={(e) => setNuevoPassword(e.target.value)}
            className={classes.TextField2}
            type="password"
          />
        </Grid>
        <Grid item xs={12} sm={8} lg={7} className="grids">
          <TextField
            label={comprobacionContra(lang)}
            id="custom-css-outlined-input"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            className={classes.TextField2}
            type="password"
          />
        </Grid>
        <Grid item xs={12} sm={8} lg={7} className="grids">
          {terminosYCondiciones(lang)}
          <Grid container justify="flex-end" className="grids">
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                className={classes.boton}
                type="submit"
              >
                {ingresar(lang)}
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={8} lg={7}>
          <Typography variant="h4">
            {registrado(lang)}{" "}
            <a className="links" onClick={() => setLogin(true)}>
              {" "}
              {aqui(lang)}{" "}
            </a>
          </Typography>
        </Grid>
      </Grid>
    </form>
  );
};

export default withStyles(stylesReg)(RegistroForm);
