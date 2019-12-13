const assert = require("chai").assert;
const Line = require("../src/line.js").Line;

describe("Line", () => {
  describe("toString", () => {
    it("should return string when tiString method is called", () => {
      const actualValue = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const expectedValue = "line:(0,0),(1,1)";
      assert.deepStrictEqual(actualValue.toString(), expectedValue);
    });
  });
  describe("isEqual", () => {
    it("should return true when the reference of both the lines are same", () => {
      const line1 = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const actualValue = line1.isEqual(line1);
      const expectedValue = true;
      assert.deepStrictEqual(actualValue, expectedValue);
    });

    it("should return true if instance and fields of both lines are equal", () => {
      const line1 = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const line2 = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const actualValue = line1.isEqual(line2);
      const expectedValue = true;
      assert.deepStrictEqual(actualValue, expectedValue);
    });
    it("should return false if instance of both lines are not equal", () => {
      const line1 = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const line2 = { endA: { x: 0, y: 0 }, endB: { x: 0, y: 0 } };
      const actualValue = line1.isEqual(line2);
      const expectedValue = false;
      assert.deepStrictEqual(actualValue, expectedValue);
    });
    it("should return false if the fields of both the lines are not equal", () => {
      const line1 = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const line2 = new Line({ x: 9, y: 4 }, { x: 1, y: 1 });
      const actualValue = line1.isEqual(line2);
      const expectedValue = false;
      assert.deepStrictEqual(actualValue, expectedValue);
    });
  });
  describe("length", () => {
    it("should validate the length when the value of coordinates is positive", () => {
      const line = new Line({ x: 0, y: 0 }, { x: 0, y: 0 });
      const actualValue = line.length;
      const expectedValue = 0;
      assert.strictEqual(actualValue, expectedValue);
    });
    it("should validate the length when the value of coordinates is positive and length value is perfect square", () => {
      const line = new Line({ x: 0, y: 0 }, { x: 0, y: 9 });
      const actualValue = line.length;
      const expectedValue = 9;
      assert.strictEqual(actualValue, expectedValue);
    });
    it("should validate the length when the value of coordinates is negative", () => {
      const line = new Line({ x: 0, y: 0 }, { x: 0, y: -9 });
      const actualValue = line.length;
      const expectedValue = 9;
      assert.strictEqual(actualValue, expectedValue);
    });
    it("should validate floating value of length of given line segment", () => {
      const line = new Line({ x: 2, y: 0 }, { x: 0, y: 2 });
      const actualValue = line.length;
      const expectedValue = 2.5;
      assert.closeTo(actualValue, expectedValue, 0.5);
    });
  });
});
