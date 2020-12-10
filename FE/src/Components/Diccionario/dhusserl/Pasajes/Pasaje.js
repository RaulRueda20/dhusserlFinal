//React
import React, { useContext, useState, useEffect, Fragment } from "react";

//Elements
import { Grid, IconButton, Hidden, LinearProgress } from "@material-ui/core";
import classNames from "classnames";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

//Components
import ListaLetras from "../Expresiones/ListaLetras";
import BusquedaVP from "./BusquedaVP";
import ListaIzquierdaExpresion from "./ListaIzquierdaExpresion";
import BusquedaEscondida from "./BusquedaEscondida";
import ContenidoPasaje from "./ContenidoPasaje";
import Paginador from "./Paginador";
import ListaEscondida from "./ListaEscondida";
import MenuDerechoPasajes from "./MenuDerechoPasajes";
import MenuEscondido from "./MenuEscondido";
import ModalDeBusqueda from "../ModalDeBusqueda";
import ModalCaracterInvalido from "../ModalCaracterInvalido";
import ModalNumeros from "../ModalNumeros";

// Other req
import { sesionStore } from "../../../../stores/sesionStore";
import { webService } from "../../../../js/webServices";
import { languageStore } from "../../../../stores/languageStore";
import { letraStore } from "../../../../stores/letraStore";

const Pasaje = (props) => {
  const global = useContext(sesionStore);
  const globalLanguage = useContext(languageStore);
  const globalLetra = useContext(letraStore);
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
  const [modalCaracteresIvalidos, setModalCaracteresInvalidos] = useState(
    false
  );
  const [modalNumeros, setModalNumeros] = useState(false);
  const [flagDeBusqueda, setFlagDeBusqueda] = useState(false);
  const [chunkList, setChunkList] = useState([]);
  const [chunkListGlobal, setChunkListGlobal] = useState([]);

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
    for (let i in referencias) {
      if (referencias[i].refid == referenciaId) {
        let referenciaEncontrada = referencias[i];
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

  useEffect(() => {
    setLoading(true);
    let idDeExpresion = props.match.params.expresion;
    let idDeLaReferencia = props.match.params.id
      ? props.match.params.id
      : false;
    let service = "/expresiones/" + globalLanguage.langLista + "/" + globalLetra.letra;
    if (pasajeService != service) {
      setPasajeService(service);
      webService(service, "GET", {}, global.sesion, ({ data }) => {
        const { response } = data;
        setExpresiones(fixReferencias(response));
        setChunkList(fixReferencias(response).slice(0, 50));
      });
    }
    service = "/referencias/obtieneReferencias/" + idDeExpresion;
    webService(service, "GET", {}, global.sesion, ({ data }) => {
      const { response } = data;
      setReferencias(response);
      setIdExpresion(idDeExpresion);
      if (idDeLaReferencia && idDeLaReferencia != null) {
        setReferenciaSeleccionada(findReferencias(response, idDeLaReferencia));
      } else {
        setReferenciaSeleccionada(response[0]);
      }
      setLoading(false);
      setExpanded1(true);
      setExpanded2(true);
      if (response[0] == null) {
        globalLetra.setLetra(globalLetra.letra);
        setOpenModalN(true);
        setReferenciaSeleccionada(null);
      } else if (globalLetra.letra != response[0].index_de.replace(/ /g, "")) {
        if (!globalLetra.letraFlag) {
          globalLetra.setLetra(response[0].index_de.replace(/ /g, ""));
          globalLetra.setLetraFlag(true);
        }
      }
    });
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    setTimeout(() => {
      if (document.getElementById("VP" + props.idExpresion) != null) {
        document.getElementById("VP" + props.idExpresion).scrollIntoView();
      }
    }, 1000);
  }, [
    globalLetra.letra,
    globalLanguage.langLista,
    props.match.params.expresion,
    props.match.params.id,
    globalLetra.letraFlag,
  ]);

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
            <BusquedaVP
              expresiones={expresiones}
              setExpresiones={setExpresiones}
              setIdExpresion={setIdExpresion}
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              setFlagDeBusqueda={setFlagDeBusqueda}
              setModalDebusquedas={setModalDebusquedas}
              setModalCaracteresInvalidos={setModalCaracteresInvalidos}
              setModalNumeros={setModalNumeros}
              setLoading={setLoading}
              setChunkListGlobal={setChunkListGlobal}
              setChunkList={setChunkList}
            />
            <ListaIzquierdaExpresion
              {...props}
              expresiones={expresiones}
              setExpresiones={setExpresiones}
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
              chunkList={chunkList}
              chunkListGlobal={chunkListGlobal}
              setChunkList={setChunkList}
              setChunkListGlobal={setChunkListGlobal}
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
                setModalCaracteresInvalidos={setModalCaracteresInvalidos}
                setModalNumeros={setModalNumeros}
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
      />
      <ModalCaracterInvalido
        modalCaracteresIvalidos={modalCaracteresIvalidos}
        setModalCaracteresInvalidos={setModalCaracteresInvalidos}
      />
      <ModalNumeros
        modalNumeros={modalNumeros}
        setModalNumeros={setModalNumeros}
      />
    </Fragment>
  );
};

export default Pasaje;
