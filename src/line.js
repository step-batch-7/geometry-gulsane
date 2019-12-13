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
    return (
      otherLine instanceof Line &&
      arePointsEqual(this.endA, otherLine.endA) &&
      arePointsEqual(this.endB, otherLine.endB)
    );
  }
}

module.exports.Line = Line;
