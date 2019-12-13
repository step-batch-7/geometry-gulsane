const arePointsEqual = function(point1, point2) {
  return point1.x == point2.x && point1.y == point2.y;
};

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
    const differenceOfAbscissas = this.endA.x - this.endB.x;
    const differenceOfOrdinates = this.endA.y - this.endB.y;
    const squareOfDifferenceOfAbscissa = differenceOfAbscissas ** 2;
    const squareOfDifferenceOfOrdinates = differenceOfOrdinates ** 2;
    const distance = Math.sqrt(
      squareOfDifferenceOfAbscissa + squareOfDifferenceOfOrdinates
    );
    return distance;
  }
  isParallelTo(otherLine) {
    if (otherLine instanceof Line) {
      return this.slope === otherLine.slope;
    }
    return false;
  }
  get slope() {
    const differenceOfAbscissas = this.endA.x - this.endB.x;
    const differenceOfOrdinates = this.endA.y - this.endB.y;
    return differenceOfOrdinates / differenceOfAbscissas;
  }
}

module.exports.Line = Line;
