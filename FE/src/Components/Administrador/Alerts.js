import React from 'react';
import {Dialog,DialogContent,DialogContentText,DialogTitle,Slide,DialogActions,Button } from '@material-ui/core/Dialog';

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Alerts = () => {
  return(
    <div>
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{this.props.titulo}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {this.props.mensaje}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Aceptar
          </Button>
      </DialogActions>
      </Dialog>
    </div>
  )
}

export default Alerts;
