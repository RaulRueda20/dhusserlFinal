// React
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
//Components
import { Grid, Typography, Divider, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import LinkIcon from "@material-ui/icons/Link";

//Other req
import { busquedaStore } from "../../../../stores/busquedaStore";
import { expresionesStore } from "../../../../stores/expresionStore";
import MenuDerecho from "../Common/MenuDerecho";
import { sesionStore } from "../../../../stores/sesionStore";
import * as localStore from "../../../../js/localStore";

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
  const { lang, sesion, letra } = state;

  const [expanded1, setExpanded1] = useState(true);
  const [expanded2, setExpanded2] = useState(true);
  const [expanded3, setExpanded3] = useState(false);

  const globalBusqueda = useContext(busquedaStore);
  const { busquedaState, attend } = globalBusqueda;
  const { idPasaje, busqueda } = busquedaState;
  const { term_id, expresion, referencias, traduccion } = expresionSeleccionada;

  const globalExpresion = useContext(expresionesStore);

  const [pasajes, setPasajes] = useState({
    original: "",
    traduccion: "",
  });

  useEffect(() => {
    globalExpresion.attend({
      type: "SELECT_EXPRESION",
      payload: {
        id: term_id,
        expresion: expresion,
      },
    });
    setPasajes({
      original: resaltarBusqueda(referencias[0].ref_def_de, busqueda),
      traduccion: resaltarBusqueda(referencias[0].ref_def_es, busqueda),
    });
  }, [idPasaje, props.expresionSeleccionada]);

  const resaltarBusqueda = (string, separador) => {
    const split = string.split(separador);
    const Split = split.join(
      "<span class='resaltador'>" + separador + "</span>"
    );
    return Split;
  };

  const htmlPasajeOriginal = () => {
    const { original } = pasajes;
    return { __html: original };
  };

  const htmlPasajeTraduccion = () => {
    const { traduccion } = pasajes;
    return { __html: traduccion };
  };

  function fixReferenciasConsultadas(expresion) {
    var referencia = {
      clave: expresion[0].clave,
      expresion: expresion[0].expresion_original,
      traduccion: expresion[0].expresion_traduccion,
      id: expresion[0].id,
      index_de: expresion[0].index_de,
      index_es: expresion[0].index_es,
      pretty_e: expresion[0].epretty,
      pretty_t: expresion[0].tpretty,
      referencias: [],
    };
    referencia.referencias.push({
      referencia_original: expresion[0].ref_original,
      referencia_traduccion: expresion[0].ref_traduccion,
      refid: expresion[0].refid,
      orden: expresion[0].orden,
    });
    return referencia;
  }

  function consultaDePasajes(event) {
    if (letra != expresion[0].toUpperCase()) {
      dispatch({
        type: "SET_LETRA",
        payload: expresion[0].toUpperCase(),
      });
    }
    let ref = fixReferenciasConsultadas(referencias);
    let nuevasVisitadas = localStore.getObjects("ultimasVisitadas");
    ref.nombreExpresion = referencias.expresion;
    nuevasVisitadas.push(ref);
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
            {expresion + " / " + traduccion}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Link
            to={`${props.match.path.slice(0, 20)}/pasaje/${term_id}`}
            onClick={(e) => consultaDePasajes(e)}
          >
            <IconButton>
              <LinkIcon />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
      <Grid container className={classes.contenedorDeResultados}>
        <Grid item xs={8} style={{ paddingRight: "30px" }}>
          <div dangerouslySetInnerHTML={htmlPasajeOriginal()}></div>
          <Divider />
          <div
            className={classes.divPasajes}
            dangerouslySetInnerHTML={htmlPasajeTraduccion()}
          ></div>
        </Grid>
        <Grid item xs={4}>
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
