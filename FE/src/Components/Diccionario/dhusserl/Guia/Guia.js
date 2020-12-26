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

    switch (lang) {
        case "es":
            return <div className="guia" dangerouslySetInnerHTML={{ __html: guia.contenido }}></div>
        case "ca":
            return <div className="guia" dangerouslySetInnerHTML={{ __html: guia.contenido_ca }}></div>
        case "al":
            return <div className="guia" dangerouslySetInnerHTML={{ __html: guia.contenido_de }}></div>
        case "en":
            return <div className="guia" dangerouslySetInnerHTML={{ __html: guia.contenido_en }}></div>
        case "fr":
            return <div className="guia" dangerouslySetInnerHTML={{ __html: guia.contenido_fr }}></div>
    }
}

export default Guia;