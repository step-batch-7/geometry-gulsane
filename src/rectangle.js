const Point = require("./point");

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
  get area() {
    const length = Math.abs(this.topLeft.x - this.bottomRight.x);
    const width = Math.abs(this.topLeft.y - this.bottomRight.y);
    return length * width;
  }
  get perimeter() {
    const length = Math.abs(this.topLeft.x - this.bottomRight.x);
    const width = Math.abs(this.topLeft.y - this.bottomRight.y);
    return 2 * (length + width);
  }
}

module.exports = Rectangle;
