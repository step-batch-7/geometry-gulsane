const Point = require("./point").Point;

const arePointsEqual = function(point1, point2) {
  return point1.x == point2.x && point1.y == point2.y;
};

const isWithinRange = function(range, value) {
  const [start, end] = range.sort();
  return value >= start && value <= end;
};

const arePointsColinear = function(point1, point2, point3) {
  [x1, y1] = [point1.x, point1.y];
  [x2, y2] = [point2.x, point2.y];
  [x3, y3] = [point3.x, point3.y];
  return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) == 0;
};

class Line {
  constructor(start, end) {
    this.start = { x: start.x, y: start.y };
    this.end = { x: end.x, y: end.y };
  }
  toString() {
    return `line:(${this.start.x},${this.start.y}),(${this.end.x},${this.end.y})`;
  }
  isEqualTo(otherLine) {
    if (this === otherLine) return true;
    if (!(otherLine instanceof Line)) {
      return false;
    }
    return (
      arePointsEqual(this.start, otherLine.start) &&
      arePointsEqual(this.end, otherLine.end)
    );
  }
  get length() {
    const dx = this.start.x - this.end.x;
    const dy = this.start.y - this.end.y;
    return Math.hypot(dx, dy);
  }
  isParallelTo(otherLine) {
    return (
      otherLine instanceof Line &&
      this.slope == otherLine.slope &&
      !arePointsColinear(this.start, this.end, otherLine.start)
    );
  }
  get slope() {
    const dx = this.start.x - this.end.x;
    const dy = this.start.y - this.end.y;
    return dy / dx;
  }
  findX(y) {
    if (!isWithinRange([this.start.y, this.end.y], y)) return NaN;
    if (this.start.y == this.end.y) return this.start.x;
    const yIntercept = this.start.y - this.start.x / this.slope;
    return (y - yIntercept) / this.slope;
  }
  findY(x) {
    if (!isWithinRange([this.start.x, this.end.x], x)) return NaN;
    if (this.start.x == this.end.x) return this.start.y;
    const yIntercept = this.start.y - this.start.x / this.slope;
    return this.slope * x + yIntercept;
  }
  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const isXWithinRange = isWithinRange([this.start.x, this.end.x], point.x);
    const isYWithinRange = isWithinRange([this.start.y, this.end.y], point.y);
    if (isXWithinRange && isYWithinRange) {
      const slopeOfPoint = (this.start.y - point.y) / (this.start.x - point.x);
      return this.slope == slopeOfPoint;
    }
    return false;
  }

  split() {
    const middleXCoordinate = (this.start.x + this.end.x) / 2;
    const middleYCoordinate = (this.start.y + this.end.y) / 2;
    const middlePoint = { x: middleXCoordinate, y: middleYCoordinate };
    const firstPart = new Line(this.start, middlePoint);
    const secondPart = new Line(middlePoint, this.end);
    return [firstPart, secondPart];
  }
}

module.exports.Line = Line;
