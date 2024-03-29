// React
import React, { useContext, useState } from "react";
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

const ListaHijosBajo = (props) => {
  const global = useContext(sesionStore);
  const { state, dispatch } = global;
  const { langLista, lang, sesion, ultimasVisitadas } = state;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [padreDeHijos, setPadreDeHijos] = useState([]);
  const [hijosDeHijos, setHijosDeHijos] = useState([]);

  const handleClickExpresionesDerivadas = (event) => {
    setAnchorEl(event.currentTarget);
    const hid = event.currentTarget.id.split("hijo")[1];
    webService(
      "/expresiones/" + langLista + "/abuelosList/" + hid,
      "GET",
      {},
      sesion,
      ({ data }) => {
        const responseH = data.response;
        setPadreDeHijos(responseH);
      }
    );
    webService(
      "/expresiones/" + langLista + "/hijosList/" + hid,
      "GET",
      {},
      sesion,
      ({ data }) => {
        const responseP = data.response;
        setHijosDeHijos(responseP);
      }
    );
  };

  const fixReferenciasConsultadas = (expresion) => {
    let referencia = {
      clave: expresion[0].clave,
      expresion: expresion[0].expresion_original,
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

  const handleCloseExpresionesDerivadas = () => {
    setAnchorEl(null);
  };

  const handleFlagLetraMain = (event) => {
    const idExpresion = event.target.id.split("/")[0];
    const service = "/referencias/obtieneReferencias/" + idExpresion;
    webService(service, "GET", {}, sesion, ({ data }) => {
      const { response } = data;
      const referencias = fixReferenciasConsultadas(response);
      let nuevasVisitadas = ultimasVisitadas;
      nuevasVisitadas.push(referencias);
      dispatch({
        type: "SET_ULTIMAS_VISITADAS",
        payload: nuevasVisitadas,
      });
    });
  };

  return (
    <>
      <li key={props.hijo.refid + "-" + props.index}>
        <Grid container alignItems="center">
          <Grid item xs={8}>
            <Link
              to={`${props.match.path.slice(0, 20)}/pasaje/${props.hijo.hijo}`}
              onClick={(event) => handleFlagLetraMain(event)}
            >
              <Typography
                variant="h6"
                className="consultaDePasajes"
                id={props.hijo.hijo + "/" + props.index}
              >
                {props.hijo.expresion}
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={4} className="iconosAlineado">
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
                  key={padresHijo.id + "-" + index}
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
            {hijosDeHijos.length < 1 ? (
              <MenuItem>{noContieneExpresionesDerivadas(lang)}</MenuItem>
            ) : (
              hijosDeHijos.map((hijosHijo, index) => (
                <MenuItem
                  onClick={handleCloseExpresionesDerivadas}
                  key={hijosHijo.id + "-" + index}
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
            )}
          </Menu>
        </Grid>
      </li>
    </>
  );
};

export default ListaHijosBajo;
