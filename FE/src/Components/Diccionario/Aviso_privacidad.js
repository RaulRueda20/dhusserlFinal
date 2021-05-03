// React
import React, { useContext, useState } from "react";
// Components
import { Typography, Grid, List, ListItem } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const modalDescargas = {
  privacidad: {
    width: "100%",
    maxHeight: "100vh",
    // top: "5vh",
    position: "absolute",
    paddingTop: "5vh !important",
    // overflowY: "auto",
    // left: "calc(25% - 30px)",
    height: "100vh",
  },
  gritItem: {
    paddingLeft: "30px",
    height: "90vh",
    width: "100%",
    margin: "50px 50px 0px 50px",
    display: "block",
  },
  button: {
    left: "1183px",
  },
};

const Aviso_privacidad = (props) => {
  const { classes } = props;

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      alignContent="center"
      className={classes.privacidad}
    >
      <Grid
        item
        className={classes.gritItem}
        alignItems="center"
        alignContent="center"
      >
        {/* <Paper className={classes.paper}> */}
        <Typography variant="h2" align="center">
          AVISO DE PRIVACIDAD
        </Typography>
        <br />
        <br />
        <br />
        <Typography variant="h4" align="justify">
          Los datos personales que nos proporciona son utilizados estrictamente
          en la realización de funciones propias de nuestro sitio web y por
          ningún motivo serán transferidos a terceros.
        </Typography>
        <br />
        <Typography variant="h4" align="justify">
          A nuestros usuarios les solicitamos los siguientes datos personales:
        </Typography>
        <br />
        <List>
          <ListItem>Nombre</ListItem>
          <ListItem>Teléfono</ListItem>
          <ListItem>Institución</ListItem>
          <ListItem>Grado académico</ListItem>
          <ListItem>Correo electrónico</ListItem>
        </List>
        <br />
        <Typography variant="h4" align="justify">
          para poder ingresar a nuestro diccionario y poder recuperar su
          password. En caso de realizar modificaciones al presente Aviso de
          Privacidad, le informaremos mediante correo electrónico.
        </Typography>
        <br />
        <br />
        <br />
        {/* </Paper> */}
      </Grid>
    </Grid>
  );
};

export default withStyles(modalDescargas)(Aviso_privacidad);
