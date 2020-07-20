//React
import React from 'react'

//Elements
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';

//Componets
import PasajesRenderizados from './PasajesRenderizados';
import ModalDescargas from './ModalDescargas';

const useStyles = makeStyles(theme => ({
  gridTituloPasaje:{
    textAlign: "center",
    margin:"20px 0 !important"
  },
  typoSize:{
    [theme.breakpoints.down('xs')]: {
      fontSize : " 1.5rem !important",
    }
  },
  contenedor:{
    justify: "center",
    alignItems: "center",
    alignContent: "center",
    borderRight: "1px double lightgrey",
    borderLeft: "1px double lightgrey",
    overflowY: "auto",
    maxHeight: "calc(91vh-31px)"
  }
}))

function ContenidoPasaje(props){
  const classes = useStyles();
  const theme = useTheme();
  const [openDescargas, setOpenDescargas]=React.useState(false)

  function clickHandleDescargas(){
    setOpenDescargas(true)
  }

  function clickHandleHidden(){
    props.setOpenHidden(!props.openHidden)
  }

  return(
    <div>
      <Grid container className={classes.contenedor}>
        <Hidden smUp>
          <Grid item xs={2} sm={2} md={6} lg={6}>
            <IconButton size="small" onClick={clickHandleHidden}>
              <SwapHorizIcon fontSize="large"/>
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <PasajesRenderizados referenciaSeleccionada={props.referenciaSeleccionada} languageP={props.languageP} setLanguageP={props.setLanguageP} lang={props.lang}
          cerrado={props.panelIzquierdo || props.panelDerecho} idDelURL={props.idDelURL} clickHandleDescargas={clickHandleDescargas}
          />
        </Grid>
      </Grid>
      <ModalDescargas openDescargas={openDescargas} setOpenDescargas={setOpenDescargas} idExpresion={props.idExpresion} 
      lang={props.lang} match={props.match} language={props.language}/> 
    </div>
  )
}

export default (ContenidoPasaje);