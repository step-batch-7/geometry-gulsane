const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");

describe("Rectangle", () => {
  describe("toString", () => {
    it("should return string ", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const actual = rectangle.toString();
      const expected = "[Rectangle (1,1) to (2,3)]";
      assert.strictEqual(actual, expected);
    });
  });
  describe("area", () => {
    it("should return area of the rectangle for positive coordinates", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 4, y: 4 });
      assert.strictEqual(rectangle.area, 16);
    });
    it("should return area of the rectangle for negative coordinates", () => {
      const rectangle = new Rectangle({ x: -2, y: 3 }, { x: 3, y: -3 });
      assert.strictEqual(rectangle.area, 30);
    });
    it("should return area of the rectangle 0 for same coordinates", () => {
      const rectangle = new Rectangle({ x: -2, y: 3 }, { x: -2, y: 3 });
      assert.strictEqual(rectangle.area, 0);
    });
    it("should return area of the rectangle 0 for horizontal diagonal", () => {
      const rectangle = new Rectangle({ x: 4, y: 3 }, { x: 8, y: 3 });
      assert.strictEqual(rectangle.area, 0);
    });
    it("should return area of the rectangle 0 for vertical diagonal", () => {
      const rectangle = new Rectangle({ x: 3, y: 3 }, { x: 3, y: 9 });
      assert.strictEqual(rectangle.area, 0);
    });
  });
  describe("perimeter", () => {
    it("should return perimeter of the rectangle for positive coordinates", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 4, y: 4 });
      assert.strictEqual(rectangle.perimeter, 16);
    });
    it("should return perimeter of the rectangle for negative coordinates", () => {
      const rectangle = new Rectangle({ x: -2, y: 3 }, { x: 3, y: -3 });
      assert.strictEqual(rectangle.perimeter, 22);
    });
    it("should return perimeter of the rectangle 0 for same coordinates", () => {
      const rectangle = new Rectangle({ x: -2, y: 3 }, { x: -2, y: 3 });
      assert.strictEqual(rectangle.perimeter, 0);
    });
    it("should return perimeter of the rectangle for horizontal diagonal", () => {
      const rectangle = new Rectangle({ x: 4, y: 3 }, { x: 8, y: 3 });
      assert.strictEqual(rectangle.perimeter, 8);
    });
    it("should return perimeter of the rectangle for vertical diagonal", () => {
      const rectangle = new Rectangle({ x: 3, y: 3 }, { x: 3, y: 9 });
      assert.strictEqual(rectangle.perimeter, 12);
    });
  });
  describe("isEqualTo", () => {
    it("should validate the rectangles if both has same reference", () => {
      const rectangle = new Rectangle({ x: 3, y: 3 }, { x: 3, y: 9 });
      assert.isOk(rectangle.isEqualTo(rectangle));
    });
  });
});
