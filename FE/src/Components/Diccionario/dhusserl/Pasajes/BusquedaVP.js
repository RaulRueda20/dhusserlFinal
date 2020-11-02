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
import Snackbar from '@material-ui/core/Snackbar';
import Icon from '@mdi/react';
import { mdiFormatLetterCase } from '@mdi/js';
import { withStyles } from '@material-ui/styles';

//LanguageChanges
import {busquedas, toolTipIdiomaDeLaLista, distincionMayusyMinus, letraNoCoincide} from '../../../../js/Language';

//Other request
import {webService} from '../../../../js/webServices';
import classNames from 'classnames';
import { sesionStore } from '../../../../stores/sesionStore';
import { languageStore } from '../../../../stores/languageStore';
import { letraStore } from '../../../../stores/letraStore';

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

function BusquedaVP(props){
    const {classes}=props;
    const global = React.useContext(sesionStore);
    const globalLanguage = React.useContext(languageStore);
    const globalLetra = React.useContext(letraStore);
    const [insensitiveCase,setInsensitiveCase]=React.useState(false);
    const [snack, setSnack] = React.useState({open : false, text : ""});

    const clickChangeLanguageEsVP=()=>{
        globalLanguage.setLangLista("es");
    }

    const clickChangeLanguageAlVP=()=>{
        globalLanguage.setLangLista("al");
    }

    function handleInsensitiveCase(){
        setInsensitiveCase(!insensitiveCase)
    }

    const ChunkC = (expresiones) =>{
        console.log("expresiones",expresiones)
        props.setChunkList(expresiones)
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
                    var servicebl = "/referencias/busquedaExpresionPorLetra"+"/"+globalLetra.letra+"/"+globalLanguage.langLista
                    webService(servicebl, "POST", {parametro:props.busqueda,case:insensitiveCase}, global.sesion, (data) => {
                    if(globalLetra.letra == letraCapital){
                        console.log("Mayuscula",data.data.response)
                        ChunkC(data.data.response)
                    }else{
                        setSnack({open : true, text: letraNoCoincide(globalLanguage.lang)})
                    }
                    })
                }else{
                    var letraCapital = letra.toUpperCase()
                    var servicebl = "/referencias/busquedaExpresionPorLetra"+"/"+globalLetra.letra+"/"+globalLanguage.langLista
                    webService(servicebl, "POST", {parametro:props.busqueda,case:insensitiveCase}, global.sesion, (data) => {
                    if(globalLetra.letra == letraCapital){
                        console.log(data.data.response)
                        ChunkC(data.data.response)
                    }else{
                        setSnack({open : true, text: letraNoCoincide(globalLanguage.lang)})
                        }
                    })
                }
            }
            
        }else{
            props.setChunkList(props.expresiones.slice(0,50))
        }
    }


    function handleClose() {
        setSnack({open: false, text: ""});
    }


    return(
        <form onSubmit={handleChangeBusquedaPasajes}>
            <Grid container justify="center" alignItems="center" alignContent="center">
                <Grid item xs={7} lg={9}>
                    <FormControl className="busquedaEnExpresiones">
                        <InputLabel htmlFor="input-with-icon-adornment">{busquedas(globalLanguage.lang)}</InputLabel>
                        <Input  
                            onChange={event => props.setBusqueda(event.target.value)}
                            fullWidth
                            id="input-with-icon-adornment"
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
                <Grid item xs={3} lg={2} className={classes.switchPasaje}>
                    <Tooltip title={distincionMayusyMinus(globalLanguage.lang)}>
                        <IconButton onClick={handleInsensitiveCase} className={classNames([{"caseSeleccionado" : insensitiveCase == true}, "case"])}>
                            <Icon path={mdiFormatLetterCase}
                            title="User Profile"
                            size={1}
                            />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item xs={2} lg={1}>
                    <Tooltip title={toolTipIdiomaDeLaLista(globalLanguage.lang)}>
                        {globalLanguage.language == 'es' ?
                            <Button className={classes.imagenesBandera} onClick={clickChangeLanguageAlVP}><img className="banderaBusquedaPasajes" src={al}/></Button>
                            : <Button className={classes.imagenesBandera} onClick={clickChangeLanguageEsVP}><img className="banderaBusquedaPasajes" src={es}/></Button>
                        }                        
                    </Tooltip>
                </Grid>
            </Grid>
            <Snackbar
                anchorOrigin={{ vertical : "top", horizontal : "left" }}
                key={`top,left`}
                open={snack.open}
                onClose={handleClose}
                ContentProps={{
                'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{snack.text}</span>}
            />
        </form>
    )
}

export default  withStyles(styles)(BusquedaVP);