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
  const global = useContext(sesionStore);
  const { state } = global;
  const { lang } = state;

  return (
    <AppBar position="static" color="primary" className="headerMain">
      <Grid
        container
        direction="row"
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid item xs={1} className={classes.menu}>
          <MenuHeader
            history={props.history}
            match={props.match}
            setLogged={props.setLogged}
          />
        </Grid>
        {props.flagCambio == "expresiones" ? (
          <Grid item xs={1} className={classes.menu}>
            <Tooltip title="Ir al módulo de búsquedas">
              <Link to={`${props.match.url}/busquedas`}>
                <IconButton>
                  <PageviewIcon className="iconos" />
                </IconButton>
              </Link>
            </Tooltip>
          </Grid>
        ) : props.flagCambio == "busquedas" ? (
          <Grid item xs={1} className={classes.menu}>
            <Link to={`${props.match.url}/diccionario`}>
              <Tooltip title="Ir al diccionario">
                <IconButton>
                  <Book className="iconos" />
                </IconButton>
              </Tooltip>
            </Link>
          </Grid>
        ) : (
          <Grid item xs={1} className={classes.menu}>
            <Link to={`${props.match.url}/busquedas`}>
              <IconButton>
                <PageviewIcon className="iconos" />
              </IconButton>
            </Link>
          </Grid>
        )}
        <Grid item xs={8} className={classes.menu}>
          <Typography variant="h2" className={classes.titulo}>
            {tituloDiccionario(lang)}
          </Typography>
        </Grid>
        <Grid item xs={2} className={classes.idiomas}>
          <MenuIdioma />
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default HeaderMain;
