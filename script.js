/* =========================================================
   JHE TECNOLOGIA
   JAVASCRIPT PRINCIPAL
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


  /* =========================================================
     MENU MOBILE
  ========================================================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {

    menuToggle.setAttribute("aria-expanded", "false");

    const closeMenu = () => {

      nav.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    };


    const toggleMenu = () => {

      const isOpen =
        nav.classList.toggle("active");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    };


    menuToggle.addEventListener("click", (event) => {

      event.stopPropagation();

      toggleMenu();

    });


    /* Fecha o menu ao clicar em um link */

    const navLinks =
      nav.querySelectorAll("a");

    navLinks.forEach((link) => {

      link.addEventListener("click", () => {

        closeMenu();

      });

    });


    /* Fecha ao clicar fora */

    document.addEventListener("click", (event) => {

      if (!nav.classList.contains("active")) {
        return;
      }

      const clickedInsideNav =
        nav.contains(event.target);

      const clickedMenuButton =
        menuToggle.contains(event.target);

      if (
        !clickedInsideNav &&
        !clickedMenuButton
      ) {

        closeMenu();

      }

    });


    /* Fecha com ESC */

    document.addEventListener("keydown", (event) => {

      if (event.key === "Escape") {

        closeMenu();

      }

    });


    /* Fecha ao voltar para desktop */

    window.addEventListener("resize", () => {

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


  if (revealElements.length) {

    /*
      Caso exista suporte ao IntersectionObserver,
      os elementos aparecem conforme entram na tela.
    */

    if ("IntersectionObserver" in window) {

      const revealObserver =
        new IntersectionObserver(
          (entries, observer) => {

            entries.forEach((entry) => {

              if (!entry.isIntersecting) {
                return;
              }

              entry.target.classList.add("visible");

              observer.unobserve(
                entry.target
              );

            });

          },
          {
            threshold: 0.12
          }
        );


      revealElements.forEach((element) => {

        revealObserver.observe(element);

      });

    } else {

      /*
        Fallback para navegadores sem
        IntersectionObserver.
      */

      revealElements.forEach((element) => {

        element.classList.add("visible");

      });

    }

  }


  /* =========================================================
     ACESSIBILIDADE DO MENU
  ========================================================= */

  if (menuToggle) {

    menuToggle.addEventListener(
      "keydown",
      (event) => {

        if (event.key === "Enter" ||
            event.key === " ") {

          event.preventDefault();

        }

      }
    );

  }


});
