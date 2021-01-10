import React, { useState, useContext } from "react";

//Components
import {
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  IconButton,
  Button,
  Tooltip,
  Grid,
  Snackbar,
} from "@material-ui/core";
import Icon from "@mdi/react";
import { mdiFormatLetterCase } from "@mdi/js";
import { withStyles } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";

//LanguageChanges
import {
  busquedas,
  toolTipIdiomaDeLaLista,
  distincionMayusyMinus,
  letraNoCoincide,
} from "../../../../js/Language";

//Other request
import { webService } from "../../../../js/webServices";
import classNames from "classnames";
import { sesionStore } from "../../../../stores/sesionStore";
import { expresionesStore } from "../../../../stores/expresionStore";

//Imagen
import es from "../../../../Imagenes/spain.png";
import al from "../../../../Imagenes/germany.png";

const styles = {
  imagenesBandera: {
    width: "25px !important",
    height: "15px !important",
    fontSize: "0px",
    minHeight: "0px",
    minWidth: "0px !important",
    padding: "0px !important",
  },
  switchPasaje: {
    textAlign: "center",
  },
};

const BusquedaVP = (props) => {
  const { classes } = props;
  const global = useContext(sesionStore);
  const { state, dispatch } = global;
  const { sesion, langLista, letra, lang } = state;

  const globalExpresion = useContext(expresionesStore);
  const { store, attend } = globalExpresion;
  const { expresiones, chunk } = store;

  const [insensitiveCase, setInsensitiveCase] = useState(false);
  const [snack, setSnack] = useState({ open: false, text: "" });

  const clickChangeLanguageEsVP = () => {
    dispatch({ type: "SET_LANGLISTA", payload: "es" });
  };

  const clickChangeLanguageAlVP = () => {
    dispatch({ type: "SET_LANGLISTA", payload: "al" });
  };

  const handleInsensitiveCase = () => {
    setInsensitiveCase(!insensitiveCase);
  };

  const ChunkC = (e) => {
    attend({
      type: "SET_CHUNK",
      payload: e,
    });
  };

  const handleChangeBusquedaPasajes = (event) => {
    event.preventDefault();
    if (props.busqueda != "") {
      var stringCaracteres = props.busqueda.replace(/(?!\w|\s)./g, "");
      var stringNumeros = props.busqueda.replace(/([0-9])./g, "");
      if (props.busqueda.length < 2) {
        props.setModalDebusquedas(true);
      } else if (stringCaracteres.length < 2) {
        props.setModalCaracteresInvalidos(true);
      } else if (stringNumeros.length < 2) {
        props.setModalNumeros(true);
      } else if (props.busqueda.length > 2) {
        props.setLoading(true);
        var letter = props.busqueda.slice(0, 1);
        var letraCapital = letra.toUpperCase();
        if (letter == letraCapital) {
          var servicebl =
            "/referencias/busquedaExpresionPorLetra" +
            "/" +
            letra +
            "/" +
            langLista;
          console.log("insensitiveCase", insensitiveCase);
          webService(
            servicebl,
            "POST",
            { parametro: props.busqueda, case: insensitiveCase },
            sesion,
            ({ data }) => {
              console.log(data.response);
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

          props.setLoading(false);
        } else {
          var letraCapital = letter.toUpperCase();
          var servicebl =
            "/referencias/busquedaExpresionPorLetra" +
            "/" +
            letra +
            "/" +
            langLista;
          console.log("insensitiveCase", insensitiveCase);
          webService(
            servicebl,
            "POST",
            { parametro: props.busqueda, case: insensitiveCase },
            sesion,
            ({ data }) => {
              console.log(data.response);
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
          props.setLoading(false);
        }
      }
    } else {
      ChunkC(expresiones.slice(0, 50));
    }
  };

  const handleClose = () => {
    setSnack({ open: false, text: "" });
  };

  return (
    <form onSubmit={handleChangeBusquedaPasajes}>
      <Grid
        container
        justify="center"
        alignItems="center"
        alignContent="center"
      >
        <Grid item xs={7} lg={9}>
          <FormControl className="busquedaEnExpresiones">
            <InputLabel htmlFor="input-with-icon-adornment">
              {busquedas(lang)}
            </InputLabel>
            <Input
              onChange={(event) => props.setBusqueda(event.target.value)}
              fullWidth
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
        <Grid item xs={3} lg={2} className={classes.switchPasaje}>
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
        <Grid item xs={2} lg={1}>
          <Tooltip title={toolTipIdiomaDeLaLista(lang)}>
            {langLista == "es" ? (
              <Button
                className={classes.imagenesBandera}
                onClick={clickChangeLanguageAlVP}
              >
                <img className="banderaBusquedaPasajes" src={al} />
              </Button>
            ) : (
              <Button
                className={classes.imagenesBandera}
                onClick={clickChangeLanguageEsVP}
              >
                <img className="banderaBusquedaPasajes" src={es} />
              </Button>
            )}
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

export default withStyles(styles)(BusquedaVP);
