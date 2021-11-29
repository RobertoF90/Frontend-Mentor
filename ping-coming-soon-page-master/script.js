console.log("It's nice to see you!");

const input = document.querySelector(".input-box");
const btn = document.querySelector(".btn");
let validation = false;

input.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    sendInput(e);
  }
});

btn.addEventListener("click", function (e) {
  sendInput(e);
});

function sendInput(e) {
  e.preventDefault();
  emailCheck(input.value);
}

function emailCheck(email) {
  if (validateEmail(email) === true) {
    input.classList.remove("wrong");
    validation = false;
    if (document.querySelector(".error")) {
      document.querySelector(".error").remove();
    }
  } else {
    if (!validation) {
      if (window.innerWidth < 500) {
        input.insertAdjacentHTML(
          "afterend",

          '<p class="error ">Please provide a valid email address</p>'
        );
        input.classList.add("wrong");
      } else {
        btn.insertAdjacentHTML(
          "afterend",

          '<p class="error">Please provide a valid email address</p>'
        );
        input.classList.add("wrong");
      }
      validation = true;
    }
  }
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
