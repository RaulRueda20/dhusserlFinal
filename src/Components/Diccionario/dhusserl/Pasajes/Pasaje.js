//React
import React from 'react';

//Elements
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import classNames from 'classnames';
import Hidden from '@material-ui/core/Hidden';
import LinearProgress from '@material-ui/core/LinearProgress'

//Components
import ListaLetras from '../Expresiones/ListaLetras';
import BusquedaVP from './BusquedaVP';
import ListaIzquierdaExpresion from './ListaIzquierdaExpresion';
import BusquedaEscondida from './BusquedaEscondida';
import ContenidoPasaje from './ContenidoPasaje';
import Paginador from './Paginador';
import ListaEscondida from './ListaEscondida';
import MenuDerechoPasajes from './MenuDerechoPasajes';
import MenuEscondido from './MenuEscondido';
import ModalDeNulos from '../ModalDeNulos';
import ModalDeBusqueda from '../ModalDeBusqueda';
import ModalCaracterInvalido from '../ModalCaracterInvalido';
import ModalNumeros from '../ModalNumeros'

// Other req
import {webService} from '../../../../js/webServices';

function Pasaje(props){
  const [expresiones, setExpresiones] = React.useState([]);
  const [expresionesGlobales, setExpresionesGlobales] = React.useState([]);
  const [idExpresion, setIdExpresion] = React.useState('');
  const [languageP,setLanguageP] = React.useState("al");
  const [referenciaSeleccionada, setReferenciaSeleccionada]=React.useState(null);
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(true);
  const [pasajeService, setPasajeService] = React.useState("");
  const [panelIzquierdo,setPanelIzquierdo]=React.useState(false);
  const [panelDerecho, setPanelDerecho]=React.useState(false);
  const [busqueda, setBusqueda] = React.useState("");
  const [state, setState]=React.useState({checkedA:true});
  const [openHidden, setOpenHidden]=React.useState(false);
  const [loading, setLoading]=React.useState(false);
  const [posicionReferenciasConsultadas,setPosicionReferenciasConsultadas]=React.useState("");
  const [referencias, setReferencias] = React.useState([]);
  const [openModalN, setOpenModalN] = React.useState(false);
  const [modalDeBusquedas,setModalDebusquedas]=React.useState(false);
  const [modalCaracteresIvalidos,setModalCaracteresInvalidos]=React.useState(false);
  const [modalNumeros,setModalNumeros]=React.useState(false);
  const [flagDeBusqueda, setFlagDeBusqueda] = React.useState(false);
  const [chunkList, setChunkList] = React.useState([]);
  const [chunkListGlobal, setChunkListGlobal] = React.useState([]);
  
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
          refid : referencias[i].refid, orden: referencias[i].orden
        })
        i++
      }else{
        expresiones[posicActual].referencias.push({
          referencia_original : referencias[i].referencia_original,
          referencia_traduccion : referencias[i].referencia_traduccion,
          refid : referencias[i].refid, orden: referencias[i].orden,
        })
        i++
      }
    }
    return expresiones
  }

  const findReferencias = (referencias, referenciaId) =>{
    for (var i in referencias){
      if(referencias[i].refid==referenciaId){
        var referenciaEncontrada=referencias[i];
      }
    }
    return referenciaEncontrada
  }

  function handlePanelIzquierdo(){
    setPanelIzquierdo(!panelIzquierdo)
  }

  function handlePanelDerecho(){
    setPanelDerecho(!panelDerecho)
  }

  function updateDimensions(){
    if(window.innerWidth > 600) {
      setOpenHidden(false);
    } 
  }
  
  React.useEffect(()=>{
    setLoading(true)
    var idDeExpresion=props.match.params.expresion;
    var idDeLaReferencia=props.match.params.id ? props.match.params.id : false;
    console.log('idDeLaReferencia', idDeLaReferencia)
    var service = "/expresiones/" + props.language + "/" + props.letraMain;
    if(pasajeService != service){
      setPasajeService(service)
      webService(service, "GET", {}, (dataE) => {
        setExpresiones(fixReferencias(dataE.data.response))
        setChunkList(fixReferencias(dataE.data.response).slice(0,50))
        if(!flagDeBusqueda){
          setExpresionesGlobales(fixReferencias(dataE.data.response))
        }
      })
    }
    var service = "/referencias/obtieneReferencias/" + idDeExpresion
    webService(service, "GET", {}, (data) => {
      setReferencias(data.data.response)
      setIdExpresion(idDeExpresion)
      if(idDeLaReferencia && idDeLaReferencia!=null){
        setReferenciaSeleccionada(findReferencias(data.data.response, idDeLaReferencia))
      }else{
        setReferenciaSeleccionada(data.data.response[0])
      }
      setLoading(false)
      setExpanded1(true)
      setExpanded2(true)
      if(data.data.response[0]==null){
        props.setLetraMain(props.letraMain)
        setOpenModalN(true)
        setReferenciaSeleccionada(null)
      }else if(props.letraMain != data.data.response[0].index_de.replace(/ /g,'')){
        if(!props.flagLetraMain){
        props.setLetraMain(data.data.response[0].index_de.replace(/ /g,''))
        props.setFlagLetraMain(true)
        }
      }
    })
    updateDimensions()
    window.addEventListener("resize", updateDimensions);
    setTimeout(() => {
      if(document.getElementById("VP" + props.idExpresion) != null){
        document.getElementById("VP" + props.idExpresion).scrollIntoView()
        
      }
    }, 1000)
    if(state.checkedA==true){
      setChunkListGlobal([])
    }
  }, [props.letraMain, props.language, props.match.params.expresion, props.match.params.id, props.flagLetraMain, expresionesGlobales, state])

  return(
    <div>
       <Hidden xsDown>
         {panelIzquierdo == false ? 
         <IconButton className="IconoIzquierdo" 
         onClick={handlePanelIzquierdo} size="small">
           <ArrowBackIosIcon size="small" className="iconosIluminados"/>
         </IconButton>:
         <IconButton className={classNames([{"botonIzquierdoEscondido" : panelIzquierdo==true}])}
         onClick={handlePanelIzquierdo} size="small">
           <ArrowForwardIosIcon size="small" className="iconosIluminados"/>
         </IconButton>
         }
         {panelDerecho == false ? 
         <IconButton className="IconoDerecho" onClick={handlePanelDerecho} size="small">
           <ArrowForwardIosIcon size="small" className="iconosIluminados"/>
         </IconButton>:
         <IconButton className={classNames([{"botonDerechoEscondido" : panelDerecho==true}])} 
         onClick={handlePanelDerecho} size="small">
           <ArrowBackIosIcon size="small" className="iconosIluminados"/>
         </IconButton>
         }
       </Hidden>
       <Grid container>
         <Grid item xs={12}>
           <ListaLetras letraMain={props.letraMain} setLetraMain={props.setLetraMain} setFlagLetraMain={props.setFlagLetraMain} flagLetraMain={props.flagLetraMain} setState={setState} state={state} language={props.language} 
           setChunkListGlobal={setChunkListGlobal} setChunkList={setChunkList}/>
         </Grid>
         <Grid item xs={12} sm={3} md={3} lg={3} className={classNames([{"panelIzquierdoEscondido" : panelIzquierdo==true}])}>
           <Hidden xsDown>
             <BusquedaVP expresiones={expresiones} setExpresiones={setExpresiones} lang={props.lang} setIdExpresion={setIdExpresion}
             language={props.language} setLanguage={props.setLanguage} busqueda={busqueda} setBusqueda={setBusqueda} setFlagDeBusqueda={setFlagDeBusqueda}
              state={state} setState={setState} setExpresionesGlobales={setExpresionesGlobales} setModalDebusquedas={setModalDebusquedas} 
             setModalCaracteresInvalidos={setModalCaracteresInvalidos} setModalNumeros={setModalNumeros} setLoading={setLoading} expresionesGlobales={expresionesGlobales}
             setChunkListGlobal={setChunkListGlobal} setChunkList={setChunkList} letraMain={props.letraMain} flagLetraMain={props.flagLetraMain}/>
             <ListaIzquierdaExpresion {...props} expresiones={expresiones} setExpresiones={setExpresiones} idExpresion={idExpresion} 
               setIdExpresion={setIdExpresion} language={props.language} setLanguage={props.setLanguage} referenciaSeleccionada={referenciaSeleccionada}
               setReferenciaSeleccionada={setReferenciaSeleccionada} setExpanded1={setExpanded1} setExpanded2={setExpanded2} match={props.match} setFlagLetraMain={props.setFlagLetraMain}
               setPosicionReferenciasConsultadas={setPosicionReferenciasConsultadas} expresionesGlobales={expresionesGlobales} state={state} chunkList={chunkList}
               chunkListGlobal={chunkListGlobal} setChunkList={setChunkList} setChunkListGlobal={setChunkListGlobal} letraMain={props.letraMain} idDeLaReferencia={props.match.params.id}
               />
           </Hidden>
           {openHidden == true ?
             <div>
               <BusquedaEscondida expresiones={expresiones} setExpresiones={setExpresiones} lang={props.lang} 
               language={props.language} setLanguage={props.setLanguage} busqueda={busqueda} setBusqueda={setBusqueda}
                state={state} setState={setState} openHidden={openHidden} setOpenHidden={setOpenHidden} 
                setExpresionesGlobales={setExpresionesGlobales} setModalDebusquedas={setModalDebusquedas} 
                setModalCaracteresInvalidos={setModalCaracteresInvalidos} setModalNumeros={setModalNumeros} setLoading={setLoading}
                setChunkListGlobal={setChunkListGlobal} setChunkList={setChunkList}/>
               <ListaEscondida {...props} expresiones={expresiones} setExpresiones={setExpresiones} idExpresion={idExpresion} 
               setIdExpresion={setIdExpresion} language={props.language} setLanguage={props.setLanguage} referenciaSeleccionada={referenciaSeleccionada}
               setReferenciaSeleccionada={setReferenciaSeleccionada} setExpanded1={setExpanded1} setExpanded2={setExpanded2} state={state} setFlagLetraMain={props.setFlagLetraMain}
               expresionesGlobales={expresionesGlobales}  chunkList={chunkList} chunkListGlobal={chunkListGlobal}/>/>
             </div>
              : null
           }
         </Grid>
         <Grid item xs={12} sm={6} md={panelDerecho ? panelIzquierdo ? 12 : 9 : 6 && panelIzquierdo ? 9 : 6} lg={panelDerecho ? panelIzquierdo ? 12 : 9 : 6 && panelIzquierdo ? 9 : 6}
         className={classNames([{"contenidoPasajes" : openHidden==true}])}>
             <ContenidoPasaje referencias={referencias}  referenciaSeleccionada={referenciaSeleccionada} languageP={languageP} setLanguageP={setLanguageP}
             idExpresion={idExpresion} lang={props.lang} match={props.match} panelDerecho={panelDerecho} panelIzquierdo={panelIzquierdo} 
             lang={props.lang} openHidden={openHidden} setOpenHidden={setOpenHidden} 
             />
             {referenciaSeleccionada == null ? null 
             : 
             <Paginador {...props} lang={props.lang} referencias={referencias} referenciaSeleccionada={referenciaSeleccionada} expresionId={props.match.params.expresion} />}
         </Grid>
         <Grid item sm={3} md={3} lg={3} className={classNames([{"panelDerechoEscondido" : panelDerecho==true}, "bordoDelMenuDerecho"])}>
           <Hidden xsDown>
             <MenuDerechoPasajes {...props} idExpresion={idExpresion} language={props.language}
             expresiones={expresiones} expanded1={expanded1} setExpanded1={setExpanded1} 
             expanded2={expanded2} setExpanded2={setExpanded2} expanded3={expanded3} setExpanded3={setExpanded3}
             lang={props.lang} referenciaSeleccionada={referenciaSeleccionada} letraMain={props.letraMain} setLetraMain={props.setLetraMain}
             setFlagLetraMain={props.setFlagLetraMain} posicionReferenciasConsultadas={posicionReferenciasConsultadas}
             />
           </Hidden>
         </Grid>
         {openHidden == true ? 
           <Grid item xs={12} className="menuPasajeEscondido">
             <MenuEscondido {...props} idExpresion={idExpresion} language={props.language}
             expresiones={expresiones} expanded1={expanded1} setExpanded1={setExpanded1} 
             expanded2={expanded2} setExpanded2={setExpanded2} expanded3={expanded3} setExpanded3={setExpanded3}
             lang={props.lang} referenciaSeleccionada={referenciaSeleccionada} setFlagLetraMain={props.setFlagLetraMain}
             />
           </Grid>
           :null
         }
       </Grid>
       <LinearProgress className={classNames([{"hidden" : !loading}, "loadingBar"])}/>
       <ModalDeBusqueda modalDeBusquedas={modalDeBusquedas} setModalDebusquedas={setModalDebusquedas} lang={props.lang}/>
       <ModalCaracterInvalido modalCaracteresIvalidos={modalCaracteresIvalidos} setModalCaracteresInvalidos={setModalCaracteresInvalidos} lang={props.lang}/>
       <ModalNumeros modalNumeros={modalNumeros} setModalNumeros={setModalNumeros} lang={props.lang}/>
       {/* <Link id="toLogin" to="/"/> */}
    </div>
  )
}

export default Pasaje;
