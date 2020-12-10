//React
import React, { useContext, useState } from 'react';

//Components
import { Search as SearchIcon } from '@material-ui/icons';
import { Input, InputLabel, InputAdornment, FormControl, IconButton, Tooltip, Switch, Grid, Snackbar } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiFormatLetterCase } from '@mdi/js';
import { withStyles } from '@material-ui/styles';

//Other req
import '../../../../css/expresiones.css';
import { webService } from '../../../../js/webServices';
import { sesionStore } from '../../../../stores/sesionStore';
import { expresionesStore } from '../../../../stores/expresionStore';
import classNames from 'classnames';

//Language
import { busquedas, distincionMayusyMinus, letraNoCoincide } from '../../../../js/Language';


const styles = {
    contenedor: {
        alignItems: "center !important"
    },
    formularioBusqueda: {
        marginRight: "5px",
        marginLeft: "20px",
        marginTop: "28px"
    },
    switchPasaje: {
        textAlign: "center"
    }
}

const BusquedaAbajo = (props) => {
    const { classes, busqueda, setModalDebusquedas, setModalCaracteresInvalidos, setModalNumeros, setLoading, setBusqueda } = props

    const global = useContext(sesionStore);
    const { state } = global
    const { sesion } = state

    const globalExpresion = useContext(expresionesStore);
    const { store, attend } = globalExpresion
    const { letra, lang, langLista, expresiones } = store

    const [insensitiveCase, setInsensitiveCase] = useState(false);
    const [snack, setSnack] = useState({ open: false, text: "" });

    const handleChangeBusquedaExpresiones = (event) => {
        event.preventDefault()
        if (busqueda != "") {
            const stringCaracteres = busqueda.replace(/(?!\w|\s)./g, '')
            const stringNumeros = busqueda.replace(/([0-9])./g, '')
            if (busqueda.length < 2) {
                setModalDebusquedas(true)
            } else if (stringCaracteres.length < 2) {
                setModalCaracteresInvalidos(true)
            } else if (stringNumeros.length < 2) {
                setModalNumeros(true)
            } else if (busqueda.length > 2) {
                setLoading(true)
                var letra = busqueda.slice(0, 1)
                var letraCapital = letra.toUpperCase()
                if (letra == letraCapital) {
                    var servicebl = "/referencias/busquedaExpresionPorLetra" + "/" + letra + "/" + langLista
                    webService(servicebl, "POST", { parametro: busqueda, case: insensitiveCase }, sesion, (data) => {
                        if (letra == letraCapital) {
                            ChunkC(data.data.response)
                        } else {
                            setSnack({ open: true, text: letraNoCoincide(lang) })
                        }
                    })
                } else {
                    var letraCapital = letra.toUpperCase()
                    var servicebl = "/referencias/busquedaExpresionPorLetra" + "/" + letra + "/" + langLista
                    webService(servicebl, "POST", { parametro: busqueda, case: insensitiveCase }, sesion, (data) => {
                        if (letra == letraCapital) {
                            ChunkC(data.data.response)
                        } else {
                            setSnack({ open: true, text: letraNoCoincide(lang) })
                        }
                    })
                }
            }
        } else {
            ChunkC(expresiones.slice(0, 50));
        }
    }

    const handleInsensitiveCase = () => {
        setInsensitiveCase(!insensitiveCase)
    }

    const handleClose = () => {
        setSnack({ open: false, text: "" });
    }

    return (
        <form onSubmit={handleChangeBusquedaExpresiones} className={classes.formularioBusqueda}>
            <Grid container className={classes.contenedor}>
                <Grid item xs={10}>
                    <FormControl className="busquedaEnExpresiones">
                        <InputLabel htmlFor="input-with-icon-adornment">{busquedas(lang)}</InputLabel>
                        <Input
                            onChange={event => setBusqueda(event.target.value)}
                            id="input-with-icon-adornment"
                            endAdornment={
                                <InputAdornment position="start">
                                    <IconButton type="submit" className="lupita">
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={2} className={classes.switchPasaje}>
                    <Tooltip title={distincionMayusyMinus(lang)}>
                        <IconButton onClick={handleInsensitiveCase} className={classNames([{ "caseSeleccionado": insensitiveCase == true }, "case"])}>
                            <Icon path={mdiFormatLetterCase}
                                title="User Profile"
                                size={1}
                            />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
                key={`top,left`}
                open={snack.open}
                onClose={handleClose}
                ContentProps={{
                    "aria-describedby": "message-id",
                }}
                message={<span id="message-id">{snack.text}</span>}
            />
        </form>
    )
}

export default withStyles(styles)(BusquedaAbajo);
