const Point = require("./point");
const Line = require("./line");

const getVertexBandD = function(vertexA, vertexC) {
  return [new Point(vertexA.x, vertexC.y), new Point(vertexC.x, vertexA.y)];
};

const giveAdjacentEdges = function(vertexA, vertexC) {
  const [vertexB, vertexD] = getVertexBandD(vertexA, vertexC);
  const edgeAB = new Line(vertexA, vertexB);
  const edgeBC = new Line(vertexB, vertexC);
  const edgeCD = new Line(vertexC, vertexD);
  const edgeDA = new Line(vertexD, vertexA);
  return [edgeAB, edgeBC, edgeCD, edgeDA];
};

class Rectangle {
  constructor(vertexA, vertexC) {
    this.vertexA = new Point(vertexA.x, vertexA.y);
    this.vertexC = new Point(vertexC.x, vertexC.y);
  }
  toString() {
    const vertexA = `(${this.vertexA.x},${this.vertexA.y})`;
    const vertexC = `(${this.vertexC.x},${this.vertexC.y})`;
    return `[Rectangle ${vertexA} to ${vertexC}]`;
  }
  get length() {
    return Math.abs(this.vertexA.x - this.vertexC.x);
  }
  get width() {
    return Math.abs(this.vertexA.y - this.vertexC.y);
  }
  get area() {
    return this.length * this.width;
  }
  get perimeter() {
    return 2 * (this.length + this.width);
  }
  isEqualTo(shape) {
    if (this === shape) return true;
    if (!(shape instanceof Rectangle)) return false;
    const [vertexB, vertexD] = getVertexBandD(this.vertexA, this.vertexC);
    const diagonal1 = new Line(this.vertexA, this.vertexC);
    const diagonal2 = new Line(vertexB, vertexD);
    const diagonalToCompare = new Line(shape.vertexA, shape.vertexC);
    return (
      diagonal1.isEqualTo(diagonalToCompare) ||
      diagonal2.isEqualTo(diagonalToCompare)
    );
  }
  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const [edgeAB, edgeBC, edgeCD, edgeDA] = giveAdjacentEdges(
      this.vertexA,
      this.vertexC
    );
    return (
      edgeAB.hasPoint(point) ||
      edgeBC.hasPoint(point) ||
      edgeCD.hasPoint(point) ||
      edgeDA.hasPoint(point)
    );
  }
}

module.exports = Rectangle;
