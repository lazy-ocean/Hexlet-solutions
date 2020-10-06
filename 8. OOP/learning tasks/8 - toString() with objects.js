/* toString.js
Realize toString() method for two preset constructors:
--- Point.toString() - should return a string in the format of (1, 10)
--- Segment.toString() - should return a string in the format of [(1, 10), (11, -3)]
*/
////// PRESET POINT CONSTRUCTOR
export default function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.getX = function getX() {
  return this.x;
};

Point.prototype.getY = function getY() {
  return this.y;
};

///////// toString() method:
Point.prototype.toString = function toString() {
  return `(${this.getX()}, ${this.getY()})`;
};

///////// PRESET SEGMENT CONSTRUCTOR
export default function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
}

Segment.prototype.getBeginPoint = function getBeginPoint() {
  return this.beginPoint;
};

Segment.prototype.getEndPoint = function getEndPoint() {
  return this.endPoint;
};

/////// toString() method
Segment.prototype.toString = function toString() {
  return `[${this.getBeginPoint().toString()}, ${this.getEndPoint().toString()}]`;
};
