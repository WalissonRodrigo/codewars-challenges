function duplicateEncode(word) {
  return word
    .split("")
    .reduce(function (acumulador, valorAtual, indice, array) {
      return (acumulador +=
        array.filter((item) => item.toLowerCase() == valorAtual.toLowerCase())
          .length > 1
          ? ")"
          : "(");
    }, "");
}
module.exports.duplicateEncode = duplicateEncode;
