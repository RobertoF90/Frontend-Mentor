const btn = document.querySelector(".share-button");

const box = document.querySelector(".share-options");

const overlay = document.querySelector(".overlay");

const body = document.querySelector("body");

let bubble = false;

overlay.addEventListener("click", function (e) {
  btn.classList.remove("active");

  box.classList.add("hidden");
  overlay.classList.add("hidden");
});

btn.addEventListener("click", function (e) {
  btn.classList.add("active");
  box.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// MOBILE

const width = window.innerWidth;

if (width <= 500) {
  const author = document.querySelector(".author");

  const authorImg = document.querySelector(".author-img");

  const authorText = document.querySelector(".author-name-date");

  btn.addEventListener("click", function (e) {
    authorImg.classList.add("hidden");
    authorText.classList.add("hidden");
    // author.insertBefore(box, btn);
    author.insertAdjacentElement("afterbegin", box);

    author.classList.add("mobile");

    btn.classList.add("active");
    box.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

  overlay.addEventListener("click", function (e) {
    btn.classList.remove("active");

    box.classList.add("hidden");
    overlay.classList.add("hidden");
    author.classList.remove("mobile");
    authorImg.classList.remove("hidden");
    authorText.classList.remove("hidden");
  });
}
