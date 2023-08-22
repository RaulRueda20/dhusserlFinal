// React
import React, { useContext, useState, Fragment, useEffect } from "react";

// Components
import {
  Modal,
  Typography,
  Paper,
  Grid,
  IconButton,
  Divider,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import ClearIcon from "@material-ui/icons/Clear";

// Elements
import ListaDeConsultados from "./ListaDeConsultados";

// Other req
import { webService, webServiceAsync } from "../../../../js/webServices";
import { sesionStore } from "../../../../stores/sesionStore";
import { languageStore } from "../../../../stores/languageStore";

import { jsPDF } from "jspdf";

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF("l", "mm", [297, 210]);

//Language
import {
  descargarConsulta,
  seGeneraArchivo,
  menuDerechoJerarquia,
  conReferencias,
  descargarEn,
  idiomaAl,
  idiomaEs,
  pasajeSeleccionadoOTodos,
  pasajeSeleccionado,
  todosLosPasajes,
  tipoDeArchivos,
  texto,
  descargarConsultadas,
} from "../../../../js/Language";

const modalDescargas = {
  modalinDescarga: {
    width: "50%",
    maxHeight: "75vh",
    top: "15.5vh",
    position: "absolute",
    padding: "30px 30px",
    overflowY: "auto",
    left: "calc(25% - 30px)",
    height: "50vh",
  },
  gridDeBotones: {
    textAlign: "right",
  },
  tituloConsultados: {
    marginTop: "10px",
    marginBottom: "10px",
  },
};

const ModalDescargas = (props) => {
  const global = useContext(sesionStore);
  const { state } = global;
  const { lang } = state;
  const globalLanguage = useContext(languageStore);
  const { classes } = props;
  const [checkedA, setCheckedA] = useState(false);
  const [checkedB, setCheckedB] = useState(false);
  const [checkedC, setCheckedC] = useState(false);
  const [checked, setChecked] = useState([]);
  const [value, setValue] = useState("Texto");
  const [descargarPasajeSolo, setdescargarPasajeSolo] =
    useState("seleccionado");
  const [flagHtml, setFlagHtml] = useState(false);

  const handleChangeA = (name) => (event) => {
    setCheckedA({ ...checkedA, [name]: event.target.checked });
  };

  const handleChangeB = (name) => (event) => {
    if (checkedC == true) {
      setCheckedB({ ...checkedB, [name]: false });
    }
    setCheckedB({ ...checkedB, [name]: event.target.checked });
  };

  const handleChangeC = (name) => (event) => {
    setCheckedC({ ...checkedC, [name]: event.target.checked });
  };

  const handleChangeRadio = (event) => {
    setValue(event.target.value);
  };

  const pasajeSeleccionadoRadio = (event) => {
    setdescargarPasajeSolo(event.target.value);
  };

  const closeDescargas = () => {
    props.setOpenDescargas(false);
  };

  const clickHandleDescarga = async () => {
    let opciones = [0, 0, 0, 0];
    checkedB ? opciones.push(1) : opciones.push(0);
    checkedC ? opciones.push(1) : opciones.push(0);
    checkedA ? opciones.push(1) : opciones.push(0);
    if (descargarPasajeSolo == "todos") {
      if (value == "texto") {
        let serviceR =
          "/reporte/reporteGeneralTxt/" +
          props.idExpresion +
          "?expresion_aleman=1&expresion_espaniol=1&referencia_aleman=1\
                &referencia_espaniol=1&pasaje_aleman=" +
          opciones[4] +
          "&pasaje_espaniol=" +
          opciones[5] +
          "&hierarchy=" +
          opciones[6] +
          "&lang=" +
          globalLanguage.lang +
          "&refid=" +
          props.match.params.id;
        webService(serviceR, "GET", {}, global.sesion, ({ data }) => {
          const { response } = data;
          document.getElementById("toDownloadDiv").innerHTML =
            "<a href='/files/" +
            response +
            ".txt' id='fileToDownload' download></a>";
          document.getElementById("fileToDownload").click();
        });
        if (checked.length > 0) {
          for (let i in checked) {
            let refid = checked[i].split("/")[0];
            let id = checked[i].split("/")[1];
            let serviceR =
              "/reporte/reporteText/" +
              id +
              "?expresion_aleman=1&expresion_espaniol=1&referencia_aleman=1\
                        &referencia_espaniol=1&pasaje_aleman=" +
              opciones[4] +
              "&pasaje_espaniol=" +
              opciones[5] +
              "&hierarchy=" +
              opciones[6] +
              "&lang=" +
              globalLanguage.lang +
              "&refid=" +
              refid;
            webService(serviceR, "GET", {}, global.sesion, ({ data }) => {
              const { response } = data;
              document.getElementById("toDownloadDiv").innerHTML =
                "<a href='/files/" +
                response +
                ".txt' id='fileToDownload' download></a>";
              document.getElementById("fileToDownload").click();
            });
          }
        } else {
          setSnackbar({
            open: true,
            variant: "error",
            message: correoInvalido(globalLanguage.lang),
          });
        }
      } else {
        let completeHtml = "";
        let serviceR =
          "/reporte/reporteGeneralpdf/" +
          props.idExpresion +
          "?expresion_aleman=1&expresion_espaniol=1&referencia_aleman=1\
                &referencia_espaniol=1&pasaje_aleman=" +
          opciones[4] +
          "&pasaje_espaniol=" +
          opciones[5] +
          "&hierarchy=" +
          opciones[6] +
          "&lang=" +
          globalLanguage.lang +
          "&refid=" +
          props.match.params.id;
        const response = await webServiceAsync(
          serviceR,
          "GET",
          {},
          global.sesion
        );
        completeHtml += response.data;
        // webService(serviceR, "GET", {}, global.sesion, ({ data }) => {
        //   try {
        //     const newWindow = window.open("Descarga PDF");
        //     newWindow.document.write(data);
        //     setTimeout(() => {
        //       newWindow.stop();
        //       newWindow.print();

        //       setTimeout(() => newWindow.close(), 500);
        //     }, 500);
        //   } catch (error) {
        //     console.log(error);
        //   }
        // });
        if (checked.length > 0) {
          for (let i in checked) {
            let refid = checked[i].split("/")[0];
            let id = checked[i].split("/")[1];
            let serviceR =
              "/reporte/reportepdf/" +
              id +
              "?expresion_aleman=1&expresion_espaniol=1&referencia_aleman=1\
                        &referencia_espaniol=1&pasaje_aleman=" +
              opciones[4] +
              "&pasaje_espaniol=" +
              opciones[5] +
              "&hierarchy=" +
              opciones[6] +
              "&lang=" +
              globalLanguage.lang +
              "&refid=" +
              refid;
            const { data } = await webServiceAsync(serviceR, "GET", {}, {});

            completeHtml += data;
          }
        }
        try {
          const newWindow = window.open("Descarga PDF");
          newWindow.document.write(completeHtml);
          setTimeout(() => {
            newWindow.stop();
            newWindow.print();

            setTimeout(() => newWindow.close(), 500);
          }, 500);
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      if (value != "texto") {
        let serviceR =
          "/reporte/reportepdf/" +
          props.idExpresion +
          "?expresion_aleman=1&expresion_espaniol=1&referencia_aleman=1\
                &referencia_espaniol=1&pasaje_aleman=" +
          opciones[4] +
          "&pasaje_espaniol=" +
          opciones[5] +
          "&hierarchy=" +
          opciones[6] +
          "&lang=" +
          globalLanguage.lang +
          "&refid=" +
          props.match.params.id;
        webService(serviceR, "GET", {}, global.sesion, ({ data }) => {
          try {
            const newWindow = window.open("Descarga PDF");
            newWindow.document.write(data);
            setTimeout(() => {
              newWindow.stop();
              newWindow.print();

              setTimeout(() => newWindow.close(), 500);
            }, 500);
          } catch (error) {
            console.log(error);
          }
        });
      } else {
        let serviceR =
          "/reporte/reporteText/" +
          props.idExpresion +
          "?expresion_aleman=1&expresion_espaniol=1&referencia_aleman=1\
                &referencia_espaniol=1&pasaje_aleman=" +
          opciones[4] +
          "&pasaje_espaniol=" +
          opciones[5] +
          "&hierarchy=" +
          opciones[6] +
          "&lang=" +
          globalLanguage.lang +
          "&refid=" +
          props.match.params.id;
        webService(serviceR, "GET", {}, global.sesion, ({ data }) => {
          const { response } = data;
          document.getElementById("toDownloadDiv").innerHTML =
            "<a href='/files/" +
            response +
            ".txt' id='fileToDownload' download></a>";
          document.getElementById("fileToDownload").click();
        });
      }
    }
  };

  return (
    <Fragment>
      {!flagHtml ? (
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={props.openDescargas}
          onClose={closeDescargas}
        >
          <Paper className={classes.modalinDescarga}>
            <div id="toDownloadDiv" hidden />
            <Grid
              container
              justify="center"
              alignItems="center"
              alignContent="center"
            >
              <Grid item xs={11}>
                <Typography variant="h4">{descargarConsulta(lang)}</Typography>
              </Grid>
              <Grid item xs={1}>
                <IconButton aria-haspopup="true" onClick={closeDescargas}>
                  <ClearIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Divider className="divisor" />
            <FormGroup>
              <Grid container>
                <Grid item xs={12}>
                  <Typography>{seGeneraArchivo(lang)}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>{menuDerechoJerarquia(lang)}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedA}
                        onChange={() => setCheckedA(!checkedA)}
                        value="checkedA"
                      />
                    }
                    label={conReferencias(lang)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>{descargarEn(lang)}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedB}
                        onChange={() => setCheckedB(!checkedB)}
                        value="checkedB"
                      />
                    }
                    label={idiomaAl(lang)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedC}
                        onChange={() => setCheckedC(!checkedC)}
                        value="checkedC"
                      />
                    }
                    label={idiomaEs(lang)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>{pasajeSeleccionadoOTodos(lang)}</Typography>
                </Grid>
                <RadioGroup
                  aria-label={pasajeSeleccionadoOTodos(lang)}
                  name="Pasaje seleccionado"
                  value={descargarPasajeSolo}
                  onChange={pasajeSeleccionadoRadio}
                >
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={6}>
                        <FormControlLabel
                          control={<Radio />}
                          value="seleccionado"
                          label={pasajeSeleccionado(lang)}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormControlLabel
                          control={<Radio />}
                          value="todos"
                          label={todosLosPasajes(lang)}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </RadioGroup>
                <Grid item xs={12}>
                  <Typography>{tipoDeArchivos(lang)}</Typography>
                </Grid>
                <RadioGroup
                  aria-label={tipoDeArchivos(lang)}
                  name="Tipo de archivo"
                  value={value}
                  onChange={handleChangeRadio}
                >
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={<Radio />}
                      value="texto"
                      label={texto(lang)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={<Radio />}
                      value="PDF"
                      label="PDF"
                    />
                  </Grid>
                </RadioGroup>
              </Grid>
            </FormGroup>
            <Divider className="divisor" />
            <Grid container>
              <Grid item xs={12} className={classes.tituloConsultados}>
                <Typography>{descargarConsultadas(lang)}</Typography>
              </Grid>
              <Grid item xs={12}>
                <ListaDeConsultados checked={checked} setChecked={setChecked} />
              </Grid>
            </Grid>
            <Divider className="divisor" />
            <Grid container>
              <Grid item xs={12} className={classes.gridDeBotones}>
                <Button
                  variant="contained"
                  type="submit"
                  onClick={clickHandleDescarga}
                >
                  {descargarConsulta(lang)}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Modal>
      ) : (
        <div id="toDownloadDiv"></div>
      )}
    </Fragment>
    // {!flagHtml  ?  }
  );
};

export default withStyles(modalDescargas)(ModalDescargas);
