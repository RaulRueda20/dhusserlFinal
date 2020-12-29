import React, { useState, useContext } from "react";
import { MenuItem, Menu, IconButton, Fab, Tooltip } from "@material-ui/core";
import Lang from "@material-ui/icons/Language";
import { makeStyles } from "@material-ui/core/styles";

import es from "../../Imagenes/spain.png";
import en from "../../Imagenes/england.png";
import fr from "../../Imagenes/french.png";
import ca from "../../Imagenes/catalan.png";
import al from "../../Imagenes/germany.png";

import { toolTipMenuIdiomas } from "../../js/Language";
import { sesionStore } from "../../stores/sesionStore";

const useStyles = makeStyles((theme) => ({
  botonesBan: {
    width: "34px !important",
    height: "19px !important",
    boxShadow: "none",
    fontSize: "null",
    background: "transparent !important",
  },
  menuUl: {
    marginLeft: "5px",
  },
  lang: {
    fontSize: "2.5rem",
    color: "white",
  },
}));

const MenuIdioma = (props) => {
  const classes = useStyles();
  const global = useContext(sesionStore);
  const { state, dispatch } = global;
  const { lang } = state;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const chLang = (newLang) => {
    dispatch({
      type: "SET_LANG",
      payload: newLang,
    });
  };

  return (
    <div className="menuIdiomas">
      <Tooltip title={toolTipMenuIdiomas(lang)}>
        <IconButton
          aria-haspopup="true"
          aria-owns={anchorEl ? "simple-menu" : undefined}
          onClick={handleClick}
          size="small"
          className="iconosIluminados"
        >
          <Lang className={classes.lang} />
        </IconButton>
      </Tooltip>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        onClose={handleClose}
        className={classes.menuUl}
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={handleClose} className="menuSimple">
          <Fab className={classes.botonesBan} onClick={() => chLang("al")}>
            <img className="banderas" src={al} />
          </Fab>
        </MenuItem>
        <MenuItem onClick={handleClose} className="menuSimple">
          <Fab className={classes.botonesBan} onClick={() => chLang("es")}>
            <img className="banderas" src={es} />
          </Fab>
        </MenuItem>
        <MenuItem onClick={handleClose} className="menuSimple">
          <Fab className={classes.botonesBan} onClick={() => chLang("en")}>
            <img className="banderas" src={en} />
          </Fab>
        </MenuItem>
        <MenuItem onClick={handleClose} className="menuSimple">
          <Fab className={classes.botonesBan} onClick={() => chLang("fr")}>
            <img className="banderas" src={fr} />
          </Fab>
        </MenuItem>
        <MenuItem onClick={handleClose} className="menuSimple">
          <Fab className={classes.botonesBan} onClick={() => chLang("ca")}>
            <img className="banderas" src={ca} />
          </Fab>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuIdioma;
