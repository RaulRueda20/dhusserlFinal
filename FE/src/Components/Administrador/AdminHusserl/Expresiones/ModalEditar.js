//React
import React, { useState, useEffect, Fragment } from "react";

//Elements
import {
  Button,
  IconButton,
  Modal,
  Typography,
  Paper,
  Grid,
  Tooltip,
  SwipeableViews,
  Snackbar,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import Create from "@material-ui/icons/Create";
import { withStyles } from "@material-ui/styles";

//Components
import FormularioExpresiones from "./FormularioExpresiones";

//Other re1s
import es from "../../../../Imagenes/spain.png";
import al from "../../../../Imagenes/germany.png";
import { adminService } from "../../../../js/webServices";

const estiloModalExpresiones = (theme) => ({
  Boton1: {
    width: "80%",
  },
  modalin: {
    top: "10vh",
    left: "calc(20vw - 120px)",
    width: "60vw",
    height: "54vh",
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
});

const ModalEditar = (props) => {
  const { classes } = props;
  const [vista, setVista] = useState(0);
  const [open, setOpen] = useState(false);
  const [expresionLetraIndice, setExpresionLetraIndice] = useState("A");
  const [expresion, setExpresion] = useState("");
  const [expresionContenido, setExpresionContenido] = useState("");
  const [traduccionLetraIndice, setTraduccionLetraIndice] = useState("A");
  const [traduccion, setTraduccion] = useState("");
  const [traduccionContenido, setTraduccionContenido] = useState("");
  const [snack, setSnack] = useState({ open: false, text: "" });

  useEffect(() => {
    var el = props.expresion.expresion_original.toUpperCase();
    var tl = props.expresion.expresion_traduccion.toUpperCase();
    setExpresion(props.expresion.expresion_original);
    setTraduccion(props.expresion.expresion_traduccion);
    setExpresionContenido(props.expresion.epretty);
    setTraduccionContenido(props.expresion.tpretty);
    setExpresionLetraIndice(el[0]);
    setTraduccionLetraIndice(tl[0]);
  }, [props.expresion]);

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

  function handleCloseSnack() {
    setSnack({ open: false, text: "" });
  }

  const handleClickEdicion = () => {
    var params = {
      id: props.expresion.id,
      indice_es: traduccionLetraIndice,
      indice_de: expresionLetraIndice,
      pretty_es: traduccionContenido,
      pretty_de: expresionContenido,
      expresion: expresion,
      traduccion: traduccion,
    };
    var service = "/expresiones/updateExpresion/" + props.expresion.id;
    adminService(service, "POST", JSON.stringify(params), (data) => {
      props.setReload(!props.reload);
      setSnack({ open: true, text: "Se ha editado la expresión." });
    });
  };

  return (
    <Fragment>
      <Tooltip title="Editar Expresión">
        <IconButton onClick={() => handleOpen()}>
          <Create />
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
              <Typography variant="h3">Editar Expresión</Typography>
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={handleClose} className={classes.botonClear}>
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
              id="formularioAle"
              expresion={expresion}
              setExpresion={setExpresion}
              letra={expresionLetraIndice}
              setLetra={setExpresionLetraIndice}
              contenido={expresionContenido}
              setContenido={setExpresionContenido}
              indiceLang={vista}
              handleLang={handleEs}
              flag={es}
              vista={vista}
              label="Expresión"
            />
            <FormularioExpresiones
              id="FormularioEspa"
              expresion={traduccion}
              setExpresion={setTraduccion}
              letra={traduccionLetraIndice}
              setLetra={setTraduccionLetraIndice}
              contenido={traduccionContenido}
              setContenido={setTraduccionContenido}
              indiceLang={vista}
              handleLang={handleAl}
              flag={al}
              vista={vista}
              label="Traducción"
            />
          </SwipeableViews>
          <Button
            variant="contained"
            className={classes.botonAgregar}
            onClick={handleClickEdicion}
          >
            Guardar
          </Button>
        </Paper>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        key={`top,left`}
        open={snack.open}
        onClose={handleCloseSnack}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{snack.text}</span>}
      />
    </Fragment>
  );
};

export default withStyles(estiloModalExpresiones)(ModalEditar);
