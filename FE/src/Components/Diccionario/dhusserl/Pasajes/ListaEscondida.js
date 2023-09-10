//React
import React, { useState, useContext, useEffect } from "react";

//Components
import PanelExpresionIzquierdo from "./PanelExpresionIzquierdo";

//Elements
import { sesionStore } from "../../../../stores/sesionStore";

const ListaEscondida = (props) => {
  const [panelesAbiertos, setPanelesAbiertos] = useState([]);
  const global = useContext(sesionStore);

  const clickHandleVista = (event) => {
    let expresionClickeada = event.currentTarget.id.split("-")[0];
    let posicionExpresion = event.currentTarget.id.split("-")[1];
    let expresionesReferencias = props.expresiones[posicionExpresion];
    /*if(localStore.getObjects("referenciasConsultadas")==false){
      let referenciasConsultadas=[];
      referenciasConsultadas.push(expresionesReferencias)
      localStore.setObjects("referenciasConsultadas",referenciasConsultadas)
    }else{
      let store=localStore.getObjects("referenciasConsultadas")
      store.push(expresionesReferencias)
      localStore.setObjects("referenciasConsultadas",store)
    }*/
    let nuevasVisitadas = global.ultimasVisitadas;
    nuevasVisitadas.push(expresionesReferencias);
    global.setUltimasVisitadas(nuevasVisitadas);
    props.setIdExpresion(expresionClickeada);
    props.setExpanded1(true);
    props.setExpanded2(true);
  };

  const handleClickPanel = (event) => {
    let expresionesAbiertas = panelesAbiertos;
    props.setIdExpresion(event.currentTarget.id);
    if (expresionesAbiertas.indexOf(event.currentTarget.id) > -1) {
      expresionesAbiertas.splice(
        expresionesAbiertas.indexOf(event.currentTarget.id),
        1
      );
    } else {
      expresionesAbiertas.push(event.currentTarget.id);
    }
    setPanelesAbiertos(expresionesAbiertas);
  };

  useEffect(() => {
    setTimeout(() => {
      if (document.getElementById("VP" + props.idExpresion) != null) {
        document.getElementById("VP" + props.idExpresion).scrollIntoView();
      }
    }, 5000);
  }, [props.idExpresion]);

  return (
    <div className="listaIzquierdaEscondida">
      <ul key={props.expresiones.id}>
        {props.chunkList.map((expresion, index) => (
          <PanelExpresionIzquierdo
            {...props}
            key={expresion.id + "-" + index}
            expresion={expresion}
            handleClickPanel={handleClickPanel}
            clickHandleVista={clickHandleVista}
            index={index}
            getJerarquia={props.getJerarquia}
            idReferencias={props.idReferencias}
            setIdReferencias={props.setIdReferencias}
            idExpresion={props.idExpresion}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListaEscondida;
