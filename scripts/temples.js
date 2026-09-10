const hamButton = document.getElementById("menu");
const mainNav = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    mainNav.classList.toggle("show");
    hamButton.classList.toggle("show")
});