//React
import React, { useState, useEffect } from "react";

//Elements
import { IconButton, Grid, Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Delete from "@material-ui/icons/Delete";

// Components
import ModalJerarquia from "./ModalJerarquia";
import ModalEditar from "./ModalEditar";
import ModalVerTambien from "./ModalVerTambien";
import Alertas from "./Alertas";
import ModalAdmin from "./ModalAdmin";

//Other req
import "../../../../css/expresiones.css";
import { adminService } from "../../../../js/webServices";

const infoExpresiones = {
  titulo: {
    paddingTop: "10px",
  },
  contenedordeinfo: {
    borderRight: "lightgrey 1px dashed",
  },
  subtitulo: {
    paddingTop: "20px",
  },
  infoPanel: {
    padding: "25px 0px",
  },
  w100: {
    width: "100% !important",
  },
  scrolledHeight: {
    maxHeight: "100px",
    overflow: "scroll",
  },
};

const InfoExpresiones = (props) => {
  const { classes } = props;
  const [openAl, setOpenAl] = useState(false);
  const [allExpresiones, setAllExpresiones] = useState([]);

  const handleClickOpenAl = () => {
    setOpenAl(true);
  };

  const handleCloseAl = () => {
    setOpenAl(false);
  };

  const deleteExpresion = () => {
    var service = "/expresiones/deleteExpresion/" + props.expresion.id;
    adminService(service, "DELETE", {}, (data) => {
      props.setExpresion("");
      props.setReload(!props.reload);
      setOpenAl(false);
    });
  };

  useEffect(() => {
    var service = "/expresiones/getAllList";
    adminService(service, "GET", {}, ({ data }) => {
      const { response } = data;
      setAllExpresiones(response);
    });
  }, [props.reload]);

  return (
    <Grid container className={classes.titulo}>
      <Grid item xs>
        <ModalJerarquia
          padres={props.padres}
          hijos={props.hijos}
          expresiones={allExpresiones}
          expresionSeleccionada={props.expresion}
          reload={props.reloadExpresion}
          setReload={props.setReloadExpresion}
        />
      </Grid>
      <Grid item xs>
        <ModalEditar
          expresion={props.expresion}
          reload={props.reload}
          setReload={props.setReload}
        />
      </Grid>
      <Grid item xs>
        <ModalVerTambien
          expresion={props.expresion}
          expresiones={allExpresiones}
        />
      </Grid>
      <Grid item xs>
        <Tooltip title="Eliminar expresión">
          <IconButton onClick={() => handleClickOpenAl()}>
            <Delete />
          </IconButton>
        </Tooltip>
        <Alertas
          text="¿Quiere eliminar la expresión seleccionada?"
          openAl={openAl}
          handleCloseAl={handleCloseAl}
          accept={deleteExpresion}
        />
      </Grid>
      <Grid item xs>
        <ModalAdmin reload={props.reload} setReload={props.setReload} />
      </Grid>
    </Grid>
  );
};

export default withStyles(infoExpresiones)(InfoExpresiones);
