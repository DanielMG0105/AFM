
document.querySelectorAll(".accordion-effect").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.classList.toggle("active-toggle")
  });
});