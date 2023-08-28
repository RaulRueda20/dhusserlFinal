//React
import React, { useState, useEffect } from "react";

//Elements
import {
  Button,
  IconButton,
  Modal,
  Typography,
  Paper,
  Divider,
  Grid,
  Select,
  MenuItem,
  Input,
  InputLabel,
  InputAdornment,
  List,
  Snackbar,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/styles";

//Other req
import "../../../../css/pasajes.css";
import { adminService } from "../../../../js/webServices";

const modalagregar = {
  modalina: {
    width: "50%",
    left: "25vw",
    top: "20vh",
    position: "absolute",
    padding: "30px",
    overflowY: "auto",
  },
  subtitulos: {
    paddingTop: "10px",
  },
  contenedorbusqueda: {
    paddingTop: "10px",
  },
  busquedaap: {
    width: "80%",
    left: "60px",
  },
  botonClearAp: {
    left: "80px",
    bottom: "10px",
  },
  botoncerrar: {
    left: "490px",
  },
  botonguardar: {
    width: "50%",
    left: "50%",
  },
  listacontenedor: {
    height: "25vh",
    overflow: "scroll",
  },
  selectedPas: {
    borderBottom: "1px rgb(150,150,150) solid",
  },
  p100: {
    width: "100%",
  },
};

const ModalAgregarPasaje = (props) => {
  const { classes } = props;
  const [pasajes, setPasajes] = useState([]);
  const [nivel, setNivel] = useState("1");
  const [selectedPasajes, setSelectedPasajes] = useState(null);
  const [snack, setSnack] = useState({ open: false, text: "" });

  useEffect(() => {
    const service = "/referencias/lista";
    adminService(service, "GET", {}, ({ data }) => {
      const { response } = data;
      setPasajes(response);
    });
  }, [true]);

  const addEToList = (pasaje) => {
    if (document.getElementById("agregar" + pasaje.ref_id) != null) {
      document
        .getElementById("agregar" + pasaje.ref_id)
        .classList.add("selectedP");
      setSelectedPasajes(pasaje);
    }
  };

  const handleChangeN = (event) => {
    setNivel(event.target.value);
  };

  const handleClickAddPasaje = () => {
    const params = {
      termId: props.expresion.id,
      orden: parseInt(nivel),
      referencia: selectedPasajes.ref_id,
    };
    const service = "/referencias/agregarReferencia";
    adminService(service, "POST", JSON.stringify(params), (data) => {
      setSnack({ open: true, text: "Pasaje agregado con éxito." });
      props.setReload(!props.reload);
    });
  };

  const handleChangeBusquedaAgregar = (event) => {
    const busquedaAg = event.target.value;
    pasajes.map((pasaje) => {
      const pasajeNombre =
        pasaje.ref_libro_de + pasaje.ref_libro_es + pasaje.ref_id;
      const pasajeBuscado = pasajeNombre.indexOf(busquedaAg);
      document
        .getElementById("agregar" + pasaje.ref_id)
        .classList.remove("hidden");
      if (pasajeBuscado == -1) {
        document.getElementById("agregar" + pasaje.ref_id).className +=
          " hidden";
      }
    });
  };

  return (
    <Modal open={props.openAp} onClose={props.handleCloseAp}>
      <Paper className={classes.modalina}>
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
        <Grid container>
          <Grid item xs={11}>
            <Typography variant="h3">Agregar Pasaje</Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton aria-haspopup="true" onClick={props.handleCloseAp}>
              <ClearIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
        <Divider className="divisor" />
        <Typography variant="h4">
          Seleccione el pasaje que desea asociar con la expresión seleccionada.
        </Typography>
        <br />
        <Grid container alignItems="flex-end">
          <Grid item xs={10}>
            <Typography variant="h4" className={classes.selectedPas}>
              {selectedPasajes === null
                ? "No ha seleccionado ningún pasaje."
                : selectedPasajes.ref_id + " - " + selectedPasajes.ref_libro_de}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <InputLabel htmlFor="nivel">Nivel</InputLabel>
            <Select
              id="nivel"
              value={nivel}
              onChange={handleChangeN}
              className={classes.p100}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <br />
        <Typography variant="h3">Pasajes</Typography>
        <br />
        <InputLabel htmlFor="input-with-icon-adornment">Busqueda</InputLabel>
        <Input
          className={classes.p100}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          onChange={handleChangeBusquedaAgregar}
        />
        <List className={classes.listacontenedor}>
          {pasajes.map((pasaje) => (
            <li
              id={"agregar" + pasaje.ref_id}
              key={pasaje.ref_id}
              className={"sideList"}
              onClick={() => addEToList(pasaje)}
            >
              {pasaje.ref_id +
                " - " +
                pasaje.ref_libro_de +
                " // " +
                pasaje.ref_libro_es}
            </li>
          ))}
        </List>
        <Divider className="divisor" />
        <Button
          className={classes.botonguardar}
          variant="contained"
          size="small"
          onClick={handleClickAddPasaje}
        >
          Agregar
        </Button>
      </Paper>
    </Modal>
  );
};

export default withStyles(modalagregar)(ModalAgregarPasaje);
