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
import "../../../../css/expresiones.css";

const PanelExpresionIzquierdo = (props) => {
  const global = useContext(sesionStore);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.expresion.id == props.match.params.expresion) {
      setOpen(true);
    }
  }, [props.match.params.expresion]);

  const fixReferenciasConsultadas = (expresion) => {
    let referencia = {
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
  };

  const handleVisitados = (event, index, referencia) => {
    if (
      document
        .getElementById(referencia + "/" + index)
        .className.indexOf("pasajesVisitados") == -1
    ) {
      document.getElementById(referencia + "/" + index).className +=
        " pasajesVisitados";
    }
    let idReferenciaConsultada = props.expresion.id;
    let refIdReferenciaConsultada = event.currentTarget.id.split("/")[0];
    let service =
      "/referencias/obtieneReferenciasIdRefId/" +
      idReferenciaConsultada +
      "/" +
      refIdReferenciaConsultada;
    console.log("service", service);
    webService(service, "GET", {}, global.sesion, ({ data }) => {
      const { response } = data;
      let referencias = fixReferenciasConsultadas(response);
      if (localStore.getObjects("referenciasConsultadas") == false) {
        let referenciasConsultadas = [];
        referenciasConsultadas.push(referencias);
        localStore.setObjects("referenciasConsultadas", referenciasConsultadas);
      } else {
        let store = localStore.getObjects("referenciasConsultadas");
        store.push(referencias);
        localStore.setObjects("referenciasConsultadas", store);
      }
      let nuevasVisitadas = global.ultimasVisitadas;
      nuevasVisitadas.push(referencias);
      global.setUltimasVisitadas(nuevasVisitadas);
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
      __html: props.expresion.pretty_e + "<p>//</p>" + props.expresion.pretty_t,
    };
  };

  return (
    <li
      className={classNames([
        { pasajeSeleccionado: props.expresion.id == props.idExpresion },
        "sideListIzquierdo",
      ])}
      key={props.expresion.id + "-" + props.index}
      id={"VP" + props.expresion.id}
      value={props.expresion.id}
    >
      <Grid container justify="center" alignItems="center">
        <Grid
          item
          xs={10}
          id={props.expresion.id + "-" + props.index}
          onClick={(event) => props.clickHandleVista(event)}
        >
          <Link
            to={`${props.match.path.slice(0, 20)}/pasaje/${
              props.expresion.id
            }/${props.expresion.referencias[0].refid}`}
          >
            <p className="Renglones" dangerouslySetInnerHTML={htmlPrettyE()} />
          </Link>
        </Grid>
        <Grid
          item
          id={"BTN" + props.expresion.id}
          xs={2}
          onClick={() => abrir("BTN" + props.expresion.id)}
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
            key={props.expresion.id}
            id={"referencias" + props.expresion.id}
            className="ulDelPanelDeExpresiones"
          >
            {props.expresion.referencias[0].refid == null
              ? "No hay ninguna referencia para esta expresión. Ver por favor la lista de expresiones derivadas."
              : props.expresion.referencias.map((referencia, index) => {
                  return (
                    <li className="referencia" id={"panel" + index}>
                      <Grid container justify="center" alignItems="center">
                        <Grid
                          item
                          xs={10}
                          id={props.expresion.id + "/" + props.index}
                        >
                          <Typography
                            variant="h6"
                            className={classNames([
                              { remarcadoDeReferencias: referencia.orden == 1 },
                            ])}
                          >
                            <Link
                              to={`${props.match.path.slice(0, 20)}/pasaje/${
                                props.expresion.id
                              }/${referencia.refid}`}
                              className="consultaDePasajes"
                              onClick={(event) =>
                                handleVisitados(event, index, referencia.refid)
                              }
                              id={referencia.refid + "/" + index}
                            >
                              {referencia.refid +
                                "  :  " +
                                referencia.referencia_original +
                                "/" +
                                referencia.referencia_traduccion}
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
