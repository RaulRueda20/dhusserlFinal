// React
import React, { useContext, useState, Fragment } from 'react';

// Components
import { Link } from 'react-router-dom';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon, DeviceHub as Jerarquia, } from '@material-ui/icons';
import { Icon, Grid, Typography, Tooltip } from '@material-ui/core';
import classNames from 'classnames';

// Other req
import { webService } from '../../../../js/webServices';
import * as localStore from '../../../../js/localStore';

import { sesionStore } from "../../../../stores/sesionStore";
import { expresionesStore } from "../../../../stores/expresionStore";

// CSS
import "../../../../css/expresiones.css";

const PanelExpresion = ({ match, expresion, index, setOpenModalN, getJerarquia }) => {
    const global = useContext(sesionStore);
    const { dispatch } = global

    const globalExpresion = useContext(expresionesStore);
    const { store } = globalExpresion
    const { expresionSeleccionada, expresiones } = store

    const [open, setOpen] = useState(false);

    const fixReferenciasConsultadas = (e) => {
        let referencia = {
            clave: e[0].clave,
            e: e[0].expresion_original,
            traduccion: e[0].expresion_traduccion,
            id: e[0].id,
            index_de: e[0].index_de,
            index_es: e[0].index_es,
            pretty_e: e[0].epretty,
            pretty_t: e[0].tpretty,
            referencias: []
        }
        referencia.referencias.push({
            referencia_original: e[0].ref_original,
            referencia_traduccion: e[0].ref_traduccion,
            refid: e[0].refid,
            orden: e[0].orden,
        })
        return referencia
    };

    const guardadoDePasajes = (event) => {
        let idReferenciaConsultada = expresion.id
        let refIdReferenciaConsultada = event.currentTarget.id.split("/")[0]
        let service = "/referencias/obtieneReferenciasIdRefId/" + idReferenciaConsultada + "/" + refIdReferenciaConsultada
        webService(service, "GET", {}, ({ data }) => {
            const referencias = fixReferenciasConsultadas(data.response)
            if (!localStore.getObjects("referenciasConsultadas")) {
                let referenciasConsultadas = [];
                referenciasConsultadas.push(referencias);
                dispatch({
                    type: "SET_ULTIMAS_VISITADAS",
                    payload: referenciasConsultadas
                })
            } else {
                let referenciasConsultadas = localStore.getObjects("referenciasConsultadas");
                referenciasConsultadas.push(referencias);
                dispatch({
                    type: "SET_ULTIMAS_VISITADAS",
                    payload: referenciasConsultadas
                })
            }
        })
    }

    const handleModal = () => {
        const { referencias } = expresion
        if (referencias[0].refid == null) {
            setOpenModalN(true)
        }
    }

    const htmlPrettyE = () => {
        const { pretty_e, pretty_t } = expresion
        return { __html: pretty_e + '<p> // </p>' + pretty_t }
    }

    const htmlPrettyT = () => {
        return { __html: expresion.pretty_t + '<p> // </p>' + expresion.pretty_e }
    }

    const clickHandleVista = ({ currentTarget }) => {
        const { id } = currentTarget
        console.log(currentTarget, parseInt(id), expresiones)

        const expresionesReferencias = expresiones[parseInt(id)];
        if (!localStore.getObjects("referenciasConsultadas")) {
            let referenciasConsultadas = [];
            referenciasConsultadas.push(expresionesReferencias);
            dispatch({
                type: "SET_ULTIMAS_VISITADAS",
                payload: referenciasConsultadas
            })
        } else {
            let referenciasConsultadas = localStore.getObjects("referenciasConsultadas");
            referenciasConsultadas.push(expresionesReferencias);
            dispatch({
                type: "SET_ULTIMAS_VISITADAS",
                payload: referenciasConsultadas
            })
        }
    }

    return (
        <Fragment>
            <li
                className={classNames([{ "pasajeSeleccionado": expresion.id == expresionSeleccionada?.id }, "sideList"])}
                key={expresion.id + "-" + index}
                id={"expresion" + expresion.id} value={expresion.id}
            >
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={10} id={index} onClick={clickHandleVista}>
                        <Link to={expresion.referencias[0].refid == null ? "#" : `${match.path.slice(0, 20)}/pasaje/${expresion.id}/${expresion.referencias[0].refid}`} onClick={handleModal}>
                            <span className="Renglones" dangerouslySetInnerHTML={htmlPrettyE()} />
                        </Link>
                    </Grid>
                    <Grid item id={expresion.id} xs={1} onClick={() => setOpen(!open)}>
                        {open == false ?
                            <Icon className="iconosIluminados">
                                <ExpandMoreIcon />
                            </Icon> :
                            <Icon className="iconosIluminados">
                                <ExpandLessIcon />
                            </Icon>
                        }
                    </Grid>
                    <Grid item xs={1}>
                        <div id={expresion.id + "/" + expresion.nombreExpresion} onClick={getJerarquia}>
                            <Tooltip title="Jerarquía">
                                <Icon className="iconosIluminados">
                                    <Jerarquia />
                                </Icon>
                            </Tooltip>
                        </div>
                    </Grid>
                </Grid>
                {open ?
                    <ul key={expresion.id} id={"referencias" + expresion.id} className="ulDelPanelDeExpresiones">
                        {expresion.referencias[0].refid == null ? "No hay ninguna referencia para esta expresión. Ver por favor la lista de expresiones derivadas." :
                            expresion.referencias.map((referencia, index) => (
                                <li className="referencia" key={referencia + "/" + index}>
                                    <Typography variant="h6" className={classNames([{ "remarcadoDeReferencias": referencia.orden == 1 }])}>
                                        <Link to={referencia.refid == null ? null : `${match.path.slice(0, 20)}/pasaje/${expresion.id}/${referencia.refid}`} className="consultaDePasajes" id={referencia.refid + "/" + index} onClick={guardadoDePasajes}>
                                            {referencia.refid + "  :  " + referencia.referencia_original + "/" + referencia.referencia_traduccion}
                                        </Link>
                                    </Typography>
                                </li>
                            ))}
                    </ul>
                    : null
                }
            </li>
        </Fragment>
    );
}

export default PanelExpresion
