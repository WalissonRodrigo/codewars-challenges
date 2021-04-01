function toCamelCase(text) {
  if(text.length <= 1) return '';
  const regex = /-|_/gm;
  const FullCamelCase = text
    .split(regex)
    .map((t) => t[0].toUpperCase() + t.substring(1))
    .join("");
  const camelCase = text[0] + FullCamelCase.substring(1);
  return camelCase;
}
module.exports.toCamelCase = toCamelCase;
