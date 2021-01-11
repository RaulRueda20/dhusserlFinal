import React, { useState, useContext } from "react";
import {
  Modal,
  Typography,
  Paper,
  Divider,
  TextField,
  Button,
  Grid,
  IconButton,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import ClearIcon from "@material-ui/icons/Clear";

import {
  modalRecuperacionContra,
  modalIngresarCorreo,
  email,
  ingresar,
  exitoBody,
  correoNoEncontrado,
} from "../../../js/Language";

import { sesionStore } from "../../../stores/sesionStore";
import { loginService } from "../../../js/webServices";

const modalRecuperacion = {
  modalinR: {
    width: "40%",
    maxHeight: "75vh",
    left: "25vw",
    top: "25.5vh",
    position: "absolute",
    padding: "30px 30px",
  },
  campoDeTexto: {
    width: "100%",
  },
  botonClear: {
    left: "18px",
    bottom: "15px",
    size: "small",
  },
  botonRecuperar: {
    top: "12px",
  },
  gridDelBoton: {
    textAlign: "right",
  },
};

const ModalRecuperacion = (props) => {
  const global = useContext(sesionStore);
  const { state } = global;
  const { lang } = state;
  const { classes, setRecuperarContra, recuperarContra } = props;
  const [correoRecuperado, setCorreoRecuperado] = useState("");

  const onFormSubmit1 = (event) => {
    event.preventDefault();
    dispatch({ type: "START_LOADING" });
    var email = correoRecuperado;
    var service = "/login/recoverPassword/es?email=" + email;
    var enconding = window.btoa(email);
    loginService(service, "GET", {}, (data) => {
      dispatch({ type: "STOP_LOADING" });
      if (data.status == 200) {
        dispatch({
          type: "SET_SNACKBAR",
          payload: { open: true, variant: "success", message: exitoBody(lang) },
        });
        // dispatch({ type: 'SET_SESION', payload: { "user": nuevoCorreo, "password": nuevoPassword } })
        // setStore(data.response, email.correo)
      } else {
        dispatch({
          type: "SET_SNACKBAR",
          payload: {
            open: true,
            variant: "error",
            message: correoNoEncontrado(lang),
          },
        });
      }
    });
  };

  function handleClose() {
    setRecuperarContra(false);
  }

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={recuperarContra}
      onClose={handleClose}
    >
      <Paper className={classes.modalinR}>
        <form onSubmit={onFormSubmit1}>
          <Grid container>
            <Grid item xs={11}>
              <Typography variant="h4">
                {modalRecuperacionContra(lang)}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <IconButton
                aria-haspopup="true"
                onClick={handleClose}
                className={classes.botonClear}
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <Divider className="divisor" />
              <Typography variant="h5">{modalIngresarCorreo(lang)}</Typography>
              <TextField
                label={email(lang)}
                id="custom-css-outlined-input"
                margin="normal"
                value={correoRecuperado}
                onChange={(e) => setCorreoRecuperado(e.target.value)}
                type="email"
                className={classes.campoDeTexto}
              />
            </Grid>
            <Grid item xs={6} className={classes.gridDelBoton}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="small"
                className={classes.botonRecuperar}
              >
                {ingresar(lang)}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Modal>
  );
};

export default withStyles(modalRecuperacion)(ModalRecuperacion);
