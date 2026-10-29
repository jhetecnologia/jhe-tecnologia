
/* =========================================================
   JHE TECNOLOGIA
   JAVASCRIPT PRINCIPAL
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    "use strict";

    /* =====================================================
       MENU MOBILE
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {

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

        closeMenu();

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
                menuToggle.focus();
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

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
        revealElements.length > 0 &&
        "IntersectionObserver" in window &&
        !reduceMotion
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
             * Evita registrar a mesma conversão mais de uma vez
             * enquanto o primeiro clique está sendo processado.
             */
            if (link.dataset.conversionPending === "true") {
                event.preventDefault();
                return;
            }

            /*
             * Para links em nova aba ou cliques modificados,
             * registra a conversão sem interferir na navegação
             * padrão do navegador.
             */
            const modifiedClick =
                event.ctrlKey ||
                event.metaKey ||
                event.shiftKey ||
                event.altKey ||
                event.button !== 0;

            const opensNewTab =
                link.target === "_blank" ||
                modifiedClick;

            if (opensNewTab) {

                try {
                    window.gtag("event", "conversion", {
                        send_to: "AW-17945711429/nFK4CLqxq-scEMWml-1C",
                        value: 1.0,
                        currency: "BRL"
                    });
                } catch (error) {
                    // A navegação padrão deve continuar funcionando.
                }

                return;
            }

            /*
             * Para a navegação na mesma aba, aguarda a tentativa
             * de envio da conversão e garante um redirecionamento
             * alternativo caso o callback não seja executado.
             */
            event.preventDefault();

            link.dataset.conversionPending = "true";

            let navigationStarted = false;
            let fallbackTimer;

            function navigateToWhatsApp() {

                if (navigationStarted) {
                    return;
                }

                navigationStarted = true;

                window.clearTimeout(fallbackTimer);

                link.dataset.conversionPending = "false";

                window.location.href = link.href;
            }

            try {

                window.gtag("event", "conversion", {
                    send_to: "AW-17945711429/nFK4CLqxq-scEMWml-1C",
                    value: 1.0,
                    currency: "BRL",
                    event_callback: navigateToWhatsApp,
                    event_timeout: 1500
                });

                fallbackTimer = window.setTimeout(
                    navigateToWhatsApp,
                    1800
                );

            } catch (error) {

                navigateToWhatsApp();
            }
        });
    });

});
