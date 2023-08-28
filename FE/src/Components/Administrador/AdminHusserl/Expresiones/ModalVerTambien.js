//React
import React, { useEffect, useState } from "react";

//Elements
import classNames from "classnames";
import {
  IconButton,
  Button,
  Modal,
  Paper,
  Tooltip,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  FormControl,
  Input,
  InputAdornment,
  Snackbar,
  Grid,
  LinearProgress,
} from "@material-ui/core";
import Share from "@material-ui/icons/Share";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import { withStyles } from "@material-ui/styles";

//Other req
import "../../../../css/expresiones.css";
import { adminService } from "../../../../js/webServices";

const addVT = (expresionId, index, lista, last) => {
  var service = "/vertambien/" + expresionId + "/" + lista[index].split("t")[1];
  adminService(service, "POST", {}, (datax) => {
    console.log({ datax });
    if (index + 1 < lista.length) {
      console.log("entre aqui");
      return last();
      // return addVT(expresionId, index + 1, lista, last);
    } else {
      return last();
    }
  });
};

const estiloModalJerarquiaHijos = {
  modalinj: {
    width: "50%",
    maxHeight: "75vh",
    left: "25vw",
    top: "12.5vh",
    position: "absolute",
    padding: "30px 30px",
    overflowY: "auto",
  },
  botonhijos: {
    left: "10px",
    size: "small",
  },
  listacontenedor: {
    height: "25vh",
    overflow: "scroll",
  },
  listaitemj: {
    background: "rgb(230,230,230)",
    borderBottom: "rgb(150,150,150) dotted",
  },
  busquedaj: {
    width: "100%",
  },
  contenedorbusquedaj: {
    paddingTop: "10px",
  },
  botonAgregar: {
    width: "50%",
    left: "50%",
  },
};

const ModalVerTambien = (props) => {
  const { classes } = props;
  const [listaVerTambien, setListaVerTambien] = useState([]);
  const [selectedExpresions, setSelectedExpresions] = useState([]);
  const [snack, setSnack] = useState({ open: false, text: "" });
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(true);
  const [open, setOpen] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    if (props.expresion.id != null) {
      var service = "/vertambien/" + props.expresion.id;
      adminService(service, "GET", {}, ({ data }) => {
        const { response } = data;
        setListaVerTambien(response);
      });
    }
  }, [props.expresion.id, reload]);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const checkExistence = () => {
    if (selectedExpresions.length == 0) {
      setSnack({ open: true, text: "No ha seleccionado ninguna expresión." });
      return true;
    }
    for (var i in selectedExpresions) {
      for (var j in listaVerTambien) {
        if (selectedExpresions[i].split("t")[1] == listaVerTambien[j].id) {
          setSnack({
            open: true,
            text:
              "La expresión '" +
              listaVerTambien[j].id +
              " - " +
              listaVerTambien[j].expresion +
              "' ya está vinculada.",
          });
          return true;
        }
      }
    }
    return false;
  };

  const add = () => {
    if (!checkExistence()) {
      setLoading(true);
      addVT(props.expresion.id, 0, selectedExpresions, () => {
        setLoading(false);
        setSnack({
          open: true,
          text: "Se ha(n) vinculado el/los expresión(es) con éxito.",
        });

        setSelectedExpresions([]);
        document
          .getElementsByClassName("selected")
          .forEach((element) => element.classList.remove("selected"));
        document
          .getElementsByClassName("hiddenE")
          .forEach((element) => element.classList.remove("hiddenE"));
        setBusqueda("");
        setReload(!reload);
      });
    }
  };

  function handleClose() {
    setSnack({ open: false, text: "" });
  }

  const addEToList = (id) => {
    let se = selectedExpresions;
    if (se.indexOf(id) < 0) se.push(id);
    else se.splice(selectedExpresions.indexOf(id), 1);
    document.getElementById(id).classList.toggle("selected");
    setSelectedExpresions(se);
  };

  const handleClickEliminarVT = (expresion) => {
    var service = "/vertambien/" + props.expresion.id + "/" + expresion.id;
    adminService(service, "DELETE", {}, (datax) => {
      setSnack({
        open: true,
        text: "Se ha eliminado el vínculo con la expresión.",
      });
      setReload(!reload);
    });
  };

  const handleChangeBusquedaVerTambien = (event) => {
    var expresionVertBuscada = event.target.value;
    setBusqueda(expresionVertBuscada);
    props.expresiones.forEach((expresionp) => {
      var expresionVertNombre =
        expresionp.t_id + expresionp.t_term_de + expresionp.t_term_es;
      var expresionVertEncontrada =
        expresionVertNombre.indexOf(expresionVertBuscada);
      document
        .getElementById("vt" + props.expresion.t_id)
        ?.classList?.remove("hiddenE");
      if (expresionVertEncontrada === -1) {
        document.getElementById("vt" + expresionp.t_id).className += " hiddenE";
      }
    });
  };

  return (
    <>
      <Tooltip title="Ver También">
        <IconButton onClick={() => handleOpenModal()}>
          <Share />
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
              <Typography variant="h3">Ver También</Typography>
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
          <br />
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
            key={`top,left`}
            open={snack.open}
            onClose={handleClose}
            ContentProps={{
              "aria-describedby": "message-id",
            }}
            message={<span id="message-id">{snack.text}</span>}
          />
          <LinearProgress
            className={classNames([{ hidden: !loading }, "loadingBar"])}
          />
          <List className={classes.listacontenedor}>
            {listaVerTambien.map((expresion) => {
              return (
                <ListItem key={expresion.id} className={classes.listaitemj}>
                  <ListItemText
                    primary={
                      expresion.expresion + " // " + expresion.traduccion
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      size="small"
                      onClick={() => handleClickEliminarVT(expresion)}
                    >
                      <ClearIcon fontSize="small" />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
          <Typography variant="h3">Expresiones</Typography>
          <FormControl className={classes.busquedaj}>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              value={busqueda}
              onChange={handleChangeBusquedaVerTambien}
            />
          </FormControl>
          <List className={classes.listacontenedor}>
            {props.expresiones.map((expresionp) => (
              <li
                id={"vt" + expresionp.t_id}
                key={expresionp.t_id}
                className={"sideList"}
                onClick={() => addEToList("vt" + expresionp.t_id)}
              >
                {expresionp.t_id +
                  " - " +
                  expresionp.t_term_de +
                  " // " +
                  expresionp.t_term_es}
              </li>
            ))}
          </List>
          <Button
            variant="contained"
            className={classes.botonAgregar}
            onClick={add}
          >
            Agregar
          </Button>
        </Paper>
      </Modal>
    </>
  );
};

export default withStyles(estiloModalJerarquiaHijos)(ModalVerTambien);
