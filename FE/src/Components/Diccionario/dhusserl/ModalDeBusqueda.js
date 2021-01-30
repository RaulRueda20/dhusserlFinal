// React
import React, { useContext, useEffect } from "react";

// Components
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

//Language
import {
  tituloBusqueda,
  mensajeBusqueda,
  búsqueda,
} from "../../../js/Language";
import { sesionStore } from "../../../stores/sesionStore";

const modalBusqueda = {
  modalinb: {
    width: "50%",
    maxHeight: "75vh",
    top: "35.5vh",
    position: "absolute",
    padding: "20px 20px",
    left: "calc(25% - 30px)",
  },
  botonClear: {
    bottom: "15px",
    size: "small",
  },
  botonAceptar: {
    top: "18px",
  },
  gridDelBoton: {
    textAlign: "right",
  },
  gridDelTypo: {
    textAlign: "center",
  },
};

const ModalDeBusqueda = (props) => {
  const { classes } = props;
  const global = useContext(sesionStore);
  const { state } = global;
  const { lang } = state;

  useEffect(() => {
    console.log(props.match);
  });

  function clickHandleCloseModal() {
    props.setModalDebusquedas(false);
  }

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.modalDeBusquedas}
    >
      <Paper className={classes.modalinb}>
        <Grid container alignContent="center" alignItems="center">
          <Grid item xs={11}>
            <Typography variant="h3">{tituloBusqueda(lang)}</Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton aria-haspopup="true" onClick={clickHandleCloseModal}>
              <ClearIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Divider />
          <Grid item xs={12} className={classes.gridDelTypo}>
            <Typography variant="h5">{mensajeBusqueda(lang)}</Typography>
            <Typography>{búsqueda(lang)}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default withStyles(modalBusqueda)(ModalDeBusqueda);
