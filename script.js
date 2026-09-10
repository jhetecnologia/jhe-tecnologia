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

        const expanded =
            menuToggle.getAttribute("aria-expanded") === "true";

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
            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
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


// NÚMEROS ANIMADOS DO DASHBOARD
const counters = document.querySelectorAll("[data-count]");

const counterObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = Number(counter.dataset.count);

            let current = 0;

            const duration = 1200;
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Suaviza a animação
                const easeOut = 1 - Math.pow(1 - progress, 3);

                current = Math.floor(target * easeOut);

                counter.textContent = `+${current}%`;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = `+${target}%`;
                }
            }

            requestAnimationFrame(updateCounter);

            counterObserver.unobserve(counter);
        });
    },
    {
        threshold: 0.5
    }
);

counters.forEach(counter => {
    counterObserver.observe(counter);
});


// Conversão Google Ads - clique no WhatsApp
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const url = this.href;
        let opened = false;

        const openWhatsApp = function() {
            if (!opened) {
                opened = true;
                window.open(url, "_blank");
            }
        };

        if (typeof gtag === "function") {
            gtag("event", "conversion", {
                send_to: "AW-17945711429/nFK4CLqxq-scEMWml-1C",
                event_callback: openWhatsApp
            });

            setTimeout(openWhatsApp, 1200);
        } else {
            openWhatsApp();
        }
    });
});
