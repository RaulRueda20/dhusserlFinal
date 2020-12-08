// React
import React, { useContext, useState } from "react";

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
import { webService } from "../../../../js/webServices";
import { sesionStore } from "../../../../stores/sesionStore";
import { languageStore } from "../../../../stores/languageStore";

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
  const globalLanguage = useContext(languageStore);
  const { classes } = props;
  const [checkedA, setCheckedA] = useState(false);
  const [checkedB, setCheckedB] = useState(false);
  const [checkedC, setCheckedC] = useState(false);
  const [checked, setChecked] = useState([]);
  const [value, setValue] = useState("Texto");
  const [descargarPasajeSolo, setdescargarPasajeSolo] = useState(
    "seleccionado"
  );

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

  const clickHandleDescarga = () => {
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
        webService(serviceR, "GET", {}, global.sesion, ({ data }) => {
          const { response } = data;
          document.getElementById("toDownloadDiv").innerHTML =
            "<a href='/files/" +
            response +
            ".pdf' id='fileToDownload' download></a>";
          document.getElementById("fileToDownload").click();
        });
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
            webService(serviceR, "GET", {}, ({ data }) => {
              const { response } = data;
              document.getElementById("toDownloadDiv").innerHTML =
                "<a href='/files/" +
                response +
                ".pdf' id='fileToDownload' download></a>";
              document.getElementById("fileToDownload").click();
            });
          }
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
          const { response } = data;
          document.getElementById("toDownloadDiv").innerHTML =
            "<a href='/files/" +
            response +
            ".pdf' id='fileToDownload' download></a>";
          document.getElementById("fileToDownload").click();
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
            <Typography variant="h4">
              {descargarConsulta(globalLanguage.lang)}
            </Typography>
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
              <Typography>{seGeneraArchivo(globalLanguage.lang)}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                {menuDerechoJerarquia(globalLanguage.lang)}
              </Typography>
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
                label={conReferencias(globalLanguage.lang)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>{descargarEn(globalLanguage.lang)}</Typography>
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
                label={idiomaAl(globalLanguage.lang)}
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
                label={idiomaEs(globalLanguage.lang)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                {pasajeSeleccionadoOTodos(globalLanguage.lang)}
              </Typography>
            </Grid>
            <RadioGroup
              aria-label={pasajeSeleccionadoOTodos(globalLanguage.lang)}
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
                      label={pasajeSeleccionado(globalLanguage.lang)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={<Radio />}
                      value="todos"
                      label={todosLosPasajes(globalLanguage.lang)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </RadioGroup>
            <Grid item xs={12}>
              <Typography>{tipoDeArchivos(globalLanguage.lang)}</Typography>
            </Grid>
            <RadioGroup
              aria-label={tipoDeArchivos(globalLanguage.lang)}
              name="Tipo de archivo"
              value={value}
              onChange={handleChangeRadio}
            >
              <Grid item xs={6}>
                <FormControlLabel
                  control={<Radio />}
                  value="texto"
                  label={texto(globalLanguage.lang)}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel control={<Radio />} value="PDF" label="PDF" />
              </Grid>
            </RadioGroup>
          </Grid>
        </FormGroup>
        <Divider className="divisor" />
        <Grid container>
          <Grid item xs={12} className={classes.tituloConsultados}>
            <Typography>{descargarConsultadas(globalLanguage.lang)}</Typography>
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
              {descargarConsulta(globalLanguage.lang)}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

export default withStyles(modalDescargas)(ModalDescargas);
