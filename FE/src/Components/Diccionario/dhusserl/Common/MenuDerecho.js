// React
import React, { useContext, useState, useEffect } from "react";

// Elements
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Accordion as MuiExpansionPanel,
  AccordionSummary as MuiExpansionPanelSummary,
  AccordionDetails as MuiExpansionPanelDetails,
} from "@material-ui/core";
import classNames from "classnames";

// Components
import ListaPadresExpresion from "./ListaPadres";
import ListaHijosExpresion from "./ListaHijos";

// Other req
import {
  menuDerechoJerarquia,
  menuDerechoJerarquiaDerivadaDe,
  menuDerechoJerarquiaExpresion,
  menuDerechoJerarquiaExpresionesDerivadas,
  menuDerechoVerTambien,
  menuDerechoReferenciasConsultadas,
} from "../../../../js/Language";
import { webService } from "../../../../js/webServices";

import { sesionStore } from "../../../../stores/sesionStore";
import { expresionesStore } from "../../../../stores/expresionStore";

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0,.1)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: { minHeight: "40px !important" },
})(MuiExpansionPanel);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {},
}))(MuiExpansionPanelDetails);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0,0,0,.1) !important",
    "&$expanded": {},
  },
  content: {
    "&$expanded": {
      margin: "10px 0",
    },
  },
  expanded: {
    minHeight: "0px !important",
    height: "48px",
    alignItems: "center",
  },
})(MuiExpansionPanelSummary);

