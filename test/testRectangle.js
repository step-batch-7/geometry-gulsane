const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");
const Point = require("../src/point");

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
    it("should invalidate the rectangle if it is not the instance of it", () => {
      const rectangle1 = new Rectangle({ x: 3, y: 3 }, { x: 3, y: 9 });
      const rectangle2 = { vertexA: { x: 3, y: 3 }, vertexB: { x: 3, y: 9 } };
      assert.isNotOk(rectangle1.isEqualTo(rectangle2));
    });
    it("should validate if coordinates of both diagonals are equal", () => {
      const rectangle1 = new Rectangle({ x: 3, y: 3 }, { x: 3, y: 9 });
      const rectangle2 = new Rectangle({ x: 3, y: 3 }, { x: 3, y: 9 });
      assert.isOk(rectangle1.isEqualTo(rectangle2));
    });
    it("should validate if the coordinate of diagonal is equal to second diagonal", () => {
      const rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 9 });
      const rectangle2 = new Rectangle({ x: 0, y: 9 }, { x: 3, y: 0 });
      assert.isOk(rectangle1.isEqualTo(rectangle2));
    });
    it("should validate the rectangle if diagonals are equal but coordinates are altered", () => {
      const rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 9 });
      const rectangle2 = new Rectangle({ x: 3, y: 9 }, { x: 0, y: 0 });
      assert.isOk(rectangle1.isEqualTo(rectangle2));
    });
  });
  describe("hasPoint", () => {
    it("should invalidate the point if it not instance of Point", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 9 });
      assert.isNotOk(rectangle.hasPoint({ x: 0, y: 2 }));
    });
    it("should validate the point which is on the circumference of rectangle", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 9 });
      const point = new Point(2, 0);
      assert.isOk(rectangle.hasPoint(point));
    });
    it("should invalidate the point which is outside the circumference of rectangle", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 9 });
      const point = new Point(4, 3);
      assert.isNotOk(rectangle.hasPoint(point));
    });
    it("should invalidate the point which is inside the circumference of rectangle", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 9 });
      const point = new Point(1, 1);
      assert.isNotOk(rectangle.hasPoint(point));
    });
  });
  describe("covers", () => {
    it("should invalidate the point if it is not instance of Point", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 9 });
      const point = { x: 0, y: 2 };
      assert.isNotOk(rectangle.covers(point));
    });
    it("should validate when the point is inside the rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 9 });
      const point = new Point(2, 3);
      assert.isOk(rectangle.covers(point));
    });
    it("should invalidate when the point is outside the rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 9 });
      const point = new Point(8, 3);
      assert.isNotOk(rectangle.covers(point));
    });
    it("should invalidate when point is on the circumference of the rectangle", () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 9 });
      const point = new Point(0, 2);
      assert.isNotOk(rectangle.covers(point));
    });
  });
});
