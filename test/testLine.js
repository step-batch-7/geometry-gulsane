const assert = require("assert");
const Line = require("../src/line.js").Line;

describe("line", () => {
  it("should return string when line.to string is called", () => {
    const actualValue = new Line(0, 0, 0, 0);
    const expectedValue = "line:(0,0),(0,0)";
    assert.deepStrictEqual(actualValue.toString(), expectedValue);
  });
  it("should return true if instance and fields of both lines are equal", () => {
    const line1 = new Line(0, 0, 0, 0);
    const line2 = new Line(0, 0, 0, 0);
    const actualValue = line1.isEqual(line2);
    const expectedValue = true;
    assert.deepStrictEqual(actualValue, expectedValue);
  });
  it("should return false if instance of both lines are not equal", () => {
    const line1 = new Line(0, 0, 0, 0);
    const line2 = { x1: 0, y1: 0, x2: 0, y2: 0 };
    const actualValue = line1.isEqual(line2);
    const expectedValue = false;
    assert.deepStrictEqual(actualValue, expectedValue);
  });
  it("should return false if the fields of both the lines are not equal", () => {
    const line1 = new Line(0, 0, 0, 0);
    const line2 = new Line(0, 2, 3, 2);
    const actualValue = line1.isEqual(line2);
    const expectedValue = false;
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
