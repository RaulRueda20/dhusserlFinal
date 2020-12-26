// React
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

//Components
import { Grid, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

//Other req
import { webService } from "../../../../js/webServices";
import { sesionStore } from "../../../../stores/sesionStore";
import { busquedaStore } from "../../../../stores/busquedaStore";
import {
  menuDerechoJerarquia,
  menuDerechoVerTambien,
  menuDerechoJerarquiaDerivadaDe,
  menuDerechoJerarquiaExpresionesDerivadas,
} from "../../../../js/Language";
import es from "../../../../Imagenes/spain.png";
import al from "../../../../Imagenes/germany.png";

const resultadoBusqueda = {
  typosTitulos: {
    paddingTop: "15px !important",
    paddingBottom: "15px !important",
  },
  contenedorPrincipal: {
    paddingLeft: "30px !important",
    paddingRight: "5px !important",
  },
  contenedorDeResultados: {
    maxHeight: "60vh",
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
  const { classes, match, expresionSeleccionada } = props;

  const global = useContext(sesionStore);
  const { state, dispatch } = global
  const { sesion, ultimasVisitadas } = state

  const globalBusqueda = useContext(busquedaStore);
  const { busquedaState, attend } = globalBusqueda
  const { idPasaje, busqueda } = busquedaState
  const { term_id, expresion, referencias, traduccion } = expresionSeleccionada

  const [listaVerTambien, setListaVerTambien] = useState([]);
  const [pasajes, setPasajes] = useState({
    original: "",
    traduccion: "",
  });
  const [hijos, setHijos] = useState([]);
  const [padres, setPadres] = useState([]);
  const [lang, setLang] = useState("al");

  useEffect(() => {
    if (idPasaje == "") {
      var service = "/vertambien/" + term_id;
      webService(service, "GET", {}, sesion, ({ data }) => {
        const { response } = data
        setListaVerTambien(response);
        webService(
          "/expresiones/" +
          lang +
          "/hijosList/" + term_id,
          "GET",
          {},
          sesion,
          (sons) => {
            setHijos(sons.data.response);
          }
        );
        webService(
          "/expresiones/" +
          lang +
          "/abuelosList/" +
          term_id,
          "GET",
          {},
          sesion,
          (data2) => {
            setPadres(data2.data.response);
          }
        );
      });
    } else {
      var service = "/vertambien/" + idPasaje;
      webService(service, "GET", {}, sesion, ({ data }) => {
        const { response } = data
        setListaVerTambien(response);
        webService(
          "/expresiones/" + lang + "/hijosList/" + idPasaje,
          "GET",
          {},
          sesion,
          (sons) => {
            setHijos(sons.data.response);
          }
        );
        webService(
          "/expresiones/" + lang + "/abuelosList/" + idPasaje,
          "GET",
          {},
          sesion,
          (data2) => {
            setPadres(data2.data.response);
          }
        );
      });
    }
    setPasajes({
      original: resaltarBusqueda(
        referencias[0].ref_def_de,
        busqueda
      ),
      traduccion: resaltarBusqueda(
        referencias[0].ref_def_es,
        busqueda
      ),
    });
  }, [idPasaje, lang, props.expresionSeleccionada]);

  const resaltarBusqueda = (string, separador) => {
    const split = string.split(separador);
    const Split = split.join("<span class='resaltador'>" + separador + "</span>");
    return Split;
  }

  const clickChangeLangEsVB = () => {
    setLang("es");
  };

  const clickChangeLanALVB = () => {
    setLang("al");
  };

  const htmlPasajeOriginal = () => {
    const { original } = pasajes
    return { __html: original };
  }

  const htmlPasajeTraduccion = () => {
    const { traduccion } = pasajes
    return { __html: traduccion };
  }

  const fixReferenciasConsultadas = (expresion) => {
    const { clave, expresion_original, expresion_traduccion, id, index_de, index_es, epretty, tpretty, ref_original, ref_traduccion, refid, orden } = expresion[0]
    var referencia = {
      clave: clave,
      expresion: expresion_original,
      traduccion: expresion_traduccion,
      id: id,
      index_de: index_de,
      index_es: index_es,
      pretty_e: epretty,
      pretty_t: tpretty,
      referencias: [],
    };
    referencia.referencias.push({
      referencia_original: ref_original,
      referencia_traduccion: ref_traduccion,
      refid: refid,
      orden: orden,
    });
    return referencia;
  }

  const consultaDePasajes = () => {
    setTimeout(() => {
      if (document.getElementById("VP" + idExpresion) != null) {
        document.getElementById("VP" + idExpresion).scrollIntoView();
      }
    }, 1000);
    var idExpresion = event.target.id.split("/")[0];
    var service = "/referencias/obtieneReferencias/" + idExpresion;
    webService(service, "GET", {}, ({ data }) => {
      const { response } = data
      const referencias = fixReferenciasConsultadas(response);
      let nuevasVisitadas = ultimasVisitadas;
      nuevasVisitadas.push(referencias);
      dispatch({
        type: "SET_ULTIMAS_VISITADAS",
        payload: nuevasVisitadas
      })
    });
  }

  return (
    <div className={classes.contenedorPrincipal}>
      <Grid container alignItems="center" alignContent="center">
        <Grid item md={11} xs={8}>
          <Typography variant="h2" className={classes.typosTitulos}>
            {expresion +
              "  /  " +
              traduccion}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.contenedorDeResultados}>
        <Grid item xs={12}>
          <div dangerouslySetInnerHTML={htmlPasajeOriginal()}></div>
          <div
            className={classes.divPasajes}
            dangerouslySetInnerHTML={htmlPasajeTraduccion()}
          ></div>
        </Grid>
        <Grid item xs={5} className="jerarquiaBusquedaIzquierda">
          <Typography variant="h5">
            {menuDerechoJerarquia(state.lang)}
          </Typography>
          <Typography variant="caption">
            {menuDerechoJerarquiaDerivadaDe(state.lang)}
          </Typography>
          <ul className="ulDeBusqueda" key={padres.id}>
            {padres.map((padre, index) => (
              <li key={padre.id + "-" + index}>
                <Link
                  to={`${match.path.slice(0, 20)}/pasaje/${padre.padre}`}
                  onClick={consultaDePasajes}
                >
                  <Typography
                    variant="h6"
                    className="consultaDePasajesB"
                    id={padre.padre + "/" + index}
                  >
                    {padre.expresion}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
          <Typography variant="caption">
            {menuDerechoJerarquiaExpresionesDerivadas(state.lang)}
          </Typography>
          <ul className="ulDeBusqueda" key={hijos.id}>
            {hijos.map((hijo, index) => (
              <li key={hijo.id + "-" + index}>
                <Link
                  to={`${match.path.slice(0, 20)}/pasaje/${hijo.hijo}`}
                  onClick={consultaDePasajes}
                >
                  <Typography
                    variant="h6"
                    className="consultaDePasajesB"
                    id={hijo.hijo + "/" + index}
                  >
                    {hijo.expresion}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={5} className="jerarquiaBusquedaDerecha">
          <Typography variant="h5">
            {menuDerechoVerTambien(state.lang)}
          </Typography>
          <ul className="ulDeBusquedaVerTambien" key={listaVerTambien.id}>
            {listaVerTambien.map((lista, index) => (
              <li key={lista.id + "-" + index}>
                <Link
                  to={`${match.path.slice(0, 20)}/pasaje/${lista.id}`}
                  onClick={consultaDePasajes}
                >
                  <Typography
                    variant="h6"
                    className="consultaDePasajesB"
                    id={lista.id + "/" + index}
                  >
                    {lista.expresion + "  //  " + lista.traduccion}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={2} className={classes.boton}>
          {lang == "es" ? (
            <Button
              className={classes.imagenesBandera}
              onClick={clickChangeLanALVB}
            >
              <img className="banderaPasajes" src={al} />
            </Button>
          ) : (
              <Button
                className={classes.imagenesBandera}
                onClick={clickChangeLangEsVB}
              >
                <img className="banderaPasajes" src={es} />
              </Button>
            )}
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(resultadoBusqueda)(ResultadoBusquedaExpresion);
