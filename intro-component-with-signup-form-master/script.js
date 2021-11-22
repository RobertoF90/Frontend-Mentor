console.log("Hey there!");
const btn = document.querySelector(".btn");
const errorIcons = document.querySelectorAll(".error-icon");
const errorMsg = document.querySelectorAll(".error-text");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const formFields = e.target.parentElement.children;

  const fields = [...formFields].slice(0, -2);

  checkFields(fields);
});

const checkFields = function (fields) {
  console.log(fields);

  fields.forEach((field) => {
    hideErr(field);

    if (field.id !== "email" && field.firstElementChild.value === "") {
      console.log(`${field.id} is empty`);
      console.log(field);
      showErr(field);
    } else if (field.id === "email") {
      // CHECK EMAIL
      console.log(field);
      if (field.children[0].value === "") {
        console.log(`${field.id} is empty`);
        showErr(field);
      } else {
        console.log("validating...");
        if (validateEmail(field.children[0].value) === true) {
          console.log("email is valid");
        } else {
          console.log("email is NOT valid");
          showErr(field);
        }
      }
    }
  });
};

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function showErr(field) {
  field.children[1].classList.remove("hidden");
  field.children[2].classList.remove("hidden");
}

function hideErr(field) {
  field.children[1].classList.add("hidden");
  field.children[2].classList.add("hidden");
}
