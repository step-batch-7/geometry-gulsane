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
  describe("isEqualTo", () => {
    it("should validate the point which have same reference", () => {
      const point1 = new Point(1, 2);
      const actual = point1.isEqualTo(point1);
      const expected = true;
      assert.strictEqual(actual, expected);
    });
    it("should validate the point which have same fields value", () => {
      const point1 = new Point(1, 2);
      const point2 = new Point(1, 2);
      const actual = point1.isEqualTo(point2);
      const expected = true;
      assert.strictEqual(actual, expected);
    });
    it("should not validate the point which same different fields value", () => {
      const point1 = new Point(1, 2);
      const point2 = new Point(1, 8);
      const actual = point1.isEqualTo(point2);
      const expected = false;
      assert.strictEqual(actual, expected);
    });
  });
});
