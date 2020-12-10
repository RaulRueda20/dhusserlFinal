import React, { useState, Fragment } from "react";
import classNames from "classnames";
import {
  IconButton,
  Button,
  Modal,
  Typography,
  Paper,
  Grid,
  Tooltip,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import ClearIcon from "@material-ui/icons/Clear";
import Jerarquia from "@material-ui/icons/DeviceHub";

import ModalJerarquiaPadres from "./ModalJerarquiaPadres";
import ModalJerarquiaHijos from "./ModalJerarquiaHijos";

const estiloModalJerarquia = {
  modalinj: {
    width: "50%",
    maxHeight: "75vh",
    left: "25vw",
    top: "12.5vh",
    position: "absolute",
    padding: "30px 30px",
    overflowY: "auto",
  },
  listaitemj: {
    borderBottom: "dotted",
  },
  busquedaj: {
    width: "90%",
    left: "30px",
  },
  contenedorbusquedaj: {
    paddingTop: "10px",
  },
  botonAgregar: {
    width: "45%",
    left: "170px",
  },
  menuButtons: {
    margin: "10px 0px",
  },
  Buttons: {
    marginLeft: "10px",
  },
};

const ModalJerarquia = (props) => {
  const { classes } = props;
  const [open, setOpen] = useState(false);
  const [vistaModal, setVistaModal] = useState("padres");

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleVistasPadres = () => {
    setVistaModal("padres");
  };

  const handleVistasHijos = () => {
    setVistaModal("hijos");
  };

  return (
    <Fragment>
      <Tooltip title="Jerarquia de la expresión">
        <IconButton onClick={() => handleOpenModal()}>
          <Jerarquia />
        </IconButton>
      </Tooltip>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleCloseModal}
      >
        <Paper className={classes.modalinj}>
          <Grid container alignItems="center">
            <Grid item xs={11}>
              <Typography variant="h3">Parentesco</Typography>
            </Grid>
            <Grid item xs={1} align="center">
              <IconButton
                aria-haspopup="true"
                onClick={handleCloseModal}
                className={classes.botonClearj}
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
          <div className={classes.menuButtons}>
            <Button
              size="small"
              onClick={handleVistasPadres}
              className={classNames(
                { selectedButton: vistaModal == "padres" },
                classes.Buttons
              )}
            >
              Padres
            </Button>
            <Button
              className={classNames(
                { selectedButton: vistaModal != "padres" },
                classes.Buttons
              )}
              size="small"
              onClick={handleVistasHijos}
            >
              Hijos
            </Button>
          </div>
          {vistaModal == "padres" ? (
            <ModalJerarquiaPadres
              padres={props.padres}
              expresiones={props.expresiones}
              expresionSeleccionada={props.expresionSeleccionada}
              reload={props.reload}
              setReload={props.setReload}
            />
          ) : (
              <ModalJerarquiaHijos
                expresionSeleccionada={props.expresionSeleccionada}
                hijos={props.hijos}
                expresiones={props.expresiones}
                reload={props.reload}
                setReload={props.setReload}
              />
            )}
        </Paper>
      </Modal>
    </Fragment>
  );
};

export default withStyles(estiloModalJerarquia)(ModalJerarquia);
