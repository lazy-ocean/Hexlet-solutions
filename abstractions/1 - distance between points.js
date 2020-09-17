/* calculateDistance.js
Write and export by default calculateDistance() function that takes two points and returns the distance between them (geometrical)
*/
const calculateDistance = (point1, point2) => {
  const [x1, y1] = point1;
  const [x2, y2] = point2;
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};

export default calculateDistance;

///////// TESTS
const point1 = [0, 0];
const point2 = [3, 4];
console.log(calculateDistance(point1, point2));
// (5)

const point1 = [-1, -4];
const point2 = [-1, -10];
console.log(calculateDistance(point1, point2));
// (6)

const point1 = [1, 10];
const point2 = [1, 3];
console.log(calculateDistance(point1, point2));
// (7)
