//React
import React, { useState, useEffect } from "react";

//Components
import PanelExpresionIzquierdo from "./PanelExpresionIzquierdo";

//Other req
import * as localStore from "../../../../js/localStore";
import { sesionStore } from "../../../../stores/sesionStore";

const ListaIzquierdaExpresiones = (props) => {
  const [panelesAbiertos, setPanelesAbiertos] = useState([]);
  const global = useContext(sesionStore);

  const clickHandleVista = (event) => {
    let expresionClickeada = event.currentTarget.id.split("-")[0];
    let posicionExpresion = event.currentTarget.id.split("-")[1];
    let expresionesReferencias = props.expresiones[posicionExpresion];
    if (localStore.getObjects("referenciasConsultadas") == false) {
      let referenciasConsultadas = [];
      referenciasConsultadas.push(expresionesReferencias);
      localStore.setObjects("referenciasConsultadas", referenciasConsultadas);
    } else {
      let store = localStore.getObjects("referenciasConsultadas");
      store.push(expresionesReferencias);
      localStore.setObjects("referenciasConsultadas", store);
    }
    let nuevasVisitadas = global.ultimasVisitadas;
    nuevasVisitadas.push(expresionesReferencias);
    global.setUltimasVisitadas(nuevasVisitadas);
    props.setPosicionReferenciasConsultadas(posicionExpresion);
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
    if (document.getElementById("listaIzquierda").firstChild != null)
      document.getElementById("listaIzquierda").firstChild.scrollIntoView();
    let coincidencia = null;
    for (let i in props.expresiones) {
      if (props.expresiones[i].id == props.idExpresion) {
        coincidencia = i;
      }
    }
    if (coincidencia) {
      props.setChunkList(
        props.expresiones.slice(0, parseInt(coincidencia) + 30)
      );
      setTimeout(() => {
        if (document.getElementById("VP" + props.idExpresion) != null) {
          document.getElementById("VP" + props.idExpresion).scrollIntoView();
        }
      }, 5000);
    }
    setTimeout(() => {
      if (document.getElementById("VP" + props.idExpresion) != null) {
        document.getElementById("VP" + props.idExpresion).scrollIntoView();
      }
    }, 5000);
  }, [props.idExpresion, props.expresionesGlobales, props.expresiones]);

  const handleScroll = (e) => {
    let element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      props.setChunkList(
        props.expresiones.slice(0, props.chunkList.length + 20)
      );
    }
  };

  return (
    <div className="listaIzquierda" onScroll={handleScroll}>
      <ul id="listaIzquierda">
        {props.chunkList.map((expresion, index) => {
          return (
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
              open={props.idExpresion == expresion.id}
              match={props.match}
              idExpresion={props.idExpresion}
              idDeLaReferencia={props.idDeLaReferencia}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ListaIzquierdaExpresiones;
