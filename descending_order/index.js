function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .map((item) => Number(item))
      .sort(function (a, b) {
        return b - a;
      })
      .join("")
  );
}
module.exports.descendingOrder = descendingOrder;
