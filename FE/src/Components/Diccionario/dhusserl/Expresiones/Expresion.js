//React
import React from 'react';

//Elements
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


//Components
import ListaLetras from './ListaLetras';
import LetraIndice from './LetraIndice';
import BanderaButon from './BanderaButon';
import ListaExpresiones from './ListaExpresiones';
import MenuDerecho from './MenuDerecho';
import Busqueda from './Busqueda';
import BusquedaAbajo from './BusquedaAbajo';
import ModalDeBienvenida from './ModalDeBienvenida';
import MenuBajo from './MenuBajo';
import ModalDeNulos from '../ModalDeNulos';
import ModalDeBusqueda from '../ModalDeBusqueda';
import ModalCaracterInvalido from '../ModalCaracterInvalido';
import ModalNumeros from '../ModalNumeros';
import Snackbars from '../../Login/Snackbars';

//Other req
import {Switch, Redirect, Link, Route} from 'react-router-dom';
import {webService, loginService} from '../../../../js/webServices';
import * as localStore from '../../../../js/localStore';
import { sesionStore } from '../../../../stores/sesionStore';
import { languageStore } from '../../../../stores/languageStore';
import { letraStore } from '../../../../stores/letraStore';

function Expresion(props){
  const global = React.useContext(sesionStore);
  const globalLanguage = React.useContext(languageStore);
  const globalLetra = React.useContext(letraStore);
  const [expresiones, setExpresiones] = React.useState([]);
  const [idExpresion, setIdExpresion] = React.useState('');
  const [loading, setLoading]=React.useState(false);
  const [expresionSeleccionada, setExpresionSeleccionada]=React.useState({id:"", expresione:""});
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(false);
  const [busqueda, setBusqueda] = React.useState("");
  const [menuEscondido,setMenuEscondido]=React.useState(false);
  const [modalDeBusquedas,setModalDebusquedas]=React.useState(false);
  const [modalCaracteresIvalidos,setModalCaracteresInvalidos]=React.useState(false);
  const [modalNumeros,setModalNumeros]=React.useState(false);
  const [openModalN, setOpenModalN] = React.useState(false);
  const [flagDeBusqueda, setFlagDeBusqueda] = React.useState(false);
  const [chunkList, setChunkList] = React.useState([]);
  const [chunkListGlobal, setChunkListGlobal] = React.useState([]);
  const [snackbar, setSnackbar]=React.useState({open:false, variant:"", message:""});
  
  const fixReferencias = (referencias) => {
    var expresiones=[]
    var posicActual = -1
    var expreActual = ""
    var i = 0
    while (i<referencias.length){
      if (expreActual != referencias[i].expresion){
        posicActual++
        expreActual = referencias[i].expresion
        expresiones.push({
          clave : referencias[i].clave,
          expresion : referencias[i].expresion,
          id : referencias[i].id,
          index_de: referencias[i].index_de,
          index_es: referencias[i].index_es,
          pretty_e: referencias[i].pretty_e,
          pretty_t: referencias[i].pretty_t,
          referencias : [],
          traduccion: referencias[i].traduccion
        })
        expresiones[posicActual].referencias.push({
          referencia_original : referencias[i].referencia_original,
          referencia_traduccion : referencias[i].referencia_traduccion,
          refid : referencias[i].refid,
          orden: referencias[i].orden,
        })
        i++
      }else{
        expresiones[posicActual].referencias.push({
          referencia_original : referencias[i].referencia_original,
          referencia_traduccion : referencias[i].referencia_traduccion,
          refid : referencias[i].refid,
          orden: referencias[i].orden,
        })
        i++
      }
    }
    return expresiones
  }
  
  React.useEffect(()=>{
    setLoading(true)
    if(document.getElementById("listaIzquierda").firstChild != null) document.getElementById("listaIzquierda").firstChild.scrollIntoView()
    var service = "/expresiones/" + globalLanguage.langLista + "/" + globalLetra.letra
    webService(service, "GET", {}, global.sesion, (data) => {
      setExpresiones(fixReferencias(data.data.response))
      setChunkList(fixReferencias(data.data.response).slice(0,50))
      if(!flagDeBusqueda){
        setExpresionesGlobales(fixReferencias(data.data.response))
        if(idExpresion === ''){
          setIdExpresion(data.data.response.length > 0 ? data.data.response[0].id : "")
        }
      }
      setLoading(false)
    })
    if(localStore.getObjects("bienvenida")==false){
      setOpenModal(true)
      localStore.setObjects("bienvenida",true)
    }
  }, [globalLetra.letra, globalLanguage.langLista, flagDeBusqueda, flagDeBusqueda])

  function getJerarquia(event){
    setExpresionSeleccionada({id: event.currentTarget.id.split("/")[0], expresion:event.currentTarget.id.split("/")[1]})
    setExpanded1(true)
    setExpanded2(true)
  }

  function handleMenuEscondido(){
    setMenuEscondido(!menuEscondido)
  }

  const handleClose=(event,reason)=>{
    setSnackbar({open:false,variant:snackbar.variant,message:""})
  }

  return(
    <div>
      <Grid container>
        <Grid item xs={12} >
            <ListaLetras flagDeBusqueda={flagDeBusqueda} chunkListGlobal={chunkListGlobal} setChunkListGlobal={setChunkListGlobal} setChunkList={setChunkList} 
            />
        </Grid>
        <Grid item xs={2} sm={1} md={1} xl={1} align="center" style={{borderRight:"1px rgb(240, 240, 240) solid"}}>
            <LetraIndice/>
            <BanderaButon/>
        </Grid>
         <Grid item xs={10} sm={8} md={8} xl={8} aling='center' >
            <ListaExpresiones match={props.match} expresiones={expresiones} setExpresiones={setExpresiones} idExpresion={idExpresion} 
            setIdExpresion={setIdExpresion} 
            expresionSeleccionada={expresionSeleccionada} setExpresionSeleccionada={setExpresionSeleccionada}
            getJerarquia={getJerarquia} menuEscondido={menuEscondido} expresionesGlobales={expresionesGlobales}
            setOpenModalN={setOpenModalN} flagDeBusqueda={flagDeBusqueda} 
            chunkList={chunkList} chunkListGlobal={chunkListGlobal} setChunkList={setChunkList} setChunkListGlobal={setChunkListGlobal}
            />
        </Grid>
        <Hidden smUp>
          {menuEscondido == false ? 
            <IconButton className="iconoAbajo"
            onClick={handleMenuEscondido} size="medium">
              <KeyboardArrowDownIcon fontSize="large"/>
            </IconButton>:
            <IconButton className="iconoArriba"
            onClick={handleMenuEscondido} size="medium">
              <KeyboardArrowUpIcon fontSize="large"/>
            </IconButton>
          }
        </Hidden> 
        <Grid item xs={12} sm={3} md={3} lg={3} className={classNames([{"menuAbajoEscondido" : menuEscondido==true}, "bordoDelMenuDerecho"])}>
          <Hidden xsDown> 
            <Busqueda expresiones={expresiones} setExpresiones={setExpresiones}
            busqueda={busqueda} setBusqueda={setBusqueda} setLoading={setLoading} expresionesGlobales={expresionesGlobales} 
            setExpresionesGlobales={setExpresionesGlobales} setModalDebusquedas={setModalDebusquedas} 
            setModalCaracteresInvalidos={setModalCaracteresInvalidos} setModalNumeros={setModalNumeros} setFlagDeBusqueda={setFlagDeBusqueda}
            idExpresion={idExpresion} setIdExpresion={setIdExpresion} setChunkListGlobal={setChunkListGlobal} setChunkList={setChunkList}
            />
            <MenuDerecho {...props} idExpresion={idExpresion} setIdExpresion={setIdExpresion}
              expresiones={expresiones} expresionSeleccionada={expresionSeleccionada} 
              setExpresionSeleccionada={setExpresionSeleccionada} expanded1={expanded1} setExpanded1={setExpanded1} 
              expanded2={expanded2} setExpanded2={setExpanded2} expanded3={expanded3} setExpanded3={setExpanded3}
              getJerarquia={getJerarquia}
              flagDeBusqueda={flagDeBusqueda} expresionesGlobales={expresionesGlobales}
              />
          </Hidden>
          <Hidden smUp>
            <BusquedaAbajo expresiones={expresiones} setExpresiones={setExpresiones}
            busqueda={busqueda} setBusqueda={setBusqueda} expresionesGlobales={expresionesGlobales} 
            setExpresionesGlobales={setExpresionesGlobales} setModalDebusquedas={setModalDebusquedas} 
            setModalCaracteresInvalidos={setModalCaracteresInvalidos} setModalNumeros={setModalNumeros}
            setChunkListGlobal={setChunkListGlobal} setFlagDeBusqueda={setFlagDeBusqueda} setLoading={setLoading}
            />
            <MenuBajo {...props} idExpresion={idExpresion} setIdExpresion={setIdExpresion}
            expresiones={expresiones} expresionSeleccionada={expresionSeleccionada} 
            setExpresionSeleccionada={setExpresionSeleccionada} expanded1={expanded1} setExpanded1={setExpanded1} 
            expanded2={expanded2} setExpanded2={setExpanded2} expanded3={expanded3} setExpanded3={setExpanded3}
            getJerarquia={getJerarquia}/>
          </Hidden>
        </Grid> 
      </Grid>
      <LinearProgress className={classNames([{"hidden" : !loading}, "loadingBar"])}/>
      <ModalDeNulos openModalN={openModalN} setOpenModalN={setOpenModalN}/>
      <ModalDeBienvenida openModal={openModal} setOpenModal={setOpenModal}/>
      <ModalDeBusqueda modalDeBusquedas={modalDeBusquedas} setModalDebusquedas={setModalDebusquedas}/>
      <ModalCaracterInvalido modalCaracteresIvalidos={modalCaracteresIvalidos} setModalCaracteresInvalidos={setModalCaracteresInvalidos}/>
      <ModalNumeros modalNumeros={modalNumeros} setModalNumeros={setModalNumeros}/>
      <Link id="toLogin" to="/"/>
      <Snackbars snackbar={snackbar} handleClose={handleClose}/>
    </div>
  )
}

export default Expresion;
