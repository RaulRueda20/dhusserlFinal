import React, { useContext } from "react";

import {
  Modal,
  Typography,
  Paper,
  Grid,
  IconButton,
  Divider,
  Button,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import ClearIcon from "@material-ui/icons/Clear";

import {
  bienvenido,
  bienvenidaModal,
  aceptarAlert,
} from "../../../../js/Language";
import { languageStore } from "../../../../stores/languageStore";

const modalBienvenida = {
  modalinB: {
    width: "50%",
    maxHeight: "75vh",
    top: "25.5vh",
    position: "absolute",
    padding: "30px 30px",
    overflowY: "auto",
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

const ModalDeBienvenida = (props) => {
  const { classes } = props;
  const globalLanguage = useContext(languageStore);

  const clickHandleCloseModal = () => {
    props.setOpenModal(false);
  };

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.openModal}
    >
      <Paper className={classes.modalinB}>
        <Grid container>
          <Grid item xs={11}>
            <Typography variant="h4">
              {bienvenido(globalLanguage.lang)}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton aria-haspopup="true" onClick={clickHandleCloseModal}>
              <ClearIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Divider />
          <Grid item xs={12} className={classes.gridDelTypo}>
            <Typography variant="h5">
              {bienvenidaModal(globalLanguage.lang)}
            </Typography>
          </Grid>
          <Divider />
          <Grid item xs={12} className={classes.gridDelBoton}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.botonAceptar}
              onClick={clickHandleCloseModal}
            >
              {aceptarAlert(globalLanguage.lang)}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default withStyles(modalBienvenida)(ModalDeBienvenida);
