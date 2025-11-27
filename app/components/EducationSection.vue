<template>
  <section class="section education">
    <div class="container">
      <div class="section__header">
        <span class="section__number">05.</span>
        <h2 class="section__title">Formação</h2>
      </div>

      <div class="education__grid">
        <div class="service-card">
          <div class="service-header">
            <i class="fas fa-graduation-cap service-icon"></i>
            <h3>Ciência da Computação</h3>
          </div>
          <p>Bacharelado (2022 — Em andamento)<br />URI — Campus Santo Ângelo</p>
        </div>
        <div class="service-card">
          <div class="service-header">
            <i class="fas fa-certificate service-icon"></i>
            <h3>Técnico em Informática</h3>
          </div>
          <p>Manutenção e Suporte (2019 — 2021)<br />Instituto Federal Farroupilha</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-md);
  width: 100%;
}

@media (max-width: 768px) {
  .education__grid {
    grid-template-columns: 1fr;
  }
}

.service-card {
  background-color: var(--color-surface);
  padding: var(--spacing-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-normal);
}

.service-card:hover {
  background-color: var(--color-surface-light);
  transform: translateY(-5px);
}

.service-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.service-icon {
  color: var(--color-primary);
  font-size: 1.5rem;
}

.service-card h3 {
  margin: 0;
  font-size: var(--font-size-lg);
}
</style>
