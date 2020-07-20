//React
import React from 'react';

//Elements
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';

//Other req
import { Typography } from '@material-ui/core';
import classNames from 'classnames';
import {webService} from '../../../../js/webServices';

const styleList = {
  lista:{
     width:"100% !important",
  },
  contenedorLista:{
    backgroundColor: "#daa79f",
  },
  listaItem: {
    justifyContent: "center",
    padding: "7px 0",
  },
  divListaLetras:{
    height: "31px",
    overflowY: "scroll"
  }
}

const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function ListaLetras (props){
  const { classes }= props;

  const fixReferencias = (referencias) => {
    var expresiones=[]
    var posicActual = -1
    var expreActual = ""
    var i = 0
    while (i<referencias.length){
      if (expreActual != referencias[i].expresion){
        posicActual++
        expreActual = referencias[i].expresion
        expresiones.push({
          clave : referencias[i].clave,
          expresion : referencias[i].expresion,
          id : referencias[i].id,
          index_de: referencias[i].index_de,
          index_es: referencias[i].index_es,
          pretty_e: referencias[i].pretty_e,
          pretty_t: referencias[i].pretty_t,
          referencias : [],
          traduccion: referencias[i].traduccion
        })
        expresiones[posicActual].referencias.push({
          referencia_original : referencias[i].referencia_original,
          referencia_traduccion : referencias[i].referencia_traduccion,
          refid : referencias[i].refid,
          orden: referencias[i].orden,
        })
        i++
      }else{
        expresiones[posicActual].referencias.push({
          referencia_original : referencias[i].referencia_original,
          referencia_traduccion : referencias[i].referencia_traduccion,
          refid : referencias[i].refid,
          orden: referencias[i].orden,
        })
        i++
      }
    }
    return expresiones
  }

  const handleChangeLetraMain = (event) => {
    console.log("de Pasajes",props.language)
    props.setLetraMain(event.target.innerText)
    if(props.state.checkedA==false){
      props.setState({checkedA:true})
    }
    if(!props.flagLetraMain){
      props.setFlagLetraMain(true)
    }
    var service = "/expresiones/" + props.language + "/" + props.letraMain
    webService(service, "GET", {}, (data) => {
      props.setChunkList(fixReferencias(data.data.response).slice(0,50))
      if(!props.flagDeBusqueda){
        props.setChunkListGlobal(fixReferencias(data.data.response))
      }
    })
  };

  return(
    <div className={classes.divListaLetras}>
      <div className={classes.contenedorLista}>
        <List className={classes.lista}>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {letras.map(letra =>(
              <Grid item xs={1} md key={letra} className={classNames({"selected" : props.letraMain == letra})}>
                <ListItem className={classes.listaItem} button onClick={handleChangeLetraMain} id={letra}>
                  <Typography variant="h6" align="center">{letra}</Typography>
                </ListItem> 
              </Grid>
            ))}
          </Grid>
        </List>
      </div>
    </div>
  )
}

export default withStyles(styleList)(ListaLetras);
