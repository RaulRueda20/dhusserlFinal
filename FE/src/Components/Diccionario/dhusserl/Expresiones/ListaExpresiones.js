//React
import React, { useContext, useState } from "react";

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

//Components
import PanelExpresion from "./PanelExpresion";

import { expresionesStore } from "../../../../stores/expresionStore";

const useStyles = makeStyles((theme) => ({
  listContainer: {
    [theme.breakpoints.up("sm")]: {
      height: "calc(100vh - 9vh - 31px) !important",
      overflowY: "scroll",
      overflowX: "hidden",
    },
    [theme.breakpoints.down("sm")]: {
      height: "47vh",
      overflowY: "scroll",
    },
    width: "auto",
    backgroundColor: "rgb(245,245,245)",
    marginLeft: "30px !important",
    marginRight: "30px !important",
  },
  listContainer2: {
    height: "calc(100vh - 9vh - 84px) !important",
    overflowY: "scroll",
    overflowX: "hidden",
  },
}));

const ListaExpresiones = ({
  menuEscondido,
  getJerarquia,
  setOpenModalN,
  match,
}) => {
  const globalExpresion = useContext(expresionesStore);
  const { store, attend } = globalExpresion;
  const { expresiones, chunk } = store;

  // console.log(chunk)

  const classes = useStyles();
  const [panelesAbiertos, setPanelesAbiertos] = useState([]);

  const handleScroll = (e) => {
    let element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      attend({
        type: "SET_CHUNK",
        payload: expresiones.slice(0, chunk.length + 20),
      });
    }
  };

  const handleClickPanel = (event) => {
    let expresionesAbiertas = panelesAbiertos;

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

  return (
    <div id={"contendor"} onScroll={handleScroll}>
      <div
        className={classNames([
          { [classes.listContainer2]: menuEscondido == true },
          classes.listContainer,
        ])}
      >
        <ul id="listaIzquierda">
          {chunk.map((expresion, index) => (
            <PanelExpresion
              match={match}
              expresion={expresion}
              key={expresion.id + "-" + index}
              index={index}
              handleClickPanel={handleClickPanel}
              getJerarquia={getJerarquia}
              setOpenModalN={setOpenModalN}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListaExpresiones;
