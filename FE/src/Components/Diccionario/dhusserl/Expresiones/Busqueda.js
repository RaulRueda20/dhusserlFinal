//React
import React, { useContext, useState } from "react";

//Components
import SearchIcon from "@material-ui/icons/Search";
import { Input, InputLabel, InputAdornment, FormControl, IconButton, Tooltip, Grid, Snackbar } from "@material-ui/core";
import Icon from "@mdi/react";
import { mdiFormatLetterCase } from "@mdi/js";
import { createStyles } from "@material-ui/styles";

//Other req
import "../../../../css/expresiones.css";
import { webService } from "../../../../js/webServices";
import { sesionStore } from "../../../../stores/sesionStore";
import { expresionesStore } from "../../../../stores/expresionStore";
import classNames from "classnames";

//Language
import {
  busquedas,
  distincionMayusyMinus,
  letraNoCoincide,
} from "../../../../js/Language";

const useStyles = createStyles(() => ({
  contenedor: {
    alignItems: "center !important",
  },
  switch: {
    textAlign: "center",
  },
}))

const Busqueda = (props) => {
  const { busqueda, setModalDebusquedas, setModalCaracteresInvalidos, setModalNumeros, setLoading, setBusqueda } = props
  const classes = useStyles()
  const global = useContext(sesionStore);
  const { state } = global
  const { letra, lang, langLista, sesion } = state

  const globalExpresion = useContext(expresionesStore);
  const { store, attend } = globalExpresion
  const { expresiones } = store

  const [insensitiveCase, setInsensitiveCase] = useState(false);
  const [snack, setSnack] = useState({ open: false, text: "" });

  const ChunkC = (e) => {
    attend({
      type: "SET_CHUNK",
      payload: e
    })
  };

  const handleChangeBusquedaExpresiones = (event) => {
    event.preventDefault();
    if (busqueda != "") {
      var stringCaracteres = busqueda.replace(/(?!\w|\s)./g, "");
      var stringNumeros = busqueda.replace(/([0-9])./g, "");
      if (busqueda.length < 2) {
        setModalDebusquedas(true);
      } else if (stringCaracteres.length < 2) {
        setModalCaracteresInvalidos(true);
      } else if (stringNumeros.length < 2) {
        setModalNumeros(true);
      } else if (busqueda.length > 2) {
        setLoading(true);
        var letter = busqueda.slice(0, 1);
        var letraCapital = letra.toUpperCase();
        if (letter == letraCapital) {
          var servicebl =
            "/referencias/busquedaExpresionPorLetra" +
            "/" +
            letra +
            "/" +
            langLista;

          webService(
            servicebl,
            "POST",
            { parametro: busqueda, case: insensitiveCase },
            sesion,
            ({ data }) => {
              if (letra == letraCapital) {
                ChunkC(data.response);
              } else {
                setSnack({
                  open: true,
                  text: letraNoCoincide(lang),
                });
              }
            }
          );

          setLoading(false);
        } else {
          var letraCapital = letter.toUpperCase();
          var servicebl =
            "/referencias/busquedaExpresionPorLetra" +
            "/" +
            letra +
            "/" +
            langLista;

          webService(
            servicebl,
            "POST",
            { parametro: busqueda, case: insensitiveCase },
            sesion,
            ({ data }) => {
              if (letra == letraCapital) {
                ChunkC(data.response);
              } else {
                setSnack({
                  open: true,
                  text: letraNoCoincide(lang),
                });
              }
            }
          );
          setLoading(false);
        }
      }
    } else {
      ChunkC(expresiones.slice(0, 50));
    }
  };

  const handleInsensitiveCase = () => {
    setInsensitiveCase(!insensitiveCase);
  }

  const handleClose = () => {
    setSnack({ open: false, text: "" });
  }

  return (
    <form onSubmit={handleChangeBusquedaExpresiones}>
      <Grid container className={classes.contenedor}>
        <Grid item xs={10}>
          <FormControl className="busquedaEnExpresiones">
            <InputLabel htmlFor="input-with-icon-adornment">
              {busquedas(lang)}
            </InputLabel>
            <Input
              onChange={({ target }) => setBusqueda(target.value)}
              id="input-with-icon-adornment"
              endAdornment={
                <InputAdornment position="start">
                  <IconButton type="submit" className="lupita">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={2} className={classes.switch}>
          <Tooltip title={distincionMayusyMinus(lang)}>
            <IconButton
              onClick={handleInsensitiveCase}
              className={classNames([
                { caseSeleccionado: insensitiveCase == true },
                "case",
              ])}
            >
              <Icon path={mdiFormatLetterCase} title="User Profile" size={1} />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        key={`top,left`}
        open={snack.open}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{snack.text}</span>}
      />
    </form>
  );
};

export default Busqueda;
