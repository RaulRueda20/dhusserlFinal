//React
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

// Elements
import { Icon, Grid, Typography } from "@material-ui/core";
import classNames from "classnames";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

// Other req
import { webService } from "../../../../js/webServices";
import * as localStore from "../../../../js/localStore";
import { sesionStore } from "../../../../stores/sesionStore";
import { expresionesStore } from "../../../../stores/expresionStore";
import "../../../../css/expresiones.css";

const PanelExpresionIzquierdo = ({
  match,
  expresion,
  index,
  getJerarquia,
  idExpresion,
}) => {
  const global = useContext(sesionStore);
  const { state, dispatch } = global;
  const { sesion } = state;

  const globalExpresion = useContext(expresionesStore);
  const { store } = globalExpresion;
  const { expresiones } = store;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (expresion?.id == match?.params?.expresion) {
      setOpen(true);
    }
  }, [match?.params?.expresion]);

  const clickHandleVista = (event, index, referencia, expresionId) => {
    setTimeout(() => {
      if (
        document
          .getElementById(expresionId + "/" + referencia + "/" + index)
          .className.indexOf("pasajesVisitados") == -1
      ) {
        document.getElementById(
          expresionId + "/" + referencia + "/" + index
        ).className += " pasajesVisitados";
      }
    }, 1000);

    const { id } = event.currentTarget;
    const expresionesReferencias = expresiones[parseInt(id.split("-")[1])];

    if (!localStore.getObjects("ultimasVisitadas")) {
      let referenciasConsultadas = [];
      referenciasConsultadas.push(expresionesReferencias);
      localStore.setObjects("ultimasVisitadas", referenciasConsultadas);
      dispatch({
        type: "SET_ULTIMAS_VISITADAS",
        payload: referenciasConsultadas,
      });
    } else {
      let referenciasConsultadas = localStore.getObjects("ultimasVisitadas");
      referenciasConsultadas.push(expresionesReferencias);
      localStore.setObjects("ultimasVisitadas", referenciasConsultadas);
      dispatch({
        type: "SET_ULTIMAS_VISITADAS",
        payload: referenciasConsultadas,
      });
    }
  };

  const fixReferenciasConsultadas = (e) => {
    let referencia = {
      clave: e[0].clave,
      nombreExpresion: e[0].expresion_original,
      traduccion: e[0].expresion_traduccion,
      id: e[0].id,
      index_de: e[0].index_de,
      index_es: e[0].index_es,
      pretty_e: e[0].epretty,
      pretty_t: e[0].tpretty,
      referencias: [],
    };
    referencia.referencias.push({
      referencia_original: e[0].ref_original,
      referencia_traduccion: e[0].ref_traduccion,
      refid: e[0].refid,
      orden: e[0].orden,
    });
    return referencia;
  };

  const guardadoDePasajes = (event) => {
    let idReferenciaConsultada = expresion.id;
    let refIdReferenciaConsultada = event.currentTarget.id.split("/")[0];
    let service =
      "/referencias/obtieneReferenciasIdRefId/" +
      idReferenciaConsultada +
      "/" +
      refIdReferenciaConsultada;
    webService(service, "GET", {}, sesion, ({ data }) => {
      const { response } = data;
      const referencias = fixReferenciasConsultadas(response);
      if (!localStore.getObjects("ultimasVisitadas")) {
        let referenciasConsultadas = [];
        referenciasConsultadas.push(referencias);
        localStore.setObjects("ultimasVisitadas", referenciasConsultadas);
        dispatch({
          type: "SET_ULTIMAS_VISITADAS",
          payload: referenciasConsultadas,
        });
      } else {
        let referenciasConsultadas = localStore.getObjects("ultimasVisitadas");
        referenciasConsultadas.push(referencias);
        localStore.setObjects("ultimasVisitadas", referenciasConsultadas);
        dispatch({
          type: "SET_ULTIMAS_VISITADAS",
          payload: referenciasConsultadas,
        });
      }
    });
  };

  const abrir = (id) => {
    setOpen(!open);
    !open
      ? document.getElementById(id).classList.add("abierto")
      : document.getElementById(id).classList.remove("abierto");
  };

  const htmlPrettyE = () => {
    return {
      __html: expresion.pretty_e + "<p>//</p>" + expresion.pretty_t,
    };
  };

  return (
    <li
      className={classNames([
        { pasajeSeleccionado: expresion.id == idExpresion },
        "sideListIzquierdo",
      ])}
      key={expresion.id + "-" + index}
      id={"VP" + expresion.id}
      value={expresion.id}
    >
      <Grid container justify="center" alignItems="center">
        <Grid
          item
          xs={10}
          id={expresion.id + "-" + index}
          onClick={(e) =>
            clickHandleVista(e, 0, expresion.referencias[0].refid, expresion.id)
          }
        >
          <Link
            to={
              expresion.referencias[0].refid == null
                ? `${match.path.slice(0, 20)}/pasaje/${expresion.id}`
                : `${match.path.slice(0, 20)}/pasaje/${expresion.id}/${
                    expresion.referencias[0].refid
                  }`
            }
          >
            <p className="Renglones" dangerouslySetInnerHTML={htmlPrettyE()} />
          </Link>
        </Grid>
        <Grid
          item
          id={"BTN" + expresion.id}
          xs={2}
          onClick={() => abrir("BTN" + expresion.id)}
        >
          {!open ? (
            <Icon className="iconosIluminados">
              <ExpandMoreIcon />
            </Icon>
          ) : (
            <Icon className="iconosIluminados">
              <ExpandLessIcon />
            </Icon>
          )}
        </Grid>
      </Grid>
      <div>
        {open ? (
          <ul
            key={expresion?.id}
            id={"referencias" + expresion?.id}
            className="ulDelPanelDeExpresiones"
          >
            {expresion?.referencias[0]?.refid == null
              ? "No hay ninguna referencia para esta expresión. Ver por favor la lista de expresiones derivadas."
              : expresion?.referencias.map((referencia, index) => {
                  // console.log("referencia", referencia);
                  return (
                    <li className="referencia" id={"panel" + index}>
                      <Grid container justify="center" alignItems="center">
                        <Grid item xs={10} id={expresion?.id + "/" + index}>
                          <Typography
                            variant="h6"
                            className={classNames([
                              {
                                remarcadoDeReferencias: referencia?.orden == 1,
                              },
                            ])}
                          >
                            <Link
                              to={`${match?.path.slice(0, 20)}/pasaje/${
                                expresion?.id
                              }/${referencia?.refid}`}
                              className="consultaDePasajes"
                              onClick={(e) => guardadoDePasajes(e)}
                              id={`${expresion?.id}/${referencia?.refid}/${index}`}
                            >
                              {referencia?.refid +
                                "  :  " +
                                referencia?.referencia_original +
                                "/" +
                                referencia?.referencia_traduccion}
                            </Link>
                          </Typography>
                        </Grid>
                      </Grid>
                    </li>
                  );
                })}
          </ul>
        ) : null}
      </div>
    </li>
  );
};

export default PanelExpresionIzquierdo;
