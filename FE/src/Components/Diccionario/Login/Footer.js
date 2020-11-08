import React, {useEffect, useContext} from "react";
import {Typography} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import {
  Footer1,
  Footer2,
  Footer3,
  FooterAl,
  InstitutoF,
  UNAM,
} from "../../../js/Language";

import { sesionStore } from "../../../stores/sesionStore";

const styles = {
  footerText: {
    paddingTop: "22px !important",
    color: "rgba(255,255,255, .9)",
  },
  footerBody: {
    bottom: "0px",
    width: "100%",
  },
};

const Footer = (props) => {
  const { classes } = props;
  const global = useContext(sesionStore);
  const { state } = global
  const { lang } = state

  useEffect(() => {
  }, [lang]);

  return (
    <div className={classes.footerBody}>
      <Typography variant="h4" gutterBottom align="center">
        {Footer1(lang)}{" "}
        <a
          target="_blank"
          href="http://www.filosoficas.unam.mx"
          className="links"
        >
          {InstitutoF(lang)}
        </a>{" "}
        {Footer2(lang)}{" "}
        <a target="_blank" href="http://www.unam.mx" className="links">
          {UNAM(lang)}
        </a>{" "}
        {FooterAl(lang)}
      </Typography>
      <footer className="footerDiccionario">
        <Typography className={classes.footerText} variant="h4" align="center">
          {Footer3(lang)}
        </Typography>
      </footer>
    </div>
  );
}
export default withStyles(styles)(Footer);
