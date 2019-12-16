const Point = require("./point").Point;

const arePointsEqual = function(point1, point2) {
  return point1.x == point2.x && point1.y == point2.y;
};

const isWithinRange = function(range, value) {
  const [start, end] = range.sort();
  return value >= start && value <= end;
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }
  toString() {
    return `line:(${this.endA.x},${this.endA.y}),(${this.endB.x},${this.endB.y})`;
  }
  isEqualTo(otherLine) {
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
    if (!isWithinRange([this.endA.y, this.endB.y], y)) return NaN;
    if (this.endA.y == this.endB.y) return this.endA.x;
    const yIntercept = this.endA.y - this.endA.x / this.slope;
    return (y - yIntercept) / this.slope;
  }
  findY(x) {
    if (!isWithinRange([this.endA.x, this.endB.x], x)) return NaN;
    if (this.endA.x == this.endB.x) return this.endA.y;
    const yIntercept = this.endA.y - this.endA.x / this.slope;
    return this.slope * x + yIntercept;
  }
  hasPoint(point) {
    if (!point instanceof Point) return false;
    const isXWithinRange = isWithinRange([this.endA.x, this.endB.x], point.x);
    const isYWithinRange = isWithinRange([this.endA.y, this.endB.y], point.y);
    if (isXWithinRange && isYWithinRange) {
      const slopeOfPoint = (this.endA.y - point.y) / (this.endA.x - point.x);
      return this.slope == slopeOfPoint;
    }
    return false;
  }

  split() {
    const middleXCoordinate = (this.endA.x + this.endB.x) / 2;
    const middleYCoordinate = (this.endA.y + this.endB.y) / 2;
    const middlePoint = { x: middleXCoordinate, y: middleYCoordinate };
    const firstPart = new Line(this.endA, middlePoint);
    const secondPart = new Line(middlePoint, this.endB);
    return [firstPart, secondPart];
  }
}

module.exports.Line = Line;
