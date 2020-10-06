/* Circle.js
Write and export by default Circle class that has argumented raduis and getArea() and getCircumference() methods that return an area and a circumference of the circle.
*/
export default class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}
