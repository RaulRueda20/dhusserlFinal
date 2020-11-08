// React
import React, { useEffect, useContext, useState } from 'react'

// Other reqs
import { webService } from '../../../../js/webServices';
import { sesionStore } from '../../../../stores/sesionStore';

const Acercade = ({ history }) => {
    const global = useContext(sesionStore);
    const { state, dispatch } = global
    const { lang, sesion } = state
    const [acercade, setAcercade] = useState("");

    useEffect(() => {
        if (sesion == null) history.push("/diccionario/login");
        dispatch({ type: 'STOP_LOADING' })
        webService("/acerca_de/get", "GET", {}, sesion, ({ data }) => {
            const { response } = data
            setAcercade(response[0])
            dispatch({ type: 'STOP_LOADING' })
        })
    }, [lang])

    const renderizadoDeAcercaDe = () => {
        switch (lang) {
            case "es":
                return { __html: acercade.contenido }
            case "ca":
                return { __html: acercade.contenido_ca }
            case "al":
                return { __html: acercade.contenido_de }
            case "en":
                return { __html: acercade.contenido_en }
            case "fr":
                return { __html: acercade.contenido_fr }
        }
    }

    return (
        <div className="acercaDe" dangerouslySetInnerHTML={() => renderizadoDeAcercaDe()}></div>
    )
}

export default Acercade;