// React
import React, { useContext, useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

// Elements
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Jerarquia from "@material-ui/icons/DeviceHub";

import * as localStore from "../../../../js/localStore";
import { fixLetter } from "../../../../js/utils";

// Other req
import { webService } from "../../../../js/webServices";
import { sesionStore } from "../../../../stores/sesionStore";

//Language
import {
  noDerivaDe,
  noContieneExpresionesDerivadas,
  menuDerechoJerarquiaDerivadaDe,
  menuDerechoJerarquiaExpresionesDerivadas,
} from "../../../../js/Language";

const ITEM_HEIGHT = 48;

const ListaPadresExpresion = (props) => {
  const global = useContext(sesionStore);
  const { state, dispatch } = global;
  const { langLista, lang, sesion, ultimasVisitadas, letra } = state;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [padreDePadres, setPadreDePadres] = useState([]);
  const [hijosDePadres, setHijosDePadres] = useState([]);

  const handleClickDerivadaDe = (event) => {
    setAnchorEl(event.currentTarget);
    let pid = event.currentTarget.id.split("padre")[1];
    webService(
      "/expresiones/" + langLista + "/abuelosList/" + pid,
      "GET",
      {},
      sesion,
      ({ data }) => {
        const responseP = data.response;
        setPadreDePadres(responseP);
      }
    );
    webService(
      "/expresiones/" + langLista + "/hijosList/" + pid,
      "GET",
      {},
      sesion,
      ({ data }) => {
        const responseH = data.response;
        setHijosDePadres(responseH);
      }
    );
  };

  const handleCloseDerivadaDe = () => {
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
    if (letra != fixLetter(event.target.innerHTML[0])) {
      dispatch({
        type: "SET_LETRA",
        payload: fixLetter(event.target.innerHTML[0]),
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
      key={props.padre.refid + "-" + props.index}
      style={{
        borderBottom: "1px",
        borderBottomColor: "lightgrey",
        borderBottomStyle: "dotted",
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs={10}>
          <Link
            to={`${props.match.path.slice(0, 20)}/pasaje/${props.padre.padre}`}
            onClick={(event) => handleFlagLetraMain(event)}
          >
            <Typography
              variant="body1"
              className="consultaDePasajes"
              id={props.padre.padre + "/" + props.index}
            >
              {props.padre.expresion}
            </Typography>
          </Link>
        </Grid>
        <Grid
          item
          xs={2}
          onClick={handleClickDerivadaDe}
          id={"padre" + props.padre.padre}
          className="iconosAlineado"
        >
          <Icon className="iconosIluminadosPasaje">
            <Jerarquia className="iconoJerarquiaPasajes" />
          </Icon>
        </Grid>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleCloseDerivadaDe}
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
          {padreDePadres.length < 1 ? (
            <MenuItem>{noDerivaDe(lang)}</MenuItem>
          ) : (
            padreDePadres.map((padresPadre, index) => (
              <MenuItem
                onClick={handleCloseDerivadaDe}
                key={padresPadre.padre + "-" + index}
              >
                <Link
                  to={`${props.match.path.slice(0, 20)}/pasaje/${
                    padresPadre.padre
                  }`}
                  onClick={(event) => handleFlagLetraMain(event)}
                >
                  <Typography id={padresPadre.padre + "/" + index}>
                    {padresPadre.expresion}
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
          {hijosDePadres.length < 1 ? (
            <MenuItem>{noContieneExpresionesDerivadas(lang)}</MenuItem>
          ) : (
            hijosDePadres.map((hijosPadre, index) => (
              <MenuItem
                onClick={handleCloseDerivadaDe}
                key={hijosDePadres.id + "-" + index}
              >
                <Link
                  to={`${props.match.path.slice(0, 20)}/pasaje/${
                    hijosPadre.hijo
                  }`}
                  onClick={(event) => handleFlagLetraMain(event)}
                >
                  <Typography id={hijosPadre.hijo + "/" + index}>
                    {hijosPadre.expresion}
                  </Typography>
                </Link>
              </MenuItem>
            ))
          )}
        </Menu>
      </Grid>
    </li>
  );
};

export default ListaPadresExpresion;
