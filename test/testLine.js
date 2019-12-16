const assert = require("chai").assert;
const Line = require("../src/line.js").Line;
const Point = require("../src/point").Point;

describe("Line", () => {
  describe("toString", () => {
    it("should return string when tiString method is called", () => {
      const actual = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const expected = "line:(0,0),(1,1)";
      assert.deepStrictEqual(actual.toString(), expected);
    });
  });
  describe("isEqualTo", () => {
    it("should return true when the reference of both the lines are same", () => {
      const line1 = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const actual = line1.isEqualTo(line1);
      assert.isOk(actual);
    });

    it("should return true if instance and fields of both lines are equal", () => {
      const line1 = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const line2 = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const actual = line1.isEqualTo(line2);
      assert.isOk(actual);
    });
    it("should return false if instance of both lines are not equal", () => {
      const line1 = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const line2 = { endA: { x: 0, y: 0 }, endB: { x: 0, y: 0 } };
      const actual = line1.isEqualTo(line2);
      const expected = false;
      assert.isNotOk(actual);
    });
    it("should return false if the fields of both the lines are not equal", () => {
      const line1 = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const line2 = new Line({ x: 9, y: 4 }, { x: 1, y: 1 });
      const actual = line1.isEqualTo(line2);
      const expected = false;
      assert.isNotOk(actual);
    });
  });
  describe("length", () => {
    it("should validate the length when the value of coordinates is positive", () => {
      const line = new Line({ x: 0, y: 0 }, { x: 0, y: 0 });
      const actual = line.length;
      const expected = 0;
      assert.strictEqual(actual, expected);
    });
    it("should validate the length when the value of coordinates is positive and length value is perfect square", () => {
      const line = new Line({ x: 0, y: 0 }, { x: 0, y: 9 });
      const actual = line.length;
      const expected = 9;
      assert.strictEqual(actual, expected);
    });
    it("should validate the length when the value of coordinates is negative", () => {
      const line = new Line({ x: 0, y: 0 }, { x: 0, y: -9 });
      const actual = line.length;
      const expected = 9;
      assert.strictEqual(actual, expected);
    });
    it("should validate floating value of length of given line segment", () => {
      const line = new Line({ x: 2, y: 0 }, { x: 0, y: 2 });
      const actual = line.length;
      const expected = 2.5;
      assert.closeTo(actual, expected, 0.5);
    });
  });
  describe("isParallelTo", () => {
    it("should validate if both the lines are instance of same class(Line)", () => {
      const line1 = new Line({ x: 4, y: 6 }, { x: 2, y: 4 });
      const line2 = new Line({ x: 9, y: 12 }, { x: 6, y: 9 });
      const actual = line1.isParallelTo(line2);
      assert.isOk(actual);
    });
    it("should validate if both the lines are not instance of same class(Line)", () => {
      const line1 = new Line({ x: 4, y: 6 }, { x: 2, y: 4 });
      const line2 = { endA: { x: 0, y: 0 }, endB: { x: 0, y: 0 } };
      const actual = line1.isParallelTo(line2);
      assert.isNotOk(actual);
    });
    it("should validate if both the lines are not parallel but have same instance", () => {
      const line1 = new Line({ x: 0, y: 9 }, { x: 0, y: 2 });
      const line2 = new Line({ x: 9, y: 12 }, { x: 6, y: 9 });
      const actual = line1.isParallelTo(line2);
      assert.isNotOk(actual);
    });
    it("should validate if both the lines are parallel and have same instance", () => {
      const line1 = new Line({ x: 4, y: 6 }, { x: 2, y: 4 });
      const line2 = new Line({ x: 9, y: 12 }, { x: 6, y: 9 });
      const actual = line1.isParallelTo(line2);
      assert.isOk(actual);
    });
  });
  describe("slope", () => {
    it("should validate the slope value when it is positive integer", () => {
      const line = new Line({ x: 2, y: 3 }, { x: 0, y: 1 });
      const actual = line.slope;
      const expected = 1;
      assert.strictEqual(actual, expected);
    });
    it("should validate the slope value when it is negative integer", () => {
      const line = new Line({ x: 2, y: 1 }, { x: 0, y: 5 });
      const actual = line.slope;
      const expected = -2;
      assert.strictEqual(actual, expected);
    });
    it("should validate the slope value when it is floating decimal number", () => {
      const line = new Line({ x: 4, y: 9 }, { x: 1, y: 2 });
      const actual = line.slope;
      const expected = 2;
      assert.closeTo(actual, expected, 0.5);
    });
    it("should validate the slope value when it is infinite", () => {
      const line = new Line({ x: 0, y: 9 }, { x: 0, y: 2 });
      const actual = line.slope;
      const expected = Infinity;
      assert.deepStrictEqual(actual, expected);
    });
  });
  describe("findX", () => {
    it("should return x for given y for a horizontal line if y is in range", () => {
      const line = new Line({ x: -2, y: 4 }, { x: 8, y: 4 });
      const actual = line.findX(4);
      const expected = -2;
      assert.strictEqual(actual, expected);
    });
    it("should return NaN for given y for a horizontal line if y is not in range", () => {
      const line = new Line({ x: -2, y: 4 }, { x: 8, y: 4 });
      const actual = line.findX(8);
      assert.isNaN(actual);
    });
    it("should return x for the given value of y if y is within the range of line segment", () => {
      const line = new Line({ x: 8, y: 4 }, { x: 5, y: 1 });
      const actual = line.findX(3);
      const expected = 7;
      assert.strictEqual(actual, expected);
    });
    it("should return Nan for the given value of y if y is not within the range of line segment", () => {
      const line = new Line({ x: 8, y: 4 }, { x: 5, y: 1 });
      const actual = line.findX(0);
      assert.isNaN(actual);
    });
  });
  describe("findY", () => {
    it("should return y of first point for vertical line if given x is in range of line", () => {
      const line = new Line({ x: 3, y: 4 }, { x: 3, y: -8 });
      const actual = line.findY(3);
      const expected = 4;
      assert.strictEqual(actual, expected);
    });
    it("should return NaN for vertical line if given x is not in range of line", () => {
      const line = new Line({ x: 3, y: 4 }, { x: 3, y: -8 });
      const actual = line.findY(7);
      assert.isNaN(actual);
    });
    it("should return y for the given value of x if x is within the range of line segment", () => {
      const line = new Line({ x: 8, y: 4 }, { x: 5, y: 1 });
      const actual = line.findY(6);
      const expected = 2;
      assert.deepStrictEqual(actual, expected);
    });
    it("should return y for the given value of x if x is not within the range of line segment", () => {
      const line = new Line({ x: 8, y: 4 }, { x: 5, y: 1 });
      const actual = line.findY(10);
      assert.isNaN(actual);
    });
  });
  describe("hasPoint", () => {
    it("should not validate if point is not instanceof class Point", () => {
      const line = new Line({ x: 0, y: 0 }, { x: 10, y: 0 });
      const actual = line.hasPoint({ m: 2, n: 7 });
      assert.isNotOk(actual);
    });
    it("should not validate if point is out of the range of line segment", () => {
      const line = new Line({ x: 0, y: 0 }, { x: 10, y: 0 });
      const point = new Point(14, 0);
      const actual = line.hasPoint(point);
      assert.isNotOk(actual);
    });
    it("should validate if point is within range of the line segment and collinear", () => {
      const line = new Line({ x: 0, y: 0 }, { x: 10, y: 0 });
      const point = new Point(5, 0);
      const actual = line.hasPoint(point);
      assert.isOk(actual);
    });
  });
  describe("split", () => {
    it("should return two lines of equal distance of horizontal line", () => {
      const line = new Line({ x: 0, y: 0 }, { x: 10, y: 0 });
      const actual = line.split();
      const firstLine = new Line({ x: 0, y: 0 }, { x: 5, y: 0 });
      const secondLine = new Line({ x: 5, y: 0 }, { x: 10, y: 0 });
      assert.isOk(actual[0].isEqualTo(firstLine));
      assert.isOk(actual[1].isEqualTo(secondLine));
    });
    it("should return two lines of equal distance of vertical line", () => {
      const line = new Line({ x: 0, y: 0 }, { x: 0, y: 10 });
      const actual = line.split();
      const firstLine = new Line({ x: 0, y: 0 }, { x: 0, y: 5 });
      const secondLine = new Line({ x: 0, y: 5 }, { x: 0, y: 10 });
      assert.isOk(actual[0].isEqualTo(firstLine));
      assert.isOk(actual[1].isEqualTo(secondLine));
    });
    it("should return two lines of equal distance with negative coordinates", function() {
      const line = new Line({ x: -4, y: 3 }, { x: 6, y: 8 });
      const firstLine = new Line({ x: -4, y: 3 }, { x: 1, y: 5.5 });
      const secondLine = new Line({ x: 1, y: 5.5 }, { x: 6, y: 8 });
      const actual = line.split();
      assert.isOk(actual[0].isEqualTo(firstLine));
      assert.isOk(actual[1].isEqualTo(secondLine));
    });
  });
});
