```js
// Números animados do dashboard
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const finalValue = Number(counter.dataset.target);
            const prefix = counter.dataset.prefix || "";
            const suffix = counter.dataset.suffix || "";

            if (isNaN(finalValue)) return;

            const duration = 1200;
            const startTime = performance.now();

            function animate(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Movimento mais suave no final
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const currentValue = Math.floor(finalValue * easeOut);

                counter.textContent = `${prefix}${currentValue}${suffix}`;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    counter.textContent = `${prefix}${finalValue}${suffix}`;
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
```
