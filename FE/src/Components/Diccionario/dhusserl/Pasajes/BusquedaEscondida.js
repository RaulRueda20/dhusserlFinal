import React from 'react';

//Components
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Icon from '@mdi/react';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import { mdiFormatLetterCase } from '@mdi/js';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/styles';

//LanguageChanges
import {busquedas, toolTipIdiomaDeLaLista, distincionMayusyMinus, letraNoCoincide} from '../../../../js/Language';

//Other request
import {webService} from '../../../../js/webServices';
import classNames from 'classnames';
import { sesionStore } from '../../../../sesionStore';

//Imagen
import es from "../../../../Imagenes/spain.png";
import al from "../../../../Imagenes/germany.png";

const styles={
    imagenesBandera:{
        width: "25px !important",
        height: "15px !important",
        fontSize: "0px",
        minHeight: "0px",
        minWidth: "0px !important",
        padding: "0px !important"
    },
    switchPasaje:{
        textAlign: "center"
    }
}

function BusquedaEscondida(props){
    const {classes}=props;
    const global = React.useContext(sesionStore);
    const [insensitiveCase,setInsensitiveCase]=React.useState(false);

    const clickChangeLanguageEsVP=()=>{
        props.setLanguage("es");
    }

    const clickChangeLanguageAlVP=()=>{
        props.setLanguage("al");
    }

    function handleInsensitiveCase(){
        setInsensitiveCase(!insensitiveCase)
    }

    const handleChangeBusquedaPasajes = (event) => {
        event.preventDefault()
        if(props.busqueda!=""){
            var stringCaracteres = props.busqueda.replace(/(?!\w|\s)./g, '')
            var stringNumeros = props.busqueda.replace(/([0-9])./g, '')
            if(props.busqueda.length<2){
                props.setModalDebusquedas(true)
            }else if(stringCaracteres.length<2){
                props.setModalCaracteresInvalidos(true)
            }else if(stringNumeros.length<2){
                props.setModalNumeros(true)
            }else if(props.busqueda.length>2){
                var letra = props.busqueda.slice(0,1)
                var letraCapital = letra.toUpperCase()
                if(letra == letraCapital){
                    var servicebl = "/referencias/busquedaExpresionPorLetra"+"/"+props.letraMain+"/"+props.language
                    webService(servicebl, "POST", {parametro:props.busqueda,case:insensitiveCase}, global.sesion, (data) => {
                    if(props.letraMain == letraCapital){
                        console.log(data.data.response)
                        ChunkC(data.data.response)
                    }else{
                        setSnack({open : true, text: "La primera letra de la busqueda no coincide con la letra del indice"})
                    }
                    })
                }else{
                    var letraCapital = letra.toUpperCase()
                    var servicebl = "/referencias/busquedaExpresionPorLetra"+"/"+props.letraMain+"/"+props.language
                    webService(servicebl, "POST", {parametro:props.busqueda,case:insensitiveCase}, global.sesion, (data) => {
                    if(props.letraMain == letraCapital){
                        console.log(data.data.response)
                        ChunkC(data.data.response)
                    }else{
                        setSnack({open : true, text: "La primera letra de la busqueda no coincide con la letra del indice"})
                        }
                    })
                }
            }
        }else{
            props.setChunkList(props.expresiones.slice(0,50))
        }
    }

    function clickHandleHidden(){
        props.setOpenHidden(!props.openHidden)
    }

    return(
        <form onSubmit={handleChangeBusquedaPasajes}>
            <Grid container justify="center" alignItems="center" alignContent="center">
                <Grid item xs={6} sm={7} md={9} lg={9}>
                    <FormControl className="busquedaEnExpresiones">
                        <InputLabel htmlFor="input-with-icon-adornment">{busquedas(props.lang)}</InputLabel>
                        <Input  
                            onChange={event => props.setBusqueda(event.target.value)}
                            fullWidth
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="end">
                                    <Tooltip title={distincionMayusyMinus(props.lang)}>
                                        <IconButton onClick={handleInsensitiveCase} className={classNames([{"caseSeleccionado" : insensitiveCase == true}, "case"])}>
                                            <Icon path={mdiFormatLetterCase}
                                            title="User Profile"
                                            size={1}
                                            />
                                        </IconButton>
                                    </Tooltip>
                                </InputAdornment>
                            }
                            endAdornment={
                                <InputAdornment position="start">
                                    <IconButton type="submit" className="lupita">
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Grid>
                <Hidden smUp>
                    <Grid item xs={2}>
                        <IconButton size="small" onClick={clickHandleHidden}>
                        <SwapHorizIcon fontSize="large"/>
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item xs={2} sm={3} md={2} lg={2} className={classes.switchPasaje}>
                    <Tooltip title={distincionMayusyMinus(props.lang)}>
                        <IconButton onClick={handleInsensitiveCase} className={classNames([{"caseSeleccionado" : insensitiveCase == true}, "case"])}>
                            <Icon path={mdiFormatLetterCase}
                            title="User Profile"
                            size={1}
                            />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item xs={2} sm={2} md={1} lg={1}>
                    <Tooltip title={toolTipIdiomaDeLaLista(props.lang)}>
                        {props.language == 'es' ?
                            <Button className={classes.imagenesBandera} onClick={clickChangeLanguageAlVP}><img className="banderaBusquedaPasajes" src={al}/></Button>
                            : <Button className={classes.imagenesBandera} onClick={clickChangeLanguageEsVP}><img className="banderaBusquedaPasajes" src={es}/></Button>
                        }                        
                    </Tooltip>
                </Grid>
            </Grid>
        </form>
    )

}

export default withStyles(styles)(BusquedaEscondida);