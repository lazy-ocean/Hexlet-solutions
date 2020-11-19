/* formValidation.js
Using yup library (https://github.com/jquense/yup#usage) write validation of the user registration form.
*/

import * as y from "yup";
import onChange from "on-change";
import axios from "axios";

// NOTE: because of incompatability between commonjs and esm
const yup = !y.object ? y.default : y;

//// PRESET PARAMETERS

const schema = yup.object().shape({
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

//// JS VALIDATION
const run = () => {
  const form = document.querySelector("form");
  const button = document.querySelector(".btn");
  const container = document.querySelector(".container");
  const formElements = form.elements;

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
        if (errors) {
          errors[key]
            ? form.elements[key].classList.add("is-invalid")
            : form.elements[key].classList.remove("is-invalid");
        } else {
          form.elements[key].classList.remove("is-invalid");
        }
      });
    } else {
      button.disabled = false;
    }
  };

  const watchedState = onChange(state, (path, value) => {
    let arr = path.split(".");
    let item = arr[arr.length - 1];
    if (state.registrationForm.state === "invalid") {
      submitHandler(item);
      render();
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

  formElements.forEach((element) => {
    element.addEventListener("input", (e) => {
      let type = element.name;
      watchedState.registrationForm.data[type] = e.target.value;
    });
  });

  const submitHandler = (item) => {
    try {
      schema.validateSync(state.registrationForm.data, { abortEarly: false });
      state.registrationForm.errors = null;
      state.registrationForm.state = "valid";
    } catch (err) {
      let errs = err.inner;
      let obj = errs.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});
      state.registrationForm.errors = obj;
    }
  };
};
