//React
import React, { useContext } from "react";

//Elements
import { List, ListItem, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

//Other req
import classNames from "classnames";
import { sesionStore } from "../../../../stores/sesionStore";
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
  const { letra } = state;

  const handleChangeLetraMain = (event) => {
    dispatch({
      type: "SET_LETRA",
      payload: event.target.innerText,
    });
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
      </div>
    </div>
  );
};

export default withStyles(styleList)(ListaLetras);
