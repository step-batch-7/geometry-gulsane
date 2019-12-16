class Circle {
  constructor(centre, radius) {
    this.centre = centre;
    this.radius = radius;
  }
  toString() {
    return `[Circle @(${this.centre.x},${this.centre.y}) radius ${this.radius}]`;
  }
  isEqualTo(otherCircle) {
    if (this === otherCircle) return true;
    if (!(otherCircle instanceof Circle)) return false;
    return (
      this.radius == otherCircle.radius &&
      this.centre.isEqualTo(otherCircle.centre)
    );
  }
  get area() {
    const area = (22 / 7) * this.radius ** 2;
    return area;
  }
}

module.exports.Circle = Circle;
