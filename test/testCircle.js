"use strict";

const assert = require("chai").assert;
const Circle = require("../src/circle");
const Point = require("../src/point");

describe("Circle", () => {
  describe("toString", () => {
    it("should return string ", () => {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const actual = circle.toString();
      const expected = "[Circle @(1,2) radius 5]";
      assert.strictEqual(actual, expected);
    });
  });
  describe("isEqualTo", () => {
    it("should validate if both the circles have same reference", () => {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const actual = circle.isEqualTo(circle);
      assert.isOk(actual);
    });
    it("should invalidate if both the circles have not same instance", () => {
      const circle1 = new Circle({ x: 1, y: 2 }, 5);
      const circle2 = { centre: { x: 1, y: 2 }, radius: 5 };
      const actual = circle1.isEqualTo(circle2);
      assert.isNotOk(actual);
    });
    it("should validate the circle which have same instance and fields values", () => {
      const circle1 = new Circle({ x: 1, y: 2 }, 5);
      const circle2 = new Circle({ x: 1, y: 2 }, 5);
      const actual = circle1.isEqualTo(circle2);
      assert.isOk(actual);
    });
    it("should invalidate the circle which have different centres", () => {
      const circle1 = new Circle({ x: 1, y: 2 }, 5);
      const circle2 = new Circle({ x: 1, y: 8 }, 5);
      const actual = circle1.isEqualTo(circle2);
      assert.isNotOk(actual);
    });
    it("should invalidate the circle which have different radius", () => {
      const circle1 = new Circle({ x: 1, y: 2 }, 5);
      const circle2 = new Circle({ x: 1, y: 2 }, 4);
      const actual = circle1.isEqualTo(circle2);
      assert.isNotOk(actual);
    });
  });
  describe("area", () => {
    it("should give area of the circle", () => {
      const circle = new Circle({ x: 0, y: 0 }, 7);
      const actual = circle.area;
      assert.approximately(circle.area, 154, 0.1);
    });
    it("should validate the floating numbers", () => {
      const circle = new Circle({ x: 2, y: 6 }, 1);
      const actual = circle.area;
      assert.approximately(actual, 3, 0.5);
    });
    it("should return the area 0 when the radius is zero", () => {
      const circle = new Circle({ x: 2, y: 6 }, 0);
      const actual = circle.area;
      assert.strictEqual(actual, 0);
    });
  });
  describe("perimeter", () => {
    it("should return the perimeter of the circle", () => {
      const circle = new Circle({ x: 9, y: 8 }, 7);
      const actual = circle.perimeter;
      assert.strictEqual(actual, 44);
    });
  });
  describe("hasPoint", () => {
    it("should invalidate the point if it not the instance of the class Point", () => {
      const circle = new Circle({ x: 0, y: 0 }, 7);
      const actual = circle.hasPoint({ x: 0, y: 7 });
      assert.isNotOk(actual);
    });
    it("should validate the point if it is on the circle", () => {
      const circle = new Circle({ x: 0, y: 0 }, 7);
      const actual = circle.hasPoint(new Point(0, 7));
      assert.isOk(actual);
    });
    it("should invalidate the point if it is not on the circle", () => {
      const circle = new Circle({ x: 0, y: 0 }, 7);
      const actual = circle.hasPoint(new Point(9, 0));
      assert.isNotOk(actual);
    });
  });
});
