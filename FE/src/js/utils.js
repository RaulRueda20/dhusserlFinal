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

export { fixLetter };
