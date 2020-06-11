//React
import React from 'react';

//Elements
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';
import Tooltip from '@material-ui/core/Tooltip';

//Componets
import BanderaPasajes from './BanderaPasajes';

//Other req
import {descarga, noContienePasajes} from '../../../../js/Language';
import { compose } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    gridTituloPasaje:{
      textAlign: "center",
      margin:"20px 0 !important"
    },
    typoSize:{
      [theme.breakpoints.down('xs')]: {
        fontSize : " 1.5rem !important",
      }
    },
    contenedor:{
      justify: "center",
      alignItems: "center",
      alignContent: "center",
      borderRight: "1px double lightgrey",
      borderLeft: "1px double lightgrey",
      overflowY: "auto",
      maxHeight: "calc(91vh-31px)"
    },
    botonDescargas:{
        margin:"20px 0 !important",
        textAlign:"center"
    },
    bandera:{
        margin:"30px 0 !important",
        textAlign:"center"
    }
}))

function PasajesRenderizados(props){
    const classes = useStyles();
    const theme = useTheme();
    const [pasajeRenderizado, setPasajeRenderizado] = React.useState({
        "original" : "",
        "traduccion" : ""
    })

    React.useEffect(() => {
        if(props.referenciaSeleccionada != null){
            setPasajeRenderizado({
                original : resaltarBusqueda(props.referenciaSeleccionada.pasaje_original,props.referenciaSeleccionada.expresion_original),
                traduccion : resaltarBusqueda(props.referenciaSeleccionada.pasaje_traduccion,props.referenciaSeleccionada.expresion_traduccion) 
            })
        }else{
            setPasajeRenderizado({
                original : noContienePasajes(props.lang),
                traduccion : noContienePasajes(props.lang) 
            })
        }
    }, [props.referenciaSeleccionada, props.lang])

    function resaltarBusqueda(string,separador){
        var split = string.split(separador)
        var resultado = split.join("<span class='resaltador'>" + separador + "</span>")
        return resultado
    }

    function htmlPasajeOriginal(){
        return {__html:pasajeRenderizado.original}
    }

    function htmlPasajeTraduccion(){
        return {__html:pasajeRenderizado.traduccion}
    }

    return (
        <div>
            {props.cerrado ? 
            <Grid container>
                <Grid container xs={6}>
                    <Grid item xs={2} sm={2} md={1} lg={1} className={classes.botonDescargas}>
                    <Tooltip title={descarga(props.lang)}>
                        <IconButton size="small" className="iconosIluminados" onClick={props.clickHandleDescargas}>
                        <GetAppIcon fontSize="large"/>
                        </IconButton>
                    </Tooltip>
                    </Grid>
                    <Grid item xs={8} className={classes.gridTituloPasaje}>
                        <Typography className={classes.typoSize} variant="h2">{props.tituloPasaje.expresion_original}</Typography>
                    </Grid>
                    <Grid item xs={12} className="pasajesRenderizados"><div id={"pasajes"} dangerouslySetInnerHTML={htmlPasajeOriginal()}></div></Grid>
                </Grid>
                <Grid container xs={6}>
                    <Grid item xs={12} className={classes.gridTituloPasaje}><Typography className={classes.typoSize} variant="h2">{props.tituloPasaje.expresion_traduccion}</Typography></Grid>
                    <Grid item xs={12} className="pasajesRenderizados"><div id={"pasajes"} dangerouslySetInnerHTML={htmlPasajeTraduccion()}></div></Grid>
                </Grid>
            </Grid>
            :
            props.languageP == "al" ? 
                <Grid container>
                    <Grid containerxs={12}>
                        <Grid item xs={2} sm={2} md={1} lg={1} className={classes.botonDescargas}>
                        <Tooltip title={descarga(props.lang)}>
                            <IconButton size="small" className="iconosIluminados" onClick={props.clickHandleDescargas}>
                            <GetAppIcon fontSize="large"/>
                            </IconButton>
                        </Tooltip>
                        </Grid>
                    </Grid>
                    <Grid item xs={8} sm={8} md={10} lg={10} className={classes.gridTituloPasaje}>
                        <Typography className={classes.typoSize} variant="h2">{props.tituloPasaje.expresion_original}</Typography>
                    </Grid>
                    <Grid item xs={2} sm={2} md={1} lg={1} className={classes.bandera}>
                        <BanderaPasajes languageP={props.languageP} setLanguageP={props.setLanguageP} lang={props.lang}/>
                    </Grid>
                    <Grid item xs={12} className="pasajesRenderizados"><div id={"pasajes"} dangerouslySetInnerHTML={htmlPasajeOriginal()}></div></Grid>
                </Grid> 
                :
                <Grid container>
                    <Grid containerxs={12}>
                        <Grid item xs={2} sm={2} md={1} lg={1} className={classes.botonDescargas}>
                        <Tooltip title={descarga(props.lang)}>
                            <IconButton size="small" className="iconosIluminados" onClick={props.clickHandleDescargas}>
                            <GetAppIcon fontSize="large"/>
                            </IconButton>
                        </Tooltip>
                        </Grid>
                    </Grid>
                    <Grid item xs={8} sm={8} md={10} lg={10} className={classes.gridTituloPasaje}>
                        <Typography className={classes.typoSize} variant="h2">{props.tituloPasaje.expresion_traduccion}</Typography>
                    </Grid>
                    <Grid item xs={2} sm={2} md={1} lg={1} className={classes.bandera}>
                        <BanderaPasajes languageP={props.languageP} setLanguageP={props.setLanguageP} lang={props.lang}/>
                    </Grid>
                    <Grid item xs={12} className="pasajesRenderizados"><div id={"pasajes"} dangerouslySetInnerHTML={htmlPasajeTraduccion()}></div></Grid>
                </Grid>
            }
        </div>
    )
}

export default PasajesRenderizados;