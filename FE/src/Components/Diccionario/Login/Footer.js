import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

import {
  Footer1,
  Footer2,
  Footer3,
  FooterAl,
  InstitutoF,
  UNAM,
} from "../../../js/Language";
import { languageStore } from "../../../stores/languageStore";

const styles = {
  footerText: {
    paddingTop: "22px !important",
    color: "rgba(255,255,255, .9)",
  },
  footerBody: {
    bottom: "0px",
    width: "100%",
    //marginTop: "85vh !important"
  },
};

function Footer(props) {
  const { classes } = props;
  const globalLanguage = React.useContext(languageStore);
  const Unam = null;

  React.useEffect(() => {
    console.log("lang", globalLanguage.lang);
    // switch (globalLanguage.lang) {
    //   case "es":
    //     return (Instituto = "Instituto de Investigaciones Filosóficas");
    //   case "en":
    //     return (Instituto = "Instituto de Investigaciones Filosóficas");
    //   case "fr":
    //     return (Instituto = "Instituto de Investigaciones Filosóficas");
    //   case "ca":
    //     return (Instituto = "l'Institut d'Investigacions Filosòfiques");
    // }
    // if (globalLanguage.lag == "ca") {
    //   Instituto = "l'Institut d'Investigacions Filosòfiques";
    // } else {
    //   Instituto = "Instituto de Investigaciones Filosóficas";
    // }
    // console.log("Instituto", Instituto);
    //   switch (globalLanguage.lang) {
    //     case "es":
    //       return (Unam = "Universidad Nacional Autónoma de México.");
    //     case "en":
    //       return (Unam = "Universidad Nacional Autónoma de México.");
    //     case "fr":
    //       return (Unam = "Universidad Nacional Autónoma de México.");
    //     case "ca":
    //       return (Unam = "Universitat Nacional Autònoma de Mèxic.");
    //   }
  }, [globalLanguage.lang]);

  return (
    <div className={classes.footerBody}>
      <Typography variant="h4" gutterBottom align="center">
        {Footer1(globalLanguage.lang)}{" "}
        <a
          target="_blank"
          href="http://www.filosoficas.unam.mx"
          className="links"
        >
          {InstitutoF(globalLanguage.lang)}
        </a>{" "}
        {Footer2(globalLanguage.lang)}{" "}
        <a target="_blank" href="http://www.unam.mx" className="links">
          {UNAM(globalLanguage.lang)}
        </a>{" "}
        {FooterAl(globalLanguage.lang)}
      </Typography>
      <footer className="footerDiccionario">
        <Typography className={classes.footerText} variant="h4" align="center">
          {Footer3(globalLanguage.lang)}
        </Typography>
      </footer>
    </div>
  );
}
export default withStyles(styles)(Footer);
