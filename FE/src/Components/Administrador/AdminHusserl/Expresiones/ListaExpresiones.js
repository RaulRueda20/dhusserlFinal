import React from "react";
import classNames from "classnames";

const ListaExpresiones = (props) => {
  const handleClickExpresion = (event) => {
    // console.log(event.target.value);
    props.setIdExpresion(event.target.value);
  };

  return (
    <div className="list-container">
      <ul>
        {props.expresiones.map((expresion) => (
          <li
            className={classNames(
              { selected: expresion.id === props.idExpresion },
              "sideListAdmin"
            )}
            key={expresion.id}
            value={expresion.id}
            id={expresion.id}
            onClick={handleClickExpresion}
          >
            {expresion.id +
              " - " +
              expresion.expresion_de +
              "//" +
              expresion.expresion_es}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaExpresiones;
