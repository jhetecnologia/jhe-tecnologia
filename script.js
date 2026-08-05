// Cabeçalho ao rolar a página
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Menu Mobile
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("open");

        const expanded = menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute(
            "aria-expanded",
            !expanded
        );
    });
}

// Fecha o menu ao clicar em um link
document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("open");
        }

        if (menuToggle) {
            menuToggle.setAttribute("aria-expanded", "false");
        }

    });

});

// Scroll Reveal
const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);

document.querySelectorAll(".reveal").forEach(element => {

    observer.observe(element);

});
