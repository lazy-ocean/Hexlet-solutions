/* filteringLaptops.js
Write and export by default function that activates the html-form: the change of any of parameters should filter the shown laptop list.
When the form is empty, show the full list by the right side. If no laptop pass the parameters, don't show the list at all.
The list should be <ul><li> list in the <div class="result"></div>.
 */

//// SHOWCASE ON CODEPEN - https://codepen.io/lazy_ocean/pen/WNxmKxm
const laptops = [
  {
    model: "v1",
    processor: "intel",
    frequency: 1.7,
    memory: 16,
  },
  {
    model: "d3",
    processor: "intel",
    frequency: 3.5,
    memory: 8,
  },
  {
    model: "d2",
    processor: "amd",
    frequency: 2.5,
    memory: 16,
  },
];

const render = (state) => {
  const result = document.querySelector(".result");
  let data;
  if (!Object.entries(state).filter(Boolean).length) {
    data = laptops;
  } else {
    data = laptops
      .map((laptop) => {
        if (state.processor) {
          if (state.processor !== laptop.processor) return false;
        }
        if (state.memory) {
          if (state.memory != laptop.memory) return false;
        }
        if (state["frequency_gte"]) {
          if (laptop.frequency < state["frequency_gte"]) return false;
        }
        if (state["frequency_lte"]) {
          if (laptop.frequency > state["frequency_lte"]) return false;
        }
        return laptop;
      })
      .filter(Boolean);
  }

  let filtered = data.map((laptop) => `<li>${laptop.model}</li>`);
  result.innerHTML = filtered.length ? `<ul>${filtered.join("")}</ul>` : "";
};

const run = () => {
  render(laptops);
  const state = {
    model: false,
    processor: false,
    memory: false,
    frequency_gte: false,
    frequency_lte: false,
  };
  const selectors = document.querySelectorAll("select");
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("input", (event) => {
      let name = input.name;
      state[name] = event.target.value;
      console.log(state[name]);
      return render(state);
    });
  });
  selectors.forEach((selector) => {
    selector.addEventListener("change", (event) => {
      let name = selector.name.slice(0, -3);
      state[name] = event.target.value;
      return render(state);
    });
  });
};
