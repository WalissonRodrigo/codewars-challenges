const Test = require("chai");
const { descendingOrder } = require("./index.js");

describe("example tests", function () {
  it("should return correct value", function () {
    Test.assert.equal(descendingOrder(0), 0);
    Test.assert.equal(descendingOrder(1), 1);
    Test.assert.equal(descendingOrder(123456789), 987654321);
  });
});
