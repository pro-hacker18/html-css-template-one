let menu = document.querySelector("header .container .links");
let menuList = document.querySelector("header .container .links ul");
let scrollToTopBtn = document.querySelector(".scroll-to-top");

menu.onclick = function () {
  menuList.style.display = "block";
};

document.addEventListener("mouseup", function (e) {
  let container = menuList;
  if (!container.contains(e.target)) {
    container.style.display = "none";
  }
});

window.onscroll = function () {
  if (this.scrollY >= 574) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
};

scrollToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
