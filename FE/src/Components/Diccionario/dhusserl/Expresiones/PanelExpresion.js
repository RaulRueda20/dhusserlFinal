// React
import React from "react";

// Components
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Icon from "@material-ui/core/Icon";
import Jerarquia from "@material-ui/icons/DeviceHub";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import classNames from "classnames";

// Elements

// Other req
import { webService } from "../../../../js/webServices";
import * as localStore from "../../../../js/localStore";
import { sesionStore } from "../../../../stores/sesionStore";
import { letraStore } from "../../../../stores/letraStore";
import { expresionStore } from "../../../../stores/expresionStore";

// CSS
import "../../../../css/expresiones.css";

export default function PanelExpresion(props) {
  const [open, setOpen] = React.useState(false);
  const global = React.useContext(sesionStore);
  const globalLetra = React.useContext(letraStore);
  const globalExpresion = React.useContext(expresionStore);
  const { expresion } = globalExpresion;
  const { id, expresion, referencias } = expresion;

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

  function guardadoDePasajes(event) {
    var refIdReferenciaConsultada = event.currentTarget.id.split("/")[0];
    var service =
      "/referencias/obtieneReferenciasIdRefId/" +
      id +
      "/" +
      refIdReferenciaConsultada;
    webService(service, "GET", {}, global.sesion, (data) => {
      var referencias = fixReferenciasConsultadas(data.data.response);
      /*if(localStore.getObjects("referenciasConsultadas")==false){
                var referenciasConsultadas = []
                referenciasConsultadas.push(referencias)
                localStore.setObjects("referenciasConsultadas",referenciasConsultadas)
            }else{
                var store = localStore.getObjects("referenciasConsultadas")
                store.push(referencias)
                localStore.setObjects("referenciasConsultadas",store)
            }*/
      var nuevasVisitadas = global.ultimasVisitadas;
      nuevasVisitadas.push(referencias);
      global.setUltimasVisitadas(nuevasVisitadas);
    });
    globalLetra.setLetraFlag(true);
  }

  function handleModal() {
    if (referencias[0].refid == null) {
      props.setOpenModalN(true);
    }
  }

  function htmlPrettyE() {
    return {
      __html:
        props.expresion.pretty_e + "<p> // </p>" + props.expresion.pretty_t,
    };
  }

  function htmlPrettyT() {
    return {
      __html:
        props.expresion.pretty_t + "<p> // </p>" + props.expresion.pretty_e,
    };
  }

  return (
    <div>
      <li
        className={classNames([
          {
            pasajeSeleccionado: id == props.expresionSeleccionada.id,
          },
          "sideList",
        ])}
        key={id + "-" + props.index}
        id={"expresion" + id}
        value={id}
      >
        <Grid container justify="center" alignItems="center">
          <Grid item xs={10} id={props.index} onClick={props.clickHandleVista}>
            <Link
              to={
                referencias[0].refid == null
                  ? "#"
                  : `${props.match.path.slice(0, 20)}/pasaje/${id}/${
                      referencias[0].refid
                    }`
              }
              onClick={handleModal}
            >
              <span
                className="Renglones"
                style={{}}
                dangerouslySetInnerHTML={htmlPrettyE()}
              />
            </Link>
          </Grid>
          <Grid item id={id} xs={1} onClick={() => setOpen(!open)}>
            {open == false ? (
              <Icon className="iconosIluminados">
                <ExpandMoreIcon />
              </Icon>
            ) : (
              <Icon className="iconosIluminados">
                <ExpandLessIcon />
              </Icon>
            )}
          </Grid>
          <Grid item xs={1}>
            <div
              id={id + "/" + expresion}
              onClick={(event) => props.getJerarquia(event)}
            >
              <Tooltip title="Jerarquía">
                <Icon className="iconosIluminados">
                  <Jerarquia />
                </Icon>
              </Tooltip>
            </div>
          </Grid>
        </Grid>
        <div>
          {open ? (
            <ul
              key={id}
              id={"referencias" + id}
              className="ulDelPanelDeExpresiones"
            >
              {referencias[0].refid == null
                ? "No hay ninguna referencia para esta expresión. Ver por favor la lista de expresiones derivadas."
                : referencias.map((referencia, index) => (
                    <li className="referencia" key={referencia + "/" + index}>
                      <Typography
                        variant="h6"
                        className={classNames([
                          { remarcadoDeReferencias: referencia.orden == 1 },
                        ])}
                      >
                        <Link
                          to={
                            referencia.refid == null
                              ? null
                              : `${props.match.path.slice(
                                  0,
                                  20
                                )}/pasaje/${id}/${referencia.refid}`
                          }
                          className="consultaDePasajes"
                          id={referencia.refid + "/" + index}
                          onClick={(event) => guardadoDePasajes(event)}
                        >
                          {referencia.refid +
                            "  :  " +
                            referencia.referencia_original +
                            "/" +
                            referencia.referencia_traduccion}
                        </Link>
                      </Typography>
                    </li>
                  ))}
            </ul>
          ) : null}
        </div>
      </li>
    </div>
  );
}
