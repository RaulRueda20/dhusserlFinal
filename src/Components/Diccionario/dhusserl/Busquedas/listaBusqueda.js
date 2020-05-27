//React
import React from 'react';

//Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Tooltip from '@material-ui/core/Tooltip';

//Other req
import classNames from 'classnames';

//Language
import {resultadoBusqueda,cerrarListaTooltip} from '../../../../js/Language';

function ListaBusqueda(props){

    function clickCambioIdBuscado(event){
        props.setIdPasaje(event.currentTarget.id.split("-")[0])
        props.setPosicionPasaje(parseInt(event.currentTarget.id.split("-")[1]))
        if(props.tipoBusqueda=="Referencia"){
            props.setPosicionPasaje(parseInt(event.currentTarget.id.split("-")[2]))
        }
    }

    return(
        <Grid container justify="center" alignItems="center">
            <Grid item xs={11}>
                <Typography variant="h3" className="tituloResultados">{resultadoBusqueda(props.lang)}</Typography>
            </Grid>
            <Grid item xs={1}>
                <Tooltip title={cerrarListaTooltip(props.lang)}>
                    <IconButton onClick={props.abrirLista}>
                        <ArrowBackIosIcon/>
                    </IconButton>
                </Tooltip>
            </Grid>
            {props.tipoBusqueda=="Referencia" ?
                <Grid item xs={12} className="contenedorBusqueda">
                <ul className="ulBusqueda">
                    {props.expresionesEncontradas.map((expresionEncontradaporReferencia,index)=>(
                        <li id={expresionEncontradaporReferencia.ref_id + "-" + index}
                            onClick={event => clickCambioIdBuscado(event)}
                            value={expresionEncontradaporReferencia.ref_id + "-" + index}
                            key={expresionEncontradaporReferencia.ref_id+"-"+index}
                            className={classNames([{"pasajeSeleccionado":props.posicionPasaje==index},"liBusqueda"])}
                        >
                            <Typography>
                            {expresionEncontradaporReferencia.ref_libro_de + "  /  " + expresionEncontradaporReferencia.ref_libro_es}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </Grid>:
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} className="contenedorBusqueda">
                    <ul className="ulBusqueda">
                        {props.expresionesEncontradas.map((expresionEncontradaPorExpresion,index)=>(
                            <li
                                onClick={event => clickCambioIdBuscado(event)}
                                id={expresionEncontradaPorExpresion.term_id+"-"+index}
                                value={expresionEncontradaPorExpresion.term_id+"-"+index}
                                key={expresionEncontradaPorExpresion.term_id+"-"+index}
                                className={classNames([{"pasajeSeleccionado":props.posicionPasaje==index},"liBusqueda"])}
                            >
                                <Typography>
                                    {expresionEncontradaPorExpresion.term_de+"  /  "+expresionEncontradaPorExpresion.term_es}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                </Grid>
            </Grid>
            }
        </Grid>
    )
}

export default ListaBusqueda;