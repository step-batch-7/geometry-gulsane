const arePointsEqual = function(point1, point2) {
  return point1.x == point2.x && point1.y == point2.y;
};
const findYIntercept = function(point) {};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }
  toString() {
    return `line:(${this.endA.x},${this.endA.y}),(${this.endB.x},${this.endB.y})`;
  }
  isEqual(otherLine) {
    if (this === otherLine) return true;
    if (!(otherLine instanceof Line)) {
      return false;
    }
    return (
      arePointsEqual(this.endA, otherLine.endA) &&
      arePointsEqual(this.endB, otherLine.endB)
    );
  }
  get length() {
    const dx = this.endA.x - this.endB.x;
    const dy = this.endA.y - this.endB.y;
    return Math.hypot(dx, dy);
  }
  isParallelTo(otherLine) {
    return otherLine instanceof Line && this.slope == otherLine.slope;
  }
  get slope() {
    const dx = this.endA.x - this.endB.x;
    const dy = this.endA.y - this.endB.y;
    return dy / dx;
  }
  findX(y) {
    if (
      !(
        (this.endA.y <= y && y <= this.endB.y) ||
        (this.endB.y <= y && y <= this.endA.y)
      )
    ) {
      return NaN;
    }
    const yIntercept = this.endA.y - this.endA.x / this.slope;
    return (y - yIntercept) / this.slope;
  }
}

module.exports.Line = Line;
