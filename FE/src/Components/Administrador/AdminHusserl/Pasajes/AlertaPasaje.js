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

const AlertaPasaje = (props) => {
  return (
    <Dialog
      open={props.openAlP}
      onClose={props.handleCloseAlP}
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
        <Button onClick={props.handleCloseAlP}>Cancelar</Button>
        <Button onClick={props.accept}>Aceptar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertaPasaje;
