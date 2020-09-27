//React 
import  React from 'react';

// Elements

import classNames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';

//Components
import PanelExpresion from './PanelExpresion';

//Other req
import * as localStore from '../../../../js/localStore';
import { sesionStore } from '../../../../sesionStore';

const useStyles = makeStyles(theme => ({
  listContainer:{
    [theme.breakpoints.up('sm')]: {
      height: "calc(100vh - 9vh - 31px) !important",
      overflowY: "scroll", 
      overflowX: "hidden",
    },
    [theme.breakpoints.down('sm')]: {
      height: "47vh",
      overflowY: "scroll", 
    },
    width: "auto",
    backgroundColor: "rgb(245,245,245)",
    marginLeft: "30px !important",
    marginRight: "30px !important"
  },
  listContainer2:{
    height: "calc(100vh - 9vh - 84px) !important",
      overflowY: "scroll", 
      overflowX: "hidden",
  }
}))

export default function ListaExpresiones(props){
  const global = React.useContext(sesionStore);
  const classes = useStyles();
  const theme = useTheme();
  const [panelesAbiertos,setPanelesAbiertos] = React.useState([]);

  function clickHandleVista(event){
    if(!props.flagDeBusqueda){
      var expresionesReferencias=props.expresiones[event.currentTarget.id];
    }else{
      var expresionesReferencias=props.expresionesGlobales[[event.currentTarget.id]]
    }
    if(localStore.getObjects("referenciasConsultadas")==false){
      var referenciasConsultadas=[];
      referenciasConsultadas.push(expresionesReferencias)
      localStore.setObjects("referenciasConsultadas",referenciasConsultadas)
    }else{
      var store=localStore.getObjects("referenciasConsultadas")
      store.push(expresionesReferencias)
      localStore.setObjects("referenciasConsultadas",store)
    }
    var nuevasVisitadas = global.ultimasVisitadas
    nuevasVisitadas.push(expresionesReferencias)
    global.setUltimasVisitadas(nuevasVisitadas)
  }

  function handleClickPanel(event){
    var expresionesAbiertas=panelesAbiertos;
    props.setIdExpresion(event.currentTarget.id)
    if(expresionesAbiertas.indexOf(event.currentTarget.id)>-1){
      expresionesAbiertas.splice(expresionesAbiertas.indexOf(event.currentTarget.id),1)
    }else{
      expresionesAbiertas.push(event.currentTarget.id)
    }
      setPanelesAbiertos(expresionesAbiertas)
  }
  
  const handleScroll = e => {
    var element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      props.setChunkList(props.expresiones.slice(0, props.chunkList.length + 20))
      props.setChunkListGlobal(props.expresionesGlobales.slice(0,props.chunkListGlobal.length + 20))
    }
  }

  return (
    <div id={"contendor"} onScroll={handleScroll}>
      <div className={classNames([{[classes.listContainer2] : props.menuEscondido == true}, classes.listContainer])}>
        <ul id="listaIzquierda">
          {props.chunkList.map((expresion, index)=>{
            return(
            <PanelExpresion match={props.match} key={expresion.id+"-"+index} expresion={expresion} handleClickPanel={handleClickPanel} clickHandleVista={clickHandleVista} index={index}
            getJerarquia={props.getJerarquia} idReferencias={props.idReferencias} setIdReferencias={props.setIdReferencias} expresionSeleccionada={props.expresionSeleccionada}
            setFlagLetraMain={props.setFlagLetraMain} setOpenModalN={props.setOpenModalN} lenguaje={props.lenguaje}/> 
          )})}
        </ul>
      </div>
    </div>
  );
}