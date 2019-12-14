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
}

module.exports.Point = Point;
