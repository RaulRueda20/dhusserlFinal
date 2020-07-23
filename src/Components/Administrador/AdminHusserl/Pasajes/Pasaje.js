//React
import React from 'react';

//Ekements

import CKEditor from 'ckeditor4-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import CKEditor from '../../../../ckeditor5-react/dist/ckeditor.js';
// import ClassicEditor from '../../../../ckeditor5-react/dist/ckeditor.js';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';

const infopasajes={
  cartainfodepasajes:{
    maxWidth:"100%",
  },
  textCont : {
    padding: "0px 20px"
  },
  headerContainer : {
    padding: "20px 0px"
  },
  textfieldlista:{
    width: "100%"
  },
  botoneliminarpasaje:{
    paddingTop:"10px"
  },
  botonEs:{
    left:"5px"
  },
  contenedorselectpasaje:{
    width: "100%"
  },
  textopasaje:{
    bottom:"6px",
    paddingLeft:"3px",
  },
  contenedoreditorpasaje:{
    width: "75vw",
    height: "36vh",
    padding: "25px"
  },
  headerPasajes:{
    marginTop: "25px",
    padding: "0px 25px"
  }
}

function InfoPasajes(props){
  const {classes}=props;

  return(
    <div className={classes.cartainfodepasajes}>
        <Grid container alignItems="center" className={classes.headerPasajes}>
            <Grid item xs={2}>
              <TextField id="standard-name" value={props.clave}  onChange={event => props.setClave(event.target.value)}></TextField>
            </Grid>
            <Grid item xs={10}>
                <TextField
                id="standard-name"
                value={props.pasajeName}
                onChange={event => props.setPasajeName(event.target.value)}
                className={classes.contenedorselectpasaje}
                />
            </Grid>
        </Grid>
        <Grid container>
            <Grid item className={classes.contenedoreditorpasaje} id={"pasaje" + props.pasajeName}>
                <CKEditor
                  data={props.pasaje}
                  onChange={ ( event, editor ) => {
                      const data = editor.getData();
                      props.setPasaje(data)
                  } }
                />
            </Grid>
        </Grid>  
    </div>
  )
}

export default withStyles(infopasajes)(InfoPasajes);
