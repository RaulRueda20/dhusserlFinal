//React
import React, { useContext, useEffect } from "react";

//Elements
import CKEditor from "ckeditor4-react-advanced";
import { Grid, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { adminStore } from "../../../../stores/adminStore";

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
    width: "100%",
  },
  textopasaje: {
    bottom: "6px",
    paddingLeft: "3px",
  },
  contenedoreditorpasaje: {
    width: "75vw",
    height: "36vh",
    padding: "25px",
  },
  headerPasajes: {
    marginTop: "25px",
    padding: "0px 25px",
  },
};

const Pasaje = (props) => {
  const global = useContext(adminStore);
  const { action, store } = global;
  const { claveSeleccionada, original, traduccion } = store;
  const { classes, tipo } = props;

  const updateName = (event) => {
    if (tipo === "original") {
      action({
        type: "SET_PASAJE_ORIGINAL",
        payload: {
          ...original,
          nombre: event.target.value,
        },
      });
    } else {
      action({
        type: "SET_PASAJE_TRADUCCION",
        payload: {
          ...traduccion,
          nombre: event.target.value,
        },
      });
    }
  };

  const updateContenido = (data) => {
    if (tipo === "original") {
      action({
        type: "SET_PASAJE_ORIGINAL",
        payload: {
          ...original,
          contenido: data,
        },
      });
    } else {
      action({
        type: "SET_PASAJE_TRADUCCION",
        payload: {
          ...traduccion,
          contenido: data,
        },
      });
    }
  };

  return (
    <div className={classes.cartainfodepasajes}>
      <Grid container alignItems="center" className={classes.headerPasajes}>
        <Grid item xs={2}>
          <TextField
            id="standard-name"
            value={claveSeleccionada}
            onChange={(event) =>
              action({ type: "SET_CLAVE", payload: event.target.value })
            }
          ></TextField>
        </Grid>
        <Grid item xs={10}>
          <TextField
            id="standard-name"
            value={tipo === "original" ? original.nombre : traduccion.nombre}
            onChange={updateName}
            className={classes.contenedorselectpasaje}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          className={"contenedorPasaje"}
          id={
            "pasaje" +
            (tipo === "original" ? original.nombre : traduccion.nombre)
          }
        >
          <CKEditor
            data={
              tipo !== "traduccion" ? original.contenido : traduccion.contenido
            }
            onChange={(evt) => {
              const data = evt.editor.getData();
              updateContenido(data);
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
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(infopasajes)(Pasaje);
