"use strict";
const Point = require("./point");

const isNumInRange = function(range, value) {
  const [start, end] = range.sort();
  return (value >= start && value <= end) || (value >= end && value <= start);
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
    this.start = new Point(start.x, start.y);
    this.end = new Point(end.x, end.y);
  }
  toString() {
    return `[Line (${this.start.x},${this.start.y}) to (${this.end.x},${this.end.y})]`;
  }
  isEqualTo(other) {
    if (this === other) return true;
    if (!(other instanceof Line)) {
      return false;
    }
    return (
      (this.start.isEqualTo(other.start) && this.end.isEqualTo(other.end)) ||
      (this.start.isEqualTo(other.end) && this.end.isEqualTo(other.start))
    );
  }
  get length() {
    const point1 = new Point(this.start.x, this.start.y);
    const point2 = new Point(this.end.x, this.end.y);
    return point1.findDistanceTo(point2);
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
    const slope = dy / dx;
    return slope == -Infinity ? Infinity : slope;
  }
  findX(y) {
    if (!isNumInRange([this.start.y, this.end.y], y)) return NaN;
    if (this.start.x == this.end.x) return this.start.x;
    if (this.start.y == this.end.y) return this.start.x;
    const yIntercept = this.start.y - this.start.x * this.slope;
    return (y - yIntercept) / this.slope;
  }
  findY(x) {
    if (!isNumInRange([this.start.x, this.end.x], x)) return NaN;
    if (this.start.y == this.end.y) return this.start.y;
    if (this.start.x == this.end.x) return this.start.y;
    const yIntercept = this.start.y - this.start.x * this.slope;
    return this.slope * x + yIntercept;
  }
  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const isXWithinRange = isNumInRange([this.start.x, this.end.x], point.x);
    const isYWithinRange = isNumInRange([this.start.y, this.end.y], point.y);
    return (
      isXWithinRange &&
      isYWithinRange &&
      arePointsColinear(this.start, this.end, point)
    );
  }

  split() {
    const middleXCoordinate = (this.start.x + this.end.x) / 2;
    const middleYCoordinate = (this.start.y + this.end.y) / 2;
    const firstPart = new Line(
      this.start,
      new Point(middleXCoordinate, middleYCoordinate)
    );
    const secondPart = new Line(
      new Point(middleXCoordinate, middleYCoordinate),
      this.end
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

module.exports = Line;
