import React, { Suspense, lazy, Fragment, useContext } from "react";
import classNames from 'classnames';
import { Typography, Grid, Divider, LinearProgress as Loading } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { tituloDiccionario, subtituloDiccionario } from '../../../js/Language';

const MenuIdioma = lazy(() => import('../MenuIdioma'))
import { sesionStore } from '../../../stores/sesionStore';

const stylesHed = {
  subtitulo1: {
    marginTop: "10px",
  },
  grids: {
    margin: "5vh 0"
  },
  menuIdiomas: {
    textAlign: "center"
  }
}

const Header = (props) => {
  const { classes } = props;
  const global = useContext(sesionStore);
  const { state } = global
  const { lang } = state

  return (
    <Fragment>
      <Grid className={classNames("grids", classes.grids)} container justify="center">
        <Grid item xs={11} align="center">
          <Typography variant="h1" align="center">
            {tituloDiccionario(lang)}
          </Typography>
        </Grid>
        <Grid item xs={1} className={classes.menuIdiomas}>
          <Suspense fallback={<Loading />}>
            <MenuIdioma />
          </Suspense>
        </Grid>
      </Grid>
      <br />
      <Divider className="divisor" />
      <Grid container>
        <Grid item xs={11} align="center">
          <Typography variant="h4" align="center">
            {subtituloDiccionario(lang)}
          </Typography>
        </Grid>
      </Grid>
      <br />
    </Fragment>
  )
}

export default withStyles(stylesHed)(Header);