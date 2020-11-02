// React
import React from 'react';

// Components
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { withStyles } from '@material-ui/styles';

// Elements
import ListaDeConsultados from './ListaDeConsultados';

// Other req
import {webService} from '../../../../js/webServices';
import { sesionStore } from '../../../../stores/sesionStore';
import { languageStore } from '../../../../stores/languageStore';

//Language
import {descargarConsulta, seGeneraArchivo, menuDerechoJerarquia, conReferencias, descargarEn, idiomaAl, idiomaEs, pasajeSeleccionadoOTodos, pasajeSeleccionado, todosLosPasajes, tipoDeArchivos, texto, descargarConsultadas} from '../../../../js/Language';

const modalDescargas={
    modalinDescarga:{
        width: "50%",
        maxHeight:"75vh",
        top: "15.5vh",
        position:"absolute",
        padding: "30px 30px",
        overflowY: "auto",
        left: "calc(25% - 30px)",
        height: "50vh"
    },
    gridDeBotones:{
        textAlign: "right",
    },
    tituloConsultados:{
        marginTop:"10px",
        marginBottom:"10px"
    }
}

function ModalDescargas(props){
    const global = React.useContext(sesionStore);
    const globalLanguage = React.useContext(languageStore);
    const {classes}=props;
    const [checkedA,setCheckedA] =React.useState(false);
    const [checkedB,setCheckedB] =React.useState(false);
    const [checkedC,setCheckedC] =React.useState(false);
    const [checked, setChecked] = React.useState([]);
    const [value, setValue] = React.useState('Texto');
    const [descargarPasajeSolo,setdescargarPasajeSolo] = React.useState('seleccionado');

    const handleChangeA=name=>event=>{
        setCheckedA({...checkedA, [name]:event.target.checked})
    };

    const handleChangeB=name=>event=>{
        if(checkedC==true){
            setCheckedB({...checkedB, [name]:false})
        }
        setCheckedB({...checkedB, [name]:event.target.checked})
    };

    const handleChangeC=name=>event=>{
        setCheckedC({...checkedC, [name]:event.target.checked})

    };

    const handleChangeRadio=event=>{
        setValue(event.target.value)
    };

    const pasajeSeleccionadoRadio=event=>{
        setdescargarPasajeSolo(event.target.value)
    };

    function closeDescargas(){
        props.setOpenDescargas(false)
    }

    function clickHandleDescarga(){
        var opciones = [0,0,0,0]
        checkedB ? opciones.push(1) : opciones.push(0)
        checkedC ? opciones.push(1) : opciones.push(0)
        checkedA ? opciones.push(1) : opciones.push(0)
        if(descargarPasajeSolo=='todos'){
            if(value=='texto'){
                var serviceR = "/reporte/reporteGeneralTxt/" + props.idExpresion + "?expresion_aleman=1&expresion_espaniol=1&referencia_aleman=1\
                &referencia_espaniol=1&pasaje_aleman=" + opciones[4] + "&pasaje_espaniol=" + opciones[5] +
                "&hierarchy=" + opciones[6] + "&lang=" + globalLanguage.lang + "&refid=" + props.match.params.id
                webService(serviceR, "GET", {}, global.sesion, (data) => {
                    document.getElementById("toDownloadDiv").innerHTML = "<a href='/files/"+data.data.response+".txt' id='fileToDownload' download></a>"
                    document.getElementById("fileToDownload").click()
                })
                if(checked.length > 0){
                    for(var i in checked){
                        var refid = checked[i].split("/")[0]
                        var id = checked[i].split("/")[1]
                        var serviceR = "/reporte/reporteText/" + id + "?expresion_aleman=1&expresion_espaniol=1&referencia_aleman=1\
                        &referencia_espaniol=1&pasaje_aleman=" + opciones[4] + "&pasaje_espaniol=" + opciones[5] +
                        "&hierarchy=" + opciones[6] + "&lang=" + globalLanguage.lang + "&refid=" + refid
                        webService(serviceR, "GET", {}, global.sesion, (data) => {
                            document.getElementById("toDownloadDiv").innerHTML = "<a href='/files/"+data.data.response+".txt' id='fileToDownload' download></a>"
                            document.getElementById("fileToDownload").click()
                        })
                    }
                }else{ 
                    setSnackbar({open:true,variant:"error",message:correoInvalido(globalLanguage.lang)})
		}
            }else{
                var serviceR = "/reporte/reporteGeneralpdf/" + props.idExpresion + "?expresion_aleman=1&expresion_espaniol=1&referencia_aleman=1\
                &referencia_espaniol=1&pasaje_aleman=" + opciones[4] + "&pasaje_espaniol=" + opciones[5] +
                "&hierarchy=" + opciones[6] + "&lang=" + globalLanguage.lang + "&refid=" + props.match.params.id
                webService(serviceR, "GET", {}, global.sesion,(data) => {
                    document.getElementById("toDownloadDiv").innerHTML = "<a href='/files/"+data.data.response+".pdf' id='fileToDownload' download></a>"
                    document.getElementById("fileToDownload").click()
                })
                if(checked.length > 0){
                    for(var i in checked){
                        var refid = checked[i].split("/")[0]
                        var id = checked[i].split("/")[1]
                       var serviceR = "/reporte/reportepdf/" + id + "?expresion_aleman=1&expresion_espaniol=1&referencia_aleman=1\
                        &referencia_espaniol=1&pasaje_aleman=" + opciones[4] + "&pasaje_espaniol=" + opciones[5] +
                        "&hierarchy=" + opciones[6] + "&lang=" + globalLanguage.lang + "&refid=" + refid
                        webService(serviceR, "GET", {}, (data) => {
                            document.getElementById("toDownloadDiv").innerHTML = "<a href='/files/"+data.data.response+".pdf' id='fileToDownload' download></a>"
                            document.getElementById("fileToDownload").click()
                        })
                    }
               }
            }
        }else{
            if(value != 'texto'){
                var serviceR = "/reporte/reportepdf/" + props.idExpresion + "?expresion_aleman=1&expresion_espaniol=1&referencia_aleman=1\
                &referencia_espaniol=1&pasaje_aleman=" + opciones[4] + "&pasaje_espaniol=" + opciones[5] +
                "&hierarchy=" + opciones[6] + "&lang=" + globalLanguage.lang + "&refid=" + props.match.params.id
                webService(serviceR, "GET", {}, global.sesion, (data) => {
                    document.getElementById("toDownloadDiv").innerHTML = "<a href='/files/"+data.data.response+".pdf' id='fileToDownload' download></a>"
                    document.getElementById("fileToDownload").click()
                })
            }else{
                var serviceR = "/reporte/reporteText/" + props.idExpresion + "?expresion_aleman=1&expresion_espaniol=1&referencia_aleman=1\
                &referencia_espaniol=1&pasaje_aleman=" + opciones[4] + "&pasaje_espaniol=" + opciones[5] +
                "&hierarchy=" + opciones[6] + "&lang=" + globalLanguage.lang + "&refid=" + props.match.params.id
                webService(serviceR, "GET", {}, global.sesion, (data) => {
                    document.getElementById("toDownloadDiv").innerHTML = "<a href='/files/"+data.data.response+".txt' id='fileToDownload' download></a>"
                    document.getElementById("fileToDownload").click()
                })
            }   
        }
    }

    return(
        <Modal 
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.openDescargas}
        onClose={closeDescargas}
        >
        <Paper className={classes.modalinDescarga}>
            <div id="toDownloadDiv" hidden/>
                <Grid container justify="center" alignItems="center" alignContent="center">
                    <Grid item xs={11}>
                        <Typography variant="h4">{descargarConsulta(globalLanguage.lang)}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton
                        aria-haspopup="true"
                        onClick={closeDescargas}
                        >
                            <ClearIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
                <Divider className="divisor"/>
                <FormGroup>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography>{seGeneraArchivo(globalLanguage.lang)}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>{menuDerechoJerarquia(globalLanguage.lang)}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel control={
                                <Checkbox 
                                    checked={checkedA} 
                                    onChange={() => setCheckedA(!checkedA)} 
                                    value="checkedA"
                                />
                                }
                                label={conReferencias(globalLanguage.lang)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>{descargarEn(globalLanguage.lang)}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel control={
                                <Checkbox
                                    checked={checkedB}
                                    onChange={() => setCheckedB(!checkedB)}
                                    value="checkedB"
                                />
                                }
                                label={idiomaAl(globalLanguage.lang)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel control={
                                <Checkbox
                                    checked={checkedC}
                                    onChange={() => setCheckedC(!checkedC)}
                                    value="checkedC"
                                />
                                }
                                label={idiomaEs(globalLanguage.lang)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>{pasajeSeleccionadoOTodos(globalLanguage.lang)}</Typography>
                        </Grid>
                        <RadioGroup aria-label={pasajeSeleccionadoOTodos(globalLanguage.lang)} name="Pasaje seleccionado" value={descargarPasajeSolo} onChange={pasajeSeleccionadoRadio}>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <FormControlLabel control={<Radio/>} value="seleccionado" label={pasajeSeleccionado(globalLanguage.lang)}/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControlLabel control={<Radio/>} value="todos" label={todosLosPasajes(globalLanguage.lang)}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </RadioGroup>
                        <Grid item xs={12}>
                            <Typography>{tipoDeArchivos(globalLanguage.lang)}</Typography>
                        </Grid>
                        <RadioGroup aria-label={tipoDeArchivos(globalLanguage.lang)} name="Tipo de archivo" value={value} onChange={handleChangeRadio}>
                            <Grid item xs={6}>
                                <FormControlLabel control={<Radio/>} value="texto" label={texto(globalLanguage.lang)}/>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel control={<Radio/>} value="PDF" label="PDF"/>
                            </Grid>
                        </RadioGroup>
                    </Grid>
                </FormGroup>
                <Divider className="divisor"/>
                <Grid container >
                        <Grid item xs={12} className={classes.tituloConsultados}>
                            <Typography>{descargarConsultadas(globalLanguage.lang)}</Typography>
                        </Grid>
                    <Grid item xs={12}>
                        <ListaDeConsultados checked={checked} setChecked={setChecked}/>
                    </Grid>
                </Grid>
                <Divider className="divisor"/>
                <Grid container>
                    <Grid item xs={12} className={classes.gridDeBotones}>
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={clickHandleDescarga}
                        >
                            {descargarConsulta(globalLanguage.lang)}
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Modal>  
    )
} 

export default withStyles(modalDescargas)(ModalDescargas);
