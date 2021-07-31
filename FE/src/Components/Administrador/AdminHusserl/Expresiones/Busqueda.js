import React, { useState, useContext } from "react";
import {
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Icon from "@mdi/react";
import { mdiFormatLetterCase } from "@mdi/js";

import "../../../../css/expresiones.css";
import classNames from "classnames";
import { withStyles } from "@material-ui/styles";
import { webService } from "../../../../js/webServices";
import { sesionStore } from "../../../../stores/sesionStore";

const styles = {
  TextFieldbus: {
    width: "100%",
  },
};

const Busqueda = (props) => {
  const { classes } = props;
  const [insensitiveCase, setInsensitiveCase] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const global = useContext(sesionStore);
  const { state } = global;
  const { sesion } = state;

  const fixExpresiones = (referencias) => {
    var expresiones = [];
    var posicActual = -1;
    var expreActual = "";
    var i = 0;
    while (i < referencias.length) {
      if (expreActual != referencias[i].expresion) {
        posicActual++;
        expreActual = referencias[i].expresion;
        expresiones.push({
          clave: referencias[i].clave,
          expresion_de: referencias[i].expresion,
          id: referencias[i].id,
          index_de: referencias[i].index_de,
          index_es: referencias[i].index_es,
          pretty_de: referencias[i].pretty_e,
          pretty_es: referencias[i].pretty_t,
          referencias: [],
          expresion_es: referencias[i].traduccion,
        });
        expresiones[posicActual].referencias.push({
          referencia_original: referencias[i].referencia_original,
          referencia_traduccion: referencias[i].referencia_traduccion,
          refid: referencias[i].refid,
          orden: referencias[i].orden,
        });
        i++;
      } else {
        expresiones[posicActual].referencias.push({
          referencia_original: referencias[i].referencia_original,
          referencia_traduccion: referencias[i].referencia_traduccion,
          refid: referencias[i].refid,
          orden: referencias[i].orden,
        });
        i++;
      }
    }
    return expresiones;
  };

  const handleChangeBusquedaExpresiones = (event) => {
    event.preventDefault();
    var servicebl =
      "/referencias/busquedaExpresionPorLetraAdmin" +
      "/" +
      props.letraMain +
      "/" +
      insensitiveCase;
    webService(
      servicebl,
      "POST",
      { parametro: busqueda },
      sesion,
      ({ data }) => {
        props.setExpresiones(fixExpresiones(data.response));
      }
    );
  };

  const handleInsensitiveCase = () => {
    setInsensitiveCase(!insensitiveCase);
  };

  return (
    <form onSubmit={handleChangeBusquedaExpresiones}>
      <FormControl className={classes.TextFieldbus}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Busqueda por letra
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          value={busqueda}
          onChange={(event) => setBusqueda(event.target.value)}
          startAdornment={
            <InputAdornment position="end">
              <Tooltip title="Distinción entre mayúsculas y minúscula">
                <IconButton
                  onClick={handleInsensitiveCase}
                  className={classNames([
                    { caseSeleccionado: insensitiveCase == true },
                    "case",
                  ])}
                >
                  <Icon
                    path={mdiFormatLetterCase}
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
    </form>
  );
};

export default withStyles(styles)(Busqueda);
