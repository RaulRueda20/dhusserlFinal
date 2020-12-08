import React, { useContext, Fragment } from "react";

import { Button, Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import es from "../../../../Imagenes/spain.png";
import al from "../../../../Imagenes/germany.png";

import { idiomaConsultas } from "../../../../js/Language";
import { languageStore } from "../../../../stores/languageStore";

const bandIn = {
  imagenesBandera: {
    width: "30px !important",
    height: "20px !important",
    fontSize: "0px",
    minHeight: "0px",
    minWidth: "0px !important",
    padding: "0px !important",
  },
};

const BanderaPasajes = (props) => {
  const { classes } = props;
  const globalLanguage = useContext(languageStore);

  const clickChangeLanguageEsBP = () => {
    globalLanguage.setLangLista("es");
  };

  const clickChangeLanguageAlBP = () => {
    globalLanguage.setLangLista("al");
  };

  return (
    <Fragment>
      <Tooltip title={idiomaConsultas(globalLanguage.lang)}>
        {globalLanguage.langLista == "es" ? (
          <Button
            className={classes.imagenesBandera}
            onClick={clickChangeLanguageAlBP}
          >
            <img className="banderaPasajes" src={al} />
          </Button>
        ) : (
          <Button
            className={classes.imagenesBandera}
            onClick={clickChangeLanguageEsBP}
          >
            <img className="banderaPasajes" src={es} />
          </Button>
        )}
      </Tooltip>
    </Fragment>
  );
};

export default withStyles(bandIn)(BanderaPasajes);
