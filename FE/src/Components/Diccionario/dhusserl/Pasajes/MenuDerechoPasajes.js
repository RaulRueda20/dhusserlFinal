// React
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Elements
import { withStyles } from '@material-ui/core/styles';
import {
  Divider,
  Typography,
  Accordion as MuiExpansionPanel,
  AccordionSummary as MuiExpansionPanelSummary,
  AccordionDetails as MuiExpansionPanelDetails
} from '@material-ui/core'

import classNames from 'classnames';

// Components
import ListaPadresPasajes from "./LIstaPadresPasajes";
import ListaHijosPasajes from "./ListaHijosPasajes";

// Language
import { menuDerechoJerarquia, menuDerechoJerarquiaDerivadaDe, menuDerechoJerarquiaExpresion, menuDerechoJerarquiaExpresionesDerivadas, menuDerechoVerTambien, menuDerechoReferenciasConsultadas } from '../../../../js/Language';

// Other req
import { webService } from '../../../../js/webServices';
import { sesionStore } from '../../../../stores/sesionStore';

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
  expanded: { minHeight: '40px !important' },
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
  expanded: { minHeight: "0px !important", height: "48px", alignItems: "center" },
})(MuiExpansionPanelSummary);

const MenuDerechoPasajes = (props) => {
  const global = useContext(sesionStore);
  const { state, dispatch } = global
  const { lang, langLista, sesion, letra, ultimasVisitadas } = state

  const [referenciasConsultadasVista, setReferenciasConsultadasVista] = useState([])
  const [listaVerTambien, setListaVerTambien] = useState([]);
  const [hijos, setHijos] = useState([]);
  const [padres, setPadres] = useState([]);
  const [nombre, setNombre] = useState("")

  const emptyPasaje = { clave: "", epretty: "", expresion_original: "", expresion_traduccion: "", orden: "", pasaje_original: "", pasaje_traduccion: "", ref_original: "", ref_traduccion: "", refid: "", tpretty: "" }

  useEffect(() => {
    setTimeout(() => {
      if (document.getElementById("VP" + props.idExpresion) != null) {
        document.getElementById("VP" + props.idExpresion).scrollIntoView()
      }
    }, 1000);
    setReferenciasConsultadasVista(ultimasVisitadas)
    if (props.idExpresion != "") {
      var service = "/vertambien/" + props.idExpresion
      webService(service, "GET", {}, sesion, data => {
        setListaVerTambien(data.data.response)
        webService(("/expresiones/" + langLista + "/hijosList/" + props.idExpresion), "GET", {}, sesion, (data) => {
          setHijos(data.data.response)
        })
        webService(("/expresiones/" + langLista + "/abuelosList/" + props.idExpresion), "GET", {}, sesion, (data2) => {
          setPadres(data2.data.response)
        })
      })
    }
    var expresion_original = props.referenciaSeleccionada != null ? props.referenciaSeleccionada : emptyPasaje
    setNombre(expresion_original)
  }, [props.idExpresion, props.referenciaSeleccionada, letra])

  const fixReferenciasConsultadas = (expresion) => {
    var referencia = {
      clave: expresion[0].clave,
      expresion: expresion[0].expresion_original,
      traduccion: expresion[0].expresion_traduccion,
      id: expresion[0].id,
      index_de: expresion[0].index_de,
      index_es: expresion[0].index_es,
      pretty_e: expresion[0].epretty,
      pretty_t: expresion[0].tpretty,
      referencias: []
    }
    referencia.referencias.push({
      referencia_original: expresion[0].ref_original,
      referencia_traduccion: expresion[0].ref_traduccion,
      refid: expresion[0].refid,
      orden: expresion[0].orden,
    })
    return referencia
  }

  const handleFlagLetraMain = (event) => {
    setLetraFlag(false)
    var idExpresion = event.target.id.split("/")[0]
    var service = "/referencias/obtieneReferencias/" + idExpresion
    webService(service, "GET", {}, sesion, data => {
      var referencias = fixReferenciasConsultadas(data.data.response)
      let nuevasVisitadas = ultimasVisitadas;
      nuevasVisitadas.push(referencias);
      setUltimasVisitadas(nuevasVisitadas);
    });
  };

  return (
    <div className="contenedorMenuDerecho">
      <ExpansionPanel square expanded={props.expanded1} onChange={() => props.setExpanded1(!props.expanded1)} className="panelPrincipal">
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{menuDerechoJerarquia(lang)}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="panelDeDetallePadres">
          <Typography variant="caption">
            {menuDerechoJerarquiaDerivadaDe(lang)}
          </Typography>
          <ul className="ulDelMenuDerechoPadres" key={padres.refid}>
            {padres.map((padre, index) => (
              <ListaPadresPasajes {...props} padre={padre} index={index} key={padre.id + '-' + index} />
            ))}
          </ul>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelDetails className="panelDeDetalleExpresion">
          <Typography variant="caption">
            {menuDerechoJerarquiaExpresion(lang)}
          </Typography>
          <ul className="ulDelMenuDerechoExpresion">
            <li>
              <Typography
                key={nombre.refid}
                variant="h6"
                className="consultaDePasajes"
              >
                {nombre.expresion_original}
              </Typography>
            </li>
          </ul>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelDetails className={classNames([{ "panelDeDetalleHijos": listaVerTambien != "" }, "panelDeDetalleHijosLibres"])}>
          <Typography variant="caption">{menuDerechoJerarquiaExpresionesDerivadas(lang)}</Typography>
          <ul className="ulDelMenuDerechoHijos" className={classNames([{ "ulDelMenuDerechoHijos": listaVerTambien != "" }, "ulDelMenuDerechoHijosLibres"])} key={hijos.refid}>
            {hijos.map((hijo, index) => (
              <ListaHijosPasajes {...props} hijo={hijo} index={index} key={hijo.id + "-" + index} />
            ))}
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {listaVerTambien != "" ?
        <ExpansionPanel square expanded={props.expanded2} onChange={() => props.setExpanded2(!props.expanded2)} className="panelPrincipal">
          <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>{menuDerechoVerTambien(lang)}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="panelDeDetalleVerTambien">
            <ul className="ulDelMenuDerechoVerTambien">
              {listaVerTambien.map((expresion, index) => (
                <li key={expresion.id + "-" + index}>
                  <Link to={`${props.match.path.slice(0, 20)}/pasaje/${expresion.id}`} onClick={(event) => handleFlagLetraMain(event)}>
                    <Typography className={"consultaDePasajes"} variant="h6" id={expresion.id + "/" + index}>{expresion.expresion + "  //  " + expresion.traduccion + "  --  " + expresion.id}</Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        :
        null
      }
      <ExpansionPanel square expanded={props.expanded3} onChange={() => props.setExpanded3(!props.expanded3)} className="panelPrincipal">
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>{menuDerechoReferenciasConsultadas(lang)}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="panelDeDetalleReferenciasConsultadas">
          <ul className="ulDelMenuDerechoReferenciasConsultadas">
            {referenciasConsultadasVista.map((consultas, index) => (
              <Link key={"link" + index} to={`/diccionario/husserl/pasaje/${consultas.id}/${consultas.referencias[0].refid}`} onClick={(event) => handleFlagLetraMain(event)}>
                <li className="bordeDeConsultas" key={consultas.expresion + "-" + index} >
                  <Typography className={"consultaDePasajes"} variant="h6" id={consultas.id + "/" + index}>{consultas.expresion + "  :  " + consultas.referencias[0].referencia_original + "/" + consultas.referencias[0].referencia_traduccion}</Typography>
                </li>
              </Link>
            ))}
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default MenuDerechoPasajes;
