const Test = require("chai");
const { toCamelCase } = require("./index.js");

describe("Convert string to camel case", function () {
  it("convert to camel case", function () {
    Test.assert.equal(
      toCamelCase(""),
      "",
      "An empty string was provided but not returned"
    );
    Test.assert.equal(
      toCamelCase("the_stealth_warrior"),
      "theStealthWarrior",
      "toCamelCase('the_stealth_warrior') did not return correct value"
    );
    Test.assert.equal(
      toCamelCase("The-Stealth-Warrior"),
      "TheStealthWarrior",
      "toCamelCase('The-Stealth-Warrior') did not return correct value"
    );
    Test.assert.equal(
      toCamelCase("A-B-C"),
      "ABC",
      "toCamelCase('A-B-C') did not return correct value"
    );
  });
});
