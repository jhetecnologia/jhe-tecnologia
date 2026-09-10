// Números animados do dashboard
const counters = document.querySelectorAll(".metric strong");

const counterObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const finalValue = parseInt(counter.textContent.replace(/\D/g, ""), 10);

            if (isNaN(finalValue)) return;

            let start = 0;
            const duration = 1200;
            const startTime = performance.now();

            function animate(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Movimento mais suave no final
                const easeOut = 1 - Math.pow(1 - progress, 3);

                start = Math.floor(finalValue * easeOut);

                counter.textContent = `+${start}%`;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    counter.textContent = `+${finalValue}%`;
                }
            }

            requestAnimationFrame(animate);

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
