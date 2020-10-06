/* makeRectangle.js
Write a set of functions working with a rectangle.
--- makeRectangle(point, width, height): returns a rectangle parameters in any form possible. Takes point - upper left point, width and height of sides.
--- getStartPoint(), getWidth(), getHeight(): functions returning point, width and height based on your rectangle object structure;
--- containsOrigin(rectangle) - checks if the origin (0, 0) is inside the rectangle. You can find it out checking if all the rectangle angles points lie in different quadrants. Use prebuilt getQuadrant() function to get a quadrant for every angle.
*/
////// PREBUILT FUNCTIONS:
const makeDecartPoint = (x, y) => {
  const point = { x, y };
  return point;
};

const getX = (point) => point.x;
const getY = (point) => point.y;

const getQuadrant = (point) => {
  const x = getX(point);
  const y = getY(point);

  if (x > 0 && y > 0) {
    return 1;
  }
  if (x < 0 && y > 0) {
    return 2;
  }
  if (x < 0 && y < 0) {
    return 3;
  }
  if (x > 0 && y < 0) {
    return 4;
  }

  return null;
};

////// TASK FUNCTIONS
const makeRectangle = (p, width, height) => ({ p, width, height });

const getStartPoint = (rectangle) => rectangle.p;
const getWidth = (rectangle) => rectangle.width;
const getHeight = (rectangle) => rectangle.height;

const containsOrigin = (rectangle) => {
  const pointUpLeft = getStartPoint(rectangle);
  const pointDownRight = makeDecartPoint(
    getX(pointUpLeft) + getWidth(rectangle),
    getY(pointUpLeft) - getHeight(rectangle)
  );
  return getQuadrant(pointUpLeft) === 2 && getQuadrant(pointDownRight) === 4;
};
