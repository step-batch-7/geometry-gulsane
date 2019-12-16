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
  isEqualTo(point) {
    if (this === point) return true;
    return this.x == point.x && this.y == point.y;
  }
  clone() {
    return new Point(this.x, this.y);
  }
  findDistanceTo(point) {
    if (!(point instanceof Point)) return NaN;
    if (this === point) return 0;
    const dx = this.x - point.x;
    const dy = this.y - point.y;
    return Math.hypot(dx, dy);
  }
}

module.exports.Point = Point;
