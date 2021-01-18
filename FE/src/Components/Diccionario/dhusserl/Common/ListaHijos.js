// React
import React, { useContext, Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Elements
import {
  Divider,
  Typography,
  Icon,
  Grid,
  Menu,
  MenuItem,
} from "@material-ui/core";
import Jerarquia from "@material-ui/icons/DeviceHub";

import * as localStore from "../../../../js/localStore";

//Language
import {
  noDerivaDe,
  noContieneExpresionesDerivadas,
  menuDerechoJerarquiaDerivadaDe,
  menuDerechoJerarquiaExpresionesDerivadas,
} from "../../../../js/Language";

// Other req
import { webService } from "../../../../js/webServices";
import { sesionStore } from "../../../../stores/sesionStore";

const ITEM_HEIGHT = 48;

const ListaHijosExpresion = (props) => {
  const global = useContext(sesionStore);
  const { state, dispatch } = global;
  const { langLista, lang, sesion, ultimasVisitadas, letra } = state;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [padreDeHijos, setPadreDeHijos] = useState([]);
  const [hijosDeHijos, setHijosDeHijos] = useState([]);

  const handleClickExpresionesDerivadas = (event) => {
    setAnchorEl(event.currentTarget);
    let hid = event.currentTarget.id.split("hijo")[1];
    webService(
      "/expresiones/" + langLista + "/abuelosList/" + hid,
      "GET",
      {},
      sesion,
      ({ data }) => {
        const responseP = data.response;
        setPadreDeHijos(responseP);
      }
    );
    webService(
      "/expresiones/" + langLista + "/hijosList/" + hid,
      "GET",
      {},
      sesion,
      ({ data }) => {
        const responseH = data.response;
        setHijosDeHijos(responseH);
      }
    );
  };

  const handleCloseExpresionesDerivadas = () => {
    setAnchorEl(null);
  };

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
    if (letra != event.target.innerHTML[0].toUpperCase()) {
      dispatch({
        type: "SET_LETRA",
        payload: event.target.innerHTML[0].toUpperCase(),
      });
    }
    const idExpresion = event.target.id.split("/")[0];
    const service = "/referencias/obtieneReferencias/" + idExpresion;
    webService(service, "GET", {}, sesion, ({ data }) => {
      const { response } = data;
      const referencias = fixReferenciasConsultadas(response);
      let nuevasVisitadas = ultimasVisitadas;
      nuevasVisitadas.push(referencias);
      localStore.setObjects("ultimasVisitadas", nuevasVisitadas);
      dispatch({
        type: "SET_ULTIMAS_VISITADAS",
        payload: nuevasVisitadas,
      });
    });
  };

  return (
    <li
      key={props.hijo.refid + "-" + props.index}
      style={{
        borderBottom: "1px",
        borderBottomColor: "lightgrey",
        borderBottomStyle: "dotted",
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs={10}>
          <Link
            to={`${props.match.path.slice(0, 20)}/pasaje/${props.hijo.hijo}`}
            onClick={(event) => handleFlagLetraMain(event)}
          >
            <Typography
              variant="body1"
              className="consultaDePasajes"
              id={props.hijo.hijo + "/" + props.index}
            >
              {props.hijo.expresion}
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={2} className="iconosAlineado">
          <Icon
            className="iconosIluminadosPasaje"
            id={"hijo" + props.hijo.hijo}
            onClick={handleClickExpresionesDerivadas}
          >
            <Jerarquia className="iconoJerarquiaPasajes" />
          </Icon>
        </Grid>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleCloseExpresionesDerivadas}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 400,
            },
          }}
        >
          <MenuItem>
            <b>{menuDerechoJerarquiaDerivadaDe(lang)}</b>
          </MenuItem>
          <Divider />
          {padreDeHijos.length < 1 ? (
            <MenuItem>{noDerivaDe(lang)}</MenuItem>
          ) : (
            padreDeHijos.map((padresHijo, index) => (
              <MenuItem
                onClick={handleCloseExpresionesDerivadas}
                key={padresHijo.padres + "-" + index}
              >
                <Link
                  to={`${props.match.path.slice(0, 20)}/pasaje/${
                    padresHijo.padre
                  }`}
                  onClick={(event) => handleFlagLetraMain(event)}
                >
                  <Typography id={padresHijo.padre + "/" + index}>
                    {padresHijo.expresion}
                  </Typography>
                </Link>
              </MenuItem>
            ))
          )}
          <Divider />
          <MenuItem>
            <b>{menuDerechoJerarquiaExpresionesDerivadas(lang)}</b>
          </MenuItem>
          <Divider />
          {hijosDeHijos.length > 1 ? (
            hijosDeHijos.map((hijosHijo, index) => (
              <MenuItem
                onClick={handleCloseExpresionesDerivadas}
                key={hijosHijo.hijos + "-" + index}
              >
                <Link
                  to={`${props.match.path.slice(0, 20)}/pasaje/${
                    hijosHijo.hijo
                  }`}
                  onClick={(event) => handleFlagLetraMain(event)}
                >
                  <Typography id={hijosHijo.hijo + "/" + index}>
                    {hijosHijo.expresion}
                  </Typography>
                </Link>
              </MenuItem>
            ))
          ) : (
            <MenuItem>{noContieneExpresionesDerivadas(lang)}</MenuItem>
          )}
        </Menu>
      </Grid>
    </li>
  );
};

export default ListaHijosExpresion;
