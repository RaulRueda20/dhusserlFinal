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

    switch (lang) {
        case "es":
            return <div className="acercaDe" dangerouslySetInnerHTML={{ __html: acercade.contenido }}></div>
        case "ca":
            return <div className="acercaDe" dangerouslySetInnerHTML={{ __html: acercade.contenido_ca }}></div>
        case "al":
            return <div className="acercaDe" dangerouslySetInnerHTML={{ __html: acercade.contenido_al }}></div>
        case "en":
            return <div className="acercaDe" dangerouslySetInnerHTML={{ __html: acercade.contenido_en }}></div>
        case "fr":
            return <div className="acercaDe" dangerouslySetInnerHTML={{ __html: acercade.contenido_fr }}></div>
    }

}

export default Acercade;