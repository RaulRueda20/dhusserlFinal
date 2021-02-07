// React
import React, { useContext, useState, useEffect } from "react";

// Elements
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

import { webService } from "../../../../js/webServices";

import { sesionStore } from "../../../../stores/sesionStore";

import * as localStore from "../../../../js/localStore";

const UltimasVisitadas = (props) => {
  const global = useContext(sesionStore);
  const { state, dispatch } = global;
  const { sesion, ultimasVisitadas, letra } = state;
  const [lista, setLista] = useState([]);
  const { match } = props;

  useEffect(() => {
    // console.log("lista", lista);
    let uv = localStore.getObjects("ultimasVisitadas");
    setLista(uv);
    if (uv.length > 0) {
      // console.log("mayor a cero");
      setLista(uv.reverse());
    }
  }, [ultimasVisitadas]);

  const fixReferenciasConsultadas = (expresion) => {
    let referencia = {
      clave: expresion[0].clave,
      expresion: expresion[0].expresion_original,
      nombreExpresion: expresion[0].expresion_original,
      traduccion: expresion[0].expresion_traduccion,
      id: expresion[0].id,
      index_de: expresion[0].index_de,
      index_es: expresion[0].index_es,
      pretty_e: expresion[0].epretty,
      pretty_t: expresion[0].tpretty,
      referencias: [],
    };
    referencia.referencias.push({
      referencia_original: expresion[0].ref_original,
      referencia_traduccion: expresion[0].ref_traduccion,
      refid: expresion[0].refid,
      orden: expresion[0].orden,
    });
    return referencia;
  };

  const handleFlagLetraMain = (event) => {
    dispatch({
      type: "SET_LANGLISTA",
      payload: "al",
    });
    if (letra != event.target.innerHTML[0].toUpperCase()) {
      dispatch({
        type: "SET_LETRA",
        payload: event.target.innerHTML[0].toUpperCase(),
      });
    }
    const idExpresion = event.target.id.split("/")[0];
    const service = "/referencias/obtieneReferencias/" + idExpresion;
    webService(service, "GET", {}, sesion, (data) => {
      const referencias = fixReferenciasConsultadas(data.data.response);
      let nuevasVisitadas = ultimasVisitadas;
      nuevasVisitadas.push(referencias);
      dispatch({
        type: "SET_ULTIMAS_VISITADAS",
        payload: nuevasVisitadas,
      });
    });
  };

  return (
    <ul className="ulDelMenuDerechoReferenciasConsultadas">
      {lista.map((consultas, index) => {
        return (
          <Link
            to={`${match.path.slice(0, 20)}/pasaje/${consultas.id}/${
              consultas.referencias[0].refid
            }`}
            onClick={(event) => handleFlagLetraMain(event)}
            key={consultas.referencias[0].refid + "-" + index}
          >
            <li
              className="bordeDeConsultas"
              key={consultas.referencias[0].refid + "-" + index}
            >
              <Typography
                className="consultaDePasajes"
                letiant="h6"
                id={consultas.id + "/" + index}
              >
                {consultas.nombreExpresion +
                  (consultas.referencias[0].referencia_original
                    ? "  :  "
                    : "") +
                  (consultas.referencias[0].referencia_original ?? "") +
                  (consultas.referencias[0].referencia_original ? "/" : "") +
                  (consultas.referencias[0].referencia_traduccion ?? "")}
              </Typography>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default UltimasVisitadas;
