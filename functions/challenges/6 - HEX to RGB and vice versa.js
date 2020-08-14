/* hexToRgb, rgbToHex
Write and export hexToRgb(), rgbToHex() functions that convert HEX to RGB and vice versa.
*/
export const hexToRgb = (str) => {
  const pairs = chunk(str.slice(1), 2);
  const map = pairs.map((pair) => parseInt(pair.join(""), 16));
  return { r: map[0], g: map[1], b: map[2] };
};

export const rgbToHex = (...numbers) => {
  const map = numbers.map((num) => num.toString(16).padStart(2, 0));
  return `#${map.join("")}`;
};
