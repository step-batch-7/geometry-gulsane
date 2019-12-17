const Point = require("./point").Point;

class Circle {
  constructor(centre, radius) {
    this.centre = new Point(centre.x, centre.y);
    this.radius = radius;
  }
  toString() {
    return `[Circle @(${this.centre.x},${this.centre.y}) radius ${this.radius}]`;
  }
  isEqualTo(otherCircle) {
    if (this === otherCircle) return true;
    if (!(otherCircle instanceof Circle)) return false;
    return (
      this.radius == otherCircle.radius &&
      this.centre.isEqualTo(otherCircle.centre)
    );
  }
  get area() {
    return Math.PI * this.radius * this.radius;
  }
  get perimeter() {
    return ((2 * 22) / 7) * this.radius;
  }
  hasPoint(otherPoint) {
    if (!(otherPoint instanceof Point)) return false;
    return this.centre.findDistanceTo(otherPoint) == this.radius;
  }
}

module.exports.Circle = Circle;
