//React
import React from 'react';

// Components
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/styles';

//Language
import {tipoDeBusqueda, dentroExpresion, dentroReferencia} from '../../../../js/Language';
import { languageStore } from '../../../../stores/languageStore';

const seleccion={
    selector:{
        marginTop:"30px",
    }
}

function SelectorBusqueda(props){
    const {classes}=props;
    const globalLanguage = React.useContext(languageStore);

    function handleChange(event){
        props.setTipoBusqueda(event.target.value)
    }

    return(
        <FormControl className={classes.selector} fullWidth>
            <InputLabel htmlFor="Busquedas">{tipoDeBusqueda(globalLanguage.lang)}</InputLabel>
            <Select
                fullWidth
                value={props.tipoBusqueda}
                onChange={handleChange}
            >
                <MenuItem value="Expresion">
                    {dentroExpresion(globalLanguage.lang)}
                </MenuItem>
                <MenuItem value="Referencia">
                    {dentroReferencia(globalLanguage.lang)}
                </MenuItem>
            </Select>
        </FormControl>
    )
}

export default withStyles(seleccion)(SelectorBusqueda);