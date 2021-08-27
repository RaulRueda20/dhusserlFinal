//React
import React, { useState, useEffect } from "react";

//Elements
import Grid from "@material-ui/core/Grid";

//Other req
import { adminService } from "../../../../js/webServices";

import BusquedaPasajes from "./BusquedaPasajes";
import ListaClaves from "./ListaClaves";
import NuevoPasaje from "./NuevoPasaje";

const Pasajes = () => {
  const [pasajes, setPasajes] = useState([]);
  const [pasajeSeleccionado, setPasajeSeleccionado] = useState("");
  const [reload, setReload] = useState(true);

  useEffect(() => {
    var service = "/referencias/lista";
    adminService(service, "GET", {}, ({ data }) => {
      const { response } = data;
      setPasajes(response);
      setPasajeSeleccionado(response[1].ref_id);
      document.getElementById("listaClaves").firstChild.click();
    });
  }, [reload]);

  return (
    <Grid container>
      <Grid item xs={3} style={{ borderRight: "1px rgb(230, 230, 230) solid" }}>
        <BusquedaPasajes pasajes={pasajes} setPasajes={setPasajes} />
        <ListaClaves
          pasajes={pasajes}
          pasajeId={pasajeSeleccionado}
          setPasajeId={setPasajeSeleccionado}
        />
      </Grid>
      <Grid item xs={9}>
        <NuevoPasaje
          setPasajeSeleccionado={setPasajeSeleccionado}
          pasajeSeleccionado={pasajeSeleccionado}
          setReload={setReload}
          reload={reload}
        />
      </Grid>
    </Grid>
  );
};

export default Pasajes;
