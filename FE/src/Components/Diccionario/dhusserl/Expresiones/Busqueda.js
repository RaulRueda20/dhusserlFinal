//React
import React, { useContext, useState } from "react";

//Components
import {
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  IconButton,
  Tooltip,
  Snackbar,
  Grid,
} from "@material-ui/core";
import Icon from "@mdi/react";
import { mdiFormatLetterCase } from "@mdi/js";
import { withStyles } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";

//Other req
import "../../../../css/expresiones.css";
import { webService } from "../../../../js/webServices";
import { sesionStore } from "../../../../stores/sesionStore";
import classNames from "classnames";

//Language
import {
  busquedas,
  distincionMayusyMinus,
  letraNoCoincide,
} from "../../../../js/Language";
import { languageStore } from "../../../../stores/languageStore";
import { letraStore } from "../../../../stores/letraStore";

const styles = {
  contenedor: {
    alignItems: "center !important",
  },
  switch: {
    textAlign: "center",
  },
};

const Busqueda = (props) => {
  const { classes } = props;
  const global = useContext(sesionStore);
  const globalLanguage = useContext(languageStore);
  const globalLetra = useContext(letraStore);
  const [insensitiveCase, setInsensitiveCase] = useState(false);
  const [snack, setSnack] = useState({ open: false, text: "" });

  const ChunkC = (expresiones) => {
    props.setChunkList(expresiones);
  };

  const handleChangeBusquedaExpresiones = (event) => {
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
        var letra = props.busqueda.slice(0, 1);
        var letraCapital = letra.toUpperCase();
        if (letra == letraCapital) {
          var servicebl =
            "/referencias/busquedaExpresionPorLetra" +
            "/" +
            globalLetra.letra +
            "/" +
            globalLanguage.langLista;
          console.log("servicebl", servicebl);
          webService(
            servicebl,
            "POST",
            { parametro: props.busqueda, case: insensitiveCase },
            global.sesion,
            ({ data }) => {
              const { response } = data;
              if (globalLetra.letra == letraCapital) {
                ChunkC(response);
              } else {
                setSnack({
                  open: true,
                  text: letraNoCoincide(globalLanguage.lang),
                });
              }
            }
          );
          props.setLoading(false);
        } else {
          var letraCapital = letra.toUpperCase();
          var servicebl =
            "/referencias/busquedaExpresionPorLetra" +
            "/" +
            globalLetra.letra +
            "/" +
            globalLanguage.langLista;
          console.log("servicebl", servicebl);
          webService(
            servicebl,
            "POST",
            { parametro: props.busqueda, case: insensitiveCase },
            global.sesion,
            ({ data }) => {
              const { response } = data;
              if (globalLetra.letra == letraCapital) {
                ChunkC(response);
              } else {
                setSnack({
                  open: true,
                  text: letraNoCoincide(globalLanguage.lang),
                });
              }
            }
          );
          props.setLoading(false);
        }
      }
    } else {
      props.setChunkList(props.expresiones.slice(0, 50));
    }
  };

  function handleInsensitiveCase() {
    setInsensitiveCase(!insensitiveCase);
  }

  const handleSwitch = (name) => (event) => {
    props.setState({ ...props.state, [name]: event.target.checked });
  };

  function handleClose() {
    setSnack({ open: false, text: "" });
  }

  return (
    <form onSubmit={handleChangeBusquedaExpresiones}>
      <Grid container className={classes.contenedor}>
        <Grid item xs={10}>
          <FormControl className="busquedaEnExpresiones">
            <InputLabel htmlFor="input-with-icon-adornment">
              {busquedas(globalLanguage.lang)}
            </InputLabel>
            <Input
              onChange={(event) => props.setBusqueda(event.target.value)}
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
          <Tooltip title={distincionMayusyMinus(globalLanguage.lang)}>
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

export default withStyles(styles)(Busqueda);
