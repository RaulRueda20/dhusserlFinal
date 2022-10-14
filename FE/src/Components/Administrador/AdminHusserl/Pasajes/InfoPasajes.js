//React
import React, { useState, useEffect, useContext } from "react";

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
import AlertaPasaje from "./AlertaPasaje";

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

const InfoPasajes = (props) => {
  const global = useContext(sesionStore);
  const { state, dispatch } = global;
  const { loading } = state;

  const adminGlobal = useContext(adminStore);
  const { store, action } = adminGlobal;
  const {
    pasajeSeleccionado,
    pasaje,
    original,
    traduccion,
    refIdSeleccionado,
    claveSeleccionada,
  } = store;

  const { classes } = props;
  const [vista, setVista] = useState(0);
  const [openAlP, setOpenAlP] = useState(false);
  const [opcionGuardado, setOpcionGuardado] = useState("editar");

  useEffect(() => {
    action({
      type: "SET_CLAVE",
      payload: pasaje.clave,
    });
    action({
      type: "SET_REFID",
      payload: pasaje.ref_id,
    });
    action({
      type: "SET_PASAJE_ORIGINAL",
      payload: {
        nombre: pasaje.ref_libro_de,
        contenido: pasaje.ref_def_de,
      },
    });
    action({
      type: "SET_PASAJE_TRADUCCION",
      payload: {
        nombre: pasaje.ref_libro_es,
        contenido: pasaje.ref_def_es,
      },
    });
  }, [pasaje]);

  const handleClickiNuevoPasaje = () => {
    action({ type: "RESET_PASAJE" });
    action({ type: "SET_PASAJE_SELECCIONADO", payload: "" });
    setOpcionGuardado("nuevo");
  };

  const handleClickEditarPasaje = () => {
    const params = {
      ref_id: btoa(refIdSeleccionado),
      pasaje_de: btoa(original.contenido),
      ref_de: btoa(original.nombre),
      pasaje_es: btoa(traduccion.contenido),
      ref_es: btoa(traduccion.nombre),
      clave: claveSeleccionada,
    };
    dispatch({ type: "START_LOADING" });
    if (opcionGuardado !== "editar") {
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
      let servicio = "/referencias/editarPasaje/" + pasajeSeleccionado;
      adminService(servicio, "POST", JSON.stringify(params), (data) => {
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
      adminService(
        "/referencias/eliminarPasaje/" + refIdSeleccionado,
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

  const handleChangePasajes = (e) => {
    action({ type: "SET_REFID", payload: e.target.value });
  };

  return (
    <div className={classes.cartainfodepasajes}>
      <Grid container alignItem="center" className={classes.headerContainer}>
        <Grid item xs={10} className={classes.textCont}>
          <TextField
            id="standard-name"
            value={refIdSeleccionado}
            className={classes.textfieldlista}
            onChange={(e) => handleChangePasajes(e)}
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
        <Pasaje tipo="original" />
        <Pasaje tipo="traduccion" />
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
