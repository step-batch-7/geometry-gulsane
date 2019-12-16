"use strict";
const Point = require("./point").Point;

const isWithinRange = function(range, value) {
  const [start, end] = range.sort();
  return value >= start && value <= end;
};

const arePointsColinear = function(point1, point2, point3) {
  const [x1, y1] = [point1.x, point1.y];
  const [x2, y2] = [point2.x, point2.y];
  const [x3, y3] = [point3.x, point3.y];
  return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) == 0;
};

const getPoint = function(point1, point2, ratio) {
  if (ratio < 0 || ratio > 1) return null;
  const x = (1 - ratio) * point1.x + ratio * point2.x;
  const y = (1 - ratio) * point1.y + ratio * point2.y;
  return new Point(x, y);
};

class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  toString() {
    return `[Line (${this.start.x},${this.start.y}) to (${this.end.x},${this.end.y})]`;
  }
  isEqualTo(otherLine) {
    if (this === otherLine) return true;
    if (!(otherLine instanceof Line)) {
      return false;
    }
    return (
      this.start.isEqualTo(otherLine.start) && this.end.isEqualTo(otherLine.end)
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
    const firstPart = new Line(
      new Point(this.start.x, this.start.y),
      new Point(middleXCoordinate, middleYCoordinate)
    );
    const secondPart = new Line(
      new Point(middleXCoordinate, middleYCoordinate),
      new Point(this.end.x, this.end.y)
    );
    return [firstPart, secondPart];
  }
  findPointFromStart(distance) {
    const ratio = distance / this.length;
    const [point1, point2] = [this.start, this.end];
    const point = getPoint(point1, point2, ratio);
    return point;
  }
  findPointFromEnd(distance) {
    const ratio = distance / this.length;
    const [point2, point1] = [this.start, this.end];
    const point = getPoint(point1, point2, ratio);
    return point;
  }
}

module.exports.Line = Line;
