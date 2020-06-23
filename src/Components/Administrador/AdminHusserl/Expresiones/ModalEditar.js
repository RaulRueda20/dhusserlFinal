import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ClearIcon from '@material-ui/icons/Clear';
import Tooltip from '@material-ui/core/Tooltip';
import Create from '@material-ui/icons/Create';
import { withStyles } from '@material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import {adminService} from '../../../../js/webServices';
import Snackbar from '@material-ui/core/Snackbar';

import es from "../../../../Imagenes/spain.png";
import al from "../../../../Imagenes/germany.png";

import FormularioExpresiones from './FormularioExpresiones';

const estiloModalExpresiones = theme => ({
  Boton1:{
    width:"80%"
  },
  modalin:{
    top: "25vh",
    left: "calc(20vw - 30px)",
    width: "60vw",
    padding: "20px 30px",
    position: "absolute",
    height: "50vh"
  },
  contenedorSubtitulos:{
    padding: "15px 15px"
  },
  botonAgregar:{
    width:"50%",
    left:"50%",
    marginTop:"15px !important",
    marginRight:"30 px !importan"
  }
})

function ModalEditar(props){
    const { classes } = props;
    const [vista, setVista] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [expresionLetraIndice, setExpresionLetraIndice] = React.useState('A');
    const [expresion, setExpresion] = React.useState("");
    const [expresionContenido, setExpresionContenido] = React.useState("");
    const [traduccionLetraIndice, setTraduccionLetraIndice] = React.useState('A');
    const [traduccion, setTraduccion] = React.useState("");
    const [traduccionContenido, setTraduccionContenido] = React.useState("");
    const [snack, setSnack] = React.useState({open : false, text : ""})

    React.useEffect(()=>{
        var el = props.expresion.expresion_original.toUpperCase()
        var tl = props.expresion.expresion_traduccion.toUpperCase()
        setExpresion(props.expresion.expresion_original)
        setTraduccion(props.expresion.expresion_traduccion)
        setExpresionContenido(props.expresion.epretty)
        setTraduccionContenido(props.expresion.tpretty)
        setExpresionLetraIndice(el[0])
        setTraduccionLetraIndice(tl[0])
    }, [props.expresion])

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAl = () => {
        setVista(0);
    };

    const handleEs = () => {
        setVista(1);
    };

    function handleCloseSnack() {
        setSnack({open: false, text: ""});
    }

    const handleClickEdicion=()=>{
        var params={
            'id' : props.expresion.id,
            'indice_es' : traduccionLetraIndice,
            'indice_de' : expresionLetraIndice,
            'pretty_es' : traduccionContenido,
            'pretty_de' : expresionContenido,
            'expresion' : expresion,
            'traduccion' : traduccion
        }
        var service = "/expresiones/updateExpresion/" + props.expresion.id
        adminService(service, "POST", JSON.stringify(params), (data) =>{
            props.setReload(!props.reload)
            setSnack({open : true, text: "Se ha editado la expresión."})
        })
    }
    
    return(
        <div>
            <Tooltip title="Editar Expresión">
                <IconButton onClick={()=>handleOpen()}>
                    <Create/>
                </IconButton>
            </Tooltip>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <Paper className={classes.modalin}>
                    <Grid container className={classes.contenedorSubtitulos} alignItems="center">
                        <Grid item xs={11}>
                            <Typography variant="h3">
                                Editar Expresión
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton
                                onClick={handleClose}
                                className={classes.botonClear}
                            >
                                <ClearIcon fontSize="small"/>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <SwipeableViews axis={ vista == 0 ? 'x-reverse' : 'x'}
                    index={vista}
                    onChangeIndex={setVista}>
                        <FormularioExpresiones 
                        id="formularioAle"
                        expresion={expresion} setExpresion={setExpresion}
                        letra={expresionLetraIndice} setLetra={setExpresionLetraIndice} 
                        contenido={expresionContenido} setContenido={setExpresionContenido}
                        indiceLang={vista} handleLang={handleEs} flag={es} vista={vista}
                        label="Expresión"/> 
                        <FormularioExpresiones 
                        id="FormularioEspa"
                        expresion={traduccion} setExpresion={setTraduccion}
                        letra={traduccionLetraIndice} setLetra={setTraduccionLetraIndice} 
                        contenido={traduccionContenido} setContenido={setTraduccionContenido}
                        indiceLang={vista} handleLang={handleAl} flag={al} vista={vista}
                        label="Traducción"/>
                    </SwipeableViews>
                    <Button
                        variant="contained"
                        className={classes.botonAgregar}
                        onClick={handleClickEdicion}
                    >
                        Guardar
                    </Button>
                </Paper>
            </Modal>
            <Snackbar
            anchorOrigin={{ vertical : "top", horizontal : "left" }}
            key={`top,left`}
            open={snack.open}
            onClose={handleCloseSnack}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{snack.text}</span>}
          />
        </div>
    )
}

export default withStyles(estiloModalExpresiones)(ModalEditar);
