import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/styles';

import es from "../../../../Imagenes/spain.png";
import al from "../../../../Imagenes/germany.png";

import {idiomaConsultas} from '../../../../js/Language';

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

  const clickChangeLanguageEsBP=()=>{
    props.setLanguageP("es");
  }

  const clickChangeLanguageAlBP=()=>{
    props.setLanguageP("al");
  }

  return(
      <div>
        <Tooltip title={idiomaConsultas(props.lang)}>
        {props.languageP == 'es' ?
          <Button className={classes.imagenesBandera} onClick={clickChangeLanguageAlBP}><img className="banderaPasajes" src={al}/></Button>
          : <Button className={classes.imagenesBandera} onClick={clickChangeLanguageEsBP}><img className="banderaPasajes" src={es}/></Button>}
        </Tooltip>
      </div>
    )
}

export default withStyles(bandIn)(BanderaPasajes);