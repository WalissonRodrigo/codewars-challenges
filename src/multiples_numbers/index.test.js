const { assert } = require("chai");
const { solution } = require("./index.js");

describe("Teste Unitario", () => {
  it("Validar instalação do Jest", () => {
    assert.strictEqual(1 + 1, 2);
  });
});

describe("Numeros Multiplos de 3 ou 5", () => {
  it("Multiplos menores que 10", () => {
    const result = solution(10);
    const expected = 23;
    assert.deepEqual(result, expected);
  });
  it("Multiplos menores que 25", () => {
    const result = solution(25);
    const expected = 143;
    assert.deepEqual(result, expected);
  });
  it("Valores negativos retornam Zero", () => {
    const result = solution(-25);
    const expected = 0;
    assert.deepEqual(result, expected);
  });

  it("Multiplos menores que 6944", () => {
    const result = solution(6944);
    const expected = 11250900;
    assert.deepEqual(result, expected);
  });
});
