const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  menu.classList.toggle("flex-col");
  menu.classList.toggle("absolute");
  menu.classList.toggle("bg-green-600");
  menu.classList.toggle("top-16");
  menu.classList.toggle("right-4");
  menu.classList.toggle("p-4");
  menu.classList.toggle("rounded-lg");
});