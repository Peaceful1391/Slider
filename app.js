const up = document.querySelector(".up-button");
const down = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slideLength = mainSlide.querySelectorAll("div").length;
const container = document.querySelector(".container");

let activeOne = 0;

sidebar.style.top = `-${(slideLength - 1) * 100}vh`;

up.addEventListener("click", () => {
  changePic("up");
});

down.addEventListener("click", () => {
  changePic("down");
});

function changePic(where) {
  if (where === "up") {
    activeOne++;
    if (activeOne === slideLength) {
      activeOne = 0;
    }
  } else if (where === "down") {
    activeOne--;
    if (activeOne < 0) {
      activeOne = slideLength - 1;
    }
  }
  const height = container.clientHeight
  mainSlide.style.transform = `translateY(-${activeOne*height}px)`
  sidebar.style.transform = `translateY(${activeOne*height}px)`
}
