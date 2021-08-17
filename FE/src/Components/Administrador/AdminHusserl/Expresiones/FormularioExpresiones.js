//React
import React, { Fragment } from "react";

//Components
import CKEditor from "ckeditor4-react-advanced";
import {
  Typography,
  Divider,
  TextField,
  InputAdornment,
  Fab,
  Grid,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/styles";

const formularioExpresiones = (theme) => ({
  TextFielIzquierdo: {
    width: "100%",
  },
  TextFielDerecho: {
    width: "100%",
    margin: 0,
  },
  ventanaOpciones: {
    maxHeight: "20px",
    overflowY: "auto",
  },
  editor: {
    minHeight: "180px",
  },
  imagenesBandera: {
    width: "32px !important",
    height: "32px !important",
  },
  banderas: {
    width: "34px !important",
    borderRadius: "50%",
    height: "34px !important",
  },
  divisor: {
    margin: "35px 0px",
  },
});

const letras = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const FormularioExpresiones = (props) => {
  const { classes } = props;

  const handleChange = (event) => {
    props.setLetra(event.target.value);
  };

  const handleEChange = (event) => {
    props.setExpresion(event.target.value);
  };

  // React.useEffect(() => {
  //   console.log("expresion", props.expresion);
  // }, []);

  return (
    <Fragment>
      <Grid container alignItems="center">
        <Grid item xs={8}>
          <Typography variant="h4">{props.label}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h4">Indice</Typography>
        </Grid>
        <Grid item xs={1}>
          <Fab className={classes.imagenesBandera} onClick={props.handleLang}>
            <img className={classes.banderas} src={props.flag} />
          </Fab>
        </Grid>
      </Grid>
      <br />
      <Grid container>
        <Grid item xs={8}>
          <TextField
            id="input-with-icon-textfield-ALe"
            className={classes.TextFielIzquierdo}
            value={props.expresion}
            onChange={handleEChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EditIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="Esp"
            select
            margin="normal"
            value={props.letra ? props.letra : "A"}
            onChange={handleChange}
            className={classes.TextFielDerecho}
          >
            {letras.map((opcion) => (
              <option button key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Divider className={classes.divisor} />
      <div className={classes.editor}>
        <CKEditor
          data={props.contenido}
          onChange={(evt) => {
            var data = evt.editor.getData();
            props.setContenido(data);
          }}
          config={{
            toolbar: [
              [
                "Bold",
                "Italic",
                "Underline",
                "Subscript",
                "Superscript",
                "Link",
                "Unlink",
                "Image",
              ],
              [
                "NumberedList",
                "BulletedList",
                "list",
                "indent",
                "blocks",
                "Paragraph",
              ],
              [
                "Cut",
                "Copy",
                "Paste",
                "PasteText",
                "PasteFromWord",
                "-",
                "Undo",
                "Redo",
                "Replace",
                "-",
                "SelectAll",
                "-",
                "Scayt",
              ],
              [
                "Form",
                "Checkbox",
                "Radio",
                "TextField",
                "Textarea",
                "Select",
                "Button",
                "ImageButton",
                "HiddenField",
              ],
              [
                "NumberedList",
                "BulletedList",
                "-",
                "Outdent",
                "Indent",
                "-",
                "Blockquote",
                "CreateDiv",
                "-",
                "JustifyLeft",
                "JustifyCenter",
                "JustifyRight",
                "JustifyBlock",
                "-",
                "BidiLtr",
                "BidiRtl",
                "Language",
              ],
              [
                "Link",
                "Unlink",
                "Anchor",
                "Image",
                "Flash",
                "Table",
                "HorizontalRule",
                "Smiley",
                "SpecialChar",
                "PageBreak",
                "Iframe",
              ],
              ["Styles", "Format", "Font", "FontSize", "Source"],
            ],
          }}
        />
      </div>
    </Fragment>
  );
};

export default withStyles(formularioExpresiones)(FormularioExpresiones);
