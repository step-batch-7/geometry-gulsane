const assert = require("assert");
const Line = require("../src/line.js").Line;

describe("line", () => {
  it("should return string when line.to string is called", () => {
    const actualValue = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
    const expectedValue = "line:(0,0),(1,1)";
    assert.deepStrictEqual(actualValue.toString(), expectedValue);
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
