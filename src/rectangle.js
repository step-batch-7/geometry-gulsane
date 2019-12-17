const Point = require("./point");
const Line = require("./line");

class Rectangle {
  constructor(topLeft, bottomRight) {
    this.topLeft = new Point(topLeft.x, topLeft.y);
    this.bottomRight = new Point(bottomRight.x, bottomRight.y);
  }
  toString() {
    const topLeft = `(${this.topLeft.x},${this.topLeft.y})`;
    const bottomRight = `(${this.bottomRight.x},${this.bottomRight.y})`;
    return `[Rectangle ${topLeft} to ${bottomRight}]`;
  }
  get length() {
    return Math.abs(this.topLeft.x - this.bottomRight.x);
  }
  get width() {
    return Math.abs(this.topLeft.y - this.bottomRight.y);
  }
  get area() {
    return this.length * this.width;
  }
  get perimeter() {
    return 2 * (this.length + this.width);
  }
  isEqualTo(otherRectangle) {
    if (this === otherRectangle) return true;
    const diagonal1 = new Line({ x: this.topLeft.x, y: this.topLeft.y }, {});
  }
}

module.exports = Rectangle;
