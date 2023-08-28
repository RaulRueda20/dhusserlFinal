import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

const styles = {
  footerText: {
    paddingTop: "22px !important",
    color: "rgba(255,255,255, .9)",
  },
};

const Footer = (props) => {
  const { classes } = props;
  return (
    <>
      <Typography variant="h4" gutterBottom align="center">
        El proyecto del Diccionario Husserl es desarrollado por Antonio Zirión
        Quijano en el Instituto de Investigaciones Filosóficas de la Universidad
        Nacional Autónoma de México.
      </Typography>
      <footer className="footerAdmin">
        <Typography className={classes.footerText} variant="h4" align="center">
          © Antonio Zirión Quijano, 2018. Derechos reservados conforme a la ley.
        </Typography>
      </footer>
    </>
  );
};
export default withStyles(styles)(Footer);
