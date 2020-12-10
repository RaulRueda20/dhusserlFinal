//React
import React, { useState, Fragment } from "react";

//Elements
import { IconButton, Grid } from "@material-ui/core";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme } from "@material-ui/core/styles";

//Componets
import PasajesRenderizados from "./PasajesRenderizados";
import ModalDescargas from "./ModalDescargas";

const useStyles = makeStyles((theme) => ({
  gridTituloPasaje: {
    textAlign: "center",
    margin: "20px 0 !important",
  },
  typoSize: {
    [theme.breakpoints.down("xs")]: {
      fontSize: " 1.5rem !important",
    },
  },
  contenedor: {
    justify: "center",
    alignItems: "center",
    alignContent: "center",
    borderRight: "1px double lightgrey",
    borderLeft: "1px double lightgrey",
    overflowY: "auto",
    maxHeight: "calc(91vh-31px)",
  },
}));

const ContenidoPasaje = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [openDescargas, setOpenDescargas] = useState(false);

  const clickHandleDescargas = () => {
    setOpenDescargas(true);
  };

  const clickHandleHidden = () => {
    props.setOpenHidden(!props.openHidden);
  };

  return (
    <Fragment>
      <Grid container className={classes.contenedor}>
        <Hidden smUp>
          <Grid item xs={2} sm={2} md={6} lg={6}>
            <IconButton size="small" onClick={clickHandleHidden}>
              <SwapHorizIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <PasajesRenderizados
            referenciaSeleccionada={props.referenciaSeleccionada}
            cerrado={props.panelIzquierdo || props.panelDerecho}
            idDelURL={props.idDelURL}
            clickHandleDescargas={clickHandleDescargas}
          />
        </Grid>
      </Grid>
      <ModalDescargas
        openDescargas={openDescargas}
        setOpenDescargas={setOpenDescargas}
        idExpresion={props.idExpresion}
      />
    </Fragment>
  );
};

export default ContenidoPasaje;
