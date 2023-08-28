import React, { useContext } from "react";

import { Button, Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import es from "../../../../Imagenes/spain.png";
import al from "../../../../Imagenes/germany.png";

import { idiomaConsultas } from "../../../../js/Language";
import { sesionStore } from "../../../../stores/sesionStore";

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
  const global = useContext(sesionStore);
  const { state, dispatch } = global;
  const { pasajeLang, lang } = state;

  const clickChangeLanguageEsBP = () => {
    dispatch({ type: "SET_PASAJE_LANG", payload: "es" });
  };

  const clickChangeLanguageAlBP = () => {
    dispatch({ type: "SET_PASAJE_LANG", payload: "al" });
  };

  return (
    <>
      <Tooltip title={idiomaConsultas(lang)}>
        {pasajeLang == "es" ? (
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
    </>
  );
};

export default withStyles(bandIn)(BanderaPasajes);
