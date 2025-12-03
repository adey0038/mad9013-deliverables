function init() {
  const to_top = document.getElementById("to-top");

  function handleToTop() {
    if (window.scrollY > 50) {
      to_top.classList.remove("translate-y-full");
    } else {
      to_top.classList.add("translate-y-full");
    }
  }

  handleToTop();

  to_top && window.addEventListener("scroll", handleToTop);
}

document.addEventListener("DOMContentLoaded", init);
