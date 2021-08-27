//React
import React, { useContext, useState } from "react";

//Elements
import {
  List,
  ListItem,
  Grid,
  Typography,
  LinearProgress,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

//Other req
import classNames from "classnames";
import { webService } from "../../../../js/webServices";
import { sesionStore } from "../../../../stores/sesionStore";
import { expresionesStore } from "../../../../stores/expresionStore";
import { letras } from "../../../../js/constants";

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
    overflowY: "scroll",
  },
};

const ListaLetras = (props) => {
  const { classes } = props;

  const global = useContext(sesionStore);
  const { state, dispatch } = global;
  const { sesion, langLista, letra } = state;

  const globalExpresion = useContext(expresionesStore);
  const { attend } = globalExpresion;

  const [loading, setLoading] = useState(false);

  const fixReferencias = (referencias) => {
    var expresiones = [];
    var posicActual = -1;
    var expreActual = "";
    var i = 0;
    while (i < referencias.length) {
      if (expreActual != referencias[i].id) {
        posicActual++;
        expreActual = referencias[i].id;
        expresiones.push({
          clave: referencias[i].clave,
          nombreExpresion: referencias[i].expresion,
          id: referencias[i].id,
          index_de: referencias[i].index_de,
          index_es: referencias[i].index_es,
          pretty_e: referencias[i].pretty_e,
          pretty_t: referencias[i].pretty_t,
          referencias: [],
          traduccion: referencias[i].traduccion,
        });
        expresiones[posicActual].referencias.push({
          referencia_original: referencias[i].referencia_original,
          referencia_traduccion: referencias[i].referencia_traduccion,
          refid: referencias[i].refid,
          orden: referencias[i].orden,
        });
        i++;
      } else {
        expresiones[posicActual].referencias.push({
          referencia_original: referencias[i].referencia_original,
          referencia_traduccion: referencias[i].referencia_traduccion,
          refid: referencias[i].refid,
          orden: referencias[i].orden,
        });
        i++;
      }
    }
    return expresiones;
  };

  const handleChangeLetraMain = (event) => {
    if (letra === event.target.innerText) {
      setLoading(true);
      const service = "/expresiones/" + langLista + "/" + letra;
      webService(service, "GET", {}, sesion, (data) => {
        attend({
          type: "START_EXPRESIONES",
          payload: {
            expresiones: fixReferencias(data.data.response),
            chunk: fixReferencias(data.data.response).slice(0, 50),
          },
        });
        setLoading(false);
      });
    } else {
      setLoading(true);
      dispatch({
        type: "SET_LETRA",
        payload: event.target.innerText,
      });
      setLoading(false);
    }
  };

  return (
    <div className={classes.divListaLetras}>
      <div className={classes.contenedorLista}>
        <List className={classes.lista}>
          <Grid container direction="row" justify="center" alignItems="center">
            {letras.map((l) => (
              <Grid
                item
                xs={1}
                md
                key={l}
                className={classNames({ selected: letra == l })}
              >
                <ListItem
                  className={classes.listaItem}
                  button
                  onClick={handleChangeLetraMain}
                  id={l}
                >
                  <Typography variant="h6" align="center">
                    {l}
                  </Typography>
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </List>
        <LinearProgress
          className={classNames([{ hidden: !loading }, "loadingBar"])}
        />
      </div>
    </div>
  );
};

export default withStyles(styleList)(ListaLetras);
