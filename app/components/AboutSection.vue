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
            Sou um <span class="highlight">Desenvolvedor Full Stack</span> com mais de 3 anos de experiência construindo
            sistemas de gestão empresarial e soluções corporativas de grande escala.
          </p>

          <p>
            Minha trajetória inclui o desenvolvimento de ERPs utilizados por prefeituras,
            <span class="highlight">liderança técnica</span> de equipes de desenvolvimento, e criação de soluções com
            <span class="highlight">Inteligência Artificial</span> para automação de processos comerciais.
          </p>

          <p>
            O que me diferencia é a combinação de expertise técnica com visão estratégica de negócio. Não apenas escrevo
            código — entendo o problema, projeto a solução arquitetural e entrego
            <span class="highlight">resultados mensuráveis</span>.
          </p>

          <p>
            Atualmente atuo como freelancer, ajudando empresas a otimizar processos e escalar operações através de
            tecnologia bem aplicada.
          </p>
        </div>

        <div class="about__stats">
          <div class="stat-card">
            <span class="stat__value">3+ anos</span>
            <span class="stat__label">Experiência </span>
            <span class="stat__sub">em desenvolvimento de software</span>
          </div>
          <div class="stat-card">
            <span class="stat__value">Tech Lead</span>
            <span class="stat__label">Liderança de equipes </span>
            <span class="stat__sub">Gestão técnica</span>
          </div>
          <div class="stat-card">
            <span class="stat__value">End-to-End</span>
            <span class="stat__label">Do requisito à deploy </span>
            <span class="stat__sub">Visão completa do ciclo</span>
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
