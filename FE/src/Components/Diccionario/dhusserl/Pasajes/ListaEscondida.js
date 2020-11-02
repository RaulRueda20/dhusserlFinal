//React
import  React from 'react';

//Components
import PanelExpresionIzquierdo from './PanelExpresionIzquierdo';

//Elements
import * as localStore from '../../../../js/localStore';
import { sesionStore } from '../../../../stores/sesionStore';

function ListaEscondida(props){
  const [panelesAbiertos,setPanelesAbiertos] = React.useState([]);
  const global = React.useContext(sesionStore);
  function clickHandleVista(event){
    var expresionClickeada=event.currentTarget.id.split("-")[0];
    var posicionExpresion=event.currentTarget.id.split("-")[1]
    var expresionesReferencias=props.expresiones[posicionExpresion];
    /*if(localStore.getObjects("referenciasConsultadas")==false){
      var referenciasConsultadas=[];
      referenciasConsultadas.push(expresionesReferencias)
      localStore.setObjects("referenciasConsultadas",referenciasConsultadas)
    }else{
      var store=localStore.getObjects("referenciasConsultadas")
      store.push(expresionesReferencias)
      localStore.setObjects("referenciasConsultadas",store)
    }*/
    var nuevasVisitadas = global.ultimasVisitadas
    nuevasVisitadas.push(expresionesReferencias)
    global.setUltimasVisitadas(nuevasVisitadas)
    props.setIdExpresion(expresionClickeada)
    props.setExpanded1(true)
    props.setExpanded2(true)
  }


  function handleClickPanel(event){
    var expresionesAbiertas=panelesAbiertos;
    var referenciasPrincipales= event.currentTarget.value;
    console.log("referenciasprincipales", referenciasPrincipales)
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
  },[props.idExpresion])

  return (
      <div className="listaIzquierdaEscondida">
        <ul key={props.expresiones.id}>
          {props.chunkList.map((expresion, index)=>(
            <PanelExpresionIzquierdo {...props} key={expresion.id+"-"+index} expresion={expresion} handleClickPanel={handleClickPanel} clickHandleVista={clickHandleVista} index={index}
            getJerarquia={props.getJerarquia} idReferencias={props.idReferencias} setIdReferencias={props.setIdReferencias} idExpresion={props.idExpresion} idExpresion={props.idExpresion}/>
          ))}
        </ul>  
    </div>
  )
}

export default ListaEscondida; 