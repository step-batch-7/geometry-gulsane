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
    it("should pass the parameter to the reference of function", () => {
      const point = new Point(3, 4);
      const actual = point.visit((x, y) => x * y);
      const expected = 12;
      assert.strictEqual(actual, expected);
    });
  });
  describe("isEqualToTo", () => {
    it("should validate the point which have same reference", () => {
      const point1 = new Point(1, 2);
      const actual = point1.isEqualTo(point1);
      assert.isOk(actual);
    });
    it("should validate the point which have same fields value", () => {
      const point1 = new Point(1, 2);
      const point2 = new Point(1, 2);
      const actual = point1.isEqualTo(point2);
      assert.isOk(actual);
    });
    it("should not validate the point which same different fields value", () => {
      const point1 = new Point(1, 2);
      const point2 = new Point(1, 8);
      const actual = point1.isEqualTo(point2);

      assert.isNotOk(actual);
    });
  });
  describe("clone", () => {
    it("should give a copy of point", () => {
      const point1 = new Point(1, 2);
      const point2 = point1.clone();
      const actual = point1.isEqualTo(point2);
      assert.isOk(actual);
    });
  });
  describe("findDistanceTo", () => {
    it("should return NaN if points have not same instance", () => {
      const point1 = new Point(1, 2);
      const point2 = { x: 3, y: 7 };
      const actual = point1.findDistanceTo(point2);
      assert.isNaN(actual);
    });
    it("should return 0 is reference of both the points is same", () => {
      const point1 = new Point(1, 2);
      const actual = point1.findDistanceTo(point1);
      assert.strictEqual(actual, 0);
    });
    it("should return the distance between two points if instance of both lines is same", () => {
      const point1 = new Point(0, 0);
      const point2 = new Point(10, 0);
      const actual = point1.findDistanceTo(point2);
      assert.strictEqual(actual, 10);
    });
  });
});
