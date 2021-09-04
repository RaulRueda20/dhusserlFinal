//React
import { useState, useEffect, useContext } from "react";

//Elements
import classNames from "classnames";
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Divider,
  Tooltip,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import SwipeableViews from "react-swipeable-views";
import Delete from "@material-ui/icons/Delete";
import Add from "@material-ui/icons/NoteAdd";
import LinearProgress from "@material-ui/core/LinearProgress";
import AlertaPasaje from "./AlertaPasaje.js";

//Other req
import { adminService } from "../../../../js/webServices";
import { sesionStore } from "../../../../stores/sesionStore";
import { adminStore } from "../../../../stores/adminStore";

//Components
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
  const global = useContext(sesionStore);
  const { state, dispatch } = global;
  const { loading } = state;

  const adminGlobal = useContext(adminStore);
  const { store, action } = adminGlobal;
  const { pasajeSeleccionado, pasaje, pasajes } = store;

  const { classes } = props;
  const [vista, setVista] = useState(0);
  const [expresionClave, setExpresionClave] = useState("");
  const [expresionId, setExpresionId] = useState("");
  const [openAlP, setOpenAlP] = useState(false);
  const [expresionPasaje, setExpresionPasaje] = useState("");
  const [expresionPasajeName, setExpresionPasajeName] = useState("");
  const [traduccionPasaje, setTraduccionPasaje] = useState("");
  const [traduccionPasajeName, setTraduccionPasajeName] = useState("");
  const [opcionGuardado, setOpcionGuardado] = useState("editar");

  useEffect(() => {
    setExpresionClave(pasajeSeleccionado.clave);
    setExpresionId(pasajeSeleccionado.ref_id);
    setExpresionPasaje(pasajeSeleccionado.ref_def_de);
    setExpresionPasajeName(pasajeSeleccionado.ref_libro_de);
    setTraduccionPasaje(pasajeSeleccionado.ref_def_es);
    setTraduccionPasajeName(pasajeSeleccionado.ref_libro_es);
  }, [pasajeSeleccionado]);

  const handleChangeC = (event) => {
    setClave(event.target.value);
  };

  const handleClickiNuevoPasaje = () => {
    action({ type: "RESET_PASAJE" });
    action({ type: "SET_PASAJE_SELECCIONADO", payload: "" });
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
    dispatch({ type: "START_LOADING" });
    if (opcionGuardado != "editar") {
      // console.log("expresionId", expresionId);
      let servicio = "/referencias/new/nuevoPasaje";
      adminService(servicio, "POST", JSON.stringify(params), (data) => {
        dispatch({
          type: "SET_SNACKBAR",
          payload: {
            open: true,
            variant: "success",
            message: "Pasaje creado con éxito",
          },
        });
        action({ type: "RELOAD" });
        dispatch({ type: "STOP_LOADING" });
      });
    } else {
      let servicio = "/referencias/editarPasaje/" + expresionId;
      //params.clave = expresionId;
      adminService(servicio, "POST", JSON.stringify(params), (data) => {
        console.log("data al editar pasaje", data);
        dispatch({
          type: "SET_SNACKBAR",
          payload: {
            open: true,
            variant: "success",
            message: "Pasaje editado con éxito",
          },
        });
        action({ type: "RELOAD" });
        dispatch({ type: "STOP_LOADING" });
      });
    }
  };

  const handleClickEliminarPasaje = () => {
    setOpenAlP(false);
    if (pasajeSeleccionado > 0) {
      dispatch({
        type: "SET_SNACKBAR",
        payload: {
          open: true,
          variant: "warning",
          message:
            "Este pasaje está relacionado con expresiones del diccionario. Por favor, elimine dichas relaciones antes de continuar.",
        },
      });
      return true;
    } else {
      // console.log("expresionId", expresionId);
      adminService(
        "/referencias/eliminarPasaje/" + expresionId,
        "DELETE",
        {},
        (datad) => {
          dispatch({
            type: "SET_SNACKBAR",
            payload: {
              open: true,
              variant: "success",
              message: "Pasaje eliminado con éxito.",
            },
          });
          handleClickiNuevoPasaje();
          action({ type: "RELOAD" });
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
