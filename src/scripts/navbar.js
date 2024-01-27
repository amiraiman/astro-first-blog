const hamburger = document.querySelector(".hamburger");
const navigations = document.querySelector(".navigations");

hamburger.addEventListener("click", () => {
  navigations.classList.toggle("expanded");
});
