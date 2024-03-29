//React
import React, { useEffect, useContext } from "react";

//Elements
import Grid from "@material-ui/core/Grid";

//Other req
import { adminService } from "../../../../js/webServices";
import { adminStore } from "../../../../stores/adminStore";

import BusquedaPasajes from "./BusquedaPasajes";
import ListaClaves from "./ListaClaves";
import NuevoPasaje from "./NuevoPasaje";

const Pasajes = () => {
  const global = useContext(adminStore);
  const { store, action } = global;
  const { reload, pasajeSeleccionado } = store;

  useEffect(() => {
    var service = "/referencias/lista";
    adminService(service, "GET", {}, ({ data }) => {
      const { response } = data;
      action({ type: "SET_PASAJES", payload: response });
      if (pasajeSeleccionado === "")
        action({
          type: "SET_PASAJE_SELECCIONADO",
          payload: response[0].ref_id,
        });
    });
  }, [reload]);

  return (
    <Grid container>
      <Grid item xs={3} style={{ borderRight: "1px rgb(230, 230, 230) solid" }}>
        <BusquedaPasajes />
        <ListaClaves />
      </Grid>
      <Grid item xs={9}>
        <NuevoPasaje />
      </Grid>
    </Grid>
  );
};

export default Pasajes;
