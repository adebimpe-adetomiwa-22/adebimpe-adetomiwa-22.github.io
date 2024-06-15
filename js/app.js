let nav = document.querySelector(".nav");
let cancelNavButton = document.querySelector(".cancel-nav");


cancelNavButton.addEventListener("click", event => {
    nav.classList.add("cancel");
});