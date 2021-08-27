//React
import React, { useState, useEffect } from "react";

//Elements
import classNames from "classnames";
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Divider,
  Tooltip,
  Snackbar,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import SwipeableViews from "react-swipeable-views";
import Delete from "@material-ui/icons/Delete";
import Add from "@material-ui/icons/NoteAdd";
import LinearProgress from "@material-ui/core/LinearProgress";

//Other req
import { adminService } from "../../../../js/webServices";

//Components
import AlertaPasaje from "./AlertaPasaje";
import Pasaje from "./Pasaje";

const infopasajes = {
  cartainfodepasajes: {
    maxWidth: "100%",
  },
  textCont: {
    padding: "0px 20px",
  },
  headerContainer: {
    padding: "20px 0px",
  },
  textfieldlista: {
    width: "100%",
  },
  botoneliminarpasaje: {
    paddingTop: "10px",
  },
  botonEs: {
    left: "5px",
  },
  contenedorselectpasaje: {
    paddingTop: "10px",
    paddingLeft: "280px",
  },
  textopasaje: {
    bottom: "6px",
    paddingLeft: "3px",
  },
  contenedoreditorpasaje: {
    width: "100%",
    padding: "25px",
  },
};

const emptyPasajeNuevo = {
  clave: "",
  ref_def_de: "",
  ref_def_es: "",
  ref_id: "",
  ref_libro_de: "",
  ref_libro_es: "",
};

