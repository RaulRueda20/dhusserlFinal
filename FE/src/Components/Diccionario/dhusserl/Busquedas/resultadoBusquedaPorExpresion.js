// React
import React, { useEffect, useState, useContext } from "react";

//Components
import { Grid, Typography, Button, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

//Other req
import { busquedaStore } from "../../../../stores/busquedaStore";
import { expresionesStore } from "../../../../stores/expresionStore";
import MenuDerecho from "../Common/MenuDerecho";
import es from "../../../../Imagenes/spain.png";
import al from "../../../../Imagenes/germany.png";

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
  const [lang, setLang] = useState("al");

  useEffect(() => {
    console.log("Expresion", expresion);
    console.log("traduccion", traduccion);

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
  }, [idPasaje, lang, props.expresionSeleccionada]);

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

  const getJerarquia = (event) => {
    console.log(event.currentTarget.id);
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
        <Grid item md={12} xs={12}>
          <Typography variant="h2" className={classes.typosTitulos}>
            {expresion + " / " + traduccion}
          </Typography>
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
