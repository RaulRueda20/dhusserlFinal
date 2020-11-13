//React
import React from "react";

//Elements
import {
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";

//Other req
import "../../../../css/pasajes.css";

const styles = {
  TextFieldbus: {
    width: "100%",
  },
};

const BusquedaPasajes = (props) => {
  const { classes } = props;

  const handleChangeBusqueda = (event) => {
    event.preventDefault();
    var busqueda = event.target.value;
    props.pasajes.map((pasaje) => {
      var pasajeNombre =
        pasaje.ref_libro_de + pasaje.ref_libro_es + pasaje.ref_id;
      var pasajeBuscado = pasajeNombre.indexOf(busqueda);
      document.getElementById(pasaje.ref_id).classList.remove("hidden");
      if (pasajeBuscado == -1) {
        document.getElementById(pasaje.ref_id).className += " hidden";
      }
    });
  };

  return (
    <FormControl className={classes.TextFieldbus}>
      <InputLabel htmlFor="input-with-icon-adornment">
        Busqueda por letra
      </InputLabel>
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
  );
};

export default withStyles(styles)(BusquedaPasajes);
