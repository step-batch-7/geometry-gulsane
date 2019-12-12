class Line {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  toString() {
    return `line:(${this.x1},${this.y1}),(${this.x2},${this.y2})`;
  }
  isEqual(otherLine) {
    const isX1Equal = this.x1 == otherLine.x1;
    const isY1Equal = this.y1 == otherLine.y1;
    const isX2Equal = this.x2 == otherLine.x2;
    const isY2Equal = this.y2 == otherLine.y2;
    const isTypeEqual = this instanceof Line && otherLine instanceof Line;
    return isX1Equal && isY1Equal && isX2Equal && isY2Equal && isTypeEqual;
  }
}

module.exports.Line = Line;
