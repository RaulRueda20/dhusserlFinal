//React
import React, { Fragment } from "react";
import classNames from "classnames";

const ListaClaves = (props) => {
  return (
    <Fragment>
      <ul className="list-containerP" id="listaClaves">
        {props.pasajes.map((referencia) => {
          return (
            <li
              id={referencia.ref_id}
              key={referencia.ref_id}
              className={classNames(
                { selected: referencia.ref_id == props.pasajeId },
                "sideListAdmin"
              )}
              onClick={() => props.setPasajeId(referencia.ref_id)}
            >
              {referencia.ref_id +
                ": " +
                referencia.ref_libro_de +
                " // " +
                referencia.ref_libro_es}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default ListaClaves;
