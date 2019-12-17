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
}

module.exports = Rectangle;
