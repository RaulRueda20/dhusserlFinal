import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/styles';

import es from "../../../../Imagenes/spain.png";
import al from "../../../../Imagenes/germany.png";

import {toolTipIdiomaDeLaLista} from '../../../../js/Language';
import { languageStore } from '../../../../stores/languageStore';

const bandIn = {
  imagenesBandera:{
    width: "35px !important",
    height: "25px !important",
    fontSize: "0px",
    minHeight: "0px",
    minWidth: "0px !important",
    padding: "0px !important"
  }
}

function BanderaButon(props){
  const {classes} = props;
  const globalLanguage = React.useContext(languageStore);

  const clickChangeLanguageEs=()=>{
    globalLanguage.setLangLista("es");
  }

  const clickChangeLanguageAl=()=>{
    globalLanguage.setLangLista("al");
  }

  return(
      <div>
          {props.language == 'es' ?
            <Tooltip title={toolTipIdiomaDeLaLista(globalLanguage.lang)}>
              <Button size="small" className={classes.imagenesBandera} onClick={clickChangeLanguageAl}><img className="banderaIzquierda" src={al}/></Button>
            </Tooltip>
            :
            <Tooltip title={toolTipIdiomaDeLaLista(globalLanguage.lang)}> 
              <Button size="small" className={classes.imagenesBandera} onClick={clickChangeLanguageEs}><img className="banderaIzquierda" src={es}/></Button>
            </Tooltip>
          }
      </div>
    )
}

export default withStyles(bandIn)(BanderaButon);