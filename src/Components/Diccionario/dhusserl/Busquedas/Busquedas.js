//React
import React from 'react';

//Components
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@mdi/react';
import { mdiFormatLetterCase } from '@mdi/js';

//Other request
import {webService} from '../../../../js/webServices';
import { sesionStore } from '../../../../sesionStore';
import classNames from 'classnames';

//Language
import {busquedas, distincionMayusyMinus} from '../../../../js/Language';

const search={
    buscador:{
        margin:"30px 40px",
        width: "93%"
    },
    botonBuscador:{
        marginTop:"35px"
    }
}

function Busquedas(props){
    const {classes}=props;
    const global = React.useContext(sesionStore);
    const [loading, setLoading]=React.useState(false);
    const [insensitiveCase,setInsensitiveCase]=React.useState(false)

    const fixPasajes = (pasajes) => {
        var pasajesArreglados = [];
        var posicionActual = -1;
        var pasajeActual = "";
        var i = 0;
        // console.log("pasajes", pasajes.length)
        while(i < pasajes.length){
            if(pasajeActual != pasajes[i].ref_id){
                posicionActual++
                pasajeActual = pasajes[i].ref_id;
                pasajesArreglados.push({
                    ref_id: pasajes[i].ref_id,
                    ref_original: pasajes[i].ref_original,
                    ref_traduccion: pasajes[i].ref_traduccion,
                    ref_libro_de: pasajes[i].ref_libro_de,
                    ref_libro_es: pasajes[i].ref_libro_es,
                    expresiones: []
                })
                pasajesArreglados[posicionActual].expresiones.push({
                    orden: pasajes[i].orden,
                    expresion_original: pasajes[i].expresion_original,
                    expresion_traduccion: pasajes[i].expresion_traduccion,
                    t_id: pasajes[i].t_id
                })
                i ++
            }else{
                pasajesArreglados[posicionActual].expresiones.push({
                    orden: pasajes[i].orden,
                    expresion_original: pasajes[i].expresion_original,
                    expresion_traduccion: pasajes[i].expresion_traduccion,
                    t_id: pasajes[i].t_id
                })
                i ++
            }
        }
        return pasajesArreglados
    }

    const handleChangeBusqueda=(event)=>{
        event.preventDefault()
        setLoading(true)
        if(props.tipoBusqueda=="Referencia"){
            var servicebr = "/expresiones/busqueda/" + insensitiveCase
            webService(servicebr, "POST", {parametro:props.busqueda}, global.sesion, (data) => {
                var referencias = data.data.response
                props.setExpresionesEncontradas([])
                props.setTipoBusquedaRealizada("Referencia")
                props.setExpresionesEncontradas(fixPasajes(referencias))
                setLoading(false)
            })
        }else{
            var servicebe = "/referencias/busquedaExpresion"
            webService(servicebe, "POST", {parametro:props.busqueda,case:insensitiveCase}, global.sesion, (data) => {
                var expresiones = data.data.response
                props.setExpresionesEncontradas([])
                props.setTipoBusquedaRealizada("Expresion")
                props.setExpresionesEncontradas(expresiones)
                setLoading(false)
            })
        }
    }

    function handleInsensitiveCase(){
        setInsensitiveCase(!insensitiveCase)
    }

    return (
        <form onSubmit={handleChangeBusqueda}>
            <Grid container>
                <Grid item xs={10}>
                    <FormControl className={classes.buscador} >
                        <InputLabel htmlFor="input-with-icon-adornment">{busquedas(props.lang)}</InputLabel>
                        <Input
                        id="input-with-icon-adornment"
                        onChange={event => props.setBusqueda(event.target.value)}
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
                            <InputAdornment position="end">
                                <IconButton type="submit">
                                    <SearchIcon fontSize="small"/>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    </FormControl>
                </Grid>
            </Grid>
            <LinearProgress className={classNames([{"hidden" : !loading}, "loadingBar"])}/>
        </form>
    )
}

export default withStyles(search)(Busquedas);