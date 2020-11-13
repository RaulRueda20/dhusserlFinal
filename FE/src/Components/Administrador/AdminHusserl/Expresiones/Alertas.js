//React
import React from "react";

//Elements
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const Alertas = (props) => {
  return (
    <Dialog
      open={props.openAl}
      onClose={props.handleCloseAl}
      aria-labelledby="simple-dialog-title"
      aria-describedby="simple-dialog-description"
    >
      <DialogTitle id="simple-dialog-title">Alerta</DialogTitle>
      <DialogContent>
        <DialogContentText id="simple-dialog-description">
          {props.text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleCloseAl}>Cancelar</Button>
        <Button onClick={props.accept}>Aceptar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Alertas;
