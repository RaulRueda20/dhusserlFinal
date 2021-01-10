//React
import React, { useState, useEffect, useContext } from "react";

//Components
import PanelExpresionIzquierdo from "./PanelExpresionIzquierdo";

//Other req
import * as localStore from "../../../../js/localStore";
import { sesionStore } from "../../../../stores/sesionStore";
import { expresionesStore } from "../../../../stores/expresionStore";

const ListaIzquierdaExpresiones = (props) => {
  const [panelesAbiertos, setPanelesAbiertos] = useState([]);
  const global = useContext(sesionStore);
  const { state, dispatch } = global;

  const globalExpresion = useContext(expresionesStore);
  const { store, attend } = globalExpresion;
  const { expresiones, chunk } = store;

  const clickHandleVista = (event) => {
    let expresionClickeada = event.currentTarget.id.split("-")[0];
    let posicionExpresion = event.currentTarget.id.split("-")[1];

    if (!localStore.getObjects("ultimasVisitadas")) {
      let referenciasConsultadas = [];
      referenciasConsultadas.push(referencias);
      //console.log("referenciasConsultadas", referenciasConsultadas);
      localStore.setObjects("ultimasVisitadas", referenciasConsultadas);
      dispatch({
        type: "SET_ULTIMAS_VISITADAS",
        payload: referenciasConsultadas,
      });
    } else {
      let referenciasConsultadas = localStore.getObjects("ultimasVisitadas");
      referenciasConsultadas.push(referencias);
      // console.log("referenciasConsultadas", referenciasConsultadas);
      localStore.setObjects("ultimasVisitadas", referenciasConsultadas);
      dispatch({
        type: "SET_ULTIMAS_VISITADAS",
        payload: referenciasConsultadas,
      });
    }
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
    for (let i in expresiones) {
      if (expresiones[i].id == props.idExpresion) {
        coincidencia = i;
      }
    }
    if (coincidencia) {
      // props.setChunkList(
      //   expresiones.slice(0, parseInt(coincidencia) + 30)
      // );
      attend({
        type: "SET_CHUNK",
        payload: expresiones.slice(0, parseInt(coincidencia) + 30),
      });
      setTimeout(() => {
        if (document.getElementById("VP" + props.idExpresion) != null) {
          document.getElementById("VP" + props.idExpresion).scrollIntoView();
        }
      }, 1000);
    }
    setTimeout(() => {
      if (document.getElementById("VP" + props.idExpresion) != null) {
        document.getElementById("VP" + props.idExpresion).scrollIntoView();
      }
    }, 5000);
  }, [props.idExpresion, expresiones]);

  const handleScroll = (e) => {
    let element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      attend({
        type: "SET_CHUNK",
        payload: expresiones.slice(0, chunk.length + 20),
      });
    }
  };

  return (
    <div className="listaIzquierda" onScroll={handleScroll}>
      <ul id="listaIzquierda">
        {chunk.map((expresion, index) => {
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
