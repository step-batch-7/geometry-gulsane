const arePointsEqual = function(point1, point2) {
  return point1.x == point2.x && point1.y == point2.y;
};

const isTypeEqual = function(line1, line2) {
  return line1 instanceof Line && line2 instanceof Line;
};

class Line {
  constructor(endA, endB) {
    this.endA = endA;
    this.endB = endB;
  }
  toString() {
    return `line:(${this.endA.x},${this.endA.y}),(${this.endB.x},${this.endB.y})`;
  }
  isEqual(otherLine) {
    const isTypeOfBothLineEqual = isTypeEqual(this, otherLine);
    const areEndAEqual = arePointsEqual(this.endA, otherLine.endA);
    const areEndBEqual = arePointsEqual(this.endB, otherLine.endB);
    return areEndAEqual && areEndBEqual && isTypeOfBothLineEqual;
  }
}

module.exports.Line = Line;
