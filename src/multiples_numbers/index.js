function multiples(determinante) {
  if (determinante <= 0) return [0];
  const result = [];
  const tests = [3, 5];
  tests.forEach((item) => {
    for (let valid = 1; valid <= determinante; valid++) {
      const multiple = item * valid;
      if (multiple < determinante) {
        const index = result.indexOf(multiple);
        if (index < 0) result.push(multiple);
      } else {
        break;
      }
    }
  });
  return sortAsc(result);
}

function sortAsc(items) {
  return items.sort(function (a, b) {
    return a - b;
  });
}

function sum(mult) {
  return mult.reduce(function (acumulador, valorAtual, index, array) {
    return acumulador + valorAtual;
  }, 0);
}

function otherSolution(number) {
  return sum(multiples(number));
}

function solution(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

module.exports.multiples = multiples;
module.exports.sum = sum;
module.exports.solution = solution;
