const about = document.querySelector(".about");
const aboutContents = document.querySelectorAll(".about-content");
const btns = document.querySelectorAll(".btn");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  console.log(id);
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    aboutContents.forEach(function (content) {
      content.classList.add("content");
    });
    const element = document.getElementById(id);
    // console.log(element);
    element.classList.remove("content");
  }
});
