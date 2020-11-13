//React
import React, { useContext } from "react";

//Elements
import { List, ListItem, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

//Other req
import classNames from "classnames";
import { webService } from "../../../../js/webServices";
import { sesionStore } from "../../../../stores/sesionStore";
import { languageStore } from "../../../../stores/languageStore";
import { letraStore } from "../../../../stores/letraStore";

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

const letras = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const ListaLetras = (props) => {
  const { classes } = props;
  const global = useContext(sesionStore);
  const globalLanguage = useContext(languageStore);
  const globalLetra = useContext(letraStore);

  const fixReferencias = (referencias) => {
    var expresiones = [];
    var posicActual = -1;
    var expreActual = "";
    var i = 0;
    while (i < referencias.length) {
      if (expreActual != referencias[i].expresion) {
        posicActual++;
        expreActual = referencias[i].expresion;
        expresiones.push({
          clave: referencias[i].clave,
          expresion: referencias[i].expresion,
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
    globalLetra.setLetra(event.target.innerText);
    if (props.state.checkedA == false) {
      props.setState({ checkedA: true });
    }
    if (!globalLetra.letraFlag) {
      globalLetra.setLetraFlag(true);
    }
    var service =
      "/expresiones/" + globalLanguage.langLista + "/" + globalLetra.letra;
    webService(service, "GET", {}, global.sesion, ({ data }) => {
      const { response } = data;
      props.setChunkList(fixReferencias(response).slice(0, 50));
      if (!props.flagDeBusqueda) {
        props.setChunkListGlobal(fixReferencias(response));
      }
    });
  };

  return (
    <div className={classes.divListaLetras}>
      <div className={classes.contenedorLista}>
        <List className={classes.lista}>
          <Grid container direction="row" justify="center" alignItems="center">
            {letras.map((letra) => (
              <Grid
                item
                xs={1}
                md
                key={letra}
                className={classNames({ selected: globalLetra.letra == letra })}
              >
                <ListItem
                  className={classes.listaItem}
                  button
                  onClick={handleChangeLetraMain}
                  id={letra}
                >
                  <Typography variant="h6" align="center">
                    {letra}
                  </Typography>
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </List>
      </div>
    </div>
  );
};

export default withStyles(styleList)(ListaLetras);
