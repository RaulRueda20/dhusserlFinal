import React, { useContext, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

import { letraStore } from "../../../../stores/letraStore";

const letra = {
  correccionesDeLetraIndice: {
    paddingTop: "15px",
    paddingBottom: "20px",
    fontSize: "1.6rem",
  },
};

const LetraIndice = (props) => {
  const { classes } = props;
  const globalLetra = useContext(letraStore);

  return (
    <Fragment>
      <Typography className={classes.correccionesDeLetraIndice}>
        {globalLetra.letra}
      </Typography>
    </Fragment>
  );
};

export default withStyles(letra)(LetraIndice);
