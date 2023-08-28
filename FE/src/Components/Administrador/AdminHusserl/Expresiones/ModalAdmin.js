//Components
import React, { useState } from "react";

//Elements
import {
  Button,
  IconButton,
  Modal,
  Typography,
  Paper,
  Grid,
  Tooltip,
  Snackbar,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import Add from "@material-ui/icons/AddCircle";
import { withStyles } from "@material-ui/styles";
import SwipeableViews from "react-swipeable-views";

//Other req
import { adminService } from "../../../../js/webServices";
import es from "../../../../Imagenes/spain.png";
import al from "../../../../Imagenes/germany.png";

import FormularioExpresiones from "./FormularioExpresiones";

const estiloModalExpresiones = (theme) => ({
  Boton1: {
    width: "80%",
  },
  modalin: {
    top: "10vh",
    left: "calc(50% - 30vw)",
    width: "60vw",
    padding: "20px 30px",
    position: "absolute",
  },
  contenedorSubtitulos: {
    padding: "15px 15px",
  },
  botonAgregar: {
    width: "50%",
    left: "50%",
    marginTop: "15px !important",
    marginRight: "30 px !importan",
  },
  closeButton: {
    textAlign: "right",
  },
});

function ModalAdmin(props) {
  const { classes } = props;
  const [indiceLang, setIndicelang] = useState("al");
  const [open, setOpen] = useState(false);
  const [vista, setVista] = useState(0);
  const [expresionLetraIndice, setExpresionLetraIndice] = useState("A");
  const [expresion, setExpresion] = useState("");
  const [expresionContenido, setExpresionContenido] = useState("");
  const [traduccionLetraIndice, setTraduccionLetraIndice] = useState("A");
  const [traduccion, setTraduccion] = useState("");
  const [traduccionContenido, setTraduccionContenido] = useState("");
  const [snack, setSnack] = useState({ open: false, text: "" });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAl = () => {
    setVista(0);
  };

  const handleEs = () => {
    setVista(1);
  };

  const handleClickNueva = () => {
    var params = {
      indice_es: traduccionLetraIndice,
      indice_de: expresionLetraIndice,
      pretty_es: traduccionContenido,
      pretty_de: expresionContenido,
      expresion: expresion,
      traduccion: traduccion,
    };
    var service = "/expresiones/nuevaExpresion/";
    adminService(service, "POST", JSON.stringify(params), (data) => {
      setSnack({ open: true, text: "Expresión creada con éxito." });
      setOpen(false);
      props.setReload(!props.reload);
    });
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        key={`top,left`}
        open={snack.open}
        onClose={() => setSnack({ open: false, text: "" })}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{snack.text}</span>}
      />
      <Tooltip title="Agregar expresión">
        <IconButton onClick={() => handleOpen()}>
          <Add />
        </IconButton>
      </Tooltip>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <Paper className={classes.modalin}>
          <Grid
            container
            className={classes.contenedorSubtitulos}
            alignItems="center"
          >
            <Grid item xs={11}>
              <Typography variant="h3">Nueva Expresión</Typography>
            </Grid>
            <Grid item xs={1} className={classes.closeButton}>
              <IconButton onClick={handleClose}>
                <ClearIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
          <SwipeableViews
            axis={vista == 0 ? "x-reverse" : "x"}
            index={vista}
            onChangeIndex={setVista}
          >
            <FormularioExpresiones
              expresion={expresion}
              setExpresion={setExpresion}
              letra={expresionLetraIndice}
              setLetra={setExpresionLetraIndice}
              contenido={expresionContenido}
              setContenido={setExpresionContenido}
              indiceLang={indiceLang}
              handleLang={handleEs}
              flag={es}
              label="Expresión"
            />
            <FormularioExpresiones
              expresion={traduccion}
              setExpresion={setTraduccion}
              letra={traduccionLetraIndice}
              setLetra={setTraduccionLetraIndice}
              contenido={traduccionContenido}
              setContenido={setTraduccionContenido}
              indiceLang={indiceLang}
              handleLang={handleAl}
              flag={al}
              label="Traducción"
            />
          </SwipeableViews>
          <Button
            variant="contained"
            className={classes.botonAgregar}
            onClick={handleClickNueva}
          >
            Agregar
          </Button>
        </Paper>
      </Modal>
    </>
  );
}

export default withStyles(estiloModalExpresiones)(ModalAdmin);
