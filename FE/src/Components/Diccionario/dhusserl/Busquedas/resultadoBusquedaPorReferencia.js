// React
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

//Components
import { Grid, Divider, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

//Other req
import { webService } from "../../../../js/webServices";
import { sesionStore } from "../../../../stores/sesionStore";
import { fixLetter } from "../../../../js/utils";
import { expresionesAsociadas } from "../../../../js/Language";
import { busquedaStore } from "../../../../stores/busquedaStore";
import * as localStore from "../../../../js/localStore";

const resultadoBusquedaRef = {
  typosTitulos: {
    paddingTop: "15px !important",
    paddingBottom: "15px !important",
    textAlign: "center",
    backgroundColor: "white",
  },
  contenedorReferencia: {
    overflowY: "auto",
    maxHeight: "calc(91vh - 90px)",
  },
  barraDerecha: {
    backgroundColor: "rgb(242,242,242)",
  },
};

const ResultadoBusquedaReferencia = (props) => {
  const { classes } = props;
  const global = useContext(sesionStore);
  const { state, dispatch } = global;
  const { lang, sesion, letra } = state;

  const globalBusqueda = useContext(busquedaStore);
  const { busquedaState } = globalBusqueda;
  const { busqueda, posicionPasaje } = busquedaState;

  const [pasajes, setPasajes] = useState({
    original: "",
    traduccion: "",
  });
  // const [referencias, setReferencias] = useState("");

  const componeParametro = (parametro) => {
    //console.log("ENTRE A COMPONEPARAMETRO");
    //console.log("parametro al iniciar", parametro);
    //let nuevoParametro = parametro;
    parametro = parametro.replace("á", "&aacute;");
    parametro = parametro.replace("é", "&eacute;");
    parametro = parametro.replace("í", "&iacute;");
    parametro = parametro.replace("ó", "&oacute;");
    parametro = parametro.replace("ú", "&uacute;");
    parametro = parametro.replace("Á", "&Aacute;");
    parametro = parametro.replace("É", "&Eacute;");
    parametro = parametro.replace("Í", "&Iacute;");
    parametro = parametro.replace("Ó", "&Oacute;");
    parametro = parametro.replace("Ú", "&Uacute;");

    parametro = parametro.replace("ä", "&auml;");
    parametro = parametro.replace("ë", "&euml;");
    parametro = parametro.replace("ï", "&iuml;");
    parametro = parametro.replace("ö", "&ouml;");
    parametro = parametro.replace("ü", "&uuml;");

    parametro = parametro.replace("Ä", "&Auml;");
    parametro = parametro.replace("Ë", "&Euml;");
    parametro = parametro.replace("Ï", "&Iuml;");
    parametro = parametro.replace("Ö", "&Ouml;");
    parametro = parametro.replace("Ü", "&Uuml;");

    //console.log("al final de la funcion", parametro);

    return parametro;
  };

  useEffect(() => {
    setPasajes({
      original: resaltarBusqueda(
        props.pasajeSeleccionado.ref_original,
        busqueda
      ),
      traduccion: resaltarBusqueda(
        props.pasajeSeleccionado.ref_traduccion,
        busqueda
      ),
    });
  }, [posicionPasaje]);

  function resaltarBusqueda(string, separador) {
    var split = string.split(componeParametro(separador));
    var resultado = split.join(
      "<span class='resaltador'>" + separador + "</span>"
    );
    return resultado;
  }

  function htmlPasajeOriginal() {
    return { __html: pasajes.original };
  }

  function htmlPasajeTraduccion() {
    return { __html: pasajes.traduccion };
  }

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
    if (letra != fixLetter(event.target.innerHTML[0])) {
      dispatch({
        type: "SET_LETRA",
        payload: fixLetter(event.target.innerHTML[0]),
      });
    }
    const idExpresion = event.target.id.split("/")[0];
    const service = "/referencias/obtieneReferencias/" + idExpresion;
    webService(service, "GET", {}, sesion, (data) => {
      let referencias = fixReferenciasConsultadas(data.data.response);
      let nuevasVisitadas = localStore.getObjects("ultimasVisitadas");
      referencias.nombreExpresion = referencias.expresion;
      nuevasVisitadas.push(referencias);
      localStore.setObjects("ultimasVisitadas", nuevasVisitadas);
      dispatch({
        type: "SET_ULTIMAS_VISITADAS",
        payload: nuevasVisitadas,
      });
    });
  }

  return (
    <Grid container className={classes.contenedorReferencia}>
      <Grid item xs={8} className="pasajesRenderizadosBusqueda">
        <Typography variant="h4" className={classes.typosTitulos}>
          {/* {idPasaje} */}
        </Typography>
        <div dangerouslySetInnerHTML={htmlPasajeOriginal()}></div>
        <br />
        <Divider />
        <br />
        <div dangerouslySetInnerHTML={htmlPasajeTraduccion()}></div>
      </Grid>
      <Grid item xs={4} className={classes.barraDerecha}>
        <Typography variant="h4" className={classes.typosTitulos}>
          {" "}
          {expresionesAsociadas(lang)}
        </Typography>
        <Divider />
        <ul className="ulExpresionesRelacionadas">
          {props?.pasajeSeleccionado?.expresiones.map((expresion, index) => (
            <li key={expresion.t_id} className="liExpresionesRelacionadas">
              <Link
                to={`${props?.match?.path.slice(0, 20)}/pasaje/${
                  expresion.t_id
                }/${props?.pasajeSeleccionado?.ref_id}`}
                onClick={(e) => consultaDePasajes(e)}
              >
                <Typography id={expresion.t_id + "/" + index}>
                  {expresion?.expresion_original +
                    "  //  " +
                    expresion?.expresion_traduccion}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};

export default withStyles(resultadoBusquedaRef)(ResultadoBusquedaReferencia);
