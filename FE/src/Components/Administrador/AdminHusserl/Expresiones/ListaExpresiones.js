import React from "react";
import classNames from "classnames";

const ListaExpresiones = ({ expresiones, setIdExpresion }) => {
  const handleClickExpresion = (event) => {
    setIdExpresion(event.target.value);
  };

  return (
    <div className="list-container">
      <ul>
        {expresiones.map((expresion) => (
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
