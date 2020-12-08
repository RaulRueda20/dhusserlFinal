// React
import React, { useContext, useState, Fragment } from "react";
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
import { languageStore } from "../../../../stores/languageStore";
import { letraStore } from "../../../../stores/letraStore";

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
  const globalLanguage = useContext(languageStore);
  const globalLetra = useContext(letraStore);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [padreDeHijos, setPadreDeHijos] = useState([]);
  const [hijosDeHijos, setHijosDeHijos] = useState([]);

  const handleClickExpresionesDerivadas = (event) => {
    setAnchorEl(event.currentTarget);
    let hid = event.currentTarget.id.split("hijo")[1];
    webService(
      "/expresiones/" + globalLanguage.langLista + "/abuelosList/" + hid,
      "GET",
      {},
      global.sesion,
      ({ data }) => {
        const { responseH } = data;
        setPadreDeHijos(responseH);
      }
    );
    webService(
      "/expresiones/" + globalLanguage.langLista + "/hijosList/" + hid,
      "GET",
      {},
      global.sesion,
      ({ data }) => {
        const { responseP } = data;
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
    globalLetra.setLetraFlag(false);
    let idExpresion = event.target.id.split("/")[0];
    let service = "/referencias/obtieneReferencias/" + idExpresion;
    webService(service, "GET", {}, global.sesion, ({ data }) => {
      const { response } = data;
      let referencias = fixReferenciasConsultadas(response);
      /*if(localStore.getObjects("referenciasConsultadas")==false){
                let referenciasConsultadas = []
                referenciasConsultadas.push(referencias)
                localStore.setObjects("referenciasConsultadas",referenciasConsultadas)
            }else{
                let store = localStore.getObjects("referenciasConsultadas")
                store.push(referencias)
                localStore.setObjects("referenciasConsultadas",store)
            }*/
      let nuevasVisitadas = global.ultimasVisitadas;
      nuevasVisitadas.push(referencias);
      global.setUltimasVisitadas(nuevasVisitadas);
    });
  };

  return (
    <Fragment>
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
              <b>{menuDerechoJerarquiaDerivadaDe(globalLanguage.lang)}</b>
            </MenuItem>
            <Divider />
            {padreDeHijos.length < 1 ? (
              <MenuItem>{noDerivaDe(globalLanguage.lang)}</MenuItem>
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
              <b>
                {menuDerechoJerarquiaExpresionesDerivadas(globalLanguage.lang)}
              </b>
            </MenuItem>
            <Divider />
            {hijosDeHijos.length < 1 ? (
              <MenuItem>
                {noContieneExpresionesDerivadas(globalLanguage.lang)}
              </MenuItem>
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
    </Fragment>
  );
};

export default ListaHijosBajo;
