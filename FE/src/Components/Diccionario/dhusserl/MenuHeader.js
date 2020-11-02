import React from 'react';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';

import Book from '@material-ui/icons/Book';
import Description from '@material-ui/icons/Description';
import Info from '@material-ui/icons/Info';
import Exit from '@material-ui/icons/ExitToApp';
import PageviewIcon from '@material-ui/icons/Pageview';

import {menuDiccionario, menuAcercaDe, menuGuia, menuSalir, toolTipMenuPrincipal, busquedas} from '../../../js/Language';

import { sesionStore } from '../../../stores/sesionStore';
import { languageStore } from '../../../stores/languageStore';

function MenuHeader(props){
  const global = React.useContext(sesionStore);
  const globalLanguage = React.useContext(languageStore);
  const [state, setState] = React.useState({ anchorEl : null})

  const handleMenu = (event) => {
    setState({anchorEl: event.currentTarget})
  }

  const closeMenu = () =>{
    setState({anchorEl:null})
  }

  const exitMain = () =>{
    localStorage.removeItem("sesion")
    console.log(props)
    props.history.push("/diccionario/login")
    global.setSesion(null)
  }

    return(
      <div>
        <Tooltip title={toolTipMenuPrincipal(globalLanguage.lang)}>
          <IconButton
            aria-haspopup="true"
            aria-owns={state.anchorEl ? 'menuheader': undefined}
            onClick={handleMenu} size="small"
            className="iconosIluminados"
          >
            <MenuIcon fontSize="large"/>
          </IconButton>
        </Tooltip>
        <Menu
          id="menuheader"
          anchorEl={state.anchorEl}
          keepMounted
          onClose={closeMenu}
          open={Boolean(state.anchorEl)}
        >
          <Link to={`${props.match.url}/diccionario`}>
            <MenuItem onClick={closeMenu}>
              <ListItemIcon>
                <Book />
              </ListItemIcon>
              <ListItemText primary={menuDiccionario(globalLanguage.lang)}/>
            </MenuItem>
          </Link>
          <Link to={`${props.match.url}/busquedas`}>
            <MenuItem onClick={closeMenu}>
              <ListItemIcon>
                <PageviewIcon />
              </ListItemIcon>
              <ListItemText primary={busquedas(globalLanguage.lang)}/>
            </MenuItem>
          </Link>
          <Link to={`${props.match.url}/acercade`}>
            <MenuItem onClick={closeMenu}>
              <ListItemIcon>
                <Description />
              </ListItemIcon>
              <ListItemText primary={menuAcercaDe(globalLanguage.lang)}/>
            </MenuItem>
          </Link>
          <Link to={`${props.match.url}/guia`}>
            <MenuItem onClick={closeMenu}>
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText primary={menuGuia(globalLanguage.lang)}/>
            </MenuItem>
          </Link>
          <MenuItem onClick={exitMain}>
            <ListItemIcon>
              <Exit />
            </ListItemIcon>
            <ListItemText primary={menuSalir(globalLanguage.lang)}/>
          </MenuItem>
        </Menu>
      </div>
    )
  }

export default MenuHeader;
