const Test = require("chai");
const { duplicateEncode } = require("./index.js");

describe("example tests", function () {
  it("should return correct text", function () {
    Test.assert.equal(duplicateEncode("din"), "(((");
    Test.assert.equal(duplicateEncode("recede"), "()()()");
    Test.assert.equal(duplicateEncode("Success"), ")())())", "should ignore case");
    Test.assert.equal(duplicateEncode("(( @"), "))((");
  });
});
