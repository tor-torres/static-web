const mybutton = document.getElementById("btn-back-to-top");

const toggleButtonVisibility = () => {
    mybutton.style.display = (window.scrollY > 20) ? "block" : "none";
};

window.addEventListener("scroll", toggleButtonVisibility);
mybutton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
