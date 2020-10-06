/* getX, getY
Imagine that inner system work and all functions are based on points in polar coordinate system, but on interface part it is all in cartesian coordinate system.
Your task is write getX and getY functions that takes point in polar system and returns the initial coordinates in cartesian.
See inner makeDecartPoint() function to see how system point is made.
*/
///// SYSTEM FUNCTION
const makeDecartPoint = (x, y) => {
  const point = {
    angle: Math.atan2(y, x),
    radius: Math.sqrt(x ** 2 + y ** 2),
  };
  return point;
};

///////// TASK FUNCTIONS
const getX = (point) => {
  let { angle, radius } = point;
  let x = Math.round(radius * Math.cos(angle));
  return x;
};

const getY = (point) => {
  let { angle, radius } = point;
  let y = Math.round(radius * Math.sin(angle));
  return y;
};
