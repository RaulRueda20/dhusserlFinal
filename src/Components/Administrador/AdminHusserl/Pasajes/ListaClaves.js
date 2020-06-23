//React
import React from 'react';
import classNames from 'classnames';

export default function ListaClaves(props){
  var pasajeSeleccionado = props.pasajeId

  return(
    <div>
      <ul className="list-containerP">
        {props.pasajes.map(referencia=>(
          <li id={referencia.ref_id} key={referencia.ref_id} className={classNames({"selected" : referencia.ref_id == pasajeSeleccionado}, "sideListAdmin")} onClick={() => props.setPasajeId(referencia.ref_id)}>
            {referencia.ref_id + ": " + referencia.ref_libro_de + " // " + referencia.ref_libro_es}
          </li>
        ))}
      </ul>
    </div>
  )
}
