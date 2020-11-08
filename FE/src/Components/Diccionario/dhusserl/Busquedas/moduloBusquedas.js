// React
import React, { useContext, useState } from 'react';

//Components
import { Grid, IconButton, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';

//Elements
import Busquedas from './Busquedas';
import SelectorBusqueda from './selectorBusqueda';
import ListaBusqueda from './listaBusqueda';
import ResultadoBusquedaExpresion from './resultadoBusquedaPorExpresion';
import ResultadoBusquedaReferencia from './resultadoBusquedaPorReferencia';

//Language
import { abrirListaTooltip } from '../../../../js/Language';
import { sesionStore } from '../../../../stores/sesionStore';

const moduloBusqueda = {
    gridSelectorBusqueda: {
        paddingRight: "30px !important",
    },
    gridSelectorLetras: {
        paddingRight: "30px !important"
    },
    botonLista: {
        textAlign: "center"
    }
}

const ModuloBusquedas = (props) => {
    const { classes } = props;
    const global = useContext(sesionStore);
    const { state, dispatch } = global
    const { lang } = state

    const [expresionesEncontradas, setExpresionesEncontradas] = useState([]);
    const [tipoBusqueda, setTipoBusqueda] = useState("Expresion");
    const [tipoBusquedaRealizada, setTipoBusquedaRealizada] = useState("");
    const [posicionPasaje, setPosicionPasaje] = useState(0);
    const [idPasaje, setIdPasaje] = useState("");
    const [abierto, setAbierto] = useState(true);
    const [busqueda, setBusqueda] = useState("");

    function abrirLista() {
        setAbierto(!abierto)
    }

    return (
        <Grid container>
            <Grid item xs={12} sm={8}>
                <Busquedas expresionesEncontradas={expresionesEncontradas} setExpresionesEncontradas={setExpresionesEncontradas} posicionPasaje={posicionPasaje}
                    setPosicionPasaje={setPosicionPasaje} tipoBusqueda={tipoBusqueda} setTipoBusquedaRealizada={setTipoBusquedaRealizada} busqueda={busqueda} setBusqueda={setBusqueda} />
            </Grid>
            <Grid item xs={12} sm={4} className={classes.gridSelectorBusqueda}>
                <SelectorBusqueda tipoBusqueda={tipoBusqueda} setTipoBusqueda={setTipoBusqueda} />
            </Grid>
            {
                expresionesEncontradas.length < 1 ? null :
                    <Grid item xs={abierto ? 8 : 1} sm={abierto ? 6 : 1} md={abierto ? 4 : 1} className={classes.botonLista}>
                        {!abierto ?
                            <Tooltip title={abrirListaTooltip(lang)}>
                                <IconButton onClick={abrirLista}>
                                    <MenuIcon />
                                </IconButton>
                            </Tooltip> :
                            <ListaBusqueda expresionesEncontradas={expresionesEncontradas} posicionPasaje={posicionPasaje}
                                setPosicionPasaje={setPosicionPasaje} tipoBusqueda={tipoBusquedaRealizada} idPasaje={idPasaje}
                                setIdPasaje={setIdPasaje} abrirLista={abrirLista} expresionSeleccionada={expresionesEncontradas[posicionPasaje]}
                            />}
                    </Grid>
            }
            {
                expresionesEncontradas.length < 1 ? null :
                    <Grid item xs={abierto ? false : 11} sm={abierto ? 6 : 11} md={abierto ? 8 : 11}>
                        {tipoBusquedaRealizada == "Referencia" ?
                            <ResultadoBusquedaReferencia history={props.history} match={props.match} pasajeSeleccionado={expresionesEncontradas[posicionPasaje]} idPasaje={idPasaje} busqueda={busqueda} />
                            :
                            <ResultadoBusquedaExpresion history={props.history} match={props.match} expresionSeleccionada={expresionesEncontradas[posicionPasaje]}
                                idPasaje={idPasaje} setIdPasaje={setIdPasaje} abierto={abierto} setAbierto={setAbierto} busqueda={busqueda} />
                        }
                    </Grid>
            }
        </Grid>
    )
}

export default withStyles(moduloBusqueda)(ModuloBusquedas);