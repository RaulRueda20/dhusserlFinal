import React from "react";
import classNames from "classnames";
import { List, ListItem, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styleList = {
  lista: {
    width: "100% !important",
    //  maxWidth: 1160,
    //  maxHeight: "32px"
  },
  contenedorLista: {
    backgroundColor: "#5dab70",
    overflow: "auto",
    height: "100%",
  },
  listaItem: {
    justifyContent: "center",
    padding: "10px 0",
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

  const handleChangeLetraMain = (event) => {
    props.setLetraMain(event.target.innerText);
    if (props.cambioLetra == false) {
      props.setCambioLetra(true);
    }
  };

  return (
    <div>
      <div className={classes.contenedorLista}>
        <List className={classes.lista}>
          <Grid container direction="row" justify="center" alignItems="center">
            {letras.map((letra) => (
              <Grid
                item
                xs
                key={letra}
                className={classNames({ selected: props.letraMain == letra })}
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
