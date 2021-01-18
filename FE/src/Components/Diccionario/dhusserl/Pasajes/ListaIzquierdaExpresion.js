//React
import React, { useEffect, useContext } from "react";

//Components
import PanelExpresionIzquierdo from "./PanelExpresionIzquierdo";

//Other req
import { expresionesStore } from "../../../../stores/expresionStore";

const ListaIzquierdaExpresiones = (props) => {
  const globalExpresion = useContext(expresionesStore);
  const { store, attend } = globalExpresion;
  const { expresiones, chunk } = store;

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
