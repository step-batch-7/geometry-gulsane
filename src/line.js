class Line {
  constructor(endA, endB) {
    this.endA = endA;
    this.endB = endB;
  }
  toString() {
    return `line:(${this.endA.x},${this.endA.y}),(${this.endB.x},${this.endB.y})`;
  }
  isEqual(otherLine) {
    const isX1Equal = this.endA.x == otherLine.endA.x;
    const isY1Equal = this.endA.y == otherLine.endA.y;
    const isX2Equal = this.endB.x == otherLine.endB.x;
    const isY2Equal = this.endB.y == otherLine.endB.y;
    const isTypeEqual = this instanceof Line && otherLine instanceof Line;
    return isX1Equal && isY1Equal && isX2Equal && isY2Equal && isTypeEqual;
  }
}

module.exports.Line = Line;
