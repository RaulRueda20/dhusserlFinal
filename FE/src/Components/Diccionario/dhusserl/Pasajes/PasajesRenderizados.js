//React
import React, { useState, useContext, useEffect } from "react";

//Elements
import { IconButton, Grid, Tooltip } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import GetAppIcon from "@material-ui/icons/GetApp";

//Componets
import BanderaPasajes from "./BanderaPasajes";

//Other req
import {
  descarga,
  noContienePasajes,
  recuperandoInformacion,
} from "../../../../js/Language";
import { sesionStore } from "../../../../stores/sesionStore";
import { expresionesStore } from "../../../../stores/expresionStore";

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
  botonDescargas: {
    margin: "20px 0 !important",
    textAlign: "center",
  },
  bandera: {
    margin: "30px 0 !important",
    textAlign: "center",
  },
}));

const PasajesRenderizados = (props) => {
  const classes = useStyles();

  const global = useContext(sesionStore);
  const { state } = global;
  const { lang, pasajeLang } = state;

  const globalExpresion = useContext(expresionesStore);
  const { store, attend } = globalExpresion;
  // const {};

  const theme = useTheme();
  const [pasajeRenderizado, setPasajeRenderizado] = useState({
    original: "",
    traduccion: "",
  });
  const [tituloPasaje, setTituloPasaje] = useState("");
  const [epretty, setEpretty] = useState("");
  const [tpretty, setTpretty] = useState("");

  const emptyPasaje = {
    clave: "",
    epretty: "",
    expresion_original: "",
    expresion_traduccion: "",
    orden: "",
    pasaje_original: "",
    pasaje_traduccion: "",
    ref_original: "",
    ref_traduccion: "",
    refid: "",
    tpretty: "",
  };

  useEffect(() => {
    if (
      props.referenciaSeleccionada != "none" &&
      props.referenciaSeleccionada != null
    ) {
      setPasajeRenderizado({
        original: resaltarBusqueda(
          props.referenciaSeleccionada.pasaje_original,
          props.referenciaSeleccionada.expresion_original
        ),
        traduccion: resaltarBusqueda(
          props.referenciaSeleccionada.pasaje_traduccion,
          props.referenciaSeleccionada.expresion_traduccion
        ),
      });
      setEpretty(props.referenciaSeleccionada.epretty);
      setTpretty(props.referenciaSeleccionada.tpretty);
    } else if (props.referenciaSeleccionada == "none") {
      setPasajeRenderizado({
        original: noContienePasajes(lang),
        traduccion: noContienePasajes(lang),
      });
      setEpretty("");
      setTpretty("");
    } else {
      setPasajeRenderizado({
        original: recuperandoInformacion(lang),
        traduccion: recuperandoInformacion(lang),
      });
      setEpretty("");
      setTpretty("");
    }
    let nombreExpresion =
      props.referenciaSeleccionada != null
        ? props.referenciaSeleccionada
        : emptyPasaje;
    setTituloPasaje(nombreExpresion);
  }, [props.referenciaSeleccionada, lang, epretty]);

  const resaltarBusqueda = (string, separador) => {
    let split = string.split(separador);
    let resultado = split.join(
      "<span class='resaltador'>" + separador + "</span>"
    );
    return resultado;
  };

  const htmlPasajeOriginal = () => {
    return { __html: pasajeRenderizado.original };
  };

  const htmlPasajeTraduccion = () => {
    return { __html: pasajeRenderizado.traduccion };
  };

  const htmlPrettyE = () => {
    return { __html: epretty };
  };

  const htmlPrettyT = () => {
    return { __html: tpretty };
  };

  return (
    <>
      {props.cerrado ? (
        <Grid container style={{ maxHeight: "80vh" }}>
          <Grid container xs={6}>
            <Grid
              item
              xs={2}
              sm={2}
              md={1}
              lg={1}
              className={classes.botonDescargas}
            >
              <Tooltip title={descarga(lang)}>
                <IconButton
                  size="small"
                  className="iconosIluminados"
                  onClick={props.clickHandleDescargas}
                >
                  <GetAppIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xs={8} className={classes.gridTituloPasaje}>
              <div
                className="Titulopretty"
                dangerouslySetInnerHTML={htmlPrettyE()}
              ></div>
            </Grid>
            <Grid item xs={12} className="pasajesRenderizados">
              <div
                id={"pasajes"}
                dangerouslySetInnerHTML={htmlPasajeOriginal()}
              ></div>
            </Grid>
          </Grid>
          <Grid container xs={6}>
            <Grid item xs={12} className={classes.gridTituloPasaje}>
              <div
                className="Titulopretty"
                dangerouslySetInnerHTML={htmlPrettyT()}
              ></div>
            </Grid>
            <Grid item xs={12} className="pasajesRenderizados">
              <div
                id={"pasajes"}
                dangerouslySetInnerHTML={htmlPasajeTraduccion()}
              ></div>
            </Grid>
          </Grid>
        </Grid>
      ) : pasajeLang == "al" ? (
        <Grid container style={{ maxHeight: "80vh" }}>
          <Grid containerxs={12}>
            <Grid
              item
              xs={2}
              sm={2}
              md={1}
              lg={1}
              className={classes.botonDescargas}
            >
              <Tooltip title={descarga(lang)}>
                <IconButton
                  size="small"
                  className="iconosIluminados"
                  onClick={props.clickHandleDescargas}
                >
                  <GetAppIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
          <Grid
            item
            xs={8}
            sm={8}
            md={10}
            lg={10}
            className={classes.gridTituloPasaje}
          >
            <div
              className="Titulopretty"
              dangerouslySetInnerHTML={htmlPrettyE()}
            ></div>
          </Grid>
          <Grid item xs={2} sm={2} md={1} lg={1} className={classes.bandera}>
            <BanderaPasajes />
          </Grid>
          <Grid item xs={12} className="pasajesRenderizados">
            <div
              id={"pasajes"}
              dangerouslySetInnerHTML={htmlPasajeOriginal()}
            ></div>
          </Grid>
        </Grid>
      ) : (
        <Grid container style={{ maxHeight: "80vh" }}>
          <Grid containerxs={12}>
            <Grid
              item
              xs={2}
              sm={2}
              md={1}
              lg={1}
              className={classes.botonDescargas}
            >
              <Tooltip title={descarga(lang)}>
                <IconButton
                  size="small"
                  className="iconosIluminados"
                  onClick={props.clickHandleDescargas}
                >
                  <GetAppIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
          <Grid
            item
            xs={8}
            sm={8}
            md={10}
            lg={10}
            className={classes.gridTituloPasaje}
          >
            <div
              className="Titulopretty"
              dangerouslySetInnerHTML={htmlPrettyT()}
            ></div>
          </Grid>
          <Grid item xs={2} sm={2} md={1} lg={1} className={classes.bandera}>
            <BanderaPasajes />
          </Grid>
          <Grid item xs={12} className="pasajesRenderizados">
            <div
              id={"pasajes"}
              dangerouslySetInnerHTML={htmlPasajeTraduccion()}
            ></div>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default PasajesRenderizados;
