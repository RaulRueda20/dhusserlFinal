// React
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
//Components
import { Grid, Typography, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import LinkIcon from "@material-ui/icons/Link";

//Other req
import { busquedaStore } from "../../../../stores/busquedaStore";
import { expresionesStore } from "../../../../stores/expresionStore";
import MenuDerecho from "../Common/MenuDerecho";
import { sesionStore } from "../../../../stores/sesionStore";
import * as localStore from "../../../../js/localStore";
import { fixLetter } from "../../../../js/utils";
import { pasajesAsociados } from "../../../../js/Language";

const resultadoBusqueda = {
  typosTitulos: {
    paddingTop: "15px !important",
    paddingBottom: "15px !important",
  },
  contenedorPrincipal: {
    paddingLeft: "30px !important",
    paddingRight: "0px !important",
  },
  contenedorDeResultados: {
    maxHeight: "73vh",
    overflow: "scroll",
  },
  divPasajes: {
    marginTop: "40px",
  },
  boton: {
    textAling: "center",
    paddingTop: "15px",
  },
};

const ResultadoBusquedaExpresion = (props) => {
  const { classes, expresionSeleccionada } = props;

  const global = useContext(sesionStore);
  const { state, dispatch } = global;
  const { lang, letra } = state;

  const [expanded1, setExpanded1] = useState(true);
  const [expanded2, setExpanded2] = useState(true);
  const [expanded3, setExpanded3] = useState(false);

  const globalBusqueda = useContext(busquedaStore);
  const { busquedaState, attend } = globalBusqueda;
  const { idPasaje, busqueda } = busquedaState;

  const { expresion, referencias, traduccion } = expresionSeleccionada;

  const globalExpresion = useContext(expresionesStore);

  const [pasajes, setPasajes] = useState({
    original: "",
    traduccion: "",
  });

  useEffect(() => {
    globalExpresion.attend({
      type: "SELECT_EXPRESION",
      payload: {
        id: expresionSeleccionada.id,
        expresion: expresion,
      },
    });
    setPasajes({
      original: resaltarBusqueda(referencias[0].ref_def_de, busqueda),
      traduccion: resaltarBusqueda(referencias[0].ref_def_es, busqueda),
    });
  }, [idPasaje, expresionSeleccionada]);

  const resaltarBusqueda = (string, separador) => {
    if (!string) return "";
    const split = string.split(separador);
    const Split = split.join(
      "<span class='resaltador'>" + separador + "</span>"
    );
    return Split;
  };

  function consultaDePasajes(event) {
    if (letra != fixLetter(expresion[0])) {
      dispatch({
        type: "SET_LETRA",
        payload: fixLetter(expresion[0]),
      });
    }
    let nuevasVisitadas = localStore.getObjects("ultimasVisitadas");
    nuevasVisitadas.push(expresionSeleccionada);
    localStore.setObjects("ultimasVisitadas", nuevasVisitadas);
    dispatch({
      type: "SET_ULTIMAS_VISITADAS",
      payload: nuevasVisitadas,
    });
  }

  const getJerarquia = (event) => {
    attend({
      type: "SELECT_EXPRESION",
      payload: {
        id: event.currentTarget.id.split("/")[0],
        expresion: event.currentTarget.id.split("/")[1],
      },
    });
    setExpanded1(true);
    setExpanded2(true);
  };

  return (
    <div className={classes.contenedorPrincipal}>
      <Grid container alignItems="center" alignContent="center">
        <Grid item xs={10}>
          <Typography variant="h2" className={classes.typosTitulos}>
            {expresion + " // " + traduccion}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Link
            to={`${props?.match?.path.slice(0, 20)}/pasaje/${
              expresionSeleccionada.id
            }`}
            onClick={(e) => consultaDePasajes(e)}
          >
            <IconButton>
              <LinkIcon />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
      <Grid container className={classes.contenedorDeResultados}>
        <Grid item xs={12} sm={8} md={8} lg={8} className="listaReferencia">
          <Typography variant="h3" className="pasajesAsociados">
            {pasajesAsociados(lang)}
          </Typography>
          <ul className="ulExpresionesRelacionadas">
            {expresionSeleccionada?.referencias.map((referenciasList) => (
              <li
                key={expresionSeleccionada.id}
                className="liExpresionesRelacionadas"
              >
                <Link
                  to={`${props?.match?.path.slice(0, 20)}/pasaje/${
                    expresionSeleccionada?.id
                  }/${expresionSeleccionada?.referencias[0].refid}`}
                  onClick={(e) => consultaDePasajes(e)}
                  id={
                    expresionSeleccionada.referencias[0].refid +
                    "/" +
                    expresionSeleccionada.id
                  }
                >
                  <Typography className="referenciasTypo">
                    {referenciasList?.referencia_original} {" // "}
                    {referenciasList?.referencia_traduccion}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <MenuDerecho
            {...props}
            expanded1={expanded1}
            setExpanded1={setExpanded1}
            expanded2={expanded2}
            setExpanded2={setExpanded2}
            expanded3={expanded3}
            setExpanded3={setExpanded3}
            getJerarquia={getJerarquia}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(resultadoBusqueda)(ResultadoBusquedaExpresion);
