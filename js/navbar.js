document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("nav-toggle");
  const navList = document.getElementById("nav-list");

  toggleButton.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
});
