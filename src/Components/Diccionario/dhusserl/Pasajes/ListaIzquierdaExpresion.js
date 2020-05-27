//React
import  React from 'react';

//Components
import PanelExpresionIzquierdo from './PanelExpresionIzquierdo';

//Other req
import * as localStore from '../../../../js/localStore';
// import { setFlagsFromString } from 'v8';

export default function ListaIzquierdaExpresiones(props){
  const [panelesAbiertos,setPanelesAbiertos] = React.useState([]);

  function clickHandleVista(event){
    var expresionClickeada=event.currentTarget.id.split("-")[0];
    var posicionExpresion=event.currentTarget.id.split("-")[1]
    var expresionesReferencias=props.expresiones[posicionExpresion];
    if(localStore.getObjects("referenciasConsultadas")==false){
      var referenciasConsultadas=[];
      referenciasConsultadas.push(expresionesReferencias)
      localStore.setObjects("referenciasConsultadas",referenciasConsultadas)
    }else{
      var store=localStore.getObjects("referenciasConsultadas")
      store.push(expresionesReferencias)
      localStore.setObjects("referenciasConsultadas",store)
    }
    props.setPosicionReferenciasConsultadas(posicionExpresion)
    props.setIdExpresion(expresionClickeada)
    props.setExpanded1(true)
    props.setExpanded2(true)
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

  React.useEffect(()=>{
    setTimeout(() => {
      if(document.getElementById("VP" + props.idExpresion) != null){
        document.getElementById("VP" + props.idExpresion).scrollIntoView()
      }
    }, 5000)
  },[props.idExpresion, props.expresionesGlobales])

  const handleScroll = e => {
    var element = e.target
    // console.log('Element', element)
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      console.log("Entre")
      props.setChunkList(props.expresiones.slice(0, props.chunkList.length + 20))
      props.setChunkListGlobal(props.expresionesGlobales.slice(0,props.chunkListGlobal.length + 20))
    }
  }

  return (
    <div className="listaIzquierda" onScroll={handleScroll}>
      {props.state.checkedA == false ?
        <ul>
          {props.chunkListGlobal.map((expresion, index)=>{
            return(
            <PanelExpresionIzquierdo {...props} key={expresion.id+"-"+index} expresion={expresion} handleClickPanel={handleClickPanel} clickHandleVista={clickHandleVista} index={index}
            getJerarquia={props.getJerarquia} idReferencias={props.idReferencias} setIdReferencias={props.setIdReferencias} expresionSeleccionada={props.expresionSeleccionada} 
            setFlagLetraMain={props.setFlagLetraMain} idExpresion={props.idExpresion}/> 
          )})}
        </ul>
      :
        <ul>
        {props.chunkList.map((expresion, index)=>{
          return(<PanelExpresionIzquierdo {...props} key={expresion.id+"-"+index} expresion={expresion} handleClickPanel={handleClickPanel} clickHandleVista={clickHandleVista} index={index}
          getJerarquia={props.getJerarquia} idReferencias={props.idReferencias} setIdReferencias={props.setIdReferencias} idExpresion={props.idExpresion} open={props.idExpresion == expresion.id}
          match={props.match} setFlagLetraMain={props.setFlagLetraMain} idExpresion={props.idExpresion}/>
          )})}
        </ul> 
      } 
    </div>
  )
}
