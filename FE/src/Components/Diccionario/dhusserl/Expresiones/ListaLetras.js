//React
import React, { useContext } from 'react';

//Elements
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

//Other req
import classNames from 'classnames';
import { webService } from '../../../../js/webServices';
import { sesionStore } from '../../../../stores/sesionStore';
import { expresionesStore } from '../../../../stores/expresionStore';

const styleList = {
  lista: {
    width: "100% !important",
  },
  contenedorLista: {
    backgroundColor: "#daa79f",
  },
  listaItem: {
    justifyContent: "center",
    padding: "7px 0",
  },
  divListaLetras: {
    height: "31px",
    overflowY: "scroll"
  }
}

const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function ListaLetras(props) {
  const { classes } = props;
  const global = useContext(sesionStore);
  const { state, dispatch } = global
  const { letra, langLista } = state

  const globalExpresiones = useContext(expresionesStore)
  const { attend } = globalExpresiones


  const fixReferencias = (referencias) => {
    var expresiones = []
    var posicActual = -1
    var expreActual = ""
    var i = 0
    while (i < referencias.length) {
      if (expreActual != referencias[i].expresion) {
        posicActual++
        expreActual = referencias[i].expresion
        expresiones.push({
          clave: referencias[i].clave,
          expresion: referencias[i].expresion,
          id: referencias[i].id,
          index_de: referencias[i].index_de,
          index_es: referencias[i].index_es,
          pretty_e: referencias[i].pretty_e,
          pretty_t: referencias[i].pretty_t,
          referencias: [],
          traduccion: referencias[i].traduccion
        })
        expresiones[posicActual].referencias.push({
          referencia_original: referencias[i].referencia_original,
          referencia_traduccion: referencias[i].referencia_traduccion,
          refid: referencias[i].refid,
          orden: referencias[i].orden,
        })
        i++
      } else {
        expresiones[posicActual].referencias.push({
          referencia_original: referencias[i].referencia_original,
          referencia_traduccion: referencias[i].referencia_traduccion,
          refid: referencias[i].refid,
          orden: referencias[i].orden,
        })
        i++
      }
    }
    return expresiones
  }

  const handleChangeLetraMain = (event) => {
    dispatch({
      type: "SET_LETRA",
      payload: event.target.innerText
    })
    // if (props.state.checkedA == false) {
    //   props.setState({ checkedA: true })
    // }
    // if (!globalLetra.letraFlag) {
    //   globalLetra.setLetraFlag(true)
    // }
    var service = "/expresiones/" + langLista + "/" + letra
    webService(service, "GET", {}, global.sesion, (data) => {
      attend({
        type: "SET_CHUNK",
        payload: fixReferencias(data.data.response).slice(0, 50)
      })
      // if (!props.flagDeBusqueda) {
      //   attend({
      //     type: "SET_CHUNKGLOBAL",
      //     payload: fixReferencias(data.data.response)
      //   })
      // }
    })
  };

  return (
    <div className={classes.divListaLetras}>
      <div className={classes.contenedorLista}>
        <List className={classes.lista}>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {letras.map(l => (
              <Grid item xs={1} md key={l} className={classNames({ "selected": letra == l })}>
                <ListItem className={classes.listaItem} button onClick={handleChangeLetraMain} id={l}>
                  <Typography variant="h6" align="center">{l}</Typography>
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
