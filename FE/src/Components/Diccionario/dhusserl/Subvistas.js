//React
import React from 'react';

//Elements
import {Switch, Redirect, Link, Route} from 'react-router-dom';

//Components
import HeaderMain from './HeaderMain';
import Expresion from './Expresiones/Expresion';
import Pasaje from './Pasajes/Pasaje';
import ModuloBusquedas from './Busquedas/moduloBusquedas'
import Acercade from './AcercaDe/Acercade';
import Guia from './Guia/Guia';
import { sesionStore } from '../../../sesionStore';

//Other req
import * as localStore from '../../../js/localStore';

export default function Subvistas({match, lang, setLang, history}){
    const global = React.useContext(sesionStore);
    const [language,setLanguage] = React.useState("al");
    const [letraMain, setLetraMain] = React.useState("A");
    const [flagLetraMain, setFlagLetraMain]=React.useState(false);

    React.useEffect(()=>{
        if(global.sesion == null) history.push("/diccionario/login")
    }, [true])

    return(
        <div>
            <HeaderMain match={match} lang={lang} setLang={setLang}/>
            <Switch>
                <Route path={`${match.url}/expresiones`} render={(props) => <Expresion {...props} lang={lang} setLang={setLang} language={language} setLanguage={setLanguage} letraMain={letraMain} setLetraMain={setLetraMain} flagLetraMain={flagLetraMain} setFlagLetraMain={setFlagLetraMain}/>}/>
                <Route path={`${match.url}/pasaje/:expresion/:id`} render={(props) => <Pasaje {...props} lang={lang} setLang={setLang} language={language} setLanguage={setLanguage} letraMain={letraMain} setLetraMain={setLetraMain} flagLetraMain={flagLetraMain} setFlagLetraMain={setFlagLetraMain}/>}/>
                <Route path={`${match.url}/pasaje/:expresion`} render={(props) => <Pasaje {...props} lang={lang} setLang={setLang} language={language} setLanguage={setLanguage} letraMain={letraMain} setLetraMain={setLetraMain} flagLetraMain={flagLetraMain} setFlagLetraMain={setFlagLetraMain}/>}/>
                <Route path={`${match.url}/busquedas`} render={(props) => <ModuloBusquedas {...props} lang={lang} setLang={setLang}/>}/>
                -<Route path={`${match.url}/acercade`} render={(props) => <Acercade {...props} lang={lang} setLang={setLang}/>}/>
                <Route path={`${match.url}/guia`} render={(props) => <Guia {...props} lang={lang} setLang={setLang}/>}/>
                <Route path={`${match.url}/`}>
                    <Redirect to={`${match.url}/expresiones`} />
                </Route>
            </Switch>
        </div>
    )
}