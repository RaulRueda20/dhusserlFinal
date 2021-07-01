//React
import React, { useContext, useEffect } from "react";

//Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Tooltip from "@material-ui/core/Tooltip";

//Other req
import classNames from "classnames";

//Language
import {
  resultadoBusqueda,
  cerrarListaTooltip,
  pasajeSeleccionado,
} from "../../../../js/Language";
import { sesionStore } from "../../../../stores/sesionStore";
import { busquedaStore } from "../../../../stores/busquedaStore";

const ListaBusqueda = (props) => {
  const global = useContext(sesionStore);
  const { state } = global;
  const { lang } = state;

  const globalBusqueda = useContext(busquedaStore);
  const { busquedaState, attend } = globalBusqueda;
  const { tipoBusqueda, posicionPasaje, expresionesEncontradas, abierto } =
    busquedaState;

  const clickCambioIdBuscado = (props) => {
    const { currentTarget } = props;
    const { id } = currentTarget;

    if (tipoBusqueda == "Referencia") {
      attend({
        type: "SET_POSICION_PASAJE",
        payload: parseInt(id.split("-")[2]),
      });
    } else {
      attend({
        type: "SET_POSICION_PASAJE",
        payload: parseInt(id.split("-")[1]),
      });
    }

    attend({
      type: "SET_ID_PASAJE",
      payload: id.split("-")[0],
    });
  };

  useEffect(() => {
    console.log(
      "ultimo consolelog en hacer mtfckr",
      expresionesEncontradas,
      tipoBusqueda
    );
    if (tipoBusqueda == "Referencia") {
      document.getElementById("listaReferencia").firstChild.scrollIntoView();
    } else {
      //console.log(document.getElementById("listaExpresion").firstChild);
      console.log("expresionesEncontradas en la lista", expresionesEncontradas);
      document.getElementById("listaExpresion").firstChild.scrollIntoView();
    }
  }, [expresionesEncontradas]);

  const abrirLista = () => {
    attend({ type: "SET_ABIERTO", payload: !abierto });
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={11}>
        <Typography variant="h4" className="tituloResultados">
          {resultadoBusqueda(lang)}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Tooltip title={cerrarListaTooltip(lang)}>
          <IconButton onClick={abrirLista}>
            <ArrowBackIosIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      {tipoBusqueda == "Referencia" ? (
        <Grid item xs={12} className="contenedorBusqueda">
          <ul className="ulBusqueda" id="listaReferencia">
            {expresionesEncontradas.map(
              (expresionEncontradaporReferencia, index) => (
                <li
                  id={expresionEncontradaporReferencia?.ref_id + "-" + index}
                  onClick={(event) => clickCambioIdBuscado(event)}
                  value={expresionEncontradaporReferencia?.ref_id + "-" + index}
                  key={expresionEncontradaporReferencia?.ref_id + "-" + index}
                  className={classNames([
                    { pasajeSeleccionado: posicionPasaje == index },
                    "liBusqueda",
                  ])}
                >
                  <Typography>
                    {expresionEncontradaporReferencia?.ref_libro_de +
                      "  //  " +
                      expresionEncontradaporReferencia?.ref_libro_es}
                  </Typography>
                </li>
              )
            )}
          </ul>
        </Grid>
      ) : (
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} className="contenedorBusqueda">
            <ul className="ulBusqueda" id="listaExpresion">
              {expresionesEncontradas.map(
                (expresionEncontradaPorExpresion, index) => (
                  <li
                    onClick={(event) => clickCambioIdBuscado(event)}
                    id={"expresionEncontradaPorExpresion" + "-" + index}
                    value={expresionEncontradaPorExpresion?.refid + "-" + index}
                    key={expresionEncontradaPorExpresion?.refid + "-" + index}
                    className={classNames([
                      { pasajeSeleccionado: posicionPasaje == index },
                      "liBusqueda",
                    ])}
                  >
                    <Typography>
                      {expresionEncontradaPorExpresion?.expresion +
                        "  //  " +
                        expresionEncontradaPorExpresion?.traduccion}
                    </Typography>
                  </li>
                )
              )}
            </ul>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default ListaBusqueda;
