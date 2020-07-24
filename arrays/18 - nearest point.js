/* getTheNearestLocation.js
Write and export getTheNearestLocation() function that returns the closest place to the argumented location. Places to choose from are taken as argument, too.

locations - array of places. Every place is an array itself: the name of the place and the coordinates [x, y]
Point - current point on map, an array of coordinates [x, y].

Example:
const locations = [
  ['Sea', [1, 3]],
  ['Museum', [8, 4]],
];
const currentPoint = [5, 5];
getTheNearestLocation(locations, currentPoint); // ['Museum', [8, 4]]

*/

const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;

    return Math.sqrt(xs ** 2 + ys ** 2);
};

export const getTheNearestLocation = (locations, currentPoint) => {
    if (!locations.length) return null;
    let [nearestLocation] = locations;
    let [nearestPlace, nearestPoint] = nearestLocation;
    let lowestDistance = getDistance(currentPoint, nearestPoint);

    for (let location of locations) {
        let [place, point] = location;
        let distance = getDistance(currentPoint, point);
        if (distance < lowestDistance) {
            lowestDistance = distance;
            nearestPlace = place;
            nearestPoint = point;
        }
    }
    return [nearestPlace, nearestPoint];
};

const locations = [
    ['Park', [10, 5]],
    ['Sea', [1, 3]],
    ['Museum', [8, 4]],
];
const currentPoint = [5, 5];
console.log(getTheNearestLocation([], currentPoint)); // null
console.log(getTheNearestLocation(locations, currentPoint)); // ['Museum', [8, 4]]

const currentPoint2 = [1, 3];
console.log(getTheNearestLocation(locations, currentPoint2)); // ['Museum', [8, 4]]