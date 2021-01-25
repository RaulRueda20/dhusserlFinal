//React
import React, { useState, useContext } from "react";

//Components
import SearchIcon from "@material-ui/icons/Search";
import {
  Input,
  InputLabel,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  Tooltip,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Icon from "@mdi/react";
import { mdiFormatLetterCase } from "@mdi/js";
import { busquedaStore } from "../../../../stores/busquedaStore";

//Other request
import { webService } from "../../../../js/webServices";
import { sesionStore } from "../../../../stores/sesionStore";
import classNames from "classnames";

//Language
import { busquedas, distincionMayusyMinus } from "../../../../js/Language";

const search = {
  buscador: {
    margin: "30px 40px",
    width: "93%",
  },
  botonBuscador: {
    marginTop: "35px",
  },
};

const Busquedas = (props) => {
  const { classes } = props;
  const global = useContext(sesionStore);
  const { state, dispatch } = global;
  const { lang, sesion } = state;
  const [insensitiveCase, setInsensitiveCase] = useState(false);

  const globalBusqueda = useContext(busquedaStore);
  const { busquedaState, attend } = globalBusqueda;
  const { tipoBusqueda, busqueda } = busquedaState;

  const fixPasajes = (pasajes) => {
    let pasajesArreglados = [];
    let posicionActual = -1;
    let pasajeActual = "";
    let i = 0;
    while (i < pasajes.length) {
      if (pasajeActual != pasajes[i].ref_id) {
        posicionActual++;
        pasajeActual = pasajes[i].ref_id;
        pasajesArreglados.push({
          ref_id: pasajes[i].ref_id,
          ref_original: pasajes[i].ref_original,
          ref_traduccion: pasajes[i].ref_traduccion,
          ref_libro_de: pasajes[i].ref_libro_de,
          ref_libro_es: pasajes[i].ref_libro_es,
          expresiones: [],
        });
        pasajesArreglados[posicionActual].expresiones.push({
          orden: pasajes[i].orden,
          expresion_original: pasajes[i].expresion_original,
          expresion_traduccion: pasajes[i].expresion_traduccion,
          t_id: pasajes[i].t_id,
        });
        i++;
      } else {
        pasajesArreglados[posicionActual].expresiones.push({
          orden: pasajes[i].orden,
          expresion_original: pasajes[i].expresion_original,
          expresion_traduccion: pasajes[i].expresion_traduccion,
          t_id: pasajes[i].t_id,
        });
        i++;
      }
    }
    return pasajesArreglados;
  };

  const handleChangeBusqueda = (event) => {
    event.preventDefault();
    dispatch({ type: "START_LOADING" });
    if (tipoBusqueda == "Referencia") {
      const servicebr = "/expresiones/busqueda/" + insensitiveCase;
      webService(
        servicebr,
        "POST",
        { parametro: busqueda },
        sesion,
        ({ data }) => {
          const { response } = data;
          attend({
            type: "SET_TIPO_BUSQUEDA_REALIZADA",
            payload: "Referencia",
          });
          attend({
            type: "SET_EXPRESIONES_ENCONTRADAS",
            payload: fixPasajes(response),
          });
          dispatch({ type: "STOP_LOADING" });
        }
      );
    } else {
      const servicebe = "/referencias/busquedaExpresion";
      webService(
        servicebe,
        "POST",
        { parametro: busqueda, case: insensitiveCase },
        sesion,
        ({ data }) => {
          const { response } = data;
          attend({
            type: "SET_TIPO_BUSQUEDA_REALIZADA",
            payload: "Expresion",
          });
          attend({
            type: "SET_EXPRESIONES_ENCONTRADAS",
            payload: response,
          });
          dispatch({ type: "STOP_LOADING" });
        }
      );
    }
  };

  const handleInsensitiveCase = () => {
    setInsensitiveCase(!insensitiveCase);
  };

  return (
    <form onSubmit={handleChangeBusqueda}>
      <Grid container>
        <Grid item xs={12}>
          <FormControl className={classes.buscador}>
            <InputLabel htmlFor="input-with-icon-adornment">
              {busquedas(lang)}
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              value={busqueda}
              onChange={(event) =>
                attend({ type: "SET_BUSQUEDA", payload: event.target.value })
              }
              startAdornment={
                <InputAdornment position="end">
                  <Tooltip title={distincionMayusyMinus(lang)}>
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
                <InputAdornment position="end">
                  <IconButton type="submit">
                    <SearchIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};

export default withStyles(search)(Busquedas);
