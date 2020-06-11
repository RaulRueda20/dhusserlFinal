// React
import React from 'react';

// Elements
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

// Components
import ListaPadresExpresion from './ListaPadresExpresion';
import ListaHijosExpresion from './ListaHijosExpresion';

// Other req
import {menuDerechoJerarquia, menuDerechoJerarquiaDerivadaDe, menuDerechoJerarquiaExpresion, menuDerechoJerarquiaExpresionesDerivadas, menuDerechoVerTambien, menuDerechoReferenciasConsultadas} from '../../../../js/Language';
import {webService} from '../../../../js/webServices';
import * as localStore from '../../../../js/localStore';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0,.1)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {minHeight:'40px !important'},
})(MuiExpansionPanel);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
  },
}))(MuiExpansionPanelDetails);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0,0,0,.1) !important",
    '&$expanded': {
    },
  },
  content: {
    '&$expanded': {
      margin: '10px 0',
    },
  },
  expanded: {minHeight: "0px !important", height: "48px", alignItems: "center"},
})(MuiExpansionPanelSummary);

function MenuDerecho(props){
  const [referenciasConsultadasVista, setReferenciasConsultadasVista]=React.useState([])
  const [listaVerTambien,setListaVerTambien]=React.useState([]);
  const [hijos,setHijos]=React.useState([]);
  const [padres,setPadres]=React.useState([]);

  React.useEffect(()=>{
    if(localStore.getObjects("referenciasConsultadas")!=false){
      var store=localStore.getObjects("referenciasConsultadas")
      setReferenciasConsultadasVista(store)
    }
    if (props.expresionSeleccionada.id!=""){
      var service = "/vertambien/" + props.expresionSeleccionada.id
      webService(service, "GET", {}, data => {
        setListaVerTambien(data.data.response)
        webService(("/expresiones/"+props.language+"/hijosList/"+props.expresionSeleccionada.id),"GET", {}, (data) => {
          setHijos(data.data.response)
        })
        webService(("/expresiones/"+props.language+"/abuelosList/"+props.expresionSeleccionada.id), "GET", {}, (data2) =>{
          setPadres(data2.data.response)
        })
      })
    }
  },[props.expresionSeleccionada])

  function fixReferenciasConsultadas(expresion){
    var referencia = {
        clave: expresion[0].clave,
        expresion: expresion[0].expresion_original,
        traduccion: expresion[0].expresion_traduccion,
        id: expresion[0].id,
        index_de: expresion[0].index_de,
        index_es: expresion[0].index_es,
        pretty_e: expresion[0].epretty,
        pretty_t: expresion[0].tpretty,
        referencias : []
    }
    referencia.referencias.push({
        referencia_original : expresion[0].ref_original,
        referencia_traduccion : expresion[0].ref_traduccion,
        refid : expresion[0].refid,
        orden: expresion[0].orden,
    })
    return referencia
  }

  function handleFlagLetraMain(){
    props.setFlagLetraMain(false)
    var idExpresion = event.target.id.split("/")[0]
    var service = "/referencias/obtieneReferencias/" + idExpresion
    webService(service, "GET", {}, data => {
      var referencias = fixReferenciasConsultadas(data.data.response)
      if(localStore.getObjects("referenciasConsultadas")==false){
          var referenciasConsultadas = []
          referenciasConsultadas.push(referencias)
          localStore.setObjects("referenciasConsultadas",referenciasConsultadas)
      }else{
          var store = localStore.getObjects("referenciasConsultadas")
          store.push(referencias)
          localStore.setObjects("referenciasConsultadas",store)
      }
    })
  }

  return (
    <div className="contenedorMenuDerecho">
        <ExpansionPanel square expanded={props.expanded1} onChange={()=>props.setExpanded1(!props.expanded1)} className="panelPrincipal">
          <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>{menuDerechoJerarquia(props.lang)}</Typography>
          </ExpansionPanelSummary>
        <ExpansionPanelDetails className="panelDeDetallePadres">
          <Typography variant="caption" className="tagsMenuDerecho">
          {menuDerechoJerarquiaDerivadaDe(props.lang)}
          </Typography>
          <ul className="ulDelMenuDerechoPadres" key={padres.refid}>
            {padres.map((padre,index)=>
              <ListaPadresExpresion {...props} padre={padre} index={index} language={props.language} lang={props.lang} key={padre.id+'-'+index} setFlagLetraMain={props.setFlagLetraMain}/>
            )}
          </ul>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails className="panelDeDetalleExpresion">
          <Typography variant="caption" className="tagsMenuDerecho">{menuDerechoJerarquiaExpresion(props.lang)}</Typography>
          <ul className="ulDelMenuDerechoExpresion">
            <li>
              <Typography variant="h6" className="consultaDePasajes">{props.expresionSeleccionada.expresion}</Typography>
            </li>
          </ul>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails className={classNames([{"panelDeDetalleHijos" : listaVerTambien != "" }, "panelDeDetalleHijosLibres"])}>
          <Typography variant="caption" className="tagsMenuDerecho">{menuDerechoJerarquiaExpresionesDerivadas(props.lang)}</Typography>
          <ul className={classNames([{"ulDelMenuDerechoHijos" : listaVerTambien != "" }, "ulDelMenuDerechoHijosLibres"])}  key={hijos.refid}> 
            {hijos.map((hijo,index)=>(
              <ListaHijosExpresion {...props} hijo={hijo} index={index} language={props.language} lang={props.lang} key={hijo.id+"-"+index} setFlagLetraMain={props.setFlagLetraMain}/>
            ))}
          </ul>
        </ExpansionPanelDetails>
        </ExpansionPanel>
        {listaVerTambien != "" ? 
            <ExpansionPanel square expanded={props.expanded2} onChange={()=>props.setExpanded2(!props.expanded2)} className="panelPrincipal">
          <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>{menuDerechoVerTambien(props.lang)}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="panelDeDetalleVerTambien">
            <ul className="ulDelMenuDerechoVerTambien">
              {listaVerTambien.map((expresion,index)=>{
                return <li key={expresion.id+"-"+index}>
                  <Link to={`${props.match.path.slice(0,20)}/pasaje/${expresion.id}`} onClick={()=>handleFlagLetraMain()}>
                    <Typography className={"consultaDePasajes"} variant="h6" id={expresion.id+"/"+index}>{expresion.expresion + "  //  " + expresion.traduccion + "  --  " + expresion.id}</Typography>
                  </Link>
                </li>
              })}
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel> :
        null
        }
        <ExpansionPanel square expanded={props.expanded3} onChange={()=>props.setExpanded3(!props.expanded3)} className="panelPrincipal">
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>{menuDerechoReferenciasConsultadas(props.lang)}</Typography>
        </ExpansionPanelSummary>
          <ExpansionPanelDetails className="panelDeDetalleReferenciasConsultadas">
            <ul className="ulDelMenuDerechoReferenciasConsultadas">
              {referenciasConsultadasVista.map((consultas,index)=>(
                <Link to={`/husserl/pasaje/${consultas.id}/${consultas.referencias[0].refid}`} onClick={()=>handleFlagLetraMain()}  key={consultas.referencias[0].refid+"-"+index}>
                  <li className="bordeDeConsultas" key={consultas.referencias[0].refid+"-"+index}>
                      <Typography className="consultaDePasajes" variant="h6" id={consultas.id+"/"+index}>{consultas.expresion + "  :  " + consultas.referencias[0].referencia_original + "/" + consultas.referencias[0].referencia_traduccion}</Typography>
                  </li>
                </Link>
              ))}
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
  )
}

export default MenuDerecho; 
