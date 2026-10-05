/* =========================================================
   JHE TECNOLOGIA
   JAVASCRIPT PRINCIPAL
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


  /* =========================================================
     MENU MOBILE
     ========================================================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {

    menuToggle.setAttribute("aria-expanded", "false");

    function closeMenu() {
      nav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }

    menuToggle.addEventListener("click", function (event) {

      event.stopPropagation();

      const isOpen = nav.classList.toggle("active");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

    });


    /* Fecha ao clicar em um link */

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(function (link) {

      link.addEventListener("click", function () {
        closeMenu();
      });

    });


    /* Fecha ao clicar fora */

    document.addEventListener("click", function (event) {

      if (!nav.classList.contains("active")) {
        return;
      }

      if (
        !nav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }

    });


    /* Fecha com ESC */

    document.addEventListener("keydown", function (event) {

      if (event.key === "Escape") {
        closeMenu();
      }

    });


    /* Fecha ao voltar para desktop */

    window.addEventListener("resize", function () {

      if (window.innerWidth > 900) {
        closeMenu();
      }

    });

  }


  /* =========================================================
     REVEAL
     ========================================================= */

  const revealElements =
    document.querySelectorAll(".reveal");


  if (revealElements.length > 0) {

    if ("IntersectionObserver" in window) {

      const revealObserver =
        new IntersectionObserver(function (entries, observer) {

          entries.forEach(function (entry) {

            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          });

        }, {
          threshold: 0.12
        });


      revealElements.forEach(function (element) {

        revealObserver.observe(element);

      });

    } else {

      revealElements.forEach(function (element) {

        element.classList.add("visible");

      });

    }

  }


  /* =========================================================
     GOOGLE ADS
     CONVERSÃO DE CLIQUE NO WHATSAPP
     ========================================================= */

  const whatsappLinks = document.querySelectorAll(
    'a[href*="wa.me"], a[href*="api.whatsapp.com"]'
  );


  whatsappLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      if (typeof window.gtag === "function") {

        window.gtag(
          "event",
          "conversion",
          {
            "send_to": "AW-17945711429/nFK4CLqxq-scEMWml-1C",
            "value": 1.0,
            "currency": "BRL"
          }
        );

      }

    });

  });


});
