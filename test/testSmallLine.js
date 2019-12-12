const assert = require("assert");
const Line = require("../src/line.js").Line;

describe("line", () => {
  it("should give return string when line.to string is called", () => {
    const actualValue = new Line(0, 0, 0, 0);
    const expectedValue = "{x1:0,y1:0,x2:0,y2:0}";
    assert.deepStrictEqual(actualValue.toString(), expectedValue);
  });
  it("should compare two line segments and return true if they are equal", () => {
    const line1 = new Line(0, 0, 0, 0);
    const line2 = new Line(0, 0, 0, 0);
    const actualValue = line1.isEqual(line2);
    const expectedValue = true;
    assert.deepStrictEqual(actualValue, expectedValue);
  });
  it("should compare two line segments and return false if they are equal", () => {
    const line1 = new Line(0, 0, 0, 0);
    const line2 = new Line(0, 0, 1, 0);
    const actualValue = line1.isEqual(line2);
    const expectedValue = false;
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
