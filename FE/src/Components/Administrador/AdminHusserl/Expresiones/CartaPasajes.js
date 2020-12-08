//React
import React from "react";

//Elements
import {
  Card,
  IconButton,
  ClearIcon,
  Grid,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Description from "@material-ui/icons/Description";

const cartaPasajes = {
  cartadepasajes: {
    width: "100%",
    paddingTop: "10px",
  },
  cardheader: {
    paddingLeft: "30px",
  },
  cardContent: {
    padding: "15px",
  },
  imagendocs: {
    width: "20px",
    height: "20px",
  },
  botonclear: {
    paddingRight: "30px",
  },
  closeButton: {
    marginRight: "5px",
  },
};

const CartaPasajes = (props) => {
  const { classes } = props;

  const deleteP = () => {
    props.setPasajeToDelete(props.pasaje.refid);
    props.deletePasaje(props.pasaje.refid);
  };

  return (
    <Card className={classes.cartadepasajes}>
      <Grid container>
        <Grid item xs={9} className={classes.cardheader}>
          <Description />
        </Grid>
        <Grid item xs={3}>
          <IconButton
            size="small"
            className={classes.closeButton}
            aria-haspopup="true"
            onClick={deleteP}
            // onClick={()=>handleClose()}
          >
            <ClearIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
      <div className={classes.cardContent}>
        <Typography>{props.pasaje.ref_original}</Typography>
      </div>
    </Card>
  );
};

export default withStyles(cartaPasajes)(CartaPasajes);
