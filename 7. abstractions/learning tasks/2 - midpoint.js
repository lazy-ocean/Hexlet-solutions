/* getMidpoint.js
Write and export by default getMidpoint() function that takes objects instead of arrays to store points with their coordinates and returns the midpoint between argumented points.
*/

const getMidpoint = (point1, point2) => {
  const formula = (p1, p2) => (p1 + p2) / 2;
  const x = formula(point1.x, point2.x);
  const y = formula(point1.y, point2.y);
  return { x, y };
};

export default getMidpoint;

/////// TESTS
const point1 = { x: 0, y: 0 };
const point2 = { x: 4, y: 4 };
console.log(getMidpoint(point1, point2)); // { x: 2, y: 2 }

const point1 = { x: -1, y: 10 };
const point2 = { x: 0, y: -3 };
console.log(getMidpoint(point1, point2)); // { x: -0.5, y: 3.5 }
