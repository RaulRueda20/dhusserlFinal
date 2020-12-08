// React
import React, { useContext, useState, Fragment } from "react";
import { Link } from "react-router-dom";

// Elements
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
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

const ListaPadresExpresion = (props) => {
  const global = useContext(sesionStore);
  const globalLanguage = useContext(languageStore);
  const globalLetra = useContext(letraStore);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [padreDePadres, setPadreDePadres] = useState([]);
  const [hijosDePadres, setHijosDePadres] = useState([]);

  const handleClickDerivadaDe = (event) => {
    setAnchorEl(event.currentTarget);
    let pid = event.currentTarget.id.split("padre")[1];
    webService(
      "/expresiones/" + globalLanguage.langLista + "/abuelosList/" + pid,
      "GET",
      {},
      global.sesion,
      ({ data }) => {
        const { responseP } = data;
        setPadreDePadres(responseP);
      }
    );
    webService(
      "/expresiones/" + globalLanguage.langLista + "/hijosList/" + pid,
      "GET",
      {},
      global.sesion,
      ({ data }) => {
        const { responseH } = data;
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
    globalLetra.setLetraFlag(false);
    setTimeout(() => {
      if (document.getElementById("VP" + props.idExpresion) != null) {
        document.getElementById("VP" + props.idExpresion).scrollIntoView();
      }
    }, 1000);
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
      <li key={props.padre.refid + "-" + props.index}>
        <Grid container alignItems="center">
          <Grid item xs={8}>
            <Link
              to={`${props.match.path.slice(0, 20)}/pasaje/${
                props.padre.padre
              }`}
              onClick={(event) => handleFlagLetraMain(event)}
            >
              <Typography
                variant="h6"
                className="consultaDePasajes"
                id={props.padre.padre + "/" + props.index}
              >
                {props.padre.expresion}
              </Typography>
            </Link>
          </Grid>
          <Grid
            item
            xs={4}
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
              <b>{menuDerechoJerarquiaDerivadaDe(globalLanguage.lang)}</b>
            </MenuItem>
            <Divider />
            {padreDePadres.length < 1 ? (
              <MenuItem>{noDerivaDe(globalLanguage.lang)}</MenuItem>
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
              <b>
                {menuDerechoJerarquiaExpresionesDerivadas(globalLanguage.lang)}
              </b>
            </MenuItem>
            <Divider />
            {hijosDePadres.length < 1 ? (
              <MenuItem>
                {noContieneExpresionesDerivadas(globalLanguage.lang)}
              </MenuItem>
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
    </Fragment>
  );
};

export default ListaPadresExpresion;
