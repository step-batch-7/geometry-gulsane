const Line = require("./line").Line;

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }
  visit(funcReference) {
    return funcReference(this.x, this.y);
  }
  isEqualTo(otherPoint) {
    if (this === otherPoint) return true;
    if (!(otherPoint instanceof Point)) return false;
    return this.x == otherPoint.x && this.y == otherPoint.y;
  }
  clone() {
    return new Point(this.x, this.y);
  }
  findDistanceTo(otherPoint) {
    if (!(otherPoint instanceof Point)) return NaN;
    if (this === otherPoint) return 0;
    const dx = this.x - otherPoint.x;
    const dy = this.y - otherPoint.y;
    return Math.hypot(dx, dy);
  }
  isOn(shape) {
    return shape.hasPoint(this);
  }
}

module.exports.Point = Point;
