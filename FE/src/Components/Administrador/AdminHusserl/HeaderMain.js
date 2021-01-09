import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";

import MenuHeader from "./MenuHeader";

const HeaderMain = (props) => {
  return (
    <Grid container direction="row" justify="center" className="grids">
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <Grid item xs={1}>
            <MenuHeader match={props.match} />
          </Grid>
          <Grid item xs={10} align="center">
            <Typography variant="h2" style={{ color: "white" }}>
              PORTAL ADMINISTRATIVO
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default HeaderMain;