const MenuDerecho = (props) => {
  const {
    expanded1,
    setExpanded1,
    expanded2,
    setExpanded2,
    expanded3,
    setExpanded3,
    match,
  } = props;
  const global = useContext(sesionStore);
  const { state, dispatch } = global;
  const { sesion, ultimasVisitadas, lang, langLista } = state;

  const globalExpresion = useContext(expresionesStore);
  const { store } = globalExpresion;
  const { expresionSeleccionada } = store;

  const [listaVerTambien, setListaVerTambien] = useState([]);
  const [hijos, setHijos] = useState([]);
  const [padres, setPadres] = useState([]);

  useEffect(() => {
    console.log("ultimasVisitadas", ultimasVisitadas);
    if (expresionSeleccionada) {
      let service = "/vertambien/" + expresionSeleccionada.id;
      webService(service, "GET", {}, sesion, ({ data }) => {
        setListaVerTambien(data.response);
        webService(
          "/expresiones/" +
            langLista +
            "/hijosList/" +
            expresionSeleccionada.id,
          "GET",
          {},
          sesion,
          (data) => {
            // console.log("hijo", data.data.response);
            setHijos(data.data.response);
          }
        );
        webService(
          "/expresiones/" +
            langLista +
            "/abuelosList/" +
            expresionSeleccionada.id,
          "GET",
          {},
          sesion,
          (data2) => {
            // console.log("padre", data2.data.response);
            setPadres(data2.data.response);
          }
        );
      });
    }
  }, [expresionSeleccionada, ultimasVisitadas]);

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

  const handleFlagLetraMain = (event) => {
    const idExpresion = event.target.id.split("/")[0];
    const service = "/referencias/obtieneReferencias/" + idExpresion;
    webService(service, "GET", {}, sesion, (data) => {
      const referencias = fixReferenciasConsultadas(data.data.response);
      let nuevasVisitadas = ultimasVisitadas;
      nuevasVisitadas.push(referencias);
      console.log("Expresiones visitadas", nuevasVisitadas);
      dispatch({
        type: "SET_ULTIMAS_VISITADAS",
        payload: nuevasVisitadas,
      });
    });
  };

  return (
    <div className="contenedorMenuDerecho">
      <ExpansionPanel
        square
        expanded={expanded1}
        onChange={() => setExpanded1(!expanded1)}
        className="panelPrincipal"
      >
        <ExpansionPanelSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography>{menuDerechoJerarquia(lang)}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="panelDeDetallePadres">
          <Typography letiant="caption" className="tagsMenuDerecho">
            {menuDerechoJerarquiaDerivadaDe(lang)}
          </Typography>
          <ul className="ulDelMenuDerechoPadres" key={padres.refid}>
            {padres.map((padre, index) => (
              <ListaPadresExpresion
                {...props}
                padre={padre}
                index={index}
                key={padre.id + "-" + index}
              />
            ))}
          </ul>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails className="panelDeDetalleExpresion">
          <Typography letiant="caption" className="tagsMenuDerecho">
            {menuDerechoJerarquiaExpresion(lang)}
          </Typography>
          <ul className="ulDelMenuDerechoExpresion">
            <li>
              <Typography
                variant="body1"
                className="consultaDePasajes"
                style={{
                  fontWeight: 500,
                }}
              >
                {expresionSeleccionada?.expresion}
              </Typography>
            </li>
          </ul>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails
          className={classNames([
            { panelDeDetalleHijos: listaVerTambien != "" },
            "panelDeDetalleHijosLibres",
          ])}
        >
          <Typography letiant="caption" className="tagsMenuDerecho">
            {menuDerechoJerarquiaExpresionesDerivadas(lang)}
          </Typography>
          <ul
            className={classNames([
              { ulDelMenuDerechoHijos: listaVerTambien != "" },
              "ulDelMenuDerechoHijosLibres",
            ])}
            key={hijos.refid}
          >
            {hijos.map((hijo, index) => (
              <ListaHijosExpresion
                {...props}
                hijo={hijo}
                index={index}
                key={hijo.id + "-" + index}
              />
            ))}
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {listaVerTambien != "" ? (
        <ExpansionPanel
          square
          expanded={expanded2}
          onChange={() => setExpanded2(!expanded2)}
          className="panelPrincipal"
        >
          <ExpansionPanelSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography>{menuDerechoVerTambien(lang)}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="panelDeDetalleVerTambien">
            <ul className="ulDelMenuDerechoVerTambien">
              {listaVerTambien.map((expresion, index) => {
                return (
                  <li
                    className="bordeDeConsultas"
                    key={expresion.id + "-" + index}
                  >
                    <Link
                      to={`${match.path.slice(0, 20)}/pasaje/${expresion.id}`}
                      onClick={(event) => handleFlagLetraMain(event)}
                    >
                      <Typography
                        className={"consultaDePasajes"}
                        letiant="h6"
                        id={expresion.id + "/" + index}
                      >
                        {expresion.expresion +
                          "  //  " +
                          expresion.traduccion +
                          "  --  " +
                          expresion.id}
                      </Typography>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ) : null}
      <ExpansionPanel
        square
        expanded={expanded3}
        onChange={() => setExpanded3(!expanded3)}
        className="panelPrincipal"
      >
        <ExpansionPanelSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography>{menuDerechoReferenciasConsultadas(lang)}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="panelDeDetalleReferenciasConsultadas">
          <ul className="ulDelMenuDerechoReferenciasConsultadas">
            {ultimasVisitadas.map((consultas, index) => {
              return (
                <Link
                  to={`${match.path.slice(0, 20)}/pasaje/${consultas.id}/${
                    consultas.referencias[0].refid
                  }`}
                  onClick={(event) => handleFlagLetraMain(event)}
                  key={consultas.referencias[0].refid + "-" + index}
                >
                  <li
                    className="bordeDeConsultas"
                    key={consultas.referencias[0].refid + "-" + index}
                  >
                    <Typography
                      className="consultaDePasajes"
                      letiant="h6"
                      id={consultas.id + "/" + index}
                    >
                      {consultas.nombreExpresion +
                        "  :  " +
                        consultas.referencias[0].referencia_original +
                        "/" +
                        consultas.referencias[0].referencia_traduccion}
                    </Typography>
                  </li>
                </Link>
              );
            })}
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default MenuDerecho;
