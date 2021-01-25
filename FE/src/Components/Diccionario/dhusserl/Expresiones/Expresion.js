//React
import React, { useContext, useState, useEffect, Fragment } from "react";

//Elements
import classNames from "classnames";
import { Grid, LinearProgress, Hidden, IconButton } from "@material-ui/core";
import {
  KeyboardArrowUp as KeyboardArrowUpIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from "@material-ui/icons";

//Components
import ListaLetras from "./ListaLetras";
import LetraIndice from "./LetraIndice";
import BanderaButon from "./BanderaButon";
import ListaExpresiones from "./ListaExpresiones";
import MenuDerecho from "../Common/MenuDerecho";
import Busqueda from "../Common/Busqueda";
import BusquedaAbajo from "./BusquedaAbajo";
import ModalDeBienvenida from "./ModalDeBienvenida";
import MenuBajo from "./MenuBajo";
import ModalDeNulos from "../ModalDeNulos";
import ModalDeBusqueda from "../ModalDeBusqueda";
import ModalCaracterInvalido from "../ModalCaracterInvalido";
import ModalNumeros from "../ModalNumeros";

//Other req
import { webService } from "../../../../js/webServices";
import * as localStore from "../../../../js/localStore";
import { sesionStore } from "../../../../stores/sesionStore";
import { expresionesStore } from "../../../../stores/expresionStore";

const Expresion = (props) => {
  const global = useContext(sesionStore);
  const { state } = global;
  const { sesion, ultimasVisitadas, lang, langLista, letra } = state;

  const globalExpresion = useContext(expresionesStore);
  const { store, attend } = globalExpresion;

  const [loading, setLoading] = useState(false);

  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(true);

  const [openModal, setOpenModal] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [menuEscondido, setMenuEscondido] = useState(false);
  const [modalDeBusquedas, setModalDebusquedas] = useState(false);
  const [modalCaracteresIvalidos, setModalCaracteresInvalidos] = useState(
    false
  );
  const [modalNumeros, setModalNumeros] = useState(false);
  const [openModalN, setOpenModalN] = useState(false);

  const fixReferencias = (referencias) => {
    console.log(referencias);
    var expresiones = [];
    var posicActual = -1;
    var expreActual = "";
    var i = 0;
    while (i < referencias.length) {
      if (expreActual != referencias[i].expresion) {
        posicActual++;
        expreActual = referencias[i].expresion;
        expresiones.push({
          clave: referencias[i].clave,
          nombreExpresion: referencias[i].expresion,
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

  useEffect(() => {
    props.setFlagCambio("expresiones");
    setLoading(true);
    if (document.getElementById("listaIzquierda").firstChild != null)
      document.getElementById("listaIzquierda").firstChild.scrollIntoView();
    const service = "/expresiones/" + langLista + "/" + letra;
    webService(service, "GET", {}, sesion, (data) => {
      attend({
        type: "START_EXPRESIONES",
        payload: {
          expresiones: fixReferencias(data.data.response),
          chunk: fixReferencias(data.data.response).slice(0, 50),
        },
      });
      setLoading(false);
    });
    if (localStore.getObjects("bienvenida") == false) {
      setOpenModal(true);
      localStore.setObjects("bienvenida", true);
    }
  }, [letra, langLista, ultimasVisitadas]);

  const getJerarquia = (event) => {
    attend({
      type: "SELECT_EXPRESION",
      payload: {
        id: event.currentTarget.id.split("/")[0],
        expresion: event.currentTarget.id.split("/")[1],
      },
    });
    setExpanded1(true);
    setExpanded2(true);
  };

  const handleMenuEscondido = () => {
    setMenuEscondido(!menuEscondido);
  };

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <ListaLetras />
        </Grid>
        <Grid
          item
          xs={2}
          sm={1}
          md={1}
          xl={1}
          align="center"
          style={{ borderRight: "1px rgb(240, 240, 240) solid" }}
        >
          <LetraIndice />
          <BanderaButon />
        </Grid>
        <Grid item xs={10} sm={8} md={8} xl={8} aling="center">
          <ListaExpresiones
            match={props.match}
            getJerarquia={getJerarquia}
            menuEscondido={menuEscondido}
            setOpenModalN={setOpenModalN}
          />
        </Grid>
        <Hidden smUp>
          {menuEscondido == false ? (
            <IconButton
              className="iconoAbajo"
              onClick={handleMenuEscondido}
              size="medium"
            >
              <KeyboardArrowDownIcon fontSize="large" />
            </IconButton>
          ) : (
            <IconButton
              className="iconoArriba"
              onClick={handleMenuEscondido}
              size="medium"
            >
              <KeyboardArrowUpIcon fontSize="large" />
            </IconButton>
          )}
        </Hidden>
        <Grid
          item
          xs={12}
          sm={3}
          md={3}
          lg={3}
          className={classNames([
            { menuAbajoEscondido: menuEscondido == true },
            "bordoDelMenuDerecho",
          ])}
        >
          <Hidden xsDown>
            <Busqueda
              busqueda={busqueda}
              bandera={false}
              setBusqueda={setBusqueda}
              setLoading={setLoading}
              setModalDebusquedas={setModalDebusquedas}
              setModalCaracteresInvalidos={setModalCaracteresInvalidos}
              setModalNumeros={setModalNumeros}
            />
            <MenuDerecho
              {...props}
              expanded1={expanded1}
              setExpanded1={setExpanded1}
              expanded2={expanded2}
              setExpanded2={setExpanded2}
              expanded3={expanded3}
              setExpanded3={setExpanded3}
              getJerarquia={getJerarquia}
            />
          </Hidden>
          <Hidden smUp>
            <BusquedaAbajo
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              setModalDebusquedas={setModalDebusquedas}
              setModalCaracteresInvalidos={setModalCaracteresInvalidos}
              setModalNumeros={setModalNumeros}
              setLoading={setLoading}
            />
            <MenuBajo
              {...props}
              expanded1={expanded1}
              setExpanded1={setExpanded1}
              expanded2={expanded2}
              setExpanded2={setExpanded2}
              expanded3={expanded3}
              setExpanded3={setExpanded3}
              getJerarquia={getJerarquia}
            />
          </Hidden>
        </Grid>
      </Grid>
      <LinearProgress
        className={classNames([{ hidden: !loading }, "loadingBar"])}
      />
      <ModalDeNulos openModalN={openModalN} setOpenModalN={setOpenModalN} />
      <ModalDeBienvenida openModal={openModal} setOpenModal={setOpenModal} />
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

export default Expresion;
