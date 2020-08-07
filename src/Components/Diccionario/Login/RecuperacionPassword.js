//React
import React from 'react';

//Elements
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from "@material-ui/core/Divider"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import ClearIcon from '@material-ui/icons/Clear';

import fondo from "../../../Imagenes/fondo.png";

import Footer from './Footer';
import Snackbars from './Snackbars';

const modalRecuperacion={
    modalinR:{
        width: "40%",
        maxHeight:"75vh",
        left: "25vw",
        top: "25.5vh",
        position:"absolute",
        padding: "30px 30px",
    },
    campoDeTexto:{
        width: "50%",
        justify: 'center',
        fontWeight: 'bolder',
        marginLeft: "20px !important",
        marginRight: "20px !important",
        marginTop:  "50px !important",
        left: "25vw",
    },
    botonClear:{
        left:"18px",
        bottom:"15px",
        size:"small",
        opacity: 1
    },
    botonRecuperar:{
        opacity: 1,
        left: "70vw",
        bottom: "10vh"
    },
    gridDelBoton:{
        textAlign: "right"
    },
    back: {
        backgroundImage: `url(${fondo})`,
        position : "fixed",
        zIndex : -1,
        height : "100vh",
        width : "100vw",
        opacity: 0.45,
        top: 0
    },
    Recupera:{
        marginLeft:"20px !important",
        fontWeight: "400  !important",
        marginBottom: "100px !important",
        fontSize: "2rem !important",
        color: "#000000",
        left: "25vw !important",
        position:"absolute"
    }
}

function Recuperacion(props){
    const {classes}=props;
    const [nuevoPassword, setNuevoPassword] = React.useState('');
    const [confirmacion, setConfirmacion] = React.useState('');
    const [snackbar, setSnackbar]=React.useState({open:false, variant:"", message:""});

    function onFormSubmit(){
        var params = {
            password: nuevoPassword,
            repassword: confirmacion
        }

        if(params.password==""){
            setSnackbar({open:true, variant: error,  message: "Password Invalido, intente de nuevo por favor"})
        }else if(params.password != params.repassword){
            setSnackbar({open:true, variant: error,  message: "La confirmacion no coincide, intente de nuevo por favor"})
        }

    }

    function handleClose(){
        setSnackbar({open:false,varian:"", message:""})
    }

    return(
        <div>
            <form >
                <Grid container className={classes.back}>
                    <Grid item xs={11}>
                        <Typography variant="h3">
                            Recuperacion de contraseña
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider className="divisor"/>
                        <Typography variant="h5" className={classes.Recupera}>
                            Ingrese su nueva contraseña
                        </Typography>
                        <TextField
                            // label={"Ingrese nueva contraseña"}
                            id="custom-css-outlined-input"
                            margin="normal"
                            value={nuevoPassword}
                            onChange={e => setNuevoPassword(e.target.value)}
                            // type = "email"
                            className={classes.campoDeTexto}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" className={classes.Recupera}>
                            Confirme su nueva contraseña
                        </Typography>
                        <TextField
                            // label={"Confirme nueva contraseña"}
                            id="custom-css-outlined-input"
                            margin="normal"
                            value={confirmacion}
                            onChange={e => setConfirmacion(e.target.value)}
                            // type = "email"
                            className={classes.campoDeTexto}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            size="small"
                            className={classes.botonRecuperar}
                        >
                            Restaurar
                        </Button>
                    </Grid>
                </Grid>
                <br/>
                <Footer lang={props.lang}/>
                <Snackbars snackbar={snackbar} handleClose={handleClose} lang={props.lang}/>
            </form>
        </div>
    )
}

export default withStyles(modalRecuperacion) (Recuperacion);