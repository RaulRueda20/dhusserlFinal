//React
import React from "react";

// Components
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/styles";

//Language
import {
  tipoDeBusqueda,
  dentroExpresion,
  dentroReferencia,
} from "../../../../js/Language";
import { sesionStore } from "../../../../stores/sesionStore";
import { busquedaStore } from "../../../../stores/busquedaStore";

const seleccion = {
  selector: {
    marginTop: "30px",
  },
};

const SelectorBusqueda = (props) => {
  const { classes } = props;
  const global = React.useContext(sesionStore);
  const { state } = global;
  const { lang } = state;

  const globalBusqueda = React.useContext(busquedaStore);
  const { attend, busquedaState } = globalBusqueda;
  const { expresionesEncontradas, tipoBusqueda } = busquedaState;

  const handleChange = ({ target }) => {
    const { value } = target;
    if (expresionesEncontradas.length > 0) {
      attend({ type: "RESET_TIPO_BUSQUEDA", payload: value });
    } else attend({ type: "SET_TIPO_BUSQUEDA", payload: value });
  };

  return (
    <FormControl className={classes.selector} fullWidth>
      <InputLabel htmlFor="Busquedas">{tipoDeBusqueda(lang)}</InputLabel>
      <Select fullWidth value={tipoBusqueda} onChange={handleChange}>
        <MenuItem value="Expresion">{dentroExpresion(lang)}</MenuItem>
        <MenuItem value="Referencia">{dentroReferencia(lang)}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default withStyles(seleccion)(SelectorBusqueda);
