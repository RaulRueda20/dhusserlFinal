//React
import React, { useEffect, useState } from 'react';

//Elements
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";
import { withStyles } from '@material-ui/styles';

//Components
import MenuBarra from './MenuBarra';

//Other req
import {adminService} from '../../../../js/webServices';


const infoExpresiones= {
  titulo:{
    paddingTop:"10px"
  },
  tit : {
    paddingTop: "5px"
  },
  botonesaccion:{
    // paddingLeft:"120px"
  },
  contenedordeinfo:{
    borderRight: "lightgrey 1px dashed"
  },
  subtitulo:{
    paddingTop:"20px"
  },
  infoPanel:{
    padding: "25px 0px"
  },
  w100: {
    width : "100% !important"
  },
  scrolledHeight: {
    maxHeight: "100px",
    overflow: "scroll"
  }
}

function InfoExpresiones(props){
  const {classes} = props;
  const [hijos, setHijos] = useState([]);
  const [padres, setPadres] = useState([]);

  useEffect(()=>{
    let service1 = "/expresiones/al/abuelosList/" + props.expresionId;
    adminService( service1, "GET", {}, ({data}) => {
      const { response } = data;
      setPadres(response)
    })
    let service2 = "/expresiones/al/hijosList/" + props.expresionId;
    adminService (service2, "GET", {}, ({data}) =>{
      const { response } = data
      setHijos(response)
    })
  })

  const paintJerarquia = (lista) => {
    let lastString = ""
    for(let i in lista){
      if(i == lista.length-1)
        lastString += lista[i].expresion + "."
      else lastString += lista[i].expresion + ", "
    }
    return lastString
  }
  
  return(
    <div>
      <Grid container className={classes.titulo} alignItems="center">
        <Grid item xs={7} className={classes.tit}>
          <Typography variant="h3">
            {props.expresionSeleccionada.expresion_original + " // " + props.expresionSeleccionada.expresion_traduccion}
          </Typography>
        </Grid>
        <Grid item xs={5} className={classes.botonesaccion}>
          <MenuBarra expresion={props.expresionSeleccionada} setExpresion={props.setExpresionId} padres={padres} hijos={hijos} 
            expresiones={props.expresiones} reload={props.reload} setReload={props.setReload} 
            reloadExpresion={props.reloadExpresion} setReloadExpresion={props.setReloadExpresion}/>
        </Grid>
      </Grid>
      <Divider className="divisor"/>
      <Grid container className={classes.infoPanel}>
        <Grid item xs={6} className={classes.contenedordeinfo}>
          <Typography variant="h3" className={classes.subtitulos}>
            Información
          </Typography><br/><br/>
          <Grid container spacing={2} className={classes.w100}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" className={classes.informaciondeexpresion}>
                <b>Expresión: </b>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" className={classes.informaciondeexpresion}>
                {props.expresionSeleccionada.expresion_original}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h4" className={classes.informaciondeexpresion}>
                <b>Traducción: </b>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" className={classes.informaciondeexpresion}>
                {props.expresionSeleccionada.expresion_traduccion}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h3" className={classes.subtitulos}>
            Parentesco
          </Typography><br/><br/>
          <Grid container spacing={2} className={classes.w100}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" className={classes.informaciondeexpresion}>
                <b>Padre(s): </b>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.scrolledHeight}>
              <Typography variant="h4" className={classes.informaciondeexpresion}>
                {padres.length > 0 ? paintJerarquia(padres) : null}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h4" className={classes.informaciondeexpresion}>
                <b>Hijo(s): </b>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.scrolledHeight}>
              <Typography variant="h4" className={classes.informaciondeexpresion}>
                {hijos.length > 0 ? paintJerarquia(hijos) : null}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider className="divisor"/>
    </div>
  )
}

export default withStyles(infoExpresiones)(InfoExpresiones);
