const assert = require("chai").assert;
const Point = require("../src/point").Point;

describe("Point", () => {
  describe("toString", () => {
    it("should return a string ", () => {
      const point = new Point(2, 3);
      const actual = point.toString();
      const expected = "[Point @(2,3)]";
      assert.strictEqual(actual, expected);
    });
  });
  describe("visit", () => {
    it("should return the parameter to the reference of function", () => {
      const point = new Point(3, 4);
      const actual = point.visit((x, y) => x * y);
      const expected = 12;
      assert.strictEqual(actual, expected);
    });
  });
});
