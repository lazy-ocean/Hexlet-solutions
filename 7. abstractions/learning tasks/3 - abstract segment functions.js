/* segment abstract functions
Keeping in mind everything already said on abstrations, make a series of functions to work with points and segments out of these points:
--- makeSegment(): takes two points and returns a segment
--- getMidpointOfSegment(): takes a segment and returns its midpoint
--- getBeginPoint(): takes a segment and returns its begin point
--- getEndPoint(): takes a segment and returns its endpoint 

Use preset makeDecartPoint, getX, getY functions to make and get points.
*/
///// PRESET FUNCTIONS
const makeDecartPoint = (x, y) => {
  const point = { x, y };
  return point;
};

const getX = (point) => point.x;
const getY = (point) => point.y;

/////// TASK FUNCTIONS
export const makeSegment = (x, y) => ({
  beginPoint: { x: getX(x), y: getY(x) },
  endPoint: { x: getX(y), y: getY(y) },
});

export const getBeginPoint = (segment) => segment.beginPoint;
export const getEndPoint = (segment) => segment.endPoint;

export const getMidpointOfSegment = (segment) => {
  const formula = (p1, p2) => (p1 + p2) / 2;
  const x = formula(getX(segment.beginPoint), getX(segment.endPoint));
  const y = formula(getY(segment.beginPoint), getY(segment.endPoint));
  return makeDecartPoint(x, y);
};

/////// TESTS
const beginPoint = makeDecartPoint(3, 2);
const endPoint = makeDecartPoint(0, 0);
console.log(makeSegment(beginPoint, endPoint));
/*
{
beginPoint: { x: 3, y: 2 },
endPoint: { x: 0, y: 0 }
}
*/

const segment2 = makeSegment(makeDecartPoint(3, 2), makeDecartPoint(0, 0));
console.log(segment2);
/* {
beginPoint: { x: 3, y: 2 },
endPoint: { x: 0, y: 0 }
} */
console.log(getMidpointOfSegment(segment2));
/* { x: 1.5, y: 1 } */

const segment3 = makeSegment(makeDecartPoint(3, 2), makeDecartPoint(2, 3));
console.log(segment3);
/* {
beginPoint: { x: 3, y: 2 },
endPoint: { x: 2, y: 3 }
} */
console.log(getMidpointOfSegment(segment3));
/* { x: 2.5, y: 2.5 } */
