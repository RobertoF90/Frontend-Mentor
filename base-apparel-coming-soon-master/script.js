console.log("hello world");

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const send = document.querySelector(".send");
const validation = document.querySelector(".validation");
const errorSVG = document.querySelector(".img-error");

send.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(input.value);
  if (validateEmail(input.value) === true) {
    validation.classList.add("hidden");
    errorSVG.classList.add("hidden");
  } else {
    validation.classList.remove("hidden");
    errorSVG.classList.remove("hidden");
  }
});

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
