/* =========================================================
   JHE TECNOLOGIA
   CSS PRINCIPAL
========================================================= */


/* =========================================================
   VARIÁVEIS
========================================================= */

:root {
  --primary: #5B33F5;
  --primary-dark: #4326C9;
  --secondary: #24BAEF;
  --orange: #FF6839;

  --dark: #151225;
  --dark-2: #211B38;

  --text: #4f4960;
  --muted: #8f899f;

  --white: #ffffff;

  --light: #faf9ff;
  --light-2: #f4f1ff;

  --border: rgba(91, 51, 245, 0.12);

  --shadow: 0 18px 50px rgba(67, 38, 201, 0.08);

  --radius: 24px;

  --container: 1180px;
}


/* =========================================================
   RESET
========================================================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", Arial, sans-serif;
  background: var(--white);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  border: 0;
}

ul,
ol {
  list-style: none;
}


/* =========================================================
   CONTAINER
========================================================= */

.container {
  width: min(100% - 40px, var(--container));
  margin: 0 auto;
}


/* =========================================================
   ACESSIBILIDADE / FOCO
========================================================= */

a:focus-visible,
button:focus-visible,
summary:focus-visible {
  outline: 3px solid rgba(36, 186, 239, 0.55);
  outline-offset: 4px;
}


/* =========================================================
   HEADER
========================================================= */

.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  width: 100%;
  background: rgba(255, 255, 255, 0.88);

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  border-bottom: 1px solid rgba(91, 51, 245, 0.07);

  transition:
    background 0.25s ease,
    box-shadow 0.25s ease;
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 8px 30px rgba(21, 18, 37, 0.06);
}

.header .container {
  min-height: 76px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 30px;
}


/* =========================================================
   LOGO
========================================================= */

.logo {
  display: inline-flex;
  align-items: center;

  flex-shrink: 0;

  transition: opacity 0.2s ease;
}

.logo:hover {
  opacity: 0.88;
}

.logo img {
  width: auto;
  height: 42px;
  object-fit: contain;
}


/* Classes mantidas para compatibilidade,
   caso existam em alguma versão do HTML */

.logo-mark {
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;

  background: linear-gradient(
    135deg,
    var(--primary),
    var(--secondary)
  );

  color: var(--white);
}

.logo-text {
  color: var(--dark);
  font-size: 17px;
  font-weight: 800;
}


/* =========================================================
   NAVEGAÇÃO
========================================================= */

.nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav a {
  position: relative;

  color: var(--dark);
  font-size: 14px;
  font-weight: 600;

  transition:
    color 0.2s ease,
    opacity 0.2s ease;
}

.nav a::after {
  content: "";

  position: absolute;
  left: 0;
  bottom: -8px;

  width: 0;
  height: 2px;

  border-radius: 999px;

  background: var(--primary);

  transition: width 0.2s ease;
}

.nav a:hover {
  color: var(--primary);
}

.nav a:hover::after {
  width: 100%;
}


/* =========================================================
   MENU MOBILE
========================================================= */

.menu-toggle {
  display: none;

  width: 44px;
  height: 44px;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 5px;

  border-radius: 12px;

  background: var(--light-2);
  color: var(--dark);

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.menu-toggle:hover {
  background: rgba(91, 51, 245, 0.12);
}

.menu-toggle span {
  display: block;

  width: 20px;
  height: 2px;

  border-radius: 999px;

  background: currentColor;

  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}


/* =========================================================
   HERO
========================================================= */

.hero {
  position: relative;

  min-height: 100vh;
  padding: 150px 0 90px;

  display: flex;
  align-items: center;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 10% 15%,
      rgba(91, 51, 245, 0.12),
      transparent 30%
    ),
    radial-gradient(
      circle at 90% 80%,
      rgba(36, 186, 239, 0.10),
      transparent 28%
    ),
    var(--white);

  scroll-margin-top: 90px;
}

