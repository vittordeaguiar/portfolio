<template>
  <section class="section results">
    <div class="container">
      <div class="section__header">
        <span class="section__number">04.</span>
        <h2 class="section__title">Resultados Entregues</h2>
      </div>

      <div class="results__grid">
        <div class="result-card">
          <div class="result-icon"><i class="fas fa-code"></i></div>
          <span class="result-metric">Múltiplas</span>
          <p>Funcionalidades implementadas e desenvolvidas</p>
        </div>
        <div class="result-card">
          <div class="result-icon"><i class="fas fa-users"></i></div>
          <span class="result-metric">Liderança</span>
          <p>Gestão de equipes técnicas e mentoria</p>
        </div>
        <div class="result-card">
          <div class="result-icon"><i class="fas fa-tasks"></i></div>
          <span class="result-metric">Organização</span>
          <p>Planejamento e gestão de projetos complexos</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.results__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  width: 100%;
}

.result-card {
  background-color: var(--color-surface);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-border);
  text-align: center;
  transition: transform var(--transition-normal);
}

.result-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary);
}

.result-icon {
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.result-metric {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-heading);
  margin-bottom: var(--spacing-xs);
}

@media (max-width: 1024px) {
  .results__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .results__grid {
    grid-template-columns: 1fr;
  }
}
</style>
