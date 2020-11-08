// React
import React, { useEffect, useContext, useState } from 'react'

// Other reqs
import { webService } from '../../../../js/webServices';
import { sesionStore } from '../../../../stores/sesionStore';

const Guia = ({ history }) => {
    const global = useContext(sesionStore);
    const { state, dispatch } = global
    const { lang, sesion } = state
    const [guia, setGuia] = useState("");

    useEffect(() => {
        if (sesion == null) history.push("/diccionario/login");
        dispatch({ type: 'START_LOADING' })
        webService("/manual/get", "GET", {}, sesion, ({ data }) => {
            const { response } = data
            setGuia(response[0])
            dispatch({ type: 'STOP_LOADING' })
        })
    }, [lang])

    const renderizadoGuia = () => {
        switch (lang) {
            case "es":
                return { __html: guia.contenido }
            case "ca":
                return { __html: guia.contenido_ca }
            case "al":
                return { __html: guia.contenido_de }
            case "en":
                return { __html: guia.contenido_en }
            case "fr":
                return { __html: guia.contenido_fr }
        }
    }

    return (
        <div className="guia" dangerouslySetInnerHTML={() => renderizadoGuia()}></div>
    )
}

export default Guia;