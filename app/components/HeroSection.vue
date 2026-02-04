<template>
  <section id="hero" class="hero">
    <div class="container hero__container">
      <div class="hero__content">
        <p class="hero__eyebrow mono">Olá, eu sou</p>
        <h1 class="hero__title">Vittor de Aguiar</h1>
        <p class="hero__role">Desenvolvedor Back-end / Full Stack</p>
        <p class="hero__lead">
          Atuo como desenvolvimento de software, integrações e automações! Gosto de transformar requisitos em soluções
          simples, seguras e fáceis de evoluir dentro do time.
        </p>

        <div class="hero__actions">
          <a href="#experience" class="btn btn--primary">Ver experiência</a>
          <a href="#contact" class="btn btn--text">Falar comigo</a>
        </div>
      </div>

      <aside class="hero__panel">
        <div class="panel__header">
          <span class="panel__label mono">Resumo</span>
          <span class="status-pill">
            <span class="status-dot" />
            Aberto a oportunidades
          </span>
        </div>

        <ul class="panel__list">
          <li>
            <span class="panel__term">Experiência</span>
            <strong>3+ anos com desenvolvimento de software</strong>
          </li>
          <li>
            <span class="panel__term">Foco</span>
            <strong>Back-end, integrações e dados</strong>
          </li>
          <li>
            <span class="panel__term">Stack</span>
            <strong>.NET, Node.js, React, Vue, PostgreSQL</strong>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: var(--header-height);
}

.hero__container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--spacing-2xl);
  max-width: 1100px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.hero__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-md);
}

.hero__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.75rem;
  color: var(--color-text-secondary);
}

.hero__title {
  font-size: clamp(2.6rem, 5vw, 3.8rem);
  margin-bottom: 0;
}

.hero__role {
  font-size: var(--font-size-xl);
  color: var(--color-primary);
  font-weight: 600;
}

.hero__lead {
  color: var(--color-text-secondary);
  font-size: var(--font-size-lg);
  max-width: 520px;
}

.hero__actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-sm);
}

.hero__panel {
  align-self: center;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0));
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-lg);
}

.panel__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
}

.panel__label {
  color: var(--color-text-secondary);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: var(--border-radius-full);
  background-color: rgba(61, 214, 140, 0.12);
  color: var(--color-success);
  font-size: 0.8rem;
  font-family: var(--font-mono);
}

.status-dot {
  width: 8px;
  height: 8px;
  background-color: var(--color-success);
  border-radius: 50%;
  box-shadow: 0 0 0 0 var(--color-success-soft);
  animation: pulse-success 2s infinite;
}

.panel__list {
  list-style: none;
  display: grid;
  gap: var(--spacing-md);
  padding: 0;
  margin: 0 0 var(--spacing-lg);
}

.panel__list li {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.panel__term {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-secondary);
}

.panel__list strong {
  color: var(--color-text-heading);
  font-weight: 600;
}

.panel__footer {
  border-top: 1px solid var(--color-border);
  padding-top: var(--spacing-md);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  font-family: var(--font-mono);
}

@media (max-width: 768px) {
  .hero {
    padding-top: calc(var(--header-height) + var(--spacing-md));
  }

  .hero__container {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .hero__lead {
    font-size: var(--font-size-base);
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
    gap: var(--spacing-sm);
  }
}
</style>
