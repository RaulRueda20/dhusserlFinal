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
import {busquedas, toolTipIdiomaDeLaLista, distincionMayusyMinus, BusquedaGeneral, busquedaPorLetra} from '../../../../js/Language';

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

function BusquedaVP(props){
    const {classes}=props;
    const global = React.useContext(sesionStore);
    const [insensitiveCase,setInsensitiveCase]=React.useState(false);
    const [snack, setSnack] = React.useState({open : false, text : ""});

    const handleSwitch=name=>event=>{
        props.setState({...props.state, [name]:event.target.checked});
    }

    const clickChangeLanguageEsVP=()=>{
        props.setLanguage("es");
    }

    const clickChangeLanguageAlVP=()=>{
        props.setLanguage("al");
    }

    function handleInsensitiveCase(){
        setInsensitiveCase(!insensitiveCase)
    }

    const ChunkB = (expresiones) =>{
        props.setChunkListGlobal(expresiones.slice(0,50))
    }

    const ChunkC = (expresiones) =>{
        console.log("expresiones",expresiones)
        props.setChunkList(expresiones)
    }

    const handleChangeBusquedaPasajes = (event) => {
        event.preventDefault()
        if(props.busqueda!=""){
            if(props.state.checkedA == false){
                var stringCaracteres = props.busqueda.replace(/(?!\w|\s)./g, '')
                var stringNumeros = props.busqueda.replace(/([0-9])./g, '')
                if(props.busqueda.length<2){
                    props.setModalDebusquedas(true)
                }else if(stringCaracteres.length<2){
                    props.setModalCaracteresInvalidos(true)
                }else if(stringNumeros.length<2){
                    props.setModalNumeros(true)
                }else if(props.busqueda.length>2){
                    props.setLoading(true)
                    var servicebe = "/referencias/busquedaExpresion"
                    webService(servicebe, "POST", {parametro:props.busqueda,case:insensitiveCase}, global.sesion, (data) => {
                        ChunkB(data.data.response)
                        var expresiones = data.data.response
                        props.setExpresionesGlobales(expresiones)
                        props.setLoading(false)
                        props.setFlagDeBusqueda(true)
                    })
                }
            }else{
                var letra = props.busqueda.slice(0,1)
                var letraCapital = letra.toUpperCase()
                if(letra == letraCapital){
                    var servicebl = "/referencias/busquedaExpresionPorLetra"+"/"+props.letraMain+"/"+props.language
                    webService(servicebl, "POST", {parametro:props.busqueda,case:insensitiveCase}, global.sesion, (data) => {
                    if(props.letraMain == letraCapital){
                        console.log("Mayuscula",data.data.response)
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
            //props.setChunkList(props.expresiones.slice(0,50))
            console.log("Ay caramba!!")
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
                        <InputLabel htmlFor="input-with-icon-adornment">{busquedas(props.lang)}</InputLabel>
                        <Input  
                            onChange={event => props.setBusqueda(event.target.value)}
                            fullWidth
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="end">
                                    <Tooltip title="Activar para distinguir entre mayusculas y minusculas">
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
                <Grid item xs={3} lg={2} className={classes.switchPasaje}>
                    <Tooltip title={props.state.checkedA ? busquedaPorLetra(props.lang) : BusquedaGeneral(props.lang)}>
                        <Switch
                            checked={props.state.checkedA}
                            onChange={handleSwitch("checkedA")}
                            value="checkedA"
                            inputProps={{'aria-label': 'checkbox with default color'}}
                            size="small"
                        />
                    </Tooltip>
                </Grid>
                <Grid item xs={2} lg={1}>
                    <Tooltip title={toolTipIdiomaDeLaLista(props.lang)}>
                        {props.language == 'es' ?
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