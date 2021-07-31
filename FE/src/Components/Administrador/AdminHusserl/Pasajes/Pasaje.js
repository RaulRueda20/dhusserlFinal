//React
import React from "react";

//Ekements

import CKEditor from "ckeditor4-react-advanced";
import { Grid, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

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

const InfoPasajes = (props) => {
  const { classes, pasaje, pasajeName, clave } = props;

  React.useEffect(() => {
    console.log("pasaje", pasaje);
  }, [pasaje]);

  return (
    <div className={classes.cartainfodepasajes}>
      <Grid container alignItems="center" className={classes.headerPasajes}>
        <Grid item xs={2}>
          <TextField
            id="standard-name"
            value={clave}
            onChange={(event) => props.setClave(event.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={10}>
          <TextField
            id="standard-name"
            value={pasajeName}
            onChange={(event) => props.setPasajeName(event.target.value)}
            className={classes.contenedorselectpasaje}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          className={classes.contenedoreditorpasaje}
          id={"pasaje" + pasajeName}
        >
          <CKEditor
            data={pasaje}
            onChange={(evt) => {
              var data = evt.editor.getData();
              props.setPasaje(data);
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

export default withStyles(infopasajes)(InfoPasajes);
