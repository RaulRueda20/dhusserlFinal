import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import {
  MuiExpansionPanel,
  MuiExpansionPanelSummary,
  MuiExpansionPanelDetails,
  Divider,
  Typography,
} from "@material-ui/core";

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
import { languageStore } from "../../../../stores/languageStore";
import { letraStore } from "../../../../stores/letraStore";

import ListaPadresBajo from "./ListaPadresBajo";
import ListaHijosBajo from "./ListaHijosBajo";

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
    backgroundColor: "rgba(0,0,0,.11) !important",
    "&$expanded": {},
  },
  content: {
    "&$expanded": {
      margin: "5px 0",
    },
  },
  expanded: {
    minHeight: "0px !important",
    height: "48px",
    alignItems: "center",
  },
})(MuiExpansionPanelSummary);

const MenuBajo = (props) => {
  const global = useContext(sesionStore);
  const globalLanguage = useContext(languageStore);
  const globalLetra = useContext(letraStore);
  const [
    referenciasConsultadasVista,
    setReferenciasConsultadasVista,
  ] = useState([]);
  const [listaVerTambien, setListaVerTambien] = useState([]);
  const [hijos, setHijos] = useState([]);
  const [padres, setPadres] = useState([]);

  useEffect(() => {
    /*if(localStore.getObjects("referenciasConsultadas")!=false){
            let referenciaConsultadaSacada = localStore.getObjects("referenciasConsultadas")
            setReferenciasConsultadasVista(referenciaConsultadaSacada)
            }*/
    setReferenciasConsultadasVista(global.ultimasVisitadas);
    if (props.idExpresion != "") {
      let service = "/vertambien/" + props.idExpresion;
      webService(service, "GET", {}, global.sesion, ({ data }) => {
        const { response } = data;
        setListaVerTambien(response);
        webService(
          "/expresiones/" +
            globalLanguage.langLista +
            "/hijosList/" +
            props.idExpresion,
          "GET",
          {},
          global.sesion,
          ({ data }) => {
            const { responseH } = data;
            setHijos(responseH);
          }
        );
        webService(
          "/expresiones/" +
            globalLanguage.langLista +
            "/abuelosList/" +
            props.idExpresion,
          "GET",
          {},
          global.sesion,
          ({ data }) => {
            const { responseP } = data;
            setPadres(responseP);
          }
        );
      });
    }
  }, [props.expresionSeleccionada]);

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
    globalLetra.setLetraFlag(false);
    let idExpresion = event.target.id.split("/")[0];
    let service = "/referencias/obtieneReferencias/" + idExpresion;
    webService(service, "GET", {}, global.sesion, ({ data }) => {
      const { response } = data;
      let referencias = fixReferenciasConsultadas(response);
      /*if(localStore.getObjects("referenciasConsultadas")==false){
                let referenciasConsultadas = []
                referenciasConsultadas.push(referencias)
                localStore.setObjects("referenciasConsultadas",referenciasConsultadas)
            }else{
                let store = localStore.getObjects("referenciasConsultadas")
                store.push(referencias)
                localStore.setObjects("referenciasConsultadas",store)
            }*/
      let nuevasVisitadas = global.ultimasVisitadas;
      nuevasVisitadas.push(referencias);
      global.setUltimasVisitadas(nuevasVisitadas);
    });
  };

  return (
    <div className="contenedorMenuBajo" xs={12}>
      <ExpansionPanel
        square
        expanded={props.expanded1}
        onChange={() => props.setExpanded1(!props.expanded1)}
        className="panelPrincipal"
      >
        <ExpansionPanelSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography>{menuDerechoJerarquia(globalLanguage.lang)}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="panelDeDetallePadres">
          <Typography variant="caption" className="tagsMenuDerecho">
            {menuDerechoJerarquiaDerivadaDe(globalLanguage.lang)}
          </Typography>
          <ul className="ulDelMenuDerechoPadres" key={padres.refid}>
            {padres.map((padre, index) => (
              <ListaPadresBajo
                {...props}
                padre={padre}
                index={index}
                key={padre.id + "-" + index}
              />
            ))}
          </ul>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelDetails className="panelDeDetalleExpresion">
          <Typography variant="caption" className="tagsMenuDerecho">
            {menuDerechoJerarquiaExpresion(props.lang)}
          </Typography>
          <ul className="ulDelMenuDerechoExpresion">
            <li>
              <Typography variant="h6" className="consultaDePasajes">
                {props.expresionSeleccionada.expresion}
              </Typography>
            </li>
          </ul>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelDetails className="panelDeDetalleHijos">
          <Typography variant="caption" className="tagsMenuDerecho">
            {menuDerechoJerarquiaExpresionesDerivadas(props.lang)}
          </Typography>
          <ul className="ulDelMenuDerechoHijos" key={hijos.refid}>
            {hijos.map((hijo, index) => (
              <ListaHijosBajo
                {...props}
                hijo={hijo}
                index={index}
                key={hijo.id + "-" + index}
                letraMain={props.letraMain}
                setLetraMain={props.setLetraMain}
                setFlagLetraMain={props.setFlagLetraMain}
              />
            ))}
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {listaVerTambien != "" ? (
        <ExpansionPanel
          square
          expanded={props.expanded2}
          onChange={() => props.setExpanded2(!props.expanded2)}
          className="panelPrincipal"
        >
          <ExpansionPanelSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography>
              {menuDerechoVerTambien(globalLanguage.lang)}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="panelDeDetalleVerTambien">
            <ul className="ulDelMenuDerechoVerTambien">
              {listaVerTambien.map((expresion, index) => {
                return (
                  <li key={expresion.id + "-" + index}>
                    <Link
                      to={`/husserl/pasaje/${expresion.id}`}
                      onClick={(event) => handleFlagLetraMain(event)}
                    >
                      <Typography
                        className={"consultaDePasajes"}
                        variant="h6"
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
        expanded={props.expanded3}
        onChange={() => props.setExpanded3(!props.expanded3)}
        className="panelPrincipal"
      >
        <ExpansionPanelSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography>
            {menuDerechoReferenciasConsultadas(globalLanguage.lang)}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="panelDeDetalleReferenciasConsultadas">
          <ul className="ulDelMenuDerechoReferenciasConsultadas">
            {referenciasConsultadasVista.map((consultas, index) => (
              <li
                className="bordeDeConsultas"
                key={consultas.referencias[0].refid + "-" + index}
              >
                <Link
                  key={"link" + index}
                  to={`/husserl/pasaje/${consultas.id}/${consultas.referencias[0].refid}`}
                  onClick={(event) => handleFlagLetraMain(event)}
                >
                  <Typography
                    className={"consultaDePasajes"}
                    variant="h6"
                    id={consultas.id + "/" + index}
                  >
                    {consultas.expresion +
                      "  //  " +
                      consultas.traduccion +
                      "  --  " +
                      consultas.referencias[0].refid}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default MenuBajo;
