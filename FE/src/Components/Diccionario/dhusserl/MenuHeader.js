import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Tooltip,
  Menu,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Book from "@material-ui/icons/Book";
import Description from "@material-ui/icons/Description";
import Info from "@material-ui/icons/Info";
import Exit from "@material-ui/icons/ExitToApp";
import PageviewIcon from "@material-ui/icons/Pageview";

import {
  menuDiccionario,
  menuAcercaDe,
  menuGuia,
  menuSalir,
  toolTipMenuPrincipal,
  busquedas,
} from "../../../js/Language";

import { sesionStore } from "../../../stores/sesionStore";

const MenuHeader = (props) => {
  const global = useContext(sesionStore);
  const { state, dispatch } = global;
  const { lang } = state;
  const [state1, setState1] = useState({ anchorEl: null });

  const handleMenu = (event) => {
    setState1({ anchorEl: event.currentTarget });
  };

  const closeMenu = () => {
    setState1({ anchorEl: null });
  };

  const exitMain = () => {
    localStorage.removeItem("sesion");
    props.history.push("/diccionario/login");
    dispatch({
      type: "SET_SESION",
      payload: null,
    });
  };

  return (
    <div>
      <Tooltip title={toolTipMenuPrincipal(lang)}>
        <IconButton
          aria-haspopup="true"
          aria-owns={state1.anchorEl ? "menuheader" : undefined}
          onClick={handleMenu}
          size="small"
          className="iconosIluminados"
        >
          <MenuIcon fontSize="large" className="iconos" />
        </IconButton>
      </Tooltip>
      <Menu
        id="menuheader"
        anchorEl={state1.anchorEl}
        keepMounted
        onClose={closeMenu}
        open={Boolean(state1.anchorEl)}
      >
        <Link to={`${props.match.url}/expresiones`}>
          <MenuItem onClick={closeMenu}>
            <ListItemIcon>
              <Book />
            </ListItemIcon>
            <ListItemText primary={menuDiccionario(lang)} />
          </MenuItem>
        </Link>
        <Link to={`${props.match.url}/busquedas`}>
          <MenuItem onClick={closeMenu}>
            <ListItemIcon>
              <PageviewIcon />
            </ListItemIcon>
            <ListItemText primary={busquedas(lang)} />
          </MenuItem>
        </Link>
        <Link to={`${props.match.url}/acercade`}>
          <MenuItem onClick={closeMenu}>
            <ListItemIcon>
              <Description />
            </ListItemIcon>
            <ListItemText primary={menuAcercaDe(lang)} />
          </MenuItem>
        </Link>
        <Link to={`${props.match.url}/guia`}>
          <MenuItem onClick={closeMenu}>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary={menuGuia(lang)} />
          </MenuItem>
        </Link>
        <MenuItem onClick={exitMain}>
          <ListItemIcon>
            <Exit />
          </ListItemIcon>
          <ListItemText primary={menuSalir(lang)} />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuHeader;
