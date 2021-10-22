const allArrows = document.querySelectorAll(".question");
allArrows.forEach((el) => {
  el.addEventListener("click", function (el) {
    el.preventDefault();
    if (el.target.classList.contains("active")) {
      open(el.target);
    } else {
      closeAll();
      open(el.target);
    }

    // console.log(el.target.firstElementChild.classList.toggle("hidden"));
  });
});

const open = function (el) {
  el.classList.toggle("active");
  el.firstElementChild.classList.toggle("hidden");
};

const closeAll = function () {
  allArrows.forEach((el) => {
    el.classList.remove("active");
    el.firstElementChild.classList.add("hidden");
  });
};
