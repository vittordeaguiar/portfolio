<template>
  <section id="about" class="section about">
    <div class="container">
      <div class="section__header">
        <span class="section__number">01.</span>
        <h2 class="section__title">Sobre Mim</h2>
      </div>

      <div class="about__grid">
        <div class="about__text">
          <p>
            Sou um <span class="highlight">desenvolvedor full stack</span> com foco em back-end e mais de 3 anos de
            experiência desenvolvendo soluções de software.
          </p>

          <p>
            Minha trajetória inclui o desenvolvimento e manutenção de ERPs utilizados por prefeituras, liderança técnica de equipes
            e criação de soluções com inteligência artificial para automação de processos.
          </p>
        </div>

        <div class="about__stats">
          <div class="stat-card">
            <span class="stat__value">3+ anos</span>
            <span class="stat__label">Experiência </span>
            <span class="stat__sub">em desenvolvimento de soluções eficazes</span>
          </div>
          <div class="stat-card">
            <span class="stat__value">Arquitetura</span>
            <span class="stat__label">Integrações e dados </span>
            <span class="stat__sub">APIs e sistemas</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: var(--spacing-2xl);
  align-items: start;
  width: 100%;
}

.about__text p {
  margin-bottom: var(--spacing-md);
  color: var(--color-text-secondary);
}

.highlight {
  color: var(--color-primary);
}

.about__stats {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.stat-card {
  background-color: var(--color-surface);
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-normal);
}

.stat-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary);
  box-shadow: var(--shadow-glow);
}

.stat__value {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-text-heading);
  display: block;
}

.stat__label {
  font-family: var(--font-mono);
  color: var(--color-primary);
  font-size: var(--font-size-sm);
}

.stat__sub {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

@media (max-width: 1024px) {
  .about__grid {
    grid-template-columns: 1fr;
  }
}
</style>
