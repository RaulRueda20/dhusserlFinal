//React
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

// Elements
import { Icon, Grid, Typography } from "@material-ui/core";
import classNames from "classnames";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

// Other req
import * as localStore from "../../../../js/localStore";
import { sesionStore } from "../../../../stores/sesionStore";
import { expresionesStore } from "../../../../stores/expresionStore";
import "../../../../css/expresiones.css";

const PanelExpresionIzquierdo = (props) => {
  const global = useContext(sesionStore);
  const { dispatch } = global;

  const globalExpresion = useContext(expresionesStore);
  const { store } = globalExpresion;
  const { expresiones } = store;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.expresion.id == props.match.params.expresion) {
      setOpen(true);
    }
  }, [props.match.params.expresion]);

  const handleVisitados = (event, index, referencia) => {
    if (
      document
        .getElementById(referencia + "/" + index)
        ?.className.indexOf("pasajesVisitados") == -1
    ) {
      document.getElementById(referencia + "/" + index).className +=
        " pasajesVisitados";
    }

    const expresionesReferencias = expresiones[props.index];
    expresionesReferencias.nombreExpresion = expresionesReferencias.expresion;
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
    // });
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
          onClick={(event) =>
            handleVisitados(event, 0, props.expresion.referencias[0].refid)
          }
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
