import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/styles';

import es from "../../../../Imagenes/spain.png";
import al from "../../../../Imagenes/germany.png";

import {idiomaConsultas} from '../../../../js/Language';
import { languageStore } from '../../../../stores/languageStore';

const bandIn = {
  imagenesBandera:{
    width: "30px !important",
    height: "20px !important",
    fontSize: "0px",
    minHeight: "0px",
    minWidth: "0px !important",
    padding: "0px !important"
  }
}

function BanderaPasajes(props){
  const {classes} = props;
  const globalLanguage = React.useContext(languageStore);

  const clickChangeLanguageEsBP=()=>{
    globalLanguage.setLangLista("es");
  }

  const clickChangeLanguageAlBP=()=>{
    globalLanguage.setLangLista("al");
  }

  return(
      <div>
        <Tooltip title={idiomaConsultas(globalLanguage.lang)}>
        {globalLanguage.langLista == 'es' ?
          <Button className={classes.imagenesBandera} onClick={clickChangeLanguageAlBP}><img className="banderaPasajes" src={al}/></Button>
          : <Button className={classes.imagenesBandera} onClick={clickChangeLanguageEsBP}><img className="banderaPasajes" src={es}/></Button>}
        </Tooltip>
      </div>
    )
}

export default withStyles(bandIn)(BanderaPasajes);