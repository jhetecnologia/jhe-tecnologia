/* =========================================================
   JHE TECNOLOGIA
   JAVASCRIPT PRINCIPAL
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MENU MOBILE
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {

        menuToggle.setAttribute("aria-expanded", "false");

        if (menuToggle.tagName === "BUTTON") {
            menuToggle.setAttribute("type", "button");
        }

        if (!menuToggle.hasAttribute("aria-label")) {
            menuToggle.setAttribute("aria-label", "Abrir menu");
        }

        if (nav.id) {
            menuToggle.setAttribute("aria-controls", nav.id);
        }

        function closeMenu() {
            nav.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");
        }

        function openMenu() {
            nav.classList.add("active");
            menuToggle.setAttribute("aria-expanded", "true");
            menuToggle.setAttribute("aria-label", "Fechar menu");
        }

        menuToggle.addEventListener("click", function (event) {
            event.stopPropagation();

            if (nav.classList.contains("active")) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("click", function (event) {
            if (
                nav.classList.contains("active") &&
                !nav.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                closeMenu();
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeMenu();
            }
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 900) {
                closeMenu();
            }
        });
    }


    /* =====================================================
       ANIMAÇÕES DE ENTRADA
       ===================================================== */

    const revealElements = document.querySelectorAll(".reveal");

    if (
        revealElements.length > 0 &&
        "IntersectionObserver" in window &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        const revealObserver = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(function (element) {
            revealObserver.observe(element);
        });
    } else {
        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });
    }


    /* =====================================================
       GOOGLE ADS
       CONVERSÃO DE CLIQUES NO WHATSAPP
       ===================================================== */

    const whatsappLinks = document.querySelectorAll(
        'a[href*="wa.me/"], a[href*="api.whatsapp.com/"]'
    );

    whatsappLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            if (typeof window.gtag !== "function") {
                return;
            }

            /*
             * Evita registrar duas vezes a conversão
             * para o mesmo clique neste manipulador.
             */
            if (link.dataset.conversionPending === "true") {
                return;
            }

            link.dataset.conversionPending = "true";

            let navigationStarted = false;

            function navigateToWhatsApp() {
                if (navigationStarted) {
                    return;
                }

                navigationStarted = true;
                link.dataset.conversionPending = "false";

                if (event.ctrlKey || event.metaKey || event.shiftKey ||
                    event.altKey || link.target === "_blank") {
                    window.open(link.href, "_blank", "noopener");
                } else {
                    window.location.href = link.href;
                }
            }

            /*
             * O callback permite que a tag tente enviar
             * a conversão antes do redirecionamento.
             */
            try {
                window.gtag("event", "conversion", {
                    send_to: "AW-17945711429/nFK4CLqxq-scEMWml-1C",
                    value: 1.0,
                    currency: "BRL",
                    event_callback: navigateToWhatsApp,
                    event_timeout: 1500
                });

                /*
                 * Evita prender o usuário caso a tag
                 * não retorne o callback.
                 */
                window.setTimeout(navigateToWhatsApp, 1600);

            } catch (error) {
                link.dataset.conversionPending = "false";
            }
        });
    });

});
