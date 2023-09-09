const fixLetter = (letra) => {
  switch (letra.toUpperCase()) {
    case "Ä":
    case "Á":
    case "Â":
      return "A";
    case "Ë":
    case "É":
    case "Ê":
      return "E";
    case "Ö":
    case "Ó":
    case "Ô":
      return "O";
    case "Ï":
    case "Í":
    case "Î":
      return "I";
    case "Ü":
    case "Ú":
    case "Û":
      return "U";
    default:
      return letra.toUpperCase();
  }
};

const fixReferencias = (referencias) => {
  var expresiones = [];
  var posicActual = -1;
  var expreActual = "";
  var i = 0;
  while (i < referencias.length) {
    if (expreActual != referencias[i].id) {
      posicActual++;
      expreActual = referencias[i].id;
      expresiones.push({
        clave: referencias[i].clave,
        nombreExpresion: referencias[i].expresion,
        id: referencias[i].id,
        index_de: referencias[i].index_de,
        index_es: referencias[i].index_es,
        pretty_e: referencias[i].pretty_e,
        pretty_t: referencias[i].pretty_t,
        referencias: [],
        traduccion: referencias[i].traduccion,
      });
      expresiones[posicActual].referencias.push({
        referencia_original: referencias[i].referencia_original,
        referencia_traduccion: referencias[i].referencia_traduccion,
        refid: referencias[i].refid,
        orden: referencias[i].orden,
      });
      i++;
    } else {
      expresiones[posicActual].referencias.push({
        referencia_original: referencias[i].referencia_original,
        referencia_traduccion: referencias[i].referencia_traduccion,
        refid: referencias[i].refid,
        orden: referencias[i].orden,
      });
      i++;
    }
  }
  return expresiones;
};

export { fixLetter, fixReferencias };
