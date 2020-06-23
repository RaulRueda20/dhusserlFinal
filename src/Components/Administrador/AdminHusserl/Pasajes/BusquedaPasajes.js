//React
import React from 'react';

//Elements
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@mdi/react';
import { mdiFormatLetterCase } from '@mdi/js';
import Tooltip from '@material-ui/core/Tooltip';

//Other req
import '../../../../css/pasajes.css';
import classNames from 'classnames';
import {webService} from '../../../../js/webServices';

const styles = {
 TextFieldbus:{
    width:"100%"
   }
 }

function BusquedaPasajes(props){
  const { classes } = props;
  const [insensitiveCase,setInsensitiveCase]=React.useState(false);
  const [busqueda, setBusqueda] = React.useState("");
  
  const handleChangeBusqueda = (event) => {
    event.preventDefault()
    var busqueda = event.target.value
    props.pasajes.map(pasaje=>{
      var pasajeNombre=pasaje.ref_libro_de + pasaje.ref_libro_es + pasaje.ref_id
      var pasajeBuscado= pasajeNombre.indexOf(busqueda)
      document.getElementById(pasaje.ref_id).classList.remove("hidden")
      if (pasajeBuscado == -1){
        document.getElementById(pasaje.ref_id).className += " hidden";
      }
    })
  }


  return (
    <FormControl className={classes.TextFieldbus}>
      <InputLabel htmlFor="input-with-icon-adornment">Busqueda por letra</InputLabel>
      <Input
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        onChange={handleChangeBusqueda}
      />
    </FormControl>
  )
}

export default withStyles(styles)(BusquedaPasajes);