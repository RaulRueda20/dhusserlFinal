import React, { useContext, useState } from "react";

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
} from "@material-ui/core";
import Icon from "@mdi/react";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import { mdiFormatLetterCase } from "@mdi/js";
import Hidden from "@material-ui/core/Hidden";
import { withStyles } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";

//LanguageChanges
import {
  busquedas,
  toolTipIdiomaDeLaLista,
  distincionMayusyMinus,
} from "../../../../js/Language";

//Other request
import { webService } from "../../../../js/webServices";
import classNames from "classnames";
import { sesionStore } from "../../../../stores/sesionStore";
import { languageStore } from "../../../../stores/languageStore";
import { letraStore } from "../../../../stores/letraStore";
import { fixLetter } from "../../../../js/utils";

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

const BusquedaEscondida = (props) => {
  const { classes } = props;
  const global = useContext(sesionStore);
  const globalLanguage = useContext(languageStore);
  const globalLetra = useContext(letraStore);
  const [insensitiveCase, setInsensitiveCase] = useState(false);

  const clickChangeLanguageEsVP = () => {
    globalLanguage.setLangLista("es");
  };

  const clickChangeLanguageAlVP = () => {
    globalLanguage.setLangLista("al");
  };

  const handleInsensitiveCase = () => {
    setInsensitiveCase(!insensitiveCase);
  };

  const handleChangeBusquedaPasajes = (event) => {
    event.preventDefault();
    if (props.busqueda != "") {
      let stringCaracteres = props.busqueda.replace(/(?!\w|\s)./g, "");
      let stringNumeros = props.busqueda.replace(/([0-9])./g, "");
      if (props.busqueda.length < 2) {
        props.setModalDebusquedas(true);
      } else if (stringCaracteres.length < 2) {
        props.setModalDebusquedas(true);
      } else if (stringNumeros.length < 2) {
        props.setModalDebusquedas(true);
      } else if (props.busqueda.length > 2) {
        let letra = props.busqueda.slice(0, 1);
        let letraCapital = fixLetter(letra);
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
                  text:
                    "La primera letra de la busqueda no coincide con la letra del indice",
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
                  text:
                    "La primera letra de la busqueda no coincide con la letra del indice",
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

  const clickHandleHidden = () => {
    props.setOpenHidden(!props.openHidden);
  };

  return (
    <form onSubmit={handleChangeBusquedaPasajes}>
      <Grid
        container
        justify="center"
        alignItems="center"
        alignContent="center"
      >
        <Grid item xs={6} sm={7} md={9} lg={9}>
          <FormControl className="busquedaEnExpresiones">
            <InputLabel htmlFor="input-with-icon-adornment">
              {busquedas(globalLanguage.lang)}
            </InputLabel>
            <Input
              onChange={(event) => props.setBusqueda(event.target.value)}
              fullWidth
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="end">
                  <Tooltip title={distincionMayusyMinus(globalLanguage.lang)}>
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
        </Grid>
        <Hidden smUp>
          <Grid item xs={2}>
            <IconButton size="small" onClick={clickHandleHidden}>
              <SwapHorizIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item xs={2} sm={3} md={2} lg={2} className={classes.switchPasaje}>
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
        <Grid item xs={2} sm={2} md={1} lg={1}>
          <Tooltip title={toolTipIdiomaDeLaLista(globalLanguage.lang)}>
            {globalLanguage.language == "es" ? (
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
    </form>
  );
};

export default withStyles(styles)(BusquedaEscondida);
