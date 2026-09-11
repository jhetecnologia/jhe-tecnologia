document.addEventListener("DOMContentLoaded", () => {

  /* ================================
     ELEMENTOS QUE PRECISAM APARECER
  ================================= */

  const revealElements = document.querySelectorAll(".reveal");

  revealElements.forEach((element) => {
    element.classList.add("visible");

    // Garante que o conteúdo fique visível
    // mesmo que alguma animação antiga tenha deixado opacity: 0.
    element.style.opacity = "1";
    element.style.visibility = "visible";
    element.style.transform = "none";
  });


  /* ================================
     NÚMEROS ANIMADOS DO DASHBOARD
  ================================= */

  const counters = document.querySelectorAll(".counter");

  const animateCounter = (counter) => {

    // Evita executar a animação mais de uma vez
    if (counter.dataset.animated === "true") return;

    const target = Number(counter.dataset.target);
    const prefix = counter.dataset.prefix || "";
    const suffix = counter.dataset.suffix || "";

    if (!Number.isFinite(target)) return;

    counter.dataset.animated = "true";

    const duration = 1400;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Suaviza a desaceleração no final
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


  /* ================================
     OBSERVA OS NÚMEROS
  ================================= */

  if ("IntersectionObserver" in window) {

    const counterObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

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

    // Fallback para navegadores sem IntersectionObserver
    counters.forEach((counter) => {
      animateCounter(counter);
    });

  }

});
