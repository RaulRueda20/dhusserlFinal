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
import LinearProgress from '@material-ui/core/LinearProgress';

import fondo from "../../../Imagenes/fondo.png";

import Footer from './Footer';
import Snackbars from './Snackbars';
import Header from './Header';

const Recovery ={
    back: {
      backgroundImage: `url(${fondo})`,
      position : "fixed",
      zIndex : -1,
      height : "100vh",
      width : "100vw",
      opacity: 0.45,
      top: 0
    },
    pass : {
        textAlign: 'center !important',
    },
    TextField1:{
        justify: 'center',
        width:"70%",
    },
    GridPass: {
        paddingLeft: "350px",
        paddingTop: "10px"
    }
  }

function Recuperacion(props){
    const {classes}=props;
    const [nuevoPassword, setNuevoPassword] = React.useState('');
    const [confirmacion, setConfirmacion] = React.useState('');
    const [snackbar, setSnackbar]=React.useState({open:false, variant:"", message:""});
    const [loading, setLoading]=React.useState(false);

    function onFormSubmit(event){
        event.preventDefault();
        setLoading(true)
        console.log("mail",document.URL)
        var url = document.URL
        //var stringCorreo = props.match.params.email
        //console.log("stringCorreo",props.match.url)
        //var correo = Buffer.from(url, 'base64').toString();
        //var service = "/updatePassword/" + correo
        var params = {
            password: nuevoPassword,
            repassword: confirmacion
        }
        //if(params.password==""){
            //setSnackbar({open:true, variant: error,  message: "Password Invalido, intente de nuevo por favor"})
        //}else if(params.password != params.repassword){
            //setSnackbar({open:true, variant: error,  message: "La confirmacion no coincide, intente de nuevo por favor"})
        //}

    }

    function handleClose(){
        setSnackbar({open:false,varian:"", message:""})
    }

    return(
        <div>
            <div className={classes.back} />
            <form onSubmit={onFormSubmit}>
                <Header lang={props.lang} setLang={props.setLang}/>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h3" className={classes.pass}>
                            Introducir el nuevo password
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.GridPass}>
                        <TextField
                        type = "password"
                        className={classes.TextField1}
                        value={nuevoPassword}
                        onChange={e => setNuevoPassword(e.target.value)}
                        />
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default withStyles(Recovery) (Recuperacion);