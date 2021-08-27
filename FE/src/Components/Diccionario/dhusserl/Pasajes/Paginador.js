// React
import React, { useState, useContext, useEffect } from "react";
import classNames from "classnames";

// Components
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Back from "@material-ui/icons/KeyboardArrowLeft";
import Next from "@material-ui/icons/KeyboardArrowRight";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

//Language
import { numeroDePasajes, pasajeSingular } from "../../../../js/Language";
import { languageStore } from "../../../../stores/languageStore";
import { sesionStore } from "../../../../stores/sesionStore";

const Pasaje = (props) => {
  const global = useContext(sesionStore);
  const { state } = global;
  const { lang } = state;
  // const globalExpresion = useContext(expresionesStore);
  // const { store } = globalExpresion;
  // const { expresiones, chunk } = store;
  const [casillas, setCasillas] = useState([]);
  const [referencias, setReferencias] = useState([]);
  const [posicion, setPosicion] = useState(0);
  const [referenciaSeleccionada, setReferenciaSeleccionada] = useState(null);
  const [next, setNext] = useState("");
  const [indexLista, setIndexLista] = useState("");

  // let idDeExpresion es el id que se toma de la URL, idExpresion es un estado que llama servicios y tiene otras funcionalidades

  useEffect(() => {
    // console.log("Expresion en paginador", expresiones)
    setPosicion(0);
    if (props.referencias.length > 0) setReferencias(props.referencias);
    if (props.referenciaSeleccionada != null) {
      setReferenciaSeleccionada(props.referenciaSeleccionada);
      acortadorPaginador(props.referencias);
    }
    if (indexLista == 0) {
      setTimeout(() => {
        document
          .getElementById(props.referenciaSeleccionada.refid + "/" + 0)
          .classList.add("pasajesVisitados");
      }, 1000);
    } else {
      setTimeout(() => {
        document
          .getElementById(props.referenciaSeleccionada.refid + "/" + indexLista)
          .classList.add("pasajesVisitados");
      }, 1000);
    }
  }, [props.referencias, props.referenciaSeleccionada, posicion]);

  const acortadorPaginador = (referencias) => {
    let i = 0;
    let refPos = 0;
    let penultimo = props.referencias.length - 2;
    while (i < referencias.length) {
      referencias[i].index = i;
      if (referencias[i].refid == props.referenciaSeleccionada.refid) {
        refPos = i;
        setPosicion(i);
      }
      i++;
    }
    if (referencias.length >= 5) {
      if (refPos == 0) {
        let siguientesEscenario1 = refPos + 3;
        setCasillas(referencias.slice(refPos, siguientesEscenario1));
      } else if (refPos == 1) {
        let anteriorEscenario2 = refPos - 1;
        let siguientesEscenario2 = refPos + 2;
        setCasillas(
          referencias.slice(anteriorEscenario2, siguientesEscenario2)
        );
      } else if (refPos > 1 && refPos < penultimo) {
        let anterioresEscenario3 = refPos - 2;
        let siguientesEscenario3 = refPos + 3;
        setCasillas(
          referencias.slice(anterioresEscenario3, siguientesEscenario3)
        );
      } else if (refPos == penultimo) {
        let anterioresEscenario4 = refPos - 3;
        let siguienteEscenario4 = refPos + 2;
        setCasillas(
          referencias.slice(anterioresEscenario4, siguienteEscenario4)
        );
      } else if (refPos == referencias.length - 1) {
        let anterioresEscenario5 = refPos - 4;
        setCasillas(referencias.slice(anterioresEscenario5, refPos + 1));
      }
    } else if (referencias.length < 5) {
      if (refPos == 0) {
        setCasillas(referencias.slice(refPos, refPos + 3));
      } else if (refPos == 1) {
        setCasillas(referencias.slice(refPos - 1, refPos + 2));
      } else if (refPos > 1 && refPos < penultimo) {
        setCasillas(referencias.slice(refPos - 2, refPos + 2));
      } else if (refPos == penultimo) {
        setCasillas(referencias.slice(refPos - 2, refPos + 2));
      } else if (refPos == referencias.length - 1) {
        setCasillas(referencias);
      }
    }
    setIndexLista(refPos);
    return referencias;
  };

  const handleForward = () => {
    if (posicion == props.referencias.length) {
      setNext(props.referencias[referencias.length - 1]);
    }
  };

  return (
    <div
      style={{
        borderLeft: "1px lightgray solid",
        borderRight: "1px lightgray solid",
        padding: "0px 10px",
      }}
    >
      {referenciaSeleccionada != null && referencias.length > 0 ? (
        <div style={{ textAlign: "center" }}>
          <Link
            to={
              posicion == 0
                ? "#"
                : `${props.match.path.slice(0, 20)}/pasaje/${
                    props.expresionId
                  }/${referencias[0].refid}`
            }
            className="botonPaginador"
          >
            <FirstPage fontSize="small" />
          </Link>
          <Link
            to={
              posicion <= 0
                ? "#"
                : `${props.match.path.slice(0, 20)}/pasaje/${
                    props.expresionId
                  }/${referencias[posicion - 1].refid}`
            }
            className="botonPaginador"
          >
            <Back fontSize="small" />
          </Link>

          {casillas.map((referencia, index) => {
            return (
              <Link
                to={`${props.match.path.slice(0, 20)}/pasaje/${
                  props.expresionId
                }/${referencia.refid}`}
                className={classNames([
                  "botonPaginador",
                  {
                    pasajeSeleccionado:
                      props.referenciaSeleccionada.refid == referencia.refid,
                  },
                ])}
                style={{ padding: "13px 0px" }}
              >
                <span>{referencia.index + 1}</span>
              </Link>
            );
          })}

          <Link
            to={
              posicion >= referencias.length - 1
                ? "#"
                : `${props.match.path.slice(0, 20)}/pasaje/${
                    props.expresionId
                  }/${referencias[posicion + 1].refid}`
            }
            onClick={handleForward}
          >
            <span className="botonPaginador">
              <Next fontSize="small" />
            </span>
          </Link>
          <Link
            to={
              posicion == referencias.length - 1
                ? "#"
                : `${props.match.path.slice(0, 20)}/pasaje/${
                    props.expresionId
                  }/${referencias[referencias.length - 1].refid}`
            }
          >
            <span className="botonPaginador">
              <LastPage fontSize="small" />
            </span>
          </Link>
        </div>
      ) : null}
      <Typography variant="h5">
        {referencias.length}{" "}
        {referencias.length > 1 ? numeroDePasajes(lang) : pasajeSingular(lang)}{" "}
      </Typography>
    </div>
  );
};

export default Pasaje;
