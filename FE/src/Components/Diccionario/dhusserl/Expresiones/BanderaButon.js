import React, { useContext } from "react";
import { Button, Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import es from "../../../../Imagenes/spain.png";
import al from "../../../../Imagenes/germany.png";

import { toolTipIdiomaDeLaLista } from "../../../../js/Language";
import { sesionStore } from "../../../../stores/sesionStore";

const bandIn = {
  imagenesBandera: {
    width: "35px !important",
    height: "25px !important",
    fontSize: "0px",
    minHeight: "0px",
    minWidth: "0px !important",
    padding: "0px !important",
  },
};

const BanderaButon = (props) => {
  const { classes } = props;
  const global = useContext(sesionStore);
  const { state, dispatch } = global;
  const { langLista, lang } = state;

  const clickChangeLanguageEs = () => {
    dispatch({ type: "SET_LANGLISTA", payload: "es" });
  };

  const clickChangeLanguageAl = () => {
    dispatch({ type: "SET_LANGLISTA", payload: "al" });
  };

  return (
    <>
      {langLista == "es" ? (
        <Tooltip title={toolTipIdiomaDeLaLista(lang)}>
          <Button
            size="small"
            className={classes.imagenesBandera}
            onClick={clickChangeLanguageAl}
          >
            <img className="banderaIzquierda" src={al} />
          </Button>
        </Tooltip>
      ) : (
        <Tooltip title={toolTipIdiomaDeLaLista(lang)}>
          <Button
            size="small"
            className={classes.imagenesBandera}
            onClick={clickChangeLanguageEs}
          >
            <img className="banderaIzquierda" src={es} />
          </Button>
        </Tooltip>
      )}
    </>
  );
};

export default withStyles(bandIn)(BanderaButon);
