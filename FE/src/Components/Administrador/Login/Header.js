import React, { Fragment } from "react";
import classNames from "classnames";
import { Typography, Grid, Divider } from "@material-ui/core/";
import { withStyles } from "@material-ui/styles";

const stylesHed = {
  subtitulo1: {
    marginTop: "10px",
  },
  grids: {
    margin: "5vh 0",
  },
};

const Header = (props) => {
  const { classes } = props;
  return (
    <Fragment>
      <Grid
        className={classNames("grids", classes.grids)}
        container
        justify="center"
      >
        <Grid item xs={12} align="center">
          <Typography variant="h1" align="center">
            Diccionario Husserl
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={classes.subtitulo1}
            variant="h2"
            align="center"
          >
            Portal Administrativo
          </Typography>
        </Grid>
      </Grid>
      <br />
      <Divider className="divisor" />
    </Fragment>
  );
};

export default withStyles(stylesHed)(Header);
