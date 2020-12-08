//React
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//Elements
import {
  IconButton,
  Menu,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from "@material-ui/core";
import {
  Book,
  Description,
  Help,
  Info,
  Exit,
  People,
  MenuIcon,
} from "@material-ui/icons";

const MenuHeader = () => {
  state = { anchorEl: null };

  const setMenu = (event) => {
    setState({ anchorEl: event.currentTarget });
  };

  const closeMenu = () => {
    tsetState({ anchorEl: null });
  };

  const exitMain = () => {
    localStorage.removeItem("sesion");
    document.getElementById("toLogin").click();
  };

  const { anchorEl } = state;
  const { match } = props;
  const { url } = match;

  return (
    <Fragment>
      <IconButton
        aria-haspopup="true"
        aria-owns={anchorEl ? "menuheader" : undefined}
        onClick={setMenu}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Menu
        id="menuheader"
        anchorEl={anchorEl}
        keepMounted
        onClose={closeMenu}
        open={Boolean(anchorEl)}
      >
        <Link to={`${url}/husserl/alfabeto`}>
          <MenuItem onClick={closeMenu}>
            <ListItemIcon>
              <Book />
            </ListItemIcon>
            <ListItemText primary="Expresiones" />
          </MenuItem>
        </Link>
        <Link to={`${url}/husserl/pasajes`}>
          <MenuItem onClick={closeMenu}>
            <ListItemIcon>
              <Description />
            </ListItemIcon>
            <ListItemText primary="Pasajes" />
          </MenuItem>
        </Link>
        <Link to={`${url}/husserl/acercade`}>
          <MenuItem onClick={closeMenu}>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary="Acerca de" />
          </MenuItem>
        </Link>
        <Link to={`${url}/husserl/manual`}>
          <MenuItem onClick={closeMenu}>
            <ListItemIcon>
              <Help />
            </ListItemIcon>
            <ListItemText primary="Manual" />
          </MenuItem>
        </Link>
        <Link to={`${url}/husserl/usuarios`}>
          <MenuItem onClick={closeMenu}>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Usuarios" />
          </MenuItem>
        </Link>
        <MenuItem onClick={exitMain}>
          <ListItemIcon>
            <Exit />
          </ListItemIcon>
          <ListItemText primary="Salir" />
        </MenuItem>
      </Menu>
      <Link id="toLogin" to={"/"} />
    </Fragment>
  );
};

export default MenuHeader;
