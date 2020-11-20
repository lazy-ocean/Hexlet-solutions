/* formValidation.js
Using yup library (https://github.com/jquense/yup#usage) write validation of the bootstrap's user registration form.
Use axios for the POST response and onChange library to check all the changes.
*/

//// SHOWCASE ON CODEPEN - https://codepen.io/lazy_ocean/pen/Bazgjjv

import * as y from "yup";
import onChange from "on-change";
import axios from "axios";
const yup = !y.object ? y.default : y;

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  passwordConfirmation: yup
    .string()
    .required()
    .oneOf(
      [yup.ref("password"), null],
      "Password confirmation does not match to password"
    ),
});

// BEGIN (write your solution here)
const run = (() => {
  const form = document.querySelector("form");
  const button = document.querySelector(".btn");
  const container = document.querySelector(".container");

  const state = {
    registrationForm: {
      state: "invalid",
      data: {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      },
      errors: {},
    },
  };

  const render = () => {
    let errors = state.registrationForm.errors;
    let keys = Object.keys(state.registrationForm.data);
    if (state.registrationForm.state === "invalid") {
      keys.forEach((key) => {
        errors && errors[key]
          ? form.elements[key].classList.add("is-invalid")
          : form.elements[key].classList.remove("is-invalid");
      });
    } else {
      keys.forEach((key) => form.elements[key].classList.remove("is-invalid"));
      button.disabled = false;
    }
  };

  const watchedState = onChange(state, (path, value) => {
    let arr = path.split(".");
    let item = arr[arr.length - 1];
    submitHandler(item);
    render();
    if (item === "password") {
      submitHandler("passwordConfirmation");
    }
  });

  form.addEventListener("submit", (e) => {
    console.log("m");
    e.preventDefault();
    button.disabled = true;
    let data = state.registrationForm.data;
    axios
      .post("/users", data)
      .then(function (response) {
        document.body.removeChild(container);
        document.body.innerHTML =
          '<div data-container="sign-up">User Created!</div>';
      })
      .catch(function (err) {
        console.log(err);
      });
  });
  const formElements = form.elements;
  [...formElements].forEach((element) => {
    element.addEventListener("input", (e) => {
      let type = element.name;
      watchedState.registrationForm.data[type] = e.target.value;
    });
  });

  const submitHandler = (item) => {
    schema
      .validateAt(`${item}`, state.registrationForm.data)
      .then(() => {
        console.log("m");
        state.registrationForm.errors[item] = null;
        validateAll();
      })
      .catch((err) => {
        state.registrationForm.errors[item] = err.errors;
      })
      .finally(() => {
        render();
      });
  };

  const validateAll = () => {
    try {
      schema.validateSync(state.registrationForm.data, { abortEarly: false });
      state.registrationForm.state = "valid";
    } catch (err) {
      console.log("e");
    }
  };
})();
