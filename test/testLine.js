const assert = require("chai").assert;
const Line = require("../src/line.js").Line;

describe("Line", () => {
  describe("toString", () => {
    it("should return string when tiString method is called", () => {
      const actual = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const expected = "line:(0,0),(1,1)";
      assert.deepStrictEqual(actual.toString(), expected);
    });
  });
  describe("isEqual", () => {
    it("should return true when the reference of both the lines are same", () => {
      const line1 = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const actual = line1.isEqual(line1);
      const expected = true;
      assert.deepStrictEqual(actual, expected);
    });

    it("should return true if instance and fields of both lines are equal", () => {
      const line1 = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const line2 = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const actual = line1.isEqual(line2);
      const expected = true;
      assert.deepStrictEqual(actual, expected);
    });
    it("should return false if instance of both lines are not equal", () => {
      const line1 = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const line2 = { endA: { x: 0, y: 0 }, endB: { x: 0, y: 0 } };
      const actual = line1.isEqual(line2);
      const expected = false;
      assert.deepStrictEqual(actual, expected);
    });
    it("should return false if the fields of both the lines are not equal", () => {
      const line1 = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const line2 = new Line({ x: 9, y: 4 }, { x: 1, y: 1 });
      const actual = line1.isEqual(line2);
      const expected = false;
      assert.deepStrictEqual(actual, expected);
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
    it("should validate if line is parallel to other line", () => {
      const line1 = new Line({ x: 4, y: 6 }, { x: 2, y: 4 });
      const line2 = { endA: { x: 9, y: 12 }, endB: { x: 6, y: 9 } };
      const actual = line1.isParallelTo(line2);
      const expected = true;
      assert.strictEqual(actual, expected);
    });
    it("should validate if line is not parallel to other line", () => {
      const line1 = new Line({ x: 0, y: 9 }, { x: 0, y: 2 });
      const line2 = { endA: { x: 9, y: 12 }, endB: { x: 6, y: 9 } };
      const actual = line1.isParallelTo(line2);
      const expected = false;
      assert.strictEqual(actual, expected);
    });
    it("should validate if instance of two line is same", () => {
      const line1 = new Line({ x: 0, y: 9 }, { x: 0, y: 2 });
      const line2 = new Line({ x: 0, y: 9 }, { x: 0, y: 2 });
      const actual = line1.isParallelTo(line2);
      const expected = false;
      assert.deepStrictEqual(actual, expected);
    });
  });
});
