//React
import { useEffect, useState, useContext } from "react";

//Elements
import { withStyles } from "@material-ui/styles";

//Components
import InfoPasajes from "./InfoPasajes";

//Other req
import { adminService } from "../../../../js/webServices";
import { adminStore } from "../../../../stores/adminStore.js";
import "../../../../css/pasajes.css";

const botonpasaje = {
  Botonp: {
    width: "80%",
  },
};

const NuevoPasaje = (props) => {
  const { classes } = props;
  const global = useContext(adminStore);
  const { store, action } = global;
  const { pasaje, pasajeSeleccionado } = store;

  useEffect(() => {
    console.log("pasaje seleccionado en NuevoPasaje", props.pasajeSeleccionado);
    if (pasajeSeleccionado != "") {
      var service = "/referencias/" + pasajeSeleccionado;
      adminService(service, "GET", {}, (data) => {
        action({ type: "SET_PASAJE", payload: data.data.response[0] });
      });
    } else {
      action({ type: "RESET_PASAJE" });
    }
  }, [pasajeSeleccionado]);

  return (
    <div className={classes.contenedorpaperpasajes}>
      <InfoPasajes
        snack={props.snack}
        setSnack={props.setSnack}
        pasajeSeleccionado={pasaje}
        setPasajeSeleccionado={setPasaje}
        setPasajeSeleccionadoId={props.setPasajeSeleccionado}
        reload={props.reload}
        setReload={props.setReload}
      />
    </div>
  );
};

export default withStyles(botonpasaje)(NuevoPasaje);
