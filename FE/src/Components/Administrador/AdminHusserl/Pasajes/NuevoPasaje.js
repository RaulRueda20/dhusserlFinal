//React
import React, { useEffect, useState } from "react";

//Elements
import { withStyles } from "@material-ui/styles";

//Components
import InfoPasajes from "./InfoPasajes";

//Other req
import { adminService } from "../../../../js/webServices";
import "../../../../css/pasajes.css";

const botonpasaje = {
  Botonp: {
    width: "80%",
  },
};

const emptyPasaje = {
  clave: "",
  ref_def_de: "",
  ref_def_es: "",
  ref_id: "",
  ref_libro_de: "",
  ref_libro_es: "",
};

const NuevoPasaje = (props) => {
  const { classes } = props;

  const [pasaje, setPasaje] = useState(emptyPasaje);

  useEffect(() => {
    console.log("pasaje seleccionado en NuevoPasaje", props.pasajeSeleccionado);
    if (props.pasajeSeleccionado != "") {
      var service = "/referencias/" + props.pasajeSeleccionado;
      adminService(service, "GET", {}, (data) => {
        setPasaje(data.data.response[0]);
      });
    } else {
      setPasaje(emptyPasaje);
    }
  }, [props.pasajeSeleccionado]);

  return (
    <div className={classes.contenedorpaperpasajes}>
      <InfoPasajes
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
