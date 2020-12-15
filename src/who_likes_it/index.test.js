const Test = require("chai");
const { likes } = require("./index.js");

describe("example tests", function () {
  it("should return correct text", function () {
    Test.assert.equal(likes([]), "no one likes this");
    Test.assert.equal(likes(["Peter"]), "Peter likes this");
    Test.assert.equal(likes(["Jacob", "Alex"]), "Jacob and Alex like this");
    Test.assert.equal(
      likes(["Max", "John", "Mark"]),
      "Max, John and Mark like this"
    );
    Test.assert.equal(
      likes(["Alex", "Jacob", "Mark", "Max"]),
      "Alex, Jacob and 2 others like this"
    );
  });
});
