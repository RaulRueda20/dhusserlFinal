//React
import React, { useContext, useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
//Elements
import {
  Grid,
  IconButton,
  Hidden,
  LinearProgress,
  Divider,
  Typography,
} from "@material-ui/core";
import classNames from "classnames";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

//Components
import ListaLetras from "../Expresiones/ListaLetras";
import Busqueda from "../Common/Busqueda";
import ListaIzquierdaExpresion from "./ListaIzquierdaExpresion";
import BusquedaEscondida from "./BusquedaEscondida";
import ContenidoPasaje from "./ContenidoPasaje";
import Paginador from "./Paginador";
import ListaEscondida from "./ListaEscondida";
import MenuDerechoPasajes from "../Common/MenuDerecho";
import MenuEscondido from "./MenuEscondido";
import ModalDeBusqueda from "../ModalDeBusqueda";

// Other req
import { sesionStore } from "../../../../stores/sesionStore";
import { expresionesStore } from "../../../../stores/expresionStore";
import { webService } from "../../../../js/webServices";
import { expresionesAsociadas } from "../../../../js/Language";

const Pasaje = (props) => {
  const { match } = props;

  const global = useContext(sesionStore);
  const { state, dispatch } = global;
  const { sesion, langLista, letra, lang } = state;

  const globalExpresion = useContext(expresionesStore);
  const { attend } = globalExpresion;
  // const { expresiones, chunk } = store

  const [expresiones, setExpresiones] = useState([]);
  const [idExpresion, setIdExpresion] = useState("");
  const [referenciaSeleccionada, setReferenciaSeleccionada] = useState(null);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(true);
  const [pasajeService, setPasajeService] = useState("");
  const [panelIzquierdo, setPanelIzquierdo] = useState(false);
  const [panelDerecho, setPanelDerecho] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [openHidden, setOpenHidden] = useState(false);
  const [loading, setLoading] = useState(false);
  const [
    posicionReferenciasConsultadas,
    setPosicionReferenciasConsultadas,
  ] = useState("");
  const [referencias, setReferencias] = useState([]);
  const [openModalN, setOpenModalN] = useState(false);
  const [modalDeBusquedas, setModalDebusquedas] = useState(false);
  const [flagDeBusqueda, setFlagDeBusqueda] = useState(false);
  const [chunkList, setChunkList] = useState([]);
  const [chunkListGlobal, setChunkListGlobal] = useState([]);
  const [isQV, setIsQV] = useState(false);
  const [qv, setQv] = useState({
    ref_id: "",
    ref_libro_de: "",
    ref_libro_es: "",
    ref_original: "",
    ref_traduccion: "",
    expresiones: [],
  });

  const fixReferencias = (referencias) => {
    let expresiones = [];
    let posicActual = -1;
    let expreActual = "";
    let i = 0;
    while (i < referencias.length) {
      if (expreActual != referencias[i].expresion) {
        posicActual++;
        expreActual = referencias[i].expresion;
        expresiones.push({
          clave: referencias[i].clave,
          expresion: referencias[i].expresion,
          id: referencias[i].id,
          index_de: referencias[i].index_de,
          index_es: referencias[i].index_es,
          pretty_e: referencias[i].pretty_e,
          pretty_t: referencias[i].pretty_t,
          referencias: [],
          traduccion: referencias[i].traduccion,
        });
        expresiones[posicActual].referencias.push({
          referencia_original: referencias[i].referencia_original,
          referencia_traduccion: referencias[i].referencia_traduccion,
          refid: referencias[i].refid,
          orden: referencias[i].orden,
        });
        i++;
      } else {
        expresiones[posicActual].referencias.push({
          referencia_original: referencias[i].referencia_original,
          referencia_traduccion: referencias[i].referencia_traduccion,
          refid: referencias[i].refid,
          orden: referencias[i].orden,
        });
        i++;
      }
    }
    return expresiones;
  };

  const findReferencias = (referencias, referenciaId) => {
    let referenciaEncontrada = null;
    for (let i in referencias) {
      if (referencias[i].refid == referenciaId) {
        referenciaEncontrada = referencias[i];
      }
    }
    return referenciaEncontrada;
  };

  const handlePanelIzquierdo = () => {
    setPanelIzquierdo(!panelIzquierdo);
  };

  const handlePanelDerecho = () => {
    setPanelDerecho(!panelDerecho);
  };

  const updateDimensions = () => {
    if (window.innerWidth > 600) {
      setOpenHidden(false);
    }
  };

  const fixPasajes = (pasajes) => {
    let pasajesArreglados = [];
    let posicionActual = -1;
    let pasajeActual = "";
    let i = 0;
    while (i < pasajes.length) {
      if (pasajeActual != pasajes[i].ref_id) {
        posicionActual++;
        pasajeActual = pasajes[i].ref_id;
        pasajesArreglados.push({
          ref_id: pasajes[i].refid,
          ref_original: pasajes[i].ref_original,
          ref_traduccion: pasajes[i].ref_traduccion,
          ref_libro_de: pasajes[i].pasaje_original,
          ref_libro_es: pasajes[i].pasaje_traduccion,
          expresiones: [],
        });
        pasajesArreglados[posicionActual].expresiones.push({
          orden: pasajes[i].orden,
          expresion_original: pasajes[i].expresion_original,
          expresion_traduccion: pasajes[i].expresion_traduccion,
          t_id: pasajes[i].id,
        });
        i++;
      } else {
        pasajesArreglados[posicionActual].expresiones.push({
          orden: pasajes[i].orden,
          expresion_original: pasajes[i].expresion_original,
          expresion_traduccion: pasajes[i].expresion_traduccion,
          t_id: pasajes[i].id,
        });
        i++;
      }
    }
    return pasajesArreglados;
  };

  useEffect(() => {
    setLoading(true);
    const idDeExpresion = props.match.params.expresion;
    const idDeLaReferencia = props.match.params.id
      ? props.match.params.id
      : false;

    let service = "/expresiones/" + langLista + "/" + letra;
    if (pasajeService != service) {
      setPasajeService(service);
      webService(service, "GET", {}, sesion, ({ data }) => {
        const { response } = data;
        attend({
          type: "START_EXPRESIONES",
          payload: {
            expresiones: fixReferencias(response),
            chunk: fixReferencias(response).slice(0, 50),
          },
        });
        setLoading(false);
        // setExpresiones(fixReferencias(response));
        // setChunkList(fixReferencias(response).slice(0, 50));
      });
    }
    if (idDeExpresion == "QV") {
      service = "/referencias/obtieneReferenciasByRef/" + idDeLaReferencia;
      webService(service, "GET", {}, sesion, ({ data }) => {
        const { response } = data;
        // console.log(response);
        const fixedThing = fixPasajes(response);
        // console.log("Fixed thing", fixedThing);
        setQv(fixedThing[0]);
        setIsQV(true);
        setLoading(false);
      });
    } else {
      service = "/referencias/obtieneReferencias/" + idDeExpresion;
      webService(service, "GET", {}, sesion, ({ data }) => {
        const { response } = data;
        setReferencias(response);
        setIdExpresion(idDeExpresion);
        if (idDeLaReferencia && idDeLaReferencia != null) {
          setReferenciaSeleccionada(
            findReferencias(response, idDeLaReferencia)
          );
        } else {
          setReferenciaSeleccionada(response[0]);
        }
        setExpanded1(true);
        setExpanded2(true);
        if (response[0] == null) {
          dispatch({
            type: "SET_LETRA",
            payload: letra,
          });
          setOpenModalN(true);
          setReferenciaSeleccionada("none");
        }
        // console.log(response);
        attend({
          type: "SELECT_EXPRESION",
          payload: {
            id: idDeExpresion,
            expresion: response[0]?.expresion_original ?? "",
          },
        });
        setIsQV(false);
        setLoading(false);
      });
    }
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    setTimeout(() => {
      if (document.getElementById("VP" + props.idExpresion) != null) {
        document.getElementById("VP" + props.idExpresion).scrollIntoView();
      }
    }, 1000);
  }, [letra, langLista, match.params.expresion, match.params.id]);

  function htmlPasajeOriginal() {
    return { __html: qv.ref_libro_de };
  }

  function htmlPasajeTraduccion() {
    return { __html: qv.ref_libro_es };
  }

  function consultaDePasajes(event) {
    if (letra != event.target.innerHTML[0].toUpperCase()) {
      dispatch({
        type: "SET_LETRA",
        payload: event.target.innerHTML[0].toUpperCase(),
      });
    }
    const idExpresion = event.target.id.split("/")[0];
    // const service = "/referencias/obtieneReferencias/" + idExpresion;
    // webService(service, "GET", {}, sesion, (data) => {
    //   let referencias = fixReferenciasConsultadas(data.data.response);
    //   let nuevasVisitadas = localStore.getObjects("ultimasVisitadas");
    //   referencias.nombreExpresion = referencias.expresion;
    //   nuevasVisitadas.push(referencias);
    //   localStore.setObjects("ultimasVisitadas", nuevasVisitadas);
    //   dispatch({
    //     type: "SET_ULTIMAS_VISITADAS",
    //     payload: nuevasVisitadas,
    //   });
    // });
  }

  return (
    <Fragment>
      <Hidden xsDown>
        {panelIzquierdo == false ? (
          <IconButton
            className="IconoIzquierdo"
            onClick={handlePanelIzquierdo}
            size="small"
          >
            <ArrowBackIosIcon size="small" className="iconosIluminados" />
          </IconButton>
        ) : (
          <IconButton
            className={classNames([
              { botonIzquierdoEscondido: panelIzquierdo == true },
            ])}
            onClick={handlePanelIzquierdo}
            size="small"
          >
            <ArrowForwardIosIcon size="small" className="iconosIluminados" />
          </IconButton>
        )}
        {panelDerecho == false ? (
          <IconButton
            className="IconoDerecho"
            onClick={handlePanelDerecho}
            size="small"
          >
            <ArrowForwardIosIcon size="small" className="iconosIluminados" />
          </IconButton>
        ) : (
          <IconButton
            className={classNames([
              { botonDerechoEscondido: panelDerecho == true },
            ])}
            onClick={handlePanelDerecho}
            size="small"
          >
            <ArrowBackIosIcon size="small" className="iconosIluminados" />
          </IconButton>
        )}
      </Hidden>
      <Grid container>
        <Grid item xs={12}>
          <ListaLetras
            setChunkListGlobal={setChunkListGlobal}
            setChunkList={setChunkList}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          lg={3}
          className={classNames([
            { panelIzquierdoEscondido: panelIzquierdo == true },
          ])}
        >
          <Hidden xsDown>
            <Busqueda
              setIdExpresion={setIdExpresion}
              busqueda={busqueda}
              bandera={true}
              setBusqueda={setBusqueda}
              setFlagDeBusqueda={setFlagDeBusqueda}
              setModalDebusquedas={setModalDebusquedas}
              setLoading={setLoading}
            />
            <ListaIzquierdaExpresion
              {...props}
              idExpresion={idExpresion}
              setIdExpresion={setIdExpresion}
              referenciaSeleccionada={referenciaSeleccionada}
              setReferenciaSeleccionada={setReferenciaSeleccionada}
              setExpanded1={setExpanded1}
              setExpanded2={setExpanded2}
              match={props.match}
              setPosicionReferenciasConsultadas={
                setPosicionReferenciasConsultadas
              }
              idDeLaReferencia={props.match.params.id}
            />
          </Hidden>
          {openHidden == true ? (
            <div>
              <BusquedaEscondida
                expresiones={expresiones}
                setExpresiones={setExpresiones}
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                openHidden={openHidden}
                setOpenHidden={setOpenHidden}
                setModalDebusquedas={setModalDebusquedas}
                setLoading={setLoading}
                setChunkListGlobal={setChunkListGlobal}
                setChunkList={setChunkList}
              />
              <ListaEscondida
                {...props}
                expresiones={expresiones}
                setExpresiones={setExpresiones}
                idExpresion={idExpresion}
                setIdExpresion={setIdExpresion}
                referenciaSeleccionada={referenciaSeleccionada}
                setReferenciaSeleccionada={setReferenciaSeleccionada}
                setExpanded1={setExpanded1}
                setExpanded2={setExpanded2}
                state={state}
                chunkList={chunkList}
                chunkListGlobal={chunkListGlobal}
              />
            </div>
          ) : null}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={
            panelDerecho
              ? panelIzquierdo
                ? 12
                : 9
              : 6 && panelIzquierdo
              ? 9
              : 6
          }
          lg={
            panelDerecho
              ? panelIzquierdo
                ? 12
                : 9
              : 6 && panelIzquierdo
              ? 9
              : 6
          }
          className={classNames([{ contenidoPasajes: openHidden == true }])}
        >
          {!isQV ? (
            <Fragment>
              <ContenidoPasaje
                referencias={referencias}
                referenciaSeleccionada={referenciaSeleccionada}
                idExpresion={idExpresion}
                match={props.match}
                panelDerecho={panelDerecho}
                panelIzquierdo={panelIzquierdo}
                openHidden={openHidden}
                setOpenHidden={setOpenHidden}
              />
              {referenciaSeleccionada == null ? null : (
                <Paginador
                  {...props}
                  referencias={referencias}
                  referenciaSeleccionada={referenciaSeleccionada}
                  expresionId={props.match.params.expresion}
                />
              )}
            </Fragment>
          ) : (
            <div style={{ padding: "30px 15px" }}>
              <div dangerouslySetInnerHTML={htmlPasajeOriginal()}></div>
              <br />
              <Divider />
              <br />
              <div dangerouslySetInnerHTML={htmlPasajeTraduccion()}></div>
            </div>
          )}
        </Grid>
        <Grid
          item
          sm={3}
          md={3}
          lg={3}
          className={classNames([
            { panelDerechoEscondido: panelDerecho == true },
            "bordoDelMenuDerecho",
          ])}
        >
          <Hidden xsDown>
            {isQV ? (
              <div>
                <Typography
                  variant="h4"
                  style={{
                    padding: "15px 0",
                    textAlign: "center",
                    backgroundColor: "white",
                  }}
                >
                  {" "}
                  {expresionesAsociadas(lang)}
                </Typography>
                <Divider />
                <ul className="ulExpresionesRelacionadas">
                  {qv?.expresiones?.map((expresion, index) => (
                    <li
                      key={expresion.t_id}
                      className="liExpresionesRelacionadas"
                    >
                      <Link
                        to={`${match.path.slice(0, 20)}/pasaje/${
                          expresion.t_id
                        }/${qv?.ref_id}`}
                        onClick={(e) => consultaDePasajes(e)}
                      >
                        <Typography id={expresion.t_id + "/" + index}>
                          {expresion.expresion_original +
                            "  //  " +
                            expresion.expresion_traduccion}
                        </Typography>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <MenuDerechoPasajes
                {...props}
                idExpresion={idExpresion}
                expresiones={expresiones}
                expanded1={expanded1}
                setExpanded1={setExpanded1}
                expanded2={expanded2}
                setExpanded2={setExpanded2}
                expanded3={expanded3}
                setExpanded3={setExpanded3}
                referenciaSeleccionada={referenciaSeleccionada}
                posicionReferenciasConsultadas={posicionReferenciasConsultadas}
              />
            )}
          </Hidden>
        </Grid>
        {openHidden == true ? (
          <Grid item xs={12} className="menuPasajeEscondido">
            <MenuEscondido
              {...props}
              idExpresion={idExpresion}
              expresiones={expresiones}
              expanded1={expanded1}
              setExpanded1={setExpanded1}
              expanded2={expanded2}
              setExpanded2={setExpanded2}
              expanded3={expanded3}
              setExpanded3={setExpanded3}
              referenciaSeleccionada={referenciaSeleccionada}
            />
          </Grid>
        ) : null}
      </Grid>
      <LinearProgress
        className={classNames([{ hidden: !loading }, "loadingBar"])}
      />
      <ModalDeBusqueda
        modalDeBusquedas={modalDeBusquedas}
        setModalDebusquedas={setModalDebusquedas}
        match={props.match}
      />
    </Fragment>
  );
};

export default Pasaje;
