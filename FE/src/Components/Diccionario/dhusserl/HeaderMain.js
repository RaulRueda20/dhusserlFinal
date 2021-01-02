import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Book from "@material-ui/icons/Book";
import PageviewIcon from "@material-ui/icons/Pageview";
import MenuHeader from "./MenuHeader";
import MenuIdioma from "../MenuIdioma";

import { tituloDiccionario } from "../../../js/Language";

import { sesionStore } from "../../../stores/sesionStore";

const useStyles = makeStyles((theme) => ({
  titulo: {
    color: "white",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  idiomas: {
    textAlign: "center",
  },
  menu: {
    textAlign: "center",
  },
}));

function HeaderMain(props) {
  const classes = useStyles();
  const theme = useTheme();
  const global = useContext(sesionStore);
  const { state } = global;
  const { lang } = state;

  // useEffect(() => {
  //   console.log("URL", props.match);
  // });

  return (
    <Grid container direction="row" justify="center" className="grids">
      <AppBar position="static" color="primary" className="headerMain">
        <Toolbar variant="dense">
          <Grid item xs={2} sm={1} md={1} xl={1} className={classes.menu}>
            <MenuHeader
              history={props.history}
              match={props.match}
              setLogged={props.setLogged}
            />
          </Grid>
          {props.flagCambio == "expresiones" ? (
            <Grid item xs={2} sm={1} md={1} xl={1}>
              <Tooltip title="Ir al módulo de búsquedas">
                <Link to={`${props.match.url}/busquedas`}>
                  <IconButton>
                    <PageviewIcon className="iconos" />
                  </IconButton>
                </Link>
              </Tooltip>
            </Grid>
          ) : props.flagCambio == "busquedas" ? (
            <Grid item xs={2} sm={1} md={1} xl={1}>
              <Link to={`${props.match.url}/diccionario`}>
                <Tooltip title="Ir al diccionario">
                  <IconButton>
                    <Book className="iconos" />
                  </IconButton>
                </Tooltip>
              </Link>
            </Grid>
          ) : (
            <Grid item xs={2} sm={1} md={1} xl={1}>
              <Link to={`${props.match.url}/busquedas`}>
                <IconButton>
                  <PageviewIcon className="iconos" />
                </IconButton>
              </Link>
            </Grid>
          )}
          <Grid item xs={6} sm={8} md={8} xl={8} align="center">
            <Typography variant="h2" className={classes.titulo}>
              {tituloDiccionario(lang)}
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1} md={1} xl={1} className={classes.idiomas}>
            <MenuIdioma />
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default HeaderMain;