.hero::before {
  content: "";

  position: absolute;
  inset: 0;

  pointer-events: none;

  background:
    linear-gradient(
      120deg,
      rgba(91, 51, 245, 0.025),
      transparent 45%
    );
}

.hero .container {
  position: relative;
  z-index: 1;
}

.hero-grid {
  display: grid;

  grid-template-columns:
    minmax(0, 1.05fr)
    minmax(420px, 0.95fr);

  align-items: center;

  gap: 70px;
}

.hero-content {
  min-width: 0;
}

.hero-eyebrow {
  display: inline-flex;
  align-items: center;

  margin-bottom: 20px;

  padding: 8px 14px;

  border: 1px solid rgba(91, 51, 245, 0.12);
  border-radius: 999px;

  background: rgba(91, 51, 245, 0.05);

  color: var(--primary);

  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.hero h1 {
  max-width: 700px;

  color: var(--dark);

  font-size: clamp(42px, 5vw, 68px);
  font-weight: 800;

  line-height: 1.04;
  letter-spacing: -0.045em;
}

.hero h1 span {
  color: var(--primary);
}

.hero p {
  max-width: 620px;

  margin-top: 24px;

  color: var(--text);

  font-size: 17px;
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: 14px;

  margin-top: 32px;
}


/* =========================================================
   BOTÕES
========================================================= */

.btn {
  min-height: 52px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0 22px;

  border-radius: 14px;

  font-size: 14px;
  font-weight: 800;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: var(--primary);
  color: var(--white);

  box-shadow: 0 12px 26px rgba(91, 51, 245, 0.20);
}

.btn-primary:hover {
  background: var(--primary-dark);
  box-shadow: 0 16px 32px rgba(91, 51, 245, 0.25);
}

.btn-secondary {
  background: var(--white);
  color: var(--dark);

  border: 1px solid rgba(91, 51, 245, 0.14);
}

.btn-secondary:hover {
  color: var(--primary);
  border-color: rgba(91, 51, 245, 0.30);
}


/* =========================================================
   TRUST PILLS
========================================================= */

.hero-trust {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: 10px;

  margin-top: 28px;
}

.trust-pill {
  display: inline-flex;
  align-items: center;

  min-height: 34px;

  padding: 0 12px;

  border-radius: 999px;

  background: var(--light);

  color: var(--muted);

  font-size: 11px;
  font-weight: 700;

  border: 1px solid rgba(91, 51, 245, 0.08);
}


/* =========================================================
   DASHBOARD
========================================================= */

.dashboard {
  position: relative;

  width: 100%;
  max-width: 520px;

  margin-left: auto;

  padding: 28px;

  border-radius: 28px;

  background:
    radial-gradient(
      circle at 100% 0%,
      rgba(36, 186, 239, 0.14),
      transparent 35%
    ),
    linear-gradient(
      145deg,
      var(--dark-2),
      var(--dark)
    );

  color: var(--white);

  box-shadow:
    0 35px 80px rgba(21, 18, 37, 0.20);

  overflow: hidden;
}

.dashboard::before {
  content: "";

  position: absolute;
  top: -100px;
  right: -100px;

  width: 260px;
  height: 260px;

  border-radius: 50%;

  background: rgba(91, 51, 245, 0.18);

  filter: blur(30px);

  pointer-events: none;
}

.dashboard-header {
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  margin-bottom: 26px;
}

.dashboard-title {
  color: rgba(255, 255, 255, 0.72);

  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.dashboard-status {
  display: inline-flex;
  align-items: center;
  gap: 7px;

  color: rgba(255, 255, 255, 0.68);

  font-size: 11px;
  font-weight: 600;
}

.dashboard-status::before {
  content: "";

  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #55d68a;
  box-shadow: 0 0 0 4px rgba(85, 214, 138, 0.10);
}

.dashboard-metrics {
  position: relative;
  z-index: 1;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 12px;
}

.dashboard-metric {
  min-width: 0;

  padding: 18px 14px;

  border-radius: 18px;

  background: rgba(255, 255, 255, 0.055);

  border: 1px solid rgba(255, 255, 255, 0.07);
}

.dashboard-metric-label {
  display: block;

  margin-bottom: 8px;

  color: rgba(255, 255, 255, 0.48);

  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.dashboard-metric strong {
  display: block;

  color: var(--white);

  font-size: 25px;
  font-weight: 800;

  line-height: 1;
}

.dashboard-chart {
  position: relative;
  z-index: 1;

  height: 190px;

  display: flex;
  align-items: flex-end;
  gap: 10px;

  margin-top: 24px;
  padding-top: 20px;
}

.dashboard-chart span {
  flex: 1;

  min-width: 0;

  height: var(--height, 50%);

  border-radius: 8px 8px 3px 3px;

  background:
    linear-gradient(
      180deg,
      var(--secondary),
      rgba(36, 186, 239, 0.28)
    );

  opacity: 0.9;

  transform-origin: bottom;

  transition:
    height 0.5s ease,
    opacity 0.2s ease;
}

.dashboard-chart span:hover {
  opacity: 1;
}

.dashboard-footer {
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  margin-top: 18px;
  padding-top: 18px;

  border-top: 1px solid rgba(255, 255, 255, 0.08);

  color: rgba(255, 255, 255, 0.50);

  font-size: 11px;
}


/* =========================================================
   PLATAFORMAS
========================================================= */

.platforms {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: 12px;

  margin-top: 24px;
}

.platform {
  padding: 8px 12px;

  border-radius: 10px;

  background: var(--light);

  color: var(--text);

  font-size: 11px;
  font-weight: 700;

  border: 1px solid var(--border);
}


/* =========================================================
   SEÇÕES GERAIS
========================================================= */

section {
  position: relative;
}

.hero,
.services-section,
.about-section,
.plans-section,
.cta {
  scroll-margin-top: 90px;
}

.section {
  padding: 110px 0;
}

.section-header {
  max-width: 760px;

  margin: 0 auto 56px;

  text-align: center;
}

.section-eyebrow {
  display: inline-block;

  margin-bottom: 14px;

  color: var(--primary);

  font-size: 12px;
  font-weight: 800;

  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.section-header h2 {
  color: var(--dark);

  font-size: clamp(32px, 4vw, 48px);
  font-weight: 800;

  line-height: 1.1;
  letter-spacing: -0.035em;
}

.section-header p {
  max-width: 680px;

  margin: 18px auto 0;

  color: var(--text);

  font-size: 16px;
  line-height: 1.75;
}


/* =========================================================
   PAIN SECTION
========================================================= */

.pain-section {
  padding: 95px 0;

  background: var(--light);
}

.pain-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 20px;
}

.pain-card {
  padding: 30px;

  border-radius: var(--radius);

  background: var(--white);

  border: 1px solid rgba(91, 51, 245, 0.08);

  box-shadow: 0 12px 35px rgba(21, 18, 37, 0.04);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.pain-card:hover {
  transform: translateY(-5px);

  box-shadow:
    0 20px 45px rgba(67, 38, 201, 0.09);
}

.pain-card-icon {
  width: 46px;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  border-radius: 14px;

  background: rgba(91, 51, 245, 0.08);

  color: var(--primary);

  font-size: 20px;
}

.pain-card h3 {
  margin-bottom: 10px;

  color: var(--dark);

  font-size: 18px;
  font-weight: 800;
}

.pain-card p {
  color: var(--text);

  font-size: 14px;
  line-height: 1.7;
}


/* =========================================================
   SERVIÇOS
========================================================= */

.services-section {
  background: var(--white);
}

.services-grid {
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 22px;
}

.service-card {
  min-width: 0;
  min-height: 360px;

  display: flex;
  flex-direction: column;

  padding: 30px;

  border-radius: var(--radius);

  background: var(--white);

  border: 1px solid rgba(91, 51, 245, 0.10);

  box-shadow: 0 14px 38px rgba(21, 18, 37, 0.045);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.service-card:hover {
  transform: translateY(-6px);

  border-color: rgba(91, 51, 245, 0.18);

  box-shadow:
    0 24px 55px rgba(67, 38, 201, 0.10);
}

.service-card-icon {
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 22px;

  border-radius: 15px;

  background: linear-gradient(
    135deg,
    rgba(91, 51, 245, 0.10),
    rgba(36, 186, 239, 0.10)
  );

  color: var(--primary);

  font-size: 21px;
}

.service-card h3 {
  margin-bottom: 10px;

  color: var(--dark);

  font-size: 20px;
  font-weight: 800;
}

.service-card > p {
  margin-bottom: 20px;

  color: var(--text);

  font-size: 14px;
  line-height: 1.7;
}

.service-card ul {
  display: grid;
  gap: 9px;
}

.service-card li {
  position: relative;

  padding-left: 18px;

  color: var(--text);

  font-size: 13px;
  line-height: 1.55;
}

.service-card li::before {
  content: "";

  position: absolute;
  left: 0;
  top: 8px;

  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: var(--primary);
}


/* =========================================================
   DIFERENCIAIS
========================================================= */

.dark {
  padding: 110px 0;

  background:
    radial-gradient(
      circle at 15% 20%,
      rgba(91, 51, 245, 0.16),
      transparent 30%
    ),
    radial-gradient(
      circle at 90% 80%,
      rgba(36, 186, 239, 0.10),
      transparent 28%
    ),
    var(--dark);

  color: var(--white);

  scroll-margin-top: 90px;
}

.dark .section-eyebrow {
  color: var(--secondary);
}

.dark .section-header h2 {
  color: var(--white);
}

.dark .section-header p {
  color: rgba(255, 255, 255, 0.62);
}

.differentials-grid {
  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 18px;
}

.differential-card {
  min-width: 0;

  padding: 28px;

  border-radius: 22px;

  background: rgba(255, 255, 255, 0.045);

  border: 1px solid rgba(255, 255, 255, 0.08);

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease;
}

.differential-card:hover {
  transform: translateY(-5px);

  background: rgba(255, 255, 255, 0.065);

  border-color: rgba(255, 255, 255, 0.13);
}

.differential-card-icon {
  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  border-radius: 13px;

  background: rgba(91, 51, 245, 0.22);

  color: var(--secondary);

  font-size: 18px;
}

.differential-card h3 {
  margin-bottom: 9px;

  color: var(--white);

  font-size: 17px;
  font-weight: 800;
}

.differential-card p {
  color: rgba(255, 255, 255, 0.58);

  font-size: 13px;
  line-height: 1.7;
}


/* =========================================================
   SOBRE
========================================================= */

.about-section {
  padding: 110px 0;

  background: var(--white);
}

.about-grid {
  display: grid;

  grid-template-columns:
    minmax(0, 0.9fr)
    minmax(0, 1.1fr);

  align-items: center;

  gap: 80px;
}

.about-content {
  min-width: 0;
}

.about-content .section-eyebrow {
  margin-bottom: 14px;
}

.about-content h2 {
  margin-bottom: 20px;

  color: var(--dark);

  font-size: clamp(32px, 4vw, 48px);
  font-weight: 800;

  line-height: 1.1;
  letter-spacing: -0.035em;
}

.about-content p {
  margin-bottom: 16px;

  color: var(--text);

  font-size: 15px;
  line-height: 1.8;
}

.about-content p:last-child {
  margin-bottom: 0;
}

.about-highlight {
  position: relative;

  padding: 36px;

  border-radius: 28px;

  background:
    linear-gradient(
      145deg,
      rgba(91, 51, 245, 0.08),
      rgba(36, 186, 239, 0.08)
    );

  border: 1px solid rgba(91, 51, 245, 0.10);

  overflow: hidden;
}

.about-highlight::after {
  content: "";

  position: absolute;

  right: -70px;
  bottom: -90px;

  width: 220px;
  height: 220px;

  border-radius: 50%;

  background: rgba(91, 51, 245, 0.08);

  filter: blur(10px);

  pointer-events: none;
}

.about-highlight h3 {
  position: relative;
  z-index: 1;

  margin-bottom: 18px;

  color: var(--dark);

  font-size: 22px;
  font-weight: 800;
}

.about-highlight p {
  position: relative;
  z-index: 1;

  color: var(--text);

  font-size: 14px;
  line-height: 1.75;
}


/* =========================================================
   PROCESSO
========================================================= */

.process-section {
  padding: 110px 0;

  background: var(--light);
}

.process-grid {
  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 20px;
}

.process-card {
  position: relative;

  min-width: 0;

  padding: 28px;

  border-radius: 22px;

  background: var(--white);

  border: 1px solid rgba(91, 51, 245, 0.08);

  box-shadow: 0 12px 30px rgba(21, 18, 37, 0.035);
}

.process-number {
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  border-radius: 12px;

  background: var(--primary);

  color: var(--white);

  font-size: 13px;
  font-weight: 800;
}

.process-card h3 {
  margin-bottom: 9px;

  color: var(--dark);

  font-size: 17px;
  font-weight: 800;
}

.process-card p {
  color: var(--text);

  font-size: 13px;
  line-height: 1.7;
}


/* =========================================================
   PLANOS
========================================================= */

.plans-section {
  padding: 110px 0;

  background: var(--white);
}

.plans-grid {
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 20px;

  align-items: stretch;
}

.plan-card {
  min-width: 0;
  min-height: 570px;

  display: flex;
  flex-direction: column;

  padding: 32px;

  border-radius: 26px;

  background: var(--white);

  border: 1px solid rgba(91, 51, 245, 0.10);

  box-shadow: 0 16px 40px rgba(21, 18, 37, 0.045);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.plan-card:hover {
  transform: translateY(-6px);

  border-color: rgba(91, 51, 245, 0.18);

  box-shadow:
    0 25px 60px rgba(67, 38, 201, 0.10);
}

.plan-card.featured {
  position: relative;

  border: 2px solid var(--primary);

  box-shadow:
    0 22px 55px rgba(91, 51, 245, 0.14);
}

.plan-badge {
  position: absolute;

  top: 18px;
  right: 18px;

  padding: 7px 10px;

  border-radius: 999px;

  background: var(--primary);

  color: var(--white);

  font-size: 10px;
  font-weight: 800;

  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.plan-card h3 {
  margin-bottom: 6px;

  color: var(--dark);

  font-size: 21px;
  font-weight: 800;
}

.plan-card h3 small {
  display: block;

  margin-top: 7px;

  color: var(--muted);

  font-size: 11px;
  font-weight: 600;
}

.plan-description {
  min-height: 68px;

  margin-top: 15px;

  color: var(--text);

  font-size: 13px;
  line-height: 1.65;
}

.plan-price {
  margin: 22px 0;

  color: var(--primary);

  font-size: 30px;
  font-weight: 800;

  line-height: 1;
}

.plan-card ul {
  display: grid;

  gap: 10px;

  margin-bottom: 26px;
}

.plan-card li {
  position: relative;

  padding-left: 21px;

  color: var(--text);

  font-size: 13px;
  line-height: 1.55;
}

.plan-card li::before {
  content: "✓";

  position: absolute;
  left: 0;
  top: 0;

  color: var(--primary);

  font-size: 12px;
  font-weight: 800;
}

.plan-card .btn {
  width: 100%;

  margin-top: auto;
}


/* =========================================================
   FAQ
========================================================= */

.faq-section {
  background: var(--light);
}

.faq {
  width: 100%;
  max-width: 850px;

  margin: 0 auto;
}

.faq details {
  width: 100%;

  border-bottom: 1px solid rgba(91, 51, 245, 0.11);

  height: auto;
  overflow: visible;
}

.faq details:first-child {
  border-top: 1px solid rgba(91, 51, 245, 0.11);
}

.faq summary {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  gap: 20px;

  padding: 22px 0;

  color: var(--dark);

  font-size: 15px;
  font-weight: 700;

  line-height: 1.5;

  cursor: pointer;
  list-style: none;

  transform: none !important;
  rotate: none !important;
}

.faq summary::-webkit-details-marker {
  display: none;
}

.faq summary::marker {
  display: none;
}

.faq summary span:first-child {
  flex: 1 1 auto;
  min-width: 0;

  display: block;

  color: var(--dark);

  line-height: 1.5;

  transform: none !important;
  rotate: none !important;
}

.faq summary span:last-child {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;

  flex: 0 0 28px;

  border-radius: 50%;

  background: rgba(91, 51, 245, 0.07);

  color: var(--primary);

  font-size: 18px;
  font-weight: 400;

  line-height: 1;

  transform: none !important;
  rotate: none !important;

  transition: transform 0.2s ease;
}

.faq details[open] summary span:first-child {
  transform: none !important;
  rotate: none !important;
}

.faq details[open] summary span:last-child {
  transform: rotate(45deg) !important;
}

.faq details p {
  display: block;

  width: 100%;
  max-width: 760px;

  margin: 0;

  padding: 0 50px 22px 0;

  color: var(--text);

  font-size: 14px;
  font-weight: 400;

  line-height: 1.7;

  height: auto;
  min-height: 0;

  overflow: visible;

  white-space: normal;
  word-break: normal;
  overflow-wrap: break-word;

  box-sizing: border-box;

  transform: none !important;
  rotate: none !important;
}


/* =========================================================
   SEO / MARKETING
========================================================= */

.seo-section {
  padding: 110px 0;

  background: var(--white);
}

.seo-box {
  position: relative;

  padding: 52px;

  border-radius: 30px;

  background:
    linear-gradient(
      135deg,
      rgba(91, 51, 245, 0.07),
      rgba(36, 186, 239, 0.07)
    );

  border: 1px solid rgba(91, 51, 245, 0.10);

  overflow: hidden;
}

.seo-box::before {
  content: "";

  position: absolute;

  top: -100px;
  right: -80px;

  width: 240px;
  height: 240px;

  border-radius: 50%;

  background: rgba(91, 51, 245, 0.08);

  filter: blur(10px);

  pointer-events: none;
}

.seo-box h2 {
  position: relative;
  z-index: 1;

  max-width: 720px;

  color: var(--dark);

  font-size: clamp(30px, 4vw, 46px);
  font-weight: 800;

  line-height: 1.1;
  letter-spacing: -0.035em;
}

.seo-box p {
  position: relative;
  z-index: 1;

  max-width: 720px;

  margin-top: 18px;

  color: var(--text);

  font-size: 15px;
  line-height: 1.75;
}


/* =========================================================
   CTA
========================================================= */

.cta {
  padding: 95px 0;

  background:
    radial-gradient(
      circle at 15% 20%,
      rgba(36, 186, 239, 0.16),
      transparent 30%
    ),
    linear-gradient(
      135deg,
      var(--primary-dark),
      var(--primary)
    );

  color: var(--white);

  scroll-margin-top: 90px;
}

.cta-box {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 50px;
}

.cta-content {
  max-width: 720px;
}

.cta h2 {
  color: var(--white);

  font-size: clamp(32px, 4vw, 48px);
  font-weight: 800;

  line-height: 1.1;
  letter-spacing: -0.035em;
}

.cta p {
  margin-top: 16px;

  color: rgba(255, 255, 255, 0.72);

  font-size: 15px;
  line-height: 1.7;
}

.cta .btn-primary {
  flex-shrink: 0;

  background: var(--white);
  color: var(--primary);

  box-shadow: 0 14px 35px rgba(21, 18, 37, 0.14);
}

.cta .btn-primary:hover {
  background: #f8f7ff;
}


/* =========================================================
   FOOTER
========================================================= */

.footer {
  padding: 55px 0 28px;

  background: var(--dark);

  color: rgba(255, 255, 255, 0.62);
}

.footer-grid {
  display: grid;

  grid-template-columns:
    minmax(0, 1.3fr)
    minmax(160px, 0.7fr)
    minmax(220px, 1fr);

  gap: 50px;

  padding-bottom: 42px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-brand {
  min-width: 0;
}

.footer-brand img {
  width: auto;
  height: 38px;

  margin-bottom: 18px;
}

.footer-brand p {
  max-width: 390px;

  color: rgba(255, 255, 255, 0.52);

  font-size: 13px;
  line-height: 1.7;
}

.footer h3 {
  margin-bottom: 17px;

  color: var(--white);

  font-size: 13px;
  font-weight: 800;
}

.footer-links {
  display: grid;
  gap: 10px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.56);

  font-size: 13px;

  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--white);
}

.footer-contact {
  display: grid;
  gap: 10px;
}

.footer-contact a,
.footer-contact span {
  color: rgba(255, 255, 255, 0.56);

  font-size: 13px;

  overflow-wrap: anywhere;

  transition: color 0.2s ease;
}

.footer-contact a:hover {
  color: var(--white);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  padding-top: 24px;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.38);

  font-size: 11px;
}


/* =========================================================
   WHATSAPP FLUTUANTE
========================================================= */

.whatsapp-float {
  position: fixed;

  right: 24px;
  bottom: 24px;

  z-index: 999;

  width: 56px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #25D366;

  color: var(--white);

  box-shadow:
    0 12px 30px rgba(37, 211, 102, 0.28);

  font-size: 24px;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.whatsapp-float:hover {
  transform: translateY(-4px);

  box-shadow:
    0 16px 36px rgba(37, 211, 102, 0.35);
}


/* =========================================================
   REVEAL
========================================================= */

.reveal {
  opacity: 0;
  visibility: hidden;

  transform: translateY(18px);

  transition:
    opacity 0.6s ease,
    transform 0.6s ease,
    visibility 0.6s ease;
}

.reveal.visible {
  opacity: 1;
  visibility: visible;

  transform: none;
}


/* =========================================================
   RESPONSIVIDADE
========================================================= */

@media (max-width: 1100px) {

  .hero-grid {
    grid-template-columns:
      minmax(0, 1fr)
      minmax(360px, 0.85fr);

    gap: 45px;
  }

  .hero h1 {
    font-size: clamp(40px, 5vw, 58px);
  }

  .differentials-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .about-grid {
    gap: 50px;
  }

  .process-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .plans-grid {
    gap: 16px;
  }

  .plan-card {
    padding: 28px;
  }

}


@media (max-width: 900px) {

  .nav {
    position: absolute;

    top: calc(100% + 8px);
    left: 20px;
    right: 20px;

    display: none;
    flex-direction: column;
    align-items: stretch;

    gap: 0;

    padding: 10px;

    border-radius: 18px;

    background: rgba(255, 255, 255, 0.98);

    border: 1px solid rgba(91, 51, 245, 0.10);

    box-shadow:
      0 18px 45px rgba(21, 18, 37, 0.10);

    max-height: calc(100vh - 100px);

    overflow-y: auto;
  }

  .nav.active {
    display: flex;
  }

  .nav a {
    padding: 13px 12px;

    border-radius: 10px;
  }

  .nav a:hover {
    background: var(--light);
  }

  .nav a::after {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .hero-grid {
    grid-template-columns: 1fr;

    gap: 55px;
  }

  .hero-content {
    max-width: 760px;
  }

  .dashboard {
    margin: 0 auto;
  }

  .pain-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .services-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .about-grid {
    grid-template-columns: 1fr;
  }

  .plans-grid {
    grid-template-columns: 1fr;
    max-width: 680px;
    margin: 0 auto;
  }

  .plan-card {
    min-height: auto;
  }

  .plan-description {
    min-height: 0;
  }

  .cta-box {
    align-items: flex-start;
    flex-direction: column;
  }

  .footer-grid {
    grid-template-columns:
      1fr
      1fr;
  }

}


@media (max-width: 760px) {

  .container {
    width: min(100% - 30px, var(--container));
  }

  .header .container {
    min-height: 70px;
  }

  .logo img {
    height: 38px;
  }

  .section {
    padding: 80px 0;
  }

  .pain-section,
  .dark,
  .about-section,
  .process-section,
  .plans-section,
  .seo-section {
    padding: 80px 0;
  }

  .hero {
    min-height: auto;

    padding: 125px 0 75px;
  }

  .hero h1 {
    font-size: clamp(38px, 10vw, 52px);
  }

  .hero p {
    font-size: 15px;
  }

  .hero-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .hero-actions .btn {
    width: 100%;
  }

  .hero-trust {
    gap: 8px;
  }

  .dashboard {
    padding: 22px;

    border-radius: 23px;
  }

  .dashboard-metrics {
    gap: 8px;
  }

  .dashboard-metric {
    padding: 15px 10px;
  }

  .dashboard-metric strong {
    font-size: 21px;
  }

  .dashboard-chart {
    height: 150px;
  }

  .pain-grid,
  .services-grid,
  .differentials-grid,
  .process-grid {
    grid-template-columns: 1fr;
  }

  .pain-card,
  .service-card,
  .differential-card,
  .process-card {
    padding: 26px;
  }

  .section-header {
    margin-bottom: 42px;
  }

  .section-header h2,
  .about-content h2 {
    font-size: 34px;
  }

  .seo-box {
    padding: 34px 26px;

    border-radius: 24px;
  }

  .cta {
    padding: 75px 0;
  }

  .cta-box {
    gap: 30px;
  }

  .cta .btn {
    width: 100%;
  }

  .footer-grid {
    grid-template-columns: 1fr;

    gap: 35px;
  }

  .footer-bottom {
    align-items: flex-start;
    flex-direction: column;
  }

}


@media (max-width: 600px) {

  .container {
    width: min(100% - 24px, var(--container));
  }

  .hero {
    padding-top: 115px;
  }

  .hero h1 {
    font-size: 36px;

    letter-spacing: -0.04em;
  }

  .hero-eyebrow {
    font-size: 10px;
  }

  .hero p {
    margin-top: 18px;

    font-size: 14px;
    line-height: 1.7;
  }

  .hero-trust {
    align-items: stretch;
    flex-direction: column;
  }

  .trust-pill {
    justify-content: center;
  }

  .dashboard {
    padding: 18px;

    border-radius: 20px;
  }

  .dashboard-header {
    align-items: flex-start;
    flex-direction: column;

    gap: 8px;
  }

  .dashboard-metrics {
    grid-template-columns: 1fr;
  }

  .dashboard-metric {
    padding: 14px;
  }

  .dashboard-metric strong {
    font-size: 23px;
  }

  .dashboard-chart {
    height: 125px;

    gap: 6px;
  }

  .dashboard-footer {
    align-items: flex-start;
    flex-direction: column;

    gap: 6px;
  }

  .section-header h2,
  .about-content h2,
  .seo-box h2,
  .cta h2 {
    font-size: 30px;
  }

  .section-header p {
    font-size: 14px;
  }

  .service-card {
    min-height: auto;
  }

  .plan-card {
    padding: 26px 22px;
  }

  .plan-card h3 {
    font-size: 20px;
  }

  .plan-price {
    font-size: 28px;
  }

  .faq summary {
    gap: 14px;

    padding: 19px 0;

    font-size: 14px;
  }

  .faq summary span:last-child {
    width: 26px;
    height: 26px;

    flex-basis: 26px;
  }

  .faq details p {
    padding: 0 40px 20px 0;

    font-size: 13px;
  }

  .whatsapp-float {
    right: 16px;
    bottom: 16px;

    width: 52px;
    height: 52px;

    font-size: 22px;
  }

}


/* =========================================================
   REDUÇÃO DE MOVIMENTO
========================================================= */

@media (prefers-reduced-motion: reduce) {

  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .reveal {
    opacity: 1;
    visibility: visible;
    transform: none;
  }

}
