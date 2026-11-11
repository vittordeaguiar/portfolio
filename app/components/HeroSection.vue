<template>
  <section id="top" class="hero">
    <h1 class="hero__name">Vittor de Aguiar</h1>
    <p class="hero__lead">
      Sou desenvolvedor back-end na
      <strong>TentosCap</strong>, a instituição financeira da 3tentos. Trabalho no sistema interno que
      opera o banco e nas integrações com os parceiros que intermediam as transações.
    </p>
    <p class="hero__meta muted">Antes disso: ERPs para prefeituras, liderança técnica e produtos com IA.</p>
  </section>
</template>

<style scoped>
.hero {
  padding: 72px 0 80px;
}

.hero__name {
  font-size: clamp(2.75rem, 8vw, 4.5rem);
  line-height: 1;
  letter-spacing: -0.025em;
  margin-bottom: 32px;
}

.hero__lead {
  font-family: var(--font-serif);
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  line-height: 1.45;
  max-width: 34ch;
}

.hero__lead strong {
  font-weight: 500;
}

.hero__meta {
  margin-top: 24px;
  font-size: 0.9375rem;
}

@media (max-width: 600px) {
  .hero {
    padding: 40px 0 56px;
  }
}
</style>
