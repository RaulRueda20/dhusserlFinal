//React
import React, { useState, useEffect } from "react";

//Elements
import { withStyles } from "@material-ui/styles";
import {
  Typography,
  Grid,
  IconButton,
  Snackbar,
  Tooltip,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

//Components
import ModalAgregarPasaje from "./ModalAgregarPasaje";
import Alertas from "./Alertas";
import InfoExpresiones from "./InfoExpresiones";
import CartaPasajes from "./CartaPasajes";

//Other req
import { adminService } from "../../../../js/webServices";

const estiloModalExpresiones = (theme) => ({
  Boton1: {
    width: "80%",
  },
  modalin: {
    top: "10vh",
    left: "calc(20vw - 120px)",
    width: "60vw",
    height: "70vh",
    padding: "20px 30px",
    position: "absolute",
  },
  contenedorSubtitulos: {
    padding: "15px 15px",
  },
  botonAgregar: {
    width: "50%",
    left: "50%",
    marginTop: "15px !important",
    marginRight: "30 px !importan",
  },
  contenedorPasajes: {
    padding: 10,
  },
});

const emptyObj = {
  clave: "",
  epretty: "",
  expresion_original: "",
  expresion_traduccion: "",
  id: null,
  orden: null,
  ref_original: "",
  ref_traduccion: "",
  refid: "",
  tpretty: "",
  index_de: "",
  index_es: "",
};

const NuevaExpresion = (props) => {
  const { classes } = props;
  const [expresion, setExpresion] = useState(emptyObj);
  const [pasajes, setPasajes] = useState([]);
  const [openAp, setOpenAp] = useState(false);
  const [openAl, setOpenAl] = useState(false);
  const [snack, setSnack] = useState({ open: false, text: "" });
  const [pasajeToDelete, setPasajeToDelete] = useState("");
  const [reloadExpresion, setReloadExpresion] = useState(true);

  useEffect(() => {
    if (props.expresionSeleccionada != "") {
      var service =
        "/referencias/obtieneReferenciasByTerm/" + props.expresionSeleccionada;
      adminService(service, "GET", {}, ({ data }) => {
        const { response } = data;
        if (response.length > 0) {
          setExpresion(response[0]);
          if (response[0].refid) {
            setPasajes(response);
          } else {
            setPasajes([]);
          }
        } else {
          setPasajes([]);
        }
      });
    } else {
      setExpresion(emptyObj);
      setPasajes([emptyObj]);
    }
  }, [props.expresionSeleccionada, props.reload, reloadExpresion]);

  const handleClickOpenAp = () => {
    setOpenAp(true);
  };

  const handleCloseAp = () => {
    setOpenAp(false);
  };

  const handleClickOpenAl = () => {
    setOpenAl(true);
  };

  const handleCloseAl = () => {
    setOpenAl(false);
  };

  const deletePasaje = (refid) => {
    var service2 = "/referencias/quitarPasaje/" + refid + "/" + expresion.id;
    adminService(service2, "DELETE", {}, (data) => {
      setSnack({ open: true, text: "Pasaje desasociado con éxito." });
      setOpenAl(false);
      setReloadExpresion(!reloadExpresion);
    });
  };

  return (
    <>
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
      <div className={classes.contenedorPaper}>
        <InfoExpresiones
          expresionSeleccionada={expresion}
          expresionId={props.expresionSeleccionada}
          setExpresionId={props.setExpresionSeleccionada}
          reload={props.reload}
          setReload={props.setReload}
          reloadExpresion={reloadExpresion}
          setReloadExpresion={setReloadExpresion}
        />
      </div>
      <Grid container>
        <Grid item xs={10}>
          <Typography variant="h3">Pasajes</Typography>
        </Grid>
        <Grid item xs={2}>
          <Tooltip title="Agregar Pasaje">
            <IconButton onClick={() => handleClickOpenAp()}>
              <AddIcon />
            </IconButton>
          </Tooltip>
          <ModalAgregarPasaje
            expresion={expresion}
            openAp={openAp}
            handleCloseAp={handleCloseAp}
            reload={reloadExpresion}
            setReload={setReloadExpresion}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.contenedorPasajes} spacing={1}>
        {pasajes.map((pasaje) => (
          <Grid key={pasaje.refid} item xs={6} sm={4} md={3} lg={2}>
            <CartaPasajes
              setPasajeToDelete={setPasajeToDelete}
              pasaje={pasaje}
              deletePasaje={handleClickOpenAl}
              openAlert={handleClickOpenAl}
              reload={reloadExpresion}
              setReload={setReloadExpresion}
            />
          </Grid>
        ))}
      </Grid>
      <Alertas
        text="¿Desea deshacer la relación del pasaje con la expresión?"
        openAl={openAl}
        handleCloseAl={handleCloseAl}
        accept={() => deletePasaje(pasajeToDelete)}
      />
    </>
  );
};

export default withStyles(estiloModalExpresiones)(NuevaExpresion);
