//React
import React, { useContext, useState } from "react";

//Components
import SearchIcon from "@material-ui/icons/Search";
import {
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  IconButton,
  Tooltip,
  Button,
  Grid,
} from "@material-ui/core";
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
  toolTipIdiomaDeLaLista,
  distincionMayusyMinus,
  letraNoCoincide,
} from "../../../../js/Language";

import { fixLetter } from "../../../../js/utils";

//Imagen
import es from "../../../../Imagenes/spain.png";
import al from "../../../../Imagenes/germany.png";

const useStyles = createStyles(() => ({
  contenedor: {
    alignItems: "center !important",
  },
  switch: {
    textAlign: "center",
  },
  imagenesBandera: {
    width: "25px !important",
    height: "15px !important",
    fontSize: "0px",
    minHeight: "0px",
    minWidth: "0px !important",
    padding: "0px !important",
  },
}));

const Busqueda = (props) => {
  const { busqueda, setModalDebusquedas, setLoading, setBusqueda, bandera } =
    props;
  const classes = useStyles();
  const global = useContext(sesionStore);
  const { state, dispatch } = global;
  const { letra, lang, langLista, sesion } = state;

  const globalExpresion = useContext(expresionesStore);
  const { store, attend } = globalExpresion;
  const { expresiones } = store;

  const [insensitiveCase, setInsensitiveCase] = useState(false);

  const ChunkC = (e) => {
    attend({
      type: "START_EXPRESIONES",
      payload: {
        expresiones: e,
        chunk: e.slice(0, 50),
      },
    });
  };

  const clickChangeLanguageEsVP = () => {
    dispatch({ type: "SET_LANGLISTA", payload: "es" });
  };

  const clickChangeLanguageAlVP = () => {
    dispatch({ type: "SET_LANGLISTA", payload: "al" });
  };

  const handleChangeBusquedaExpresiones = (event) => {
    event.preventDefault();
    if (busqueda != "") {
      var stringCaracteres = busqueda.replace(/(?!\w|\s)./g, "");
      var stringNumeros = busqueda.replace(/([0-9])./g, "");
      if (busqueda.length < 0) {
        setModalDebusquedas(true);
      } else if (stringCaracteres.length < 0) {
        setModalDebusquedas(true);
      } else if (stringNumeros.length < 0) {
        setModalDebusquedas(true);
      } else if (busqueda.length > 0) {
        setLoading(true);
        var letter = busqueda.slice(0, 1);
        var letraCapital = letter.toUpperCase();
        if (letra == fixLetter(letraCapital)) {
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
              // if (letra == letraCapital) {
              console.log("data de busqueda", data.response);
              if (data.response == []) {
                setModalDebusquedas(true);
              } else {
                ChunkC(data.response);
              }
              // } else {
              //   dispatch({
              //     type: "SET_SNACKBAR",
              //     payload: {
              //       open: true,
              //       variant: "error",
              //       message: letraNoCoincide(lang),
              //     },
              //   });
              // }
            }
          );

          setLoading(false);
        } else {
          dispatch({
            type: "SET_SNACKBAR",
            payload: {
              open: true,
              variant: "error",
              message: letraNoCoincide(lang),
            },
          });
          setLoading(false);
          // var letraCapital = letter.toUpperCase();
          // var servicebl =
          //   "/referencias/busquedaExpresionPorLetra" +
          //   "/" +
          //   letra +
          //   "/" +
          //   langLista;
          // webService(
          //   servicebl,
          //   "POST",
          //   { parametro: busqueda, case: insensitiveCase },
          //   sesion,
          //   ({ data }) => {
          //     if (letra == letraCapital) {
          //       console.log("data de busqueda", data.response);
          //       if (data.response == []) {
          //         setModalDebusquedas(true);
          //       } else {
          //         ChunkC(data.response);
          //       }
          //     } else {
          //       dispatch({
          //         type: "SET_SNACKBAR",
          //         payload: {
          //           open: true,
          //           variant: "error",
          //           message: letraNoCoincide(lang),
          //         },
          //       });
          //     }
          //   }
          // );
          // setLoading(false);
        }
      }
    } else {
      setModalDebusquedas(true);
      ChunkC(expresiones.slice(0, 50));
    }
  };

  const handleInsensitiveCase = () => {
    setInsensitiveCase(!insensitiveCase);
  };

  return (
    <form onSubmit={handleChangeBusquedaExpresiones}>
      <Grid
        container
        className={classes.contenedor}
        justify="center"
        alignItems="center"
        alignContent="center"
      >
        <Grid item xs={bandera ? 8 : 10}>
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
        <Grid
          item
          xs={2}
          className={classes.switch}
          style={{ textAlign: "center" }}
        >
          <Tooltip title={distincionMayusyMinus(lang)}>
            <IconButton
              onClick={(e) => handleInsensitiveCase(e)}
              className={classNames([
                { caseSeleccionado: insensitiveCase == true },
                "case",
              ])}
              style={{
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              <Icon
                path={mdiFormatLetterCase}
                title="User Profile"
                size={1.2}
              />
            </IconButton>
          </Tooltip>
        </Grid>
        {bandera ? (
          <Grid item xs={2} style={{ textAlign: "center" }} id="banderita">
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
        ) : null}
      </Grid>
    </form>
  );
};

export default Busqueda;
