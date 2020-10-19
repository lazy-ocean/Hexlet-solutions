/* fifteen.js
Write a function for the fifteen puzzle game on bootstrap's styles.
*/

//// SHOWCASE ON CODEPEN - https://codepen.io/lazy_ocean/pen/LYZZXdM

//// JS REALIZATION
import _ from "lodash";

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default (randomize = _.shuffle) => {
  // BEGIN (write your solution here)
  const nums = randomize(values);
  const gameContainer = document.querySelector(".gem-puzzle");
  let field = document.createElement("table");
  field.classList.add("table-bordered");
  const matrix = [
    [nums[0], nums[4], nums[8], nums[12]],
    [nums[1], nums[5], nums[9], nums[13]],
    [nums[2], nums[6], nums[10], nums[14]],
    [nums[3], nums[7], nums[11], ""],
  ];
  let game = matrix.map((row) => {
    let cells = row.map((item) => `<td class='p-3'>${item}</td>`).join("");
    return `<tr>${cells}</tr>`;
  });
  field.innerHTML = `<tbody>${game.join("")}</tbody>`;
  gameContainer.append(field);

  const body = document.querySelector("tbody");
  const lastRow = body.lastChild;
  const emptyCell = lastRow.lastChild;
  emptyCell.classList.add("table-active");

  document.addEventListener("keyup", (e) => {
    e.preventDefault();
    const key = e.key;
    let newActive, oldActiveRow, newActiveRow, index;
    let activeCell = document.querySelector(".table-active");
    switch (e.key) {
      case "ArrowLeft":
        newActive = activeCell.nextElementSibling || activeCell;
        activeCell.innerHTML = newActive.innerHTML;
        newActive.innerHTML = "";
        activeCell.classList.remove("table-active");
        newActive.classList.add("table-active");
        break;
      case "ArrowRight":
        newActive = activeCell.previousElementSibling || activeCell;
        activeCell.innerHTML = newActive.innerHTML;
        newActive.innerHTML = "";
        activeCell.classList.remove("table-active");
        newActive.classList.add("table-active");
        break;
      case "ArrowUp":
        oldActiveRow = activeCell.closest("tr");
        newActiveRow = oldActiveRow.nextElementSibling || oldActiveRow;
        index = Array.prototype.indexOf.call(oldActiveRow.children, activeCell);
        newActive = newActiveRow.children[index];
        activeCell.innerHTML = newActive.innerHTML;
        newActive.innerHTML = "";
        activeCell.classList.remove("table-active");
        newActive.classList.add("table-active");
        break;
      case "ArrowDown":
        oldActiveRow = activeCell.closest("tr");
        newActiveRow = oldActiveRow.previousElementSibling || oldActiveRow;
        index = Array.prototype.indexOf.call(oldActiveRow.children, activeCell);
        newActive = newActiveRow.children[index];
        activeCell.innerHTML = newActive.innerHTML;
        newActive.innerHTML = "";
        activeCell.classList.remove("table-active");
        newActive.classList.add("table-active");
        break;
    }
  });
  // END
};
