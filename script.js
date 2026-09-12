document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MENU MOBILE
  ========================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {

    menuToggle.setAttribute("aria-expanded", "false");

    const closeMenu = () => {
      nav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    };

    const toggleMenu = () => {
      const isOpen = nav.classList.toggle("active");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    };

    menuToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleMenu();
    });


    /* Fecha ao clicar em um link */

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });


    /* Fecha ao clicar fora do menu */

    document.addEventListener("click", (event) => {

      if (!nav.classList.contains("active")) {
        return;
      }

      const clickedInsideNav = nav.contains(event.target);
      const clickedMenuButton = menuToggle.contains(event.target);

      if (!clickedInsideNav && !clickedMenuButton) {
        closeMenu();
      }
    });


    /* Fecha com ESC */

    document.addEventListener("keydown", (event) => {

      if (event.key === "Escape") {
        closeMenu();
      }

    });


    /* Fecha o menu quando volta para desktop */

    window.addEventListener("resize", () => {

      if (window.innerWidth > 900) {
        closeMenu();
      }

    });

  }


  /* =========================
     REVEAL
  ========================= */

  const revealElements = document.querySelectorAll(".reveal");

  revealElements.forEach((element) => {

    element.classList.add("visible");

    element.style.opacity = "1";
    element.style.visibility = "visible";
    element.style.transform = "none";

  });


  /* =========================
     NÚMEROS ANIMADOS
  ========================= */

  const counters = document.querySelectorAll(".counter");

  const animateCounter = (counter) => {

    if (counter.dataset.animated === "true") {
      return;
    }

    const target = Number(counter.dataset.target);

    const prefix = counter.dataset.prefix || "";
    const suffix = counter.dataset.suffix || "";

    if (!Number.isFinite(target)) {
      return;
    }

    counter.dataset.animated = "true";

    const duration = 1400;
    const startTime = performance.now();


    const updateCounter = (currentTime) => {

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const currentValue = Math.round(
        target * easedProgress
      );

      counter.textContent =
        `${prefix}${currentValue}${suffix}`;


      if (progress < 1) {

        requestAnimationFrame(updateCounter);

      } else {

        counter.textContent =
          `${prefix}${target}${suffix}`;

      }

    };


    requestAnimationFrame(updateCounter);

  };


  /* =========================
     INTERSECTION OBSERVER
  ========================= */

  if ("IntersectionObserver" in window) {

    const counterObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach((entry) => {

            if (!entry.isIntersecting) {
              return;
            }

            animateCounter(entry.target);

            observer.unobserve(entry.target);

          });

        },
        {
          threshold: 0.5
        }
      );


    counters.forEach((counter) => {
      counterObserver.observe(counter);
    });

  } else {

    counters.forEach((counter) => {
      animateCounter(counter);
    });

  }

});
