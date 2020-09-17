import React, {useState} from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function ListaExpresiones(props){

  const handleClickExpresion=(event)=>{
    props.setIdExpresion(event.target.value)
  }

  return(
    <div className="list-container">
      <ul>
        {props.expresiones.map((expresion,index)=>(
          <li 
            className={classNames({"selected" : expresion.id === props.idExpresion}, "sideListAdmin")} 
            key={expresion.id} value={expresion.id} 
            id ={expresion.id}
            onClick={handleClickExpresion}
          >
            {expresion.id + " - " + expresion.expresion_de + '//' + expresion.expresion_es}
          </li>
        ))}
        </ul>
    </div>
  )
}
