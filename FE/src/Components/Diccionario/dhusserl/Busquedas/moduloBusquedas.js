// React
import React, { useContext, useEffect } from "react";

//Components
import { Grid, IconButton, Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";

//Elements
import Busquedas from "./Busquedas";
import SelectorBusqueda from "./selectorBusqueda";
import ListaBusqueda from "./listaBusqueda";
import ResultadoBusquedaExpresion from "./resultadoBusquedaPorExpresion";
import ResultadoBusquedaReferencia from "./resultadoBusquedaPorReferencia";

//Language
import { abrirListaTooltip } from "../../../../js/Language";
import { sesionStore } from "../../../../stores/sesionStore";
import { busquedaStore } from "../../../../stores/busquedaStore";

const moduloBusqueda = {
  gridSelectorBusqueda: {
    paddingRight: "30px !important",
    // textAlign: "center",
  },
  gridSelectorLetras: {
    paddingRight: "30px !important",
  },
  botonLista: {
    textAlign: "center",
  },
};

const ModuloBusquedas = (props) => {
  const { classes } = props;
  const global = useContext(sesionStore);
  const { state } = global;
  const { lang } = state;

  const globalBusqueda = useContext(busquedaStore);
  const { busquedaState, attend } = globalBusqueda;
  const {
    expresionesEncontradas,
    tipoBusquedaRealizada,
    posicionPasaje,
    abierto,
  } = busquedaState;

  const abrirLista = () => {
    attend({ type: "SET_ABIERTO", payload: !abierto });
  };

  useEffect(() => {
    props.setFlagCambio("Busquedas");
  });

  return (
    <Grid container>
      <Grid item xs={12} sm={8} style={{ textAlign: "center" }}>
        <Busquedas />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.gridSelectorBusqueda}>
        <SelectorBusqueda />
      </Grid>
      {expresionesEncontradas.length < 1 ? null : (
        <Grid
          item
          xs={abierto ? 6 : 1}
          sm={abierto ? 4 : 1}
          md={abierto ? 3 : 1}
          className={classes.botonLista}
        >
          {!abierto ? (
            <Tooltip title={abrirListaTooltip(lang)}>
              <IconButton onClick={abrirLista}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <ListaBusqueda />
          )}
        </Grid>
      )}
      {expresionesEncontradas.length < 1 ? null : (
        <Grid
          item
          xs={abierto ? false : 11}
          sm={abierto ? 8 : 11}
          md={abierto ? 9 : 11}
        >
          {tipoBusquedaRealizada == "Referencia" ? (
            <ResultadoBusquedaReferencia
              history={props.history}
              match={props.match}
              pasajeSeleccionado={expresionesEncontradas[posicionPasaje]}
            />
          ) : (
            <ResultadoBusquedaExpresion
              history={props.history}
              match={props.match}
              expresionSeleccionada={expresionesEncontradas[posicionPasaje]}
            />
          )}
        </Grid>
      )}
    </Grid>
  );
};

export default withStyles(moduloBusqueda)(ModuloBusquedas);
