//React
import  React from 'react';
import {Link, NavLink} from 'react-router-dom';

// Elements
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

// Other req
import {webService} from '../../../../js/webServices';
import * as localStore from '../../../../js/localStore';
import '../../../../css/expresiones.css';

export default function PanelExpresionIzquierdo(props){
    const [open, setOpen] = React.useState(false);

    React.useEffect(()=>{
        if(props.expresion.id == props.match.params.expresion){
            setOpen(true)
        }
    },[props.match.params.expresion])

    function fixReferenciasConsultadas(expresion){
        var referencia = {
            clave: expresion[0].clave,
            expresion: expresion[0].expresion_original,
            traduccion: expresion[0].expresion_traduccion,
            id: expresion[0].id,
            index_de: expresion[0].index_de,
            index_es: expresion[0].index_es,
            pretty_e: expresion[0].epretty,
            pretty_t: expresion[0].tpretty,
            referencias : []
        }
        referencia.referencias.push({
            referencia_original : expresion[0].ref_original,
            referencia_traduccion : expresion[0].ref_traduccion,
            refid : expresion[0].refid,
            orden: expresion[0].orden,
        })
        return referencia
    }

    function handleVisitados(event,index,referencia){
        if(document.getElementById(referencia + "/" + index).className.indexOf("pasajesVisitados")==-1){
            document.getElementById(referencia + "/" + index).className += " pasajesVisitados";
        }
        var idReferenciaConsultada = props.expresion.id
        var refIdReferenciaConsultada = event.currentTarget.id.split("/")[0]
        var service = "/referencias/obtieneReferenciasIdRefId/"+ idReferenciaConsultada + "/" + refIdReferenciaConsultada
        webService(service, "GET", {}, data => {
            var referencias = fixReferenciasConsultadas(data.data.response)
            if(localStore.getObjects("referenciasConsultadas")==false){
                var referenciasConsultadas = []
                referenciasConsultadas.push(referencias)
                localStore.setObjects("referenciasConsultadas",referenciasConsultadas)
            }else{
                var store = localStore.getObjects("referenciasConsultadas")
                store.push(referencias)
                localStore.setObjects("referenciasConsultadas",store)
            }
        })
    }

    function abrir(id){
        setOpen(!open)
        !open ? 
        document.getElementById(id).classList.add('abierto') : document.getElementById(id).classList.remove('abierto')
    }

    function htmlPrettyE(){
        return {__html:props.expresion.pretty_e + '<p>//</p>' + props.expresion.pretty_t}
    }

    return (
        <li 
            className={classNames([{"pasajeSeleccionado":props.expresion.id==props.idExpresion}, "sideListIzquierdo"])} 
            key={props.expresion.id+"-"+props.index} 
            id={"VP"+props.expresion.id} value={props.expresion.id}
        >
            <Grid container justify="center" alignItems="center">
                <Grid item xs={10} id={props.expresion.id+"-"+props.index} onClick={props.clickHandleVista}>
                    <Link to={`${props.match.path.slice(0,20)}/pasaje/${props.expresion.id}/${props.expresion.referencias[0].refid}`}>
                        <span className="Renglones" dangerouslySetInnerHTML={htmlPrettyE()}/>
                    </Link>
                </Grid>
                <Grid item id={"BTN" + props.expresion.id} xs={2} onClick={()=>abrir("BTN" + props.expresion.id)}>
                    {!open ?
                        <Icon className="iconosIluminados">
                            <ExpandMoreIcon/>
                        </Icon> :
                        <Icon className="iconosIluminados">
                            <ExpandLessIcon/>
                        </Icon>
                    }
                </Grid>
            </Grid>
            <div>
                {open ?
                    <ul key={props.expresion.id} id={"referencias"+props.expresion.id} className="ulDelPanelDeExpresiones">
                        {props.expresion.referencias[0].refid == null ? "No hay ninguna referencia para esta expresión. Ver por favor la lista de expresiones derivadas." : 
                            props.expresion.referencias.map((referencia,index) =>{
                              
                            return(
                            <li className="referencia" id={"panel" + index} >
                                <Grid container justify="center" alignItems="center">
                                    <Grid item xs={10} id={props.expresion.id+"/"+props.index}>
                                        <Typography variant="h6" className={classNames([{"remarcadoDeReferencias" : referencia.orden==1}])} >
                                            <Link to={`${props.match.path.slice(0,20)}/pasaje/${props.expresion.id}/${referencia.refid}`} className="consultaDePasajes" onClick={(event) => handleVisitados(event,index,referencia.refid)} id={referencia.refid+"/"+index}>
                                                {referencia.refid + "  :  " + referencia.referencia_original + "/" + referencia.referencia_traduccion}
                                            </Link>
                                        </Typography>
                                    </Grid> 
                                </Grid>
                            </li>
                        )
                        })}
                    </ul>
                    :null
                }
            </div>
        </li>
    );
}