//React
import React, { useContext } from "react";
import { adminStore } from "../../../../stores/adminStore";
import classNames from "classnames";

const ListaClaves = (props) => {
  const global = useContext(adminStore);
  const { store, action } = global;
  const { pasajes } = store;

  return (
    <>
      <ul className="list-containerP" id="listaClaves">
        {pasajes.map((referencia) => {
          return (
            <li
              id={referencia.ref_id}
              key={referencia.ref_id}
              className={classNames(
                { selected: referencia.ref_id == props.pasajeId },
                "sideListAdmin"
              )}
              onClick={() =>
                action({
                  type: "SET_PASAJE_SELECCIONADO",
                  payload: props.setPasajeId(referencia.ref_id),
                })
              }
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
    </>
  );
};

export default ListaClaves;
