/* Point(), Segment() and reverse()
Write and export several functions working with segments.
--- Point(): constructor-function that takes and represents two coordinates of a point - x & y
--- Segment(): constructor-function that operates with two points - beginPoint and endPoint and its getter-functions - getBeginPoint & getEndPoint.
--- reverse() - takes a segment and returns a new one with reversed begin and end points.
Returning segment points should be independent copies of the initial segment's points, not links to it.
*/

/////// POINT CONSTRUCTOR
function getX() {
  return this.x;
}

function getY() {
  return this.y;
}

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.getX = getX;
  this.getY = getY;
}

/////// SEGMENT CONSTRUCTOR
function getBeginPoint() {
  return this.beginPoint;
}

function getEndPoint() {
  return this.endPoint;
}

function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
  this.getBeginPoint = getBeginPoint;
  this.getEndPoint = getEndPoint;
}

////// REVERSE FUNCTION
const reverse = (segment) => {
  const oldBeginPoint = segment.getBeginPoint();
  const oldEndPoint = segment.getEndPoint();
  const newBeginPoint = new Point(oldEndPoint.getX(), oldEndPoint.getY());
  const newEndPoint = new Point(oldBeginPoint.getX(), oldBeginPoint.getY());
  return new Segment(newBeginPoint, newEndPoint);
};

////// TESTS
const beginPoint = new Point(1, 10);
const endPoint = new Point(11, -3);
const segment = new Segment(beginPoint, endPoint);
const reversedSegment = reverse(segment);

console.log(reversedSegment.getBeginPoint()); // (11, -3))
console.log(reversedSegment.getEndPoint()); // (1, 10)
console.log(beginPoint === reversedSegment.getEndPoint()); // false
console.log(endPoint === reversedSegment.getBeginPoint()); // false
