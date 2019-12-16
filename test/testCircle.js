"use strict";

const assert = require("chai").assert;
const Circle = require("../src/circle").Circle;
const Point = require("../src/point").Point;

describe("Circle", () => {
  describe("toString", () => {
    it("should return string ", () => {
      const circle = new Circle(new Point(1, 2), 5);
      const actual = circle.toString();
      const expected = "[Circle @(1,2) radius 5]";
      assert.strictEqual(actual, expected);
    });
  });
});