const InfoPasajes = (props) => {
  const { classes } = props;
  const [vista, setVista] = useState(0);
  const [expresionClave, setExpresionClave] = useState("");
  const [expresionId, setExpresionId] = useState("");
  const [openAlP, setOpenAlP] = useState(false);
  const [snack, setSnack] = useState({ open: false, text: "" });
  const [expresionPasaje, setExpresionPasaje] = useState("");
  const [expresionPasajeName, setExpresionPasajeName] = useState("");
  const [traduccionPasaje, setTraduccionPasaje] = useState("");
  const [traduccionPasajeName, setTraduccionPasajeName] = useState("");
  const [opcionGuardado, setOpcionGuardado] = useState("editar");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // console.log(
    //   "referencias aleman, español de props y traducciones en las vistas",
    //   props.pasajeSeleccionado.ref_def_de,
    //   props.pasajeSeleccionado.ref_def_de,
    //   traduccionPasaje,
    //   traduccionPasajeName,
    //   expresionPasaje,
    //   expresionPasajeName
    // );
    setExpresionClave(props.pasajeSeleccionado.clave);
    setExpresionId(props.pasajeSeleccionado.ref_id);
    setExpresionPasaje(props.pasajeSeleccionado.ref_def_de);
    setExpresionPasajeName(props.pasajeSeleccionado.ref_libro_de);
    setTraduccionPasaje(props.pasajeSeleccionado.ref_def_es);
    setTraduccionPasajeName(props.pasajeSeleccionado.ref_libro_es);
  }, [props.pasajeSeleccionado]);

  const handleChangeC = (event) => {
    setClave(event.target.value);
  };

  const handleClickiNuevoPasaje = () => {
    props.setPasajeSeleccionado(emptyPasajeNuevo);
    props.setPasajeSeleccionadoId("");
    setOpcionGuardado("nuevo");
  };

  const handleClickEditarPasaje = () => {
    const params = {
      ref_id: btoa(expresionId),
      pasaje_de: btoa(expresionPasaje),
      ref_de: btoa(expresionPasajeName),
      pasaje_es: btoa(traduccionPasaje),
      ref_es: btoa(traduccionPasajeName),
      clave: expresionClave,
    };
    if (opcionGuardado != "editar") {
      // console.log("expresionId", expresionId);
      let servicio = "/referencias/new/nuevoPasaje";
      setLoading(true);
      adminService(servicio, "POST", JSON.stringify(params), (data) => {
        console.log("params al crear pasajes", params);
        console.log("data al crear pasaje", data);
        setSnack({ open: true, text: "Pasaje creado con éxito" });
        props.setReload(!props.reload);
        setLoading(false);
      });
    } else {
      console.log("params al editar pasajes", params);
      let servicio = "/referencias/editarPasaje/" + expresionId;
      setLoading(true);
      //params.clave = expresionId;
      adminService(servicio, "POST", JSON.stringify(params), (data) => {
        console.log("data al editar pasaje", data);
        setSnack({ open: true, text: "Pasaje editado con éxito" });
        props.setReload(!props.reload);
        setLoading(false);
      });
    }
  };

  const handleClickEliminarPasaje = () => {
    setOpenAlP(false);
    if (props.pasajeSeleccionado > 0) {
      setSnack({
        open: true,
        text: "Este pasaje está relacionado con expresiones del diccionario. Por favor, elimine dichas relaciones antes de continuar.",
      });
      return true;
    } else {
      console.log("expresionId", expresionId);
      adminService(
        "/referencias/eliminarPasaje/" + expresionId,
        "DELETE",
        {},
        (datad) => {
          setSnack({ open: true, text: "Pasaje eliminado con éxito." });
          handleClickiNuevoPasaje();
          props.setReload(!props.reload);
        }
      );
    }
  };

  const handleClickOpenAlP = () => {
    setOpenAlP(true);
  };

  const handleCloseAlP = () => {
    setOpenAlP(false);
  };

  const handleChangePasajes = (event) => {
    setExpresionId(event.target.value);
  };

  return (
    <div className={classes.cartainfodepasajes}>
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
      <Grid container alignItems="center" className={classes.headerContainer}>
        <Grid item xs={10} className={classes.textCont}>
          <TextField
            id="standard-name"
            value={expresionId}
            className={classes.textfieldlista}
            onChange={handleChangePasajes}
          />
        </Grid>
        <Grid item xs={1} className={classes.botoneliminarpasaje}>
          <Tooltip title="Agregar pasaje">
            <IconButton onClick={handleClickiNuevoPasaje}>
              <Add />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={1} className={classes.botoneliminarpasaje}>
          <Tooltip title="Eliminar pasaje">
            <IconButton onClick={handleClickOpenAlP}>
              <Delete />
            </IconButton>
          </Tooltip>
          <AlertaPasaje
            text="¿Quiere eliminar el pasaje seleccionado?"
            openAlP={openAlP}
            handleCloseAlP={handleCloseAlP}
            accept={handleClickEliminarPasaje}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Button
            className={classNames({ selectedButton: vista == 0 })}
            onClick={() => setVista(0)}
            size="small"
          >
            Aleman
          </Button>
          <Button
            className={classNames(
              { selectedButton: vista == 1 },
              classes.botonEs
            )}
            size="small"
            onClick={() => setVista(1)}
          >
            Español
          </Button>
        </Grid>
      </Grid>
      <Divider />
      <SwipeableViews
        axis={vista == 0 ? "x-reverse" : "x"}
        index={vista}
        onChangeIndex={setVista}
      >
        <Pasaje
          clave={expresionClave}
          setClave={setExpresionClave}
          eId={expresionId}
          setEId={setExpresionId}
          pasaje={expresionPasaje}
          setPasaje={setExpresionPasaje}
          pasajeName={expresionPasajeName}
          setPasajeName={setExpresionPasajeName}
        />
        <Pasaje
          clave={expresionClave}
          setClave={setExpresionClave}
          eId={expresionId}
          setEId={setExpresionId}
          pasaje={traduccionPasaje}
          setPasaje={setTraduccionPasaje}
          pasajeName={traduccionPasajeName}
          setPasajeName={setTraduccionPasajeName}
        />
      </SwipeableViews>
      <Divider className="divisor" />
      <Grid container justify="flex-end">
        <Grid item>
          <Button
            variant="contained"
            size="small"
            onClick={handleClickEditarPasaje}
          >
            Guardar
          </Button>
        </Grid>
      </Grid>
      <LinearProgress
        className={classNames([{ hidden: !loading }, "loadingBar"])}
      />
    </div>
  );
};

export default withStyles(infopasajes)(InfoPasajes);
