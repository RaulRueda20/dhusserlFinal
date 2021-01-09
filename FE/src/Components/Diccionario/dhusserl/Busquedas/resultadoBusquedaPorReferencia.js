// React
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

//Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

//Other req
import { webService } from "../../../../js/webServices";
import { sesionStore } from "../../../../stores/sesionStore";
import { expresionesAsociadas } from "../../../../js/Language";
import { busquedaStore } from "../../../../stores/busquedaStore";

const resultadoBusquedaRef = {
  typosTitulos: {
    marginTop: "15px !important",
    marginBottom: "15px !important",
    textAlign: "center",
  },
  contenedorReferencia: {
    overflowY: "auto",
    maxHeight: "calc(91vh - 108px)",
  },
};

const ResultadoBusquedaReferencia = (props) => {
  const { classes } = props;
  const global = useContext(sesionStore);
  const { state } = global;
  const { lang } = state;

  const globalBusqueda = useContext(busquedaStore);
  const { busquedaState } = globalBusqueda;
  const { idPasaje, busqueda, posicionPasaje } = busquedaState;

  const [pasajes, setPasajes] = useState({
    original: "",
    traduccion: "",
  });
  // const [referencias, setReferencias] = useState("");

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
    var split = string.split(separador);
    var resultado = split.join(
      "<span class='resaltador'>" + separador + "</span>"
    );
    return resultado;
  }

  function htmlPasajeOriginal() {
    console.log("pasajes.original", pasajes.original);
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
    setTimeout(() => {
      if (document.getElementById("VP" + props.idExpresion) != null) {
        document.getElementById("VP" + props.idExpresion).scrollIntoView();
      }
    }, 1000);
    var idExpresion = event.target.id.split("/")[0];
    var service = "/referencias/obtieneReferencias/" + idExpresion;
    webService(service, "GET", {}, global.sesion, (data) => {
      var referencias = fixReferenciasConsultadas(data.data.response);
      console.log("referencias", referencias);
      var nuevasVisitadas = global.ultimasVisitadas;
      nuevasVisitadas.push(referencias);
      global.setUltimasVisitadas(nuevasVisitadas);
    });
  }

  return (
    <Grid container className={classes.contenedorReferencia}>
      <Grid item xs={12} className="pasajesRenderizadosBusqueda">
        <Typography variant="h4" className={classes.typosTitulos}>
          {idPasaje}
        </Typography>
        <div dangerouslySetInnerHTML={htmlPasajeOriginal()}></div>
        <div dangerouslySetInnerHTML={htmlPasajeTraduccion()}></div>
      </Grid>
      <Grid item xs={12} className="pasajesRenderizadosBusquedaPorReferencia">
        <Typography variant="h4" className={classes.typosTitulos}>
          {" "}
          {expresionesAsociadas(lang)}
        </Typography>
        <ul className="ulExpresionesRelacionadas">
          {props.pasajeSeleccionado.expresiones.map((expresion, index) => (
            <li key={expresion.t_id} className="liExpresionesRelacionadas">
              <Link
                to={`${props.match.path.slice(0, 20)}/pasaje/${
                  expresion.t_id
                }/${props.pasajeSeleccionado.ref_id}`}
                onClick={(e) => consultaDePasajes(e)}
              >
                <Typography id={expresion.t_id + "/" + index}>
                  {expresion.expresion_original +
                    "  /  " +
                    expresion.expresion_traduccion}
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
