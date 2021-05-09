//React
import React from "react";

//Elements
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

import fondo from "../../Imagenes/fondo.png";

import Header from "./Login/Header";

const Recovery = {
  back: {
    backgroundImage: `url(${fondo})`,
    position: "fixed",
    zIndex: -1,
    height: "100vh",
    width: "100vw",
    opacity: 0.45,
    top: 0,
  },
  pass: {
    textAlign: "center !important",
  },
  TextField1: {
    justify: "center",
    width: "70%",
  },
  GridPass: {
    paddingLeft: "350px",
    paddingTop: "10px",
  },
};

function Recuperacion(props) {
  const { classes } = props;
  const [nuevoPassword, setNuevoPassword] = React.useState("");
  const [confirmacion, setConfirmacion] = React.useState("");
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    variant: "",
    message: "",
  });
  const [loading, setLoading] = React.useState(false);

  function onFormSubmit(event) {
    event.preventDefault();
    setLoading(true);
    var url = document.URL;
    var params = {
      password: nuevoPassword,
      repassword: confirmacion,
    };
  }

  function handleClose() {
    setSnackbar({ open: false, varian: "", message: "" });
  }

  return (
    <div>
      <div className={classes.back} />
      <form onSubmit={onFormSubmit}>
        <Header lang={props.lang} setLang={props.setLang} />
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.pass}>
              Introducir el nuevo password
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.GridPass}>
            <TextField
              type="password"
              className={classes.TextField1}
              value={nuevoPassword}
              onChange={(e) => setNuevoPassword(e.target.value)}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default withStyles(Recovery)(Recuperacion);
