import React,{ useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import {adminService} from '../../../../js/webServices';

import ListaLetras from './ListaLetras';
import Busqueda from './Busqueda';
import ListaExpresiones from './ListaExpresiones';
import NuevaExpresion from './NuevaExpresion';

const Expresiones = (props) => {
  const [expresiones, setExpresiones] = React.useState([]);
  const [letraMain, setLetraMain] = React.useState('A');
  const [idExpresion, setIdExpresion] = React.useState("");
  const [reload, setReload] = React.useState(true);

  useEffect(()=>{
    var service = "/expresiones/todas/" + letraMain
    adminService(service, "GET", {}, ({data}) => {
      const { response } = data
      setExpresiones(response)
      if(idExpresion === '')
        setIdExpresion(response.length > 0 ? response[0].id : "")
    })
  }, [letraMain, reload])

  return(
    <div>
        <Grid container>
          <Grid item xs={12}>
            <ListaLetras letraMain={letraMain} setLetraMain={setLetraMain}/>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={3} style={{borderRight:"1px rgb(240, 240, 240) solid"}}>
            <Busqueda expresiones={expresiones} setExpresiones={setExpresiones} letraMain={letraMain}/><br/>
            <ListaExpresiones expresiones={expresiones} idExpresion={idExpresion} setIdExpresion={setIdExpresion}/>
          </Grid>
          <Grid item xs={9} align="center">
            <NuevaExpresion expresionSeleccionada={idExpresion} setExpresionSeleccionada={setIdExpresion} reload={reload} setReload={setReload}/>
          </Grid>
        </Grid>
    </div>
  )
}

export default Expresiones;