class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }
  visit(fn) {
    return fn(this.x, this.y);
  }
  isEqualTo(point) {
    if (this === point) return true;
    return this.x == point.x && this.y == point.y;
  }
}

module.exports.Point = Point;
