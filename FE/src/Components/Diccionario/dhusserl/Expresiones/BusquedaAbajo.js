//React
import React, { useEffect, useContext, useState } from "react";

//Components
import {
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  IconButton,
  Tooltip,
  Grid,
} from "@material-ui/core/";
import Icon from "@mdi/react";
import { mdiFormatLetterCase } from "@mdi/js";
import { withStyles } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";

//Other req
import "../../../../css/expresiones.css";
import { webService } from "../../../../js/webServices";
import { sesionStore } from "../../../../stores/sesionStore";
import classNames from "classnames";
import { languageStore } from "../../../../stores/languageStore";
import { letraStore } from "../../../../stores/letraStore";

//Language
import {
  busquedas,
  distincionMayusyMinus,
  letraNoCoincide,
} from "../../../../js/Language";

const styles = {
  contenedor: {
    alignItems: "center !important",
  },
  formularioBusqueda: {
    marginRight: "5px",
    marginLeft: "20px",
    marginTop: "28px",
  },
  switchPasaje: {
    textAlign: "center",
  },
};

const BusquedaAbajo = (props) => {
  const { classes } = props;
  const global = useContext(sesionStore);
  const globalLanguage = useContext(languageStore);
  const globalLetra = useContext(letraStore);
  const [insensitiveCase, setInsensitiveCase] = useState(false);

  const handleChangeBusquedaExpresiones = (event) => {
    event.preventDefault();
    if (props.busqueda != "") {
      let stringCaracteres = props.busqueda.replace(/(?!\w|\s)./g, "");
      let stringNumeros = props.busqueda.replace(/([0-9])./g, "");
      if (props.busqueda.length < 2) {
        props.setModalDebusquedas(true);
      } else if (stringCaracteres.length < 2) {
        props.setModalCaracteresInvalidos(true);
      } else if (stringNumeros.length < 2) {
        props.setModalNumeros(true);
      } else if (props.busqueda.length > 2) {
        props.setLoading(true);
        let letra = props.busqueda.slice(0, 1);
        let letraCapital = letra.toUpperCase();
        if (letra == letraCapital) {
          let servicebl =
            "/referencias/busquedaExpresionPorLetra" +
            "/" +
            globalLetra.letra +
            "/" +
            globalLanguage.langLista;
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
        } else {
          let letraCapital = letra.toUpperCase();
          let servicebl =
            "/referencias/busquedaExpresionPorLetra" +
            "/" +
            globalLetra.letra +
            "/" +
            globalLanguage.langLista;
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
        }
      }
    } else {
      props.setChunkList(props.expresiones.slice(0, 50));
    }
  };

  const handleInsensitiveCase = () => {
    setInsensitiveCase(!insensitiveCase);
  };

  return (
    <form
      onSubmit={handleChangeBusquedaExpresiones}
      className={classes.formularioBusqueda}
    >
      <Grid container className={classes.contenedor}>
        <Grid item xs={10}>
          <FormControl className="busquedaEnExpresiones">
            <InputLabel htmlFor="input-with-icon-adornment">
              {busquedas(props.lang)}
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
        <Grid item xs={2} className={classes.switchPasaje}>
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
    </form>
  );
};

export default withStyles(styles)(BusquedaAbajo);
