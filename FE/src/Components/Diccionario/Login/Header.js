import React from 'react';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider"

import {tituloDiccionario, subtituloDiccionario} from '../../../js/Language';

import MenuIdioma from '../MenuIdioma'
import { languageStore } from '../../../stores/languageStore';

const stylesHed = {
  subtitulo1:{
    marginTop: "10px",
  },
  grids : {
    margin: "5vh 0"
  },
  menuIdiomas : {
    textAlign : "center"
  }
}

function Header(props){
  const { classes } = props;
  const globalLanguage = React.useContext(languageStore);

  return(
    <div>
      <Grid className={classNames("grids", classes.grids)} container justify="center">
        <Grid item xs={11}  align="center">
          <Typography variant="h1" align="center">
            {tituloDiccionario(globalLanguage.lang)}
          </Typography>
        </Grid>
        <Grid item xs={1} className={classes.menuIdiomas}>
          <MenuIdioma lang={globalLanguage.lang} setLang={globalLanguage.setLang}/>
        </Grid>
      </Grid>
      <br/>
      <Divider className="divisor"/>
      <Grid container>
        <Grid item xs={11}  align="center">
          <Typography variant="h4" align="center">
          {subtituloDiccionario(globalLanguage.lang)}
          </Typography>
        </Grid>
      </Grid>
      <br/>
    </div>
  )
}

export default withStyles(stylesHed)(Header);